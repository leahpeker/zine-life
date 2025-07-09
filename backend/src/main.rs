use actix_web::{web, HttpResponse, Result};
use actix_cors::Cors;
use shuttle_actix_web::ShuttleActixWeb;
use sea_orm::{Database, DatabaseConnection};
use sea_orm_migration::MigratorTrait;

mod entities;
mod migrations;
mod auth;
mod handlers;
mod constants;

#[cfg(test)]
mod test_utils;

use migrations::Migrator;
use auth::{OAuthConfig, google_login, google_callback};
use handlers::{designs, auth as auth_handlers};
use constants::{
    api_routes::ApiRoutes,
    cors::{COMMON_METHODS, COMMON_HEADERS, AllowedOrigins},
    errors::{StatusMessages, ServiceNames}
};

async fn health_check() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "status": StatusMessages::HEALTHY,
        "service": ServiceNames::BACKEND
    })))
}

async fn hello() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "message": "Hello from Zine Life Backend!"
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
    println!("Starting Zine Life Backend with database connection...");
    println!("Database URL: {}", db_url);
    
    // Create database connection
    let db: DatabaseConnection = Database::connect(&db_url)
        .await
        .expect("Failed to connect to database");
    
    // Run migrations
    println!("Running database migrations...");
    Migrator::up(&db, None)
        .await
        .expect("Failed to run migrations");
    
    println!("Database setup complete!");
    
    // Initialize OAuth configuration with secrets
    let oauth_config = OAuthConfig::from_secrets(&secrets)
        .expect("Failed to initialize OAuth configuration");
    
    let config = move |cfg: &mut web::ServiceConfig| {
        cfg.app_data(web::Data::new(db))
            .app_data(web::Data::new(oauth_config))
            .app_data(web::Data::new(secrets))
            .service(
                web::scope("")
                    .wrap(
                        Cors::default()
                            .allowed_origin(AllowedOrigins::LOCALHOST_5173)
                            .allowed_origin(AllowedOrigins::LOCALHOST_127_5173)
                            .allowed_methods(COMMON_METHODS)
                            .allowed_headers(COMMON_HEADERS)
                            .supports_credentials()
                            .max_age(3600)
                    )
                    .route(ApiRoutes::HEALTH, web::get().to(health_check))
                    .route(ApiRoutes::API_HELLO, web::get().to(hello))
                    .route(ApiRoutes::API_DB_STATUS, web::get().to(db_status))
                    // Auth routes
                    .route(ApiRoutes::AUTH_GOOGLE, web::get().to(google_login))
                    .route(ApiRoutes::AUTH_GOOGLE_CALLBACK, web::get().to(google_callback))
                    .route(ApiRoutes::API_AUTH_ME, web::get().to(auth_handlers::get_current_user_info))
                    .route(ApiRoutes::API_AUTH_LOGOUT, web::post().to(auth_handlers::logout))
                    // Design routes
                    .route(ApiRoutes::API_DESIGNS, web::get().to(designs::list_designs))
                    .route(ApiRoutes::API_DESIGNS, web::post().to(designs::create_design))
                    .route(ApiRoutes::API_DESIGNS_PUBLIC, web::get().to(designs::list_public_designs))
                    .route(ApiRoutes::API_DESIGNS_BY_ID, web::get().to(designs::get_design))
                    .route(ApiRoutes::API_DESIGNS_BY_ID, web::put().to(designs::update_design))
                    .route(ApiRoutes::API_DESIGNS_BY_ID, web::delete().to(designs::delete_design))
            );
    };

    Ok(config.into())
}