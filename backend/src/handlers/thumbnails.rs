use actix_files::NamedFile;
use actix_web::{web, HttpRequest, HttpResponse, Result};

use crate::services::ThumbnailService;

/// Serve thumbnail image for a design
pub async fn serve_thumbnail(
    path: web::Path<String>,
    thumbnail_service: web::Data<ThumbnailService>,
    req: HttpRequest,
) -> Result<HttpResponse> {
    let design_id = path.into_inner();
    
    // Get thumbnail path from service
    if let Some(thumbnail_path) = thumbnail_service.get_thumbnail_path(&design_id).await {
        // Serve the file directly
        match NamedFile::open(&thumbnail_path) {
            Ok(file) => Ok(file.into_response(&req)),
            Err(_) => Ok(HttpResponse::NotFound().json(serde_json::json!({
                "error": "Thumbnail not found"
            })))
        }
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Thumbnail not found"
        })))
    }
}