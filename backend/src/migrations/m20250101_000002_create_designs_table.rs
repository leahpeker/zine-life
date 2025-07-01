use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Designs::Table)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(Designs::Id)
                            .uuid()
                            .not_null()
                            .primary_key(),
                    )
                    .col(
                        ColumnDef::new(Designs::UserId)
                            .uuid()
                            .not_null(),
                    )
                    .col(
                        ColumnDef::new(Designs::Title)
                            .string()
                            .not_null()
                            .default("Untitled Design"),
                    )
                    .col(
                        ColumnDef::new(Designs::CanvasData)
                            .json()
                            .not_null()
                            .default("{}"),
                    )
                    .col(
                        ColumnDef::new(Designs::CanvasBackground)
                            .string()
                            .not_null()
                            .default("#ffffff"),
                    )
                    .col(
                        ColumnDef::new(Designs::CanvasSize)
                            .json()
                            .not_null()
                            .default(r#"{"width": 500, "height": 400}"#),
                    )
                    .col(
                        ColumnDef::new(Designs::IsPublic)
                            .boolean()
                            .not_null()
                            .default(false),
                    )
                    .col(
                        ColumnDef::new(Designs::CreatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .col(
                        ColumnDef::new(Designs::UpdatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_designs_user_id")
                            .from(Designs::Table, Designs::UserId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::Cascade)
                            .on_update(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await?;

        // Create index on user_id for faster queries
        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_designs_user_id")
                    .table(Designs::Table)
                    .col(Designs::UserId)
                    .to_owned(),
            )
            .await?;

        // Create index on is_public for public gallery queries
        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_designs_is_public")
                    .table(Designs::Table)
                    .col(Designs::IsPublic)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Designs::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Designs {
    Table,
    Id,
    UserId,
    Title,
    CanvasData,
    CanvasBackground,
    CanvasSize,
    IsPublic,
    CreatedAt,
    UpdatedAt,
}

#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
}