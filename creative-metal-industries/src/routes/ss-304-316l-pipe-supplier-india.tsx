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
 * Property figures below are nominal published values for the grades named in
 * ASTM A312 / A240 and are presented as typical reference data, consistent with the
 * grade tables already used across this site. No company-specific capability,
 * certification, stock or price claim has been added.
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

// ── Grade comparison (nominal reference values per ASTM A312 / A240) ──────────
const COMPARE: string[][] = [
  ["UNS Number", "S30400", "S30403", "S31600", "S31603"],
  ["Chromium (%)", "18–20", "18–20", "16–18", "16–18"],
  ["Nickel (%)", "8–10.5", "8–12", "10–14", "10–14"],
  ["Molybdenum (%)", "—", "—", "2–3", "2–3"],
  ["Carbon max (%)", "0.08", "0.030", "0.08", "0.030"],
  ["Tensile min (MPa)", "515", "485", "515", "485"],
  ["Yield min (MPa)", "205", "170", "205", "170"],
  ["Density (g/cm³)", "8.0", "8.0", "8.0", "8.0"],
  ["PREN (approx.)", "~18", "~18", "~24", "~24"],
  ["Chloride resistance", "Moderate", "Moderate", "Excellent", "Excellent"],
  ["Max service temp (°C)", "870", "870", "870", "870"],
  ["Typical use", "General, food, dairy", "Welded fabrication", "Marine, chemical", "Pharma, chloride service"],
];

const SPECS: string[][] = [
  ["Size Range", "6NB (1/8 inch) to 600NB (24 inch)"],
  ["Wall Schedules", "SCH 5S, 10S, 20, 40S, 80S, 120, 160, XXS"],
  ["Type", "Seamless (SMLS) and Welded (ERW/EFW)"],
  ["Standard", "ASTM A312 / ASME SA-312 (pipe), ASTM A213 (tube)"],
  ["Grades Stocked", "TP304, TP304L, TP316, TP316L"],
  ["End Finish", "Plain end, Bevelled, Threaded"],
  ["Length", "Random (5-7m) and Fixed (6m, 6.1m)"],
  ["Surface", "Pickled & Passivated, Bright Annealed, Mill Finish"],
  ["Testing", "Hydrostatic, Eddy Current, UT, RT"],
  ["Certification", "MTC EN 10204 3.1/3.2, IBR Form III-C, NACE"],
];

