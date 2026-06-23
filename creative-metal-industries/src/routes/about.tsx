import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";

const ABOUT_SCHEMA = JSON.stringify({
  "@context":"https://schema.org","@type":"Organization",
  "name":"Creative Metal Industries",
  "alternateName":["CMI Vadodara","Creative Metal Ind"],
  "url":"https://www.creativemetalind.com",
  "logo":"https://www.creativemetalind.com/logo_cmi.png",
  "foundingDate":"2012",
  "description":"Manufacturer, stockist and supplier of Stainless Steel, Carbon Steel, Alloy Steel pipes, plates, fittings, flanges and exotic alloys. Headquartered in Vadodara, Gujarat, India. Exporting to 50+ countries.",
  "address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},
  "contactPoint":[{"@type":"ContactPoint","telephone":"+91-99982-80619","contactType":"sales","name":"Sunny Shah"},{"@type":"ContactPoint","telephone":"+91-98255-06110","contactType":"customer support","name":"Ghewar Shah"}],
  "sameAs":["https://www.indiamart.com/creativemetalindustries/","https://x.com/CreativeMetal","https://t.me/Creativemetal_Industries"],
  "areaServed":[{"@type":"State","name":"Gujarat"},{"@type":"Country","name":"India"},{"@type":"Country","name":"United Arab Emirates"},{"@type":"Country","name":"Oman"},{"@type":"Country","name":"Saudi Arabia"}],
  "knowsAbout":["Stainless Steel Pipes","Carbon Steel Plates","Alloy Steel P91","Duplex Steel","Inconel","Monel","Hastelloy","Titanium","IBR Certification","NACE Compliance"]
});

