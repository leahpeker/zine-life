# 🤘 ZINE LIFE - POST-PUNK UX FLOW DESIGN

## 🎯 DESIGN PHILOSOPHY
**Anti-Corporate, Pro-Underground**: Every decision should feel DIY, gritty, and authentic to punk/zine culture.

---

## 🚪 ENTRY POINTS & USER FLOWS

### **Anonymous User Journey**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Homepage      │───▶│  Public Gallery │───▶│     Login       │
│  (Discovery)    │    │   (Inspire)     │    │   (Convert)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ "START CREATING"│───▶│  Login Prompt   │───▶│   Dashboard     │
│    (CTA)        │    │  (Auth Gate)    │    │  (Personal)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Logged-In User Journey**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Homepage      │───▶│   Dashboard     │───▶│     Editor      │
│  (Personal)     │    │ (My Designs)    │    │   (Create)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ "START CREATING"│───▶│  New Design     │◀───│  Auto-Save      │
│  (Quick Start)  │    │   (Editor)      │    │ (Seamless)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 📱 PAGE STRUCTURE & NAVIGATION

### **1. HOMEPAGE** (`/`)
**Purpose**: Gateway + Personal Summary

#### Anonymous State:
- **Hero**: "DIY GRAPHICS FOR THE UNDERGROUND" 
- **Public Gallery Preview**: 3-6 recent public designs
- **Call-to-Action**: "START CREATING" → Login
- **Underground Showcase**: What you can make (flyers, zines, protest art)

#### Logged-In State:
- **Personal Summary**: "Welcome back, [NAME]"
- **Recent Designs**: Last 3-4 designs worked on
- **Quick Actions**: "New Design", "My Dashboard", "Browse Gallery"
- **Community Feed**: Recent public designs (discover others' work)

### **2. DASHBOARD** (`/dashboard`)
**Purpose**: Personal Design Management

#### Layout:
```
┌─────────────────────────────────────────────────────────┐
│ HEADER: [Avatar] [Name] ▼ [New Design] [Browse Gallery] │
├─────────────────────────────────────────────────────────┤
│ MY DESIGNS                    [All|Private|Public] ▼   │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│ │ [+] │ │IMG1 │ │IMG2 │ │IMG3 │ │IMG4 │ │IMG5 │  ...  │
│ │NEW  │ │Edit │ │Edit │ │Edit │ │Edit │ │Edit │       │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘       │
│         Flyer   Zine    Poster  Flyer   Zine          │
└─────────────────────────────────────────────────────────┘
```

#### Features:
- **Grid Layout**: Angular, high-contrast design thumbnails
- **Quick Actions**: Edit, Duplicate, Delete, Share/Make Public
- **Filters**: All Designs, Private Only, Public Only
- **Sort**: Recent, Alphabetical, Most Edited
- **New Design**: Prominent [+] tile always first

### **3. PUBLIC GALLERY** (`/gallery`)
**Purpose**: Community Discovery & Inspiration

#### Layout:
```
┌─────────────────────────────────────────────────────────┐
│ UNDERGROUND GALLERY          [Flyers|Zines|Protest] ▼  │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│ │IMG1 │ │IMG2 │ │IMG3 │ │IMG4 │ │IMG5 │ │IMG6 │  ...  │
│ │DUPE │ │DUPE │ │DUPE │ │DUPE │ │DUPE │ │DUPE │       │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘       │
│ @user1  @user2  @user3  @user4  @user5  @user6        │
└─────────────────────────────────────────────────────────┘
```

#### Features:
- **Category Filters**: Punk Flyers, Zines, Protest Art, Show Posters
- **Search**: By title, creator, tags
- **Duplicate Button**: Clone design to your account
- **Creator Attribution**: Link to user's public profile
- **Gritty Aesthetic**: Photocopied, high-contrast, underground vibe

### **4. EDITOR** (`/editor` or `/editor/[id]`)
**Purpose**: Design Creation & Editing

#### Integration Points:
- **Auto-Save**: Save to backend every 30 seconds
- **Manual Save**: Ctrl+S or "Save" button
- **Publish Option**: Make design public/private toggle
- **Back to Dashboard**: Clear navigation back to personal designs

---

## 🔐 AUTHENTICATION UX

### **Header States**

#### Anonymous:
```
[ZINE LIFE]                               [LOGIN]
```

#### Logged-In:
```
[ZINE LIFE]              [Avatar] [Name] ▼
                              │
                              └─── My Designs
                                   Account  
                                   Logout
```

#### Dropdown Menu (Post-Punk Style):
- **Angular borders**, **high contrast**
- **Options**: "My Designs", "Account Settings", "Logout"
- **Hover effects**: Neon green highlights

---

## 🎨 DESIGN DECISIONS TO MAKE

### **"Start Creating" Button Behavior:**
**Option A (Recommended)**: 
- Anonymous → Login → Dashboard → Choose Template/Blank
- Logged-in → Dashboard (let user choose from their designs or start new)

**Option B**: 
- Direct to Editor (blank canvas) regardless of auth state
- Pros: Fewer clicks, immediate creation
- Cons: Bypasses personal design management

### **Homepage for Logged-In Users:**
**Option A (Recommended)**: Personal summary + community feed
**Option B**: Redirect directly to Dashboard
**Option C**: Keep same as anonymous (public showcase)

### **Navigation Strategy:**
- **Primary**: Dashboard-centric (designs are central)
- **Secondary**: Editor-centric (creation is central)
- **Hybrid**: Context-aware (smart routing based on user state)

---

## 🚀 IMPLEMENTATION PRIORITY

### **Phase 1 (Next Sprint)**:
1. Frontend auth integration (cookie → store)
2. Header authentication UI (dropdown)
3. Dashboard page creation
4. Smart homepage logic

### **Phase 2 (Following Sprint)**:
5. Public gallery page
6. Editor backend integration
7. Design management features

### **Phase 3 (Polish)**:
8. Advanced filters and search
9. User profiles
10. Design collaboration features

---

**🤘 The goal: Make users feel like they're using a tool built BY the underground, FOR the underground.**