/**
 * /hastelloy-pipe-supplier-india
 * Target: "Hastelloy pipe supplier India", "Hastelloy C276 pipe supplier",
 * "Hastelloy C22 pipe India", "nickel alloy pipe supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "Alloy C-276",
    uns: "UNS N10276",
    seamless: "ASTM B622 seamless pipe or tube, where applicable",
    welded: "ASTM B619 welded pipe, where applicable",
    context: "Selected reducing, oxidizing and chloride-bearing process environments",
    enquiry: "Specify pipe or tube, construction, dimensions, condition and required standard revision"
  },
  {
    grade: "Alloy C-22",
    uns: "UNS N06022",
    seamless: "ASTM B622 seamless pipe or tube, where applicable",
    welded: "ASTM B619 welded pipe, where applicable",
    context: "Selected mixed oxidizing and reducing chemical environments",
    enquiry: "Use the dedicated C-22 page for grade-specific procurement guidance"
  },
  {
    grade: "Alloy B-2",
    uns: "UNS N10665",
    seamless: "Confirm the applicable product specification and current edition",
    welded: "Confirm product form and welding specification per enquiry",
    context: "Selected reducing-acid environments after corrosion review",
    enquiry: "Provide media, concentration, temperature, dimensions and documentation requirements"
  }
];

const FAQS = [
  {
    q: "How should the HASTELLOY trade name be used in a pipe enquiry?",
    a: "HASTELLOY is a Haynes International trade name. Alloy C-276 (UNS N10276), Alloy C-22 (UNS N06022) and other UNS grades may also be produced by other manufacturers. State any required manufacturer or trade-name restriction in the enquiry and verify identity from the offered material documentation."
  },
  {
    q: "What is the difference between Alloy C-276 and Alloy C-22?",
    a: "Alloy C-276 and Alloy C-22 are nickel-chromium-molybdenum alloys with different compositional balances. C-22 has higher chromium, while C-276 has higher nominal molybdenum. Their relative corrosion performance depends on the exact medium, concentration, temperature, contaminants, fabrication condition and design requirements; selection should use project-specific corrosion data."
  },
  {
    q: "Which standards apply to C-276 and C-22 piping products?",
    a: "ASTM B622 may apply to covered seamless pipe and tube, ASTM B619 to covered welded pipe, ASTM B366 to applicable wrought fittings and ASTM B564 to applicable forgings. Confirm the UNS grade, product form, current standard edition and supplementary requirements for the purchase."
  },
  {
    q: "What information is needed for a nickel-alloy pipe quotation?",
    a: "Provide the UNS grade, pipe or tube designation, seamless or welded construction, OD or nominal size, wall thickness or schedule, length, quantity, material condition, ASTM or ASME specification and revision, testing, inspection certificate, source restrictions and delivery destination. Availability is confirmed against the specific enquiry."
  },
  {
    q: "Where are C-276 and C-22 commonly considered?",
    a: "These alloys are considered for selected chemical-processing, pollution-control, pharmaceutical and chloride-bearing systems. Suitability must be established from process chemistry, concentration, temperature, pressure, fabrication condition, design code and corrosion data rather than from the alloy name alone."
  },
  {
    q: "How should welding requirements be specified?",
    a: "Matching nickel-alloy consumables are available for C-276 and C-22, but welding must follow the applicable construction code, qualified WPS and PQR, base-metal specification and consumable-manufacturer guidance. State welding-documentation, inspection and heat-treatment requirements in the enquiry."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Hastelloy Pipe Supplier India", "item": "https://www.creativemetalind.com/hastelloy-pipe-supplier-india" }
      ]
    }
  ]
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

export default function HastelloyPipeSupplierIndia() {
  return (
    <>
      <Title>Hastelloy Pipe Supplier India | Alloy C-276 &amp; C-22 Enquiries</Title>
      <Meta name="description" content="Enquire for Alloy C-276, C-22 and other nickel-alloy pipe requirements in India. Share UNS grade, product form, ASTM specification, dimensions, quantity and documentation." />
      <Meta property="og:title" content="Hastelloy Pipe Supplier India | Alloy C-276 & C-22 Enquiries" />
      <Meta property="og:description" content="Procurement guidance for Alloy C-276 and C-22 pipe or tube enquiries, including product-form standards, dimensions and buyer-specified documentation." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.creativemetalind.com/hastelloy-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/hastelloy-pipe-supplier-india" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Navigation */}
      <nav style="background:#111827;padding:12px 0;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.3)">
        <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 20px">
          <a href="/" style="display:flex;align-items:center;text-decoration:none">
            <img width="87" height="44" src="/logo_cmi.png" alt="Creative Metal Industries Logo" style="height:44px;width:auto" loading="eager" />
          </a>
          <div style="display:flex;gap:24px;align-items:center">
            <a href="/" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">Home</a>
            <a href="/about" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">About</a>
            <a href="/products" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">Products</a>
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:8px 18px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">+91 99982 80619</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section style="background:#f9fafb;padding:14px 0;border-bottom:1px solid #e5e7eb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <nav style="font-size:13px;color:#6b7280">
            <a href="/" style="color:#E8821A;text-decoration:none">Home</a>
            <span style="margin:0 8px">›</span>
            <span style="color:#374151;font-weight:600">Hastelloy Pipe Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Hastelloy Pipe Supplier in India — Alloy C-276 and C-22 Enquiries
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
Alloy C-276 (UNS N10276) and Alloy C-22 (UNS N06022) are nickel-chromium-molybdenum alloys considered for selected corrosive process environments. ASTM B622 may apply to covered seamless pipe or tube and ASTM B619 to covered welded pipe; these standards do not establish current availability. HASTELLOY is a Haynes International trade name, so any manufacturer restriction must be stated and confirmed from the offered documentation.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Submit the UNS grade, product form, dimensions, specification, quantity, testing and documentation requirements for quotation review.
          </p>
          <a href="tel:+919998280619" style="display:inline-block;background:#E8821A;color:#fff;padding:14px 36px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:700;box-shadow:0 4px 14px rgba(232,130,26,0.4)">
            Get Quote: +91 99982 80619
          </a>
        </div>
      </section>

      {/* Grade Table */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 12px">
            Hastelloy Pipe Grades & Specifications
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            Grade identity, product form and governing specification must be matched to each procurement requirement
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:900px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">UNS Grade</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Seamless Form</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Welded Form</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Application Context</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Enquiry Requirement</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                    <td style="padding:12px;font-weight:700;color:#111827">{g.grade}</td>
                    <td style="padding:12px;font-size:13px">{g.uns}</td>
                    <td style="padding:12px;font-size:13px">{g.seamless}</td>
                    <td style="padding:12px;font-size:13px">{g.welded}</td>
                    <td style="padding:12px;font-size:13px">{g.context}</td>
                    <td style="padding:12px;font-size:12px">{g.enquiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hastelloy C276 */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 20px">
            Alloy C-276 Pipe and Tube Specifications
          </h2>
          <p style="color:#4b5563;font-size:16px;line-height:1.8;margin:0">
            <strong>Alloy C-276</strong>, UNS N10276, is a nickel-chromium-molybdenum-tungsten alloy used in selected reducing, oxidizing and chloride-bearing environments. ASTM B622 may apply to covered seamless pipe and tube, while ASTM B619 may apply to covered welded pipe. Corrosion performance depends on process chemistry, concentration, temperature, contaminants, fabrication condition and design requirements. Buyers should specify the product form, dimensions, material condition, standard revision, quantity and required documentation; availability is confirmed for the individual enquiry.
          </p>
        </div>
      </section>

      {/* Technical Specifications */}
      <section style="padding:60px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Technical Specifications
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
            {[
              { label: "Standard (Seamless)", value: "ASTM B622 / ASME SB622" },
              { label: "Standard (Welded)", value: "ASTM B619 / ASME SB619" },
              { label: "Fittings Standard", value: "ASTM B366 (Buttweld Fittings)" },
              { label: "Flanges Standard", value: "ASTM B564 (Forgings)" },
              { label: "Wrought Fittings", value: "ASTM B366 for applicable UNS grades and fitting forms" },
              { label: "Forgings", value: "ASTM B564 for applicable UNS grades and forged products" },
              { label: "Dimensions", value: "Specify pipe or tube, OD or NB, wall thickness or schedule, length and tolerances" },
              { label: "Material Condition", value: "Specify the condition required by the product standard and project" },
              { label: "Service Data", value: "Provide medium, concentration, temperature, pressure and contaminants" },
              { label: "Testing", value: "State required hydrostatic, NDE, PMI, corrosion or third-party inspection requirements" },
              { label: "Documentation", value: "State inspection certificate, traceability, source and project-document requirements" },
              { label: "Quotation Status", value: "Availability, source and delivery are confirmed against the specific enquiry" },
            ].map(spec => (
              <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:18px">
                <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">{spec.label}</span>
                <p style="font-size:15px;font-weight:700;color:#111827;margin:6px 0 0">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Applications of Hastelloy Pipe in India
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🧪", title: "Chemical Processing", desc: "C-276 and C-22 are considered for selected acid, chloride and mixed-chemistry systems after corrosion review." },
              { icon: "💊", title: "Pharmaceutical Equipment", desc: "Nickel alloys may be considered for equipment handling aggressive intermediates where process and cleanliness requirements are defined." },
              { icon: "🛢️", title: "Oil, Gas & Refining", desc: "Selection for sour or corrosive service requires the applicable design code, environment and any NACE/ISO 15156 requirements." },
              { icon: "⚡", title: "Pollution Control", desc: "C-series alloys are used in selected scrubber and flue-gas environments based on temperature and chloride conditions." },
              { icon: "🌊", title: "Pulp & Paper", desc: "Selected nickel alloys are used in bleaching and chloride-bearing systems after application-specific comparison." },
              { icon: "🏭", title: "Fertilizer & Acid Systems", desc: "Material selection must account for acid concentration, temperature, impurities, velocity and fabrication condition." },
              { icon: "🔬", title: "Waste Treatment", desc: "Variable process streams require a defined corrosion assessment rather than selection by alloy family alone." },
            ].map(app => (
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:24px">
                <span style="font-size:28px">{app.icon}</span>
                <h3 style="font-size:16px;font-weight:700;color:#111827;margin:8px 0 6px">{app.title}</h3>
                <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CMI */}
      <section style="padding:60px 0;background:#f9fafb">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Why Buy Hastelloy Pipes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Identify the Alloy", desc: "State UNS N10276, UNS N06022 or another required grade and identify any manufacturer or trade-name restriction." },
              { title: "Define Product Form", desc: "Specify pipe or tube, seamless or welded construction, and any applicable wrought-fitting or forged-product requirement." },
              { title: "Provide Dimensions", desc: "Include OD or NB, wall thickness or schedule, length, tolerances and quantity." },
              { title: "State the Specification", desc: "Provide the ASTM or ASME product specification, edition, material condition and supplementary requirements." },
              { title: "Define Inspection", desc: "List required tests, inspection certificate, PMI, corrosion testing, traceability and third-party inspection requirements." },
              { title: "Describe Service Conditions", desc: "Provide process medium, concentration, temperature, pressure, contaminants and any NACE/ISO 15156 requirement." },
            ].map(item => (
              <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:20px">
                <h3 style="font-size:16px;font-weight:700;color:#E8821A;margin:0 0 8px">{item.title}</h3>
                <p style="font-size:14px;color:#4b5563;line-height:1.7;margin:0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Frequently Asked Questions — Hastelloy Pipe
          </h2>
          <div style="display:flex;flex-direction:column;gap:12px">
            {FAQS.map(faq => (
              <details style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 22px">
                <summary style="font-weight:700;font-size:15px;color:#111827;cursor:pointer;line-height:1.4">{faq.q}</summary>
                <p style="font-size:14px;color:#4b5563;line-height:1.7;margin:14px 0 0">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style="padding:60px 0;background:linear-gradient(135deg,#111827,#1f2937)">
        <div style="max-width:700px;margin:0 auto;padding:0 20px;text-align:center">
          <h2 style="color:#fff;font-size:28px;font-weight:800;margin:0 0 12px">
            Request a C-276 or C-22 Pipe Quotation Review
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Send the UNS grade, product form, dimensions, specification, quantity, service conditions and required documentation.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Hastelloy+pipe+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
            <a href="mailto:creativemetalind@gmail.com" style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px">✉ Email Enquiry</a>
            <a href="/#contact" style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px">Request Formal Quote →</a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style="padding:50px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h3 style="font-size:20px;font-weight:700;color:#111827;margin:0 0 20px;text-align:center">Related Products</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
            {[
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/monel-400-pipe-supplier-india", label: "Monel 400 Pipe" },
              { href: "/hastelloy-c22-pipe-supplier-india", label: "Hastelloy C22 Pipe" },

              { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex 2205/2507" },
              { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center;transition:box-shadow 0.2s">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/hastelloy-pipe-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Hastelloy Pipe Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
