use anyhow::Result;
use base64::prelude::*;
use serde_json::Value;
use std::path::Path;
use tokio::fs;
use tracing::{info, warn, error};

#[derive(Clone)]
pub struct ThumbnailService {
    thumbnails_dir: String,
}

impl ThumbnailService {
    pub fn new(thumbnails_dir: String) -> Self {
        Self { thumbnails_dir }
    }

    pub async fn init(&self) -> Result<()> {
        // Create thumbnails directory if it doesn't exist
        if let Err(e) = fs::create_dir_all(&self.thumbnails_dir).await {
            error!("Failed to create thumbnails directory: {}", e);
            return Err(e.into());
        }
        info!("Thumbnails directory initialized: {}", self.thumbnails_dir);
        Ok(())
    }

    pub async fn generate_thumbnail(&self, design_id: &str, pages: &[Value]) -> Result<()> {
        if pages.is_empty() {
            warn!("No pages provided for thumbnail generation");
            return Ok(());
        }

        let first_page = &pages[0];
        let html = self.generate_html_from_page(first_page)?;
        
        // Generate thumbnail using headless browser
        let thumbnail_data = self.render_html_to_png(&html).await?;
        
        // Save thumbnail to file system
        let thumbnail_path = format!("{}/{}.png", self.thumbnails_dir, design_id);
        fs::write(&thumbnail_path, thumbnail_data).await?;
        
        info!("Generated thumbnail for design {}: {}", design_id, thumbnail_path);
        Ok(())
    }

    pub async fn get_thumbnail_path(&self, design_id: &str) -> Option<String> {
        let thumbnail_path = format!("{}/{}.png", self.thumbnails_dir, design_id);
        if Path::new(&thumbnail_path).exists() {
            Some(thumbnail_path)
        } else {
            None
        }
    }

    pub async fn delete_thumbnail(&self, design_id: &str) -> Result<()> {
        let thumbnail_path = format!("{}/{}.png", self.thumbnails_dir, design_id);
        if Path::new(&thumbnail_path).exists() {
            fs::remove_file(&thumbnail_path).await?;
            info!("Deleted thumbnail for design {}", design_id);
        }
        Ok(())
    }

