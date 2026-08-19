import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

// ── Public site IDs, injected at build time ──────────────────
// Both are public values (they ship in the HTML), not secrets.
// Set them in .env — see .env.example. When unset, the related
// tags are omitted entirely rather than emitting broken placeholders.
const GA4_ID = import.meta.env.VITE_GA4_ID;
const GSC_VERIFICATION = import.meta.env.VITE_GSC_VERIFICATION;

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          {/* charset + viewport live in entry-server.tsx (the document shell).
              Declaring them here as well produced two of each on every page. */}
          <Title>Creative Metal Industries | SS Pipes, Plates &amp; Fittings Manufacturer — Vadodara</Title>

          {/* ── Google Search Console Verification ────────────── */}
          {/* Set VITE_GSC_VERIFICATION in .env to emit this tag */}
          {GSC_VERIFICATION && (
            <Meta name="google-site-verification" content={GSC_VERIFICATION} />
          )}

          {/* ── Google Analytics (GA4) ────────────────────────── */}
          {/* Set VITE_GA4_ID in .env (e.g. G-ABC1234XYZ) to enable */}
          {GA4_ID && (
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
          )}
          {GA4_ID && (
            <script innerHTML={`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`} />
          )}

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

          {/* ── Open Graph / Twitter — SITE-WIDE VALUES ONLY ───────────────
              @solidjs/meta only collapses a duplicate <Meta> when `content`
              matches exactly (getTagKey() hashes `content` together with
              `name`). Anything a route overrides with a page-specific value
              must therefore NOT be declared here, or both tags ship — and the
              one declared here renders first, which is the value scrapers read.

              Only values identical on every page belong here. Page-level
              og:title / og:description / og:url / og:type / robots are set by
              each route. twitter:title / twitter:description are deliberately
              omitted: X falls back to og:title / og:description, which are
              page-specific and therefore more accurate. */}
          <Meta property="og:site_name"   content="Creative Metal Industries" />
          <Meta property="og:image"       content="https://www.creativemetalind.com/og-image.jpg" />
          <Meta property="og:image:width"  content="1200" />
          <Meta property="og:image:height" content="630" />
          <Meta property="og:image:alt"   content="Creative Metal Industries logo" />
          <Meta property="og:locale"      content="en_IN" />
          <Meta name="twitter:card"        content="summary_large_image" />
          <Meta name="twitter:image"       content="https://www.creativemetalind.com/og-image.jpg" />

          {/* ── JSON-LD WebSite schema ──────────────────────────────────────
              No potentialAction/SearchAction: it previously pointed at
              /products?q={search_term_string}, but /products is a static
              catalogue and weight-chart page with no query-parameter search.
              Declaring a search endpoint that does not exist is invalid, so it
              is omitted until an actual site search is implemented. */}
          <script type="application/ld+json" innerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.creativemetalind.com/#website",
            "name": "Creative Metal Industries",
            "alternateName": "CMI",
            "url": "https://www.creativemetalind.com",
            "publisher": { "@id": "https://www.creativemetalind.com/#organization" }
          })} />

          {/* ── JSON-LD Organization schema (Google Knowledge Panel logo) ── */}
          <script type="application/ld+json" innerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            // Stable identity so the per-page LocalBusiness nodes can point at
            // this single entity via parentOrganization instead of each reading
            // as a separate, unrelated business.
            "@id": "https://www.creativemetalind.com/#organization",
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
              "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura",
              "addressLocality": "Vadodara",
              "addressRegion": "Gujarat",
              "postalCode": "390001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919998280619",
              "contactType": "sales"
            },
            "sameAs": [
              "https://www.creativemetalind.com",
              "https://x.com/CreativeMetal",
              "https://t.me/Creativemetal_Industries",
              "https://www.indiamart.com/creativemetalindustries/",
              "https://www.justdial.com/Vadodara/Creative-Metal-Industries"
            ]
          })} />

          {/* ── JSON-LD LocalBusiness schema (Google Maps, Local Pack, Knowledge Panel) ── */}
          <script type="application/ld+json" innerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.creativemetalind.com/#localbusiness",
            "name": "Creative Metal Industries",
            "alternateName": "CMI Vadodara",
            "description": "Leading supplier and stockist of stainless steel pipes, carbon steel plates, alloy steel products, pipe fittings, flanges, and structural steel in Vadodara, Gujarat. Serving oil & gas, chemical, pharma, power, and construction industries since 2012.",
            "url": "https://www.creativemetalind.com",
            "telephone": "+919998280619",
            "email": "info@creativemetalind.com",
            "image": "https://www.creativemetalind.com/og-image.jpg",
            "logo": "https://www.creativemetalind.com/logo_cmi.png",
            "priceRange": "₹₹₹",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, Bank Transfer, NEFT, RTGS, Cheque, LC",
            "foundingDate": "2012",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 5,
              "maxValue": 10
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura",
              "addressLocality": "Vadodara",
              "addressRegion": "Gujarat",
              "postalCode": "390001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.2964094,
              "longitude": 73.205506
            },
            "hasMap": "https://maps.google.com/?cid=1860157997206534869",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              }
            ],
            "areaServed": [
              { "@type": "City", "name": "Vadodara" },
              { "@type": "State", "name": "Gujarat" },
              { "@type": "Country", "name": "India" }
            ],
            "knowsAbout": [
              "Stainless Steel Pipes",
              "Carbon Steel Plates",
              "Alloy Steel Pipes",
              "Pipe Fittings",
              "Flanges",
              "Duplex Steel",
              "Super Duplex Steel",
              "Inconel",
              "Monel",
              "Hastelloy",
              "Titanium Pipes",
              "TMT Bars",
              "Structural Steel"
            ],
            "sameAs": [
              "https://www.indiamart.com/creativemetalindustries/",
              "https://www.justdial.com/Vadodara/Creative-Metal-Industries",
              "https://x.com/CreativeMetal",
              "https://t.me/Creativemetal_Industries"
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