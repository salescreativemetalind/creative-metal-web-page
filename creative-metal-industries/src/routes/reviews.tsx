/**
 * /reviews — Public reviews page
 * Displays approved reviews, aggregate rating, star distribution,
 * and the review submission form.
 * Integrates fully with the existing CMI design system.
 */

import { Title, Meta, Link } from "@solidjs/meta";
import {
  createSignal, createResource, For, Show, onMount
} from "solid-js";
import { PageLayout } from "../components/Layout";

// ── Types (mirrors backend) ───────────────────────────────────
interface Review {
  id: string; name: string; title: string; comment: string;
  rating: number; approvedAt: string | null; createdAt: string;
}
interface ReviewsData {
  reviews: Review[]; total: number; page: number;
  totalPages: number; avgRating: number;
  ratingDist: { star: number; count: number }[];
}

// ── Star renderer ─────────────────────────────────────────────
function Stars(props: { rating: number; size?: string; interactive?: boolean; onRate?: (r: number) => void }) {
  const [hovered, setHovered] = createSignal(0);
  const sz = props.size || "1.25rem";
  return (
    <span class="stars-wrap" role={props.interactive ? "radiogroup" : undefined} aria-label={`${props.rating} out of 5 stars`}>
      <For each={[1,2,3,4,5]}>{(star) => {
        const filled = () => props.interactive
          ? (hovered() || props.rating) >= star
          : props.rating >= star;
        return (
          <span
            class={`star ${filled() ? "star-filled" : "star-empty"}`}
            style={{ "font-size": sz, cursor: props.interactive ? "pointer" : "default" }}
            onClick={props.interactive ? () => props.onRate?.(star) : undefined}
            onMouseEnter={props.interactive ? () => setHovered(star) : undefined}
            onMouseLeave={props.interactive ? () => setHovered(0) : undefined}
            role={props.interactive ? "radio" : undefined}
            aria-checked={props.interactive ? props.rating === star : undefined}
            aria-label={props.interactive ? `${star} star${star > 1 ? "s" : ""}` : undefined}
            tabIndex={props.interactive ? 0 : -1}
            onKeyDown={props.interactive ? (e) => { if (e.key === "Enter" || e.key === " ") props.onRate?.(star); } : undefined}
          >★</span>
        );
      }}</For>
    </span>
  );
}

// ── Review card ───────────────────────────────────────────────
function ReviewCard(props: { review: Review }) {
  const r = props.review;
  const date = new Date(r.approvedAt || r.createdAt).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });
  return (
    <article class="review-card" aria-label={`Review by ${r.name}`}>
      <div class="review-card-header">
        <div class="review-avatar" aria-hidden="true">
          {r.name.charAt(0).toUpperCase()}
        </div>
        <div class="review-meta">
          <span class="review-name">{r.name}</span>
          <span class="review-date">{date}</span>
        </div>
        <Stars rating={r.rating} size="1rem" />
      </div>
      <h3 class="review-title">{r.title}</h3>
      <p class="review-comment">{r.comment}</p>
    </article>
  );
}

