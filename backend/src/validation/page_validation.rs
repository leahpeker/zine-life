use serde::{Deserialize, Serialize};
use validator::{Validate, ValidationError};
use serde_json::Value;

/// Validate a page structure with comprehensive rules
#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
#[serde(rename_all = "camelCase")]
pub struct ValidatedPage {
    #[validate(length(min = 1, message = "Page ID cannot be empty"))]
    pub id: String,
    
    #[validate(range(min = 1, message = "Page number must be at least 1"))]
    pub page_number: u32,
    
    #[validate(range(min = 100, max = 10000, message = "Canvas width must be between 100 and 10000 pixels"))]
    pub canvas_width: u32,
    
    #[validate(range(min = 100, max = 10000, message = "Canvas height must be between 100 and 10000 pixels"))]
    pub canvas_height: u32,
    
    #[validate(custom(function = "validate_color"))]
    pub canvas_background_color: String,
    
    #[validate(custom(function = "validate_elements"))]
    pub elements: Vec<Value>,
}

/// Custom validator for color strings - only hex and RGB/RGBA
fn validate_color(color: &str) -> Result<(), ValidationError> {
    // Allow hex colors (#RGB, #RRGGBB, #RRGGBBAA)
    if color.starts_with('#') {
        let hex_part = &color[1..];
        if hex_part.len() == 3 || hex_part.len() == 6 || hex_part.len() == 8 {
            if hex_part.chars().all(|c| c.is_ascii_hexdigit()) {
                return Ok(());
            }
        }
    }
    
    // Allow rgb() and rgba() functions
    if (color.starts_with("rgb(") || color.starts_with("rgba(")) && color.ends_with(')') {
        return Ok(());
    }
    
    Err(ValidationError::new("invalid_color"))
}

/// Custom validator for elements array
fn validate_elements(elements: &[Value]) -> Result<(), ValidationError> {
    // Limit number of elements per page
    if elements.len() > 10000 {
        return Err(ValidationError::new("too_many_elements"));
    }
    
    // Validate each element structure
    for (index, element) in elements.iter().enumerate() {
        if !element.is_object() {
            let mut error = ValidationError::new("invalid_element_structure");
            error.message = Some(format!("Element at index {} is not an object", index).into());
            return Err(error);
        }
        
        // Check required fields
        let obj = element.as_object().unwrap();
        let required_fields = ["id", "type", "x", "y"];
        
        for field in required_fields {
            if !obj.contains_key(field) {
                let mut error = ValidationError::new("missing_required_field");
                error.message = Some(format!("Element at index {} missing required field: {}", index, field).into());
                return Err(error);
            }
        }
        
        // Validate specific element types
        if let Some(element_type) = obj.get("type").and_then(|v| v.as_str()) {
            match element_type {
                "shape" => {
                    if let Err(e) = validate_shape_element(obj, index) {
                        return Err(e);
                    }
                },
                "text" => {
                    if let Err(e) = validate_text_element(obj, index) {
                        return Err(e);
                    }
                },
                "image" => {
                    if let Err(e) = validate_image_element(obj, index) {
                        return Err(e);
                    }
                },
                _ => {
                    let mut error = ValidationError::new("unknown_element_type");
                    error.message = Some(format!("Unknown element type '{}' at index {}", element_type, index).into());
                    return Err(error);
                }
            }
        }
    }
    
    Ok(())
}

fn validate_shape_element(obj: &serde_json::Map<String, Value>, index: usize) -> Result<(), ValidationError> {
    // Shapes should have shapeType
    if !obj.contains_key("shapeType") {
        let mut error = ValidationError::new("missing_shape_type");
        error.message = Some(format!("Shape element at index {} missing shapeType", index).into());
        return Err(error);
    }
    
    // Validate fill color if present
    if let Some(fill) = obj.get("fill").and_then(|v| v.as_str()) {
        if let Err(_) = validate_color(fill) {
            let mut error = ValidationError::new("invalid_fill_color");
            error.message = Some(format!("Invalid fill color in shape at index {}", index).into());
            return Err(error);
        }
    }
    
    // Validate stroke color if present
    if let Some(stroke) = obj.get("stroke").and_then(|v| v.as_str()) {
        if let Err(_) = validate_color(stroke) {
            let mut error = ValidationError::new("invalid_stroke_color");
            error.message = Some(format!("Invalid stroke color in shape at index {}", index).into());
            return Err(error);
        }
    }
    
    Ok(())
}

