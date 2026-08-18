/**
 * /ss-321h-tube-supplier-india
 * Target: "SS 321H boiler tube supplier India", "SS 321H superheater tube",
 * "ASTM A213 TP321H tube supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 321H (TP321H)", composition: "18Cr-10Ni-Ti (C: 0.04-0.10%)", sizes: "OD 12.7–114.3mm", schedule: "BWG 12-20 / Min Wall", apps: "Superheater tubes, boiler tubes, HRSG", ht: "Solution Annealed 1040-1120°C", stock: "Ready Stock" },
  { grade: "SS 321H IBR", composition: "18Cr-10Ni-Ti (High C)", sizes: "OD 19.05–76.2mm", schedule: "BWG 14-18 / Min Wall", apps: "IBR boiler tubes, steam generators", ht: "Solution Annealed + IBR Certified", stock: "Ready Stock" },
  { grade: "SS 321 Tube (TP321)", composition: "18Cr-10Ni-Ti (C ≤0.08%)", sizes: "OD 12.7–88.9mm", schedule: "BWG 14-20", apps: "Heat exchangers, condensers, process heaters", ht: "Solution Annealed", stock: "Available" },
  { grade: "SS 321H U-Bend", composition: "18Cr-10Ni-Ti (High C)", sizes: "OD 19.05–50.8mm", schedule: "BWG 14-16 / Min Wall", apps: "Shell-and-tube heat exchangers, boiler banks", ht: "Solution Annealed + Stress Relieved", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between SS 321H and standard SS 321 tube?", a: "SS 321H has a controlled higher carbon content of 0.04-0.10% compared to standard SS 321 which allows up to 0.08% maximum. This higher carbon provides significantly improved creep rupture strength at temperatures above 525°C. The 'H' designation specifically means the material is intended for high-temperature service where long-term creep resistance is the primary design criterion. Standard 321 is preferred for corrosion-resistant applications below 525°C where weldability and IGC resistance are more important than creep strength." },
  { q: "Is IBR certified SS 321H tube available from Creative Metal Industries?", a: "Yes, we stock IBR (Indian Boiler Regulation) certified SS 321H tubes with Form III-C documentation. IBR certification is mandatory for tubes used in boilers and pressure vessels operating above specified pressure/temperature limits in India. Our IBR tubes come from approved mills like Sandvik, Ratnamani, and Sumitomo with complete documentation including IBR Form III-C, material test certificate (MTC EN 10204 3.1), chemical analysis, mechanical test reports, and non-destructive examination results." },
  { q: "What is the difference between tube and pipe for SS 321H?", a: "Tubes are specified by outside diameter (OD) and wall thickness (or BWG gauge), ordered per ASTM A213 for heat exchange and boiler applications. Pipes are specified by nominal bore (NB/NPS) and schedule number, ordered per ASTM A312 for fluid transport. SS 321H tubes have tighter dimensional tolerances, smoother surface finish, and undergo additional testing (flattening, flaring, hardness) compared to pipes. Tubes are preferred for boilers and heat exchangers where heat transfer efficiency and precise dimensional control matter." },
  { q: "What ASTM standard covers SS 321H boiler tubes?", a: "SS 321H boiler and superheater tubes are covered under ASTM A213 / ASME SA213 Grade TP321H — 'Standard Specification for Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes.' The SA prefix indicates the ASME Boiler and Pressure Vessel Code adoption. Key requirements include solution annealing at 1040-1120°C, hardness ≤ 90 HRB, grain size ASTM 7 or coarser, and mandatory hydrostatic or eddy current testing of each tube." },
  { q: "Which mills manufacture SS 321H tubes that you supply?", a: "Creative Metal Industries sources SS 321H tubes from premium global mills including: Sandvik (Sweden) — industry benchmark for boiler tubes; Ratnamani (India) — ASME/IBR certified Indian manufacturer; Sumitomo (Japan) — excellent quality for critical applications; Tubacex (Spain) — European quality standard; and imported Korean/Chinese mills for cost-effective options. All mills are ASME, PED, and IBR approved. We recommend Sandvik or Ratnamani for critical boiler applications and offer competitive imported options for general industrial use." },
  { q: "What are the typical applications of SS 321H tubes in power plants?", a: "SS 321H tubes are extensively used in power plant superheaters (primary and secondary), reheater sections, economizer tubes, HRSG (Heat Recovery Steam Generator) tube banks in combined cycle plants, and process heater convection sections. The high carbon content provides creep strength for tubes operating at metal temperatures between 525-870°C under sustained steam pressure. In Indian power plants, SS 321H is commonly specified for superheater elements operating above 540°C steam temperature where carbon steel and low-alloy tubes are inadequate." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 321H Boiler Tube","description":"SS 321H high-carbon titanium stabilized seamless boiler and superheater tubes per ASTM A213 TP321H. Creep resistant up to 870°C. OD 12.7-114.3mm. IBR certified. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"450","highPrice":"9000","offerCount":"400+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"28","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 321H Tube Supplier India","item":"https://www.creativemetalind.com/ss-321h-tube-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss321hTubeSupplierIndia() {
  return (
    <>
      <Title>SS 321H Boiler Tube Supplier India | ASTM A213 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 321H boiler tube supplier India — ASTM A213 TP321H high carbon titanium stabilized seamless tubes for superheaters & boilers up to 870°C. OD 12.7-114.3mm. IBR certified. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-321h-tube-supplier-india" />
      <Meta property="og:title" content="SS 321H Boiler Tube Supplier India | High Carbon Stabilized | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 321H boiler tube supplier India — ASTM A213 TP321H for superheaters. High carbon for creep strength. IBR certified. Vadodara stock." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-321h-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 321H Boiler Tube Supplier India | ASTM A213 | CMI" />
      <Meta name="twitter:description" content="SS 321H boiler tube supplier India — high carbon stabilized for creep strength. IBR certified." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 321H Boiler Tube Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 321H Boiler Tube Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 321H Boiler Tube Supplier in India — High Carbon Stabilized
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a specialist <strong>SS 321H boiler tube supplier in India</strong> stocking ASTM A213 TP321H high-carbon titanium-stabilized seamless tubes for superheater, boiler, and heat exchanger applications. The higher carbon content (0.04-0.10%) provides superior creep rupture strength at temperatures above 525°C compared to standard 321, making TP321H the preferred specification for long-term elevated temperature service in power plants, refineries, and process heaters. IBR certified stock available in OD 12.7mm to 114.3mm with immediate dispatch from Vadodara.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 321H Tube Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Wall Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standard",value:"ASTM A213 / SA213 (Boiler & Heat Exchanger Tubes)"},
            {label:"Grade",value:"TP321H (High Carbon: 0.04-0.10%)"},
            {label:"Type",value:"Seamless Tube Only (Cold Drawn / Hot Finished)"},
            {label:"Size Range",value:"OD 12.7mm to 114.3mm"},
            {label:"Wall Thickness",value:"BWG 12-20 / Minimum Wall per ASTM A213"},
            {label:"Max Service Temp",value:"870°C (Creep service above 525°C)"},
            {label:"Composition",value:"17-19% Cr, 9-12% Ni, Ti ≥ 5×C%, C: 0.04-0.10%"},
            {label:"Testing",value:"Hydrostatic / ECT, Flattening, Flaring, Hardness ≤90 HRB"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C, PED 2014/68/EU"},
            {label:"Mills",value:"Sandvik, Ratnamani, Sumitomo, Tubacex, imported"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 321H Boiler Tubes in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Superheater tubes:</strong> Primary and secondary superheaters in thermal power plants, steam temperatures 540-600°C</li>
            <li><strong>Boiler tubes:</strong> High-pressure boiler banks, water wall tubes in supercritical boilers</li>
            <li><strong>Process heaters:</strong> Refinery fired heaters, crude oil heater convection sections</li>
            <li><strong>HRSG:</strong> Heat Recovery Steam Generator tube banks in combined cycle power plants</li>
            <li><strong>Refinery heater tubes:</strong> Atmospheric and vacuum distillation heaters, catalytic reformer heaters</li>
            <li><strong>Ethylene crackers:</strong> Transfer line exchangers (TLE), quench system tubing</li>
            <li><strong>Ammonia plants:</strong> Primary and secondary reformer tubes, waste heat boilers</li>
            <li><strong>Nuclear:</strong> Steam generator tubes in certain reactor designs (with specific approvals)</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 321H Tubes from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>IBR certified stock:</strong> Form III-C documentation for immediate boiler inspection compliance</li>
          <li><strong>Premium mills:</strong> Sandvik, Ratnamani, Sumitomo — ASME and PED certified sources</li>
          <li><strong>Tight tolerances:</strong> All tubes per ASTM A213 dimensional tolerances — suitable for boiler and heat exchanger mandating</li>
          <li><strong>Full testing:</strong> Hydrostatic/ECT, flattening, flaring, hardness, IGC (A262), grain size verification</li>
          <li><strong>U-bend capability:</strong> Pre-bent U-tubes available for shell-and-tube heat exchangers</li>
          <li><strong>Technical support:</strong> Grade selection — 321H vs 347H vs 304H for your specific temperature and pressure conditions</li>
          <li><strong>Cut-to-length:</strong> Precise tube cutting to your exact specified lengths with deburring</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch from Vadodara, door delivery 2-5 days across India</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 321H Boiler Tube</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 321H Boiler Tubes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>IBR certified stock at Vadodara. Same-day dispatch. Complete documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+321H+boiler+tube+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-321-pipe-supplier-india", label:"SS 321 Pipe Supplier"},
              {href:"/ss-347h-tube-supplier-india", label:"SS 347H Tube (Nb Stabilized)"},
              {href:"/ss-347-pipe-supplier-india", label:"SS 347 Pipe Supplier"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 Pipe (High Temp)"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel P91/P22 Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-321h-tube-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 321H Boiler Tube Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
