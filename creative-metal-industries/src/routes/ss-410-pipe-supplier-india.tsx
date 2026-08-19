/**
 * /ss-410-pipe-supplier-india
 * Target: "SS 410 martensitic pipe supplier India", "SS 410 pipe",
 * "stainless steel 410 seamless pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 410 (TP410)", composition: "13Cr (Martensitic)", sizes: "1/2\" to 8\"", schedule: "SCH 40–80", apps: "Valve stems, pump shafts, fasteners", ht: "Annealed / Hardened & Tempered", stock: "Ready Stock" },
  { grade: "SS 410S", composition: "13Cr (Low C ≤0.08%)", sizes: "1/2\" to 6\"", schedule: "SCH 40–80", apps: "Petrochemical trays, quench screens", ht: "Annealed", stock: "Ready Stock" },
  { grade: "SS 410 (ASTM A268)", composition: "11.5-13.5% Cr", sizes: "1/2\" to 8\"", schedule: "SCH 40–80", apps: "Steam turbine blades, springs, cutlery", ht: "Hardened & Tempered 200-600°C", stock: "Available" },
  { grade: "SS 410 Welded", composition: "13Cr Martensitic", sizes: "1\" to 8\"", schedule: "SCH 40–80", apps: "Heat exchangers, general structural tubing", ht: "Stress Relieved / Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between SS 410 and SS 304?", a: "SS 410 is a martensitic stainless steel with 13% chromium and no nickel, designed for high strength and hardness through heat treatment. SS 304 is an austenitic grade with 18% chromium and 8% nickel, offering superior corrosion resistance but lower strength. SS 410 is magnetic, hardenable, and costs less than 304 due to the absence of nickel. Choose 410 when strength and wear resistance matter more than corrosion resistance. Creative Metal Industries stocks both grades for different application needs." },
  { q: "Can SS 410 pipe be heat treated for higher hardness?", a: "Yes, SS 410 is one of the few stainless steels that can be hardened by heat treatment. It is austenitized at 925-1010°C, then oil or air quenched, followed by tempering at 200-600°C depending on the desired hardness-toughness combination. Tempering at 200-300°C gives maximum hardness (~40 HRC) while 550-600°C gives better toughness with moderate hardness (~25-30 HRC). Avoid tempering in the 425-500°C range due to temper embrittlement. CMI supplies SS 410 pipe in annealed or hardened-and-tempered conditions." },
  { q: "Is SS 410 weldable? What precautions are needed?", a: "SS 410 is weldable but requires special precautions. Pre-heat to 150-260°C before welding to prevent hydrogen-induced cracking. Use matching 410 or 309L filler metal. Post-weld heat treatment (PWHT) at 650-750°C is essential to temper the martensite formed in the heat-affected zone and restore toughness. Without PWHT, the weld zone becomes brittle and prone to cracking. Creative Metal Industries can advise on welding procedures and supply matching consumables." },
  { q: "What are the main applications of SS 410 pipe in India?", a: "SS 410 pipe is widely used in applications requiring moderate corrosion resistance with high strength: valve stems and pump shafts, turbine blades and buckets, cutlery and knife blades, springs and fasteners, petroleum refinery equipment, steam turbine components, and mining equipment. In India, major demand comes from power plants, oil refineries, pump manufacturers, and valve fabricators. CMI supplies from Vadodara to all industrial centres." },
  { q: "What is the price of SS 410 pipe per kg in India?", a: "SS 410 pipe prices range from Rs 200-400 per kg depending on size, schedule, heat treatment condition, and quantity. SS 410 is one of the most economical stainless steels because it contains no nickel — only 13% chromium. Prices are typically 40-50% lower than SS 304. For exact pricing and availability, contact Creative Metal Industries at +91 99982 80619. We offer competitive mill-direct rates with ready stock from Vadodara." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-410-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 410 Pipe Supplier India","item":"https://www.creativemetalind.com/ss-410-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss410PipeSupplierIndia() {
  return (
    <>
      <Title>SS 410 Pipe Supplier India | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 410 martensitic pipe supplier India — ASTM A268 TP410 seamless & welded pipes. Hardenable stainless steel up to 650°C. Sizes 1/2&quot; to 8&quot;." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-410-pipe-supplier-india" />
      <Meta property="og:title" content="SS 410 Martensitic Pipe Supplier India | High Strength Stainless Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 410 martensitic pipe supplier India — hardenable stainless steel for valve stems, pump shafts, turbine blades. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-410-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 410 Pipe Supplier India | Martensitic | CMI" />
      <Meta name="twitter:description" content="SS 410 martensitic pipe supplier India — hardenable, high strength. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 410 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 410 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 410 Martensitic Pipe Supplier in India
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>SS 410 martensitic pipe supplier in India</strong> stocking ASTM A268 TP410 and ASTM A240 Type 410 seamless and welded pipes for high-strength applications. SS 410 is a hardenable martensitic stainless steel with 13% chromium — the only stainless steel that can achieve hardness up to 40 HRC through heat treatment. Ideal for valve stems, pump shafts, turbine blades, fasteners, and springs where high strength with moderate corrosion resistance is required. Ready stock in sizes 1/2" to 8" NB, SCH 40 to SCH 80 at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 410 Pipe Grades — Ready Stock India</h2>
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
            {label:"Standard",value:"ASTM A268 / SA268 (Pipe) · ASTM A240 Type 410 (Plate/Sheet)"},
            {label:"Grade",value:"TP410, 410S, AISI 410"},
            {label:"Type",value:"Seamless & Welded"},
            {label:"Size Range",value:"1/2\" to 8\" (15NB to 200NB)"},
            {label:"Schedules",value:"SCH 40, SCH 80"},
            {label:"Max Service Temp",value:"Up to 650°C (depending on temper condition)"},
            {label:"Composition",value:"11.5-13.5% Cr, ≤0.15% C, ≤1.0% Mn, ≤0.75% Ni"},
            {label:"Mechanical Properties",value:"UTS 450-700 MPa · YS 205-550 MPa · Hardness up to 40 HRC"},
            {label:"Testing",value:"Hydrostatic, UT, Hardness, PMI, Flattening Test"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, Heat Treatment Certificate"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 410 Martensitic Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Valve industry:</strong> Valve stems, gate valve bodies, globe valve internals, ball valve seats</li>
            <li><strong>Pump manufacturing:</strong> Pump shafts, impellers, wear rings, mechanical seal components</li>
            <li><strong>Power generation:</strong> Steam turbine blades, turbine buckets, nozzle rings, diaphragms</li>
            <li><strong>Oil & gas:</strong> Downhole tools, sucker rods, flow control equipment</li>
            <li><strong>Automotive:</strong> Exhaust system components, bolts, screws, springs</li>
            <li><strong>Cutlery & tools:</strong> Knife blades, scissors, surgical instruments</li>
            <li><strong>Fasteners:</strong> High-strength bolts, studs, nuts for moderate corrosion environments</li>
            <li><strong>Mining:</strong> Wear-resistant components, screening equipment, crusher parts</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 410 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> SS 410 pipe in common sizes available for immediate dispatch from Vadodara</li>
          <li><strong>Multiple conditions:</strong> Available in annealed, hardened & tempered, or stress-relieved conditions per your requirement</li>
          <li><strong>Competitive pricing:</strong> SS 410 costs 40-50% less than austenitic grades — no nickel content means lower material cost</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), heat treatment certificate, hardness report, PMI certificate</li>
          <li><strong>Technical support:</strong> Grade selection guidance — 410 vs 410S vs 420 vs 431 for your application</li>
          <li><strong>Welding guidance:</strong> Pre-heat and PWHT recommendations, filler metal selection assistance</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch, 2-5 day delivery to any location in India</li>
          <li><strong>Export capability:</strong> Supply to 50+ countries with proper packaging and documentation</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 410 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 410 Martensitic Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. Complete MTC documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+410+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-430-sheet-supplier-india", label:"SS 430 Ferritic Sheet"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 High Temp Pipe"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe (Acid Resistant)"},
              {href:"/duplex-2205-plate-supplier-india", label:"Duplex 2205 Plate"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel P91/P22 Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-410-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 410 Martensitic Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
