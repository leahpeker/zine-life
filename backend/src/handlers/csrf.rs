use crate::middleware::CsrfProtector;
use actix_session::Session;
use actix_web::{HttpResponse, Result};

/// GET /api/csrf-token - Get a new CSRF token
pub async fn get_csrf_token(session: Session) -> Result<HttpResponse> {
    match CsrfProtector::generate_token(&session) {
        Ok(token) => Ok(HttpResponse::Ok().json(serde_json::json!({
            "csrf_token": token,
            "expires_in": 900 // 15 minutes (session timeout)
        }))),
        Err(err) => Ok(HttpResponse::InternalServerError().json(serde_json::json!({
            "error": "CSRF Token Generation Failed",
            "message": err
        }))),
    }
}
