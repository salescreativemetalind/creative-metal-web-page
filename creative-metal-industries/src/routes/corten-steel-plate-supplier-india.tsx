/**
 * /corten-steel-plate-supplier-india
 *
 * Restored page. Validated as a page gap with GSC evidence
 * (SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md §5, Priority B2):
 *   9 queries / 24 impressions with no live owner; the page itself previously held
 *   29 impressions at position 71.4 before it was removed on 2026-09-09, after which
 *   it 308-redirected to /ms-plate-supplier-india — a page that does not cover Corten.
 *
 * BUSINESS RELEVANCE VERIFIED before creation, from the company's own live content:
 *   - src/routes/index.tsx: "Corten A/B, S355J2+N, Hiten, Welten in all sizes"
 *   - src/routes/index.tsx: "Wear Resistant & Special Plate" lists "Corten A/B",
 *     forms "Plates · All Sizes · All Shapes", mills "SSAB, TATA, SAIL, AMNS"
 *   - the previous version of this page (recovered from git, commit e28933c^) listed
 *     ASTM A588 / A242 / SPA-H, grades Corten A (A242), Corten B (A588 Gr.A),
 *     SPA-H/SPA-C, S355J2WP, and 3mm-50mm thickness
 *
 * Grade/standard designations below are the published definitions of those standards.
 * NOT carried over from the previous version because they could not be verified:
 *   export country count, "guaranteed 4-hour response", and any price figure.
 * Size availability is stated as confirmed on enquiry rather than asserted as stock.
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

// Grade designations as defined by the respective standards.
const GRADES: string[][] = [
  ["Corten A", "ASTM A242 / S355J0WP", "Phosphorus-bearing weathering steel", "Architecture, cladding, sculpture, facades"],
  ["Corten B", "ASTM A588 Gr.A / S355J2W", "Higher-strength structural weathering steel", "Bridges, structural members, railway wagons"],
  ["SPA-H / SPA-C", "JIS G 3125", "Japanese weathering steel designation", "Containers, wagons, general weathering use"],
  ["S355J2WP", "EN 10025-5", "European weathering structural steel", "Structural and architectural applications"],
];

const SPECS: string[][] = [
  ["Standards", "ASTM A242, ASTM A588, JIS G 3125 (SPA-H), EN 10025-5"],
  ["Grades", "Corten A, Corten B, SPA-H / SPA-C, S355J2WP"],
  ["Product Form", "Hot-rolled plate and sheet"],
  ["Mill Sources", "SSAB, TATA, SAIL, AMNS"],
  ["Processing", "Cut-to-size, flame and plasma cutting, shearing"],
  ["Certification", "Mill Test Certificate to EN 10204 3.1 / 3.2"],
  ["Inspection", "Third-party inspection (DNV, TUV, SGS) accepted on request"],
  ["Sizes", "Confirmed against current stock and mill availability on enquiry"],
];

const FAQS = [
  {
    q: "What is Corten steel and how does weathering steel work?",
    a: "Corten is the common trade name for weathering steel — a low-alloy structural steel containing deliberate additions of copper, chromium, nickel and, in some grades, phosphorus. On outdoor exposure it develops a dense, tightly adherent oxide layer, usually described as a patina. Unlike ordinary rust, this layer is stable and substantially slows further atmospheric corrosion, so the steel can be used unpainted in many exposed applications. The patina takes months of wet and dry cycling to stabilise and gives the material its characteristic deep russet colour.",
  },
  {
    q: "What is the difference between Corten A and Corten B?",
    a: "Corten A corresponds broadly to ASTM A242 and is a phosphorus-bearing weathering steel, favoured where appearance matters — architectural cladding, facades and sculpture. Corten B corresponds broadly to ASTM A588 Grade A, is a higher-strength structural weathering steel, and is the grade normally specified for load-bearing work such as bridges, structural members and railway wagons. Where a drawing calls for a specific standard rather than the trade name, we supply against that standard and the Mill Test Certificate states it.",
  },
  {
    q: "Which Corten steel grades and standards does Creative Metal Industries supply?",
    a: "We supply Corten A and Corten B weathering steel plate, together with the SPA-H / SPA-C designation to JIS G 3125 and S355J2WP to EN 10025-5, sourced from mills including SSAB, TATA, SAIL and AMNS. Every consignment is supplied with a Mill Test Certificate to EN 10204 3.1 or 3.2. Contact us with your grade, thickness and plate size and we will confirm current availability.",
  },
  {
    q: "Does Corten steel plate need to be painted?",
    a: "In many exposed applications it does not — that is the reason the material is chosen, since the stable patina takes the place of a coating and removes recurring repainting from the maintenance cycle. It is not suitable everywhere, though. Corten performs poorly where it stays permanently wet, where it is buried or submerged, or in high-chloride environments such as marine splash zones, because the patina cannot dry and stabilise. Run-off staining of adjacent surfaces during the first years of weathering also needs to be allowed for in detailing.",
  },
  {
    q: "What is Corten steel plate used for?",
    a: "Typical uses fall into two groups. Architectural and decorative work uses the patina for its appearance: facade cladding, privacy screens, planters, signage and sculpture. Structural and industrial work uses it for durability without painting: bridge girders and components, railway wagons and containers, chimney and stack casings, and equipment exposed to the weather in mining, cement and bulk-handling plants.",
  },
  {
    q: "Can Corten steel plate be cut and welded?",
    a: "Yes. Corten is cut by the usual methods for structural plate — flame, plasma and shearing — and we can supply cut-to-size. It is weldable using conventional processes for low-alloy structural steel. For unpainted applications the normal practice is to select a consumable that weathers at a similar rate to the parent plate so the weld does not remain visually distinct once the patina develops. Welding procedures should follow the requirements of the governing standard for the grade being used.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
        { "@type": "ListItem", position: 2, name: "Steel Plate", item: "https://www.creativemetalind.com/ms-plate-supplier-india" },
        { "@type": "ListItem", position: 3, name: "Corten Steel Plate Supplier India", item: "https://www.creativemetalind.com/corten-steel-plate-supplier-india" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativemetalind.com/corten-steel-plate-supplier-india",
      url: "https://www.creativemetalind.com/corten-steel-plate-supplier-india",
      name: "Corten Steel Plate Supplier India — Creative Metal Industries",
      description: "Corten A and Corten B weathering steel plate to ASTM A242 and ASTM A588, with SPA-H and S355J2WP designations.",
      isPartOf: { "@id": "https://www.creativemetalind.com/#website" },
      about: { "@id": "https://www.creativemetalind.com/#organization" },
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
};

export default function CortenSteelPlateSupplierIndia() {
  return (
    <>
      <Title>Corten Steel Plate Supplier India | Corten A &amp; B | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Corten steel plate supplier in India — Corten A (ASTM A242) and Corten B (ASTM A588) weathering steel plate for architecture, bridges and structures. MTC supplied." />
      <Link rel="canonical" href="https://www.creativemetalind.com/corten-steel-plate-supplier-india" />
      <Meta property="og:title" content="Corten Steel Plate Supplier India | Corten A &amp; B Weathering Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Corten A and Corten B weathering steel plate — ASTM A242, ASTM A588, SPA-H, S355J2WP. Cut-to-size, Mill Test Certificate. Vadodara, pan-India supply." />
      <Meta property="og:url" content="https://www.creativemetalind.com/corten-steel-plate-supplier-india" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Corten Steel Plate Supplier India | Corten A &amp; B | CMI" />
      <Meta name="twitter:description" content="Corten A and Corten B weathering steel plate to ASTM A242 and A588. Cut-to-size, MTC EN 10204. Vadodara, pan-India supply." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Corten weathering steel plate supplier, Vadodara" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="tel:+919998280619" class="btn btn-outline" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>📞 Call</a>
        <a href="/#contact" class="btn btn-primary" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a> <span style={{margin:"0 0.5rem"}}>›</span>
        <a href="/ms-plate-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Steel Plate</a> <span style={{margin:"0 0.5rem"}}>›</span>
        <span>Corten Steel Plate</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1.25rem","line-height":"1.2"}}>
          Corten Steel Plate Supplier in India
        </h1>
        <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","margin-bottom":"1.25rem"}}>
          Creative Metal Industries supplies <strong>Corten steel plate</strong> — weathering steel — in <strong>Corten A</strong> and <strong>Corten B</strong>, along with the SPA-H and S355J2WP designations. The material is specified where a structure has to stand up to the weather without being painted: it develops a stable, tightly adherent patina that slows further atmospheric corrosion instead of flaking away like ordinary rust.
        </p>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          We source from mills including <strong>SSAB, TATA, SAIL and AMNS</strong>, supply plate cut-to-size, and issue a Mill Test Certificate to EN 10204 3.1 or 3.2 with every consignment. Operating since <strong>2012</strong> from GIDC Makarpura, Vadodara, we supply across India and accept third-party inspection under DNV, TUV or SGS where a project requires it. Tell us the grade, thickness and plate size you need and we will confirm what is currently available.
        </p>

        <h2 style={H2}>Corten Grades &amp; Equivalent Standards</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.86rem","min-width":"680px"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                <th style={{padding:"0.7rem 0.9rem","text-align":"left"}}>Grade</th>
                <th style={{padding:"0.7rem 0.9rem","text-align":"left"}}>Standard</th>
                <th style={{padding:"0.7rem 0.9rem","text-align":"left"}}>Character</th>
                <th style={{padding:"0.7rem 0.9rem","text-align":"left"}}>Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map((g, i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}>
                  <td style={{padding:"0.6rem 0.9rem","font-weight":"700"}}>{g[0]}</td>
                  <td style={{padding:"0.6rem 0.9rem"}}>{g[1]}</td>
                  <td style={{padding:"0.6rem 0.9rem"}}>{g[2]}</td>
                  <td style={{padding:"0.6rem 0.9rem"}}>{g[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>How Weathering Steel Behaves</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          Corten is a low-alloy structural steel with deliberate additions of copper, chromium and nickel, and in the A-type grades phosphorus as well. Exposed to alternating wet and dry weather, it forms a dense oxide layer that bonds to the steel beneath rather than spalling off. That layer is what limits further corrosion, and it is why the material can be left unpainted in the right setting. It takes months of weathering cycles to darken and stabilise into the familiar deep russet colour.
        </p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          The limits matter as much as the benefit. The patina only works if the surface can dry out. Corten is a poor choice where steel stays permanently wet, where it is buried or submerged, or in high-chloride conditions such as marine splash zones. Detailing should also allow for run-off during the first years of weathering, which can stain adjacent concrete or masonry. Where any of these apply, a painted structural grade or a stainless grade is usually the better answer, and we can quote both.
        </p>

        <h2 style={H2}>Specifications &amp; Supply</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {SPECS.map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s[0]}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s[1]}</p>
            </div>
          ))}
        </div>

        <h2 style={H2}>Applications</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"🏛️",title:"Architecture & Facades",desc:"Cladding panels, rainscreens, privacy screens and feature walls left unpainted for the patina"},
            {icon:"🗿",title:"Sculpture & Landscape",desc:"Public art, planters, edging and signage where the weathered finish is the design intent"},
            {icon:"🌉",title:"Bridges & Structures",desc:"Girders and structural members in Corten B where unpainted durability reduces maintenance"},
            {icon:"🚃",title:"Railway Wagons & Containers",desc:"Wagon bodies and container structures exposed continuously to the weather"},
            {icon:"🏭",title:"Chimneys & Stacks",desc:"Stack casings and industrial enclosures in atmospheric exposure"},
            {icon:"⛏️",title:"Bulk Handling Plant",desc:"Chutes, hoppers and weather-exposed equipment in mining and cement works"},
          ].map(a => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{a.icon}</span>
              <h3 style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.25rem"}}>{a.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{a.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={H2}>Related Plate &amp; Structural Steel</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/ms-plate-supplier-india",label:"MS plate — IS 2062 structural plate"},
            {href:"/astm-a36-steel-plate-supplier-india",label:"ASTM A36 structural steel plate"},
            {href:"/carbon-steel-sa516-plate-stockist-india",label:"SA 516 pressure vessel plate"},
            {href:"/ms-beam-ismb-supplier-india",label:"MS beam (ISMB) sections"},
            {href:"/ms-channel-ismc-supplier-india",label:"MS channel (ISMC) sections"},
            {href:"/ms-flat-bar-supplier-india",label:"MS flat bar to IS 2062"},
          ].map(l => (
            <a href={l.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <h2 style={H2}>Frequently Asked Questions — Corten Steel Plate</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Corten Steel Plate?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Send your grade, thickness and plate size — we will confirm availability and price.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi+I+need+Corten+steel+plate" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <RelatedPages currentPath="/corten-steel-plate-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Corten Steel Plate Supplier India | Vadodara, Gujarat</p>
        <p>GIDC Makarpura, Vadodara | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
