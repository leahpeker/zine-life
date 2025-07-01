use jsonwebtoken::{encode, decode, Header, Validation, EncodingKey, DecodingKey};
use serde::{Deserialize, Serialize};
use time::{OffsetDateTime, Duration};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JwtClaims {
    pub sub: String, // user_id
    pub exp: i64,    // expiration timestamp
    pub iat: i64,    // issued at timestamp
}

pub fn create_jwt_token(user_id: &str) -> Result<String, jsonwebtoken::errors::Error> {
    let jwt_secret = std::env::var("JWT_SECRET")
        .unwrap_or_else(|_| "your-secret-key".to_string());

    let now = OffsetDateTime::now_utc();
    let expiration = now + Duration::days(30);

    let claims = JwtClaims {
        sub: user_id.to_string(),
        exp: expiration.unix_timestamp(),
        iat: now.unix_timestamp(),
    };

    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(jwt_secret.as_ref()),
    )
}

#[allow(dead_code)]
pub fn verify_jwt_token(token: &str) -> Result<JwtClaims, jsonwebtoken::errors::Error> {
    let jwt_secret = std::env::var("JWT_SECRET")
        .unwrap_or_else(|_| "your-secret-key".to_string());

    decode::<JwtClaims>(
        token,
        &DecodingKey::from_secret(jwt_secret.as_ref()),
        &Validation::default(),
    )
    .map(|data| data.claims)
}