use sea_orm_migration::prelude::*;

mod m20250101_000001_create_initial_schema;
mod m20250716_000001_remove_redundant_design_fields;
mod m20250716_000002_create_images_table;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20250101_000001_create_initial_schema::Migration),
            Box::new(m20250716_000001_remove_redundant_design_fields::Migration),
            Box::new(m20250716_000002_create_images_table::Migration),
        ]
    }
}
