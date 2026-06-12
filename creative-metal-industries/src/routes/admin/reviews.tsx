/**
 * /admin/reviews — delete-only review moderation
 * Token: ADMIN_TOKEN from .env  (default: cmi-admin-2026)
 * Not linked publicly. noindex. Access at: /admin/reviews
 */

import { Title, Meta } from "@solidjs/meta";
import { createSignal, For, Show } from "solid-js";

interface Review {
  id: string;
  name: string;
  title: string;
  comment: string;
  rating: number;
  product: string;
  status: string;
  createdAt: string;
}

function Stars(props: { rating: number }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((s) => (
        <span style={{ color: s <= props.rating ? "#C96A0A" : "#d1d5db", "font-size": "1rem" }}>★</span>
      ))}
    </span>
  );
}

export default function AdminReviews() {
  const [token,    setToken]    = createSignal("");
  const [authed,   setAuthed]   = createSignal(false);
  const [loginErr, setLoginErr] = createSignal("");
  const [busy,     setBusy]     = createSignal(false);
  const [reviews,  setReviews]  = createSignal<Review[]>([]);
  const [deleting, setDeleting] = createSignal<string | null>(null);
  const [search,   setSearch]   = createSignal("");

  // ── login: call API with token ─────────────────────────────
  async function login(e: SubmitEvent) {
    e.preventDefault();
    setBusy(true);
    setLoginErr("");
    try {
      const res  = await fetch(`/api/reviews-admin?token=${encodeURIComponent(token())}`);
      const json = await res.json();
      if (json.ok) {
        setReviews(json.data);
        setAuthed(true);
      } else {
        setLoginErr("Wrong token. Check ADMIN_TOKEN in .env");
      }
    } catch {
      setLoginErr("Could not connect to server.");
    } finally {
      setBusy(false);
    }
  }

  // ── reload list ────────────────────────────────────────────
  async function reload() {
    setBusy(true);
    try {
      const res  = await fetch(`/api/reviews-admin?token=${encodeURIComponent(token())}`);
      const json = await res.json();
      if (json.ok) setReviews(json.data);
    } catch { /* ignore */ }
    finally { setBusy(false); }
  }

  // ── delete one review ──────────────────────────────────────
  async function del(id: string, name: string) {
    if (!confirm(`Delete review by "${name}"?\nThis cannot be undone.`)) return;
    setDeleting(id);
    try {
      const res  = await fetch("/api/reviews-admin", {
        method:  "DELETE",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ token: token(), id }),
      });
      const json = await res.json();
      if (json.ok) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
      } else {
        alert(json.error || "Delete failed.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setDeleting(null);
    }
  }

  const filtered = () => {
    const q = search().trim().toLowerCase();
    if (!q) return reviews();
    return reviews().filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q) ||
        r.comment.toLowerCase().includes(q) ||
        r.product.toLowerCase().includes(q)
    );
  };

  return (
    <>
      <Title>Reviews Admin | CMI</Title>
      <Meta name="robots" content="noindex, nofollow" />

      {/* ══ LOGIN ══ */}
      <Show when={!authed()}>
        <div style={{
          "min-height": "100vh", background: "#f3f4f6",
          display: "flex", "align-items": "center", "justify-content": "center",
          padding: "1rem",
        }}>
          <form
            onSubmit={login}
            style={{
              background: "#fff", border: "1px solid #e5e7eb",
              "border-radius": "16px", padding: "2.5rem 2rem",
              width: "100%", "max-width": "360px",
              "box-shadow": "0 8px 32px rgba(0,0,0,0.10)",
              display: "flex", "flex-direction": "column", gap: "1.2rem",
            }}
          >
            <div style={{ "text-align": "center" }}>
              <div style={{ "font-size": "3rem", "line-height": "1", "margin-bottom": "0.75rem" }}>🔐</div>
              <h1 style={{ "font-size": "1.4rem", "font-weight": "800", margin: "0 0 0.25rem", color: "#111827" }}>
                Reviews Admin
              </h1>
              <p style={{ color: "#6b7280", "font-size": "0.85rem", margin: 0 }}>
                Creative Metal Industries
              </p>
            </div>

            <div style={{ display: "flex", "flex-direction": "column", gap: "0.4rem" }}>
              <label style={{ "font-size": "0.85rem", "font-weight": "600", color: "#374151" }}>
                Admin Token
              </label>
              <input
                type="password"
                placeholder="Enter your admin token"
                value={token()}
                onInput={(e) => setToken(e.currentTarget.value)}
                required
                autofocus
                style={{
                  padding: "0.7rem 0.9rem", "border-radius": "8px",
                  border: "1.5px solid #d1d5db", "font-size": "1rem",
                  width: "100%", "box-sizing": "border-box",
                  outline: "none",
                }}
              />
            </div>

            <Show when={loginErr()}>
              <div style={{
                background: "#FEE2E2", border: "1px solid #f87171",
                "border-radius": "8px", padding: "0.6rem 0.85rem",
                color: "#991B1B", "font-size": "0.875rem",
              }}>
                ⚠ {loginErr()}
              </div>
            </Show>

            <button
              type="submit"
              disabled={busy()}
              style={{
                background: busy()
                  ? "#d1d5db"
                  : "linear-gradient(135deg,#E8821A,#d85c2a)",
                color: "#fff", border: "none", "border-radius": "8px",
                padding: "0.8rem", "font-size": "1rem", "font-weight": "700",
                cursor: busy() ? "not-allowed" : "pointer", width: "100%",
                transition: "opacity 0.2s",
              }}
            >
              {busy() ? "Signing in…" : "Sign In →"}
            </button>

            <p style={{ "font-size": "0.75rem", color: "#9ca3af", "text-align": "center", margin: 0 }}>
              Set <code>ADMIN_TOKEN</code> in <code>.env</code> to change the password
            </p>
          </form>
        </div>
      </Show>

      {/* ══ DASHBOARD ══ */}
      <Show when={authed()}>
        <div style={{ "min-height": "100vh", background: "#f3f4f6" }}>

          {/* top bar */}
          <header style={{
            background: "#fff", "border-bottom": "1px solid #e5e7eb",
            padding: "1rem 1.5rem", display: "flex",
            "align-items": "center", gap: "1rem", "flex-wrap": "wrap",
          }}>
            <span style={{
              background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff",
              "font-weight": "800", padding: "0.3rem 0.75rem",
              "border-radius": "8px", "font-size": "0.9rem",
            }}>CMI</span>

            <div style={{ flex: 1 }}>
              <span style={{ "font-weight": "700", "font-size": "1.05rem", color: "#111827" }}>
                Reviews Admin
              </span>
              <span style={{ color: "#6b7280", "font-size": "0.85rem", "margin-left": "0.75rem" }}>
                {reviews().length} review{reviews().length !== 1 ? "s" : ""}
              </span>
            </div>

            <a href="/products" target="_blank" style={linkStyle}>View Products ↗</a>
            <button onClick={reload} disabled={busy()} style={linkStyle}>
              {busy() ? "…" : "↻ Refresh"}
            </button>
            <button
              onClick={() => { setAuthed(false); setToken(""); setReviews([]); setSearch(""); }}
              style={{ ...linkStyle, color: "#991B1B", "border-color": "#f87171" }}
            >
              Sign Out
            </button>
          </header>

          <main style={{ padding: "1.5rem", "max-width": "960px", margin: "0 auto" }}>

            {/* search */}
            <input
              type="search"
              placeholder="🔍  Search by name, product, title or comment…"
              value={search()}
              onInput={(e) => setSearch(e.currentTarget.value)}
              style={{
                width: "100%", "box-sizing": "border-box",
                padding: "0.7rem 1rem", "border-radius": "10px",
                border: "1.5px solid #d1d5db", "font-size": "0.95rem",
                background: "#fff", "margin-bottom": "1.25rem",
                "box-shadow": "0 1px 4px rgba(0,0,0,0.04)",
              }}
            />

            {/* empty */}
            <Show when={filtered().length === 0}>
              <div style={{
                background: "#fff", "border-radius": "12px",
                border: "1px solid #e5e7eb", padding: "3rem",
                "text-align": "center", color: "#6b7280",
              }}>
                <div style={{ "font-size": "2.5rem", "margin-bottom": "0.5rem" }}>📭</div>
                <p style={{ margin: 0 }}>
                  {search() ? `No results for "${search()}"` : "No reviews yet."}
                </p>
              </div>
            </Show>

            {/* review rows */}
            <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem" }}>
              <For each={filtered()}>
                {(r) => (
                  <div style={{
                    background: "#fff", border: "1px solid #e5e7eb",
                    "border-radius": "12px", padding: "1.1rem 1.4rem",
                    display: "flex", gap: "1rem", "align-items": "flex-start",
                    "flex-wrap": "wrap",
                    "box-shadow": "0 1px 4px rgba(0,0,0,0.04)",
                  }}>
                    {/* avatar */}
                    <div style={{
                      width: "2.4rem", height: "2.4rem", "border-radius": "50%",
                      background: "linear-gradient(135deg,#E8821A,#d85c2a)",
                      color: "#fff", "font-weight": "700", "font-size": "1.1rem",
                      display: "flex", "align-items": "center", "justify-content": "center",
                      "flex-shrink": "0",
                    }}>
                      {r.name.charAt(0).toUpperCase()}
                    </div>

                    {/* body */}
                    <div style={{ flex: 1, "min-width": "0" }}>
                      <div style={{ display: "flex", "align-items": "center", gap: "0.5rem", "flex-wrap": "wrap", "margin-bottom": "0.25rem" }}>
                        <span style={{ "font-weight": "700" }}>{r.name}</span>
                        <Stars rating={r.rating} />
                        <Show when={r.product}>
                          <span style={{
                            "font-size": "0.72rem", "font-weight": "600",
                            padding: "0.1rem 0.5rem", "border-radius": "99px",
                            background: "#FEF3C7", color: "#92400E",
                            border: "1px solid #fcd34d",
                          }}>
                            {r.product}
                          </span>
                        </Show>
                        <span style={{ "font-size": "0.75rem", color: "#9ca3af", "margin-left": "auto" }}>
                          {new Date(r.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric", month: "short", year: "numeric",
                          })}
                        </span>
                      </div>
                      <div style={{ "font-weight": "600", "font-size": "0.9rem", "margin-bottom": "0.2rem", color: "#111827" }}>
                        {r.title}
                      </div>
                      <p style={{ "font-size": "0.875rem", color: "#374151", margin: "0 0 0.4rem", "line-height": "1.55" }}>
                        {r.comment}
                      </p>
                      <span style={{ "font-size": "0.7rem", color: "#d1d5db" }}>ID: {r.id}</span>
                    </div>

                    {/* delete */}
                    <button
                      onClick={() => del(r.id, r.name)}
                      disabled={deleting() === r.id}
                      style={{
                        padding: "0.5rem 1rem",
                        background: deleting() === r.id ? "#fee2e2" : "#fff",
                        border: "1.5px solid #f87171", "border-radius": "8px",
                        color: "#991B1B", "font-weight": "700", "font-size": "0.85rem",
                        cursor: deleting() === r.id ? "not-allowed" : "pointer",
                        "flex-shrink": "0", transition: "background 0.15s",
                      }}
                    >
                      {deleting() === r.id ? "Deleting…" : "🗑 Delete"}
                    </button>
                  </div>
                )}
              </For>
            </div>

          </main>
        </div>
      </Show>
    </>
  );
}

// shared button/link style
const linkStyle: Record<string, string> = {
  padding: "0.45rem 0.9rem", border: "1.5px solid #d1d5db",
  "border-radius": "8px", "font-size": "0.85rem", "font-weight": "600",
  cursor: "pointer", background: "#fff", color: "#374151",
  "text-decoration": "none", "white-space": "nowrap",
};
