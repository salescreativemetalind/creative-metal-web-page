/**
 * /inconel-600-pipe-supplier-india
 * Target: "Inconel 600 pipe supplier India N06600", "Inconel 600 seamless pipe",
 * "N06600 nickel alloy pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Inconel 600 Seamless (B167)", composition: "72Ni-15Cr-8Fe", sizes: "1/2\" to 10\" NB", schedule: "SCH 10S–80S", apps: "Caustic evaporators, nuclear steam generators", ht: "Annealed 870-980°C", stock: "Ready Stock" },
  { grade: "Inconel 600 Welded (B516)", composition: "72Ni-15Cr-8Fe", sizes: "2\" to 10\" NB", schedule: "SCH 10S–40S", apps: "Furnace muffles, heat treating retorts", ht: "Annealed + Pickled", stock: "Ready Stock" },
  { grade: "Inconel 600 Tube (B163)", composition: "UNS N06600", sizes: "OD 6.35mm to 114.3mm", schedule: "BWG 14-20", apps: "Nuclear steam generator tubes, heat exchangers", ht: "Solution Annealed", stock: "Available" },
  { grade: "Inconel 600 ERW Pipe", composition: "72Ni-15Cr-8Fe", sizes: "1\" to 8\" NB", schedule: "SCH 10S–40S", apps: "Aerospace exhaust systems, thermal processing", ht: "Stress Relieved", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Inconel 600 and Inconel 625?", a: "Inconel 600 (N06600) and Inconel 625 (N06625) serve different purposes despite both being nickel-chromium alloys. Inconel 600 contains 72% Ni, 15% Cr, and 8% Fe with no molybdenum, making it ideal for caustic alkali environments and nuclear applications where chloride stress corrosion cracking resistance is critical. Inconel 625 contains 58% Ni, 22% Cr, 9% Mo, and 3.5% Nb, providing superior resistance to marine environments, reducing acids, and pitting corrosion. Choose Inconel 600 for high-temperature oxidation resistance, caustic service, and nuclear engineering. Choose Inconel 625 for marine, acid, and severe pitting/crevice corrosion environments." },
  { q: "What is the maximum service temperature for Inconel 600 pipe?", a: "Inconel 600 can operate continuously at temperatures up to 1100°C (2000°F) in oxidizing atmospheres, making it one of the most temperature-resistant nickel alloys available. The alloy maintains good mechanical strength up to 700°C and retains useful oxidation resistance up to 1100°C. In carburizing and nitriding atmospheres, it performs well up to 1050°C. The high nickel content (72%) provides stability at elevated temperatures and prevents the alloy from becoming brittle during long-term exposure. This makes Inconel 600 the preferred material for furnace muffles, retorts, heat treating baskets, and thermal processing equipment." },
  { q: "Why is Inconel 600 resistant to chloride stress corrosion cracking?", a: "Inconel 600's exceptional resistance to chloride stress corrosion cracking (SCC) stems from its high nickel content of 72%. Nickel-based alloys with more than 45% Ni are generally immune to chloride SCC, and Inconel 600 far exceeds this threshold. This makes it the preferred material in nuclear power plants where high-temperature water containing chloride impurities would rapidly crack austenitic stainless steels like 304 or 316. The alloy is extensively used in pressurized water reactor (PWR) steam generator tubes specifically for this property. Creative Metal Industries supplies Inconel 600 pipe tested and certified for nuclear-grade applications." },
  { q: "What sizes and standards of Inconel 600 pipe does CMI supply?", a: "Creative Metal Industries stocks Inconel 600 seamless pipes per ASTM B167 (seamless pipe/tube) from 1/2 inch to 10 inches NB in schedules SCH 10S, 20S, 40S, and 80S. Welded pipes per ASTM B516 are available from 2 inches to 10 inches NB. Tubes per ASTM B163 are stocked in OD 6.35mm to 114.3mm for heat exchanger and nuclear applications. Standard lengths are 4-7 metres random. All material supplied with full MTC per EN 10204 3.1, PMI test report, and heat treatment certificate. Custom cut lengths and close-tolerance tubes available on request." },
  { q: "Which mills manufacture Inconel 600 pipe that CMI supplies?", a: "Creative Metal Industries sources Inconel 600 pipes and tubes from globally recognized mills including Special Metals Corporation (Huntington Alloys — the original developer of Inconel), VDM Metals (Germany), Sandvik, Sumitomo, and leading Indian mills like Mishra Dhatu Nigam (MIDHANI). All material is from approved mills with full traceability. For nuclear-grade applications, we supply material per ASME Section III requirements with enhanced documentation. Our stockholding includes material from multiple heats to ensure immediate availability for urgent project requirements." },
  { q: "What is the price range for Inconel 600 pipe in India?", a: "Inconel 600 pipe pricing in India typically ranges from Rs 3,500 to Rs 10,000 per kg depending on size, schedule, quantity, and current nickel market prices. Seamless pipes command a premium over welded due to the manufacturing process. Smaller sizes (below 1 inch) are relatively more expensive per kg due to production complexity. Nuclear-grade tubes with enhanced testing carry a 15-25% premium over standard commercial grades. Contact Creative Metal Industries at +91 99982 80619 for current competitive pricing — we maintain ready stock that eliminates long lead times and import duties associated with direct mill purchases." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/inconel-600-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Inconel 600 Pipe Supplier India","item":"https://www.creativemetalind.com/inconel-600-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Inconel600PipeSupplierIndia() {
  return (
    <>
      <Title>Inconel 600 Pipe Supplier India | N06600 Nickel Alloy | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Inconel 600 pipe supplier India — ASTM B167 N06600 seamless pipes. High temperature to 1100°C, chloride SCC resistant, caustic service." />
      <Link rel="canonical" href="https://www.creativemetalind.com/inconel-600-pipe-supplier-india" />
      <Meta property="og:title" content="Inconel 600 Pipe Supplier India | N06600 Nickel Alloy | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Inconel 600 pipe supplier India — N06600 nickel alloy. High temperature resistant, chloride SCC immune. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/inconel-600-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Inconel 600 Pipe Supplier India | N06600 | CMI" />
      <Meta name="twitter:description" content="Inconel 600 pipe supplier India — N06600 nickel alloy. High temp 1100°C. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Inconel 600 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Inconel 600 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Inconel 600 Pipe Supplier in India — N06600 Nickel Alloy
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>Inconel 600 pipe supplier in India</strong> stocking ASTM B167 seamless and B516 welded pipes in UNS N06600 nickel-chromium alloy. Inconel 600 with its 72Ni-15Cr-8Fe composition delivers exceptional performance in high-temperature applications up to 1100°C, outstanding resistance to chloride stress corrosion cracking, and excellent service in caustic alkali environments. Widely specified for nuclear engineering, chemical processing, aerospace exhaust systems, and heat treating equipment. As a dedicated <strong>Inconel 600 supplier</strong>, we hold ready stock in sizes 1/2" to 10" NB at our Vadodara warehouse with full mill test certificates.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Inconel 600 Pipe Grades — Ready Stock India</h2>
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
            {label:"Standard",value:"ASTM B167 (Seamless) · ASTM B516 (Welded) · ASTM B163 (Tube)"},
            {label:"Grade",value:"Inconel 600 (UNS N06600)"},
            {label:"Type",value:"Seamless, Welded & Tube"},
            {label:"Size Range",value:"1/2\" to 10\" NB (15NB to 250NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"Up to 1100°C (oxidizing atmospheres)"},
            {label:"Composition",value:"72% Ni, 14-17% Cr, 6-10% Fe, ≤0.15% C"},
            {label:"Density",value:"8.47 g/cm³"},
            {label:"Testing",value:"Hydrostatic, UT, PMI, Flattening, Flare, IGC"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE MR0175 available"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Inconel 600 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Chemical processing:</strong> Caustic evaporators, NaOH production piping, chlor-alkali plants, caustic soda service</li>
            <li><strong>Nuclear engineering:</strong> PWR steam generator tubes, reactor core components, nuclear fuel reprocessing</li>
            <li><strong>Heat treating:</strong> Furnace muffles, retorts, heat treating baskets, radiant tubes, thermocouple sheaths</li>
            <li><strong>Aerospace:</strong> Jet engine exhaust systems, turbine seals, combustion chambers, afterburner components</li>
            <li><strong>Furnace components:</strong> Heating elements, roller hearth furnaces, annealing covers, carburizing equipment</li>
            <li><strong>Electronics:</strong> Cathode ray tube supports, thyristor housings, lead-in wires</li>
            <li><strong>Food processing:</strong> High-temperature equipment for vitamin C and other processes</li>
            <li><strong>Pulp & paper:</strong> Black liquor evaporators, bleach plant equipment, digester linings</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Inconel 600 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock availability:</strong> Inconel 600 pipes and tubes in multiple sizes maintained at Vadodara warehouse — no 8-12 week mill lead times</li>
          <li><strong>Approved mill sources:</strong> Material from Special Metals (Huntington), VDM, Sandvik, MIDHANI with full traceability</li>
          <li><strong>Nuclear-grade capability:</strong> Supply of material per ASME Section III with enhanced testing and documentation</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), PMI report, heat treatment certificate, dimensional inspection report</li>
          <li><strong>Technical support:</strong> Alloy selection guidance — Inconel 600 vs 601 vs 625 for your specific application</li>
          <li><strong>Complete product range:</strong> Pipes, tubes, bars, sheets, plates, fittings, and flanges in Inconel 600</li>
          <li><strong>Pan-India delivery:</strong> Fast dispatch from Vadodara to all industrial cities across India</li>
          <li><strong>Export capability:</strong> Supplying to projects in Middle East, Africa, and Southeast Asia with export documentation</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Inconel 600 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Inconel 600 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B167 N06600 seamless. Full mill certificates.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Inconel+600+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/inconel-718-supplier-india", label:"Inconel 718 Bar & Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625 Pipe"},
              {href:"/incoloy-825-pipe-supplier-india", label:"Incoloy 825 Pipe"},
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/monel-k500-supplier-india", label:"Monel K500 Round Bar"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/inconel-600-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Inconel 600 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
