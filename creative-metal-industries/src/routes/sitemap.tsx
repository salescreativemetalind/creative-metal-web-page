import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";
import { AllPagesLinks } from "../components/AllPagesLinks";

export default function SitemapPage() {
  return (
    <PageLayout>
      <Title>All Pages — Site Map | Creative Metal Industries</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="All Pages — Site Map | Creative Metal Industries" />
      <Meta property="og:description" content="Site map of Creative Metal Industries — stainless steel, carbon steel, alloy steel, duplex, Inconel, Hastelloy, Monel, titanium and mild steel pipe, plate and supplier pages." />
      <Meta property="og:url" content="https://www.creativemetalind.com/sitemap" />
      <Meta name="description" content="Site map of Creative Metal Industries — SS, carbon steel, alloy steel, duplex and exotic alloy pipe, plate and supplier pages across India." />
      <Link rel="canonical" href="https://www.creativemetalind.com/sitemap" />

      <section style={{ padding: "3rem 0", "min-height": "80vh" }}>
        <div class="container">
          <div style={{ "text-align": "center", "margin-bottom": "2.5rem" }}>
            <h1 style={{ "font-size": "clamp(1.5rem, 3vw, 2rem)", "font-weight": "800", color: "#111827", margin: "0 0 0.75rem" }}>
              All Pages — Creative Metal Industries
            </h1>
            <p style={{ "font-size": "0.95rem", color: "#6b7280", margin: "0 auto", "max-width": "600px" }}>
              Every product and supplier page — stainless steel, carbon steel, alloy steel (chrome-moly), duplex and super duplex, Inconel, Incoloy, Hastelloy, Monel, titanium and mild steel pipes, plates and bars.
            </p>
          </div>

          <AllPagesLinks />

          <div style={{ "text-align": "center", "margin-top": "2rem" }}>
            <a href="/" style={{ color: "#E8821A", "font-weight": "600", "text-decoration": "none" }}>← Back to Home</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
