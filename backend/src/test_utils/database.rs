use crate::migrations::Migrator;
use sea_orm::{Database, DatabaseConnection, DbErr};
use sea_orm_migration::MigratorTrait;

/// Create a test database connection using SQLite in-memory
pub async fn setup_test_db() -> Result<DatabaseConnection, DbErr> {
    let db = Database::connect("sqlite::memory:").await?;

    // Run migrations
    Migrator::up(&db, None).await?;

    Ok(db)
}

/// Create test data helpers
pub mod test_data {
    use crate::entities::*;
    use sea_orm::{ActiveModelTrait, Set};
    use time::OffsetDateTime;

    pub async fn create_test_user(
        db: &sea_orm::DatabaseConnection,
        email: &str,
        name: &str,
        provider: &str,
    ) -> Result<user::Model, sea_orm::DbErr> {
        let user = user::ActiveModel {
            id: Set(uuid::Uuid::new_v4()),
            email: Set(email.to_string()),
            name: Set(name.to_string()),
            avatar_url: Set(Some("https://example.com/avatar.jpg".to_string())),
            provider: Set(provider.to_string()),
            provider_id: Set("test_provider_id".to_string()),
            created_at: Set(time::OffsetDateTime::now_utc()),
            updated_at: Set(time::OffsetDateTime::now_utc()),
        };

        user.insert(db).await
    }

    pub async fn create_test_design(
        db: &sea_orm::DatabaseConnection,
        user_id: uuid::Uuid,
        title: &str,
        is_public: bool,
    ) -> Result<design::Model, sea_orm::DbErr> {
        let canvas_data = serde_json::json!({
            "shapes": [
                {
                    "id": "shape-1",
                    "type": "circle",
                    "x": 100,
                    "y": 100,
                    "radius": 50,
                    "fill": "#ff0000"
                }
            ],
            "texts": [],
            "images": []
        });

        let canvas_size = serde_json::json!({
            "width": 500,
            "height": 400
        });

        let pages = serde_json::json!([{
            "id": "page-1",
            "pageNumber": 1,
            "canvasWidth": 500,
            "canvasHeight": 400,
            "canvasBackgroundColor": "#ffffff",
            "shapes": [],
            "texts": [],
            "images": []
        }]);

        let design = design::ActiveModel {
            id: Set(uuid::Uuid::new_v4()),
            user_id: Set(user_id),
            title: Set(title.to_string()),
            canvas_data: Set(canvas_data),
            canvas_background: Set("#ffffff".to_string()),
            canvas_size: Set(canvas_size),
            pages: Set(pages),
            is_public: Set(is_public),
            created_at: Set(time::OffsetDateTime::now_utc()),
            updated_at: Set(time::OffsetDateTime::now_utc()),
        };

        design.insert(db).await
    }

    pub async fn create_test_session(
        db: &sea_orm::DatabaseConnection,
        user_id: uuid::Uuid,
        token: &str,
    ) -> Result<session::Model, sea_orm::DbErr> {
        let session = session::ActiveModel {
            id: Set(uuid::Uuid::new_v4()),
            user_id: Set(user_id),
            token: Set(token.to_string()),
            expires_at: Set(OffsetDateTime::now_utc() + time::Duration::days(30)),
            created_at: Set(time::OffsetDateTime::now_utc()),
        };

        session.insert(db).await
    }
}
