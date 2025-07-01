use sea_orm::entity::prelude::*;
use sea_orm::{Set, ActiveModelTrait};
use serde::{Deserialize, Serialize};
use time::OffsetDateTime;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "users")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,
    
    #[sea_orm(unique)]
    pub email: String,
    
    pub name: String,
    
    pub avatar_url: Option<String>,
    
    /// OAuth provider (google, github, etc.)
    pub provider: String,
    
    /// ID from the OAuth provider
    pub provider_id: String,
    
    #[sea_orm(column_type = "TimestampWithTimeZone")]
    pub created_at: OffsetDateTime,
    
    #[sea_orm(column_type = "TimestampWithTimeZone")]
    pub updated_at: OffsetDateTime,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::design::Entity")]
    Designs,
    
    #[sea_orm(has_many = "super::session::Entity")]
    Sessions,
}

impl Related<super::design::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Designs.def()
    }
}

impl Related<super::session::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Sessions.def()
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