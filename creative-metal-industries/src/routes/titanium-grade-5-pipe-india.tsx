/**
 * /titanium-grade-5-pipe-india
 * Target: "Titanium Grade 5 pipe India", "Ti-6Al-4V pipe supplier",
 * "UNS R56400 titanium pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Ti Gr.5 Seamless Pipe (B861)", composition: "Ti-6Al-4V", sizes: "1/2\" to 6\" NB", schedule: "SCH 10S–80S", apps: "Aerospace/defense/marine", ht: "Annealed 700-790°C", stock: "Ready Stock" },
  { grade: "Ti Gr.5 Round Bar (B348)", composition: "UNS R56400", sizes: "6mm to 200mm dia", schedule: "H13/H14 tolerance", apps: "Structural/medical/motorsport", ht: "Solution Treated + Aged", stock: "Ready Stock" },
  { grade: "Ti Gr.5 Welded Tube (B862)", composition: "Ti-6Al-4V", sizes: "OD 25–114.3mm", schedule: "Various WT", apps: "Heat exchangers/high-stress", ht: "Stress Relieved", stock: "Available" },
  { grade: "Ti Gr.5 Fittings (B363)", composition: "R56400", sizes: "1/2\" to 6\" NB", schedule: "SCH 10S–80S", apps: "Complete titanium piping", ht: "Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is Titanium Grade 5 and why is Ti-6Al-4V so widely used?", a: "Titanium Grade 5 (UNS R56400) is an alpha-beta titanium alloy containing 6% aluminium and 4% vanadium, making it the most widely used titanium alloy accounting for over 50% of all titanium alloy production globally. The Ti-6Al-4V composition provides an exceptional combination of high strength (minimum 828 MPa tensile, 760 MPa yield), low density (4.43 g/cm³ — nearly half of steel), excellent fatigue life, and good corrosion resistance. These properties make it the default choice for aerospace structural components, gas turbine engine parts, medical implants, and high-performance motorsport applications where strength-to-weight ratio is the primary design driver." },
  { q: "What is the difference between Titanium Grade 2 and Grade 5?", a: "Titanium Grade 2 (R50400) is commercially pure titanium with 99.2% Ti content offering moderate strength (345 MPa yield) with excellent corrosion resistance and formability — ideal for chemical processing and seawater applications. Titanium Grade 5 (R56400) is an alloy with 6% Al and 4% V additions that more than doubles the strength (760 MPa yield) while maintaining good corrosion resistance, though it sacrifices some formability and weldability. Grade 5 is chosen when high strength-to-weight ratio is critical such as in aerospace, defense, medical implants, and motorsport, whereas Grade 2 is preferred for corrosion-driven applications like desalination, chemical plants, and heat exchangers where strength requirements are moderate." },
  { q: "Why is Titanium Grade 5 used in medical and aerospace applications?", a: "In aerospace, Ti-6Al-4V is used for airframe structures, landing gear components, engine compressor blades, and fasteners because it provides steel-equivalent strength at 45% lower weight, withstands temperatures up to 400°C, and resists fatigue in high-cycle vibratory environments. In medical applications, Grade 5 ELI (Extra Low Interstitials) is used for hip and knee replacement implants, spinal fixation devices, dental implants, and bone screws because of its proven biocompatibility, osseointegration capability, corrosion resistance in body fluids, and elastic modulus closer to bone than stainless steel or cobalt-chrome alloys. The combination of high strength, low weight, and biocompatibility makes it irreplaceable in both these critical sectors." },
  { q: "What sizes of Titanium Grade 5 pipe and bar does CMI supply?", a: "Creative Metal Industries stocks Titanium Grade 5 seamless pipes per ASTM B861 from 1/2 inch to 6 inches NB in schedules SCH 10S, 20S, 40S, and 80S in standard lengths of 4 to 6 metres. Round bars per ASTM B348 are available from 6mm to 200mm diameter in H13 and H14 tolerance grades, supplied in solution treated and aged condition for maximum strength. Welded tubes per ASTM B862 are stocked in OD range 25mm to 114.3mm with various wall thicknesses. All material is supplied with complete mill test certification per EN 10204 3.1 including chemical analysis, mechanical properties (tensile, yield, elongation), microstructure verification, and positive material identification (PMI)." },
  { q: "What are the challenges of welding Ti-6Al-4V Grade 5?", a: "Welding Titanium Grade 5 is significantly more challenging than welding commercially pure grades due to its sensitivity to contamination and tendency toward embrittlement. Ti-6Al-4V requires complete inert gas shielding (argon 99.995% minimum) using trailing shields, backing gas, and enclosed chambers for critical welds to prevent oxygen, nitrogen, and hydrogen pickup above 500°C which causes severe embrittlement and loss of fatigue life. The alloy is prone to formation of hard, brittle martensite in the fusion zone during rapid cooling, necessitating controlled heat input and often post-weld stress relief at 595–650°C for 1–4 hours. Pre-weld joint preparation must be immaculate — only stainless steel brushes, acetone cleaning, and no contact with carbon steel. ERTi-5 filler wire per AWS A5.16 is used, though ERTi-2 may be specified for improved ductility in the weld." },
  { q: "What is the price range for Titanium Grade 5 pipe in India?", a: "Titanium Grade 5 (Ti-6Al-4V) pipe and bar pricing in India typically ranges from Rs 5,000 to Rs 15,000 per kilogram depending on product form, size, heat treatment condition, and order quantity. Seamless pipes per ASTM B861 and round bars per ASTM B348 in solution treated and aged condition command premium pricing due to complex manufacturing involving vacuum arc remelting, forging, and multi-step heat treatment. Grade 5 is approximately 40-60% more expensive than Grade 2 due to the additional alloying elements (aluminium, vanadium) and stricter processing requirements. Creative Metal Industries offers competitive pricing with ready stock availability from our Vadodara warehouse — contact +91 99982 80619 for current rates and project quotations." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/titanium-grade-5-pipe-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Titanium Grade 5 Pipe India","item":"https://www.creativemetalind.com/titanium-grade-5-pipe-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function TitaniumGrade5PipeIndia() {
  return (
    <>
      <Title>Titanium Grade 5 Pipe Supplier India | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Titanium Grade 5 pipe supplier India — ASTM B861 Ti-6Al-4V (UNS R56400) seamless pipes & B348 round bars. Aerospace, medical, defense, motorsport." />
      <Link rel="canonical" href="https://www.creativemetalind.com/titanium-grade-5-pipe-india" />
      <Meta property="og:title" content="Titanium Grade 5 Pipe India | Ti-6Al-4V R56400 | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Titanium Grade 5 pipe supplier India — Ti-6Al-4V high-strength titanium for aerospace, medical, defense. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/titanium-grade-5-pipe-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Titanium Grade 5 Pipe India | Ti-6Al-4V | CMI" />
      <Meta name="twitter:description" content="Titanium Grade 5 pipe India — Ti-6Al-4V high strength. Aerospace & medical grade. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Titanium Grade 5 Pipe India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Titanium Grade 5 Pipe India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Titanium Grade 5 Pipe Supplier in India — Ti-6Al-4V (R56400)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a trusted <strong>Titanium Grade 5 pipe and bar supplier in India</strong> stocking ASTM B861 seamless pipes and ASTM B348 round bars in Ti-6Al-4V (UNS R56400) — the world's most widely used titanium alloy. With 90% titanium, 6% aluminium, and 4% vanadium, Grade 5 delivers exceptional strength-to-weight ratio (828 MPa tensile at just 4.43 g/cm³ density), excellent fatigue resistance, and service temperatures up to 400°C. The primary choice for aerospace structural components, medical implants, defense systems, high-performance motorsport, and marine applications demanding maximum strength with minimum weight. Ready stock pipe sizes 1/2" to 6" NB and round bars 6–200mm from our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Titanium Grade 5 Pipe & Bar Grades — Ready Stock India</h2>
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
            {label:"Standard (Pipe)",value:"ASTM B861 / SB861"},
            {label:"Standard (Bar)",value:"ASTM B348 / SB348"},
            {label:"Grade",value:"Titanium Grade 5 (UNS R56400)"},
            {label:"Type",value:"Seamless Pipe, Welded Tube, Round Bar"},
            {label:"Pipe Size Range",value:"1/2\" to 6\" NB (15NB to 150NB)"},
            {label:"Bar Size Range",value:"6mm to 200mm diameter"},
            {label:"Max Service Temp",value:"Up to 400°C (continuous)"},
            {label:"Composition",value:"90% Ti, 5.5–6.75% Al, 3.5–4.5% V, 0.25% Fe max"},
            {label:"Testing",value:"Ultrasonic, Tensile, Impact, Microstructure, PMI"},
            {label:"Heat Treatment",value:"Annealed / Solution Treated + Aged (STA)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Titanium Grade 5 Pipe & Bar in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Aerospace:</strong> Airframe structural members, landing gear components, engine compressor blades, fasteners, hydraulic tubing</li>
            <li><strong>Marine:</strong> Submarine pressure hulls, propeller shafts, deep-sea equipment, naval vessel structural components</li>
            <li><strong>Medical implants:</strong> Hip and knee joint replacements, spinal fixation rods, dental implants, bone screws, surgical instruments</li>
            <li><strong>High-strength structural:</strong> Pressure vessels, spring elements, high-stress fasteners, cryogenic components</li>
            <li><strong>Motorsport:</strong> Connecting rods, valves, exhaust systems, suspension components, wheel studs, roll cage elements</li>
            <li><strong>Defense:</strong> Armour plating, ballistic protection systems, missile components, military vehicle structural parts</li>
            <li><strong>Oil and gas:</strong> Downhole tools, drill string components, subsea risers, high-pressure high-temperature equipment</li>
            <li><strong>Power generation:</strong> Steam turbine blades, compressor discs, generator components for high-temperature service</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Titanium Grade 5 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Aerospace-grade stockist:</strong> One of India's leading Ti-6Al-4V stockists with Grade 5 pipe and bar inventory for immediate dispatch</li>
          <li><strong>Premium mill sources:</strong> Material from VSMPO-AVISMA, Baoji Titanium, TIMET, and other internationally approved titanium producers with full traceability</li>
          <li><strong>Grade and temper guidance:</strong> Technical support for selecting between annealed vs STA condition, Grade 5 vs Grade 5 ELI, and application-specific requirements</li>
          <li><strong>Full documentation:</strong> Mill test certificate per EN 10204 3.1, chemical analysis, mechanical properties, ultrasonic test, microstructure, and PMI verification</li>
          <li><strong>Custom processing:</strong> Cut-to-length, machining blanks, precision cutting, end preparation, and heat treatment services available</li>
          <li><strong>Complete product range:</strong> Pipes, bars, tubes, fittings, flanges, sheets, plates, and forgings in Grade 5 titanium from a single source</li>
          <li><strong>Medical and defense compliance:</strong> Material conforming to AMS 4928, AMS 4911, ASTM F136 (ELI) for medical, and MIL specifications for defense</li>
          <li><strong>Pan-India + export:</strong> Serving aerospace, medical, defense, and motorsport projects across India and internationally from Vadodara warehouse</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Titanium Grade 5 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Titanium Grade 5 Pipes or Bars? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B861/B348 Ti-6Al-4V R56400. Aerospace & medical grade. Full mill certificates.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Titanium+Grade+5+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/titanium-grade-2-pipe-india", label:"Titanium Grade 2 Pipe"},
              {href:"/inconel-718-supplier-india", label:"Inconel 718 Supplier"},
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Supplier"},
              {href:"/monel-400-pipe-supplier-india", label:"Monel 400 Pipe"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/titanium-grade-5-pipe-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Titanium Grade 5 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
