use actix_web::{HttpRequest, HttpResponse, Result, web};
use sea_orm::{DatabaseConnection, EntityTrait};
use crate::entities::user;
use crate::auth::jwt::verify_jwt_token;
use crate::constants::{
    cookies::CookieNames,
    errors::AuthErrors
};
use uuid::Uuid;

// GET /api/auth/me - Get current user info
pub async fn get_current_user_info(
    req: HttpRequest,
    db: web::Data<DatabaseConnection>,
) -> Result<HttpResponse> {
    // Try to get token from cookie
    let token = match req.cookie(CookieNames::AUTH_TOKEN) {
        Some(cookie) => cookie.value().to_string(),
        None => return Err(actix_web::error::ErrorUnauthorized(AuthErrors::NOT_AUTHENTICATED)),
    };

    // Verify JWT token
    let claims = verify_jwt_token(&token)
        .map_err(|_| actix_web::error::ErrorUnauthorized(AuthErrors::INVALID_TOKEN))?;

    // Parse user ID and get user from database
    let user_id = Uuid::parse_str(&claims.sub)
        .map_err(|_| actix_web::error::ErrorUnauthorized(AuthErrors::INVALID_USER_ID))?;

    let user = user::Entity::find_by_id(user_id)
        .one(db.as_ref())
        .await
        .map_err(|_| actix_web::error::ErrorInternalServerError("Database error"))?
        .ok_or_else(|| actix_web::error::ErrorUnauthorized(AuthErrors::USER_NOT_FOUND))?;

    let user_info = serde_json::json!({
        "id": user.id.to_string(),
        "email": user.email,
        "name": user.name,
        "avatar_url": user.avatar_url,
        "provider": user.provider
    });
    
    Ok(HttpResponse::Ok().json(user_info))
}

// POST /api/auth/logout - Logout (invalidate session)
pub async fn logout() -> Result<HttpResponse> {
    // Clear the auth cookie by setting it to expire immediately
    Ok(HttpResponse::Ok()
        .cookie(
            actix_web::cookie::Cookie::build("auth_token", "")
                .http_only(true)
                .secure(false) // Set to true in production with HTTPS
                .same_site(actix_web::cookie::SameSite::Lax)
                .path("/")
                .max_age(actix_web::cookie::time::Duration::seconds(0)) // Expire immediately
                .finish()
        )
        .json(serde_json::json!({
            "message": "Logged out successfully"
        })))
}