// ── Submission form ───────────────────────────────────────────
function ReviewForm(props: { onSubmitted: () => void }) {
  const [rating,  setRating]  = createSignal(0);
  const [name,    setName]    = createSignal("");
  const [title,   setTitle]   = createSignal("");
  const [comment, setComment] = createSignal("");
  const [status,  setStatus]  = createSignal<"idle"|"loading"|"success"|"error">("idle");
  const [errMsg,  setErrMsg]  = createSignal("");

  const charLeft = () => Math.max(0, 2000 - comment().length);

  async function submit(e: Event) {
    e.preventDefault();
    if (rating() === 0) { setErrMsg("Please select a star rating."); return; }
    if (title().trim().length < 3) { setErrMsg("Title must be at least 3 characters."); return; }
    if (comment().trim().length < 20) { setErrMsg("Review must be at least 20 characters."); return; }

    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    name().trim() || "Anonymous",
          title:   title().trim(),
          comment: comment().trim(),
          rating:  rating(),
          website: "", // honeypot — intentionally empty
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setStatus("error");
        setErrMsg(data.error || "Something went wrong.");
      } else {
        setStatus("success");
        props.onSubmitted();
      }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please try again.");
    }
  }

  return (
    <form class="review-form" onSubmit={submit} noValidate>
      <h3>Write a Review</h3>
      <p class="review-form-sub">Your experience helps other buyers make informed decisions.</p>

      {/* Star selector */}
      <div class="form-field">
        <label class="form-label">Your Rating <span class="req">*</span></label>
        <Stars rating={rating()} size="2rem" interactive onRate={setRating} />
        <Show when={rating() > 0}>
          <span class="rating-label-text">
            {["","Poor","Fair","Good","Very Good","Excellent"][rating()]}
          </span>
        </Show>
      </div>

      {/* Display name */}
      <div class="form-field">
        <label class="form-label" for="rv-name">Your Name <span class="form-optional">(optional)</span></label>
        <input
          id="rv-name" type="text" class="form-input"
          placeholder="e.g. Procurement Manager, ABC Industries"
          maxLength={80}
          value={name()} onInput={e => setName(e.currentTarget.value)}
          autocomplete="off"
        />
      </div>

      {/* Title */}
      <div class="form-field">
        <label class="form-label" for="rv-title">Review Title <span class="req">*</span></label>
        <input
          id="rv-title" type="text" class="form-input"
          placeholder="e.g. Excellent quality and fast delivery"
          maxLength={120} required
          value={title()} onInput={e => setTitle(e.currentTarget.value)}
        />
      </div>

      {/* Comment */}
      <div class="form-field">
        <label class="form-label" for="rv-comment">Your Review <span class="req">*</span></label>
        <textarea
          id="rv-comment" class="form-input form-textarea" rows={5}
          placeholder="Tell us about the quality, delivery, service and documentation..."
          maxLength={2000} required
          value={comment()} onInput={e => setComment(e.currentTarget.value)}
        />
        <span class="char-count">{charLeft()} characters remaining</span>
      </div>

      {/* Honeypot — hidden from real users */}
      <input
        type="text" name="website" tabIndex={-1}
        style={{ position: "absolute", left: "-9999px", opacity: "0" }}
        autocomplete="off"
      />

      {/* Error */}
      <Show when={errMsg()}>
        <p class="form-error" role="alert">⚠ {errMsg()}</p>
      </Show>

      {/* Submit */}
      <button
        type="submit"
        class="btn btn-primary"
        disabled={status() === "loading"}
        style={{ "min-width": "160px" }}
      >
        {status() === "loading" ? (
          <span class="spinner" aria-label="Submitting...">⟳ Submitting...</span>
        ) : "Submit Review →"}
      </button>

      <p class="review-form-note">
        Reviews are moderated before appearing publicly. No spam, no fake reviews.
      </p>
    </form>
  );
}

