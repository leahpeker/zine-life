pub struct ApiRoutes;

impl ApiRoutes {
    // Health routes
    pub const HEALTH: &'static str = "/health";
    pub const API_DB_STATUS: &'static str = "/api/db-status";

    // Auth routes
    pub const AUTH_GOOGLE: &'static str = "/auth/google";
    pub const AUTH_GOOGLE_CALLBACK: &'static str = "/auth/google/callback";
    pub const AUTH_GITHUB: &'static str = "/auth/github";
    pub const AUTH_GITHUB_CALLBACK: &'static str = "/auth/github/callback";
    pub const API_AUTH_ME: &'static str = "/api/auth/me";
    pub const API_AUTH_LOGOUT: &'static str = "/api/auth/logout";

    // Design routes
    pub const API_DESIGNS: &'static str = "/api/designs";
    pub const API_DESIGNS_PUBLIC: &'static str = "/api/designs/public";
    pub const API_DESIGNS_BY_ID: &'static str = "/api/designs/{id}";

    // Image routes
    pub const API_IMAGES: &'static str = "/api/images";
    pub const API_IMAGES_BY_ID: &'static str = "/api/images/{id}";

    // CSRF routes
    pub const API_CSRF_TOKEN: &'static str = "/api/csrf-token";
}
