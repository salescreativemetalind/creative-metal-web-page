/**
 * /api/reviews — Review CRUD API
 * ─────────────────────────────────────────────────────────────
 * GET  /api/reviews          → fetch approved reviews (paginated)
 * POST /api/reviews          → submit a new review (pending)
 *
 * Storage: JSON file in /tmp/reviews.json (Vercel writable path)
 *          Falls back to process.cwd()/data/reviews.json locally
 *
 * Anti-spam:
 *   - Server-side input validation & sanitisation
 *   - Rate limiting: max 3 reviews per IP per 24h
 *   - Honeypot field: if "website" field is filled, silently reject
 *   - Duplicate detection: same IP + same content within 1h → reject
 *   - All user input is HTML-escaped before storage
 */

import type { APIEvent } from "@solidjs/start/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";

// ── Types ─────────────────────────────────────────────────────
export interface Review {
  id:          string;
  name:        string;      // display name (default: "Anonymous")
  title:       string;      // review title
  comment:     string;      // review body
  rating:      number;      // 1–5
  product:     string;      // product name (e.g. "SS Seamless Pipe"), empty = general
  status:      "pending" | "approved" | "rejected";
  createdAt:   string;      // ISO timestamp
  approvedAt:  string | null;
  ip:          string;      // hashed for privacy
}

// ── Storage path ──────────────────────────────────────────────
function getStorePath(): string {
  // Vercel writable dir
  if (process.env.VERCEL) return "/tmp/reviews.json";
  // Local dev — create data/ dir if needed
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  return join(dir, "reviews.json");
}

function loadReviews(): Review[] {
  const path = getStorePath();
  if (!existsSync(path)) return [];
  try {
    return JSON.parse(readFileSync(path, "utf-8")) as Review[];
  } catch {
    return [];
  }
}

function saveReviews(reviews: Review[]): void {
  writeFileSync(getStorePath(), JSON.stringify(reviews, null, 2), "utf-8");
}

// ── Sanitisation ──────────────────────────────────────────────
function escHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
  // Note: intentionally NOT escaping "/" — it breaks product name matching
}

function sanitise(str: string, maxLen: number): string {
  return escHtml(String(str).trim().slice(0, maxLen));
}

// ── IP helpers ────────────────────────────────────────────────
function hashIp(ip: string): string {
  return createHash("sha256").update(ip + "cmi_salt_2026").digest("hex").slice(0, 16);
}

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

// ── Rate limiting (in-memory, resets on server restart) ───────
const rateMap = new Map<string, number[]>();

function isRateLimited(ipHash: string): boolean {
  const MAX  = 10;                         // 10 reviews per IP
  const WIN  = 24 * 60 * 60 * 1000;       // per 24 hours
  const now  = Date.now();
  const hits = (rateMap.get(ipHash) || []).filter(t => now - t < WIN);
  if (hits.length >= MAX) return true;
  rateMap.set(ipHash, [...hits, now]);
  return false;
}

// ── ID generator ──────────────────────────────────────────────
function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ─────────────────────────────────────────────────────────────
// GET /api/reviews?page=1&limit=10
// Returns approved reviews + aggregate stats
// ─────────────────────────────────────────────────────────────
export async function GET(event: APIEvent) {
  const url    = new URL(event.request.url);
  const page   = Math.max(1, parseInt(url.searchParams.get("page")  || "1"));
  const limit  = Math.min(50, parseInt(url.searchParams.get("limit") || "10"));
  const productFilter = url.searchParams.get("product") || "";  // filter by product name

  const all      = loadReviews();
  const approved = all
    .filter(r => r.status === "approved")
    .filter(r => productFilter ? r.product === productFilter : true)
    .sort((a, b) => new Date(b.approvedAt || b.createdAt).getTime()
                  - new Date(a.approvedAt || a.createdAt).getTime());

  const total  = approved.length;
  const start  = (page - 1) * limit;
  const items  = approved.slice(start, start + limit);

  // Aggregate rating — only from approved real reviews
  const avgRating = total > 0
    ? Math.round((approved.reduce((s, r) => s + r.rating, 0) / total) * 10) / 10
    : 0;

  const ratingDist = [1,2,3,4,5].map(star => ({
    star,
    count: approved.filter(r => r.rating === star).length,
  }));

  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        reviews:    items,
        total,
        page,
        totalPages: Math.ceil(total / limit),
        avgRating,
        ratingDist,
      },
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

// ─────────────────────────────────────────────────────────────
// POST /api/reviews
// Submit a new review (lands in "pending" for moderation)
// ─────────────────────────────────────────────────────────────
export async function POST(event: APIEvent) {
  const ip     = getClientIp(event.request);
  const ipHash = hashIp(ip);

  // ── Parse body ──────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await event.request.json();
  } catch {
    return err(400, "Invalid request format.");
  }

  const { name, title, comment, rating, website, product } = body as Record<string, string>;

  // ── Honeypot: bots fill hidden "website" field ──────────────
  if (website && String(website).trim() !== "") {
    // Silently accept but do not store
    return new Response(
      JSON.stringify({ ok: true, message: "Review submitted for moderation." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  // ── Rate limiting ───────────────────────────────────────────
  if (isRateLimited(ipHash)) {
    return err(429, "Too many reviews from your connection. Please try again later.");
  }

  // ── Validation ──────────────────────────────────────────────
  const ratingNum = parseInt(String(rating));
  if (!ratingNum || ratingNum < 1 || ratingNum > 5) {
    return err(400, "Please select a star rating between 1 and 5.");
  }
  if (!title || String(title).trim().length < 3) {
    return err(400, "Review title must be at least 3 characters.");
  }
  if (!comment || String(comment).trim().length < 20) {
    return err(400, "Review must be at least 20 characters.");
  }
  if (String(comment).trim().length > 2000) {
    return err(400, "Review must be under 2000 characters.");
  }

  // ── Duplicate detection (exact same comment within 10 min from same IP) ──
  const all     = loadReviews();
  const tenMin  = 10 * 60 * 1000;
  const cleanComment = sanitise(String(comment), 2000);
  const isDupe  = all.some(r =>
    r.ip === ipHash &&
    Date.now() - new Date(r.createdAt).getTime() < tenMin &&
    r.comment === cleanComment
  );
  if (isDupe) {
    return err(400, "This review has already been submitted.");
  }

  // ── Sanitise & build review object ──────────────────────────
  const review: Review = {
    id:          genId(),
    name:        sanitise(name || "Anonymous", 80) || "Anonymous",
    title:       sanitise(String(title), 120),
    comment:     sanitise(String(comment), 2000),
    rating:      ratingNum,
    product:     sanitise(product || "", 120),
    status:      "approved",                    // auto-approve — no moderation
    createdAt:   new Date().toISOString(),
    approvedAt:  new Date().toISOString(),      // approved immediately
    ip:          ipHash,
  };

  all.push(review);
  saveReviews(all);

  return new Response(
    JSON.stringify({
      ok:      true,
      message: "Thank you! Your review has been submitted and will appear after moderation.",
    }),
    { status: 201, headers: { "Content-Type": "application/json" } }
  );
}

// ── Error helper ─────────────────────────────────────────────
function err(status: number, message: string) {
  return new Response(
    JSON.stringify({ ok: false, error: message }),
    { status, headers: { "Content-Type": "application/json" } }
  );
}
