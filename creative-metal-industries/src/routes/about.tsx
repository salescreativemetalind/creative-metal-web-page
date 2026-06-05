import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";

export default function AboutPage() {
  return (
    <PageLayout active="About Us">
      <Title>About Us | Creative Metal Industries Vadodara</Title>
      <Meta name="description" content="Creative Metal Industries — established 2012, Vadodara. Manufacturer, stockist and supplier of SS, Carbon & Alloy Steel Pipes, Plates, Fittings, Flanges and Exotic Alloys. Learn about our team, facilities and certifications." />
      <Link rel="canonical" href="https://www.creativemetalind.com/about" />

      <section class="page-hero">
        <div class="container">
          <span class="section-label">About Us</span>
          <h1>Creative Metal Industries</h1>
          <p>Vadodara's Trusted Manufacturer, Stockist &amp; Supplier of Industrial Steel &amp; Alloys since 2012.</p>
        </div>
      </section>

      <section style="background:var(--white);padding:5rem 0">
        <div class="container">
          <div class="about-top" style="margin-bottom:4rem">
            <div class="about-top-left">
              <span class="section-label">Our Story</span>
              <h2>Who We Are</h2>
              <p class="about-tagline">Manufacturer · Stockist · Supplier · Exporter</p>
            </div>
            <div class="about-top-divider" aria-hidden="true"/>
            <div class="about-top-right">
              <p>Established in <strong>2012</strong> and headquartered at <strong>Loha Bhavan, Lakkadpitha Road, Vadodara, Gujarat</strong>, Creative Metal Industries is a premier manufacturer, stockist and supplier of Stainless Steel, Carbon Steel, Alloy Steel and Exotic Metal products.</p>
              <p>Our team of qualified engineers and procurement specialists delivers SS/CS/AS Pipes, Tubes, Plates, Sheets, Buttweld &amp; Forged Fittings, Flanges, Structural Steel and Special Alloys including Duplex, Inconel, Monel, Hastelloy, Titanium, Aluminium and Copper.</p>
              <p>Operating from a <strong>1,092 sq.mtr warehouse at GIDC Makarpura, Vadodara</strong>, we maintain deep ready stock. Materials are inspected by <strong>DNV, TUV, SGS, BVIS and LRIS</strong> third-party agencies.</p>
              <p>We export to <strong>UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK, USA</strong> and 50+ countries globally, serving Oil &amp; Gas, Petrochemical, Power, Fertilizer, Cement, Chemical, Marine and Defence industries.</p>
            </div>
          </div>

          <div class="about-pillars">
            {[
              { icon: "🎯", title: "Our Mission",     body: "To supply the highest quality metals with complete documentation, at competitive prices, delivered on time — every time." },
              { icon: "🔬", title: "Quality Policy",  body: "All material supplied with original Mill Test Certificates. Third-party inspection accepted under any internationally recognised agency." },
              { icon: "🌍", title: "Global Reach",    body: "Export to 50+ countries with full documentation — packing lists, certificate of origin and sea/air freight support." },
              { icon: "⚡", title: "Fast Response",   body: "Quote within 24 hours. Urgent requirements on priority. Emergency stock dispatch from Vadodara same day." },
            ].map(p => (
              <div class="pillar-card">
                <div class="pillar-icon-wrap"><span class="pillar-icon">{p.icon}</span></div>
                <div class="pillar-body"><h4>{p.title}</h4><p>{p.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style="background:var(--sky2);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Our Facility</span>
            <h2>Office &amp; Warehouse</h2>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem">
            <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem">
              <h4 style="font-size:1rem;margin-bottom:0.25rem">📍 Registered Office</h4>
              <p style="font-size:0.9rem;color:var(--charcoal)">F-3, 1st Floor, Loha Bhavan,<br/>Lakkadpitha Road,<br/>Vadodara — 390001, Gujarat, India</p>
              <p style="font-size:0.85rem;color:var(--muted)">Tel: +91 265 410723</p>
            </div>
            <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem">
              <h4 style="font-size:1rem;margin-bottom:0.25rem">🏭 Godown &amp; Yard</h4>
              <p style="font-size:0.9rem;color:var(--charcoal)">386/B, GIDC Estate,<br/>Makarpura,<br/>Vadodara, Gujarat</p>
              <p style="font-size:0.85rem;color:var(--muted)">1,092 sq.mtr yard area</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
