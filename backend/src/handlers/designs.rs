use actix_web::{web, HttpRequest, HttpResponse, Result};
use sea_orm::{DatabaseConnection, EntityTrait, ActiveModelTrait, Set, ColumnTrait, QueryFilter, QueryOrder, PaginatorTrait};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use time::OffsetDateTime;
use tracing;

use crate::entities::{design, user};
use crate::auth::middleware::get_current_user;

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateDesignRequest {
    pub title: String,
    pub canvas_data: serde_json::Value,
    pub canvas_background: String,
    pub canvas_size: serde_json::Value,
    pub is_public: Option<bool>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateDesignRequest {
    pub title: Option<String>,
    pub canvas_data: Option<serde_json::Value>,
    pub canvas_background: Option<String>,
    pub canvas_size: Option<serde_json::Value>,
    pub is_public: Option<bool>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DesignResponse {
    pub id: String,
    pub user_id: String,
    pub title: String,
    pub canvas_data: serde_json::Value,
    pub canvas_background: String,
    pub canvas_size: serde_json::Value,
    pub is_public: bool,
    pub created_at: String,
    pub updated_at: String,
    pub user: Option<UserInfo>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserInfo {
    pub id: String,
    pub name: String,
    pub avatar_url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DesignsListResponse {
    pub designs: Vec<DesignResponse>,
    pub total: u64,
    pub page: u64,
    pub per_page: u64,
}

impl From<(design::Model, Option<user::Model>)> for DesignResponse {
    fn from((design, user): (design::Model, Option<user::Model>)) -> Self {
        Self {
            id: design.id.to_string(),
            user_id: design.user_id.to_string(),
            title: design.title,
            canvas_data: design.canvas_data,
            canvas_background: design.canvas_background,
            canvas_size: design.canvas_size,
            is_public: design.is_public,
            created_at: design.created_at.format(&time::format_description::well_known::Rfc3339).unwrap_or_else(|_| design.created_at.to_string()),
            updated_at: design.updated_at.format(&time::format_description::well_known::Rfc3339).unwrap_or_else(|_| design.updated_at.to_string()),
            user: user.map(|u| UserInfo {
                id: u.id.to_string(),
                name: u.name,
                avatar_url: u.avatar_url,
            }),
        }
    }
}

// GET /api/designs - List all public designs + user's private designs
pub async fn list_designs(
    req: HttpRequest,
    db: web::Data<DatabaseConnection>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> Result<HttpResponse> {
    let page: u64 = query.get("page").and_then(|p| p.parse().ok()).unwrap_or(1);
    let per_page: u64 = query.get("per_page").and_then(|p| p.parse().ok()).unwrap_or(20);
    
    let current_user = get_current_user(&req, db.as_ref()).await;
    
    // Build query: public designs + user's private designs if authenticated
    let mut query_builder = design::Entity::find();
    
    if let Some(user) = current_user {
        // Show public designs OR user's own designs
        query_builder = query_builder.filter(
            design::Column::IsPublic.eq(true)
                .or(design::Column::UserId.eq(user.id))
        );
    } else {
        // Show only public designs for anonymous users
        query_builder = query_builder.filter(design::Column::IsPublic.eq(true));
    }
    
    let total = query_builder.clone().count(db.as_ref()).await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
    
    let designs = query_builder
        .order_by_desc(design::Column::UpdatedAt)
        .paginate(db.as_ref(), per_page)
        .fetch_page(page - 1)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
    
    // Get user info for each design
    let mut design_responses = Vec::new();
    for design in designs {
        let user = user::Entity::find_by_id(design.user_id)
            .one(db.as_ref())
            .await
            .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
        
        design_responses.push(DesignResponse::from((design, user)));
    }
    
    let response = DesignsListResponse {
        designs: design_responses,
        total,
        page,
        per_page,
    };
    
    Ok(HttpResponse::Ok().json(response))
}

// GET /api/designs/{id} - Get a specific design
pub async fn get_design(
    req: HttpRequest,
    path: web::Path<String>,
    db: web::Data<DatabaseConnection>,
) -> Result<HttpResponse> {
    let design_id = Uuid::parse_str(&path.into_inner())
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid design ID"))?;
    
    let design = design::Entity::find_by_id(design_id)
        .one(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?
        .ok_or_else(|| actix_web::error::ErrorNotFound("Design not found"))?;
    
    // Check access permissions
    let current_user = get_current_user(&req, db.as_ref()).await;
    if !design.is_public {
        match current_user {
            Some(user) if user.id == design.user_id => {
                // User owns the design
            }
            _ => return Err(actix_web::error::ErrorForbidden("Access denied")),
        }
    }
    
    // Get user info
    let user = user::Entity::find_by_id(design.user_id)
        .one(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
    
    let response = DesignResponse::from((design, user));
    Ok(HttpResponse::Ok().json(response))
}

// POST /api/designs - Create a new design (requires authentication)
pub async fn create_design(
    req: HttpRequest,
    db: web::Data<DatabaseConnection>,
    data: web::Json<CreateDesignRequest>,
) -> Result<HttpResponse> {
    tracing::info!("Creating new design with data: {:?}", data);
    
    let current_user = get_current_user(&req, db.as_ref()).await
        .ok_or_else(|| {
            tracing::error!("Authentication required for create_design");
            actix_web::error::ErrorUnauthorized("Authentication required")
        })?;
    
    tracing::info!("User authenticated: {}", current_user.id);
    
    let new_design = design::ActiveModel {
        id: Set(Uuid::new_v4()),
        user_id: Set(current_user.id),
        title: Set(data.title.clone()),
        canvas_data: Set(data.canvas_data.clone()),
        canvas_background: Set(data.canvas_background.clone()),
        canvas_size: Set(data.canvas_size.clone()),
        is_public: Set(data.is_public.unwrap_or(false)),
        created_at: Set(OffsetDateTime::now_utc()),
        updated_at: Set(OffsetDateTime::now_utc()),
    };
    
    tracing::info!("Attempting to insert design into database");
    
    let design = new_design.insert(db.as_ref()).await
        .map_err(|e| {
            tracing::error!("Failed to create design: {}", e);
            actix_web::error::ErrorInternalServerError(format!("Failed to create design: {}", e))
        })?;
    
    tracing::info!("Design created successfully with id: {}", design.id);
    
    let response = DesignResponse::from((design, Some(current_user)));
    Ok(HttpResponse::Created().json(response))
}

// PUT /api/designs/{id} - Update a design (requires ownership)
pub async fn update_design(
    req: HttpRequest,
    path: web::Path<String>,
    db: web::Data<DatabaseConnection>,
    data: web::Json<UpdateDesignRequest>,
) -> Result<HttpResponse> {
    let design_id_str = path.into_inner();
    tracing::info!("Updating design with id: {} and data: {:?}", design_id_str, data);
    
    let current_user = get_current_user(&req, db.as_ref()).await
        .ok_or_else(|| {
            tracing::error!("Authentication required for update_design");
            actix_web::error::ErrorUnauthorized("Authentication required")
        })?;
    
    tracing::info!("User authenticated: {}", current_user.id);
    
    let design_id = Uuid::parse_str(&design_id_str)
        .map_err(|_| {
            tracing::error!("Invalid design ID format: {}", design_id_str);
            actix_web::error::ErrorBadRequest("Invalid design ID")
        })?;
    
    tracing::info!("Looking up design with UUID: {}", design_id);
    
    let design = design::Entity::find_by_id(design_id)
        .one(db.as_ref())
        .await
        .map_err(|e| {
            tracing::error!("Database error when finding design: {}", e);
            actix_web::error::ErrorInternalServerError(format!("Database error: {}", e))
        })?
        .ok_or_else(|| {
            tracing::error!("Design not found with id: {}", design_id);
            actix_web::error::ErrorNotFound("Design not found")
        })?;
    
    tracing::info!("Found design, checking ownership");
    
    // Check ownership
    if design.user_id != current_user.id {
        tracing::error!("User {} attempted to edit design {} owned by {}", current_user.id, design_id, design.user_id);
        return Err(actix_web::error::ErrorForbidden("You can only edit your own designs"));
    }
    
    tracing::info!("Ownership verified, updating design");
    
    let mut active_design: design::ActiveModel = design.into();
    
    // Update fields if provided
    if let Some(title) = &data.title {
        active_design.title = Set(title.clone());
    }
    if let Some(canvas_data) = &data.canvas_data {
        active_design.canvas_data = Set(canvas_data.clone());
    }
    if let Some(canvas_background) = &data.canvas_background {
        active_design.canvas_background = Set(canvas_background.clone());
    }
    if let Some(canvas_size) = &data.canvas_size {
        active_design.canvas_size = Set(canvas_size.clone());
    }
    if let Some(is_public) = data.is_public {
        active_design.is_public = Set(is_public);
    }
    active_design.updated_at = Set(OffsetDateTime::now_utc());
    
    tracing::info!("Saving updated design to database");
    
    let updated_design = active_design.update(db.as_ref()).await
        .map_err(|e| {
            tracing::error!("Failed to update design: {}", e);
            actix_web::error::ErrorInternalServerError(format!("Failed to update design: {}", e))
        })?;
    
    tracing::info!("Design updated successfully");
    
    let response = DesignResponse::from((updated_design, Some(current_user)));
    Ok(HttpResponse::Ok().json(response))
}

// DELETE /api/designs/{id} - Delete a design (requires ownership)
pub async fn delete_design(
    req: HttpRequest,
    path: web::Path<String>,
    db: web::Data<DatabaseConnection>,
) -> Result<HttpResponse> {
    let current_user = get_current_user(&req, db.as_ref()).await
        .ok_or_else(|| actix_web::error::ErrorUnauthorized("Authentication required"))?;
    
    let design_id = Uuid::parse_str(&path.into_inner())
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid design ID"))?;
    
    let design = design::Entity::find_by_id(design_id)
        .one(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?
        .ok_or_else(|| actix_web::error::ErrorNotFound("Design not found"))?;
    
    // Check ownership
    if design.user_id != current_user.id {
        return Err(actix_web::error::ErrorForbidden("You can only delete your own designs"));
    }
    
    design::Entity::delete_by_id(design_id)
        .exec(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to delete design: {}", e)))?;
    
    Ok(HttpResponse::NoContent().finish())
}

// GET /api/designs/public - Get public designs for gallery
pub async fn list_public_designs(
    db: web::Data<DatabaseConnection>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> Result<HttpResponse> {
    let page: u64 = query.get("page").and_then(|p| p.parse().ok()).unwrap_or(1);
    let per_page: u64 = query.get("per_page").and_then(|p| p.parse().ok()).unwrap_or(20);
    
    let total = design::Entity::find()
        .filter(design::Column::IsPublic.eq(true))
        .count(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
    
    let designs = design::Entity::find()
        .filter(design::Column::IsPublic.eq(true))
        .order_by_desc(design::Column::UpdatedAt)
        .paginate(db.as_ref(), per_page)
        .fetch_page(page - 1)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
    
    // Get user info for each design
    let mut design_responses = Vec::new();
    for design in designs {
        let user = user::Entity::find_by_id(design.user_id)
            .one(db.as_ref())
            .await
            .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;
        
        design_responses.push(DesignResponse::from((design, user)));
    }
    
    let response = DesignsListResponse {
        designs: design_responses,
        total,
        page,
        per_page,
    };
    
    Ok(HttpResponse::Ok().json(response))
}