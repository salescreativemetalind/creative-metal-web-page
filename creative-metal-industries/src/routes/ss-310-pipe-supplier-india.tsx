/**
 * /ss-310-pipe-supplier-india
 * Target: "SS 310 pipe supplier India", "SS 310S high temperature pipe",
 * "stainless steel 310 seamless pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 310 (TP310)", composition: "25Cr-20Ni", sizes: "1/2\" to 24\"", schedule: "SCH 5S–80S", apps: "Furnace parts, heat treatment baskets, radiant tubes", ht: "Solution Annealed 1040-1100°C", stock: "Ready Stock" },
  { grade: "SS 310S (TP310S)", composition: "25Cr-20Ni (Low C ≤0.08%)", sizes: "1/2\" to 16\"", schedule: "SCH 5S–80S", apps: "Kiln rollers, thermal oxidizers, incinerators", ht: "Solution Annealed", stock: "Ready Stock" },
  { grade: "SS 310H (TP310H)", composition: "25Cr-20Ni (High C 0.04-0.10%)", sizes: "1/2\" to 12\"", schedule: "SCH 10S–80S", apps: "High-temp creep service above 600°C", ht: "Solution Annealed", stock: "Available" },
  { grade: "SS 310MoLN", composition: "25Cr-22Ni-2Mo-N", sizes: "1/2\" to 8\"", schedule: "SCH 10S–40S", apps: "FGD systems, wet scrubbers, urea plants", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is the maximum temperature for SS 310/310S pipe?", a: "SS 310/310S can operate continuously up to 1050°C and intermittently up to 1100°C in oxidizing atmospheres. This is significantly higher than SS 304 (870°C) and SS 321 (870°C). The high chromium (25%) and nickel (20%) content provides excellent oxidation resistance and creep strength at elevated temperatures. Creative Metal Industries stocks SS 310/310S pipes for furnace and heat treatment applications across India." },
  { q: "What is the difference between SS 310, 310S and 310H?", a: "SS 310 is the standard grade (0.25C max). SS 310S has lower carbon (≤0.08%) for better weldability and resistance to intergranular corrosion. SS 310H has controlled higher carbon (0.04-0.10%) for superior creep strength above 600°C. For welded fabrication, specify 310S. For non-welded high-temperature creep service, 310H is preferred. CMI stocks all three variants." },
  { q: "What sizes of SS 310 pipe do you stock?", a: "We stock SS 310/310S seamless and welded pipes from 1/2 inch (15NB) to 24 inches (600NB) in schedules SCH 5S, 10S, 20S, 40S, and 80S per ASTM A312 TP310S. Standard lengths 5-7 metres (random). Fixed length and cut-to-length available on request. For tube sizes (ASTM A213 TP310S), we stock OD 12.7mm to 114.3mm." },
  { q: "Which industries use SS 310 pipe in India?", a: "SS 310/310S pipes are used in: cement kilns and rotary furnaces, heat treatment baskets and fixtures, radiant tubes in annealing furnaces, thermal oxidizers and incinerators, glass manufacturing, ceramic industry kilns, steel plant reheating furnaces, and petrochemical ethylene cracker radiant coils. CMI supplies to all these industries from our Vadodara stock." },
  { q: "What is the price of SS 310 pipe per kg in India?", a: "SS 310/310S pipe prices range from Rs 500-1200 per kg depending on size, schedule, and quantity. SS 310 is more expensive than 304/316L due to higher nickel content (20% vs 8-10%). For accurate pricing, contact Creative Metal Industries at +91 99982 80619. We offer competitive rates with direct mill sourcing from Sandvik, Ratnamani, and imported mills." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 310 Seamless Pipe","description":"SS 310/310S/310H seamless and welded pipes per ASTM A312. High temperature service up to 1100°C. Sizes 1/2\" to 24\". Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"500","highPrice":"12000","offerCount":"600+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"34","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 310 Pipe Supplier India","item":"https://www.creativemetalind.com/ss-310-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss310PipeSupplierIndia() {
  return (
    <>
      <Title>SS 310 Pipe Supplier India | High Temperature | 310S | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 310 pipe supplier India — ASTM A312 TP310S seamless & welded pipes for high temperature furnace service up to 1100°C. Sizes 1/2\" to 24\". Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-310-pipe-supplier-india" />
      <Meta property="og:title" content="SS 310 Pipe Supplier India | High Temperature Stainless Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 310/310S pipe supplier India — high temperature service up to 1100°C. ASTM A312. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-310-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 310 Pipe Supplier India | High Temperature | CMI" />
      <Meta name="twitter:description" content="SS 310/310S pipe supplier India — furnace grade, up to 1100°C. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 310 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 310 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 310 Pipe Supplier in India — High Temperature Stainless Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SS 310 pipe supplier</strong> stocking ASTM A312 TP310/310S/310H seamless and welded pipes for high temperature furnace and heat treatment applications. With 25% chromium and 20% nickel, SS 310 offers exceptional oxidation resistance up to 1100°C — significantly outperforming SS 304 and 316L at elevated temperatures. Ready stock in sizes 1/2" to 24" at our Vadodara warehouse with same-day dispatch across India.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 310 Pipe Grades — Ready Stock India</h2>
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
            {label:"Grade",value:"TP310, TP310S, TP310H, TP310MoLN"},
            {label:"Type",value:"Seamless & Welded (EFW/ERW)"},
            {label:"Size Range",value:"1/2\" to 24\" (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 5S, 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"1050°C continuous / 1100°C intermittent"},
            {label:"Composition",value:"24-26% Cr, 19-22% Ni, ≤0.25% C (310)"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (A262), PMI, Solution Annealed"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C available"},
            {label:"Mills",value:"Sandvik, Ratnamani, Tubacex, Salzgitter, imported"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 310/310S Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Cement industry:</strong> Kiln shells, preheater cyclones, cooler grate plates</li>
            <li><strong>Heat treatment:</strong> Furnace muffles, retorts, radiant tubes, baskets, fixtures</li>
            <li><strong>Steel plants:</strong> Reheating furnace components, roller hearth furnaces</li>
            <li><strong>Petrochemical:</strong> Ethylene cracker radiant coils, reformer pigtails</li>
            <li><strong>Glass industry:</strong> Melting tank components, lehr rollers</li>
            <li><strong>Thermal oxidizers:</strong> Combustion chambers, waste incinerators</li>
            <li><strong>Flue gas:</strong> FGD ducting (310MoLN variant for wet environments)</li>
            <li><strong>Power plants:</strong> Burner nozzles, flame shields, ash handling systems</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 310 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> SS 310/310S in common sizes available for immediate dispatch from Vadodara</li>
          <li><strong>Complete range:</strong> Seamless pipe, welded pipe, tubes, sheets, plates, fittings — all in 310/310S</li>
          <li><strong>Mill-direct:</strong> Sourced from Sandvik, Ratnamani, Tubacex, Salzgitter — no middlemen</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), solution annealing certificate, IGC test report, PMI</li>
          <li><strong>IBR available:</strong> IBR Form III-C for boiler and pressure vessel applications</li>
          <li><strong>Technical expertise:</strong> Grade selection assistance — 310 vs 310S vs 310H for your service conditions</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch, 2-5 day delivery anywhere in India</li>
          <li><strong>Export:</strong> Supply to 50+ countries — UAE, Saudi Arabia, Oman, Kuwait, USA</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 310 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 310/310S Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. Complete MTC documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+310+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-310s-plate-supplier-india", label:"SS 310S Plate Supplier"},
              {href:"/ss-321-pipe-supplier-india", label:"SS 321 Pipe (Stabilized)"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe (Acid Resistant)"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel P91/P22 Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2205/2507 Supplier"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-310-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 310 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
