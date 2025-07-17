use actix_multipart::Multipart;
use actix_web::{HttpRequest, HttpResponse, Result, web};
use futures_util::TryStreamExt;
use sea_orm::{
    ActiveModelTrait, ColumnTrait, DatabaseConnection, EntityTrait, PaginatorTrait, QueryFilter, QueryOrder, Set,
};
use serde::{Deserialize, Serialize};
use std::io::Write;
use time::OffsetDateTime;
use tracing;
use uuid::Uuid;

use crate::auth::middleware::get_current_user;
use crate::entities::image;
use crate::middleware::CsrfProtector;
use actix_session::Session;

#[derive(Debug, Serialize, Deserialize)]
pub struct ImageResponse {
    pub id: String,
    pub filename: String,
    pub content_type: String,
    pub file_size: i64,
    pub width: i32,
    pub height: i32,
    pub url: String,
    pub alt_text: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ImagesListResponse {
    pub images: Vec<ImageResponse>,
    pub total: u64,
    pub page: u64,
    pub per_page: u64,
}

impl From<image::Model> for ImageResponse {
    fn from(image: image::Model) -> Self {
        Self {
            id: image.id.to_string(),
            filename: image.filename,
            content_type: image.content_type,
            file_size: image.file_size,
            width: image.width,
            height: image.height,
            url: image.url,
            alt_text: image.alt_text,
            created_at: image
                .created_at
                .format(&time::format_description::well_known::Rfc3339)
                .unwrap_or_else(|_| image.created_at.to_string()),
        }
    }
}

// POST /api/images - Upload a new image
pub async fn upload_image(
    req: HttpRequest,
    session: Session,
    db: web::Data<DatabaseConnection>,
    mut payload: Multipart,
) -> Result<HttpResponse> {
    tracing::info!("Starting image upload");

    // Validate CSRF token
    if let Some(csrf_token) = req
        .headers()
        .get("X-CSRF-Token")
        .and_then(|h| h.to_str().ok())
    {
        if !CsrfProtector::validate_token(&session, csrf_token) {
            tracing::warn!("Invalid CSRF token for upload_image");
            return Ok(CsrfProtector::csrf_error_response());
        }
    } else {
        tracing::warn!("Missing CSRF token for upload_image");
        return Ok(CsrfProtector::csrf_error_response());
    }

    let current_user = get_current_user(&req, db.as_ref()).await.ok_or_else(|| {
        tracing::error!("Authentication required for upload_image");
        actix_web::error::ErrorUnauthorized("Authentication required")
    })?;

    // Process multipart form data
    while let Some(mut field) = payload.try_next().await? {
        let content_disposition = field.content_disposition();
        let filename = content_disposition.and_then(|cd| cd.get_filename()).map(|s| s.to_string());
        
        if let Some(filename) = filename {
            let content_type = field.content_type().unwrap_or(&mime::APPLICATION_OCTET_STREAM).to_string();
            
            // Validate file type
            if !is_valid_image_type(&content_type) {
                return Ok(HttpResponse::BadRequest().json(serde_json::json!({
                    "error": "Invalid file type",
                    "message": "Only JPEG, PNG, GIF, and WebP images are allowed"
                })));
            }

            // Generate unique filename
            let file_id = Uuid::new_v4();
            let file_extension = get_file_extension(&content_type);
            let storage_filename = format!("{}.{}", file_id, file_extension);
            let storage_path = format!("uploads/images/{}", storage_filename);
            
            // Create uploads directory if it doesn't exist
            std::fs::create_dir_all("uploads/images").map_err(|e| {
                tracing::error!("Failed to create uploads directory: {}", e);
                actix_web::error::ErrorInternalServerError("Failed to create upload directory")
            })?;

            // Write file to disk
            let mut file = std::fs::File::create(&storage_path).map_err(|e| {
                tracing::error!("Failed to create file: {}", e);
                actix_web::error::ErrorInternalServerError("Failed to create file")
            })?;

            let mut file_size = 0i64;
            let max_size = 10 * 1024 * 1024; // 10MB limit

            // Read and write file data
            while let Some(chunk) = field.try_next().await? {
                file_size += chunk.len() as i64;
                
                if file_size > max_size {
                    // Clean up partial file
                    let _ = std::fs::remove_file(&storage_path);
                    return Ok(HttpResponse::BadRequest().json(serde_json::json!({
                        "error": "File too large",
                        "message": "Image files must be smaller than 10MB"
                    })));
                }

                file.write_all(&chunk).map_err(|e| {
                    tracing::error!("Failed to write file chunk: {}", e);
                    actix_web::error::ErrorInternalServerError("Failed to write file")
                })?;
            }

            // Get image dimensions
            let (width, height) = get_image_dimensions(&storage_path).map_err(|e| {
                // Clean up file on error
                let _ = std::fs::remove_file(&storage_path);
                tracing::error!("Failed to get image dimensions: {}", e);
                actix_web::error::ErrorBadRequest("Invalid image file")
            })?;

            // Generate URL (for now, just use the storage path)
            let url = format!("/api/images/{}", file_id);

            // Save to database
            let new_image = image::ActiveModel {
                id: Set(file_id),
                user_id: Set(current_user.id),
                filename: Set(filename.to_string()),
                content_type: Set(content_type),
                file_size: Set(file_size),
                width: Set(width),
                height: Set(height),
                storage_path: Set(storage_path),
                url: Set(url),
                alt_text: Set(None),
                created_at: Set(OffsetDateTime::now_utc()),
                updated_at: Set(OffsetDateTime::now_utc()),
            };

            let image_model = new_image.insert(db.as_ref()).await.map_err(|e| {
                tracing::error!("Failed to save image to database: {}", e);
                actix_web::error::ErrorInternalServerError("Failed to save image")
            })?;

            tracing::info!("Image uploaded successfully: {}", image_model.id);

            let response = ImageResponse::from(image_model);
            return Ok(HttpResponse::Created().json(response));
        }
    }

    Ok(HttpResponse::BadRequest().json(serde_json::json!({
        "error": "No file provided",
        "message": "Please provide an image file to upload"
    })))
}

// GET /api/images - List user's uploaded images
pub async fn list_images(
    req: HttpRequest,
    db: web::Data<DatabaseConnection>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> Result<HttpResponse> {
    let current_user = get_current_user(&req, db.as_ref()).await.ok_or_else(|| {
        actix_web::error::ErrorUnauthorized("Authentication required")
    })?;

    let page: u64 = query.get("page").and_then(|p| p.parse().ok()).unwrap_or(1);
    let per_page: u64 = query
        .get("per_page")
        .and_then(|p| p.parse().ok())
        .unwrap_or(20);

    let total = image::Entity::find()
        .filter(image::Column::UserId.eq(current_user.id))
        .count(db.as_ref())
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Database error: {}", e))
        })?;

