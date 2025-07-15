pub struct CookieNames;

impl CookieNames {
    pub const AUTH_TOKEN: &'static str = "auth_token";
    pub const SESSION_ID: &'static str = "session_id";
}

pub struct CookieProperties;

impl CookieProperties {
    pub const PATH_ROOT: &'static str = "/";
    pub const SAME_SITE_LAX: &'static str = "Lax";
    pub const SAME_SITE_STRICT: &'static str = "Strict";
    pub const SAME_SITE_NONE: &'static str = "None";
}
