use actix_web::{web, HttpResponse, Result, HttpRequest};
use oauth2::{
    AuthUrl, ClientId, ClientSecret, CsrfToken, RedirectUrl, Scope, TokenUrl,
    basic::BasicClient, reqwest::async_http_client, AuthorizationCode, TokenResponse,
};
use reqwest;
use serde::{Deserialize, Serialize};
use sea_orm::{DatabaseConnection, EntityTrait, ActiveModelTrait, Set, ColumnTrait, QueryFilter};
use crate::entities::{user, session};
use crate::auth::jwt::create_jwt_token;
use uuid::Uuid;
use time::OffsetDateTime;

#[derive(Debug, Serialize, Deserialize)]
pub struct GoogleUserInfo {
    pub id: String,
    pub email: String,
    pub name: String,
    pub picture: Option<String>,
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
}

impl OAuthConfig {
    pub fn from_secrets(secrets: &shuttle_runtime::SecretStore) -> Result<Self, Box<dyn std::error::Error>> {
        let google_client_id = secrets.get("GOOGLE_CLIENT_ID")
            .ok_or("GOOGLE_CLIENT_ID must be set")?;
        let google_client_secret = secrets.get("GOOGLE_CLIENT_SECRET")
            .ok_or("GOOGLE_CLIENT_SECRET must be set")?;
        let redirect_url = secrets.get("GOOGLE_REDIRECT_URL")
            .unwrap_or_else(|| "http://localhost:8000/auth/google/callback".to_string());

        let google_client = BasicClient::new(
            ClientId::new(google_client_id),
            Some(ClientSecret::new(google_client_secret)),
            AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string())?,
            Some(TokenUrl::new("https://www.googleapis.com/oauth2/v4/token".to_string())?),
        )
        .set_redirect_uri(RedirectUrl::new(redirect_url)?);

        Ok(Self { google_client })
    }

    pub fn new() -> Result<Self, Box<dyn std::error::Error>> {
        let google_client_id = std::env::var("GOOGLE_CLIENT_ID")
            .expect("GOOGLE_CLIENT_ID must be set");
        let google_client_secret = std::env::var("GOOGLE_CLIENT_SECRET")
            .expect("GOOGLE_CLIENT_SECRET must be set");
        let redirect_url = std::env::var("GOOGLE_REDIRECT_URL")
            .unwrap_or_else(|_| "http://localhost:8000/auth/google/callback".to_string());

        let google_client = BasicClient::new(
            ClientId::new(google_client_id),
            Some(ClientSecret::new(google_client_secret)),
            AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string())?,
            Some(TokenUrl::new("https://www.googleapis.com/oauth2/v4/token".to_string())?),
        )
        .set_redirect_uri(RedirectUrl::new(redirect_url)?);

        Ok(Self { google_client })
    }
}

pub async fn google_login(oauth_config: web::Data<OAuthConfig>) -> Result<HttpResponse> {
    let (auth_url, _csrf_token) = oauth_config
        .google_client
        .authorize_url(CsrfToken::new_random)
        .add_scope(Scope::new("email".to_string()))
        .add_scope(Scope::new("profile".to_string()))
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
    let query = web::Query::<std::collections::HashMap<String, String>>::from_query(req.query_string())
        .map_err(|e| actix_web::error::ErrorBadRequest(format!("Invalid query parameters: {}", e)))?;

    let code = query.get("code")
        .ok_or_else(|| actix_web::error::ErrorBadRequest("Missing authorization code"))?;

    // Exchange code for token
    let token_result = oauth_config
        .google_client
        .exchange_code(AuthorizationCode::new(code.clone()))
        .request_async(async_http_client)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Token exchange failed: {}", e)))?;

    // Get user info from Google
    let client = reqwest::Client::new();
    let user_info_response = client
        .get("https://www.googleapis.com/oauth2/v2/userinfo")
        .bearer_auth(token_result.access_token().secret())
        .send()
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to get user info: {}", e)))?;

    let user_info: GoogleUserInfo = user_info_response
        .json()
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to parse user info: {}", e)))?;

    // Find or create user
    let existing_user = user::Entity::find()
        .filter(user::Column::Email.eq(&user_info.email))
        .one(db.as_ref())
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Database error: {}", e)))?;

    let user_model = match existing_user {
        Some(user) => {
            // Update existing user
            let mut active_user: user::ActiveModel = user.into();
            active_user.name = Set(user_info.name.clone());
            active_user.avatar_url = Set(user_info.picture.clone());
            active_user.updated_at = Set(OffsetDateTime::now_utc());
            
            active_user.update(db.as_ref()).await
                .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to update user: {}", e)))?
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

            new_user.insert(db.as_ref()).await
                .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to create user: {}", e)))?
        }
    };

    // Create JWT token
    let jwt_token = create_jwt_token(&user_model.id.to_string())
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to create JWT: {}", e)))?;

    // Create session
    let session = session::ActiveModel {
        id: Set(Uuid::new_v4()),
        user_id: Set(user_model.id),
        token: Set(jwt_token.clone()),
        expires_at: Set(OffsetDateTime::now_utc() + time::Duration::days(30)),
        created_at: Set(OffsetDateTime::now_utc()),
    };

    session.insert(db.as_ref()).await
        .map_err(|e| actix_web::error::ErrorInternalServerError(format!("Failed to create session: {}", e)))?;

    // Set JWT as HTTP-only cookie and redirect to frontend
    Ok(HttpResponse::Found()
        .cookie(
            actix_web::cookie::Cookie::build("auth_token", jwt_token.clone())
                .http_only(true)
                .secure(false) // Set to true in production with HTTPS
                .same_site(actix_web::cookie::SameSite::Lax)
                .path("/")
                .max_age(actix_web::cookie::time::Duration::days(30))
                .finish()
        )
        .append_header(("Location", "http://localhost:5173"))
        .finish())
}