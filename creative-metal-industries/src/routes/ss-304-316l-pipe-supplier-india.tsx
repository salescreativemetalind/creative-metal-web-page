/**
 * /ss-304-316l-pipe-supplier-india
 *
 * PRIMARY OWNER of the SS 304 / 316L grade cluster (commercial + grade-property intent).
 * Validated target cluster (SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md §5, Priority A1):
 *   commercial  — "ss 304 pipe supplier", "316l pipe supplier", "astm a312"
 *   properties  — "ss304 properties", "304 stainless steel composition", "ss304 density",
 *                 "316l properties", "304 ss temperature rating", "ss 304 yield strength"
 *   comparison  — "304 vs 316l", "304 vs 304l difference", "316 vs 316l"
 *
 * OWNERSHIP BOUNDARIES (avoid overlap with sibling pages):
 *   - "304 vs 321" / SS 321 grade intent  -> /ss-321-pipe-supplier-india
 *   - generic SS seamless / A312 range    -> /ss-seamless-pipe-supplier-india
 *   - SS sheet & plate forms + finishes   -> /ss-sheet-supplier-vadodara
 *   This page owns 304 / 304L / 316 / 316L in PIPE form.
 *
 * Grade identifiers below support procurement routing without presenting unsourced
 * property figures or company-specific capability, certification, stock or price claims.
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const COMPARE: string[][] = [
  ["UNS designation", "S30400", "S30403", "S31600", "S31603"],
  ["Pipe grade designation", "TP304", "TP304L", "TP316", "TP316L"],
  ["Low-carbon suffix", "No", "Yes — L designation", "No", "Yes — L designation"],
  ["Procurement instruction", "Specify TP304 exactly", "Do not substitute TP304", "Specify TP316 exactly", "Do not substitute TP316"],
];

const SPECS: string[][] = [
  ["Exact material", "State TP304, TP304L, TP316 or TP316L and the corresponding UNS designation where required"],
  ["Product form", "Specify seamless or welded pipe; do not use tube terminology for a pipe requirement"],
  ["Product standard", "State ASTM A312 / ASME SA-312 edition or the complete governing project specification"],
  ["Dimensions", "Provide NPS/NB or outside diameter, schedule or wall thickness, tolerances and length"],
  ["Ends and finish", "State end preparation and surface-finish requirements from the purchase specification"],
  ["Fabrication condition", "Describe welding or fabrication requirements relevant to the specified grade"],
  ["Service data", "Provide process medium and design temperature for review by the buyer's responsible engineer"],
  ["Testing / documents", "List certificate, test and inspection clauses exactly as required by the order"],
  ["Substitutions", "State that no alternate grade or product form is permitted without buyer approval when applicable"],
];

const FAQS = [
  {
    q: "What is the difference between SS 304 and SS 316L pipe?",
    a: "SS 316L contains molybdenum, which SS 304 does not, and is often considered where improved resistance to pitting in chloride-containing environments is needed. Actual performance depends on concentration, temperature, design and other service conditions. SS 304 is commonly specified for general-purpose applications; SS 316L may be selected for more demanding corrosion conditions. The L suffix indicates lower carbon compared with the corresponding standard grade. Confirm material selection against the project specification and operating environment.",
  },
  {
    q: "What is the difference between 304 and 304L stainless steel?",
    a: "304 and 304L are separate grade designations; the L suffix identifies the low-carbon variant. The purchase specification, fabrication route and engineering requirements should determine which designation is ordered. Do not substitute 304 for 304L, or the reverse, without buyer approval.",
  },
  {
    q: "How should SS 304 or SS 316L be identified in an RFQ?",
    a: "State the exact TP and UNS designation required by the governing pipe specification, together with seamless or welded form, dimensions and project clauses. Review order-specific material documentation rather than relying on general web-page property values.",
  },
  {
    q: "What pipe sizes and schedules can I enquire about for SS 304/316L?",
    a: "State the required NPS/NB or outside diameter, schedule or wall thickness, applicable tolerances, length and end finish. The quotation must confirm whether the exact dimensional requirement can be offered; this page does not publish a guaranteed size or schedule range.",
  },
  {
    q: "Can I request IBR, MTC or NACE documentation for SS 304/316L pipe?",
    a: "Include required documentation in your enquiry, such as MTC, IBR or NACE requirements. The team must confirm which documents apply to the requested grade, product and order; this page does not guarantee that every product is supplied with each document.",
  },
  {
    q: "How can I request a quotation for SS 304 or SS 316L pipe?",
    a: "Share the grade, seamless or welded type, applicable standard, nominal size, schedule or wall thickness, length, quantity, required documents and delivery location. Availability and order terms can then be confirmed for your requirement.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
        { "@type": "ListItem", position: 2, name: "Stainless Steel", item: "https://www.creativemetalind.com/stainless-steel-supplier-vadodara" },
        { "@type": "ListItem", position: 3, name: "SS 304 & 316L Pipe Supplier India", item: "https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india",
      url: "https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india",
      name: "SS 304 & 316L Pipe Supplier India — Creative Metal Industries",
      description: "Procurement guidance for SS 304, 304L, 316 and 316L pipe enquiries, including grade identity, ASTM A312 requirements, dimensions and documentation.",
      isPartOf: { "@id": "https://www.creativemetalind.com/#website" },
      about: { "@id": "https://www.creativemetalind.com/#organization" },
      primaryImageOfPage: "https://www.creativemetalind.com/img/ss_seamless_pipes.jpeg",
    },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const H2 = {
  "font-size": "1.4rem",
  "font-weight": "700",
  color: "#111827",
  margin: "2.5rem 0 1rem",
  "border-bottom": "2px solid #E8821A",
  "padding-bottom": "0.5rem",
} as const;

export default function SS304316LPage() {
  return (
    <>
      <Title>SS 304 &amp; SS 316L Pipe Supplier in India | ASTM A312</Title>
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Enquire about SS 304 and SS 316L seamless or welded pipe. Compare 304, 304L, 316 and 316L grade properties and ASTM A312 details; send your specification for an order-specific quotation." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india" />
      <Meta property="og:title" content="SS 304 &amp; SS 316L Pipe Supplier in India | ASTM A312" />
      <Meta property="og:description" content="Compare SS 304, 304L, 316 and 316L pipe grades, properties and ASTM A312 details. Enquire with your specification for order-specific confirmation." />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 304 &amp; SS 316L Pipe Supplier in India | ASTM A312" />
      <Meta name="twitter:description" content="Compare SS 304, 304L, 316 and 316L pipe grades, properties and ASTM A312 details. Enquire with your specification for order-specific confirmation." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 304 and 316L pipe supplier, Vadodara" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="tel:+919998280619" class="btn btn-outline" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>📞 Call</a>
        <a href="/#contact" class="btn btn-primary" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a> <span style={{margin:"0 0.5rem"}}>›</span>
        <a href="/stainless-steel-supplier-vadodara" style={{color:"#E8821A","text-decoration":"none"}}>Stainless Steel</a> <span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS 304 &amp; 316L Pipe</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <h1 style={{"font-size":"clamp(1.8rem,4vw,2.8rem)","font-weight":"800",color:"#111827","margin-bottom":"1.5rem"}}>SS 304 &amp; SS 316L Pipe Supplier in India</h1>

        <div style={{display:"flex",gap:"1.5rem","align-items":"flex-start","flex-wrap":"wrap","margin-bottom":"1.5rem"}}>
          <img
            src="/img/ss_seamless_pipes.jpeg"
            alt="Stainless steel seamless pipes in SS 304 and 316L supplied by Creative Metal Industries"
            width="274"
            height="184"
            loading="lazy"
            decoding="async"
            style={{"border-radius":"10px",border:"1px solid #e5e7eb","flex-shrink":"0"}}
          />
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8",margin:0,"min-width":"280px",flex:"1"}}>
            This grade-specific page covers enquiries and procurement distinctions for <strong>SS 304, 304L, 316 and 316L pipe</strong>. It compares the standard- and low-carbon designations and references ASTM A312 / ASME SA-312 for pipe. ASTM A213 is a tube specification, not the pipe standard. For a general seamless-or-welded pipe enquiry, use the <a href="/ss-pipe-supplier" style={{color:"#E8821A","font-weight":"600"}}>national SS pipe page</a>; for seamless-only requirements, use the <a href="/ss-seamless-pipe-supplier-india" style={{color:"#E8821A","font-weight":"600"}}>SS seamless pipe page</a>.
          </p>
        </div>

        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          SS 304 (UNS S30400) and SS 316L (UNS S31603) differ in composition and intended service. 316L contains molybdenum, which can improve pitting resistance in some chloride environments; its low-carbon limit is relevant to certain welded applications. Neither grade is universally suitable for every process. Compare the project specification, operating conditions and fabrication requirements before selecting material, and confirm documentation or inspection requirements for the specific order.
        </p>

        <h2 style={H2}>SS 304, 304L, 316 and 316L — Grade Comparison</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.75","margin-bottom":"1rem"}}>
          Use the exact designation in the purchase specification. This table identifies the four grades without replacing the governing standard, engineering review or order-specific material documentation.
        </p>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"640px"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                <th style={{padding:"0.7rem 1rem","text-align":"left"}}>Property</th>
                <th style={{padding:"0.7rem 1rem"}}>SS 304</th>
                <th style={{padding:"0.7rem 1rem"}}>SS 304L</th>
                <th style={{padding:"0.7rem 1rem"}}>SS 316</th>
                <th style={{padding:"0.7rem 1rem"}}>SS 316L</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((r, i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}>
                  <td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[3]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{"font-size":"1.05rem","font-weight":"700",color:"#111827",margin:"1.5rem 0 0.5rem"}}>Keep standard and low-carbon designations distinct</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          The <strong>L</strong> suffix identifies a separate low-carbon grade designation. State TP304, TP304L, TP316 or TP316L exactly as required by the purchase specification. Fabrication route, service conditions and governing design documents should determine grade selection; no alternate grade should be accepted without the buyer's technical approval.
        </p>

        <h2 style={H2}>SS 304/316L Pipe RFQ Requirements</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Parameter</th><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Details</th></tr></thead>
            <tbody>
              {SPECS.map((r, i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem"}}>{r[1]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>Applications</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"🧪",title:"Chemical Processing",desc:"Confirm grade suitability against the actual chemicals, concentration, temperature and design basis."},
            {icon:"💊",title:"Pharmaceutical & Biotech",desc:"State the required grade, pipe or tube standard, finish, cleanliness and documentation scope."},
            {icon:"🍶",title:"Food & Dairy",desc:"Hygienic requirements should define product form, grade, finish and applicable standard."},
            {icon:"🛢️",title:"Oil & Gas",desc:"The project specification determines grade, pipe form, testing and inspection requirements."},
            {icon:"⚡",title:"Power Plants",desc:"Use the governing code and service conditions to select material and product specification."},
            {icon:"🌊",title:"Marine & Offshore",desc:"Confirm material selection for the actual chloride exposure rather than assuming universal suitability."},
          ].map(a => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{a.icon}</span>
              <h3 style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.25rem"}}>{a.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{a.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={H2}>Confirming Product and Documentation Requirements</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          If a purchase requires a particular mill, heat traceability, inspection scope or certificate, state it in the enquiry. The applicable source, availability and documents should be confirmed for the specific product and order.
        </p>

        <h2 style={H2}>Related Stainless Steel Pages</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/ss-pipe-supplier",label:"General SS pipe supply — seamless and welded"},
            {href:"/stainless-steel-supplier-vadodara",label:"Stainless steel supplier — all grades"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS seamless pipe to ASTM A312"},
            {href:"/ss-sheet-supplier-vadodara",label:"SS sheet & plate, all finishes"},
            {href:"/ss-321-pipe-supplier-india",label:"SS 321 pipe — 304 vs 321 compared"},
            {href:"/ss-310-pipe-supplier-india",label:"SS 310/310S for high temperature"},
            {href:"/duplex-2205-plate-supplier-india",label:"Duplex 2205 — higher chloride resistance"},
          ].map(l => (
            <a href={l.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <h2 style={H2}>Frequently Asked Questions — SS 304 &amp; 316L Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 304 or 316L Pipe?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Send the exact grade, pipe form, ASTM/ASME specification, dimensions, quantity, documentation requirements and destination for order-specific review.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C%20I%20need%20an%20SS%20304%20or%20316L%20pipe%20quotation" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <RelatedPages currentPath="/ss-304-316l-pipe-supplier-india" />
      </main>
      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}><p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 304 &amp; 316L Pipe Supplier India | Vadodara, Gujarat</p></footer>
    </>
  );
}
