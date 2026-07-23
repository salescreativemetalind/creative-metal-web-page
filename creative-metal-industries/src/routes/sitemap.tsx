import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";
import { AllPagesLinks } from "../components/AllPagesLinks";

export default function SitemapPage() {
  return (
    <PageLayout>
      <Title>All Pages — Site Map | Creative Metal Industries</Title>
      <Meta name="description" content="Complete site map of Creative Metal Industries — 500+ pages covering SS, CS, alloy steel pipes, plates, fittings. Price guides, weight charts, specifications, comparisons." />
      <Link rel="canonical" href="https://www.creativemetalind.com/sitemap" />

      <section style={{ padding: "3rem 0", "min-height": "80vh" }}>
        <div class="container">
          <div style={{ "text-align": "center", "margin-bottom": "2.5rem" }}>
            <h1 style={{ "font-size": "clamp(1.5rem, 3vw, 2rem)", "font-weight": "800", color: "#111827", margin: "0 0 0.75rem" }}>
              All Pages — Creative Metal Industries
            </h1>
            <p style={{ "font-size": "0.95rem", color: "#6b7280", margin: "0 auto", "max-width": "600px" }}>
              500+ technical articles, price guides, weight charts, specifications, material comparisons, industry guides, and product pages.
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
