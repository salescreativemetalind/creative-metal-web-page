/**
 * /titanium-grade-2-pipe-india
 * Target: "Titanium Grade 2 pipe India", "Titanium CP pipe supplier",
 * "R50400 titanium pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Ti Gr.2 Seamless (B861)", composition: "99.2% Ti (UNS R50400)", sizes: "1/2\" to 10\" NB", schedule: "SCH 10S–80S", apps: "Chemical processing, desalination, chlor-alkali", ht: "Annealed 650-760°C", stock: "Ready Stock" },
  { grade: "Ti Gr.2 Welded (B862)", composition: "99.2% Ti CP", sizes: "2\" to 10\" NB", schedule: "SCH 10S–40S", apps: "Seawater piping, heat exchangers, condensers", ht: "Stress Relieved", stock: "Ready Stock" },
  { grade: "Ti Gr.2 Tube (B338)", composition: "R50400", sizes: "OD 6.35mm to 114.3mm", schedule: "BWG 16-22", apps: "Condenser tubes, heat exchangers, evaporators", ht: "Annealed", stock: "Available" },
  { grade: "Ti Gr.2 Fittings (B363)", composition: "99.2% Ti", sizes: "1/2\" to 10\" NB", schedule: "SCH 10S–40S", apps: "Complete titanium piping systems", ht: "Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is Titanium Grade 2 and why is it called commercially pure?", a: "Titanium Grade 2 (UNS R50400) is classified as commercially pure (CP) titanium because it contains a minimum of 99.2% titanium with only minor controlled amounts of oxygen (0.25% max), iron (0.30% max), carbon (0.08% max), nitrogen (0.03% max), and hydrogen (0.015% max). It is the most widely used of all titanium grades, accounting for approximately 50% of total titanium consumption worldwide. The term 'commercially pure' distinguishes it from titanium alloys like Grade 5 (Ti-6Al-4V) that contain significant alloying additions. Grade 2 offers an excellent combination of moderate strength (minimum 345 MPa yield), outstanding corrosion resistance, good formability, and reliable weldability that makes it suitable for the broadest range of industrial applications." },
  { q: "What is the difference between Titanium Grade 1 and Grade 2?", a: "Titanium Grade 1 (R50250) and Grade 2 (R50400) are both commercially pure titanium grades, with the primary difference being oxygen content and consequently mechanical strength. Grade 1 has lower oxygen (0.18% max) giving it lower strength (170 MPa yield) but superior formability and ductility — making it ideal for deep drawing and explosive cladding applications. Grade 2 permits higher oxygen (0.25% max) resulting in higher strength (345 MPa yield) while still maintaining good formability and excellent corrosion resistance. For most industrial piping, heat exchanger, and chemical plant applications, Grade 2 is the standard choice because its higher strength allows thinner wall sections without sacrificing pressure ratings. Grade 1 is preferred only when extreme cold forming is required or when maximum ductility is critical." },
  { q: "What industries use Titanium Grade 2 pipe most commonly?", a: "Titanium Grade 2 pipe finds extensive application across industries where corrosion resistance to chlorides, seawater, and oxidizing acids is critical. The major consuming industries include: chemical processing (reactors, heat exchangers, piping for chlorine, bleach, chlorides, and oxidizing acids), desalination (MSF and MED evaporator tubes, brine heaters, seawater intake piping), power generation (condenser tubes in coastal thermal plants, FGD systems), offshore oil and gas (seawater cooling systems, fire water systems, subsea piping), chlor-alkali (wet chlorine gas handling, brine piping, anode baskets), pulp and paper (bleach plant piping, ClO2 systems), and marine applications (shipboard seawater systems, submarine cooling). The pharmaceutical and food processing industries also use Grade 2 for its biocompatibility and non-toxic nature." },
  { q: "What sizes of Titanium Grade 2 pipe does CMI supply?", a: "Creative Metal Industries stocks Titanium Grade 2 seamless pipes per ASTM B861 from 1/2 inch to 10 inches NB in schedules SCH 10S, 20S, 40S, and 80S. Welded pipes per ASTM B862 are available from 2 inches to 10 inches NB in lighter schedules. Condenser and heat exchanger tubes per ASTM B338 are stocked in OD range 6.35mm to 114.3mm with wall thicknesses from BWG 16 to 22. Standard lengths are 4-7 metres random or cut to length as required. All titanium material is supplied in the annealed condition with complete certification including mill test certificate per EN 10204 3.1, chemical analysis, mechanical properties, and positive material identification (PMI) verification." },
  { q: "Can Titanium Grade 2 be welded and what precautions are needed?", a: "Titanium Grade 2 has excellent weldability using GTAW (TIG) welding with ERTi-2 filler wire per AWS A5.16. The critical requirement is absolute protection from atmospheric contamination during welding — titanium reacts rapidly with oxygen, nitrogen, and hydrogen above approximately 500°C, causing embrittlement and loss of corrosion resistance. Essential precautions include: trailing shields and backing gas (pure argon, 99.995% minimum purity) to protect the weld and heat-affected zone until cooled below 427°C, thorough cleaning with acetone or MEK before welding, stainless steel wire brushes only (no carbon steel tools), and a clean dedicated welding area. Weld color should be bright silver to light straw — any blue, purple, or grey discoloration indicates contamination and must be removed. No post-weld heat treatment is normally required." },
  { q: "What is the price range for Titanium Grade 2 pipe in India?", a: "Titanium Grade 2 pipe pricing in India typically ranges from Rs 3,500 to Rs 8,000 per kilogram depending on size, wall thickness, quantity, and current titanium sponge market conditions. Seamless pipes per ASTM B861 command higher prices than welded pipes per ASTM B862 due to more complex manufacturing. Condenser tubes in popular heat exchanger sizes are often available at competitive rates due to volume production. Despite titanium being perceived as expensive, it often proves economical on a lifecycle basis — Grade 2 pipe eliminates the need for corrosion allowance, protective coatings, and premature replacements common with stainless steel in chloride environments. Creative Metal Industries offers competitive project pricing with ready stock availability — contact +91 99982 80619 for current rates." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/titanium-grade-2-pipe-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Titanium Grade 2 Pipe India","item":"https://www.creativemetalind.com/titanium-grade-2-pipe-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function TitaniumGrade2PipeIndia() {
  return (
    <>
      <Title>Titanium Grade 2 Pipe Supplier India | R50400 CP Ti | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Titanium Grade 2 pipe supplier India — ASTM B861 R50400 commercially pure seamless pipes. Chloride resistant, seawater, desalination, chemical." />
      <Link rel="canonical" href="https://www.creativemetalind.com/titanium-grade-2-pipe-india" />
      <Meta property="og:title" content="Titanium Grade 2 Pipe India | R50400 CP Ti | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Titanium Grade 2 pipe supplier India — R50400 commercially pure titanium for chemical, desalination, marine. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/titanium-grade-2-pipe-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Titanium Grade 2 Pipe India | R50400 | CMI" />
      <Meta name="twitter:description" content="Titanium Grade 2 pipe India — CP titanium. Chloride resistant. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Titanium Grade 2 Pipe India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Titanium Grade 2 Pipe India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Titanium Grade 2 Pipe Supplier in India — R50400
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>Titanium Grade 2 pipe supplier in India</strong> stocking ASTM B861 seamless and B862 welded pipes in UNS R50400 — the most widely used commercially pure titanium grade. With 99.2% titanium purity, Grade 2 delivers outstanding resistance to chlorides, seawater, oxidizing acids, and wet chlorine gas while offering moderate strength (345 MPa yield), excellent formability, and reliable weldability. The preferred material for desalination plants, chemical processing, power plant condensers, offshore seawater systems, and chlor-alkali plants. Ready stock sizes 1/2" to 10" NB at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Titanium Grade 2 Pipe Grades — Ready Stock India</h2>
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
            {label:"Standard (Seamless)",value:"ASTM B861 / SB861"},
            {label:"Standard (Welded)",value:"ASTM B862 / SB862"},
            {label:"Grade",value:"Titanium Grade 2 (UNS R50400)"},
            {label:"Type",value:"Seamless, Welded & Tube"},
            {label:"Size Range",value:"1/2\" to 10\" NB (15NB to 250NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"Up to 315°C (continuous oxidizing service)"},
            {label:"Composition",value:"99.2% Ti, 0.25% O max, 0.30% Fe max, 0.08% C max"},
            {label:"Testing",value:"Hydrostatic, UT, Flattening, Flare, PMI"},
            {label:"Welding",value:"ERTi-2 filler wire (AWS A5.16), argon shielding"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Titanium Grade 2 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Desalination plants:</strong> MSF/MED evaporator tubes, brine heaters, seawater intake and reject piping systems</li>
            <li><strong>Chemical processing:</strong> Chlorine gas handling, bleach production, chloride environments, oxidizing acid piping</li>
            <li><strong>Power generation:</strong> Steam condenser tubes in coastal thermal plants, cooling water piping, FGD systems</li>
            <li><strong>Offshore oil and gas:</strong> Seawater cooling systems, fire water mains, produced water handling, subsea applications</li>
            <li><strong>Chlor-alkali industry:</strong> Wet chlorine gas piping, brine circuits, cell liquor handling, anode baskets</li>
            <li><strong>Pulp and paper:</strong> ClO2 bleach plant piping, bleach washers, white liquor oxidation equipment</li>
            <li><strong>Marine applications:</strong> Shipboard seawater systems, submarine cooling circuits, naval vessel piping</li>
            <li><strong>Food and pharmaceutical:</strong> Biocompatible processing equipment, reactor vessels, ultra-pure water systems</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Titanium Grade 2 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Titanium specialist stockist:</strong> One of India's leading titanium pipe stockists with Grade 2 inventory for immediate dispatch</li>
          <li><strong>Premium mill sources:</strong> Material from VSMPO-AVISMA, Baoji Titanium, TIMET, and other internationally approved titanium producers</li>
          <li><strong>Grade selection support:</strong> Technical guidance on Grade 1 vs Grade 2 vs Grade 5 vs Grade 7 selection for your application</li>
          <li><strong>Full documentation:</strong> Mill test certificate per EN 10204 3.1, chemical analysis, mechanical properties, PMI verification</li>
          <li><strong>Welding consumables:</strong> ERTi-2 filler wire available along with welding procedure guidance for titanium fabrication</li>
          <li><strong>Complete range:</strong> Pipes, tubes, fittings (B363), flanges, sheets, plates, and bars in Grade 2 titanium from single source</li>
          <li><strong>Cut-to-length service:</strong> Custom lengths available with precision cutting and end preparation as required</li>
          <li><strong>Pan-India + export:</strong> Serving desalination, chemical, power, and offshore projects across India and internationally</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Titanium Grade 2 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Titanium Grade 2 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B861 R50400. Chloride resistant CP titanium. Full mill certificates.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Titanium+Grade+2+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/titanium-grade-5-pipe-india", label:"Titanium Grade 5 Pipe"},
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Pipe"},
              {href:"/monel-400-pipe-supplier-india", label:"Monel 400 Pipe"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/titanium-grade-2-pipe-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Titanium Grade 2 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
