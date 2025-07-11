use sea_orm_migration::prelude::*;

mod m20250101_000001_create_users_table;
mod m20250101_000002_create_designs_table;
mod m20250101_000003_create_sessions_table;
mod m20250711_000001_add_pages_column;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20250101_000001_create_users_table::Migration),
            Box::new(m20250101_000002_create_designs_table::Migration),
            Box::new(m20250101_000003_create_sessions_table::Migration),
            Box::new(m20250711_000001_add_pages_column::Migration),
        ]
    }
}