    let images = image::Entity::find()
        .filter(image::Column::UserId.eq(current_user.id))
        .order_by_desc(image::Column::CreatedAt)
        .paginate(db.as_ref(), per_page)
        .fetch_page(page - 1)
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Database error: {}", e))
        })?;

    let image_responses: Vec<ImageResponse> = images.into_iter().map(ImageResponse::from).collect();

    let response = ImagesListResponse {
        images: image_responses,
        total,
        page,
        per_page,
    };

    Ok(HttpResponse::Ok().json(response))
}

// GET /api/images/{id} - Get image file
pub async fn get_image(
    _req: HttpRequest,
    path: web::Path<String>,
    db: web::Data<DatabaseConnection>,
) -> Result<HttpResponse> {
    let image_id = Uuid::parse_str(&path.into_inner())
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid image ID"))?;

    let image_model = image::Entity::find_by_id(image_id)
        .one(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?
        .ok_or_else(|| actix_web::error::ErrorNotFound("Image not found"))?;

    // Check if file exists
    if !std::path::Path::new(&image_model.storage_path).exists() {
        tracing::error!("Image file not found: {}", image_model.storage_path);
        return Err(actix_web::error::ErrorNotFound("Image file not found"));
    }

    // Read and serve the file
    let file_data = std::fs::read(&image_model.storage_path).map_err(|e| {
        tracing::error!("Failed to read image file: {}", e);
        actix_web::error::ErrorInternalServerError("Failed to read image file")
    })?;

    Ok(HttpResponse::Ok()
        .content_type(image_model.content_type)
        .body(file_data))
}

// Helper functions
fn is_valid_image_type(content_type: &str) -> bool {
    matches!(
        content_type,
        "image/jpeg" | "image/jpg" | "image/png" | "image/gif" | "image/webp"
    )
}

fn get_file_extension(content_type: &str) -> &str {
    match content_type {
        "image/jpeg" | "image/jpg" => "jpg",
        "image/png" => "png",
        "image/gif" => "gif",
        "image/webp" => "webp",
        _ => "bin",
    }
}

fn get_image_dimensions(path: &str) -> Result<(i32, i32), Box<dyn std::error::Error>> {
    // Use imagesize crate to get dimensions without loading the full image
    let dimensions = imagesize::size(path)?;
    
    Ok((dimensions.width as i32, dimensions.height as i32))
}