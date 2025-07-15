use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Create users table
        manager
            .create_table(
                Table::create()
                    .table(Users::Table)
                    .if_not_exists()
                    .col(ColumnDef::new(Users::Id).uuid().not_null().primary_key())
                    .col(
                        ColumnDef::new(Users::Email)
                            .string()
                            .not_null()
                            .unique_key(),
                    )
                    .col(ColumnDef::new(Users::Name).string().not_null())
                    .col(ColumnDef::new(Users::AvatarUrl).string())
                    .col(ColumnDef::new(Users::Provider).string().not_null())
                    .col(ColumnDef::new(Users::ProviderId).string().not_null())
                    .col(
                        ColumnDef::new(Users::CreatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .col(
                        ColumnDef::new(Users::UpdatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .to_owned(),
            )
            .await?;

        // Create unique index on provider + provider_id for users
        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_users_provider_id")
                    .table(Users::Table)
                    .col(Users::Provider)
                    .col(Users::ProviderId)
                    .unique()
                    .to_owned(),
            )
            .await?;

        // Create designs table
        manager
            .create_table(
                Table::create()
                    .table(Designs::Table)
                    .if_not_exists()
                    .col(ColumnDef::new(Designs::Id).uuid().not_null().primary_key())
                    .col(ColumnDef::new(Designs::UserId).uuid().not_null())
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
                        ColumnDef::new(Designs::Pages)
                            .json()
                            .not_null()
                            .default("[]"),
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

        // Create indexes for designs table
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

        // Create sessions table
        manager
            .create_table(
                Table::create()
                    .table(Sessions::Table)
                    .if_not_exists()
                    .col(ColumnDef::new(Sessions::Id).uuid().not_null().primary_key())
                    .col(ColumnDef::new(Sessions::UserId).uuid().not_null())
                    .col(
                        ColumnDef::new(Sessions::Token)
                            .string()
                            .not_null()
                            .unique_key(),
                    )
                    .col(
                        ColumnDef::new(Sessions::ExpiresAt)
                            .timestamp_with_time_zone()
                            .not_null(),
                    )
                    .col(
                        ColumnDef::new(Sessions::CreatedAt)
                            .timestamp_with_time_zone()
                            .not_null()
                            .default(Expr::current_timestamp()),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_sessions_user_id")
                            .from(Sessions::Table, Sessions::UserId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::Cascade)
                            .on_update(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await?;

        // Create indexes for sessions table
        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_sessions_user_id")
                    .table(Sessions::Table)
                    .col(Sessions::UserId)
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx_sessions_expires_at")
                    .table(Sessions::Table)
                    .col(Sessions::ExpiresAt)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Sessions::Table).to_owned())
            .await?;

        manager
            .drop_table(Table::drop().table(Designs::Table).to_owned())
            .await?;

        manager
            .drop_table(Table::drop().table(Users::Table).to_owned())
            .await?;

        Ok(())
    }
}

#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
    Email,
    Name,
    AvatarUrl,
    Provider,
    ProviderId,
    CreatedAt,
    UpdatedAt,
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
    Pages,
    IsPublic,
    CreatedAt,
    UpdatedAt,
}

#[derive(DeriveIden)]
enum Sessions {
    Table,
    Id,
    UserId,
    Token,
    ExpiresAt,
    CreatedAt,
}
