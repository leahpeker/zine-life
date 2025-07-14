pub mod oauth;
pub mod jwt;
pub mod middleware;

pub use oauth::{OAuthConfig, google_login, google_callback, github_login, github_callback};