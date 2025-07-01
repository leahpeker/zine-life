use actix_web::{HttpRequest, HttpResponse, Result};
use crate::auth::middleware::get_current_user;

// GET /api/auth/me - Get current user info
pub async fn get_current_user_info(req: HttpRequest) -> Result<HttpResponse> {
    match get_current_user(&req) {
        Some(user) => {
            let user_info = serde_json::json!({
                "id": user.id.to_string(),
                "email": user.email,
                "name": user.name,
                "avatar_url": user.avatar_url,
                "provider": user.provider,
                "created_at": user.created_at.to_string()
            });
            Ok(HttpResponse::Ok().json(user_info))
        }
        None => Err(actix_web::error::ErrorUnauthorized("Not authenticated")),
    }
}

// POST /api/auth/logout - Logout (invalidate session)
pub async fn logout() -> Result<HttpResponse> {
    // For now, just return success - client should remove the token
    // In a more complex setup, we could invalidate the session in the database
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "message": "Logged out successfully"
    })))
}