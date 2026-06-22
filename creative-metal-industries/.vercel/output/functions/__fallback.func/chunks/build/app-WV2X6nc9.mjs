import { createComponent, ssr, ssrHydrationKey, isServer, getRequestEvent, delegateEvents } from 'solid-js/web';
import { K, I, L, H } from './index-CtJSw-6t.mjs';
import { C as Ct } from '../nitro/nitro.mjs';
import { Suspense, createSignal, onCleanup, children, createMemo, getOwner, sharedConfig, untrack, Show, on, createRoot } from 'solid-js';
import { L as Le, $ as $e, b as be, y as ye, W as We, I as Ie, a as $, A as Ae, _ as _e, J, d as de, j as je } from './routing-CKXGVxkO.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'solid-js/web/storage';
import 'seroval';
import 'seroval-plugins/web';

const T = (t) => (n) => {
  const { base: o } = n, a = children(() => n.children), e = createMemo(() => Le(a(), n.base || ""));
  let c;
  const l = $e(t, e, () => c, { base: o, singleFlight: n.singleFlight, transformUrl: n.transformUrl });
  return t.create && t.create(l), createComponent(be.Provider, { value: l, get children() {
    return createComponent(ot, { routerState: l, get root() {
      return n.root;
    }, get preload() {
      return n.rootPreload || n.rootLoad;
    }, get children() {
      return [(c = getOwner()) && null, createComponent(it, { routerState: l, get branches() {
        return e();
      } })];
    } });
  } });
};
function ot(t) {
  const n = t.routerState.location, o = t.routerState.params, a = createMemo(() => t.preload && untrack(() => {
    t.preload({ params: o, location: n, intent: We() || "initial" });
  }));
  return createComponent(Show, { get when() {
    return t.root;
  }, keyed: true, get fallback() {
    return t.children;
  }, children: (e) => createComponent(e, { params: o, location: n, get data() {
    return a();
  }, get children() {
    return t.children;
  } }) });
}
function it(t) {
  if (isServer) {
    const e = getRequestEvent();
    if (e && e.router && e.router.dataOnly) {
      st(e, t.routerState, t.branches);
      return;
    }
    e && ((e.router || (e.router = {})).matches || (e.router.matches = t.routerState.matches().map(({ route: c, path: l, params: g }) => ({ path: c.originalPath, pattern: c.pattern, match: l, params: g, info: c.info }))));
  }
  const n = [];
  let o;
  const a = createMemo(on(t.routerState.matches, (e, c, l) => {
    let g = c && e.length === c.length;
    const p = [];
    for (let m = 0, v = e.length; m < v; m++) {
      const y = c && c[m], f = e[m];
      l && y && f.route.key === y.route.key ? p[m] = l[m] : (g = false, n[m] && n[m](), createRoot((L) => {
        n[m] = L, p[m] = Ie(t.routerState, p[m - 1] || t.routerState.base, k(() => a()[m + 1]), () => {
          var _a;
          const b = t.routerState.matches();
          return (_a = b[m]) != null ? _a : b[0];
        });
      }));
    }
    return n.splice(e.length).forEach((m) => m()), l && g ? l : (o = p[0], p);
  }));
  return k(() => a() && o)();
}
const k = (t) => () => createComponent(Show, { get when() {
  return t();
}, keyed: true, children: (n) => createComponent(Ae.Provider, { value: n, get children() {
  return n.outlet();
} }) });
function st(t, n, o) {
  const a = new URL(t.request.url), e = $(o, new URL(t.router.previousUrl || t.request.url).pathname), c = $(o, a.pathname);
  for (let l = 0; l < c.length; l++) {
    (!e[l] || c[l].route !== e[l].route) && (t.router.dataOnly = true);
    const { route: g, params: p } = c[l];
    g.preload && g.preload({ params: p, location: n.location, intent: "preload" });
  }
}
function ct([t, n], o, a) {
  return [t, a ? (e) => n(a(e)) : n];
}
function lt(t) {
  let n = false;
  const o = (e) => typeof e == "string" ? { value: e } : e, a = ct(createSignal(o(t.get()), { equals: (e, c) => e.value === c.value && e.state === c.state }), void 0, (e) => (!n && t.set(e), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), e));
  return t.init && onCleanup(t.init((e = t.get()) => {
    n = true, a[1](o(e)), n = false;
  })), T({ signal: a, create: t.create, utils: t.utils });
}
function ut(t, n, o) {
  return t.addEventListener(n, o), () => t.removeEventListener(n, o);
}
function dt(t, n) {
  const o = t && document.getElementById(t);
  o ? o.scrollIntoView() : n && window.scrollTo(0, 0);
}
function mt(t) {
  const n = new URL(t);
  return n.pathname + n.search;
}
function ht(t) {
  let n;
  const o = { value: t.url || (n = getRequestEvent()) && mt(n.request.url) || "" };
  return T({ signal: [() => o, (a) => Object.assign(o, a)] })(t);
}
const pt = /* @__PURE__ */ new Map();
function gt(t = true, n = false, o = "/_server", a) {
  return (e) => {
    const c = e.base.path(), l = e.navigatorFactory(e.base);
    let g, p;
    function m(i) {
      return i.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function v(i) {
      if (i.defaultPrevented || i.button !== 0 || i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) return;
      const s = i.composedPath().find((E) => E instanceof Node && E.nodeName.toUpperCase() === "A");
      if (!s || n && !s.hasAttribute("link")) return;
      const h = m(s), u = h ? s.href.baseVal : s.href;
      if ((h ? s.target.baseVal : s.target) || !u && !s.hasAttribute("state")) return;
      const S = (s.getAttribute("rel") || "").split(/\s+/);
      if (s.hasAttribute("download") || S && S.includes("external")) return;
      const R = h ? new URL(u, document.baseURI) : new URL(u);
      if (!(R.origin !== window.location.origin || c && R.pathname && !R.pathname.toLowerCase().startsWith(c.toLowerCase()))) return [s, R];
    }
    function y(i) {
      const s = v(i);
      if (!s) return;
      const [h, u] = s, P = e.parsePath(u.pathname + u.search + u.hash), S = h.getAttribute("state");
      i.preventDefault(), l(P, { resolve: false, replace: h.hasAttribute("replace"), scroll: !h.hasAttribute("noscroll"), state: S ? JSON.parse(S) : void 0 });
    }
    function f(i) {
      const s = v(i);
      if (!s) return;
      const [h, u] = s;
      a && (u.pathname = a(u.pathname)), e.preloadRoute(u, h.getAttribute("preload") !== "false");
    }
    function L(i) {
      clearTimeout(g);
      const s = v(i);
      if (!s) return p = null;
      const [h, u] = s;
      p !== h && (a && (u.pathname = a(u.pathname)), g = setTimeout(() => {
        e.preloadRoute(u, h.getAttribute("preload") !== "false"), p = h;
      }, 20));
    }
    function b(i) {
      if (i.defaultPrevented) return;
      let s = i.submitter && i.submitter.hasAttribute("formaction") ? i.submitter.getAttribute("formaction") : i.target.getAttribute("action");
      if (!s) return;
      if (!s.startsWith("https://action/")) {
        const u = new URL(s, ye);
        if (s = e.parsePath(u.pathname + u.search), !s.startsWith(o)) return;
      }
      if (i.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const h = pt.get(s);
      if (h) {
        i.preventDefault();
        const u = new FormData(i.target, i.submitter);
        h.call({ r: e, f: i.target }, i.target.enctype === "multipart/form-data" ? u : new URLSearchParams(u));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", y), t && (document.addEventListener("mousemove", L, { passive: true }), document.addEventListener("focusin", f, { passive: true }), document.addEventListener("touchstart", f, { passive: true })), document.addEventListener("submit", b), onCleanup(() => {
      document.removeEventListener("click", y), t && (document.removeEventListener("mousemove", L), document.removeEventListener("focusin", f), document.removeEventListener("touchstart", f)), document.removeEventListener("submit", b);
    });
  };
}
function ft(t) {
  if (isServer) return ht(t);
  const n = () => {
    const a = window.location.pathname.replace(/^\/+/, "/") + window.location.search, e = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: a + window.location.hash, state: e };
  }, o = de();
  return lt({ get: n, set({ value: a, replace: e, scroll: c, state: l }) {
    e ? window.history.replaceState(_e(l), "", a) : window.history.pushState(l, "", a), dt(decodeURIComponent(window.location.hash.slice(1)), c), J();
  }, init: (a) => ut(window, "popstate", je(a, (e) => {
    if (e) return !o.confirm(e);
    {
      const c = n();
      return !o.confirm(c.value, { state: c.state });
    }
  })), create: gt(t.preload, t.explicitLinks, t.actionBase, t.transformUrl), utils: { go: (a) => window.history.go(a), beforeLeave: o } })(t);
}
var wt = ["<script", ' type="application/ld+json">', "<\/script>"];
function Mt() {
  return createComponent(ft, { root: (t) => createComponent(K, { get children() {
    return [createComponent(I, { children: "Creative Metal Industries | SS Pipes, Plates & Fittings Manufacturer \u2014 Vadodara" }), createComponent(L, { charset: "utf-8" }), createComponent(L, { name: "viewport", content: "width=device-width, initial-scale=1" }), createComponent(L, { name: "robots", content: "index, follow" }), createComponent(H, { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }), createComponent(H, { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), createComponent(H, { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), createComponent(H, { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }), createComponent(H, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), createComponent(H, { rel: "manifest", href: "/site.webmanifest" }), createComponent(L, { name: "theme-color", content: "#E8821A" }), createComponent(L, { name: "msapplication-TileColor", content: "#E8821A" }), createComponent(L, { name: "msapplication-TileImage", content: "/favicon-192x192.png" }), createComponent(L, { property: "og:type", content: "website" }), createComponent(L, { property: "og:site_name", content: "Creative Metal Industries" }), createComponent(L, { property: "og:title", content: "Creative Metal Industries | SS Pipes, Plates & Fittings \u2014 Vadodara" }), createComponent(L, { property: "og:description", content: "Leading supplier of SS pipes, plates, fittings and flanges in Vadodara, Gujarat. IS / ASTM certified material." }), createComponent(L, { property: "og:image", content: "https://www.creativemetalind.com/og-image.jpg" }), createComponent(L, { property: "og:image:width", content: "1200" }), createComponent(L, { property: "og:image:height", content: "630" }), createComponent(L, { property: "og:image:alt", content: "Creative Metal Industries logo" }), createComponent(L, { property: "og:url", content: "https://www.creativemetalind.com" }), createComponent(L, { property: "og:locale", content: "en_IN" }), createComponent(L, { name: "twitter:card", content: "summary_large_image" }), createComponent(L, { name: "twitter:title", content: "Creative Metal Industries \u2014 SS Pipes & Fittings, Vadodara" }), createComponent(L, { name: "twitter:description", content: "Leading supplier of SS pipes, plates, fittings and flanges in Vadodara, Gujarat." }), createComponent(L, { name: "twitter:image", content: "https://www.creativemetalind.com/og-image.jpg" }), ssr(wt, ssrHydrationKey(), JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Creative Metal Industries", alternateName: "CMI", url: "https://www.creativemetalind.com", logo: { "@type": "ImageObject", url: "https://www.creativemetalind.com/logo_cmi.png", width: 1424, height: 720 }, image: "https://www.creativemetalind.com/og-image.jpg", description: "Leading supplier of SS pipes, plates, fittings and flanges in Vadodara, Gujarat. IS / ASTM certified material.", address: { "@type": "PostalAddress", streetAddress: "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390001", addressCountry: "IN" }, contactPoint: { "@type": "ContactPoint", telephone: "+91-9998280619", contactType: "sales" }, sameAs: ["https://www.creativemetalind.com", "https://x.com/CreativeMetal", "https://t.me/Creativemetal_Industries", "https://www.indiamart.com/creativemetalindustries/"] })), createComponent(Suspense, { get children() {
      return t.children;
    } })];
  } }), get children() {
    return createComponent(Ct, {});
  } });
}

export { Mt as default };
//# sourceMappingURL=app-WV2X6nc9.mjs.map
