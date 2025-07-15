use actix_web::{HttpResponse, Result};
use serde_json::Value;

pub struct InputValidator;

impl InputValidator {
    /// Validate and sanitize design title
    pub fn validate_design_title(title: &str) -> Result<String, String> {
        // Remove dangerous characters that could cause XSS
        let sanitized = title
            .chars()
            .filter(|c| c.is_alphanumeric() || c.is_whitespace() || ".-_()[]{}".contains(*c))
            .collect::<String>();

        // Trim whitespace
        let trimmed = sanitized.trim();

        // Check length constraints
        if trimmed.is_empty() {
            return Err("Title cannot be empty".to_string());
        }

        if trimmed.len() > 100 {
            return Err("Title cannot exceed 100 characters".to_string());
        }

        Ok(trimmed.to_string())
    }

    /// Validate JSON canvas data
    pub fn validate_canvas_data(data: &Value) -> Result<(), String> {
        // Check if it's a valid JSON object
        if !data.is_object() {
            return Err("Canvas data must be a valid JSON object".to_string());
        }

        // Check size constraints (prevent extremely large payloads)
        let json_string = serde_json::to_string(data).map_err(|_| "Invalid JSON structure")?;
        if json_string.len() > 10_000_000 {
            // 10MB limit
            return Err("Canvas data too large (max 10MB)".to_string());
        }

        Ok(())
    }

    /// Validate canvas background color
    pub fn validate_canvas_background(background: &str) -> Result<String, String> {
        // Allow common color formats: hex, rgb, rgba, named colors
        let sanitized = background
            .chars()
            .filter(|c| c.is_alphanumeric() || "#(),.%- ".contains(*c))
            .collect::<String>();

        if sanitized.len() > 50 {
            return Err("Background color string too long".to_string());
        }

        Ok(sanitized)
    }

    /// Validate canvas size
    pub fn validate_canvas_size(size: &Value) -> Result<(), String> {
        if let Some(obj) = size.as_object() {
            // Check for required width and height
            if let (Some(width), Some(height)) = (obj.get("width"), obj.get("height")) {
                if let (Some(w), Some(h)) = (width.as_f64(), height.as_f64()) {
                    if w > 0.0 && h > 0.0 && w <= 10000.0 && h <= 10000.0 {
                        return Ok(());
                    }
                }
            }
        }

        Err("Invalid canvas size (must have width and height between 1-10000)".to_string())
    }

    /// Sanitize user input for XSS prevention
    pub fn sanitize_user_input(input: &str) -> String {
        input
            .replace('<', "&lt;")
            .replace('>', "&gt;")
            .replace('"', "&quot;")
            .replace('\'', "&#x27;")
            .replace('&', "&amp;")
    }

    /// Validate email format (basic)
    pub fn validate_email(email: &str) -> Result<String, String> {
        let trimmed = email.trim();

        if trimmed.is_empty() {
            return Err("Email cannot be empty".to_string());
        }

        if !trimmed.contains('@') || !trimmed.contains('.') {
            return Err("Invalid email format".to_string());
        }

        if trimmed.len() > 255 {
            return Err("Email too long".to_string());
        }

        Ok(trimmed.to_string())
    }
}

/// Middleware helper to validate request body size
pub fn validate_request_size(size: usize) -> Result<(), actix_web::Error> {
    const MAX_SIZE: usize = 50 * 1024 * 1024; // 50MB limit

    if size > MAX_SIZE {
        return Err(actix_web::error::ErrorPayloadTooLarge(
            "Request body too large",
        ));
    }

    Ok(())
}

/// Helper to create validation error response
pub fn validation_error(message: &str) -> HttpResponse {
    HttpResponse::BadRequest().json(serde_json::json!({
        "error": "Validation Error",
        "message": message
    }))
}
