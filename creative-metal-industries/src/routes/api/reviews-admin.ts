/**
 * /api/reviews-admin
 * Token-protected admin API — delete only.
 *
 * GET    /api/reviews-admin                 → list all reviews (any status)
 * DELETE /api/reviews-admin  { id }          → permanently delete one review
 *
 * Both methods require: Authorization: Bearer <ADMIN_TOKEN>
 */

import type { APIEvent } from "@solidjs/start/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export interface Review {
  id: string;
  name: string;
  title: string;
  comment: string;
  rating: number;
  product: string;
  status: string;
  createdAt: string;
  approvedAt: string | null;
  ip: string;
}

// ── same storage helper as reviews.ts ─────────────────────────
function storePath(): string {
  if (process.env.VERCEL) return "/tmp/reviews.json";
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  return join(dir, "reviews.json");
}
function load(): Review[] {
  const p = storePath();
  if (!existsSync(p)) return [];
  try { return JSON.parse(readFileSync(p, "utf-8")); } catch { return []; }
}
function save(data: Review[]) {
  writeFileSync(storePath(), JSON.stringify(data, null, 2), "utf-8");
}

// ── token check ───────────────────────────────────────────────
export function isAuthorized(request: Request, expected = process.env.ADMIN_TOKEN): boolean {
  if (!expected) {
    console.error("ADMIN_TOKEN environment variable not set!");
    return false;
  }

  const authorization = request.headers.get("Authorization");
  const match = authorization?.match(/^Bearer (.+)$/i);
  return !!match && match[1] === expected;
}

const responseHeaders = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store, private",
};

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), { status, headers: responseHeaders });
}

function unauth() {
  return jsonResponse(401, { ok: false, error: "Unauthorized" });
}
function fail(status: number, msg: string) {
  return jsonResponse(status, { ok: false, error: msg });
}

interface HandlerDependencies {
  load: () => Review[];
  save: (data: Review[]) => void;
  expectedToken: () => string | undefined;
}

export function createReviewsAdminHandlers(dependencies: HandlerDependencies) {
  // ── GET — list all reviews ──────────────────────────────────
  async function GET(event: APIEvent) {
    const url = new URL(event.request.url);
    if (url.searchParams.has("token")) return fail(400, "Query-string authentication is not supported");
    if (!isAuthorized(event.request, dependencies.expectedToken())) return unauth();

    const all = dependencies.load().sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const data = all.map(({ ip: _ip, ...review }) => review);
    return jsonResponse(200, { ok: true, data, total: data.length });
  }

  // ── DELETE — remove one review ──────────────────────────────
  async function DELETE(event: APIEvent) {
    const url = new URL(event.request.url);
    if (url.searchParams.has("token")) return fail(400, "Query-string authentication is not supported");
    if (!isAuthorized(event.request, dependencies.expectedToken())) return unauth();

    let body: unknown;
    try { body = await event.request.json(); }
    catch { return fail(400, "Invalid JSON"); }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return fail(400, "Invalid request body");
    }
    if (Object.prototype.hasOwnProperty.call(body, "token")) {
      return fail(400, "Request-body authentication is not supported");
    }

    const { id } = body as Record<string, string>;
    if (!id) return fail(400, "Missing review id");

    const all = dependencies.load();
    const updated = all.filter((r) => r.id !== id);
    if (updated.length === all.length) return fail(404, "Review not found");

    dependencies.save(updated);
    return jsonResponse(200, { ok: true, message: "Review deleted." });
  }

  return { GET, DELETE };
}

const handlers = createReviewsAdminHandlers({
  load,
  save,
  expectedToken: () => process.env.ADMIN_TOKEN,
});

export const GET = handlers.GET;
export const DELETE = handlers.DELETE;
