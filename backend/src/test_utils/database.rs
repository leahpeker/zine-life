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

    pub async fn create_test_image(
        db: &sea_orm::DatabaseConnection,
        user_id: uuid::Uuid,
        filename: &str,
        content_type: &str,
    ) -> Result<image::Model, sea_orm::DbErr> {
        let image = image::ActiveModel {
            id: Set(uuid::Uuid::new_v4()),
            user_id: Set(user_id),
            filename: Set(filename.to_string()),
            content_type: Set(content_type.to_string()),
            file_size: Set(1024), // 1KB
            width: Set(100),
            height: Set(100),
            storage_path: Set(format!("test/{}", filename)),
            url: Set(format!("/api/images/{}", uuid::Uuid::new_v4())),
            alt_text: Set(Some("Test image".to_string())),
            created_at: Set(time::OffsetDateTime::now_utc()),
            updated_at: Set(time::OffsetDateTime::now_utc()),
        };

        image.insert(db).await
    }
}
