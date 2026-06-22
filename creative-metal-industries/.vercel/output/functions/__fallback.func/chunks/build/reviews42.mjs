import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute, ssrStyleProperty } from 'solid-js/web';
import { I, L as L$1, H as H$1 } from '../nitro/nitro.mjs';
import { createSignal, onMount, Show, For } from 'solid-js';
import { g } from './Layout-BvUdFa7s.mjs';
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

var k = ["<span", ' class="stars-wrap"', ' aria-label="', '">', "</span>"], V = ["<span", ' class="', '" style="', '"', ">\u2605</span>"], A = ["<article", ' class="review-card" aria-label="', '"><div class="review-card-header"><div class="review-avatar" aria-hidden="true">', '</div><div class="review-meta"><span class="review-name">', '</span><span class="review-date">', "</span></div><!--$-->", '<!--/--></div><h3 class="review-title">', '</h3><p class="review-comment">', "</p></article>"], L = ["<span", ' class="rating-label-text">', "</span>"], q = ["<p", ' class="form-error" role="alert">\u26A0 <!--$-->', "<!--/--></p>"], z = ["<form", ' class="review-form" novalidate><h3>Write a Review</h3><p class="review-form-sub">Your experience helps other buyers make informed decisions.</p><div class="form-field"><label class="form-label">Your Rating <span class="req">*</span></label><!--$-->', "<!--/--><!--$-->", '<!--/--></div><div class="form-field"><label class="form-label" for="rv-name">Your Name <span class="form-optional">(optional)</span></label><input id="rv-name" type="text" class="form-input" placeholder="e.g. Procurement Manager, ABC Industries" maxlength="80"', ' autocomplete="off"></div><div class="form-field"><label class="form-label" for="rv-title">Review Title <span class="req">*</span></label><input id="rv-title" type="text" class="form-input" placeholder="e.g. Excellent quality and fast delivery" maxlength="120" required', '></div><div class="form-field"><label class="form-label" for="rv-comment">Your Review <span class="req">*</span></label><textarea id="rv-comment" class="form-input form-textarea" rows="5" placeholder="Tell us about the quality, delivery, service and documentation..." maxlength="2000" required', '></textarea><span class="char-count"><!--$-->', '<!--/--> characters remaining</span></div><input type="text" name="website" tabindex="-1" style="', '" autocomplete="off"><!--$-->', '<!--/--><button type="submit" class="btn btn-primary"', ' style="', '">', '</button><p class="review-form-note">Reviews are moderated before appearing publicly. No spam, no fake reviews.</p></form>'], C = ["<span", ' class="spinner" aria-label="Submitting...">\u27F3 Submitting...</span>'], N = ["<div", ' class="rating-summary"><div class="rating-big"><span class="rating-big-num">', "</span><!--$-->", '<!--/--><span class="rating-total"><!--$-->', "<!--/--> verified review<!--$-->", '<!--/--></span></div><div class="rating-bars">', "</div></div>"], F = ["<div", ' class="rating-bar-row"><span class="rating-bar-label"><!--$-->', '<!--/-->\u2605</span><div class="rating-bar-track" role="meter"', ' aria-valuemin="0" aria-valuemax="100"><div class="rating-bar-fill" style="', '"></div></div><span class="rating-bar-count">', "</span></div>"], T = ["<script", ' type="application/ld+json">', "<\/script>"], j = ["<section", ' class="page-hero page-hero-sm" aria-label="Customer Reviews"><div class="container"><span class="section-label">Verified Reviews</span><h1>What Our Customers Say</h1><p>Real reviews from procurement engineers, EPC contractors and industrial buyers across India.</p></div></section>'], D = ["<div", ' class="reviews-loading" role="status" aria-label="Loading reviews"><div class="spinner-ring"></div><p>Loading reviews...</p></div>'], Y = ["<div", ' class="reviews-empty"><span style="font-size:2.5rem">\u2B50</span><h3>Be the First to Review</h3><p>Share your experience with Creative Metal Industries and help other buyers.</p></div>'], B = ["<div", ' class="reviews-list">', "</div>"], E = ["<nav", ' class="reviews-pagination" aria-label="Reviews pagination"><button class="btn btn-outline"', '>\u2190 Previous</button><span class="page-info">Page <!--$-->', "<!--/--> of <!--$-->", '<!--/--></span><button class="btn btn-outline"', ">Next \u2192</button></nav>"], W = ["<section", ' style="background:var(--white);padding:4rem 0" aria-label="Reviews"><div class="container"><div class="reviews-layout"><div class="reviews-sidebar"><!--$-->', "<!--/--><!--$-->", '<!--/--></div><div class="reviews-main"><div class="reviews-list-header"><h2>', '</h2><span style="font-size:0.85rem;color:var(--muted)">Newest first \xB7 Moderated for quality</span></div><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div></div></section>"], G = ["<div", ' class="review-success" role="status"><span class="success-icon">\u2705</span><h4>Thank you for your review!</h4><p>Your review has been submitted and will appear after moderation. We appreciate your feedback.</p><button class="btn btn-outline" style="margin-top:1rem">Write Another Review</button></div>'];
function x(a) {
  const [r, v] = createSignal(0), g = a.size || "1.25rem";
  return ssr(k, ssrHydrationKey(), ssrAttribute("role", a.interactive ? "radiogroup" : escape(void 0, true), false), `${escape(a.rating, true)} out of 5 stars`, escape(createComponent(For, { each: [1, 2, 3, 4, 5], children: (u) => {
    const f = () => a.interactive ? (r() || a.rating) >= u : a.rating >= u;
    return ssr(V, ssrHydrationKey(), `star ${f() ? "star-filled" : "star-empty"}`, ssrStyleProperty("font-size:", escape(g, true)) + ssrStyleProperty(";cursor:", a.interactive ? "pointer" : "default"), ssrAttribute("role", a.interactive ? "radio" : escape(void 0, true), false) + ssrAttribute("aria-checked", a.interactive ? escape(a.rating, true) === escape(u, true) : escape(void 0, true), false) + ssrAttribute("aria-label", a.interactive ? `${escape(u, true)} star${u > 1 ? "s" : ""}` : escape(void 0, true), false) + ssrAttribute("tabindex", a.interactive ? 0 : -1, false));
  } })));
}
function H(a) {
  const r = a.review, v = new Date(r.approvedAt || r.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  return ssr(A, ssrHydrationKey(), `Review by ${escape(r.name, true)}`, escape(r.name.charAt(0).toUpperCase()), escape(r.name), escape(v), escape(createComponent(x, { get rating() {
    return r.rating;
  }, size: "1rem" })), escape(r.title), escape(r.comment));
}
function O(a) {
  const [r, v] = createSignal(0), [g, u] = createSignal(""), [f, $] = createSignal(""), [h, S] = createSignal(""), [y, i] = createSignal("idle"), [b, m] = createSignal(""), c = () => Math.max(0, 2e3 - h().length);
  return ssr(z, ssrHydrationKey(), escape(createComponent(x, { get rating() {
    return r();
  }, size: "2rem", interactive: true, onRate: v })), escape(createComponent(Show, { get when() {
    return r() > 0;
  }, get children() {
    return ssr(L, ssrHydrationKey(), escape(["", "Poor", "Fair", "Good", "Very Good", "Excellent"][r()]));
  } })), ssrAttribute("value", escape(g(), true), false), ssrAttribute("value", escape(f(), true), false), ssrAttribute("value", escape(h(), true), false), escape(c()), ssrStyleProperty("position:", "absolute") + ssrStyleProperty(";left:", "-9999px") + ssrStyleProperty(";opacity:", "0"), escape(createComponent(Show, { get when() {
    return b();
  }, get children() {
    return ssr(q, ssrHydrationKey(), escape(b()));
  } })), ssrAttribute("disabled", y() === "loading", true), ssrStyleProperty("min-width:", "160px"), y() === "loading" ? C[0] + ssrHydrationKey() + C[1] : "Submit Review \u2192");
}
function J(a) {
  return ssr(N, ssrHydrationKey(), escape(a.avg.toFixed(1)), escape(createComponent(x, { get rating() {
    return Math.round(a.avg);
  }, size: "1.5rem" })), escape(a.total), a.total !== 1 ? "s" : "", escape(createComponent(For, { each: [5, 4, 3, 2, 1], children: (r) => {
    const v = a.dist.find((u) => u.star === r) || { count: 0 }, g = a.total > 0 ? v.count / a.total * 100 : 0;
    return ssr(F, ssrHydrationKey(), escape(r), ssrAttribute("aria-valuenow", escape(g, true), false), ssrStyleProperty("width:", `${escape(g, true)}%`), escape(v.count));
  } })));
}
function Z() {
  const [a, r] = createSignal(1), [v, g$1] = createSignal(false), [u, f] = createSignal(null), [$, h] = createSignal(true);
  async function S() {
    h(true);
    try {
      const c = await (await fetch(`/api/reviews?page=${a()}&limit=10`)).json();
      c.ok && f(c.data);
    } catch {
    }
    h(false);
  }
  onMount(S);
  function y() {
    g$1(true);
  }
  const i = u, b = () => {
    const m = i();
    return !m || m.total === 0 ? "" : JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Creative Metal Industries", url: "https://www.creativemetalind.com", aggregateRating: { "@type": "AggregateRating", ratingValue: m.avgRating.toFixed(1), reviewCount: m.total, bestRating: "5", worstRating: "1" }, review: m.reviews.slice(0, 5).map((c) => ({ "@type": "Review", author: { "@type": "Person", name: c.name }, datePublished: (c.approvedAt || c.createdAt).slice(0, 10), reviewRating: { "@type": "Rating", ratingValue: c.rating, bestRating: "5", worstRating: "1" }, name: c.title, reviewBody: c.comment })) });
  };
  return createComponent(g, { active: "", get children() {
    var _a;
    return [createComponent(I, { children: "Customer Reviews | Creative Metal Industries Vadodara" }), createComponent(L$1, { name: "robots", content: "index, follow, max-image-preview:large" }), createComponent(L$1, { name: "description", content: "Read verified customer reviews for Creative Metal Industries, Vadodara \u2014 SS pipes, plates, fittings and flanges supplier. Share your experience." }), createComponent(H$1, { rel: "canonical", href: "https://www.creativemetalind.com/reviews" }), createComponent(L$1, { property: "og:type", content: "website" }), createComponent(L$1, { property: "og:site_name", content: "Creative Metal Industries" }), createComponent(L$1, { property: "og:title", content: "Customer Reviews | Creative Metal Industries Vadodara" }), createComponent(L$1, { property: "og:description", content: "Read verified customer reviews for Creative Metal Industries, Vadodara \u2014 SS pipes, plates, fittings and flanges supplier. Share your experience." }), createComponent(L$1, { property: "og:url", content: "https://www.creativemetalind.com/reviews" }), createComponent(L$1, { property: "og:image", content: "https://www.creativemetalind.com/og-image.jpg" }), createComponent(L$1, { property: "og:locale", content: "en_IN" }), createComponent(L$1, { name: "twitter:card", content: "summary_large_image" }), createComponent(L$1, { name: "twitter:title", content: "Customer Reviews | Creative Metal Industries Vadodara" }), createComponent(L$1, { name: "twitter:description", content: "Read verified customer reviews for Creative Metal Industries, Vadodara \u2014 SS pipes, plates, fittings and flanges supplier. Share your experience." }), createComponent(L$1, { name: "twitter:image", content: "https://www.creativemetalind.com/og-image.jpg" }), createComponent(Show, { get when() {
      return b();
    }, get children() {
      return ssr(T, ssrHydrationKey(), b());
    } }), ssr(j, ssrHydrationKey()), ssr(W, ssrHydrationKey(), escape(createComponent(Show, { get when() {
      return i() && i().total > 0;
    }, get children() {
      return createComponent(J, { get avg() {
        return i().avgRating;
      }, get total() {
        return i().total;
      }, get dist() {
        return i().ratingDist;
      } });
    } })), escape(createComponent(Show, { get when() {
      return !v();
    }, get fallback() {
      return ssr(G, ssrHydrationKey());
    }, get children() {
      return createComponent(O, { onSubmitted: y });
    } })), ((_a = i()) == null ? void 0 : _a.total) ? `${escape(i().total)} Customer Review${i().total !== 1 ? "s" : ""}` : "Customer Reviews", escape(createComponent(Show, { get when() {
      return $();
    }, get children() {
      return ssr(D, ssrHydrationKey());
    } })), escape(createComponent(Show, { get when() {
      return !$() && i() && i().total === 0;
    }, get children() {
      return ssr(Y, ssrHydrationKey());
    } })), escape(createComponent(Show, { get when() {
      return i() && i().reviews.length > 0;
    }, get children() {
      return [ssr(B, ssrHydrationKey(), escape(createComponent(For, { get each() {
        return i().reviews;
      }, children: (m) => createComponent(H, { review: m }) }))), createComponent(Show, { get when() {
        return i().totalPages > 1;
      }, get children() {
        return ssr(E, ssrHydrationKey(), ssrAttribute("disabled", a() <= 1, true), escape(a()), escape(i().totalPages), ssrAttribute("disabled", a() >= i().totalPages, true));
      } })];
    } })))];
  } });
}

export { Z as default };
//# sourceMappingURL=reviews42.mjs.map
