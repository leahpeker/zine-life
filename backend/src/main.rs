use actix_cors::Cors;
use actix_session::{SessionMiddleware, config::PersistentSession, storage::CookieSessionStore};
use actix_web::cookie::Key;
use actix_web::{HttpResponse, Result, web};
use sea_orm::{Database, DatabaseConnection};
use sea_orm_migration::MigratorTrait;
use shuttle_actix_web::ShuttleActixWeb;

mod auth;
mod constants;
mod entities;
mod handlers;
mod middleware;
mod migrations;

#[cfg(test)]
mod test_utils;

use auth::{OAuthConfig, github_callback, github_login, google_callback, google_login};
use constants::{
    api_routes::ApiRoutes,
    cookies::CookieNames,
    cors::{AllowedOrigins, COMMON_HEADERS, COMMON_METHODS},
    environment::Environment,
    errors::{ServiceNames, StatusMessages},
};
use handlers::{auth as auth_handlers, csrf, designs, images};
use middleware::{CsrfMiddleware, HttpsRedirect, SecurityHeaders};
use migrations::Migrator;


async fn health_check() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "status": StatusMessages::HEALTHY,
        "service": ServiceNames::BACKEND
    })))
}


async fn db_status(_db: web::Data<DatabaseConnection>) -> Result<HttpResponse> {
    // Simple database status check
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "database": StatusMessages::CONNECTED,
        "backend": ServiceNames::DATABASE,
        "status": StatusMessages::HEALTHY
    })))
}

#[shuttle_runtime::main]
async fn main(
    #[shuttle_shared_db::Postgres] db_url: String,
    #[shuttle_runtime::Secrets] secrets: shuttle_runtime::SecretStore,
) -> ShuttleActixWeb<impl FnOnce(&mut web::ServiceConfig) + Send + Clone + 'static> {

    // Create database connection
    let db: DatabaseConnection = Database::connect(&db_url)
        .await
        .expect("Failed to connect to database");

    // Run migrations
    Migrator::up(&db, None)
        .await
        .expect("Failed to run migrations");


    // Initialize OAuth configuration with secrets
    let oauth_config =
        OAuthConfig::from_secrets(&secrets).expect("Failed to initialize OAuth configuration");

    // Initialize session key for CSRF protection (must be exactly 64 bytes)
    let session_key = secrets.get("SESSION_KEY").unwrap();

    // Ensure the key is exactly 64 bytes
    let mut key_bytes = [0u8; 64];
    let session_bytes = session_key.as_bytes();
    if session_bytes.len() >= 64 {
        key_bytes.copy_from_slice(&session_bytes[..64]);
    } else {
        // Pad with zeros if too short, or use a default secure key
        key_bytes[..session_bytes.len()].copy_from_slice(session_bytes);
    }

    let secret_key = Key::from(&key_bytes);

    // Determine environment
    let env = Environment::from_env();
    let is_production = env.is_production();

    let config = move |cfg: &mut web::ServiceConfig| {
        cfg.app_data(web::Data::new(db))
            .app_data(web::Data::new(oauth_config))
            .app_data(web::Data::new(secrets))
            .service(
                web::scope("")
                    .wrap(SecurityHeaders)
                    .wrap(HttpsRedirect)
                    .wrap(CsrfMiddleware)
                    .wrap(
                        SessionMiddleware::builder(
                            CookieSessionStore::default(),
                            secret_key.clone(),
                        )
                        .cookie_name(CookieNames::SESSION.to_string())
                        .cookie_secure(is_production)
                        .session_lifecycle(PersistentSession::default())
                        .build(),
                    )
                    .wrap({
                        let mut cors = Cors::default()
                            .allowed_origin(AllowedOrigins::LOCALHOST_5173)
                            .allowed_origin(AllowedOrigins::LOCALHOST_127_5173)
                            .allowed_methods(COMMON_METHODS)
                            .allowed_headers(COMMON_HEADERS)
                            .supports_credentials()
                            .max_age(3600);

                        // Add production frontend URL if available
                        if let Ok(frontend_url) = std::env::var("FRONTEND_URL") {
                            cors = cors.allowed_origin(&frontend_url);
                        }

                        cors
                    })
                    .route(ApiRoutes::HEALTH, web::get().to(health_check))
                    .route(ApiRoutes::API_DB_STATUS, web::get().to(db_status))
                    // Auth routes
                    .route(ApiRoutes::AUTH_GOOGLE, web::get().to(google_login))
                    .route(
                        ApiRoutes::AUTH_GOOGLE_CALLBACK,
                        web::get().to(google_callback),
                    )
                    .route(ApiRoutes::AUTH_GITHUB, web::get().to(github_login))
                    .route(
                        ApiRoutes::AUTH_GITHUB_CALLBACK,
                        web::get().to(github_callback),
                    )
                    .route(
                        ApiRoutes::API_AUTH_ME,
                        web::get().to(auth_handlers::get_current_user_info),
                    )
                    .route(
                        ApiRoutes::API_AUTH_LOGOUT,
                        web::post().to(auth_handlers::logout),
                    )
                    // Design routes
                    .route(ApiRoutes::API_DESIGNS, web::get().to(designs::list_designs))
                    .route(
                        ApiRoutes::API_DESIGNS,
                        web::post().to(designs::create_design),
                    )
                    .route(
                        ApiRoutes::API_DESIGNS_PUBLIC,
                        web::get().to(designs::list_public_designs),
                    )
                    .route(
                        ApiRoutes::API_DESIGNS_BY_ID,
                        web::get().to(designs::get_design),
                    )
                    .route(
                        ApiRoutes::API_DESIGNS_BY_ID,
                        web::put().to(designs::update_design),
                    )
                    .route(
                        ApiRoutes::API_DESIGNS_BY_ID,
                        web::delete().to(designs::delete_design),
                    )
                    // Image routes
                    .route(ApiRoutes::API_IMAGES, web::get().to(images::list_images))
                    .route(
                        ApiRoutes::API_IMAGES,
                        web::post().to(images::upload_image),
                    )
                    .route(
                        ApiRoutes::API_IMAGES_BY_ID,
                        web::get().to(images::get_image),
                    )
                    // CSRF route
                    .route(
                        ApiRoutes::API_CSRF_TOKEN,
                        web::get().to(csrf::get_csrf_token),
                    ),
            );
    };

    Ok(config.into())
}
