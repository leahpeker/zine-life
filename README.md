# Zine Life - Digital Zine Creation Platform

A modern web application for creating beautiful digital zines with an intuitive drag-and-drop interface.

## Project Structure

```
zine-life/
├── frontend/          # Svelte frontend application
│   ├── src/          # Svelte components and logic
│   ├── static/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Rust API server
│   ├── src/          # Rust source code
│   └── Cargo.toml    # Rust dependencies
└── README.md         # This file
```

## Tech Stack

### Frontend
- **Framework**: SvelteKit
- **Canvas**: Konva.js for interactive drawing
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Package Manager**: Bun

### Backend
- **Language**: Rust (Edition 2024)
- **Framework**: Actix-web
- **Database**: PostgreSQL with SeaORM
- **Authentication**: OAuth2 (Google, GitHub)
- **Deployment**: Shuttle.rs

## Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on http://localhost:5173

### Backend
```bash
cd backend
cargo run
```
Backend runs on http://localhost:8080

## Features

### Current Features
- Interactive canvas with shapes, text, and images
- Drag-and-drop editing
- Undo/redo functionality
- Export to PNG, JPG, SVG formats
- Real-time design editing

### Planned Features
- User authentication (Google, GitHub OAuth)
- Save/load designs from cloud
- Public design gallery
- Design sharing and collaboration
- Template system

## API Endpoints

### Health & Info
- `GET /health` - Health check
- `GET /api/hello` - Test endpoint

### Authentication (Planned)
- `GET /auth/google` - Google OAuth redirect
- `GET /auth/github` - GitHub OAuth redirect
- `GET /auth/callback/{provider}` - OAuth callbacks
- `POST /auth/logout` - User logout

### Designs (Planned)
- `GET /api/designs` - User's private designs
- `GET /api/designs/public` - Public design gallery
- `POST /api/designs` - Create new design
- `PUT /api/designs/:id` - Update design
- `DELETE /api/designs/:id` - Delete design