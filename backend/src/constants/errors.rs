pub struct AuthErrors;

impl AuthErrors {
    pub const NOT_AUTHENTICATED: &'static str = "Not authenticated";
    pub const INVALID_TOKEN: &'static str = "Invalid token";
    pub const EXPIRED_TOKEN: &'static str = "Token expired";
    pub const INVALID_USER_ID: &'static str = "Invalid user ID";
    pub const USER_NOT_FOUND: &'static str = "User not found";
    pub const SESSION_NOT_FOUND: &'static str = "Session not found or expired";
    pub const MISSING_AUTH_HEADER: &'static str = "Missing Authorization header";
    pub const INVALID_AUTH_HEADER: &'static str = "Invalid Authorization header format";
}

pub struct DatabaseErrors;

impl DatabaseErrors {
    pub const CONNECTION_FAILED: &'static str = "Database connection failed";
    pub const QUERY_FAILED: &'static str = "Database query failed";
    pub const MIGRATION_FAILED: &'static str = "Database migration failed";
}

pub struct StatusMessages;

impl StatusMessages {
    pub const HEALTHY: &'static str = "healthy";
    pub const CONNECTED: &'static str = "connected";
    pub const DISCONNECTED: &'static str = "disconnected";
    pub const LOADING: &'static str = "loading";
    pub const ERROR: &'static str = "error";
}

pub struct ServiceNames;

impl ServiceNames {
    pub const BACKEND: &'static str = "zine-life-backend";
    pub const DATABASE: &'static str = "PostgreSQL";
}