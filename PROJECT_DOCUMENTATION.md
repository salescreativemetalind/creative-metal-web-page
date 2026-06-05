# Creative Metal Industries — Project Documentation

## Overview

This is the official website for **Creative Metal Industries**, a metal fabrication and engineering company. It is a **full-stack SSR (Server-Side Rendered) web application** built with SolidStart (SolidJS framework), deployed on a Node.js server.

The project includes both a **frontend** (UI pages, components) and a **lightweight backend** (a server-side API for handling enquiry form submissions via email).

---

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Framework  | [SolidStart](https://start.solidjs.com) (`@solidjs/start` v1.0.11) |
| UI Library | [SolidJS](https://solidjs.com) v1.9.3   |
| Routing    | `@solidjs/router` v0.15.3              |
| Meta/SEO   | `@solidjs/meta` v0.29.4                |
| Build Tool | [Vinxi](https://vinxi.dev) v0.5.7 (on top of Vite 6) |
| Server     | Node.js (Nitro server preset)           |
| Email      | `nodemailer` v6.9.14 via Gmail SMTP     |
| Language   | TypeScript                              |
| Styling    | Plain CSS (global `app.css` + scoped per-route CSS) |

> **No database is used.** All product and blog data is hardcoded as static arrays directly in the route files.

---

## Project Structure

```
creative-metal-industries/
├── src/
│   ├── app.tsx                  # Root app component (wraps all pages)
│   ├── app.css                  # Global styles
│   ├── entry-client.tsx         # Client-side hydration entry point
│   ├── entry-server.tsx         # Server-side rendering entry point
│   │
│   ├── components/
│   │   └── Layout.tsx           # Shared layout (Navbar + Footer)
│   │
│   └── routes/
│       ├── index.tsx            # Homepage (/)
│       ├── about.tsx            # About page (/about)
│       ├── products.tsx         # Products listing (/products)
│       ├── products.css         # Styles scoped to products page
│       │
│       ├── blog/
│       │   ├── index.tsx        # Blog listing page (/blog)
│       │   └── [slug].tsx       # Individual blog post (/blog/:slug)
│       │
│       └── api/
│           └── enquiry.ts       # POST /api/enquiry — backend API route
│
├── .env                         # Environment variables (SMTP credentials)
├── app.config.ts                # SolidStart/Vinxi configuration
├── package.json                 # Dependencies and scripts
└── .gitignore
```

---

## Pages & Routes

| Route          | File                        | Description                                          |
|----------------|-----------------------------|------------------------------------------------------|
| `/`            | `src/routes/index.tsx`      | Homepage with hero slideshow, product categories, enquiry form |
| `/about`       | `src/routes/about.tsx`      | Company background, mission, team info               |
| `/products`    | `src/routes/products.tsx`   | Product listing (static data)                        |
| `/blog`        | `src/routes/blog/index.tsx` | Blog article listing (9 hardcoded articles)          |
| `/blog/:slug`  | `src/routes/blog/[slug].tsx`| Individual blog post resolved by slug                |

---

## Backend — API Endpoint

### `POST /api/enquiry`

**File:** `src/routes/api/enquiry.ts`

This is the only backend API route in the project. It handles the product enquiry contact form.

**Request Body (JSON):**

| Field     | Type   | Required | Description                        |
|-----------|--------|----------|------------------------------------|
| `name`    | string | ✅ Yes   | Full name of the enquirer          |
| `phone`   | string | ✅ Yes   | Phone/WhatsApp number              |
| `metal`   | string | ✅ Yes   | Material type (e.g. Stainless Steel) |
| `product` | string | ✅ Yes   | Product form (e.g. Sheet, Pipe)    |
| `company` | string | ❌ No    | Company name                       |
| `email`   | string | ❌ No    | Email address                      |
| `message` | string | ❌ No    | Additional requirements            |

**Responses:**

| Status | Meaning                                      |
|--------|----------------------------------------------|
| `200`  | Email sent successfully — `{ ok: true }`     |
| `400`  | Validation failed (missing required fields)  |
| `500`  | SMTP/server error — email failed to send     |

**What it does:**
1. Validates that `name`, `phone`, `metal`, and `product` are present.
2. Creates a Gmail SMTP transporter using `nodemailer`.
3. Composes a styled HTML email with all enquiry details.
4. Sends the email to `creativemetalind@gmail.com`.
5. Sets the `replyTo` header to the enquirer's email (if provided), so replies go directly to them.

---

## Environment Variables

Stored in `.env` at the project root.

| Variable    | Description                                              |
|-------------|----------------------------------------------------------|
| `SMTP_USER` | Gmail address used to send enquiry emails                |
| `SMTP_PASS` | Gmail App Password (16-character app-specific password)  |

> **Security note:** The `.env` file contains real credentials. Never commit it to a public repository. It is listed in `.gitignore`.

### Setting up Gmail App Password

To generate or replace the SMTP credentials:
1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Search for **"App passwords"** and create one for "Mail"
4. Use the generated 16-character password as `SMTP_PASS`

---

## Configuration

**File:** `app.config.ts`

```ts
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,               // Full server-side rendering enabled
  server: {
    preset: "node-server", // Outputs a Node.js-compatible server
  },
  vite: {
    build: {
      cssCodeSplit: false, // Bundles all CSS into a single file
    },
  },
});
```

---

## Scripts

Defined in `package.json`:

| Command        | Description                              |
|----------------|------------------------------------------|
| `npm run dev`  | Start development server with hot reload |
| `npm run build`| Build for production (outputs to `.output/`) |
| `npm run start`| Run the production build                 |

Node.js version **≥ 18** is required.

---

## Data Model

There is no database. All content is managed as static TypeScript arrays in the route files.

**Products data** — defined in `src/routes/products.tsx`  
**Blog articles** — defined in `src/routes/blog/index.tsx` and `[slug].tsx`  

To add or update products/blog posts, you edit those files directly and rebuild.

---

## Deployment

The production build outputs to `.output/`:

```
.output/
├── public/         # Static assets served directly by a CDN/web server
│   ├── _build/     # Hashed JS/CSS bundles
│   └── _server/    # SSR assets
└── nitro.json      # Server configuration
```

To deploy:
1. Run `npm run build`
2. Copy `.output/` to your server
3. Set environment variables (`SMTP_USER`, `SMTP_PASS`) on the server
4. Run `npm run start` (or configure a process manager like PM2)

---

## Summary

| Aspect         | Answer                              |
|----------------|-------------------------------------|
| Has a backend? | ✅ Yes — one SSR API route for email |
| Has a database?| ❌ No — all data is static/hardcoded |
| Is it SSR?     | ✅ Yes — full server-side rendering  |
| Email service? | ✅ Gmail SMTP via nodemailer         |
| Framework      | SolidStart (SolidJS)                |
