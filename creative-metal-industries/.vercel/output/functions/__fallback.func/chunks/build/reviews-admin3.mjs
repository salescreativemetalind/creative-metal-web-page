import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

function u() {
  if (process.env.VERCEL) return "/tmp/reviews.json";
  const e = join(process.cwd(), "data");
  return existsSync(e) || mkdirSync(e, { recursive: true }), join(e, "reviews.json");
}
function d() {
  const e = u();
  if (!existsSync(e)) return [];
  try {
    return JSON.parse(readFileSync(e, "utf-8"));
  } catch {
    return [];
  }
}
function y(e) {
  writeFileSync(u(), JSON.stringify(e, null, 2), "utf-8");
}
function v(e) {
  const n = process.env.ADMIN_TOKEN;
  return n ? !!e && e === n : (console.error("ADMIN_TOKEN environment variable not set!"), false);
}
function w() {
  return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
}
function t(e, n) {
  return new Response(JSON.stringify({ ok: false, error: n }), { status: e, headers: { "Content-Type": "application/json" } });
}
async function S(e) {
  let n;
  try {
    n = await e.request.json();
  } catch {
    return t(400, "Invalid JSON");
  }
  if (!v(n.token)) return w();
  const { id: r } = n;
  if (!r) return t(400, "Missing review id");
  const i = d(), o = i.filter((c) => c.id !== r);
  return o.length === i.length ? t(404, "Review not found") : (y(o), new Response(JSON.stringify({ ok: true, message: "Review deleted." }), { status: 200, headers: { "Content-Type": "application/json" } }));
}

export { S as DELETE };
//# sourceMappingURL=reviews-admin3.mjs.map
