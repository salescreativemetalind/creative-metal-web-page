import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

function w() {
  if (process.env.VERCEL) return "/tmp/reviews.json";
  const e = join(process.cwd(), "data");
  return existsSync(e) || mkdirSync(e, { recursive: true }), join(e, "reviews.json");
}
function O() {
  const e = w();
  if (!existsSync(e)) return [];
  try {
    return JSON.parse(readFileSync(e, "utf-8"));
  } catch {
    return [];
  }
}
function T(e) {
  writeFileSync(w(), JSON.stringify(e, null, 2), "utf-8");
}
function j(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function a(e, n) {
  return j(String(e).trim().slice(0, n));
}
function A(e) {
  return createHash("sha256").update(e + "cmi_salt_2026").digest("hex").slice(0, 16);
}
function k(e) {
  var _a, _b;
  return ((_b = (_a = e.headers.get("x-forwarded-for")) == null ? void 0 : _a.split(",")[0]) == null ? void 0 : _b.trim()) || e.headers.get("x-real-ip") || "unknown";
}
const f = /* @__PURE__ */ new Map();
function x(e) {
  const r = Date.now(), c = (f.get(e) || []).filter((i) => r - i < 864e5);
  return c.length >= 10 ? true : (f.set(e, [...c, r]), false);
}
function C() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
async function E(e) {
  const n = k(e.request), o = A(n);
  let r;
  try {
    r = await e.request.json();
  } catch {
    return t(400, "Invalid request format.");
  }
  const { name: c, title: i, comment: s, rating: h, website: l, product: S } = r;
  if (l && String(l).trim() !== "") return new Response(JSON.stringify({ ok: true, message: "Review submitted for moderation." }), { status: 200, headers: { "Content-Type": "application/json" } });
  if (x(o)) return t(429, "Too many reviews from your connection. Please try again later.");
  const u = parseInt(String(h));
  if (!u || u < 1 || u > 5) return t(400, "Please select a star rating between 1 and 5.");
  if (!i || String(i).trim().length < 3) return t(400, "Review title must be at least 3 characters.");
  if (!s || String(s).trim().length < 20) return t(400, "Review must be at least 20 characters.");
  if (String(s).trim().length > 2e3) return t(400, "Review must be under 2000 characters.");
  const p = O(), y = 600 * 1e3, v = a(String(s), 2e3);
  if (p.some((m) => m.ip === o && Date.now() - new Date(m.createdAt).getTime() < y && m.comment === v)) return t(400, "This review has already been submitted.");
  const b = { id: C(), name: a(c || "Anonymous", 80) || "Anonymous", title: a(String(i), 120), comment: a(String(s), 2e3), rating: u, product: a(S || "", 120), status: "approved", createdAt: (/* @__PURE__ */ new Date()).toISOString(), approvedAt: (/* @__PURE__ */ new Date()).toISOString(), ip: o };
  return p.push(b), T(p), new Response(JSON.stringify({ ok: true, message: "Thank you! Your review has been submitted and will appear after moderation." }), { status: 201, headers: { "Content-Type": "application/json" } });
}
function t(e, n) {
  return new Response(JSON.stringify({ ok: false, error: n }), { status: e, headers: { "Content-Type": "application/json" } });
}

export { E as POST };
//# sourceMappingURL=reviews32.mjs.map
