use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Create images table
        manager
            .create_table(
                Table::create()
                    .table(Images::Table)
                    .if_not_exists()
                    .col(ColumnDef::new(Images::Id).uuid().not_null().primary_key())
                    .col(ColumnDef::new(Images::UserId).uuid().not_null())
                    .col(ColumnDef::new(Images::Filename).string().not_null())
                    .col(ColumnDef::new(Images::ContentType).string().not_null())
                    .col(ColumnDef::new(Images::FileSize).big_integer().not_null())
                    .col(ColumnDef::new(Images::Width).integer().not_null())
                    .col(ColumnDef::new(Images::Height).integer().not_null())
                    .col(ColumnDef::new(Images::StoragePath).string().not_null())
                    .col(ColumnDef::new(Images::Url).string().not_null())
                    .col(ColumnDef::new(Images::AltText).string())
                    .col(
                        ColumnDef::new(Images::CreatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .col(
                        ColumnDef::new(Images::UpdatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_images_user_id")
                            .from(Images::Table, Images::UserId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::Cascade)
                            .on_update(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await?;

        // Create indexes for images table
        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_images_user_id")
                    .table(Images::Table)
                    .col(Images::UserId)
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_images_created_at")
                    .table(Images::Table)
                    .col(Images::CreatedAt)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Images::Table).to_owned())
            .await?;

        Ok(())
    }
}

#[derive(DeriveIden)]
enum Images {
    Table,
    Id,
    UserId,
    Filename,
    ContentType,
    FileSize,
    Width,
    Height,
    StoragePath,
    Url,
    AltText,
    CreatedAt,
    UpdatedAt,
}

#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
}