use actix_web::{web, HttpResponse, Result};
use actix_cors::Cors;
use shuttle_actix_web::ShuttleActixWeb;
use sea_orm::{Database, DatabaseConnection};
use sea_orm_migration::MigratorTrait;

mod entities;
mod migrations;
mod auth;
mod handlers;

#[cfg(test)]
mod test_utils;

use migrations::Migrator;
use auth::{OAuthConfig, google_login, google_callback};
use handlers::{designs, auth as auth_handlers};

async fn health_check() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "status": "healthy",
        "service": "zine-life-backend"
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
        "database": "connected",
        "backend": "PostgreSQL",
        "status": "healthy"
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
                            .allow_any_origin()
                            .allow_any_method()
                            .allow_any_header()
                    )
                    .route("/health", web::get().to(health_check))
                    .route("/api/hello", web::get().to(hello))
                    .route("/api/db-status", web::get().to(db_status))
                    // Auth routes
                    .route("/auth/google", web::get().to(google_login))
                    .route("/auth/google/callback", web::get().to(google_callback))
                    .route("/api/auth/me", web::get().to(auth_handlers::get_current_user_info))
                    .route("/api/auth/logout", web::post().to(auth_handlers::logout))
                    // Design routes
                    .route("/api/designs", web::get().to(designs::list_designs))
                    .route("/api/designs", web::post().to(designs::create_design))
                    .route("/api/designs/public", web::get().to(designs::list_public_designs))
                    .route("/api/designs/{id}", web::get().to(designs::get_design))
                    .route("/api/designs/{id}", web::put().to(designs::update_design))
                    .route("/api/designs/{id}", web::delete().to(designs::delete_design))
            );
    };

    Ok(config.into())
}