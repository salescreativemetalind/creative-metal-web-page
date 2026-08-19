/**
 * /steel-pipe-supplier-hyderabad
 * Target: "SS pipe supplier Hyderabad", "CS pipe Hyderabad",
 * "pipe fittings Hyderabad", "steel pipe supplier Hyderabad"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Duplex Steel Pipes", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Pipe Fittings (SS/CS/Alloy)", grades: "Elbows, Tees, Reducers, Caps", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, IS 2062, NACE HIC", sizes: "6mm to 150mm", type: "Hot Rolled", stock: "Available" },
  { category: "Structural Steel", grades: "TMT Bars, MS Angle, ISMC, ISMB", sizes: "As per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "HPCL Vizag Refinery Projects", desc: "Piping materials for HPCL expansion and turnaround — SS, CS, alloy pipes and fittings" },
  { icon: "\u{1F48A}", name: "Pharmaceutical Industry", desc: "Pharma City Hyderabad, Genome Valley — SS 316L electropolished pipes for pharma-grade piping" },
  { icon: "\u26A1", name: "Thermal Power Plants", desc: "NTPC Ramagundam, Singareni — P91, P22 alloy steel pipes for boiler and steam systems" },
  { icon: "\u{1F3ED}", name: "Chemical & Fertilizer", desc: "NACL Hyderabad, Nizam Sugars — process piping in SS, alloy and exotic alloys" },
  { icon: "\u{1F680}", name: "Defence & Aerospace", desc: "DRDO, HAL, BDL Hyderabad — special alloy pipes, Inconel, titanium tubes" },
  { icon: "\u{1F3D7}\uFE0F", name: "Infrastructure & Metro", desc: "Hyderabad Metro, ORR flyovers — structural steel, TMT bars, MS sections" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Hyderabad?", a: "Creative Metal Industries (CMI) is a trusted steel pipe supplier serving Hyderabad and Telangana since 2012. We supply stainless steel (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11), duplex, and exotic alloy pipes along with fittings and flanges. Our Vadodara warehouse maintains 2000+ tonnes ready stock with direct dispatch to Hyderabad within 2-3 days. We supply to pharma companies in Genome Valley, NTPC Ramagundam, defence establishments, and Jeedimetla industrial area." },
  { q: "What is the delivery time for pipes from Vadodara to Hyderabad?", a: "Standard delivery to Hyderabad is 2-3 working days via dedicated road transport (approx 1,100 km from Vadodara). Express delivery in 48 hours available for urgent project requirements. For bulk orders, we can arrange dedicated truck loads with door-to-step delivery to Jeedimetla, Nacharam, Balanagar, IDA Patancheru or any industrial area in Hyderabad/Secunderabad." },
  { q: "Do you supply pharma-grade SS pipes in Hyderabad?", a: "Yes, we supply SS 316L electropolished seamless pipes and tubes specifically for pharmaceutical applications in Hyderabad's Pharma City and Genome Valley. These are supplied as per ASTM A312/A269 with surface finish Ra 0.4 micron (internal), complete with material certificates, surface roughness reports, and passivation certificates. We also supply sanitary fittings (tri-clamp) and DIN standard tubes for pharma process piping." },
  { q: "What is the price of SS 304 pipe in Hyderabad?", a: "SS 304 seamless pipe prices in Hyderabad range from Rs 250-450 per kg depending on size, schedule, and order quantity. Welded/ERW SS 304 pipes start from Rs 180 per kg. Prices are linked to LME nickel rates and fluctuate accordingly. For exact current pricing, contact us at +91 99982 80619 — we provide formal quotations within 4 hours with competitive rates, sourced directly from Jindal, SAIL Salem, and premium import mills." },
  { q: "Can you supply to NTPC and power plant projects near Hyderabad?", a: "Absolutely. We have extensive experience supplying to thermal power plants including NTPC Ramagundam, Singareni Collieries power plant, and various state electricity board projects. We supply IBR Form III-C certified alloy steel pipes (P91, P22, P11) from IBR-approved mills — Sumitomo, Vallourec, ISMT. Complete documentation including MTC EN 10204 3.1/3.2, IBR certificates, heat treatment records and hardness test reports provided as per project specifications." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-hyderabad#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries — Steel Pipe Supplier Hyderabad",
      "description": "Leading steel pipe supplier in Hyderabad offering SS, carbon steel, alloy steel, duplex pipes, fittings and flanges for pharma, power plants and defence industries.",
      "telephone": "+919998280619",
      "url": "https://www.creativemetalind.com/steel-pipe-supplier-hyderabad",
      "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" },
      "areaServed": { "@type": "City", "name": "Hyderabad", "containedInPlace": { "@type": "State", "name": "Telangana" } },
      "priceRange": "$$"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Steel Pipe Supplier Hyderabad", "item": "https://www.creativemetalind.com/steel-pipe-supplier-hyderabad" }
      ]
    }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SteelPipeSupplierHyderabad() {
  return (
    <>
      <Title>Steel Pipe Supplier Hyderabad | SS CS Alloy | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Hyderabad — SS 304/316L, carbon steel, alloy steel, duplex pipes & fittings. Pharma-grade SS pipes. Delivery 2-3 days. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-hyderabad" />
      <Meta property="og:title" content="Steel Pipe Supplier Hyderabad | SS, Carbon Steel, Alloy | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel pipe supplier Hyderabad — SS, CS, alloy, duplex pipes & fittings. Pharma-grade available. Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-hyderabad" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Pipe Supplier Hyderabad | SS CS Alloy | CMI" />
      <Meta name="twitter:description" content="Steel pipe supplier Hyderabad — SS, CS, alloy pipes. Pharma-grade. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Pipe Supplier Hyderabad" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Hyderabad</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>
            Steel Pipe Supplier in Hyderabad — SS, Carbon Steel &amp; Pipe Fittings
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "max-width": "750px", margin: "0 auto" }}>
            <strong>Creative Metal Industries</strong> is a leading <strong>steel pipe supplier in Hyderabad</strong>, serving Telangana's booming pharmaceutical, defence, power and manufacturing sectors. We supply stainless steel pipes (SS 304, 316L, 321, 310, 904L), carbon steel pipes (A106 Gr.B, API 5L), alloy steel pipes (P91, P22, P11), duplex steel, and exotic alloys (Inconel, Hastelloy, Monel). From Genome Valley pharma units to NTPC Ramagundam, DRDO/HAL defence facilities to Jeedimetla chemical plants — CMI delivers quality piping materials with 2-3 day dispatch from our 2000+ tonne Vadodara warehouse.
          </p>
        </div>

        {/* Product Table */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete Product Range — Pipes, Fittings &amp; Flanges for Hyderabad</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.85rem", "min-width": "700px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}><th style={{ padding: "0.7rem 0.8rem", "text-align": "left" }}>Product Category</th><th style={{ padding: "0.7rem 0.8rem" }}>Grades</th><th style={{ padding: "0.7rem 0.8rem" }}>Sizes</th><th style={{ padding: "0.7rem 0.8rem" }}>Type</th><th style={{ padding: "0.7rem 0.8rem" }}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p, i) => (
                <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}><td style={{ padding: "0.6rem 0.8rem", "font-weight": "700" }}>{p.category}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.grades}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.sizes}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.type}</td><td style={{ padding: "0.6rem 0.8rem", "text-align": "center", color: p.stock === "Ready Stock" ? "#16a34a" : "#d97706", "font-weight": "700" }}>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why Hyderabad Trusts CMI */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Why Hyderabad Industries Choose Creative Metal Industries</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <ul style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem", margin: 0 }}>
            <li><strong>Pharma-grade expertise:</strong> SS 316L electropolished pipes with Ra 0.4 micron finish for Genome Valley and Pharma City GMP-compliant installations</li>
            <li><strong>Defence-approved supplier:</strong> Special alloys (Inconel, titanium, Monel) for DRDO, HAL and BDL Hyderabad projects with full traceability</li>
            <li><strong>Power plant specialist:</strong> IBR-certified P91, P22, P11 alloy pipes for NTPC Ramagundam and state thermal power stations</li>
            <li><strong>2-3 day delivery:</strong> 1,100 km Vadodara to Hyderabad via NH48 — dedicated transport with real-time tracking</li>
            <li><strong>Complete documentation:</strong> Original MTC, IBR certificates, PMI reports, NABL lab reports, surface roughness certificates as applicable</li>
            <li><strong>Competitive pricing:</strong> Direct mill sourcing — no Hyderabad dealer margin. Formal quotation within 4 hours of inquiry</li>
            <li><strong>Single-source convenience:</strong> SS, CS, alloy, duplex, exotic alloys + fittings + flanges + plates — one PO, one supplier</li>
            <li><strong>Technical consultancy:</strong> Material grade selection, corrosion-resistant alloy (CRA) recommendations, equivalent grade mapping</li>
          </ul>
        </div>

        {/* Industries */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Industries We Serve in Hyderabad &amp; Telangana</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
          {INDUSTRIES.map(ind => (
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
              <p style={{ "font-size": "1.1rem", margin: "0 0 0.3rem" }}>{ind.icon} <strong style={{ color: "#111827" }}>{ind.name}</strong></p>
              <p style={{ "font-size": "0.83rem", color: "#6b7280", margin: 0 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Supply Areas */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Key Supply Areas in Hyderabad &amp; Telangana</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem", "margin-bottom": "2rem" }}>
          {["Jeedimetla Industrial Area", "IDA Patancheru", "Nacharam Industrial Area", "Balanagar", "Genome Valley", "Pharma City (Mucherla)", "IDA Bollaram", "Medchal Industrial Area", "Uppal Industrial Area", "Shamirpet", "Ramachandrapuram", "NTPC Ramagundam"].map(area => (
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "6px", padding: "0.6rem 0.8rem", "font-size": "0.83rem", "font-weight": "600", color: "#374151", "text-align": "center" }}>{area}</div>
          ))}
        </div>

        {/* Cross-sell */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete CMI Product Lines Available in Hyderabad</h2>
        <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
          Creative Metal Industries supplies the full spectrum of industrial steel products to Hyderabad. Beyond pipes, our range includes <strong>pipe fittings</strong> (buttweld elbows, tees, reducers in SS/CS/alloy), <strong>forged fittings</strong> (socket weld and threaded), <strong>flanges</strong> (weld neck, slip-on, blind, RTJ in all materials), <strong>steel plates</strong> (SA 516 Gr.70, NACE HIC, boiler quality), <strong>TMT bars</strong> (Fe 500D for construction), <strong>structural steel</strong> (MS angle, ISMC channel, ISMB beam), and <strong>fasteners</strong> (ASTM A193 B7/B16 stud bolts, A194 nuts). One supplier for complete project requirements — pharma, defence, power or construction.
        </p>

        {/* FAQ */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions — Steel Pipe Supplier Hyderabad</h2>
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "3rem" }}>
          {FAQS.map(f => (
            <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}><summary style={{ "font-weight": "700", "font-size": "0.92rem", color: "#111827", cursor: "pointer" }}>{f.q}</summary><p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", "margin-top": "0.6rem", "margin-bottom": 0 }}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", "margin-bottom": "2rem" }}>
          <h2 style={{ color: "#fff", "font-size": "1.4rem", "font-weight": "800", "margin-bottom": "0.6rem" }}>Need Steel Pipes in Hyderabad? Get Instant Quote!</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "1.25rem", "font-size": "0.95rem" }}>SS, Carbon Steel, Alloy, Duplex — All grades & fittings. Ready stock. 2-3 day delivery to Hyderabad.</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", padding: "0.75rem 1.5rem", "border-radius": "8px", "text-decoration": "none", "font-size": "0.95rem" }}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", "font-weight": "800", padding: "0.75rem 1.5rem", "border-radius": "8px", "text-decoration": "none", "font-size": "0.95rem" }}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", "font-weight": "700", padding: "0.75rem 1.5rem", "border-radius": "8px", "text-decoration": "none", "font-size": "0.95rem" }}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", "margin-bottom": "0.75rem" }}>Related Pages</h3>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(200px,1fr))", gap: "0.75rem" }}>
          {[
            { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
            { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe Supplier India" },
            { href: "/steel-pipe-supplier-chennai", label: "Steel Pipe Supplier Chennai" },
            { href: "/steel-pipe-supplier-bangalore", label: "Steel Pipe Supplier Bangalore" },
            { href: "/inconel-pipe-supplier-india", label: "Inconel Pipe Supplier India" },
          ].map(l => (
            <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-pipe-supplier-hyderabad" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p><strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Steel Pipe Supplier Hyderabad | SS, CS, Alloy Pipes & Fittings | Vadodara, Gujarat</p>
        <p style={{ "margin-top": "0.5rem" }}><a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
