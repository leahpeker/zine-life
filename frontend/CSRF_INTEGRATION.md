# CSRF Protection Integration

## Overview

This document describes the CSRF (Cross-Site Request Forgery) protection implementation for the Zine Life frontend.

## Backend CSRF Implementation

- Session-based CSRF tokens using `actix-session`
- `GET /api/csrf-token` endpoint to fetch new tokens
- `X-CSRF-Token` header required for POST/PUT/DELETE requests
- Automatic token validation in middleware

## Frontend Changes Made

### 1. Auth Store (`src/lib/stores/auth.ts`)

- Added `csrfToken: string | null` to `AuthState` interface
- Stores CSRF token alongside user data

### 2. API Constants (`src/lib/constants/api.ts`)

- Added `CSRF.TOKEN: '/api/csrf-token'` endpoint

### 3. HTTP Utilities (`src/lib/constants/http.ts`)

- Added `createFetchOptions()` helper function
- Automatically includes CSRF token for POST/PUT/DELETE requests
- Handles JSON body serialization

### 4. Auth Service (`src/lib/services/authService.ts`)

- Added `fetchCsrfToken()` method
- Fetches CSRF token on authentication check
- Uses CSRF token for logout requests
- Clears CSRF token on logout

### 5. Design Service (`src/lib/services/designService.ts`)

- Updated `saveDesign()` to use CSRF tokens
- Uses `createFetchOptions()` for PUT requests

### 6. Components Updated

- **NewDesignButton**: Uses CSRF tokens for POST requests
- **Dashboard**: Uses CSRF tokens for DELETE requests

### 7. CSRF Utilities (`src/lib/utils/csrf.ts`)

- `handleCsrfError()` - Handles 403 CSRF errors with retry logic
- `getCurrentCsrfToken()` - Gets current token from store
- `isFullyAuthenticated()` - Checks auth + CSRF token

## How It Works

1. **Token Acquisition**: When user authenticates, frontend fetches CSRF token from `/api/csrf-token`
2. **Token Storage**: Token stored in auth store alongside user data
3. **Token Usage**: All state-changing requests (POST/PUT/DELETE) include `X-CSRF-Token` header
4. **Token Validation**: Backend validates token against session store
5. **Error Handling**: 403 responses trigger token refresh and retry

## Usage Examples

### Creating a New Design

```typescript
// Automatically includes CSRF token
const response = await fetch(
	url,
	createFetchOptions(FETCH_METHODS.POST, currentAuth.csrfToken, designData)
);
```

### Updating a Design

```typescript
// CSRF token from auth store
const currentAuth = get(authStore);
const response = await fetch(
	url,
	createFetchOptions(FETCH_METHODS.PUT, currentAuth.csrfToken, designData)
);
```

### Deleting a Design

```typescript
// Direct store access in Svelte component
const response = await fetch(
	deleteUrl,
	createFetchOptions(FETCH_METHODS.DELETE, $authStore.csrfToken)
);
```

## Security Benefits

1. **CSRF Attack Prevention**: Malicious sites cannot make state-changing requests
2. **Session-Based**: Tokens tied to user sessions, not just cookies
3. **Automatic Rotation**: New tokens fetched on authentication
4. **Graceful Degradation**: Handles token expiration with retry logic

## Development Setup

Ensure your `backend/Secrets.toml` includes:

```toml
SESSION_KEY = "your-session-key-for-csrf-protection-32-chars-minimum"
```

## Production Considerations

1. **Strong Session Key**: Use cryptographically secure random key (32+ chars)
2. **HTTPS Only**: Session cookies should be secure in production
3. **Token Rotation**: Consider implementing automatic token rotation
4. **Error Monitoring**: Monitor CSRF failures for potential attacks

## Testing CSRF Protection

1. **Valid Request**: Include `X-CSRF-Token` header → Success
2. **Missing Token**: Omit header → 403 Forbidden
3. **Invalid Token**: Wrong token value → 403 Forbidden
4. **Expired Session**: Old session → Token refresh + retry
