pub struct HttpMethods;

impl HttpMethods {
    pub const GET: &'static str = "GET";
    pub const POST: &'static str = "POST";
    pub const PUT: &'static str = "PUT";
    pub const DELETE: &'static str = "DELETE";
    pub const OPTIONS: &'static str = "OPTIONS";
}

pub const COMMON_METHODS: [&str; 5] = [
    HttpMethods::GET,
    HttpMethods::POST,
    HttpMethods::PUT,
    HttpMethods::DELETE,
    HttpMethods::OPTIONS,
];

pub struct HttpHeaders;

impl HttpHeaders {
    pub const CONTENT_TYPE: &'static str = "Content-Type";
    pub const AUTHORIZATION: &'static str = "Authorization";
    pub const COOKIE: &'static str = "Cookie";
}

pub const COMMON_HEADERS: [&str; 4] = [
    HttpHeaders::CONTENT_TYPE,
    HttpHeaders::AUTHORIZATION,
    HttpHeaders::COOKIE,
    "X-CSRF-Token",
];

pub struct AllowedOrigins;

impl AllowedOrigins {
    pub const LOCALHOST_5173: &'static str = "http://localhost:5173";
    pub const LOCALHOST_127_5173: &'static str = "http://127.0.0.1:5173";
}
