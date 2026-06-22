import { existsSync, readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

function v() {
  if (process.env.VERCEL) return "/tmp/reviews.json";
  const e = join(process.cwd(), "data");
  return existsSync(e) || mkdirSync(e, { recursive: true }), join(e, "reviews.json");
}
function w() {
  const e = v();
  if (!existsSync(e)) return [];
  try {
    return JSON.parse(readFileSync(e, "utf-8"));
  } catch {
    return [];
  }
}
async function R(e) {
  const s = new URL(e.request.url), i = Math.max(1, parseInt(s.searchParams.get("page") || "1")), o = Math.min(50, parseInt(s.searchParams.get("limit") || "10")), c = s.searchParams.get("product") || "", n = w().filter((t) => t.status === "approved").filter((t) => c ? t.product === c : true).sort((t, r) => new Date(r.approvedAt || r.createdAt).getTime() - new Date(t.approvedAt || t.createdAt).getTime()), a = n.length, p = (i - 1) * o, d = n.slice(p, p + o), g = a > 0 ? Math.round(n.reduce((t, r) => t + r.rating, 0) / a * 10) / 10 : 0, m = [1, 2, 3, 4, 5].map((t) => ({ star: t, count: n.filter((r) => r.rating === t).length }));
  return new Response(JSON.stringify({ ok: true, data: { reviews: d, total: a, page: i, totalPages: Math.ceil(a / o), avgRating: g, ratingDist: m } }), { status: 200, headers: { "Content-Type": "application/json" } });
}

export { R as GET };
//# sourceMappingURL=reviews2.mjs.map
