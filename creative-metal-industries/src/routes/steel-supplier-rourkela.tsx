import { Title, Meta, Link } from "@solidjs/meta";

export default function SteelSupplierRourkela() {
  const defined = {
    phone: "+91 99982 80619",
    phoneLink: "tel:+919998280619",
    email: "info@creativemetalind.com",
    brand: "#E8821A",
    city: "Rourkela",
    state: "Odisha",
    domain: "https://www.creativemetalind.com",
    slug: "/steel-supplier-rourkela",
    business: "Creative Metal Industries",
    address: "386/B GIDC Estate Makarpura, Vadodara, Gujarat 390010",
  };

  const products = [
    { name: "Alloy Steel Pipes (P5, P9, P11, P22, P91 IBR)", grades: "ASTM A335 P5/P9/P11/P22/P91", delivery: "2-3 Days" },
    { name: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B/C, A333 Gr.6", delivery: "2-3 Days" },
    { name: "Stainless Steel Pipes (304/316L/310S/321)", grades: "ASTM A312 TP304/316L/310S/321", delivery: "2-3 Days" },
    { name: "Boiler Tubes IBR Certified", grades: "ASTM A213 T11/T22/T91, SA192", delivery: "2-3 Days" },
    { name: "SS Fittings & Flanges", grades: "ASTM A403/A182 (304/316L/321)", delivery: "2-3 Days" },
    { name: "Duplex & Super Duplex Steel", grades: "UNS S31803/S32205/S32750/S32760", delivery: "2-3 Days" },
    { name: "Steel Plates (SA516/SA387)", grades: "ASTM A516 Gr.60/70, A387 Gr.11/22", delivery: "2-3 Days" },
    { name: "Exotic Alloys (Inconel/Hastelloy/Monel)", grades: "Inconel 600/625, Hastelloy C276, Monel 400", delivery: "3-4 Days" },
  ];

  const industries = [
    { emoji: "🏭", name: "SAIL Rourkela Steel Plant", desc: "Maintenance alloys, IBR boiler tubes, and specialty piping for coke ovens, blast furnaces & rolling mills at RSP." },
    { emoji: "⚡", name: "Vedanta Aluminium (Jharsuguda)", desc: "High-temperature alloys and corrosion-resistant piping for aluminium smelting and captive power plants." },
    { emoji: "🏗️", name: "Rourkela Industrial Area", desc: "Carbon steel and stainless steel supply for fabrication units, engineering workshops & ancillary industries." },
    { emoji: "🎓", name: "NIT Rourkela Research", desc: "Specialty alloy samples and precision-grade materials for metallurgical research and pilot projects." },
    { emoji: "🔥", name: "Coal-based Power Plants", desc: "IBR-certified boiler tubes, alloy steel pipes (P22/P91) for DVC and state thermal power stations." },
    { emoji: "⛏️", name: "Mining & Mineral Processing", desc: "Wear-resistant plates, high-strength pipes, and duplex steel for mineral beneficiation and slurry handling." },
  ];

  const faqs = [
    { q: "Who is the best steel supplier for Rourkela and Western Odisha?", a: "Creative Metal Industries is a trusted supplier serving SAIL RSP, Vedanta Jharsuguda, and the broader Rourkela industrial belt. We stock specialized alloys (Inconel, Hastelloy, Duplex) that local markets don't carry, along with IBR-certified pipes and boiler tubes — all delivered in 2-3 days from our Vadodara warehouse." },
    { q: "What is the delivery time from Vadodara to Rourkela?", a: "Standard delivery to Rourkela and surrounding areas (Jharsuguda, Sambalpur, Sundargarh) takes 2-3 days via dedicated road transport. For urgent plant shutdown requirements, we arrange express logistics with 48-hour delivery to SAIL RSP and nearby facilities." },
    { q: "Do you supply specialized alloys that SAIL RSP doesn't manufacture?", a: "Yes. While SAIL RSP produces carbon and alloy steel, they don't manufacture nickel alloys (Inconel 600/625), Hastelloy C276, Monel 400, or super duplex steel — all of which are critical for their own maintenance in corrosive environments like coke oven gas lines, desulphurization units, and acid pickling sections. We supply these exotic alloys specifically for RSP's internal maintenance needs." },
    { q: "Can you supply IBR-certified pipes for power plants in Odisha?", a: "Absolutely. We supply IBR-certified alloy steel pipes (P11, P22, P91) and boiler tubes (T11, T22, T91, SA192) with complete documentation including IBR Form III-C, mill test certificates, and third-party inspection reports — essential for DVC thermal plants, Brajarajnagar TPS, and captive power units." },
    { q: "How are you different from the local steel market in Rourkela?", a: "Local markets primarily stock mild steel and basic structural materials. We specialize in high-grade alloy steel, stainless steel (304/316L/310S/321), duplex/super duplex, and exotic alloys with full traceability, EN 10204 3.1 mill certificates, and IBR compliance — materials required for critical process piping that local traders cannot source." },
  ];

  const supplyAreas = [
    "SAIL RSP Complex", "Rourkela Industrial Area", "Jharsuguda (Vedanta)", "Sambalpur Industrial",
    "Rajgangpur Cement", "Sundargarh District", "Brajarajnagar TPS", "Ib Valley Coalfield",
    "Keonjhar Mining", "Joda Mining Belt", "Barbil Iron Ore", "Kalinganagar Steel Hub",
  ];

  const relatedLinks = [
    { href: "/steel-supplier-durgapur", label: "Steel Supplier Durgapur" },
    { href: "/steel-pipe-supplier-bhubaneswar", label: "Steel Pipe Supplier Bhubaneswar" },
    { href: "/steel-supplier-paradip", label: "Steel Supplier Paradip" },
    { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe Supplier India" },
    { href: "/steel-supplier-raipur", label: "Steel Supplier Raipur" },
  ];

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: defined.business,
    image: `${defined.domain}/logo.png`,
    url: `${defined.domain}${defined.slug}`,
    telephone: defined.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "386/B GIDC Estate Makarpura",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: defined.city,
      containedInPlace: { "@type": "State", name: defined.state },
    },
    description: `Leading steel supplier in ${defined.city} offering alloy steel pipes, stainless steel, duplex steel, IBR boiler tubes, and exotic alloys for SAIL RSP and industrial maintenance.`,
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: defined.domain },
      { "@type": "ListItem", position: 2, name: `Steel Supplier ${defined.city}`, item: `${defined.domain}${defined.slug}` },
    ],
  };

  return (
    <>
      <Title>Steel Supplier in Rourkela | SAIL RSP Alloys</Title>
      <Meta name="description" content="Leading steel supplier in Rourkela, Odisha. Alloy steel pipes P5-P91, IBR boiler tubes, duplex & exotic alloys for SAIL RSP maintenance. 2-3 day delivery." />
      <Link rel="canonical" href={`${defined.domain}${defined.slug}`} />
      <Meta property="og:title" content="Steel Supplier in Rourkela | SAIL RSP Alloys | Creative Metal Industries" />
      <Meta property="og:description" content="Specialized alloy steel, IBR pipes, duplex & exotic alloys for SAIL Rourkela Steel Plant maintenance and Odisha industries. 2-3 day delivery from Vadodara." />
      <Meta property="og:url" content={`${defined.domain}${defined.slug}`} />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content={`${defined.domain}/logo.png`} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier in Rourkela | SAIL RSP Alloys" />
      <Meta name="twitter:description" content="Alloy steel pipes, IBR boiler tubes, duplex & exotic alloys for SAIL RSP and Western Odisha industries. Fast delivery from Creative Metal Industries." />
      <Meta name="keywords" content="steel supplier Rourkela, SAIL Rourkela steel Odisha, alloy steel pipe Rourkela, IBR pipes Rourkela, stainless steel supplier Odisha, duplex steel Rourkela, Inconel supplier Rourkela, boiler tubes SAIL RSP" />

      <script type="application/ld+json" innerHTML={JSON.stringify(jsonLdLocal)} />
      <script type="application/ld+json" innerHTML={JSON.stringify(jsonLdFaq)} />
      <script type="application/ld+json" innerHTML={JSON.stringify(jsonLdBreadcrumb)} />

      {/* NAV */}
      <nav style={{ background: "#1a1a2e", padding: "12px 20px", "border-bottom": `3px solid ${defined.brand}` }}>
        <div style={{ "max-width": "1200px", margin: "0 auto", display: "flex", "justify-content": "space-between", "align-items": "center", "flex-wrap": "wrap" }}>
          <a href="/" style={{ color: "#fff", "font-size": "1.4rem", "font-weight": "bold", "text-decoration": "none" }}>
            {defined.business}
          </a>
          <div style={{ display: "flex", gap: "18px", "flex-wrap": "wrap" }}>
            <a href="/" style={{ color: "#ccc", "text-decoration": "none", "font-size": "0.95rem" }}>Home</a>
            <a href="/about" style={{ color: "#ccc", "text-decoration": "none", "font-size": "0.95rem" }}>About</a>
            <a href="/blog" style={{ color: "#ccc", "text-decoration": "none", "font-size": "0.95rem" }}>Blog</a>
            <a href={defined.phoneLink} style={{ color: defined.brand, "text-decoration": "none", "font-weight": "600", "font-size": "0.95rem" }}>
              📞 {defined.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* BREADCRUMBS */}
      <div style={{ background: "#f5f5f5", padding: "10px 20px", "font-size": "0.85rem" }}>
        <div style={{ "max-width": "1200px", margin: "0 auto" }}>
          <a href="/" style={{ color: defined.brand, "text-decoration": "none" }}>Home</a>
          {" / "}
          <span style={{ color: "#555" }}>Steel Supplier {defined.city}</span>
        </div>
      </div>

      {/* HERO / INTRO */}
      <section style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "60px 20px", color: "#fff" }}>
        <div style={{ "max-width": "900px", margin: "0 auto", "text-align": "center" }}>
          <h1 style={{ "font-size": "2.2rem", "margin-bottom": "20px", "line-height": "1.3" }}>
            Steel Supplier in <span style={{ color: defined.brand }}>Rourkela, Odisha</span> — Specialized Alloys for SAIL RSP
          </h1>
          <p style={{ "font-size": "1.1rem", "line-height": "1.8", color: "#ddd", "text-align": "left" }}>
            <strong>{defined.business}</strong> is your reliable steel supplier in Rourkela, serving SAIL Rourkela Steel Plant (RSP), Vedanta Aluminium Jharsuguda, and the entire Western Odisha industrial corridor. While SAIL RSP manufactures carbon and alloy steel products, their own plant maintenance requires specialized alloys that they don't produce internally — including Inconel 600/625 for coke oven gas lines, Hastelloy C276 for acid pickling sections, Monel 400 for desulphurization units, and super duplex steel for corrosive environments. We bridge this critical gap by supplying these exotic alloys along with IBR-certified boiler tubes, alloy steel pipes (P5–P91), stainless steel (304/316L/310S/321), and duplex steel — all delivered to Rourkela within 2-3 days from our Vadodara warehouse. With full traceability, EN 10204 3.1 mill test certificates, and IBR documentation, we serve as the go-to source for materials that local steel markets simply cannot provide.
          </p>
        </div>
      </section>

      {/* PRODUCT TABLE */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "30px", color: "#1a1a2e" }}>
            Steel Products We Supply to {defined.city}
          </h2>
          <div style={{ "overflow-x": "auto" }}>
            <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.95rem" }}>
              <thead>
                <tr style={{ background: defined.brand, color: "#fff" }}>
                  <th style={{ padding: "12px 15px", "text-align": "left" }}>Product</th>
                  <th style={{ padding: "12px 15px", "text-align": "left" }}>Grades / Specifications</th>
                  <th style={{ padding: "12px 15px", "text-align": "center" }}>Delivery</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff", "border-bottom": "1px solid #eee" }}>
                    <td style={{ padding: "12px 15px", "font-weight": "600" }}>{p.name}</td>
                    <td style={{ padding: "12px 15px", color: "#555" }}>{p.grades}</td>
                    <td style={{ padding: "12px 15px", "text-align": "center", color: "#27ae60", "font-weight": "600" }}>{p.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "50px 20px", background: "#f8f9fa" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "30px", color: "#1a1a2e" }}>
            Why Choose {defined.business} for {defined.city}?
          </h2>
          <ul style={{ "list-style": "none", padding: 0, display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>Exotic Alloys SAIL RSP Needs</strong> — Inconel, Hastelloy, Monel & super duplex for internal plant maintenance
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>IBR-Certified Pipes & Tubes</strong> — Complete documentation with Form III-C for power plant compliance
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>2-3 Day Delivery to Rourkela</strong> — Dedicated transport via NH-49/53 from Vadodara warehouse
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>EN 10204 3.1 Mill Certificates</strong> — Full material traceability for all critical piping
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>All Major Grades In Stock</strong> — P5, P9, P11, P22, P91, 304, 316L, 310S, 321, Duplex 2205
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>Serving Western Odisha Belt</strong> — Jharsuguda, Sambalpur, Sundargarh, Rajgangpur & beyond
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>15+ Years Industry Experience</strong> — Proven track record with steel plants and heavy industries
            </li>
            <li style={{ padding: "15px", background: "#fff", "border-left": `4px solid ${defined.brand}`, "border-radius": "4px" }}>
              ✅ <strong>Technical Support & Guidance</strong> — Material grade selection assistance for corrosive & high-temp applications
            </li>
          </ul>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "30px", color: "#1a1a2e" }}>
            Industries We Serve in {defined.city} & Odisha
          </h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {industries.map((ind) => (
              <div style={{ padding: "25px", background: "#f8f9fa", "border-radius": "8px", "border-top": `3px solid ${defined.brand}` }}>
                <h3 style={{ "font-size": "1.15rem", "margin-bottom": "10px", color: "#1a1a2e" }}>
                  {ind.emoji} {ind.name}
                </h3>
                <p style={{ color: "#555", "line-height": "1.6", "font-size": "0.93rem", margin: 0 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY AREAS */}
      <section style={{ padding: "50px 20px", background: "#f8f9fa" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "30px", color: "#1a1a2e" }}>
            Areas We Supply Steel Near {defined.city}
          </h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {supplyAreas.map((area) => (
              <div style={{ padding: "14px 18px", background: "#fff", "border-radius": "6px", "text-align": "center", "font-size": "0.93rem", color: "#333", "box-shadow": "0 1px 3px rgba(0,0,0,0.08)" }}>
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-SELL PARAGRAPH */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.5rem", "margin-bottom": "15px", color: "#1a1a2e" }}>
            Comprehensive Steel Solutions for Rourkela's Industrial Ecosystem
          </h2>
          <p style={{ "line-height": "1.8", color: "#444", "font-size": "1rem" }}>
            Rourkela's industrial landscape is anchored by SAIL's Rourkela Steel Plant — one of India's first integrated steel plants — alongside a thriving ecosystem of ancillary manufacturers, fabricators, and power generation units. While RSP produces steel, it relies on external suppliers for specialized alloys required in critical maintenance applications: Inconel 625 for coke oven gas recovery systems, Hastelloy C276 for acid regeneration plants, super duplex S32750 for seawater cooling circuits, and Alloy P91 pipes for high-temperature steam lines. Creative Metal Industries supplies these exact materials with complete mill certification, heat traceability, and IBR compliance documentation. We also serve the broader Odisha industrial corridor including Vedanta's aluminium smelter in Jharsuguda, thermal power stations at Brajarajnagar, mining operations across Keonjhar and Joda, and the upcoming Kalinganagar steel hub — ensuring that every critical project has access to world-class specialty steel within 2-3 days.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "50px 20px", background: "#f8f9fa" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "30px", color: "#1a1a2e" }}>
            Frequently Asked Questions — Steel Supply in {defined.city}
          </h2>
          {faqs.map((faq) => (
            <details style={{ "margin-bottom": "12px", background: "#fff", "border-radius": "6px", "border": "1px solid #e0e0e0", overflow: "hidden" }}>
              <summary style={{ padding: "16px 20px", cursor: "pointer", "font-weight": "600", color: "#1a1a2e", "font-size": "1rem" }}>
                {faq.q}
              </summary>
              <p style={{ padding: "0 20px 16px", "line-height": "1.7", color: "#555", margin: 0 }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", background: `linear-gradient(135deg, ${defined.brand} 0%, #d4710f 100%)`, "text-align": "center", color: "#fff" }}>
        <div style={{ "max-width": "700px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.8rem", "margin-bottom": "15px" }}>
            Need Steel Delivered to Rourkela in 2-3 Days?
          </h2>
          <p style={{ "font-size": "1.1rem", "margin-bottom": "25px", opacity: "0.95" }}>
            Get instant quotes for alloy steel pipes, IBR boiler tubes, duplex steel, and exotic alloys. Direct supply to SAIL RSP, Jharsuguda, and all of Western Odisha.
          </p>
          <a
            href={defined.phoneLink}
            style={{ display: "inline-block", padding: "15px 40px", background: "#fff", color: defined.brand, "font-size": "1.15rem", "font-weight": "bold", "border-radius": "6px", "text-decoration": "none", "margin-right": "15px" }}
          >
            📞 Call {defined.phone}
          </a>
          <a
            href={`mailto:${defined.email}`}
            style={{ display: "inline-block", padding: "15px 40px", background: "transparent", color: "#fff", "font-size": "1.15rem", "font-weight": "bold", "border-radius": "6px", "text-decoration": "none", border: "2px solid #fff" }}
          >
            ✉️ Email Us
          </a>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ "max-width": "900px", margin: "0 auto", "text-align": "center" }}>
          <h2 style={{ "font-size": "1.4rem", "margin-bottom": "20px", color: "#1a1a2e" }}>
            Related Steel Supply Pages
          </h2>
          <div style={{ display: "flex", "flex-wrap": "wrap", "justify-content": "center", gap: "12px" }}>
            {relatedLinks.map((link) => (
              <a
                href={link.href}
                style={{ padding: "10px 20px", background: "#f0f0f0", color: "#333", "text-decoration": "none", "border-radius": "20px", "font-size": "0.9rem", transition: "background 0.3s" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a2e", padding: "40px 20px", color: "#ccc" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto", display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          <div>
            <h3 style={{ color: "#fff", "margin-bottom": "12px", "font-size": "1.1rem" }}>{defined.business}</h3>
            <p style={{ "font-size": "0.9rem", "line-height": "1.6" }}>
              {defined.address}<br />
              Phone: <a href={defined.phoneLink} style={{ color: defined.brand, "text-decoration": "none" }}>{defined.phone}</a><br />
              Email: <a href={`mailto:${defined.email}`} style={{ color: defined.brand, "text-decoration": "none" }}>{defined.email}</a>
            </p>
          </div>
          <div>
            <h3 style={{ color: "#fff", "margin-bottom": "12px", "font-size": "1.1rem" }}>Quick Links</h3>
            <p style={{ "font-size": "0.9rem", "line-height": "2" }}>
              <a href="/" style={{ color: "#ccc", "text-decoration": "none" }}>Home</a><br />
              <a href="/about" style={{ color: "#ccc", "text-decoration": "none" }}>About Us</a><br />
              <a href="/blog" style={{ color: "#ccc", "text-decoration": "none" }}>Blog</a><br />
              <a href="/alloy-steel-pipe-supplier-india" style={{ color: "#ccc", "text-decoration": "none" }}>Alloy Steel Pipes</a>
            </p>
          </div>
          <div>
            <h3 style={{ color: "#fff", "margin-bottom": "12px", "font-size": "1.1rem" }}>Service Area</h3>
            <p style={{ "font-size": "0.9rem", "line-height": "1.6" }}>
              Supplying steel to Rourkela, Jharsuguda, Sambalpur, Sundargarh, Rajgangpur, Keonjhar, Joda, Barbil, Kalinganagar, and across Western Odisha — with 2-3 day delivery from Vadodara.
            </p>
          </div>
        </div>
        <div style={{ "max-width": "1100px", margin: "30px auto 0", "border-top": "1px solid #333", "padding-top": "20px", "text-align": "center", "font-size": "0.85rem", color: "#888" }}>
          © {new Date().getFullYear()} {defined.business}. All rights reserved. | Steel Supplier in {defined.city}, {defined.state}
        </div>
      </footer>
    </>
  );
}
