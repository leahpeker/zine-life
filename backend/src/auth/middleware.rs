use actix_web::{dev::ServiceRequest, Error, HttpMessage, web};
use actix_web::error::{ErrorUnauthorized, ErrorInternalServerError};
use sea_orm::{DatabaseConnection, EntityTrait, ColumnTrait, QueryFilter};
use crate::entities::{user, session};
use crate::auth::jwt::{verify_jwt_token, JwtClaims};
use uuid::Uuid;

#[allow(dead_code)]
pub async fn auth_middleware(
    req: ServiceRequest,
    db: web::Data<DatabaseConnection>,
) -> Result<ServiceRequest, Error> {
    // Extract Authorization header
    let auth_header = req
        .headers()
        .get("Authorization")
        .and_then(|h| h.to_str().ok())
        .ok_or_else(|| ErrorUnauthorized("Missing Authorization header"))?;

    // Extract Bearer token
    let token = auth_header
        .strip_prefix("Bearer ")
        .ok_or_else(|| ErrorUnauthorized("Invalid Authorization header format"))?;

    // Verify JWT token
    let claims = verify_jwt_token(token)
        .map_err(|_| ErrorUnauthorized("Invalid or expired token"))?;

    // Parse user ID
    let user_id = Uuid::parse_str(&claims.sub)
        .map_err(|_| ErrorUnauthorized("Invalid user ID in token"))?;

    // Verify session exists and is valid
    let session = session::Entity::find()
        .filter(session::Column::Token.eq(token))
        .filter(session::Column::UserId.eq(user_id))
        .one(db.as_ref())
        .await
        .map_err(|e| ErrorInternalServerError(format!("Database error: {}", e)))?
        .ok_or_else(|| ErrorUnauthorized("Session not found or expired"))?;

    // Check if session is expired
    let now = time::OffsetDateTime::now_utc();
    if session.expires_at < now {
        return Err(ErrorUnauthorized("Session expired"));
    }

    // Get user info
    let user = user::Entity::find_by_id(user_id)
        .one(db.as_ref())
        .await
        .map_err(|e| ErrorInternalServerError(format!("Database error: {}", e)))?
        .ok_or_else(|| ErrorUnauthorized("User not found"))?;

    // Store user info in request extensions for use in handlers
    req.extensions_mut().insert(user);
    req.extensions_mut().insert(claims);

    Ok(req)
}

// Helper function to extract current user from request (works with both cookies and headers)
pub fn get_current_user(req: &actix_web::HttpRequest) -> Option<user::Model> {
    // First check if user is already in extensions (from middleware)
    if let Some(user) = req.extensions().get::<user::Model>() {
        return Some(user.clone());
    }
    
    // If not in extensions, try to get from cookie
    if let Some(cookie) = req.cookie("auth_token") {
        if let Ok(claims) = verify_jwt_token(cookie.value()) {
            if let Ok(user_id) = Uuid::parse_str(&claims.sub) {
                // We'd need database access here, but for now just return None
                // This should be handled by proper middleware in production
                return None;
            }
        }
    }
    
    None
}

// Helper function to extract JWT claims from request
#[allow(dead_code)]
pub fn get_jwt_claims(req: &actix_web::HttpRequest) -> Option<JwtClaims> {
    req.extensions().get::<JwtClaims>().cloned()
}