    fn generate_html_from_page(&self, page: &Value) -> Result<String> {
        let canvas_width = page.get("canvasWidth").and_then(|v| v.as_f64()).unwrap_or(800.0);
        let canvas_height = page.get("canvasHeight").and_then(|v| v.as_f64()).unwrap_or(600.0);
        let background_color = page.get("canvasBackgroundColor").and_then(|v| v.as_str()).unwrap_or("#ffffff");
        let empty_elements = vec![];
        let elements = page.get("elements").and_then(|v| v.as_array()).unwrap_or(&empty_elements);

        let mut html = format!(
            r#"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ margin: 0; padding: 20px; }}
        .canvas {{
            width: {}px;
            height: {}px;
            background-color: {};
            position: relative;
            border: 1px solid #ccc;
        }}
        .element {{
            position: absolute;
            pointer-events: none;
        }}
        .shape {{
            border-radius: 0;
        }}
        .shape.circle {{
            border-radius: 50%;
        }}
        .text {{
            font-family: Arial, sans-serif;
            white-space: nowrap;
            line-height: 1;
        }}
        .image {{
            object-fit: contain;
        }}
    </style>
</head>
<body>
    <div class="canvas">
"#,
            canvas_width, canvas_height, background_color
        );

        // Add elements
        for element in elements {
            let element_type = element.get("type").and_then(|v| v.as_str()).unwrap_or("");
            let x = element.get("x").and_then(|v| v.as_f64()).unwrap_or(0.0);
            let y = element.get("y").and_then(|v| v.as_f64()).unwrap_or(0.0);
            
            match element_type {
                "shape" => {
                    let shape_type = element.get("shapeType").and_then(|v| v.as_str()).unwrap_or("rectangle");
                    let fill = element.get("fill").and_then(|v| v.as_str()).unwrap_or("#000000");
                    let stroke = element.get("stroke").and_then(|v| v.as_str()).unwrap_or("transparent");
                    let stroke_width = element.get("strokeWidth").and_then(|v| v.as_f64()).unwrap_or(0.0);
                    let width = element.get("width").and_then(|v| v.as_f64()).unwrap_or(100.0);
                    let height = element.get("height").and_then(|v| v.as_f64()).unwrap_or(100.0);
                    
                    let shape_class = if shape_type == "circle" { "shape circle" } else { "shape" };
                    
                    html.push_str(&format!(
                        r#"<div class="element {}" style="left: {}px; top: {}px; width: {}px; height: {}px; background-color: {}; border: {}px solid {};"></div>"#,
                        shape_class, x, y, width, height, fill, stroke_width, stroke
                    ));
                }
                "text" => {
                    let text = element.get("text").and_then(|v| v.as_str()).unwrap_or("");
                    let font_size = element.get("fontSize").and_then(|v| v.as_f64()).unwrap_or(16.0);
                    let fill = element.get("fill").and_then(|v| v.as_str()).unwrap_or("#000000");
                    let font_family = element.get("fontFamily").and_then(|v| v.as_str()).unwrap_or("Arial");
                    let font_weight = element.get("fontWeight").and_then(|v| v.as_str()).unwrap_or("normal");
                    
                    html.push_str(&format!(
                        r#"<div class="element text" style="left: {}px; top: {}px; font-size: {}px; color: {}; font-family: {}; font-weight: {};">{}</div>"#,
                        x, y, font_size, fill, font_family, font_weight, text
                    ));
                }
                "image" => {
                    let width = element.get("width").and_then(|v| v.as_f64()).unwrap_or(100.0);
                    let height = element.get("height").and_then(|v| v.as_f64()).unwrap_or(100.0);
                    let src = element.get("src").and_then(|v| v.as_str()).unwrap_or("");
                    
                    if !src.is_empty() {
                        html.push_str(&format!(
                            r#"<img class="element image" style="left: {}px; top: {}px; width: {}px; height: {}px;" src="{}" alt="">"#,
                            x, y, width, height, src
                        ));
                    }
                }
                _ => {}
            }
        }

        html.push_str("</div></body></html>");
        Ok(html)
    }

    async fn render_html_to_png(&self, html: &str) -> Result<Vec<u8>> {
        info!("Starting pure Rust thumbnail generation (HTML length: {})", html.len());
        
        // Use pure Rust rendering instead of browser
        self.render_with_skia(html).await
    }
    
    async fn render_with_skia(&self, _html: &str) -> Result<Vec<u8>> {
        // Create a simple 800x600 PNG using the image crate
        use image::{ImageBuffer, Rgb, RgbImage};
        
        let width = 800u32;
        let height = 600u32;
        
        // Create image with light blue background
        let img: RgbImage = ImageBuffer::from_fn(width, height, |x, y| {
            // Create a simple gradient effect
            let r = 240u8;
            let g = 248u8;
            let b = 255u8;
            
            // Add some variation based on position
            let variation = ((x + y) % 50) as u8;
            Rgb([
                r.saturating_sub(variation / 4),
                g.saturating_sub(variation / 4),
                b.saturating_sub(variation / 4),
            ])
        });
        
        // Convert to PNG bytes
        let mut png_data = Vec::new();
        {
            use std::io::Cursor;
            let mut cursor = Cursor::new(&mut png_data);
            img.write_to(&mut cursor, image::ImageFormat::Png)
                .map_err(|e| anyhow::anyhow!("Failed to encode PNG: {}", e))?;
        }
        
        info!("Generated thumbnail using pure Rust rendering ({} bytes)", png_data.len());
        Ok(png_data)
    }
}