export default function AboutPage() {
  return (
    <PageLayout active="About Us">
      <Title>About Creative Metal Industries | Steel Supplier Since 2012 | Vadodara</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Creative Metal Industries — Vadodara's leading steel supplier since 2012. Manufacturer, stockist and exporter of SS, CS, alloy steel pipes, plates, fittings, flanges and exotic alloys. 1092 sq.mtr warehouse at GIDC Makarpura. IBR, NACE, MTC certified. Export to 50+ countries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/about" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="About Creative Metal Industries | Steel Supplier Since 2012 | Vadodara" />
      <Meta property="og:description" content="Vadodara's trusted manufacturer, stockist & exporter of SS, CS, alloy steel pipes, plates, fittings. 1092 sq.mtr warehouse. IBR, NACE, MTC. Since 2012." />
      <Meta property="og:url" content="https://www.creativemetalind.com/about" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="About Creative Metal Industries | Steel Supplier Since 2012" />
      <Meta name="twitter:description" content="Vadodara's leading steel supplier since 2012. SS, CS, alloy steel pipes, plates, fittings. IBR, NACE, MTC certified. 50+ countries." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={ABOUT_SCHEMA} />

      <section class="page-hero">
        <div class="container">
          <span class="section-label">About Us</span>
          <h1>About Creative Metal Industries — Vadodara's Trusted Steel Supplier Since 2012</h1>
          <p>Manufacturer, Stockist &amp; Exporter of Industrial Steel, Alloys &amp; Exotic Metals — Serving Oil &amp; Gas, Power, Chemical &amp; EPC Industries Worldwide.</p>
        </div>
      </section>

      {/* Company Story */}
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
              <p>Established in <strong>2012</strong> and headquartered at <strong>Loha Bhavan, Lakkadpitha Road, Vadodara, Gujarat</strong>, Creative Metal Industries is a premier manufacturer, stockist and supplier of Stainless Steel, Carbon Steel, Alloy Steel and Exotic Metal products. We are one of the most trusted <strong>steel suppliers in Vadodara</strong> with a proven track record of serving India's largest EPC contractors, refineries and power plants.</p>
              <p>Our team of qualified engineers and procurement specialists delivers SS/CS/AS Pipes, Tubes, Plates, Sheets, Buttweld &amp; Forged Fittings, Flanges, Structural Steel and Special Alloys including Duplex, Inconel, Monel, Hastelloy, Titanium, Aluminium and Copper — covering over <strong>10 alloy families and 500+ product SKUs</strong>.</p>
              <p>Operating from a <strong>1,092 sq.mtr warehouse at GIDC Makarpura, Vadodara</strong>, we maintain deep ready stock with same-day dispatch capability. All materials are inspected and certified by <strong>DNV, TUV, SGS, BVIS and LRIS</strong> third-party agencies before dispatch.</p>
              <p>We export to <strong>UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK, USA</strong> and 50+ countries globally, serving Oil &amp; Gas, Petrochemical, Power, Fertilizer, Cement, Chemical, Pharmaceutical, Marine and Defence industries.</p>
            </div>
          </div>

          {/* Company Timeline — E-E-A-T: demonstrates experience over time */}
          <div style="margin-bottom:4rem">
            <h2 style="text-align:center;margin-bottom:2rem">Our Journey — 2012 to Today</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem">
              {[
                {year:"2012",event:"Company founded in Vadodara. Started as SS pipe stockist at Loha Bhavan, Lakkadpitha Road."},
                {year:"2015",event:"Expanded into Carbon Steel, Alloy Steel (P91/P22) and exotic alloys. First export shipment to UAE."},
                {year:"2018",event:"Opened 1,092 sq.mtr warehouse at GIDC Makarpura for deep stocking. Added processing capabilities."},
                {year:"2021",event:"Achieved 500+ projects delivered milestone. Became authorised stockist for Sandvik and Ratnamani."},
                {year:"2024",event:"Expanded product range to 10+ alloy families. Export footprint reached 50+ countries. Added duplex and titanium stock."},
                {year:"2026",event:"Serving India's top EPC contractors, refineries and power plants. 1000+ SS pipe sizes in ready stock."},
              ].map(m => (
                <div class="pillar-card" style="flex-direction:column;gap:0.5rem;padding:1.5rem">
                  <span style="font-size:1.5rem;font-weight:800;color:var(--amber)">{m.year}</span>
                  <p style="font-size:0.85rem;color:var(--charcoal);line-height:1.6;margin:0">{m.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div class="about-pillars">
            {[
              { icon: "🎯", title: "Our Mission", body: "To supply the highest quality metals with complete documentation, at competitive prices, delivered on time — every time. Zero compromise on material authenticity." },
              { icon: "🔬", title: "Quality Policy", body: "100% original Mill Test Certificates on every item. Third-party inspection accepted under any internationally recognised agency. No secondary or untraceable material ever sold." },
              { icon: "🌍", title: "Global Reach", body: "Export to 50+ countries — UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK, USA, Africa. Full export documentation, packing, certificate of origin and freight support." },
              { icon: "⚡", title: "Fast Response", body: "Quote within 2 hours. Emergency stock dispatch from Vadodara same day. Delivery to Ankleshwar, Bharuch, Dahej, Surat, Ahmedabad within 4 hours." },
            ].map(p => (
              <div class="pillar-card">
                <div class="pillar-icon-wrap"><span class="pillar-icon">{p.icon}</span></div>
                <div class="pillar-body"><h4>{p.title}</h4><p>{p.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — E-E-A-T: shows real people behind the business */}
      <section style="background:var(--sky2);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Our Team</span>
            <h2>Leadership &amp; Key Contacts</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem">
            <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem;text-align:center">
              <h4 style="font-size:1.1rem;margin-bottom:0.25rem">Sunny Shah</h4>
              <p style="font-size:0.85rem;color:var(--amber);font-weight:700;margin:0">Director — Sales &amp; Business Development</p>
              <p style="font-size:0.85rem;color:var(--charcoal);margin:0">13+ years in industrial steel trading. Handles all enquiries, project quotations and key accounts for oil &amp; gas, EPC and power plant clients.</p>
              <p style="font-size:0.85rem;color:var(--muted);margin:0">📞 +91 99982 80619 · creativemetalind@gmail.com</p>
            </div>
            <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem;text-align:center">
              <h4 style="font-size:1.1rem;margin-bottom:0.25rem">Ghewar Shah</h4>
              <p style="font-size:0.85rem;color:var(--amber);font-weight:700;margin:0">Director — Operations &amp; Logistics</p>
              <p style="font-size:0.85rem;color:var(--charcoal);margin:0">Manages warehouse operations at GIDC Makarpura, material dispatch, quality control and third-party inspection coordination.</p>
              <p style="font-size:0.85rem;color:var(--muted);margin:0">📞 +91 98255 06110</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Quality — E-E-A-T: trust signals */}
      <section style="background:var(--white);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Quality &amp; Compliance</span>
            <h2>Certifications &amp; Documentation</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem">
            {[
              {icon:"📄",title:"Mill Test Certificate (MTC)",desc:"EN 10204 Type 3.1 and 3.2 — chemical composition, mechanical properties, heat number traceability on every item supplied."},
              {icon:"🏅",title:"IBR Form III-C",desc:"Indian Boiler Regulation certification for all pressure-part materials — pipes, plates, fittings and flanges for boiler service."},
              {icon:"✅",title:"NACE MR-01-75 / MR0175",desc:"Compliance for sour service applications (H₂S environments). HIC and SSC tested material available for oil & gas projects."},
              {icon:"🔬",title:"Third-Party Inspection",desc:"Inspection accepted under DNV GL, TUV SUD, SGS, Bureau Veritas (BVIS) and Lloyd's Register (LRIS) at our Vadodara facility."},
              {icon:"🧪",title:"Testing & Reports",desc:"Hydrostatic test, ultrasonic test (UT), radiography (RT), PMI, IGC, hardness, impact — as per applicable standard requirements."},
              {icon:"🌍",title:"Export Documentation",desc:"Packing lists, certificate of origin, fumigation certificate, shipping marks — complete export compliance for 50+ destination countries."},
            ].map(c => (
              <div class="pillar-card" style="flex-direction:column;gap:0.5rem;padding:1.5rem">
                <span style="font-size:1.5rem">{c.icon}</span>
                <h4 style="font-size:0.95rem;margin:0">{c.title}</h4>
                <p style="font-size:0.82rem;color:var(--charcoal);line-height:1.6;margin:0">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section style="background:var(--sky2);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Our Facility</span>
            <h2>Office &amp; Warehouse — Vadodara</h2>
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
              <p style="font-size:0.85rem;color:var(--muted)">1,092 sq.mtr yard area · Covered storage · Crane facility</p>
            </div>
          </div>
          <div style="margin-top:2rem;text-align:center">
            <p style="font-size:0.9rem;color:var(--charcoal)">Open Monday to Saturday, 9:00 AM to 7:00 PM. Call <a href="tel:+919998280619" style="color:var(--amber);font-weight:700">+91 99982 80619</a> before visiting.</p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section style="background:var(--white);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2rem">
            <span class="section-label">Industries We Serve</span>
            <h2>Trusted Across India's Core Industries</h2>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center">
            {["Oil & Gas Refineries","Petrochemical Plants","Thermal & Nuclear Power","Fertilizer Industry","Chemical & Pharmaceutical","Cement & Mining","Railways & Metro","Marine & Offshore","Aerospace & Defence","Food & Dairy Processing","Water & Desalination","EPC Contractors"].map(ind => (
              <span style="background:var(--sky);border:1px solid var(--border);border-radius:99px;padding:0.4rem 1rem;font-size:0.82rem;font-weight:600;color:var(--charcoal)">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style="background:linear-gradient(135deg,#E8821A,#d85c2a);padding:3rem 0;text-align:center">
        <div class="container">
          <h2 style="color:#fff;font-size:1.4rem;margin-bottom:0.75rem">Ready to Work With Us?</h2>
          <p style="color:rgba(255,255,255,0.9);margin-bottom:1.5rem;font-size:0.95rem">Get a quotation within 2 hours. Same-day dispatch from Vadodara for stock items.</p>
          <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" class="btn btn-outline" style="background:#fff;color:#E8821A;border:none;font-weight:800">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" class="btn btn-primary" style="background:#25D366;border:none;font-weight:800">💬 WhatsApp</a>
            <a href="/#contact" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,0.6);font-weight:700">Get a Quote →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
