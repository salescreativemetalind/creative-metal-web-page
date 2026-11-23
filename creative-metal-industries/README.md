# Creative Metal Industries

Official website for **Creative Metal Industries** — a premium metal fabrication and engineering company based in Vadodara, Gujarat, India.

Built with SolidStart (SolidJS) with full server-side rendering and a backend API for handling customer enquiries via email.

---

## Tech Stack

- **Framework:** [SolidStart](https://start.solidjs.com) (SolidJS)
- **Build Tool:** [Vinxi](https://vinxi.dev) + Vite
- **Server:** Node.js (Nitro)
- **Email:** Nodemailer via Gmail SMTP
- **Language:** TypeScript
- **Styling:** Plain CSS

---

## Getting Started

### Prerequisites

- Node.js **v18 or higher**
- A Gmail account with an [App Password](https://myaccount.google.com/security) set up

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd creative-metal-industries

# Install dependencies
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and replace its placeholders locally. Never commit the populated `.env` file.

| Variable | Required | Exposure | Purpose |
|---|---|---|---|
| `SMTP_USER` | Yes, for enquiry email | Server-only | Gmail account used by the enquiry mail transport |
| `SMTP_PASS` | Yes, for enquiry email | Secret, server-only | Gmail App Password |
| `ADMIN_TOKEN` | Yes, for reviews administration | Secret, server-only | Strong random bearer token for `/admin/reviews` |
| `VITE_GA4_ID` | No | Public | Enables the GA4 script when configured |
| `VITE_GSC_VERIFICATION` | No | Public | Emits the Search Console verification meta tag |

Variables prefixed with `VITE_` are included in client output and must never contain secrets. Configure production values in the hosting environment rather than committing them.

> To get a Gmail App Password: Google Account → Security → Enable 2-Step Verification → Search "App passwords" → Create one for "Mail".

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Start dev server with hot reload   |
| `npm run build` | Build for production               |
| `npm run start` | Run the production build           |

---

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Shared Navbar + Footer
├── routes/
│   ├── index.tsx           # Homepage (/)
│   ├── about.tsx           # About page (/about)
│   ├── products.tsx        # Products page (/products)
│   ├── blog/
│   │   ├── index.tsx       # Blog listing (/blog)
│   │   └── [slug].tsx      # Blog post (/blog/:slug)
│   └── api/
│       └── enquiry.ts      # POST /api/enquiry — email handler
├── app.tsx                 # Root component
└── app.css                 # Global styles
```

---

## API

### `POST /api/enquiry`

Handles the product enquiry form. Validates the input and sends a formatted HTML email to the business inbox.

**Required fields:** `name`, `phone`, `metal`, `product`  
**Optional fields:** `company`, `email`, `message`

**Responses:**
- `200` — Email sent successfully
- `400` — Missing required fields
- `500` — Email sending failed

---

## Deployment

```bash
npm run build
```

The production output is in `.output/`. Copy it to your server, set the environment variables, then run:

```bash
npm run start
```

> Recommended: use a process manager like [PM2](https://pm2.keymetrics.io/) to keep the server running.

---
## Notes

- All product and blog content is **hardcoded** in the route files — no database is used.
- To update products or blog posts, edit the respective route files and rebuild.
- The contact form on the homepage is the only feature that requires the backend to be running.

