use crate::auth::jwt::create_jwt_token;
use crate::entities::{session, user};
use actix_web::{HttpRequest, HttpResponse, Result, web};
use oauth2::{
    AuthUrl, AuthorizationCode, ClientId, ClientSecret, CsrfToken, RedirectUrl, Scope,
    TokenResponse, TokenUrl, basic::BasicClient, reqwest::async_http_client,
};
use reqwest;
use sea_orm::{ActiveModelTrait, ColumnTrait, DatabaseConnection, EntityTrait, QueryFilter, Set};
use serde::{Deserialize, Serialize};
use time::OffsetDateTime;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct GoogleUserInfo {
    pub id: String,
    pub email: String,
    pub name: String,
    pub picture: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GitHubUserInfo {
    pub id: u64,
    pub login: String,
    pub email: Option<String>,
    pub name: Option<String>,
    pub avatar_url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AuthResponse {
    pub token: String,
    pub user: UserResponse,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserResponse {
    pub id: String,
    pub email: String,
    pub name: String,
    pub avatar_url: Option<String>,
}

#[derive(Clone)]
pub struct OAuthConfig {
    pub google_client: BasicClient,
    pub github_client: BasicClient,
}

impl OAuthConfig {
    pub fn from_secrets(
        secrets: &shuttle_runtime::SecretStore,
    ) -> Result<Self, Box<dyn std::error::Error>> {
        // Google OAuth setup
        let google_client_id = secrets
            .get("GOOGLE_CLIENT_ID")
            .ok_or("GOOGLE_CLIENT_ID must be set")?;
        let google_client_secret = secrets
            .get("GOOGLE_CLIENT_SECRET")
            .ok_or("GOOGLE_CLIENT_SECRET must be set")?;
        let google_redirect_url = secrets
            .get("GOOGLE_REDIRECT_URL")
            .unwrap_or_else(|| "http://localhost:8000/auth/google/callback".to_string());

        let google_client = BasicClient::new(
            ClientId::new(google_client_id),
            Some(ClientSecret::new(google_client_secret)),
            AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string())?,
            Some(TokenUrl::new(
                "https://www.googleapis.com/oauth2/v4/token".to_string(),
            )?),
        )
        .set_redirect_uri(RedirectUrl::new(google_redirect_url)?);

        // GitHub OAuth setup
        let github_client_id = secrets
            .get("GITHUB_CLIENT_ID")
            .ok_or("GITHUB_CLIENT_ID must be set")?;
        let github_client_secret = secrets
            .get("GITHUB_CLIENT_SECRET")
            .ok_or("GITHUB_CLIENT_SECRET must be set")?;
        let github_redirect_url = secrets
            .get("GITHUB_REDIRECT_URL")
            .unwrap_or_else(|| "http://localhost:8000/auth/github/callback".to_string());

        let github_client = BasicClient::new(
            ClientId::new(github_client_id),
            Some(ClientSecret::new(github_client_secret)),
            AuthUrl::new("https://github.com/login/oauth/authorize".to_string())?,
            Some(TokenUrl::new(
                "https://github.com/login/oauth/access_token".to_string(),
            )?),
        )
        .set_redirect_uri(RedirectUrl::new(github_redirect_url)?);

        Ok(Self {
            google_client,
            github_client,
        })
    }

    #[allow(dead_code)]
    pub fn new() -> Result<Self, Box<dyn std::error::Error>> {
        // Google OAuth setup
        let google_client_id =
            std::env::var("GOOGLE_CLIENT_ID").expect("GOOGLE_CLIENT_ID must be set");
        let google_client_secret =
            std::env::var("GOOGLE_CLIENT_SECRET").expect("GOOGLE_CLIENT_SECRET must be set");
        let google_redirect_url = std::env::var("GOOGLE_REDIRECT_URL")
            .unwrap_or_else(|_| "http://localhost:8000/auth/google/callback".to_string());

        let google_client = BasicClient::new(
            ClientId::new(google_client_id),
            Some(ClientSecret::new(google_client_secret)),
            AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string())?,
            Some(TokenUrl::new(
                "https://www.googleapis.com/oauth2/v4/token".to_string(),
            )?),
        )
        .set_redirect_uri(RedirectUrl::new(google_redirect_url)?);

        // GitHub OAuth setup
        let github_client_id =
            std::env::var("GITHUB_CLIENT_ID").expect("GITHUB_CLIENT_ID must be set");
        let github_client_secret =
            std::env::var("GITHUB_CLIENT_SECRET").expect("GITHUB_CLIENT_SECRET must be set");
        let github_redirect_url = std::env::var("GITHUB_REDIRECT_URL")
            .unwrap_or_else(|_| "http://localhost:8000/auth/github/callback".to_string());

        let github_client = BasicClient::new(
            ClientId::new(github_client_id),
            Some(ClientSecret::new(github_client_secret)),
            AuthUrl::new("https://github.com/login/oauth/authorize".to_string())?,
            Some(TokenUrl::new(
                "https://github.com/login/oauth/access_token".to_string(),
            )?),
        )
        .set_redirect_uri(RedirectUrl::new(github_redirect_url)?);

        Ok(Self {
            google_client,
            github_client,
        })
    }
}

pub async fn google_login(oauth_config: web::Data<OAuthConfig>) -> Result<HttpResponse> {
    let (auth_url, _csrf_token) = oauth_config
        .google_client
        .authorize_url(CsrfToken::new_random)
        .add_scope(Scope::new("email".to_string()))
        .add_scope(Scope::new("profile".to_string()))
        .add_extra_param("prompt", "select_account") // Force account selection
        .url();

    Ok(HttpResponse::Found()
        .append_header(("Location", auth_url.to_string()))
        .finish())
}

pub async fn google_callback(
    req: HttpRequest,
    oauth_config: web::Data<OAuthConfig>,
    db: web::Data<DatabaseConnection>,
) -> Result<HttpResponse> {
    let query =
        web::Query::<std::collections::HashMap<String, String>>::from_query(req.query_string())
            .map_err(|e| {
                actix_web::error::ErrorBadRequest(format!("Invalid query parameters: {}", e))
            })?;

    let code = query
        .get("code")
        .ok_or_else(|| actix_web::error::ErrorBadRequest("Missing authorization code"))?;

    // Exchange code for token
    let token_result = oauth_config
        .google_client
        .exchange_code(AuthorizationCode::new(code.clone()))
        .request_async(async_http_client)
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Token exchange failed: {}", e))
        })?;

    // Get user info from Google
    let client = reqwest::Client::new();
    let user_info_response = client
        .get("https://www.googleapis.com/oauth2/v2/userinfo")
        .bearer_auth(token_result.access_token().secret())
        .send()
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Failed to get user info: {}", e))
        })?;

    let user_info: GoogleUserInfo = user_info_response.json().await.map_err(|e| {
        actix_web::error::ErrorInternalServerError(format!("Failed to parse user info: {}", e))
    })?;

    // Find or create user
    let existing_user = user::Entity::find()
        .filter(user::Column::Email.eq(&user_info.email))
        .one(db.as_ref())
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Database error: {}", e))
        })?;

    let user_model = match existing_user {
        Some(user) => {
            // Update existing user
            let mut active_user: user::ActiveModel = user.into();
            active_user.name = Set(user_info.name.clone());
            active_user.avatar_url = Set(user_info.picture.clone());
            active_user.updated_at = Set(OffsetDateTime::now_utc());

            active_user.update(db.as_ref()).await.map_err(|e| {
                actix_web::error::ErrorInternalServerError(format!("Failed to update user: {}", e))
            })?
        }
        None => {
            // Create new user
            let new_user = user::ActiveModel {
                id: Set(Uuid::new_v4()),
                email: Set(user_info.email.clone()),
                name: Set(user_info.name.clone()),
                avatar_url: Set(user_info.picture.clone()),
                provider: Set("google".to_string()),
                provider_id: Set(user_info.id.clone()),
                created_at: Set(OffsetDateTime::now_utc()),
                updated_at: Set(OffsetDateTime::now_utc()),
            };

            new_user.insert(db.as_ref()).await.map_err(|e| {
                actix_web::error::ErrorInternalServerError(format!("Failed to create user: {}", e))
            })?
        }
    };

    // Create JWT token
    let jwt_token = create_jwt_token(&user_model.id.to_string()).map_err(|e| {
        actix_web::error::ErrorInternalServerError(format!("Failed to create JWT: {}", e))
    })?;

    // Create session
    let session = session::ActiveModel {
        id: Set(Uuid::new_v4()),
        user_id: Set(user_model.id),
        token: Set(jwt_token.clone()),
        expires_at: Set(OffsetDateTime::now_utc() + time::Duration::days(30)),
        created_at: Set(OffsetDateTime::now_utc()),
    };

    session.insert(db.as_ref()).await.map_err(|e| {
        actix_web::error::ErrorInternalServerError(format!("Failed to create session: {}", e))
    })?;

    // Set JWT as HTTP-only cookie and redirect to frontend
    let frontend_url =
        std::env::var("FRONTEND_URL").unwrap_or_else(|_| "http://localhost:5173".to_string());

    let is_production = std::env::var("ENVIRONMENT").unwrap_or_default() == "production";

    Ok(HttpResponse::Found()
        .cookie(
            actix_web::cookie::Cookie::build("auth_token", jwt_token.clone())
                .http_only(true)
                .secure(is_production) // True in production with HTTPS
                .same_site(actix_web::cookie::SameSite::Lax)
                .path("/")
                .max_age(actix_web::cookie::time::Duration::days(30))
                .finish(),
        )
        .append_header(("Location", frontend_url))
        .finish())
}