// ── Rating summary bar ────────────────────────────────────────
function RatingSummary(props: { avg: number; total: number; dist: { star: number; count: number }[] }) {
  return (
    <div class="rating-summary">
      <div class="rating-big">
        <span class="rating-big-num">{props.avg.toFixed(1)}</span>
        <Stars rating={Math.round(props.avg)} size="1.5rem" />
        <span class="rating-total">{props.total} verified review{props.total !== 1 ? "s" : ""}</span>
      </div>
      <div class="rating-bars">
        <For each={[5,4,3,2,1]}>{(star) => {
          const item = props.dist.find(d => d.star === star) || { star, count: 0 };
          const pct  = props.total > 0 ? (item.count / props.total) * 100 : 0;
          return (
            <div class="rating-bar-row">
              <span class="rating-bar-label">{star}★</span>
              <div class="rating-bar-track" role="meter" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                <div class="rating-bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <span class="rating-bar-count">{item.count}</span>
            </div>
          );
        }}</For>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────
export default function ReviewsPage() {
  const [page,      setPage]      = createSignal(1);
  const [refresh,   setRefresh]   = createSignal(0);
  const [submitted, setSubmitted] = createSignal(false);

  const [data] = createResource(
    () => [page(), refresh()] as const,
    async ([p]) => {
      const res = await fetch(`/api/reviews?page=${p}&limit=10`);
      const json = await res.json() as { ok: boolean; data: ReviewsData };
      return json.ok ? json.data : null;
    }
  );

  function handleSubmitted() {
    setSubmitted(true);
  }

  // JSON-LD AggregateRating schema — only when real data exists
  const schemaStr = () => {
    const d = data();
    if (!d || d.total === 0) return "";
    return JSON.stringify({
      "@context":    "https://schema.org",
      "@type":       "LocalBusiness",
      "name":        "Creative Metal Industries",
      "url":         "https://www.creativemetalind.com",
      "aggregateRating": {
        "@type":       "AggregateRating",
        "ratingValue": d.avgRating.toFixed(1),
        "reviewCount": d.total,
        "bestRating":  "5",
        "worstRating": "1",
      },
      "review": d.reviews.slice(0, 5).map(r => ({
        "@type":       "Review",
        "author":      { "@type": "Person", "name": r.name },
        "datePublished": (r.approvedAt || r.createdAt).slice(0, 10),
        "reviewRating": {
          "@type":       "Rating",
          "ratingValue": r.rating,
          "bestRating":  "5",
          "worstRating": "1",
        },
        "name":         r.title,
        "reviewBody":   r.comment,
      })),
    });
  };

  return (
    <PageLayout active="">
      <Title>Customer Reviews | Creative Metal Industries Vadodara</Title>
      <Meta name="description" content="Read verified customer reviews for Creative Metal Industries, Vadodara — SS pipes, plates, fittings and flanges supplier. Share your experience." />
      <Link rel="canonical" href="https://www.creativemetalind.com/reviews" />
      <Show when={schemaStr()}>
        <script type="application/ld+json" innerHTML={schemaStr()} />
      </Show>

      {/* Hero */}
      <section class="page-hero page-hero-sm" aria-label="Customer Reviews">
        <div class="container">
          <span class="section-label">Verified Reviews</span>
          <h1>What Our Customers Say</h1>
          <p>Real reviews from procurement engineers, EPC contractors and industrial buyers across India.</p>
        </div>
      </section>

      <section style="background:var(--white);padding:4rem 0" aria-label="Reviews">
        <div class="container">
          <div class="reviews-layout">

            {/* LEFT — Summary + Form */}
            <div class="reviews-sidebar">
              {/* Rating summary */}
              <Show when={data() && data()!.total > 0}>
                <RatingSummary
                  avg={data()!.avgRating}
                  total={data()!.total}
                  dist={data()!.ratingDist}
                />
              </Show>

              {/* Submit form or success */}
              <Show
                when={!submitted()}
                fallback={
                  <div class="review-success" role="status">
                    <span class="success-icon">✅</span>
                    <h4>Thank you for your review!</h4>
                    <p>Your review has been submitted and will appear after moderation. We appreciate your feedback.</p>
                    <button class="btn btn-outline" style="margin-top:1rem" onClick={() => setSubmitted(false)}>
                      Write Another Review
                    </button>
                  </div>
                }
              >
                <ReviewForm onSubmitted={handleSubmitted} />
              </Show>
            </div>

            {/* RIGHT — Review list */}
            <div class="reviews-main">
              <div class="reviews-list-header">
                <h2>
                  {data()?.total
                    ? `${data()!.total} Customer Review${data()!.total !== 1 ? "s" : ""}`
                    : "Customer Reviews"}
                </h2>
                <span style="font-size:0.85rem;color:var(--muted)">Newest first · Moderated for quality</span>
              </div>

              {/* Loading */}
              <Show when={data.loading}>
                <div class="reviews-loading" role="status" aria-label="Loading reviews">
                  <div class="spinner-ring" />
                  <p>Loading reviews...</p>
                </div>
              </Show>

              {/* No reviews yet */}
              <Show when={!data.loading && data() && data()!.total === 0}>
                <div class="reviews-empty">
                  <span style="font-size:2.5rem">⭐</span>
                  <h3>Be the First to Review</h3>
                  <p>Share your experience with Creative Metal Industries and help other buyers.</p>
                </div>
              </Show>

              {/* Review cards */}
              <Show when={data() && data()!.reviews.length > 0}>
                <div class="reviews-list">
                  <For each={data()!.reviews}>{(review) => (
                    <ReviewCard review={review} />
                  )}</For>
                </div>

                {/* Pagination */}
                <Show when={data()!.totalPages > 1}>
                  <nav class="reviews-pagination" aria-label="Reviews pagination">
                    <button
                      class="btn btn-outline"
                      disabled={page() <= 1}
                      onClick={() => setPage(p => p - 1)}
                    >← Previous</button>
                    <span class="page-info">Page {page()} of {data()!.totalPages}</span>
                    <button
                      class="btn btn-outline"
                      disabled={page() >= data()!.totalPages}
                      onClick={() => setPage(p => p + 1)}
                    >Next →</button>
                  </nav>
                </Show>
              </Show>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
