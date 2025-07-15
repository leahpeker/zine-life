#[allow(dead_code)]
pub struct OAuthProvider;

#[allow(dead_code)]
impl OAuthProvider {
    pub const GOOGLE: &'static str = "google";
    pub const GITHUB: &'static str = "github"; // Future provider
}

#[allow(dead_code)]
pub struct EnvVars;

#[allow(dead_code)]
impl EnvVars {
    pub const GOOGLE_CLIENT_ID: &'static str = "GOOGLE_CLIENT_ID";
    pub const GOOGLE_CLIENT_SECRET: &'static str = "GOOGLE_CLIENT_SECRET";
    pub const GOOGLE_REDIRECT_URL: &'static str = "GOOGLE_REDIRECT_URL";
    pub const GITHUB_CLIENT_ID: &'static str = "GITHUB_CLIENT_ID";
    pub const GITHUB_CLIENT_SECRET: &'static str = "GITHUB_CLIENT_SECRET";
    pub const GITHUB_REDIRECT_URL: &'static str = "GITHUB_REDIRECT_URL";
    pub const FRONTEND_URL: &'static str = "FRONTEND_URL";
    pub const JWT_SECRET: &'static str = "JWT_SECRET";
}

#[allow(dead_code)]
pub struct DefaultUrls;

#[allow(dead_code)]
impl DefaultUrls {
    pub const FRONTEND: &'static str = "http://localhost:5173";
    pub const GOOGLE_REDIRECT: &'static str = "http://localhost:8000/auth/google/callback";
    pub const GITHUB_REDIRECT: &'static str = "http://localhost:8000/auth/github/callback";
}

#[allow(dead_code)]
pub struct OAuthUrls;

#[allow(dead_code)]
impl OAuthUrls {
    pub const GOOGLE_AUTH: &'static str = "https://accounts.google.com/o/oauth2/v2/auth";
    pub const GOOGLE_TOKEN: &'static str = "https://www.googleapis.com/oauth2/v4/token";
    pub const GOOGLE_USERINFO: &'static str = "https://www.googleapis.com/oauth2/v2/userinfo";
    pub const GITHUB_AUTH: &'static str = "https://github.com/login/oauth/authorize";
    pub const GITHUB_TOKEN: &'static str = "https://github.com/login/oauth/access_token";
    pub const GITHUB_USERINFO: &'static str = "https://api.github.com/user";
}

#[allow(dead_code)]
pub struct OAuthScopes;

#[allow(dead_code)]
impl OAuthScopes {
    pub const EMAIL: &'static str = "email";
    pub const PROFILE: &'static str = "profile";
    pub const OPENID: &'static str = "openid";
    pub const USER_READ: &'static str = "user:email";
}
