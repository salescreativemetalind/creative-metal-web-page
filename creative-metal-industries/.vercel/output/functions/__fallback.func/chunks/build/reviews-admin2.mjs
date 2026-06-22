import { existsSync, readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

function p() {
  if (process.env.VERCEL) return "/tmp/reviews.json";
  const e = join(process.cwd(), "data");
  return existsSync(e) || mkdirSync(e, { recursive: true }), join(e, "reviews.json");
}
function f() {
  const e = p();
  if (!existsSync(e)) return [];
  try {
    return JSON.parse(readFileSync(e, "utf-8"));
  } catch {
    return [];
  }
}
function l(e) {
  const t = process.env.ADMIN_TOKEN;
  return t ? !!e && e === t : (console.error("ADMIN_TOKEN environment variable not set!"), false);
}
function d() {
  return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
}
async function h(e) {
  const s = new URL(e.request.url).searchParams.get("token");
  if (!l(s)) return d();
  const n = f().sort((a, i) => new Date(i.createdAt).getTime() - new Date(a.createdAt).getTime());
  return new Response(JSON.stringify({ ok: true, data: n, total: n.length }), { status: 200, headers: { "Content-Type": "application/json" } });
}

export { h as GET };
//# sourceMappingURL=reviews-admin2.mjs.map
