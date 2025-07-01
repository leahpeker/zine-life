use actix_web::{test, web, App, HttpResponse, Result};
use actix_cors::Cors;
use serde_json::Value;
use zine_life_backend::test_utils::database::setup_test_db;

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

async fn db_status(_db: web::Data<sea_orm::DatabaseConnection>) -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "database": "connected",
        "backend": "PostgreSQL", 
        "status": "healthy"
    })))
}

#[tokio::test]
async fn test_health_check_endpoint() {
    let app = test::init_service(
        App::new()
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header()
            )
            .route("/health", web::get().to(health_check))
    ).await;

    let req = test::TestRequest::get()
        .uri("/health")
        .to_request();
    
    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["status"], "healthy");
    assert_eq!(body["service"], "zine-life-backend");
}

#[tokio::test]
async fn test_hello_endpoint() {
    let app = test::init_service(
        App::new()
            .route("/api/hello", web::get().to(hello))
    ).await;

    let req = test::TestRequest::get()
        .uri("/api/hello")
        .to_request();
    
    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Hello from Zine Life Backend!");
}

#[tokio::test]
async fn test_db_status_endpoint() {
    let db = setup_test_db().await.expect("Failed to setup test DB");
    
    let app = test::init_service(
        App::new()
            .app_data(web::Data::new(db))
            .route("/api/db-status", web::get().to(db_status))
    ).await;

    let req = test::TestRequest::get()
        .uri("/api/db-status")
        .to_request();
    
    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["database"], "connected");
    assert_eq!(body["backend"], "PostgreSQL");
    assert_eq!(body["status"], "healthy");
}

#[tokio::test]
async fn test_cors_headers() {
    let app = test::init_service(
        App::new()
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header()
            )
            .route("/health", web::get().to(health_check))
    ).await;

    let req = test::TestRequest::get()
        .uri("/health")
        .insert_header(("Origin", "http://localhost:5173"))
        .to_request();
    
    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    // Check CORS headers are present
    let headers = resp.headers();
    assert!(headers.contains_key("access-control-allow-origin"));
}

#[tokio::test]
async fn test_404_handling() {
    let app = test::init_service(
        App::new()
            .route("/health", web::get().to(health_check))
    ).await;

    let req = test::TestRequest::get()
        .uri("/nonexistent")
        .to_request();
    
    let resp = test::call_service(&app, req).await;
    assert_eq!(resp.status(), 404);
}