pub async fn github_login(oauth_config: web::Data<OAuthConfig>) -> Result<HttpResponse> {
    use uuid::Uuid;

    let (auth_url, _csrf_token) = oauth_config
        .github_client
        .authorize_url(CsrfToken::new_random)
        .add_scope(Scope::new("user:email".to_string()))
        .add_extra_param("state", &Uuid::new_v4().to_string()) // Random state to prevent caching
        .url();

    Ok(HttpResponse::Found()
        .append_header(("Location", auth_url.to_string()))
        .finish())
}

pub async fn github_callback(
    req: HttpRequest,
    oauth_config: web::Data<OAuthConfig>,
    db: web::Data<DatabaseConnection>,
) -> Result<HttpResponse> {
    let query =
        web::Query::<std::collections::HashMap<String, String>>::from_query(req.query_string())
            .map_err(|e| {
                actix_web::error::ErrorBadRequest(format!("Invalid query parameters: {}", e))
            })?;

    let code = query
        .get("code")
        .ok_or_else(|| actix_web::error::ErrorBadRequest("Missing authorization code"))?;

    // Exchange code for token
    let token_result = oauth_config
        .github_client
        .exchange_code(AuthorizationCode::new(code.clone()))
        .request_async(async_http_client)
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Token exchange failed: {}", e))
        })?;

    // Get user info from GitHub
    let client = reqwest::Client::new();
    let user_info_response = client
        .get("https://api.github.com/user")
        .bearer_auth(token_result.access_token().secret())
        .header("User-Agent", "zine-life-app")
        .send()
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Failed to get user info: {}", e))
        })?;

    let mut user_info: GitHubUserInfo = user_info_response.json().await.map_err(|e| {
        actix_web::error::ErrorInternalServerError(format!("Failed to parse user info: {}", e))
    })?;

    // GitHub doesn't always return email in the main user endpoint, fetch it separately if needed
    if user_info.email.is_none() {
        let email_response = client
            .get("https://api.github.com/user/emails")
            .bearer_auth(token_result.access_token().secret())
            .header("User-Agent", "zine-life-app")
            .send()
            .await
            .map_err(|e| {
                actix_web::error::ErrorInternalServerError(format!(
                    "Failed to get user emails: {}",
                    e
                ))
            })?;

        #[derive(Debug, Serialize, Deserialize)]
        struct GitHubEmail {
            email: String,
            primary: bool,
            verified: bool,
        }

        let emails: Vec<GitHubEmail> = email_response.json().await.map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!(
                "Failed to parse user emails: {}",
                e
            ))
        })?;

        // Find primary verified email
        if let Some(primary_email) = emails.iter().find(|e| e.primary && e.verified) {
            user_info.email = Some(primary_email.email.clone());
        }
    }

    let email = user_info
        .email
        .ok_or_else(|| actix_web::error::ErrorBadRequest("No verified email address found"))?;

    let name = user_info.name.unwrap_or_else(|| user_info.login.clone());

    // Find or create user
    let existing_user = user::Entity::find()
        .filter(user::Column::Email.eq(&email))
        .one(db.as_ref())
        .await
        .map_err(|e| {
            actix_web::error::ErrorInternalServerError(format!("Database error: {}", e))
        })?;

    let user_model = match existing_user {
        Some(user) => {
            // Update existing user
            let mut active_user: user::ActiveModel = user.into();
            active_user.name = Set(name.clone());
            active_user.avatar_url = Set(user_info.avatar_url.clone());
            active_user.updated_at = Set(OffsetDateTime::now_utc());

            active_user.update(db.as_ref()).await.map_err(|e| {
                actix_web::error::ErrorInternalServerError(format!("Failed to update user: {}", e))
            })?
        }
        None => {
            // Create new user
            let new_user = user::ActiveModel {
                id: Set(Uuid::new_v4()),
                email: Set(email.clone()),
                name: Set(name.clone()),
                avatar_url: Set(user_info.avatar_url.clone()),
                provider: Set("github".to_string()),
                provider_id: Set(user_info.id.to_string()),
                created_at: Set(OffsetDateTime::now_utc()),
                updated_at: Set(OffsetDateTime::now_utc()),
            };

            new_user.insert(db.as_ref()).await.map_err(|e| {
                actix_web::error::ErrorInternalServerError(format!("Failed to create user: {}", e))
            })?
        }
    };

    // Create JWT token
    let jwt_token = create_jwt_token(&user_model.id.to_string()).map_err(|e| {
        actix_web::error::ErrorInternalServerError(format!("Failed to create JWT: {}", e))
    })?;

    // Create session
    let session = session::ActiveModel {
        id: Set(Uuid::new_v4()),
        user_id: Set(user_model.id),
        token: Set(jwt_token.clone()),
        expires_at: Set(OffsetDateTime::now_utc() + time::Duration::days(30)),
        created_at: Set(OffsetDateTime::now_utc()),
    };

    session.insert(db.as_ref()).await.map_err(|e| {
        actix_web::error::ErrorInternalServerError(format!("Failed to create session: {}", e))
    })?;

    // Set JWT as HTTP-only cookie and redirect to frontend
    let frontend_url =
        std::env::var("FRONTEND_URL").unwrap_or_else(|_| "http://localhost:5173".to_string());

    let is_production = std::env::var("ENVIRONMENT").unwrap_or_default() == "production";

    Ok(HttpResponse::Found()
        .cookie(
            actix_web::cookie::Cookie::build("auth_token", jwt_token.clone())
                .http_only(true)
                .secure(is_production) // True in production with HTTPS
                .same_site(actix_web::cookie::SameSite::Lax)
                .path("/")
                .max_age(actix_web::cookie::time::Duration::days(30))
                .finish(),
        )
        .append_header(("Location", frontend_url))
        .finish())
}
