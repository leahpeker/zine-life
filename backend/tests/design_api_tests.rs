use actix_web::{test, web, App};
use serde_json::Value;
use zine_life_backend::handlers::designs;

#[tokio::test]
async fn test_public_designs_endpoint() {
    let app = test::init_service(
        App::new()
            .route("/api/designs/public", web::get().to(designs::list_public_designs))
    ).await;

    let req = test::TestRequest::get()
        .uri("/api/designs/public")
        .to_request();
    
    let resp = test::call_service(&app, req).await;
    assert!(resp.status().is_success());

    let body: Value = test::read_body_json(resp).await;
    assert!(body["designs"].is_array());
    assert!(body["total"].is_number());
    assert!(body["page"].is_number());
    assert!(body["per_page"].is_number());
}