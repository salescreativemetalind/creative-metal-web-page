/**
 * /incoloy-825-pipe-supplier-india
 * Target: "Incoloy 825 pipe tube supplier India", "Incoloy 825 seamless pipe",
 * "N08825 nickel alloy pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Incoloy 825 Seamless Pipe (B423)", composition: "42Ni-21Cr-3Mo-2Cu-Ti", sizes: "1/2\" to 10\" NB", schedule: "SCH 10S–80S", apps: "Sulphuric acid, oil & gas sour service", ht: "Solution Annealed 940°C", stock: "Ready Stock" },
  { grade: "Incoloy 825 Welded Pipe (B423)", composition: "UNS N08825", sizes: "2\" to 10\" NB", schedule: "SCH 10S–40S", apps: "Phosphoric acid, pickling equipment", ht: "Solution Annealed + Pickled", stock: "Ready Stock" },
  { grade: "Incoloy 825 Tube (B163)", composition: "42Ni-21Cr-3Mo-2Cu-Ti", sizes: "OD 6.35mm to 114.3mm", schedule: "BWG 14-20", apps: "Heat exchangers, condensers, pollution control", ht: "Solution Annealed", stock: "Available" },
  { grade: "Incoloy 825 ERW Pipe", composition: "N08825", sizes: "1\" to 8\" NB", schedule: "SCH 10S–40S", apps: "Marine systems, chemical processing", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Incoloy 825 and Inconel 625?", a: "Incoloy 825 (N08825) and Inconel 625 (N06625) are both nickel alloys but serve different cost-performance niches. Incoloy 825 contains 42% nickel, 21% chromium, 3% molybdenum, and 2% copper, while Inconel 625 has 58% nickel, 22% chromium, and 9% molybdenum. The key difference is that 825 costs approximately 40-50% less than 625 due to lower nickel and molybdenum content. Incoloy 825 is excellent for moderate corrosion environments — sulphuric acid, phosphoric acid, and sour gas — where 316L is insufficient but full Inconel 625 is overkill. Choose 625 for extreme environments: marine, hot concentrated acids, and severe pitting/crevice conditions." },
  { q: "Is Incoloy 825 resistant to sulphuric acid?", a: "Yes, Incoloy 825 provides excellent resistance to sulphuric acid across a wide range of concentrations and temperatures. The copper content (approximately 2%) specifically enhances resistance to reducing acids like H2SO4. At room temperature, 825 resists all concentrations from dilute to 90%. At elevated temperatures (up to 80°C), it handles concentrations up to approximately 60-70% effectively. The corrosion rate in 20% H2SO4 at boiling temperature is less than 0.5 mm/year. This makes it a cost-effective choice for sulphuric acid plants, pickling equipment, and acid coolers where SS 316L corrodes but the full expense of Hastelloy C-276 is not justified." },
  { q: "Is Incoloy 825 NACE MR0175 compliant for sour service?", a: "Yes, Incoloy 825 is listed in NACE MR0175/ISO 15156 (the standard governing materials for H2S-containing oil and gas environments) as an acceptable material for sour service applications. The alloy's high nickel content (42%) provides inherent resistance to sulphide stress cracking (SSC) and stress corrosion cracking in H2S environments. It is approved for use in all sour service zones including the most severe conditions. This makes Incoloy 825 widely used in oil & gas production tubing, downhole equipment, flow lines, and process piping where hydrogen sulphide is present. Creative Metal Industries supplies NACE-compliant 825 pipe with supporting documentation." },
  { q: "How does Incoloy 825 compare to SS 904L?", a: "Both Incoloy 825 and SS 904L are designed for acid service but differ in composition and performance. Incoloy 825 has 42% nickel versus 904L's 25% nickel — this higher nickel content gives 825 significantly better resistance to chloride stress corrosion cracking and sour service (H2S) environments. SS 904L has higher molybdenum (4.5% vs 3%) giving slightly better pitting resistance in certain chloride media. In terms of cost, 904L is approximately 20-30% cheaper than 825. Choose 825 for sour service (NACE MR0175), chloride SCC concerns, and mixed acid environments. Choose 904L for concentrated sulphuric acid and seawater applications where SCC is not the primary concern." },
  { q: "What sizes of Incoloy 825 pipe does CMI stock?", a: "Creative Metal Industries stocks Incoloy 825 seamless pipes per ASTM B423 from 1/2 inch to 10 inches NB in schedules SCH 10S, 20S, 40S, and 80S. Welded pipes are available from 2 inches to 10 inches NB. Tubes per ASTM B163 are stocked in OD 6.35mm to 114.3mm for heat exchanger and condenser applications. Standard lengths are 5-7 metres random. All material is solution annealed at 940°C, water quenched, pickled, and supplied with full MTC per EN 10204 3.1, intergranular corrosion test report, and PMI verification. Custom cut lengths and project quantities available on request." },
  { q: "What is the price of Incoloy 825 pipe in India?", a: "Incoloy 825 pipe pricing in India typically ranges from Rs 2,000 to Rs 6,000 per kg depending on size, schedule, quantity, and current nickel market conditions. It is positioned as a mid-range nickel alloy — more expensive than SS 316L or 904L, but significantly cheaper than Inconel 625 or Hastelloy C-276. Seamless pipes in smaller sizes command higher per-kg pricing due to manufacturing complexity. The cost-performance ratio makes 825 particularly attractive for oil & gas sour service applications where NACE compliance is required but the extreme corrosion resistance of Inconel 625 is not necessary. Contact CMI at +91 99982 80619 for current competitive pricing." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Incoloy 825 Pipe & Tube — N08825","description":"Incoloy 825 (UNS N08825) seamless and welded pipes per ASTM B423, tubes per ASTM B163. Acid resistant, NACE MR0175 sour service. Sizes 1/2\" to 10\" NB. Creative Metal Industries, Vadodara, India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"2000","highPrice":"6000","offerCount":"180+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"20","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Incoloy 825 Pipe Supplier India","item":"https://www.creativemetalind.com/incoloy-825-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Incoloy825PipeSupplierIndia() {
  return (
    <>
      <Title>Incoloy 825 Pipe &amp; Tube Supplier India | NACE | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Incoloy 825 pipe & tube supplier India — ASTM B423 N08825 seamless pipes. Acid resistant, NACE MR0175 sour service. Sulphuric acid, oil & gas. Sizes 1/2&quot; to 10&quot; NB. Ready stock. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/incoloy-825-pipe-supplier-india" />
      <Meta property="og:title" content="Incoloy 825 Pipe & Tube Supplier India | N08825 | NACE Compliant | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Incoloy 825 pipe supplier India — N08825 nickel alloy. Acid resistant, NACE sour service. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/incoloy-825-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Incoloy 825 Pipe Supplier India | N08825 | CMI" />
      <Meta name="twitter:description" content="Incoloy 825 pipe supplier India — acid resistant, NACE sour service. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Incoloy 825 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Incoloy 825 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Incoloy 825 Pipe & Tube Supplier in India — N08825
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>Incoloy 825 pipe and tube supplier in India</strong> stocking ASTM B423 seamless and welded pipes in UNS N08825 nickel-iron-chromium alloy. Incoloy 825 with its 42Ni-21Cr-3Mo-2Cu-Ti composition provides excellent resistance to sulphuric acid, phosphoric acid, and sour gas (H2S) environments at a cost-effective price point between stainless steel and premium nickel alloys. NACE MR0175 compliant for oil & gas sour service. Extensively used in chemical processing, oil & gas production, pickling equipment, and pollution control systems. Ready stock sizes 1/2" to 10" NB at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Incoloy 825 Pipe Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard (Pipe)",value:"ASTM B423 / SB423 (Seamless & Welded Pipe)"},
            {label:"Standard (Tube)",value:"ASTM B163 / SB163 (Seamless Tube)"},
            {label:"Grade",value:"Incoloy 825 (UNS N08825)"},
            {label:"Type",value:"Seamless, Welded & Tube"},
            {label:"Size Range",value:"1/2\" to 10\" NB (15NB to 250NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"Up to 540°C"},
            {label:"Composition",value:"38-46% Ni, 19.5-23.5% Cr, 2.5-3.5% Mo, 1.5-3% Cu, 0.6-1.2% Ti"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (ASTM G28), PMI, Flattening"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE MR0175/ISO 15156"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Incoloy 825 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Sulphuric acid handling:</strong> Process piping, acid coolers, absorption towers, H2SO4 storage tanks</li>
            <li><strong>Phosphoric acid:</strong> Evaporators, heat exchangers, piping in fertilizer and chemical plants</li>
            <li><strong>Oil & gas sour service:</strong> Production tubing, flow lines, downhole equipment per NACE MR0175</li>
            <li><strong>Marine applications:</strong> Seawater piping, desalination plant heat exchangers, offshore platform components</li>
            <li><strong>Pickling equipment:</strong> Acid tanks, heater coils, piping for HNO3/HF mixed acid pickling systems</li>
            <li><strong>Chemical processing:</strong> Reactor vessels, distillation columns, piping for organic acids and solvents</li>
            <li><strong>Pollution control:</strong> FGD scrubber internals, waste treatment piping, incinerator components</li>
            <li><strong>Nuclear fuel reprocessing:</strong> Dissolver vessels, piping for radioactive waste handling systems</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Incoloy 825 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Cost-effective nickel alloy:</strong> Incoloy 825 at 40-50% lower cost than Inconel 625 — ideal bridge between stainless and premium alloys</li>
          <li><strong>NACE MR0175 compliant:</strong> All material suitable for H2S sour service with supporting documentation and test reports</li>
          <li><strong>Ready stock inventory:</strong> Multiple sizes in seamless pipe and tube maintained at Vadodara for immediate dispatch</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), IGC test (ASTM G28), PMI report, solution annealing certificate</li>
          <li><strong>Acid service expertise:</strong> Material selection guidance — 825 vs 625 vs 904L vs Hastelloy for your specific acid environment</li>
          <li><strong>Complete product range:</strong> Pipes, tubes, fittings, flanges, sheets, and bars in Incoloy 825 from single source</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch from Vadodara to Gujarat, Maharashtra, Tamil Nadu, and all major industrial cities</li>
          <li><strong>Export capability:</strong> Supplying to oil & gas and chemical projects in Middle East, Africa, and Asia-Pacific</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Incoloy 825 Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"1rem","margin-bottom":"2rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem 1.4rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.95rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7","margin-top":"0.75rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-top":"3rem"}}>
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Incoloy 825 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B423 N08825. NACE compliant. Complete documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Incoloy+825+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/inconel-600-pipe-supplier-india", label:"Inconel 600 Pipe"},
              {href:"/inconel-718-supplier-india", label:"Inconel 718 Bar & Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625 Pipe"},
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/monel-k500-supplier-india", label:"Monel K500 Round Bar"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/incoloy-825-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Incoloy 825 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
