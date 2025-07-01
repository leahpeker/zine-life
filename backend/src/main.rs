use actix_web::{web, HttpResponse, Result};
use actix_cors::Cors;
use shuttle_actix_web::ShuttleActixWeb;

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

#[shuttle_runtime::main]
async fn main(
    #[shuttle_shared_db::Postgres] _db_url: String,
) -> ShuttleActixWeb<impl FnOnce(&mut web::ServiceConfig) + Send + Clone + 'static> {
    // We'll set up SeaORM connection here later
    println!("Starting Zine Life Backend with database pool...");
    
    let config = move |cfg: &mut web::ServiceConfig| {
        cfg.service(
            web::scope("")
                .wrap(
                    Cors::default()
                        .allow_any_origin()
                        .allow_any_method()
                        .allow_any_header()
                )
                .route("/health", web::get().to(health_check))
                .route("/api/hello", web::get().to(hello))
        );
    };

    Ok(config.into())
}