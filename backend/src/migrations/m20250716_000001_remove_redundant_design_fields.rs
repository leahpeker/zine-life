use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Remove canvas_data column (redundant, data now in pages)
        manager
            .alter_table(
                Table::alter()
                    .table(Designs::Table)
                    .drop_column(Designs::CanvasData)
                    .to_owned(),
            )
            .await?;

        // Remove canvas_background column (should be per-page, not per-design)
        manager
            .alter_table(
                Table::alter()
                    .table(Designs::Table)
                    .drop_column(Designs::CanvasBackground)
                    .to_owned(),
            )
            .await?;

        // Remove canvas_size column (not used in application)
        manager
            .alter_table(
                Table::alter()
                    .table(Designs::Table)
                    .drop_column(Designs::CanvasSize)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Add back canvas_data column
        manager
            .alter_table(
                Table::alter()
                    .table(Designs::Table)
                    .add_column(
                        ColumnDef::new(Designs::CanvasData)
                            .json()
                            .not_null()
                            .default("{}"),
                    )
                    .to_owned(),
            )
            .await?;

        // Add back canvas_background column
        manager
            .alter_table(
                Table::alter()
                    .table(Designs::Table)
                    .add_column(
                        ColumnDef::new(Designs::CanvasBackground)
                            .string()
                            .not_null()
                            .default("#ffffff"),
                    )
                    .to_owned(),
            )
            .await?;

        // Add back canvas_size column
        manager
            .alter_table(
                Table::alter()
                    .table(Designs::Table)
                    .add_column(
                        ColumnDef::new(Designs::CanvasSize)
                            .json()
                            .not_null()
                            .default(r#"{"width": 500, "height": 400}"#),
                    )
                    .to_owned(),
            )
            .await?;

        Ok(())
    }
}

#[derive(DeriveIden)]
enum Designs {
    Table,
    CanvasData,
    CanvasBackground,
    CanvasSize,
}