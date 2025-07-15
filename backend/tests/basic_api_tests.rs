use actix_web::{App, HttpResponse, Result, test, web};
use serde_json::Value;

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

#[tokio::test]
async fn test_health_endpoint() {
    let app = test::init_service(App::new().route("/health", web::get().to(health_check))).await;

    let req = test::TestRequest::get().uri("/health").to_request();

    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["status"], "healthy");
    assert_eq!(body["service"], "zine-life-backend");
}

#[tokio::test]
async fn test_hello_endpoint() {
    let app = test::init_service(App::new().route("/api/hello", web::get().to(hello))).await;

    let req = test::TestRequest::get().uri("/api/hello").to_request();

    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Hello from Zine Life Backend!");
}

#[tokio::test]
async fn test_404_response() {
    let app = test::init_service(App::new().route("/health", web::get().to(health_check))).await;

    let req = test::TestRequest::get().uri("/nonexistent").to_request();

    let resp = test::call_service(&app, req).await;
    assert_eq!(resp.status(), 404);
}
