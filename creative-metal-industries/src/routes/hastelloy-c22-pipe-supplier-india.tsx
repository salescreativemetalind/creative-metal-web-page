/**
 * /hastelloy-c22-pipe-supplier-india
 * Target: "Hastelloy C22 pipe supplier India", "Hastelloy C22 seamless pipe",
 * "N06022 nickel alloy pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Hastelloy C22 Seamless (B622)", composition: "56Ni-22Cr-13Mo-3W-3Fe", sizes: "1/2\" to 8\" NB", schedule: "SCH 10S–80S", apps: "Chemical reactors, FGD scrubbers, pharma", ht: "Solution Annealed 1120°C", stock: "Ready Stock" },
  { grade: "Hastelloy C22 Welded (B619)", composition: "UNS N06022", sizes: "2\" to 8\" NB", schedule: "SCH 10S–40S", apps: "Waste treatment, chlorine environments", ht: "Solution Annealed + Pickled", stock: "Ready Stock" },
  { grade: "Hastelloy C22 Tube (B622)", composition: "56Ni-22Cr-13Mo-3W-3Fe", sizes: "OD 6.35mm to 114.3mm", schedule: "BWG 14-20", apps: "Heat exchangers, condensers, evaporators", ht: "Solution Annealed", stock: "Available" },
  { grade: "Hastelloy C22 Fittings", composition: "N06022 (ASTM B366)", sizes: "1/2\" to 8\" NB", schedule: "SCH 10S–80S", apps: "Complete piping systems, critical joints", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Hastelloy C22 and C276?", a: "Hastelloy C22 (N06022) and C276 (N10276) are both premium nickel-chromium-molybdenum alloys but with important differences in corrosion resistance profiles. C22 contains 22% Cr, 13% Mo, and 3% W, while C276 has 16% Cr, 16% Mo, and 4% W. The higher chromium in C22 gives it superior resistance to oxidizing media (ferric chloride, chlorine, nitric acid mixtures) while C276's higher molybdenum provides better resistance to pure reducing acids (HCl, H2SO4). C22 is considered the more 'universal' alloy because it handles both oxidizing AND reducing environments effectively — making it safer when the process conditions are variable or not precisely known. C276 remains preferred for concentrated hydrochloric acid and pure reducing acid service." },
  { q: "Why is Hastelloy C22 called the 'universal' corrosion resistant alloy?", a: "Hastelloy C22 earned the 'universal' designation because it provides outstanding resistance to both oxidizing AND reducing corrosive media — a combination no single alloy previously achieved. Most corrosion-resistant alloys are optimized for either oxidizing conditions (high Cr alloys) or reducing conditions (high Mo alloys), but not both. C22's balanced composition (22% Cr for oxidizing resistance + 13% Mo for reducing resistance + 3% W for localized corrosion) creates a uniquely versatile material. It resists chlorine, chlorides, oxidizing acids (HNO3), reducing acids (H2SO4, HCl), mixed acids, and organic solvents. This versatility makes it the default choice when process chemistries are complex, variable, or poorly defined." },
  { q: "What welding filler metal is used for Hastelloy C22?", a: "Hastelloy C22 is welded using ERNiCrMo-10 (AWS A5.14) filler wire for GTAW/TIG welding and ENiCrMo-10 (AWS A5.11) coated electrodes for SMAW. The matching filler (Hastelloy C-22 filler metal) provides weld deposits with corrosion resistance equivalent to the base metal. C22 has excellent weldability — better than C276 — because its higher chromium content makes it more resistant to the formation of detrimental grain boundary precipitates in the heat-affected zone. Post-weld heat treatment is not normally required. For dissimilar welding (C22 to carbon steel or stainless), ERNiCrMo-10 filler is also recommended. Proper shielding gas (pure argon or Ar/He mix) and low interpass temperature (below 120°C) are essential for optimal results." },
  { q: "What sizes of Hastelloy C22 pipe does CMI supply?", a: "Creative Metal Industries stocks Hastelloy C22 seamless pipes per ASTM B622 from 1/2 inch to 8 inches NB in schedules SCH 10S, 20S, 40S, and 80S. Welded pipes per ASTM B619 are available from 2 inches to 8 inches NB. Tubes per ASTM B622 are stocked in OD 6.35mm to 114.3mm for heat exchanger applications. Standard lengths are 4-7 metres random. All material supplied solution annealed at 1120°C, water quenched, and pickled with full MTC per EN 10204 3.1, PMI verification, and intergranular corrosion test per ASTM G28. Fittings (elbows, tees, reducers) per ASTM B366 also available." },
  { q: "What is the price range for Hastelloy C22 pipe in India?", a: "Hastelloy C22 pipe is a premium material with pricing in India typically ranging from Rs 5,000 to Rs 12,000 per kg depending on size, schedule, quantity, and current nickel/molybdenum market conditions. It is one of the most expensive commercial pipe materials due to its high nickel (56%), chromium (22%), molybdenum (13%), and tungsten (3%) content plus complex manufacturing requirements. Seamless pipes in smaller sizes command higher per-kg pricing. Despite the high cost, C22 is often economical on a lifecycle basis because its universal corrosion resistance eliminates premature failure and costly unplanned shutdowns. Contact Creative Metal Industries at +91 99982 80619 for competitive project pricing from our ready stock." },
  { q: "What industries use Hastelloy C22 pipe most commonly?", a: "Hastelloy C22 finds application across the most demanding chemical process industries. The major users include: chemical manufacturing (reactors, columns, piping for mixed acid and chloride processes), flue gas desulphurization (FGD scrubber internals, ducting, spray headers in power plants), pharmaceutical manufacturing (reactors, piping for aggressive organic and inorganic intermediates), waste treatment (incineration off-gas systems, hazardous waste processing), pulp & paper (chlorine dioxide bleaching systems), and semiconductor manufacturing (ultra-pure chemical delivery systems). The petrochemical industry uses C22 in HF alkylation units and chlorinated hydrocarbon processing. Its 'universal' resistance profile makes it the go-to alloy when multiple corrosive species are present simultaneously." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Hastelloy C22 Pipe — N06022","description":"Hastelloy C22 (UNS N06022) seamless and welded pipes per ASTM B622/B619. Universal corrosion resistant — oxidizing AND reducing acids. Sizes 1/2\" to 8\" NB. Creative Metal Industries, Vadodara, India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"5000","highPrice":"12000","offerCount":"80+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"14","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Hastelloy C22 Pipe Supplier India","item":"https://www.creativemetalind.com/hastelloy-c22-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function HasteloyC22PipeSupplierIndia() {
  return (
    <>
      <Title>Hastelloy C22 Pipe Supplier India | N06022 Universal CRA | Chemical | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Hastelloy C22 pipe supplier India — ASTM B622 N06022 seamless pipes. Universal corrosion resistant — oxidizing & reducing acids. FGD, pharma, chemical. Sizes 1/2\" to 8\" NB. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/hastelloy-c22-pipe-supplier-india" />
      <Meta property="og:title" content="Hastelloy C22 Pipe Supplier India | N06022 | Universal CRA | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Hastelloy C22 pipe supplier India — N06022 universal corrosion resistant alloy. Oxidizing & reducing environments. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/hastelloy-c22-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Hastelloy C22 Pipe Supplier India | N06022 | CMI" />
      <Meta name="twitter:description" content="Hastelloy C22 pipe supplier India — universal CRA. Oxidizing + reducing acids. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Hastelloy C22 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Hastelloy C22 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Hastelloy C22 Pipe Supplier in India — N06022
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>Hastelloy C22 pipe supplier in India</strong> stocking ASTM B622 seamless and B619 welded pipes in UNS N06022 — the most versatile corrosion-resistant alloy available. Hastelloy C22 with its unique 56Ni-22Cr-13Mo-3W-3Fe composition resists both oxidizing AND reducing acids simultaneously, earning its reputation as the "universal" CRA (Corrosion Resistant Alloy). Widely specified for chemical processing, FGD systems, pharmaceutical reactors, waste treatment, and chloride environments. When process conditions are complex or variable, C22 provides the ultimate insurance against corrosion failure. Ready stock sizes 1/2" to 8" NB at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Hastelloy C22 Pipe Grades — Ready Stock India</h2>
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
            {label:"Standard (Seamless)",value:"ASTM B622 / SB622"},
            {label:"Standard (Welded)",value:"ASTM B619 / SB619"},
            {label:"Grade",value:"Hastelloy C22 (UNS N06022)"},
            {label:"Type",value:"Seamless, Welded & Tube"},
            {label:"Size Range",value:"1/2\" to 8\" NB (15NB to 200NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"Up to 1150°C (oxidation) / 500°C (corrosive service)"},
            {label:"Composition",value:"56% Ni, 20-22.5% Cr, 12.5-14.5% Mo, 2.5-3.5% W, 2-6% Fe"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (ASTM G28), PMI, Intergranular Corrosion"},
            {label:"Welding",value:"ERNiCrMo-10 filler wire (matching composition)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Hastelloy C22 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Chemical processing:</strong> Reactor vessels, columns, piping for mixed acid environments, chlorinated solvents, organic acids</li>
            <li><strong>Flue gas desulphurization:</strong> FGD scrubber internals, spray headers, ducting, mist eliminators in thermal power plants</li>
            <li><strong>Pharmaceutical:</strong> Reactor vessels, piping for aggressive intermediates, high-purity processing equipment</li>
            <li><strong>Waste treatment:</strong> Incineration off-gas systems, hazardous waste processing, sewage treatment plants</li>
            <li><strong>Chlorine/chloride service:</strong> Chlor-alkali plant piping, bleach production, chlorinated hydrocarbon processing</li>
            <li><strong>Pulp & paper:</strong> ClO2 bleaching systems, chlorine dioxide generators, white liquor oxidation</li>
            <li><strong>Petrochemical:</strong> HF alkylation units, acetic acid production, vinyl chloride monomer plants</li>
            <li><strong>Semiconductor:</strong> Ultra-pure chemical delivery systems, etch chamber components, wet bench equipment</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Hastelloy C22 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Premium alloy specialist:</strong> One of the few Indian stockists maintaining Hastelloy C22 pipe inventory for immediate dispatch</li>
          <li><strong>Approved mill sources:</strong> Material from Haynes International (original Hastelloy manufacturer), VDM Metals, and other approved producers</li>
          <li><strong>Universal CRA expertise:</strong> Guidance on C22 vs C276 vs C2000 vs C4 selection for your specific process chemistry</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), IGC test (ASTM G28), PMI report, solution annealing certificate</li>
          <li><strong>Welding support:</strong> Matching filler wire (ERNiCrMo-10) and welding procedure guidance available</li>
          <li><strong>Complete range:</strong> Pipes, tubes, fittings (B366), flanges, sheets, and bars in Hastelloy C22 from single source</li>
          <li><strong>Lifecycle economics:</strong> Higher upfront cost offset by zero corrosion failures — we help justify the investment to your management</li>
          <li><strong>Pan-India + export:</strong> Serving chemical, pharma, and power plants across India and internationally</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Hastelloy C22 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Hastelloy C22 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B622 N06022. Universal CRA. Full mill certificates.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Hastelloy+C22+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
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
              {href:"/incoloy-825-pipe-supplier-india", label:"Incoloy 825 Pipe"},
              {href:"/monel-k500-supplier-india", label:"Monel K500 Round Bar"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625 Pipe"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/hastelloy-c22-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Hastelloy C22 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
