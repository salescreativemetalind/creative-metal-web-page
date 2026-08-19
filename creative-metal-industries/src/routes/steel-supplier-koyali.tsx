import { Title, Meta, Link } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A333 Gr.6, API 5L X42/X52/X65", sizes: "1/2\" to 48\" NB", type: "Seamless & Welded", stock: "✅ Immediate" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\" NB", type: "Seamless", stock: "✅ Immediate" },
  { category: "Stainless Steel Pipes", grades: "SS 304/304L, 316/316L, 321, 347", sizes: "1/2\" to 36\" NB", type: "Seamless & Welded", stock: "✅ Immediate" },
  { category: "NACE/HIC Steel Plates", grades: "SA516 Gr.60/70, SA387 Gr.11/22", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "✅ Immediate" },
  { category: "Duplex Steel Pipes", grades: "UNS S31803, S32205, S32750", sizes: "1/2\" to 16\" NB", type: "Seamless & Welded", stock: "✅ Same Day" },
  { category: "Nickel Alloy Pipes", grades: "Inconel 600/625, Monel 400, Hastelloy C276", sizes: "1/2\" to 12\" NB", type: "Seamless", stock: "✅ Same Day" },
  { category: "Pipe Fittings", grades: "ASTM A234 WPB, A420 WPL6, A403 WP316", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "✅ Immediate" },
  { category: "Flanges", grades: "ASTM A105, A182 F11/F22/F304/F316", sizes: "1/2\" to 48\", 150# to 2500#", type: "WN, SO, Blind, Ring Joint", stock: "✅ Immediate" },
];

const INDUSTRIES = [
  { icon: "🏭", name: "IOCL Gujarat Refinery (13.7 MMTPA)", desc: "Complete piping solutions for India's largest inland refinery with NACE MR0175 compliant materials for sour service applications." },
  { icon: "⚗️", name: "GSFC Vadodara", desc: "Corrosion-resistant alloy steel and stainless steel piping for fertilizer and chemical processing units at Gujarat State Fertilizers." },
  { icon: "🧪", name: "Gujarat Narmada Fertilizer (GNFC)", desc: "High-temperature alloy pipes and fittings for ammonia, urea, and methanol plants with immediate delivery from nearby warehouse." },
  { icon: "⚡", name: "Power Generation Plants", desc: "P91, P22, and P11 alloy steel pipes for high-temperature steam lines in captive power plants and thermal stations." },
  { icon: "🔧", name: "Engineering & Fabrication", desc: "Structural steel, carbon steel plates, and pipe fittings for heavy engineering workshops and fabrication yards in Koyali area." },
  { icon: "🛢️", name: "Oil & Gas Infrastructure", desc: "API 5L line pipes and pipeline fittings for cross-country pipelines, tank farms, and petroleum storage depots near Koyali." },
];

const FAQS = [
  { q: "How quickly can Creative Metal Industries deliver steel to Koyali?", a: "Since our warehouse at 386/B GIDC Makarpura Vadodara is just 15 km from Koyali, we offer SAME-DAY and IMMEDIATE delivery for all stocked items. For urgent refinery shutdowns or emergency requirements, we can dispatch materials within 1-2 hours. This proximity advantage means zero downtime for your projects and no waiting for shipments from distant cities." },
  { q: "Do you supply NACE MR0175 compliant materials to IOCL Gujarat Refinery?", a: "Yes, we maintain dedicated stock of NACE MR0175 and HIC-tested materials specifically for IOCL Gujarat Refinery Koyali. Our inventory includes SA516 Gr.70 HIC plates, NACE-compliant A106 Gr.B pipes, and sour service fittings with complete mill test certificates, NACE compliance reports, and third-party inspection documentation as required by IOCL specifications." },
  { q: "Can you support emergency shutdown requirements at Koyali Refinery?", a: "Absolutely. Being only 15 km away, Creative Metal Industries is the closest major steel supplier to IOCL Koyali Refinery. During planned or emergency shutdowns, we provide round-the-clock material support with immediate dispatch. Our team understands refinery turnaround urgency and maintains buffer stock of critical items like alloy steel pipes, high-pressure fittings, and NACE plates for such situations." },
  { q: "What certifications and test reports do you provide with materials?", a: "All materials supplied to Koyali industries come with original Mill Test Certificates (MTC) as per EN 10204 3.1/3.2, NACE MR0175 compliance certificates where applicable, HIC/SSC test reports, radiography reports for seamless pipes, and positive material identification (PMI) reports. We also facilitate third-party inspection by agencies like TUV, Lloyds, and BV at our warehouse." },
  { q: "How close is Creative Metal Industries warehouse to Koyali industrial area?", a: "Our warehouse at 386/B GIDC Estate Makarpura, Vadodara is approximately 15 km from Koyali industrial area and IOCL Gujarat Refinery. This makes us the nearest authorized stockist for piping materials in the region. The short distance eliminates logistics delays, reduces transportation costs, and enables us to offer unmatched same-day delivery that no other distant supplier can match." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-koyali#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "image": "https://www.creativemetalind.com/logo_cmi.png",
      "url": "https://www.creativemetalind.com",
      "telephone": "+919998280619",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "386/B GIDC Estate, Makarpura",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390010",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.2587,
        "longitude": 73.1924
      },
      "areaServed": ["Koyali", "Vadodara", "Gujarat"],
      "priceRange": "₹₹₹"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Steel Supplier Koyali", "item": "https://www.creativemetalind.com/steel-supplier-koyali" }
      ]
    }
  ]
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
  }))
});

