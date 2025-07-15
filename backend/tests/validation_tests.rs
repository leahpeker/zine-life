use serde_json::json;
use zine_life_backend::middleware::validation::InputValidator;

#[test]
fn test_validate_design_title() {
    // Valid titles
    assert!(InputValidator::validate_design_title("My Cool Design").is_ok());
    assert!(InputValidator::validate_design_title("Design-1 (v2)").is_ok());

    // Invalid titles
    assert!(InputValidator::validate_design_title("").is_err());
    assert!(InputValidator::validate_design_title("   ").is_err());
    assert!(InputValidator::validate_design_title(&"x".repeat(101)).is_err());

    // XSS attempt
    let result = InputValidator::validate_design_title("<script>alert('xss')</script>");
    assert!(result.is_ok());
    assert!(!result.unwrap().contains("<script>"));
}

#[test]
fn test_validate_canvas_data() {
    // Valid JSON
    assert!(InputValidator::validate_canvas_data(&json!({"width": 800, "height": 600})).is_ok());

    // Invalid JSON (not an object)
    assert!(InputValidator::validate_canvas_data(&json!("string")).is_err());
    assert!(InputValidator::validate_canvas_data(&json!(123)).is_err());
}

#[test]
fn test_sanitize_user_input() {
    let input = "<script>alert('xss')</script>";
    let sanitized = InputValidator::sanitize_user_input(input);
    assert_eq!(
        sanitized,
        "&lt;script&gt;alert(&#x27;xss&#x27;)&lt;/script&gt;"
    );
}

#[test]
fn test_validate_email() {
    // Valid emails
    assert!(InputValidator::validate_email("test@example.com").is_ok());
    assert!(InputValidator::validate_email("  user@domain.co.uk  ").is_ok());

    // Invalid emails
    assert!(InputValidator::validate_email("").is_err());
    assert!(InputValidator::validate_email("notanemail").is_err());
    assert!(InputValidator::validate_email("@domain.com").is_err());
    assert!(InputValidator::validate_email("user@").is_err());
}

#[test]
fn test_validate_canvas_background() {
    // Valid backgrounds
    assert!(InputValidator::validate_canvas_background("#ffffff").is_ok());
    assert!(InputValidator::validate_canvas_background("rgb(255, 255, 255)").is_ok());
    assert!(InputValidator::validate_canvas_background("rgba(255, 255, 255, 0.5)").is_ok());
    assert!(InputValidator::validate_canvas_background("blue").is_ok());

    // Invalid backgrounds
    assert!(InputValidator::validate_canvas_background(&"x".repeat(51)).is_err());
}

#[test]
fn test_validate_canvas_size() {
    // Valid sizes
    assert!(InputValidator::validate_canvas_size(&json!({"width": 800, "height": 600})).is_ok());
    assert!(InputValidator::validate_canvas_size(&json!({"width": 1920, "height": 1080})).is_ok());

    // Invalid sizes
    assert!(InputValidator::validate_canvas_size(&json!({"width": 0, "height": 600})).is_err());
    assert!(InputValidator::validate_canvas_size(&json!({"width": 800, "height": 0})).is_err());
    assert!(InputValidator::validate_canvas_size(&json!({"width": 15000, "height": 600})).is_err());
    assert!(InputValidator::validate_canvas_size(&json!({"width": 800})).is_err()); // missing height
    assert!(InputValidator::validate_canvas_size(&json!("invalid")).is_err());
}
