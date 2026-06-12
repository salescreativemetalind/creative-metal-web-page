import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Creative Metal Industries | SS Pipes, Plates &amp; Fittings Manufacturer — Vadodara</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta name="robots" content="index, follow" />

          {/* ── Favicons ──────────────────────────────────────── */}
          <Link rel="icon" type="image/x-icon"        href="/favicon.ico" />
          <Link rel="icon" type="image/png" sizes="16x16"  href="/favicon-16x16.png" />
          <Link rel="icon" type="image/png" sizes="32x32"  href="/favicon-32x32.png" />
          <Link rel="icon" type="image/png" sizes="96x96"  href="/favicon-96x96.png" />
          <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <Link rel="manifest"                         href="/site.webmanifest" />
          <Meta name="theme-color" content="#E8821A" />
          <Meta name="msapplication-TileColor" content="#E8821A" />
          <Meta name="msapplication-TileImage"  content="/favicon-192x192.png" />

          {/* ── Open Graph (Facebook / WhatsApp / LinkedIn) ──── */}
          <Meta property="og:type"        content="website" />
          <Meta property="og:site_name"   content="Creative Metal Industries" />
          <Meta property="og:title"       content="Creative Metal Industries | SS Pipes, Plates & Fittings — Vadodara" />
          <Meta property="og:description" content="Leading supplier of SS pipes, plates, fittings and flanges in Vadodara, Gujarat. IS / ASTM certified material." />
          <Meta property="og:image"       content="https://www.creativemetalind.com/og-image.jpg" />
          <Meta property="og:image:width"  content="1200" />
          <Meta property="og:image:height" content="630" />
          <Meta property="og:image:alt"   content="Creative Metal Industries logo" />
          <Meta property="og:url"         content="https://www.creativemetalind.com" />
          <Meta property="og:locale"      content="en_IN" />

          {/* ── Twitter Card ──────────────────────────────────── */}
          <Meta name="twitter:card"        content="summary_large_image" />
          <Meta name="twitter:title"       content="Creative Metal Industries — SS Pipes & Fittings, Vadodara" />
          <Meta name="twitter:description" content="Leading supplier of SS pipes, plates, fittings and flanges in Vadodara, Gujarat." />
          <Meta name="twitter:image"       content="https://www.creativemetalind.com/og-image.jpg" />

          {/* ── JSON-LD Organization schema (Google Knowledge Panel logo) ── */}
          <script type="application/ld+json" innerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Creative Metal Industries",
            "alternateName": "CMI",
            "url": "https://www.creativemetalind.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.creativemetalind.com/logo_cmi.png",
              "width": 1424,
              "height": 720
            },
            "image": "https://www.creativemetalind.com/og-image.jpg",
            "description": "Leading supplier of SS pipes, plates, fittings and flanges in Vadodara, Gujarat. IS / ASTM certified material.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vadodara",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9998280619",
              "contactType": "sales"
            },
            "sameAs": [
              "https://www.creativemetalind.com"
            ]
          })} />

          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}