fn validate_text_element(obj: &serde_json::Map<String, Value>, index: usize) -> Result<(), ValidationError> {
    // Text should have textType and text content
    let required_fields = ["textType", "text"];
    for field in required_fields {
        if !obj.contains_key(field) {
            let mut error = ValidationError::new("missing_text_field");
            error.message = Some(format!("Text element at index {} missing {}", index, field).into());
            return Err(error);
        }
    }
    
    // Validate text length
    if let Some(text) = obj.get("text").and_then(|v| v.as_str()) {
        if text.len() > 10000 {
            let mut error = ValidationError::new("text_too_long");
            error.message = Some(format!("Text at index {} exceeds 10000 characters", index).into());
            return Err(error);
        }
    }
    
    // Validate font size if present
    if let Some(font_size) = obj.get("fontSize").and_then(|v| v.as_f64()) {
        if font_size < 1.0 || font_size > 500.0 {
            let mut error = ValidationError::new("invalid_font_size");
            error.message = Some(format!("Font size at index {} must be between 1 and 500", index).into());
            return Err(error);
        }
    }
    
    // Validate fill and stroke colors if present
    if let Some(fill) = obj.get("fill").and_then(|v| v.as_str()) {
        if let Err(_) = validate_color(fill) {
            let mut error = ValidationError::new("invalid_text_fill_color");
            error.message = Some(format!("Invalid fill color in text at index {}", index).into());
            return Err(error);
        }
    }
    
    if let Some(stroke) = obj.get("stroke").and_then(|v| v.as_str()) {
        if let Err(_) = validate_color(stroke) {
            let mut error = ValidationError::new("invalid_text_stroke_color");
            error.message = Some(format!("Invalid stroke color in text at index {}", index).into());
            return Err(error);
        }
    }
    
    Ok(())
}

fn validate_image_element(obj: &serde_json::Map<String, Value>, index: usize) -> Result<(), ValidationError> {
    // Images should have imageType
    if !obj.contains_key("imageType") {
        let mut error = ValidationError::new("missing_image_type");
        error.message = Some(format!("Image element at index {} missing imageType", index).into());
        return Err(error);
    }
    
    // Should have either imageId (for uploaded images) or src (for other image types)
    if !obj.contains_key("imageId") && !obj.contains_key("src") {
        let mut error = ValidationError::new("missing_image_source");
        error.message = Some(format!("Image element at index {} missing imageId or src", index).into());
        return Err(error);
    }
    
    // Validate dimensions
    let dimension_fields = ["width", "height"];
    for field in dimension_fields {
        if let Some(dim) = obj.get(field).and_then(|v| v.as_f64()) {
            if dim <= 0.0 || dim > 10000.0 {
                let mut error = ValidationError::new("invalid_image_dimension");
                error.message = Some(format!("Image {} at index {} must be between 0 and 10000", field, index).into());
                return Err(error);
            }
        }
    }
    
    Ok(())
}

/// Validate an array of pages
pub fn validate_pages_array(pages: &[Value]) -> Result<Vec<ValidatedPage>, validator::ValidationErrors> {
    if pages.is_empty() {
        let mut errors = validator::ValidationErrors::new();
        errors.add("pages", ValidationError::new("empty_pages_array"));
        return Err(errors);
    }
    
    if pages.len() > 100 {
        let mut errors = validator::ValidationErrors::new();
        errors.add("pages", ValidationError::new("too_many_pages"));
        return Err(errors);
    }
    
    let mut validated_pages = Vec::new();
    
    for (index, page_value) in pages.iter().enumerate() {
        // Try to deserialize and validate each page
        let page: ValidatedPage = serde_json::from_value(page_value.clone())
            .map_err(|_| {
                let mut errors = validator::ValidationErrors::new();
                let mut error = ValidationError::new("invalid_page_structure");
                error.message = Some(format!("Invalid page structure at index {}", index).into());
                errors.add("page", error);
                errors
            })?;
        
        // Validate the page - just use the original errors without modification
        page.validate()?;
        
        validated_pages.push(page);
    }
    
    Ok(validated_pages)
}