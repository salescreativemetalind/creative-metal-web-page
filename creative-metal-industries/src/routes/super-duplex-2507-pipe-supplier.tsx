/**
 * /super-duplex-2507-pipe-supplier
 * Target: "Super Duplex 2507 pipe stockist India", "S32750 pipe supplier",
 * "super duplex seamless pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Super Duplex 2507 (S32750)", composition: "25Cr-7Ni-4Mo-0.27N", sizes: "1/2\" to 12\"", schedule: "SCH 10S–160", apps: "Offshore oil & gas, subsea pipelines, desalination", ht: "Solution Annealed 1025-1125°C + WQ", stock: "Ready Stock" },
  { grade: "Super Duplex 2507 Seamless", composition: "25Cr-7Ni-4Mo-0.27N", sizes: "1/2\" to 8\"", schedule: "SCH 40S–160", apps: "Subsea flowlines, chemical injection tubing", ht: "Solution Annealed + Water Quenched", stock: "Ready Stock" },
  { grade: "Super Duplex 2507 Welded", composition: "25Cr-7Ni-4Mo-0.27N", sizes: "2\" to 12\"", schedule: "SCH 10S–80S", apps: "Seawater cooling, FGD ducting, chloride service", ht: "Solution Annealed 1080°C + WQ", stock: "Available" },
  { grade: "Super Duplex 2507 (ASTM A790)", composition: "25Cr-7Ni-4Mo-0.27N", sizes: "1/2\" to 10\"", schedule: "SCH 10S–120", apps: "Chloride-rich chemical processing, pulp & paper", ht: "SA + Impact Tested -46°C", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Super Duplex 2507 and Duplex 2205 pipe?", a: "Super Duplex 2507 has a PREN of ~42 versus ~35 for Duplex 2205, meaning significantly higher pitting and crevice corrosion resistance. The 2507 grade has higher chromium (25% vs 22%), more molybdenum (4% vs 3%), and higher nitrogen (0.27% vs 0.17%). Yield strength of 2507 is ~550 MPa compared to ~450 MPa for 2205. However, 2507 is approximately 30-40% more expensive and slightly harder to weld. Choose 2507 when service conditions involve seawater, high chloride, or aggressive FGD environments." },
  { q: "What is the maximum service temperature for Super Duplex 2507 pipe?", a: "Super Duplex 2507 should not be used above 300°C for continuous service. Like all duplex grades, it is susceptible to 475°C embrittlement — prolonged exposure between 300-550°C causes spinodal decomposition of the ferrite phase into chromium-rich alpha-prime. Even short excursions above 300°C can reduce impact toughness. For temperatures above 300°C, consider austenitic alternatives like SS 904L or Inconel 625. Below 300°C, Super Duplex 2507 provides unmatched strength and corrosion resistance." },
  { q: "How is Super Duplex 2507 pipe welded?", a: "Welding Super Duplex 2507 requires strict heat input control between 0.5-1.5 kJ/mm — tighter than Duplex 2205. Use over-alloyed filler metal AWS ER2594 (25.10.4L) or matching 2507 filler. Interpass temperature must not exceed 150°C. Shielding gas should contain nitrogen (Ar + 2% N₂) to prevent nitrogen loss. Target weld ferrite content is 35-65% verified by ferrite scope. No preheating required but maintain minimum interpass of 3°C. Post-weld solution annealing is recommended for critical subsea applications." },
  { q: "What sizes of Super Duplex 2507 pipe are available?", a: "Creative Metal Industries stocks Super Duplex 2507 seamless pipe from 1/2 inch to 8 inches (15NB to 200NB) in schedules SCH 10S, 40S, 80S, 120, and 160 per ASTM A790. Welded pipe available from 2 inches to 12 inches in SCH 10S to 80S. Standard lengths 5-7 metres random. Fixed length and cut-to-size available. For tubing (ASTM A789), we stock OD 6.35mm to 114.3mm in various wall thicknesses." },
  { q: "What is the price range for Super Duplex 2507 pipe in India?", a: "Super Duplex 2507 pipe prices typically range from Rs 2500-6000 per kg depending on size, schedule, seamless vs welded, and quantity ordered. 2507 is 30-40% costlier than Duplex 2205 and roughly 3-4x the price of SS 316L due to higher alloy content. For competitive pricing, contact Creative Metal Industries at +91 99982 80619. We source directly from Sandvik, Salzgitter, Tubacex, and other approved mills." },
  { q: "What testing is done on Super Duplex 2507 pipe?", a: "All Super Duplex 2507 pipes undergo: hydrostatic testing per ASTM A790, ultrasonic testing (UT) for seamless pipes, ferrite content measurement (35-65%), impact testing at -46°C (Charpy V-notch), corrosion testing per ASTM A923 Method C, intergranular corrosion test (ASTM A262 Practice E), and PMI verification. Mill test certificates per EN 10204 3.1/3.2 supplied with every lot. Creative Metal Industries ensures complete traceability from mill to delivery." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/super-duplex-2507-pipe-supplier#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Super Duplex 2507 Pipe Supplier India","item":"https://www.creativemetalind.com/super-duplex-2507-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SuperDuplex2507PipeSupplier() {
  return (
    <>
      <Title>Super Duplex 2507 Pipe Stockist India | S32750 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Super Duplex 2507 pipe stockist India — ASTM A790 UNS S32750 seamless & welded. PREN ~42, 550 MPa yield. Sizes 1/2&quot; to 12&quot;. Ready stock Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/super-duplex-2507-pipe-supplier" />
      <Meta property="og:title" content="Super Duplex 2507 Pipe Stockist India | S32750 ASTM A790 | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Super Duplex 2507 pipe stockist India — PREN ~42, superior to 2205. Seamless & welded. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/super-duplex-2507-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Super Duplex 2507 Pipe Stockist India | S32750 | CMI" />
      <Meta name="twitter:description" content="Super Duplex 2507 pipe stockist India — PREN ~42, offshore grade. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Super Duplex 2507 Pipe Stockist India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Super Duplex 2507 Pipe Stockist India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Super Duplex 2507 Pipe Stockist in India — S32750
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>Super Duplex 2507 pipe stockist in India</strong> supplying ASTM A790 UNS S32750 seamless and welded pipes for offshore oil &amp; gas, subsea pipelines, and desalination plants. With a composition of 25Cr-7Ni-4Mo-0.27N and PREN of ~42, Super Duplex 2507 delivers superior pitting and crevice corrosion resistance compared to standard Duplex 2205 (PREN ~35). As a specialist <strong>super duplex pipe supplier</strong> and <strong>Super Duplex 2507 supplier</strong>, we maintain ready stock of super duplex pipe in sizes 1/2" to 12" NB, SCH 10S to SCH 160, with same-day dispatch from our Vadodara warehouse across India.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Super Duplex 2507 Pipe Grades — Ready Stock India</h2>
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
            {label:"Standard",value:"ASTM A790 / SA790 (Pipe) · ASTM A789 / SA789 (Tube)"},
            {label:"Grade",value:"UNS S32750, NORSOK MDS D56/D57"},
            {label:"Type",value:"Seamless & Welded (EFW/SAW)"},
            {label:"Size Range",value:"1/2\" to 12\" (15NB to 300NB)"},
            {label:"Schedules",value:"SCH 10S, 40S, 80S, 120, 160"},
            {label:"PREN",value:"~42 (Cr + 3.3×Mo + 16×N = 25 + 13.2 + 4.3)"},
            {label:"Yield Strength",value:"≥550 MPa (80 ksi) minimum"},
            {label:"Composition",value:"25% Cr, 7% Ni, 4% Mo, 0.27% N"},
            {label:"Testing",value:"ASTM A923 Method C, Ferrite 35-65%, Impact -46°C, UT, Hydro"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE MR0175 compliant"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Super Duplex 2507 Pipe</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Offshore oil & gas:</strong> Topside piping, manifolds, production flowlines, umbilicals</li>
            <li><strong>Subsea pipelines:</strong> Flowlines, risers, J-lay and S-lay pipeline systems</li>
            <li><strong>Desalination:</strong> Reverse osmosis high-pressure piping, brine recirculation</li>
            <li><strong>FGD systems:</strong> Flue gas desulfurization absorbers, wet scrubbers, ductwork</li>
            <li><strong>Chemical processing:</strong> Chloride-rich environments, HCl handling, organic acids</li>
            <li><strong>Seawater cooling:</strong> Power plant condensers, SWRO feed piping, heat exchangers</li>
            <li><strong>Pulp & paper:</strong> Bleach plant digesters, chlorine dioxide piping</li>
            <li><strong>Mining:</strong> Slurry transport, phosphoric acid service, leach circuits</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Super Duplex 2507 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> Super Duplex 2507 seamless pipes in common sizes — immediate dispatch from Vadodara</li>
          <li><strong>NORSOK approved:</strong> Material conforming to NORSOK MDS D56/D57 for offshore applications</li>
          <li><strong>Complete testing:</strong> ASTM A923 Method C, ferrite count, impact at -46°C, NACE MR0175 compliance</li>
          <li><strong>Mill-direct sourcing:</strong> Sandvik, Salzgitter Mannesmann, Tubacex, Dalmine — no intermediaries</li>
          <li><strong>Full documentation:</strong> MTC EN 10204 3.1/3.2, heat treatment certificate, all test reports</li>
          <li><strong>Technical support:</strong> Grade selection — 2507 vs 2205 vs 904L for your specific corrosion environment</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch, 2-5 day delivery across India. Express options available</li>
          <li><strong>Export capability:</strong> Wooden box packing, fumigation certificate — supply to GCC, Europe, Americas</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Super Duplex 2507 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Super Duplex 2507 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. NORSOK & NACE compliant documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Super+Duplex+2507+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/duplex-2205-plate-supplier-india", label:"Duplex 2205 Plate"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Supplier Vadodara"},
              {href:"/hastelloy-pipe-supplier-india", label:"Hastelloy Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel Pipe"},
              {href:"/ss-304-316l-pipe-supplier-india", label:"SS 316L Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/super-duplex-2507-pipe-supplier" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Super Duplex 2507 Pipe Stockist India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
