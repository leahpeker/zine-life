use sea_orm::entity::prelude::*;
use sea_orm::{ActiveModelTrait, Set};
use serde::{Deserialize, Serialize};
use time::OffsetDateTime;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "images")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,

    /// Foreign key to users table - who uploaded this image
    pub user_id: Uuid,

    /// Original filename when uploaded
    pub filename: String,

    /// Content type (MIME type) e.g., "image/jpeg", "image/png"
    pub content_type: String,

    /// File size in bytes
    pub file_size: i64,

    /// Width in pixels
    pub width: i32,

    /// Height in pixels  
    pub height: i32,

    /// Storage path/key where the actual image file is stored
    pub storage_path: String,

    /// URL to access the image (could be local path or CDN URL)
    pub url: String,

    /// Optional alt text for accessibility
    pub alt_text: Option<String>,

    #[sea_orm(column_type = "TimestampWithTimeZone")]
    pub created_at: OffsetDateTime,

    #[sea_orm(column_type = "TimestampWithTimeZone")]
    pub updated_at: OffsetDateTime,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::user::Entity",
        from = "Column::UserId",
        to = "super::user::Column::Id"
    )]
    User,
}

impl Related<super::user::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::User.def()
    }
}

impl ActiveModelBehavior for ActiveModel {
    fn new() -> Self {
        Self {
            id: Set(Uuid::new_v4()),
            created_at: Set(OffsetDateTime::now_utc()),
            updated_at: Set(OffsetDateTime::now_utc()),
            ..ActiveModelTrait::default()
        }
    }
}