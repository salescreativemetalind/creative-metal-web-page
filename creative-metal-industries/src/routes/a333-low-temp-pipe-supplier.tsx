/**
 * /a333-low-temp-pipe-supplier
 * Target: "A333 low temp pipe supplier", "ASTM A333 Gr 6 pipe",
 * "cryogenic pipe supplier India", "LNG pipe supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A333 Gr.6", composition:"C-Mn (Charpy -46°C)", sizes:"1/2\" to 24 inch", schedule:"SCH 40–160", apps:"LNG, cryogenic, cold storage", ht:"Normalised / Stress-relieved", stock:"Ready Stock" },
  { grade:"ASTM A333 Gr.1", composition:"C-Mn (Charpy -46°C)", sizes:"1/2\" to 16 inch", schedule:"SCH 40–80", apps:"Low-temp process piping", ht:"Normalised", stock:"Available" },
  { grade:"ASTM A333 Gr.3", composition:"3.5Ni (Charpy -101°C)", sizes:"1/2\" to 12 inch", schedule:"SCH 40–160", apps:"Deep cryogenic service", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A420 WPL6", composition:"C-Mn (Charpy -46°C)", sizes:"1/2\" to 24 inch", schedule:"SCH 40–160", apps:"Low-temp butt-weld fittings", ht:"Normalised", stock:"Ready Stock" },
  { grade:"ASTM A350 LF2", composition:"C-Mn (Charpy -46°C)", sizes:"1/2\" to 24 inch", schedule:"Class 150–2500", apps:"Low-temp forged flanges", ht:"Normalised", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is ASTM A333 Grade 6 low-temperature pipe?", a:"ASTM A333 Grade 6 is a carbon-manganese seamless (or welded) steel pipe specifically designed for service at temperatures down to -46°C (-50°F). The key differentiator from standard carbon steel pipe (A106) is the mandatory Charpy V-notch impact test at -46°C, guaranteeing minimum absorbed energy of 18J (individual) or 20J (average) per ASTM A333 requirements. This ensures the pipe will not suffer brittle fracture at low operating temperatures. Grade 6 is the most commonly used low-temperature carbon steel pipe for LNG facilities, cold storage refrigeration, cryogenic processing and winter-service outdoor installations." },
  { q:"What is the minimum temperature for A333 Gr.6 pipe?", a:"ASTM A333 Grade 6 pipe is impact tested at -46°C (-50°F) and is approved for continuous service at temperatures down to -46°C per ASME B31.3 Process Piping code. For temperatures below -46°C, higher nickel grades are required: Grade 3 (3.5% Ni) for service down to -101°C, or austenitic stainless steel (304L/316L) and nickel alloys for temperatures approaching -196°C (liquid nitrogen). The -46°C rating makes Grade 6 suitable for most LNG regasification piping, propane/butane service, cold storage ammonia piping, and winter outdoor service in extreme climates." },
  { q:"What applications require ASTM A333 low-temperature pipe?", a:"ASTM A333 Grade 6 is required for piping systems operating below -29°C where standard carbon steel (A106/A53) would risk brittle fracture. Key applications include: LNG receiving terminals and regasification piping, liquefied petroleum gas (LPG) storage and distribution, industrial refrigeration systems using ammonia or freon, cold storage facility piping, air separation plants (oxygen/nitrogen), cryogenic process units in petrochemical plants, offshore platforms in cold weather regions, and ethylene plant piping. Any piping system where the minimum design metal temperature (MDMT) falls below -29°C per ASME B31.3 requires impact-tested material." },
  { q:"What testing does A333 Gr.6 pipe undergo beyond standard carbon steel?", a:"Beyond the standard tensile and hydrostatic tests common to all pipe specifications, A333 Grade 6 requires mandatory Charpy V-notch impact testing at -46°C on every heat of material. The minimum absorbed energy is 18J for any individual specimen and 20J average of three specimens (for sub-size specimens, values are proportionally reduced). Additionally, A333 specifies tighter chemical limits than A106 — particularly lower carbon (≤0.30%) and controlled manganese — to ensure good low-temperature toughness. Optional supplementary requirements include 100% ultrasonic examination and additional impact testing at lower temperatures." },
  { q:"Does Creative Metal Industries stock A333 Gr.6 pipe with matching fittings?", a:"Yes, we maintain comprehensive stock of the complete A333 Gr.6 low-temperature piping system: seamless pipe from 1/2 inch to 24 inches in SCH 40 through 160, matching ASTM A420 WPL6 butt-weld fittings (elbows, tees, reducers, caps) in all sizes, ASTM A350 LF2 forged flanges (slip-on, weld-neck, blind) in Class 150 to 2500, and A320 L7 low-temperature fasteners. All components are impact tested at -46°C with certificates confirming Charpy values. Single-source supply ensures material compatibility and simplified documentation for your LNG or cryogenic project." },
  { q:"What is the price difference between A333 Gr.6 and standard A106 Gr.B pipe?", a:"ASTM A333 Grade 6 pipe typically costs 25-40% more than standard A106 Grade B pipe of equivalent size and schedule. The premium reflects the additional cost of controlled chemistry (low carbon, fine grain practice), mandatory normalising heat treatment, Charpy impact testing at -46°C on every heat, and the generally lower production volumes compared to A106. For project quantities (10+ tonnes), we offer competitive pricing with direct mill procurement from ISMT, Maharashtra Seamless and Jindal. We recommend A333 Gr.6 only where the minimum design metal temperature requires it — for temperatures above -29°C, properly specified A106 Gr.B may be acceptable with appropriate engineering review." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/a333-low-temp-pipe-supplier#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Carbon Steel Pipe","item":"https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara"},{"@type":"ListItem","position":3,"name":"A333 Low Temp Pipe Supplier","item":"https://www.creativemetalind.com/a333-low-temp-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function A333LowTempPipeSupplier() {
  return (
    <>
      <Title>A333 Low Temp Pipe Supplier | ASTM A333 Gr.6 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="A333 low temp pipe supplier India — ASTM A333 Gr.6 (C-Mn, Charpy -46°C) seamless pipe for LNG, cryogenic and cold storage." />
      <Link rel="canonical" href="https://www.creativemetalind.com/a333-low-temp-pipe-supplier" />
      <Meta property="og:title" content="A333 Low Temp Pipe Supplier India | ASTM A333 Gr.6 Cryogenic | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A333 Gr.6 low-temp seamless pipe — LNG, cryogenic, cold storage. Charpy -46°C. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/a333-low-temp-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="A333 Low Temp Pipe Supplier | ASTM A333 Gr.6 | Cryogenic | CMI" />
      <Meta name="twitter:description" content="ASTM A333 Gr.6 pipe India — LNG, cryogenic, cold storage. Charpy -46°C. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — A333 Low Temp Pipe Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/carbon-steel-pipe-fittings-vadodara" style={{color:"#E8821A","text-decoration":"none"}}>Carbon Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>A333 Low Temp Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            A333 Low Temperature Pipe Supplier — ASTM A333 Gr.6 (Charpy -46°C)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>ASTM A333 Grade 6 low-temperature pipe supplier</strong> with dedicated stock for LNG terminals, cryogenic processing, cold storage facilities and low-temperature service applications. A333 Gr.6 is impact tested at -46°C, ensuring safe operation without brittle fracture risk in sub-zero environments. We supply the complete low-temp piping system — pipe, fittings (A420 WPL6), flanges (A350 LF2) and fasteners (A320 L7) — all impact tested with matching Charpy certificates. Ready stock 1/2" to 24", SCH 40 to 160.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A333 Low-Temperature Pipe & Related Products — Stock List</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A333 Gr.6 Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A333 / ASME SA333 (Low-Temp Pipe)"},
            {label:"Grade",value:"Grade 6 (C-Mn, most common) — Impact at -46°C"},
            {label:"Type",value:"Seamless carbon steel pipe (normalised)"},
            {label:"Size Range",value:"1/2\" to 24 inch (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 160"},
            {label:"Min Service Temp",value:"-46°C (-50°F) per ASME B31.3"},
            {label:"Impact Requirement",value:"Charpy V-notch at -46°C: ≥18J (individual), ≥20J (avg)"},
            {label:"Heat Treatment",value:"Normalised (fine grain practice)"},
            {label:"Testing",value:"Hydrostatic, Tensile, Charpy Impact, Flattening"},
            {label:"Mills",value:"ISMT, Maharashtra Seamless, Jindal, Bao Steel"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A333 Gr.6 Low-Temp Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"LNG Terminals & Regasification",desc:"A333 Gr.6 pipe for LNG receiving, storage and regasification piping at temperatures down to -46°C"},
            {title:"LPG Storage & Distribution",desc:"Liquefied petroleum gas (propane/butane) storage bullets, terminal piping and distribution systems"},
            {title:"Industrial Refrigeration",desc:"Ammonia and freon refrigeration system piping in cold storage, food processing and pharmaceutical plants"},
            {title:"Air Separation Plants",desc:"Process piping in air separation units producing liquid oxygen, nitrogen and argon at cryogenic temperatures"},
            {title:"Ethylene & Petrochemical",desc:"Low-temperature piping in ethylene crackers, cold boxes and refrigeration loops in petrochemical complexes"},
            {title:"Cold Climate Installations",desc:"Outdoor piping in extreme cold environments where minimum ambient temperatures require impact-tested material"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy A333 Low-Temp Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Complete low-temp system:</strong> Pipe (A333 Gr.6) + fittings (A420 WPL6) + flanges (A350 LF2) + bolts (A320 L7) — all impact tested</li>
          <li><strong>Charpy certified:</strong> Every pipe supplied with Charpy impact test certificates at -46°C confirming low-temperature toughness</li>
          <li><strong>LNG project experience:</strong> Supplied to major LNG terminal and regasification projects across India</li>
          <li><strong>Premium mills:</strong> ISMT, Maharashtra Seamless, Jindal — original MTC per EN 10204 3.1/3.2 with full traceability</li>
          <li><strong>Ready stock:</strong> Sizes 1/2 inch to 24" in SCH 40 through 160 available for immediate dispatch from Vadodara</li>
          <li><strong>Technical support:</strong> Guidance on MDMT calculations, impact test requirements and grade selection (Gr.6 vs Gr.3)</li>
          <li><strong>Competitive pricing:</strong> 25-30% savings over international procurement. Formal quotation within 4 hours</li>
          <li><strong>Fast delivery:</strong> Stock sizes dispatched within 24 hours. Pan-India delivery network for LNG/petrochemical project sites</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — A333 Low-Temperature Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need A333 Low-Temp Pipe? Get Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A333 Gr.6. Charpy -46°C. Sizes 1/2 inch to 24". Complete system with fittings & flanges. Ready stock India.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote →</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/a106-gr-b-seamless-pipe-india",label:"A106 Gr.B Seamless Pipe India"},
            {href:"/a53-erw-pipe-supplier-india",label:"A53 ERW Pipe Supplier India"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe & Fittings"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/a333-low-temp-pipe-supplier" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — A333 Low Temp Pipe Supplier India | ASTM A333 Gr.6 | LNG, Cryogenic | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