const FAQS = [
  {
    q: "What is the difference between SS 304 and SS 316L pipe?",
    a: "SS 316L contains 2–3% molybdenum, which SS 304 does not. That molybdenum addition raises the pitting resistance equivalent number (PREN) from roughly 18 to roughly 24, giving markedly better resistance to chlorides and pitting. SS 304 is the more economical choice for general corrosion service, food and dairy work. SS 316L is specified where chlorides, seawater, acids or pharmaceutical-grade cleanliness are involved. Both grades share the same nominal density of about 8.0 g/cm³ and the same practical upper service temperature of about 870°C.",
  },
  {
    q: "What is the difference between 304 and 304L stainless steel?",
    a: "The difference is carbon content. Standard 304 allows up to 0.08% carbon, while 304L is restricted to a maximum of 0.030%. Lower carbon reduces the formation of chromium carbides at grain boundaries during welding — the effect known as sensitisation — which would otherwise leave the weld heat-affected zone vulnerable to intergranular corrosion. 304L is therefore preferred for welded fabrication that will not be solution annealed afterwards. The trade-off is slightly lower minimum strength: 170 MPa yield and 485 MPa tensile for 304L against 205 MPa and 515 MPa for 304. The same relationship applies between 316 and 316L.",
  },
  {
    q: "What are the mechanical properties and density of SS 304?",
    a: "For SS 304 (UNS S30400) the nominal published values are a minimum yield strength of 205 MPa, minimum tensile strength of 515 MPa, and a density of approximately 8.0 g/cm³. Composition is nominally 18–20% chromium and 8–10.5% nickel with carbon held to 0.08% maximum. SS 316L (UNS S31603) is nominally 16–18% chromium, 10–14% nickel and 2–3% molybdenum, with 170 MPa minimum yield and 485 MPa minimum tensile. These are reference values from the grade standards; the actual certified figures for any consignment are stated on its Mill Test Certificate.",
  },
  {
    q: "What pipe sizes and schedules do you supply in SS 304/316L?",
    a: "We supply SS 304 and 316L pipe from 6NB (1/8 inch) to 600NB (24 inch) in schedules SCH 5S, 10S, 20, 40S, 80S, 120, 160 and XXS. Both seamless pipe to ASTM A312 and welded (ERW/EFW) pipe are available, in random 5-7 metre and fixed 6 / 6.1 metre lengths, with plain, bevelled or threaded ends.",
  },
  {
    q: "Do you supply IBR certified SS 304/316L pipes?",
    a: "Yes. We supply ASTM A312 SS 304/316L seamless pipes with IBR Form III-C certification for boiler and pressure vessel applications, available from Sandvik, Ratnamani and other IBR-approved mills.",
  },
  {
    q: "Which mill brands do you stock for SS 304/316L?",
    a: "We are authorised stockists for Sandvik, Ratnamani, Venus Pipes, Salzgitter Mannesmann, Tubacex and Plymouth Tube. All pipes come with original Mill Test Certificates (EN 10204 3.1/3.2).",
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
      description: "SS 304, 304L, 316 and 316L pipe to ASTM A312 — grade properties, sizes, schedules and applications.",
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
      <Title>SS 304 &amp; 316L Pipe Supplier India | ASTM A312 | CMI</Title>
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 304 and SS 316L pipe supplier in India — ASTM A312 TP304, TP304L, TP316, TP316L seamless and welded, 6NB to 600NB, SCH 5S to XXS. Grade data, IBR, MTC." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india" />
      <Meta property="og:title" content="SS 304 &amp; 316L Pipe Supplier India | ASTM A312 | CMI" />
      <Meta property="og:description" content="SS 304, 304L, 316 and 316L pipe to ASTM A312 — grade properties, all sizes and schedules, IBR Form III-C and MTC. Ready stock Vadodara." />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 304 &amp; 316L Pipe Supplier India | ASTM A312 | CMI" />
      <Meta name="twitter:description" content="SS 304, 304L, 316 and 316L pipe to ASTM A312 — grade properties, sizes, schedules, IBR and MTC. Vadodara, pan-India supply." />
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
            Creative Metal Industries stocks <strong>SS 304 and SS 316L pipe</strong> to ASTM A312 and ASTM A213, in seamless and welded form, from 6NB to 600NB and in schedules from SCH 5S to XXS. Both the standard grades and their low-carbon <strong>304L</strong> and <strong>316L</strong> variants are held for welded fabrication. Material is supplied with Mill Test Certificates to EN 10204 3.1/3.2, and with IBR Form III-C or NACE MR-01-75 documentation where the application calls for it.
          </p>
        </div>

        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          SS 304 (UNS S30400) and SS 316L (UNS S31603) are the two most widely specified austenitic stainless steels. The practical choice between them comes down to molybdenum: 316L has 2–3%, which is what gives it its chloride and pitting resistance, and 304 has none. Established in <strong>2012</strong>, we hold ready stock at GIDC Makarpura, Vadodara and supply from mills including <strong>Sandvik, Ratnamani, Venus Pipes, Salzgitter and Tubacex</strong>. Third-party inspection under DNV, TUV, SGS, BVIS or LRIS is accepted at our facility.
        </p>

        <h2 style={H2}>SS 304, 304L, 316 and 316L — Grade Comparison</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.75","margin-bottom":"1rem"}}>
          Nominal reference values from the grade standards. Certified figures for a specific consignment are always those stated on its Mill Test Certificate.
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

        <h3 style={{"font-size":"1.05rem","font-weight":"700",color:"#111827",margin:"1.5rem 0 0.5rem"}}>Why the L grades exist</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          The <strong>L</strong> in 304L and 316L denotes restricted carbon — 0.030% maximum instead of 0.08%. During welding, carbon in the heat-affected zone combines with chromium to form chromium carbides at the grain boundaries, locally depleting the chromium that provides corrosion resistance. This is called sensitisation, and it leaves the weld zone open to intergranular attack. Holding carbon low suppresses it, which is why L grades are specified for fabrication that will be welded and not solution annealed afterwards. The cost is a modest reduction in minimum strength, as the table above shows.
        </p>

        <h2 style={H2}>Pipe Sizes, Schedules &amp; Specifications</h2>
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
            {icon:"🧪",title:"Chemical Processing",desc:"Reactors, heat exchangers and process piping in acid and alkali service"},
            {icon:"💊",title:"Pharmaceutical & Biotech",desc:"Purified water, WFI and CIP/SIP systems — typically polished 316L"},
            {icon:"🍶",title:"Food & Dairy",desc:"Milk, beverage and brewery lines — hygienic welded tube, commonly 304"},
            {icon:"🛢️",title:"Oil & Gas",desc:"Process piping and instrument tubing"},
            {icon:"⚡",title:"Power Plants",desc:"Condenser tubes, boiler feed water and steam piping"},
            {icon:"🌊",title:"Marine & Offshore",desc:"Seawater piping and desalination, where 316L is specified for chlorides"},
          ].map(a => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{a.icon}</span>
              <h3 style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.25rem"}}>{a.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{a.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={H2}>Mill Brands We Stock</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(150px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Sandvik","Ratnamani","Venus Pipes","Salzgitter","Tubacex","Plymouth","Nippon Steel","Sumitomo"].map(m => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.85rem","text-align":"center","font-weight":"700","font-size":"0.88rem",color:"#111827"}}>{m}</div>
          ))}
        </div>

        <h2 style={H2}>Related Stainless Steel Pages</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
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
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Send your size, schedule and grade — we will confirm availability and price.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <RelatedPages currentPath="/ss-304-316l-pipe-supplier-india" />
      </main>
      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}><p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 304 &amp; 316L Pipe Supplier India | Vadodara, Gujarat</p></footer>
    </>
  );
}