const SUPPLY_AREAS = [
  "IOCL Koyali Refinery", "GSFC Vadodara", "GNFC Bharuch", "Makarpura GIDC",
  "Nandesari GIDC", "Samlaya Industrial", "Padra Industrial", "Savli Industrial",
  "Waghodia Industrial", "Halol GIDC", "Gorwa GIDC", "Chhani Industrial"
];

export default function SteelSupplierKoyali() {
  const [openFaq, setOpenFaq] = createSignal<number | null>(null);

  return (
    <>
      <Title>Steel Supplier Koyali | IOCL Refinery Pipe &amp; Fittings | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Leading steel supplier in Koyali, Gujarat. SAME-DAY delivery to IOCL Gujarat Refinery (just 15 km away)." />
      <Meta name="keywords" content="steel supplier Koyali IOCL, refinery pipe Gujarat, steel supplier Koyali, IOCL Gujarat Refinery supplier, pipe fittings Koyali, NACE steel Koyali, alloy steel pipe Koyali, carbon steel Koyali" />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-koyali" />
      <Meta property="og:title" content="Steel Supplier Koyali | IOCL Refinery Pipe & Fittings | Same-Day Delivery" />
      <Meta property="og:description" content="Closest steel supplier to IOCL Gujarat Refinery Koyali - just 15 km away! SAME-DAY delivery of pipes, fittings, flanges & NACE plates. Creative Metal Industries Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-koyali" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Koyali | IOCL Refinery Pipe & Fittings | Same-Day Delivery" />
      <Meta name="twitter:description" content="Closest steel supplier to IOCL Gujarat Refinery Koyali - just 15 km away! SAME-DAY delivery of pipes, fittings, flanges & NACE plates." />

      <script type="application/ld+json">{SCHEMA}</script>
      <script type="application/ld+json">{FAQ_SCHEMA}</script>

      {/* Navigation */}
      <nav style="background:#1a1a2e;padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;">
        <a href="https://www.creativemetalind.com" style="display:flex;align-items:center;text-decoration:none;">
          <img src="/logo_cmi.png" alt="Creative Metal Industries Logo" width="50" height="50" style="margin-right:0.75rem;" />
          <span style="color:#E8821A;font-size:1.4rem;font-weight:bold;">Creative Metal Industries</span>
        </a>
        <div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
          <a href="/" style="color:#fff;text-decoration:none;">Home</a>
          <a href="/about" style="color:#fff;text-decoration:none;">About</a>
          <a href="/blog" style="color:#fff;text-decoration:none;">Blog</a>
          <a href="tel:+919998280619" style="color:#E8821A;text-decoration:none;font-weight:bold;">📞 +91 99982 80619</a>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div style="background:#f8f9fa;padding:0.75rem 2rem;font-size:0.9rem;">
        <a href="/" style="color:#E8821A;text-decoration:none;">Home</a>
        <span style="margin:0 0.5rem;color:#666;">›</span>
        <span style="color:#333;font-weight:500;">Steel Supplier Koyali</span>
      </div>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:3rem 2rem;text-align:center;">
        <h1 style="color:#E8821A;font-size:2.2rem;margin-bottom:1rem;line-height:1.3;">
          Steel Supplier in Koyali, Gujarat – SAME-DAY Delivery to IOCL Gujarat Refinery
        </h1>
        <p style="color:#fff;font-size:1.1rem;max-width:900px;margin:0 auto;line-height:1.8;">
          Creative Metal Industries is the <strong style="color:#E8821A;">closest authorized steel stockist to IOCL Gujarat Refinery Koyali</strong> – located just <strong style="color:#E8821A;">15 km away</strong> at 386/B GIDC Estate Makarpura, Vadodara. This unmatched proximity enables us to provide <strong style="color:#E8821A;">SAME-DAY and IMMEDIATE delivery</strong> of carbon steel pipes, alloy steel pipes, stainless steel pipes, NACE/HIC tested plates, pipe fittings, and flanges to all industries in Koyali and surrounding areas. With IOCL Gujarat Refinery processing 13.7 MMTPA of crude oil, the demand for quality piping materials is constant – and Creative Metal Industries meets that demand faster than any other supplier in Gujarat. Whether you need emergency shutdown materials at 2 AM or routine project supplies, our 15 km proximity means your materials reach Koyali within minutes, not days. We stock over 5000+ line items ready for immediate dispatch to support refinery operations, petrochemical plants, and fertilizer industries in the Koyali-Vadodara industrial corridor.
        </p>
      </section>

      {/* Product Table */}
      <section style="padding:3rem 2rem;max-width:1200px;margin:0 auto;">
        <h2 style="color:#1a1a2e;font-size:1.8rem;text-align:center;margin-bottom:2rem;">
          Steel Products Available for <span style="color:#E8821A;">Immediate Delivery</span> to Koyali
        </h2>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.95rem;">
            <thead>
              <tr style="background:#1a1a2e;color:#fff;">
                <th style="padding:1rem;text-align:left;">Product Category</th>
                <th style="padding:1rem;text-align:left;">Grades</th>
                <th style="padding:1rem;text-align:left;">Sizes</th>
                <th style="padding:1rem;text-align:left;">Type</th>
                <th style="padding:1rem;text-align:center;">Stock Status</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product, index) => (
                <tr style={`background:${index % 2 === 0 ? '#f8f9fa' : '#fff'};border-bottom:1px solid #eee;`}>
                  <td style="padding:0.85rem 1rem;font-weight:600;">{product.category}</td>
                  <td style="padding:0.85rem 1rem;">{product.grades}</td>
                  <td style="padding:0.85rem 1rem;">{product.sizes}</td>
                  <td style="padding:0.85rem 1rem;">{product.type}</td>
                  <td style="padding:0.85rem 1rem;text-align:center;font-weight:bold;color:#16a34a;">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Koyali Chooses CMI */}
      <section style="padding:3rem 2rem;background:#f0f7ff;">
        <div style="max-width:1000px;margin:0 auto;">
          <h2 style="color:#1a1a2e;font-size:1.8rem;text-align:center;margin-bottom:2rem;">
            Why Koyali Industries Choose <span style="color:#E8821A;">Creative Metal Industries</span>
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem;">
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>⚡ Just 15 KM Away – IMMEDIATE Delivery</strong>
              <p style="margin:0.5rem 0 0;color:#555;">Our Makarpura warehouse is the closest stockist to Koyali – materials reach you in under 30 minutes.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>🏭 IOCL Gujarat Refinery Approved Grades</strong>
              <p style="margin:0.5rem 0 0;color:#555;">Complete range of IOCL-specification materials including NACE MR0175, HIC-tested, and IBR-approved products.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>📋 Complete Documentation & Traceability</strong>
              <p style="margin:0.5rem 0 0;color:#555;">EN 10204 3.1/3.2 MTCs, NACE certificates, PMI reports, and third-party inspection support on all materials.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>🔄 24/7 Emergency Shutdown Support</strong>
              <p style="margin:0.5rem 0 0;color:#555;">Round-the-clock availability during refinery turnarounds – call anytime, we dispatch within the hour.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>📦 5000+ Line Items In Stock</strong>
              <p style="margin:0.5rem 0 0;color:#555;">Massive ready inventory of pipes, plates, fittings, and flanges means no waiting for mill deliveries.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>💰 Zero Transportation Premium</strong>
              <p style="margin:0.5rem 0 0;color:#555;">15 km distance means negligible freight costs compared to suppliers shipping from Mumbai or Ahmedabad.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>🔬 In-House PMI & Testing</strong>
              <p style="margin:0.5rem 0 0;color:#555;">Positive Material Identification, hardness testing, and dimensional verification available at our facility.</p>
            </div>
            <div style="background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid #E8821A;">
              <strong>🤝 20+ Years Serving Koyali Industries</strong>
              <p style="margin:0.5rem 0 0;color:#555;">Trusted by IOCL contractors, GSFC, and leading EPC companies for reliable, quality material supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section style="padding:3rem 2rem;max-width:1200px;margin:0 auto;">
        <h2 style="color:#1a1a2e;font-size:1.8rem;text-align:center;margin-bottom:2rem;">
          Industries We Serve in <span style="color:#E8821A;">Koyali & Surrounding Areas</span>
        </h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem;">
          {INDUSTRIES.map(industry => (
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:1.5rem;box-shadow:0 2px 8px rgba(0,0,0,0.06);transition:transform 0.2s;">
              <div style="font-size:2.5rem;margin-bottom:0.75rem;">{industry.icon}</div>
              <h3 style="color:#1a1a2e;font-size:1.1rem;margin-bottom:0.5rem;">{industry.name}</h3>
              <p style="color:#555;line-height:1.6;font-size:0.95rem;">{industry.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Areas Grid */}
      <section style="padding:3rem 2rem;background:#1a1a2e;">
        <div style="max-width:1200px;margin:0 auto;">
          <h2 style="color:#E8821A;font-size:1.8rem;text-align:center;margin-bottom:0.75rem;">
            Steel Supply Areas from Koyali Warehouse
          </h2>
          <p style="color:#ccc;text-align:center;margin-bottom:2rem;">Same-day delivery to all locations within 50 km radius</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;">
            {SUPPLY_AREAS.map(area => (
              <div style="background:rgba(232,130,26,0.1);border:1px solid rgba(232,130,26,0.3);border-radius:8px;padding:1rem;text-align:center;">
                <span style="color:#fff;font-weight:500;">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell Paragraph */}
      <section style="padding:3rem 2rem;max-width:1000px;margin:0 auto;">
        <h2 style="color:#1a1a2e;font-size:1.5rem;margin-bottom:1rem;">
          Complete Piping Solutions for Koyali's Industrial Growth
        </h2>
        <p style="color:#444;line-height:1.8;font-size:1rem;">
          As Koyali continues to expand with IOCL Gujarat Refinery's capacity enhancement projects and new petrochemical units, the demand for specialized piping materials grows exponentially. Creative Metal Industries supports this growth with a comprehensive range of products – from standard carbon steel pipes for general service to exotic alloys like Inconel 625 and Hastelloy C276 for highly corrosive environments. Our proximity of just 15 km means we can support just-in-time inventory models, reducing your storage costs while ensuring materials are available exactly when needed. Whether you're an EPC contractor executing a major revamp project or a maintenance team needing urgent replacement pipes, our Makarpura warehouse is your closest and most reliable source for quality piping materials in the Koyali region. We also supply to neighboring industrial areas including Nandesari GIDC, Makarpura GIDC, and the entire Vadodara-Bharuch industrial corridor.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section style="padding:3rem 2rem;background:#f8f9fa;">
        <div style="max-width:900px;margin:0 auto;">
          <h2 style="color:#1a1a2e;font-size:1.8rem;text-align:center;margin-bottom:2rem;">
            Frequently Asked Questions – Steel Supply to Koyali
          </h2>
          {FAQS.map((faq, index) => (
            <div style="margin-bottom:1rem;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
              <button
                onClick={() => setOpenFaq(openFaq() === index ? null : index)}
                style="width:100%;padding:1.25rem;background:#fff;border:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;text-align:left;font-size:1rem;font-weight:600;color:#1a1a2e;"
              >
                <span>{faq.q}</span>
                <span style={`transform:rotate(${openFaq() === index ? '180deg' : '0deg'});transition:transform 0.3s;font-size:1.2rem;`}>▼</span>
              </button>
              {openFaq() === index && (
                <div style="padding:0 1.25rem 1.25rem;background:#fff;">
                  <p style="color:#555;line-height:1.7;margin:0;">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style="padding:3rem 2rem;background:linear-gradient(135deg,#E8821A 0%,#d4710f 100%);text-align:center;">
        <h2 style="color:#fff;font-size:2rem;margin-bottom:1rem;">
          Need Steel in Koyali? We're Just 15 KM Away!
        </h2>
        <p style="color:#fff;font-size:1.1rem;margin-bottom:2rem;opacity:0.95;">
          SAME-DAY delivery guaranteed for all stocked items. Call now for instant quotes.
        </p>
        <div style="display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;">
          <a
            href="tel:+919998280619"
            style="background:#fff;color:#E8821A;padding:1rem 2.5rem;border-radius:50px;text-decoration:none;font-weight:bold;font-size:1.1rem;display:inline-flex;align-items:center;gap:0.5rem;"
          >
            📞 Call +91 99982 80619
          </a>
          <a
            href="https://wa.me/919998280619?text=Hi%2C%20I%20need%20steel%20materials%20delivered%20to%20Koyali.%20Please%20share%20availability%20and%20rates."
            style="background:#25d366;color:#fff;padding:1rem 2.5rem;border-radius:50px;text-decoration:none;font-weight:bold;font-size:1.1rem;display:inline-flex;align-items:center;gap:0.5rem;"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section style="padding:3rem 2rem;max-width:1000px;margin:0 auto;">
        <h2 style="color:#1a1a2e;font-size:1.5rem;text-align:center;margin-bottom:1.5rem;">
          Explore More Steel Solutions
        </h2>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;">
          <a href="/steel-supplier-hazira" style="background:#f0f7ff;color:#1a1a2e;padding:0.75rem 1.5rem;border-radius:25px;text-decoration:none;border:1px solid #E8821A;font-weight:500;transition:background 0.2s;">
            Steel Supplier Hazira
          </a>
          <a href="/steel-supplier-vadodara-gidc" style="background:#f0f7ff;color:#1a1a2e;padding:0.75rem 1.5rem;border-radius:25px;text-decoration:none;border:1px solid #E8821A;font-weight:500;transition:background 0.2s;">
            Steel Supplier Vadodara GIDC
          </a>
          <a href="/alloy-steel-pipe-supplier-india" style="background:#f0f7ff;color:#1a1a2e;padding:0.75rem 1.5rem;border-radius:25px;text-decoration:none;border:1px solid #E8821A;font-weight:500;transition:background 0.2s;">
            Alloy Steel Pipe Supplier India
          </a>
          <a href="/nace-hic-steel-plate-supplier-india" style="background:#f0f7ff;color:#1a1a2e;padding:0.75rem 1.5rem;border-radius:25px;text-decoration:none;border:1px solid #E8821A;font-weight:500;transition:background 0.2s;">
            NACE/HIC Steel Plate Supplier India
          </a>
          <a href="/steel-supplier-dahej" style="background:#f0f7ff;color:#1a1a2e;padding:0.75rem 1.5rem;border-radius:25px;text-decoration:none;border:1px solid #E8821A;font-weight:500;transition:background 0.2s;">
            Steel Supplier Dahej
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style="background:#1a1a2e;padding:2.5rem 2rem;color:#ccc;">
        <div style="max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:2rem;">
          <div>
            <h3 style="color:#E8821A;margin-bottom:1rem;">Creative Metal Industries</h3>
            <p style="line-height:1.7;font-size:0.9rem;">
              386/B GIDC Estate Makarpura<br />
              Vadodara, Gujarat 390010<br />
              India
            </p>
            <p style="margin-top:0.75rem;">
              <a href="tel:+919998280619" style="color:#E8821A;text-decoration:none;">+91 99982 80619</a>
            </p>
          </div>
          <div>
            <h3 style="color:#E8821A;margin-bottom:1rem;">Quick Links</h3>
            <ul style="list-style:none;padding:0;line-height:2;">
              <li><a href="/" style="color:#ccc;text-decoration:none;">Home</a></li>
              <li><a href="/about" style="color:#ccc;text-decoration:none;">About Us</a></li>
              <li><a href="/blog" style="color:#ccc;text-decoration:none;">Blog</a></li>
              <li><a href="/steel-supplier-vadodara-gidc" style="color:#ccc;text-decoration:none;">Vadodara GIDC</a></li>
            </ul>
          </div>
          <div>
            <h3 style="color:#E8821A;margin-bottom:1rem;">Serving Koyali Since 2003</h3>
            <p style="line-height:1.7;font-size:0.9rem;">
              The closest steel stockist to IOCL Gujarat Refinery. Same-day delivery of pipes, plates, fittings & flanges. Trusted by major EPC contractors and refinery maintenance teams.
            </p>
          </div>
        </div>
        <div style="border-top:1px solid #333;margin-top:2rem;padding-top:1.5rem;text-align:center;font-size:0.85rem;">
          <p>© {new Date().getFullYear()} Creative Metal Industries. All Rights Reserved. | Steel Supplier Koyali, Gujarat</p>
        </div>
      </footer>
    </>
  );
}
