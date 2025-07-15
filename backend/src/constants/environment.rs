#[derive(Debug, Clone, PartialEq)]
pub enum Environment {
    Development,
    Production,
}

impl Environment {
    pub fn from_env() -> Self {
        match std::env::var("ENVIRONMENT").unwrap_or_default().as_str() {
            "production" => Environment::Production,
            _ => Environment::Development,
        }
    }
    
    pub fn is_production(&self) -> bool {
        matches!(self, Environment::Production)
    }
    
    pub fn is_development(&self) -> bool {
        matches!(self, Environment::Development)
    }
}

impl Default for Environment {
    fn default() -> Self {
        Environment::Development
    }
}