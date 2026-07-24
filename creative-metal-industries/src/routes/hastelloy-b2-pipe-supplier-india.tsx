/**
 * /hastelloy-b2-pipe-supplier-india
 * Target: "Hastelloy B2 pipe supplier India", "Hastelloy B2 seamless pipe",
 * "N10665 nickel alloy pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Hastelloy B2 Seamless (B622)", composition: "69Ni-28Mo-2Fe", sizes: "1/2\" to 6\" NB", schedule: "SCH 10S–80S", apps: "HCl processing, H2SO4 service, reducing acid reactors", ht: "Solution Annealed 1065°C", stock: "Ready Stock" },
  { grade: "Hastelloy B2 Welded (B619)", composition: "UNS N10665", sizes: "2\" to 6\" NB", schedule: "SCH 10S–40S", apps: "Chemical transfer lines, acid concentration plants", ht: "Solution Annealed + Pickled", stock: "Ready Stock" },
  { grade: "Hastelloy B2 Tube (B622)", composition: "69Ni-28Mo-2Fe", sizes: "OD 6.35mm to 114.3mm", schedule: "BWG 14-20", apps: "Heat exchangers, acid coolers, condensers", ht: "Solution Annealed", stock: "Available" },
  { grade: "Hastelloy B2 Fittings (B366)", composition: "N10665", sizes: "1/2\" to 6\" NB", schedule: "SCH 10S–80S", apps: "Complete piping systems, critical acid handling joints", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is Hastelloy B2 and what is its UNS number?", a: "Hastelloy B2 is a nickel-molybdenum alloy with the UNS designation N10665, containing approximately 69% nickel and 28% molybdenum with controlled additions of iron, chromium, and other elements. It was developed specifically for service in reducing acid environments, particularly hydrochloric acid (HCl) at all concentrations up to the boiling point and sulphuric acid (H2SO4) below 60% concentration. The alloy achieves its exceptional reducing acid resistance from its very high molybdenum content (28%), which provides a stable passive film in non-oxidizing acidic conditions. Hastelloy B2 is the improved version of the original Hastelloy B alloy, with tighter composition control to minimize heat-affected zone corrosion after welding." },
  { q: "What is the difference between Hastelloy B2 and Hastelloy B3?", a: "Hastelloy B2 (N10665) and B3 (N10675) are both nickel-molybdenum alloys designed for reducing acid service, but B3 represents a significant metallurgical advancement over B2. The key difference is thermal stability — B2 is susceptible to the formation of detrimental Ni4Mo phase during heating in the 550-750°C range, which causes knife-line attack in the heat-affected zone after welding if not properly solution annealed. B3 overcomes this through controlled additions of iron (1-3%) and chromium (1-3%) that suppress Ni4Mo precipitation, giving it much wider fabrication tolerance. However, B2 remains widely specified because it has a longer track record, is available from more sources, costs slightly less, and performs excellently when properly solution annealed after welding." },
  { q: "What acids can Hastelloy B2 resist?", a: "Hastelloy B2 provides outstanding resistance to hydrochloric acid (HCl) at all concentrations from dilute to concentrated, including at elevated temperatures up to the boiling point — a capability matched by very few commercial alloys. It also resists sulphuric acid (H2SO4) at concentrations below 60%, phosphoric acid, acetic acid, and other organic reducing acids. The critical limitation is that B2 has poor resistance to oxidizing acids (nitric acid, ferric chloride, cupric chloride) and environments containing dissolved oxygen or oxidizing salts. Even trace amounts of ferric ions (Fe3+) or dissolved oxygen in HCl can accelerate corrosion of B2 dramatically. For mixed oxidizing-reducing environments, Hastelloy C22 or C276 is preferred instead." },
  { q: "What sizes of Hastelloy B2 pipe does Creative Metal Industries supply?", a: "Creative Metal Industries stocks Hastelloy B2 seamless pipes per ASTM B622 from 1/2 inch to 6 inches NB in schedules SCH 10S, 20S, 40S, and 80S for chemical plant piping systems. Welded pipes per ASTM B619 are available from 2 inches to 6 inches NB. Tubes per ASTM B622 are stocked in outer diameter range 6.35mm to 114.3mm for heat exchanger and condenser applications. Standard supply lengths are 4-7 metres random. All material is supplied in the solution annealed condition (1065°C minimum, water quenched) with full certification including mill test certificate per EN 10204 3.1, positive material identification, and intergranular corrosion testing. Contact us at +91 99982 80619 for immediate availability check." },
  { q: "What welding precautions are needed for Hastelloy B2?", a: "Welding Hastelloy B2 requires careful attention to avoid thermal sensitization and knife-line corrosion in the heat-affected zone. The recommended filler metal is ERNiMo-7 (AWS A5.14) for GTAW welding and ENiMo-7 (AWS A5.11) for SMAW. Critical precautions include: maintaining low interpass temperature below 93°C, using low heat input to minimize time in the sensitization range (550-750°C), completing welds with minimum restarts, and performing full solution annealing at 1065°C followed by rapid water quenching after welding whenever possible. If post-weld heat treatment is not feasible, multi-pass welds with low heat input and stringer beads are essential. Proper gas shielding with pure argon on root and cover, plus argon back-purging, prevents oxidation that would compromise corrosion resistance." },
  { q: "What is the price range for Hastelloy B2 pipe in India?", a: "Hastelloy B2 pipe pricing in India typically ranges from Rs 4,500 to Rs 11,000 per kilogram depending on size, schedule, quantity ordered, and prevailing nickel and molybdenum market conditions. The high cost reflects the alloy's 69% nickel and 28% molybdenum content — both expensive metals on the London Metal Exchange. Seamless pipes in smaller diameters and heavier schedules command premium pricing per kilogram. Despite the high material cost, Hastelloy B2 is often the most economical choice for concentrated hydrochloric acid service because alternative materials (tantalum, glass-lined steel, fluoropolymer-lined pipe) have their own limitations and costs. Creative Metal Industries offers competitive project pricing from ready stock — call +91 99982 80619 for quotation." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Hastelloy B2 Pipe — N10665","description":"Hastelloy B2 (UNS N10665) seamless and welded pipes per ASTM B622/B619. Superior resistance to reducing acids — HCl at all concentrations. Sizes 1/2\" to 6\" NB. Creative Metal Industries, Vadodara, India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"4500","highPrice":"11000","offerCount":"60+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"11","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Hastelloy B2 Pipe Supplier India","item":"https://www.creativemetalind.com/hastelloy-b2-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function HasteloyB2PipeSupplierIndia() {
  return (
    <>
      <Title>Hastelloy B2 Pipe Supplier India | N10665 Reducing Acid CRA | HCl Service | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Hastelloy B2 pipe supplier India — ASTM B622 N10665 seamless pipes. 69Ni-28Mo composition for HCl and H2SO4 reducing acids. Sizes 1/2\" to 6\" NB. Ready stock. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/hastelloy-b2-pipe-supplier-india" />
      <Meta property="og:title" content="Hastelloy B2 Pipe Supplier India | N10665 | Reducing Acid Specialist | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Hastelloy B2 pipe supplier India — N10665 nickel-molybdenum alloy for HCl and reducing acid service. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/hastelloy-b2-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Hastelloy B2 Pipe Supplier India | N10665 | CMI" />
      <Meta name="twitter:description" content="Hastelloy B2 pipe supplier India — HCl resistant. 69Ni-28Mo. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Hastelloy B2 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Hastelloy B2 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Hastelloy B2 Pipe Supplier in India — N10665
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a trusted <strong>Hastelloy B2 pipe supplier in India</strong> stocking ASTM B622 seamless and B619 welded pipes in UNS N10665 — the premier alloy for hydrochloric acid and reducing acid service. Hastelloy B2 with its remarkable 69Ni-28Mo-2Fe composition provides unmatched resistance to HCl at all concentrations up to the boiling point, sulphuric acid below 60%, phosphoric acid, and acetic acid. This nickel-molybdenum alloy is the material of choice when concentrated reducing acids are involved and oxidizing species are absent. Ready stock sizes 1/2" to 6" NB at our Vadodara warehouse with full mill certification.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Hastelloy B2 Pipe Grades — Ready Stock India</h2>
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
            {label:"Grade",value:"Hastelloy B2 (UNS N10665)"},
            {label:"Type",value:"Seamless, Welded & Tube"},
            {label:"Size Range",value:"1/2\" to 6\" NB (15NB to 150NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"Up to 538°C (corrosive service)"},
            {label:"Composition",value:"69% Ni, 26-30% Mo, 1-3% Fe, 1% Cr max"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (ASTM G28), PMI"},
            {label:"Welding",value:"ERNiMo-7 filler wire (matching composition)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Hastelloy B2 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Hydrochloric acid production:</strong> HCl synthesis units, absorbers, storage tanks, transfer piping for all concentrations</li>
            <li><strong>Sulphuric acid service:</strong> Dilute H2SO4 piping systems, acid concentration plants below 60% concentration</li>
            <li><strong>Phosphoric acid production:</strong> Wet process phosphoric acid plants, evaporator tubes, transfer piping</li>
            <li><strong>Acetic acid & organic acids:</strong> Acetic acid distillation columns, reactors, condensers in organic acid manufacturing</li>
            <li><strong>Pharmaceutical intermediates:</strong> HCl-based reaction systems, acidic intermediate processing equipment</li>
            <li><strong>Chemical processing:</strong> Reducing acid environments, hydrogen gas handling at elevated temperatures</li>
            <li><strong>Vacuum distillation:</strong> High-temperature vacuum columns processing reducing acid streams</li>
            <li><strong>Aluminium smelting:</strong> Aluminium chloride handling systems and HCl recovery units</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Hastelloy B2 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Reducing acid specialist:</strong> Deep expertise in Hastelloy B-family alloys for HCl and H2SO4 service applications</li>
          <li><strong>Approved mill sources:</strong> Material sourced from Haynes International, VDM Metals, and other internationally approved producers</li>
          <li><strong>Alloy selection guidance:</strong> Technical support for B2 vs B3 vs C276 selection based on your specific acid concentrations and temperatures</li>
          <li><strong>Full documentation:</strong> Mill test certificate per EN 10204 3.1, intergranular corrosion test (ASTM G28), PMI report, solution annealing certificate</li>
          <li><strong>Welding support:</strong> Matching ERNiMo-7 filler wire available with welding procedure specifications for B2 fabrication</li>
          <li><strong>Complete product range:</strong> Pipes, tubes, fittings, flanges, sheets, and bars in Hastelloy B2 from single source</li>
          <li><strong>Ready stock advantage:</strong> Immediate dispatch from our Vadodara warehouse — no 12-16 week mill lead time</li>
          <li><strong>Pan-India delivery:</strong> Serving chemical, pharmaceutical, and fertilizer plants across India with export capability</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Hastelloy B2 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Hastelloy B2 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B622 N10665. HCl resistant. Full mill certificates.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Hastelloy+B2+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/inconel-600-pipe-supplier-india", label:"Inconel 600 Pipe"},
              {href:"/nickel-200-pipe-supplier-india", label:"Nickel 200 Pipe"},
              {href:"/alloy-20-pipe-supplier-india", label:"Alloy 20 Pipe"},
              {href:"/incoloy-825-pipe-supplier-india", label:"Incoloy 825 Pipe"},
              {href:"/monel-400-pipe-supplier-india", label:"Monel 400 Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/hastelloy-b2-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Hastelloy B2 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
