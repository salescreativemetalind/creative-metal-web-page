/**
 * /ss-321-pipe-supplier-india
 * Target: "SS 321 pipe supplier India", "SS 321 titanium stabilized pipe",
 * "stainless steel 321 seamless pipe supplier India stabilized"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 321 (TP321)", composition: "18Cr-10Ni-Ti", sizes: "1/2\" to 16\"", schedule: "SCH 10S–160", apps: "Exhaust manifolds, bellows, expansion joints, refinery piping", ht: "Solution Annealed 1010-1120°C", stock: "Ready Stock" },
  { grade: "SS 321H (TP321H)", composition: "18Cr-10Ni-Ti (High C 0.04-0.10%)", sizes: "1/2\" to 12\"", schedule: "SCH 10S–80S", apps: "Superheater tubes, boiler tubes, high-temp creep service", ht: "Solution Annealed", stock: "Ready Stock" },
  { grade: "SS 321 Welded", composition: "18Cr-10Ni-Ti", sizes: "1/2\" to 16\"", schedule: "SCH 5S–40S", apps: "Process piping, chemical plant ducting", ht: "Solution Annealed", stock: "Available" },
  { grade: "SS 321 ERW Pipe", composition: "18Cr-10Ni-Ti", sizes: "1/2\" to 8\"", schedule: "SCH 10S–40S", apps: "General industrial piping, heat exchangers", ht: "Solution Annealed & Pickled", stock: "Available" },
];

const FAQS = [
  { q: "Why choose SS 321 over SS 304 for high temperature piping?", a: "SS 321 contains titanium (Ti ≥ 5×C%) which stabilizes the grain boundary carbides, preventing sensitization in the 425-870°C range. Standard SS 304 is susceptible to intergranular corrosion after exposure to this temperature range due to chromium carbide precipitation at grain boundaries. If your application involves welding or service between 425-870°C, SS 321 eliminates the risk of weld decay and intergranular attack that would affect unstabilized 304. Creative Metal Industries recommends SS 321 for any piping operating above 400°C where welded joints are present." },
  { q: "What is the maximum service temperature for SS 321 pipe?", a: "SS 321 pipe can operate continuously up to 870°C in oxidizing environments. The titanium stabilization specifically prevents sensitization in the 425-870°C range where unstabilized grades like 304 suffer intergranular corrosion. For intermittent service, SS 321 can handle brief excursions to 900°C. Above 870°C, consider SS 310/310S which offers superior oxidation resistance due to higher chromium and nickel content. CMI stocks SS 321 pipes for refinery, petrochemical, and power plant applications across India." },
  { q: "What sizes of SS 321 pipe are available at Creative Metal Industries?", a: "We maintain ready stock of SS 321/321H seamless pipes from 1/2 inch (15NB) to 16 inches (400NB) in schedules SCH 10S, 20S, 40S, 80S, 120, and 160 as per ASTM A312 TP321. Standard lengths are 5-7 metres (random length). Fixed-length and cut-to-length services are available on request. For tube requirements per ASTM A213 TP321/321H, we stock OD 12.7mm to 114.3mm. All material comes with complete MTC documentation." },
  { q: "What is the price range for SS 321 pipe in India?", a: "SS 321 seamless pipe prices in India typically range from Rs 350-800 per kg depending on size, wall thickness, schedule, and order quantity. SS 321 carries a modest premium over SS 304 (approximately 10-15%) due to the titanium addition. Welded SS 321 pipes are approximately 20-30% cheaper than seamless equivalents. For exact pricing, contact Creative Metal Industries at +91 99982 80619. We offer competitive rates through direct mill procurement from Sandvik, Ratnamani, and imported sources." },
  { q: "Is SS 321 pipe easy to weld? What filler wire is recommended?", a: "SS 321 offers excellent weldability — in fact, weldability is one of the primary reasons for choosing this grade. The titanium stabilization prevents sensitization in the heat-affected zone (HAZ), eliminating the need for post-weld solution annealing in most applications. Use ER347 filler wire (niobium-stabilized) rather than ER321, as titanium does not transfer well across the welding arc. For SMAW, use E347-16 electrodes. Pre-heat is not required, and interpass temperature should be maintained below 175°C." },
  { q: "What is the difference between SS 321 and SS 321H?", a: "SS 321H is the high-carbon variant of SS 321 with controlled carbon content of 0.04-0.10% (vs ≤0.08% for standard 321). The higher carbon provides significantly better creep rupture strength at temperatures above 525°C, making 321H the preferred choice for boiler tubes, superheaters, and pressure vessels in high-temperature service. Standard SS 321 is specified where corrosion resistance and weldability are primary concerns, while 321H is specified where long-term elevated temperature strength (creep) is the design criterion." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-321-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 321 Pipe Supplier India","item":"https://www.creativemetalind.com/ss-321-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss321PipeSupplierIndia() {
  return (
    <>
      <Title>SS 321 Pipe Supplier India | Titanium Stabilized | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 321 pipe supplier India — ASTM A312 TP321/321H titanium stabilized seamless pipes for service up to 870°C without sensitization. Sizes 1/2&quot; to 16&quot;." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-321-pipe-supplier-india" />
      <Meta property="og:title" content="SS 321 Pipe Supplier India | Titanium Stabilized Stainless Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 321/321H titanium stabilized pipe supplier India — prevents sensitization 425-870°C. ASTM A312. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-321-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 321 Pipe Supplier India | Titanium Stabilized | CMI" />
      <Meta name="twitter:description" content="SS 321/321H pipe supplier India — stabilized grade, service up to 870°C. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 321 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 321 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 321 Pipe Supplier in India — Titanium Stabilized Stainless Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>SS 321 pipe supplier in India</strong> stocking ASTM A312 TP321/TP321H titanium-stabilized seamless and welded pipes. The titanium addition (Ti ≥ 5×C%) prevents chromium carbide precipitation at grain boundaries, making SS 321 immune to sensitization in the critical 425-870°C temperature range where unstabilized austenitic grades like 304 fail. Ideal for exhaust manifolds, bellows, expansion joints, refinery piping, and heat exchangers. Ready stock in sizes 1/2" to 16" with same-day dispatch from our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 321 Pipe Grades — Ready Stock India</h2>
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
            {label:"Standard",value:"ASTM A312 / SA312 (Pipe) · ASTM A213 / SA213 (Tube)"},
            {label:"Grade",value:"TP321, TP321H (High Carbon for Creep)"},
            {label:"Type",value:"Seamless & Welded (EFW/ERW)"},
            {label:"Size Range",value:"1/2\" to 16\" (15NB to 400NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S, 120, 160"},
            {label:"Max Service Temp",value:"870°C continuous (prevents sensitization 425-870°C)"},
            {label:"Composition",value:"17-19% Cr, 9-12% Ni, Ti ≥ 5×C% (Stabilizer)"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (A262 Practice E), PMI, Solution Annealed"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C available"},
            {label:"Mills",value:"Sandvik, Ratnamani, Tubacex, Sumitomo, imported"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 321 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Automotive:</strong> Exhaust manifolds, flexible bellows, catalytic converter shells</li>
            <li><strong>Aerospace:</strong> Aircraft engine exhaust components, collector rings, combustion chambers</li>
            <li><strong>Refineries:</strong> Process piping in 400-870°C range, crude distillation, catalytic reformers</li>
            <li><strong>Power plants:</strong> Superheater piping, boiler tube connections, HRSG ductwork</li>
            <li><strong>Heat exchangers:</strong> Shell-and-tube exchangers operating above 450°C</li>
            <li><strong>Chemical industry:</strong> Expansion joints, bellows compensators, high-temp ducting</li>
            <li><strong>Petrochemical:</strong> Ethylene and ammonia plant piping, furnace tubes</li>
            <li><strong>Cement industry:</strong> Preheater cyclone piping, kiln hood ductwork</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 321 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> SS 321/321H in common sizes available for immediate dispatch from Vadodara warehouse</li>
          <li><strong>Complete range:</strong> Seamless pipes, welded pipes, tubes, fittings, flanges — all in 321/321H grade</li>
          <li><strong>Mill-direct sourcing:</strong> Supplied from Sandvik, Ratnamani, Tubacex, Sumitomo — no middlemen markup</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), solution annealing certificate, IGC test (A262 Practice E), PMI report</li>
          <li><strong>IBR certified:</strong> IBR Form III-C available for boiler and pressure vessel applications</li>
          <li><strong>Grade expertise:</strong> Technical guidance on 321 vs 321H vs 347 selection based on your operating conditions</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch from Vadodara, 2-5 day delivery across India</li>
          <li><strong>Export capability:</strong> Supply to 50+ countries — UAE, Saudi Arabia, Oman, Kuwait, Qatar, USA, Europe</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 321 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 321/321H Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. Complete MTC documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+321+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-321h-tube-supplier-india", label:"SS 321H Boiler Tube"},
              {href:"/ss-347-pipe-supplier-india", label:"SS 347 Pipe (Nb Stabilized)"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 Pipe (High Temp)"},
              {href:"/ss-304-316l-pipe-supplier-india", label:"SS 304 Pipe (Standard)"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel P91/P22 Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-321-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 321 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
