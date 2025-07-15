use sea_orm::entity::prelude::*;
use sea_orm::{ActiveModelTrait, Set};
use serde::{Deserialize, Serialize};
use time::OffsetDateTime;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "designs")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,

    /// Foreign key to users table
    pub user_id: Uuid,

    pub title: String,

    /// JSON data containing all canvas elements (shapes, text, images)
    #[sea_orm(column_type = "Json")]
    pub canvas_data: serde_json::Value,

    /// Canvas background color
    pub canvas_background: String,

    /// Canvas dimensions as JSON: {"width": 500, "height": 400}
    #[sea_orm(column_type = "Json")]
    pub canvas_size: serde_json::Value,

    /// Multi-page design data as JSON array
    #[sea_orm(column_type = "Json")]
    pub pages: serde_json::Value,

    /// Whether this design is publicly visible (defaults to false)
    #[sea_orm(default_value = "false")]
    pub is_public: bool,

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
            is_public: Set(false),
            ..ActiveModelTrait::default()
        }
    }
}
