/**
 * /api/reviews-admin
 * Token-protected admin API — delete only.
 *
 * GET    /api/reviews-admin?token=...        → list all reviews (any status)
 * DELETE /api/reviews-admin  { token, id }   → permanently delete one review
 */

import type { APIEvent } from "@solidjs/start/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

interface Review {
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
function validToken(token: string | null): boolean {
  const expected = process.env.ADMIN_TOKEN || "Ss@9998280619";
  return !!token && token === expected;
}

function unauth() {
  return new Response(
    JSON.stringify({ ok: false, error: "Unauthorized" }),
    { status: 401, headers: { "Content-Type": "application/json" } }
  );
}
function fail(status: number, msg: string) {
  return new Response(
    JSON.stringify({ ok: false, error: msg }),
    { status, headers: { "Content-Type": "application/json" } }
  );
}

// ── GET — list all reviews ────────────────────────────────────
export async function GET(event: APIEvent) {
  const url   = new URL(event.request.url);
  const token = url.searchParams.get("token");
  if (!validToken(token)) return unauth();

  const all = load().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return new Response(
    JSON.stringify({ ok: true, data: all, total: all.length }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

// ── DELETE — remove one review ────────────────────────────────
export async function DELETE(event: APIEvent) {
  let body: Record<string, string>;
  try { body = await event.request.json(); }
  catch { return fail(400, "Invalid JSON"); }

  if (!validToken(body.token)) return unauth();

  const { id } = body;
  if (!id) return fail(400, "Missing review id");

  const all     = load();
  const updated = all.filter((r) => r.id !== id);
  if (updated.length === all.length) return fail(404, "Review not found");

  save(updated);
  return new Response(
    JSON.stringify({ ok: true, message: "Review deleted." }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
