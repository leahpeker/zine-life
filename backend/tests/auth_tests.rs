use actix_web::{App, test, web};
use oauth2::{AuthUrl, ClientId, ClientSecret, RedirectUrl, TokenUrl, basic::BasicClient};
use zine_life_backend::auth::google_login;

#[tokio::test]
async fn test_google_login_redirects() {
    // Create OAuth config directly without environment variables
    let google_client = BasicClient::new(
        ClientId::new("test_client_id".to_string()),
        Some(ClientSecret::new("test_client_secret".to_string())),
        AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string()).unwrap(),
        Some(TokenUrl::new("https://www.googleapis.com/oauth2/v4/token".to_string()).unwrap()),
    )
    .set_redirect_uri(
        RedirectUrl::new("http://localhost:8000/auth/google/callback".to_string()).unwrap(),
    );

    let oauth_config = zine_life_backend::auth::OAuthConfig { google_client };

    let app = test::init_service(
        App::new()
            .app_data(web::Data::new(oauth_config))
            .route("/auth/google", web::get().to(google_login)),
    )
    .await;

    let req = test::TestRequest::get().uri("/auth/google").to_request();

    let resp = test::call_service(&app, req).await;

    // Should redirect to Google OAuth
    assert_eq!(resp.status().as_u16(), 302);

    let location_header = resp.headers().get("Location");
    assert!(location_header.is_some());

    let location = location_header.unwrap().to_str().unwrap();
    assert!(location.contains("accounts.google.com"));
    assert!(location.contains("oauth2"));
}
