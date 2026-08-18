/**
 * /ss-347h-tube-supplier-india
 * Target: "SS 347H tube supplier India", "SS 347H boiler tube",
 * "ASTM A213 TP347H tube supplier India boiler"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 347H (TP347H)", composition: "18Cr-11Ni-Nb (C: 0.04-0.10%)", sizes: "OD 12.7–101.6mm", schedule: "BWG 12-18 / Min Wall", apps: "Superheater tubes, reformer tubes, ethylene cracker", ht: "Solution Annealed 1040-1120°C", stock: "Ready Stock" },
  { grade: "SS 347H IBR", composition: "18Cr-11Ni-Nb (High C)", sizes: "OD 19.05–76.2mm", schedule: "BWG 14-18 / Min Wall", apps: "IBR boiler tubes, steam generators, pressure vessels", ht: "Solution Annealed + IBR Certified", stock: "Ready Stock" },
  { grade: "SS 347 Tube (TP347)", composition: "18Cr-11Ni-Nb (C ≤0.08%)", sizes: "OD 12.7–88.9mm", schedule: "BWG 14-20", apps: "Heat exchangers, condensers, process coolers", ht: "Solution Annealed", stock: "Available" },
  { grade: "SS 347H U-Bend", composition: "18Cr-11Ni-Nb (High C)", sizes: "OD 19.05–50.8mm", schedule: "BWG 14-16 / Min Wall", apps: "Shell-and-tube exchangers, boiler banks", ht: "Solution Annealed + Stress Relieved", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between SS 347H and SS 321H for boiler tubes?", a: "Both SS 347H and SS 321H are high-carbon stabilized grades for creep service, but they use different stabilizing elements. SS 347H uses niobium (Nb ≥ 10×C%) while SS 321H uses titanium (Ti ≥ 5×C%). At temperatures above 600°C, SS 347H generally shows superior creep rupture strength compared to 321H. Additionally, niobium carbides are more thermodynamically stable at extreme temperatures and niobium transfers well across the welding arc, ensuring weld metal retains stabilization. For critical boiler and superheater applications above 600°C, many specifications prefer SS 347H over 321H." },
  { q: "What ASTM standard covers SS 347H boiler tubes?", a: "SS 347H boiler and superheater tubes are covered under ASTM A213 / ASME SA213 Grade TP347H — 'Standard Specification for Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes.' Key requirements include: solution annealing at 1040-1120°C, carbon range 0.04-0.10%, niobium content Nb ≥ 10×C%, hardness ≤ 90 HRB, grain size ASTM 7 or coarser, and mandatory hydrostatic or eddy current testing. The material must also pass intergranular corrosion testing per ASTM A262 Practice E." },
  { q: "Is IBR certified SS 347H tube available?", a: "Yes, Creative Metal Industries stocks IBR (Indian Boiler Regulation) certified SS 347H tubes with complete Form III-C documentation. IBR certification is mandatory for tubes installed in boilers and pressure vessels in India operating above specified pressure and temperature limits. Our IBR stock comes from approved mills (Sandvik, Ratnamani, Sumitomo) with full documentation package: IBR Form III-C, MTC EN 10204 3.1, chemical analysis, mechanical test reports, hydrostatic test certificate, IGC test report, and non-destructive examination records." },
  { q: "Which mills manufacture SS 347H tubes?", a: "Creative Metal Industries sources SS 347H tubes from globally recognized mills: Sandvik (Sweden) — the benchmark for critical boiler and superheater tubes; Ratnamani (India) — ASME/IBR certified, excellent quality and competitive pricing; Sumitomo (Japan) — premium quality for critical high-temperature applications; Tubacex (Spain) — PED certified European manufacturer; and selected Korean and Chinese ASME-certified mills for cost-effective applications. For critical superheater and reformer tube applications, we recommend Sandvik or Sumitomo. Ratnamani offers excellent value for standard boiler tube requirements." },
  { q: "What are the typical applications of SS 347H tubes?", a: "SS 347H tubes are used in the most demanding high-temperature applications: superheater tubes in thermal and nuclear power plants (steam temperatures 540-620°C), catalytic reformer tubes in refineries, ethylene cracker radiant and convection section tubes, steam methane reformer (SMR) outlet pigtails, waste heat boiler tubes in ammonia and methanol plants, and HRSG superheater sections in combined cycle plants. The niobium stabilization with high carbon provides the creep strength needed for long-term service at elevated temperatures under sustained pressure." },
  { q: "What is the price range for SS 347H tubes in India?", a: "SS 347H seamless tube prices in India typically range from Rs 500-1100 per kg depending on OD, wall thickness, mill source, and order quantity. SS 347H carries a premium over standard 347 due to the controlled carbon range and additional testing requirements. IBR certified tubes command a 5-10% premium over non-IBR material. Sandvik tubes are typically 30-40% more expensive than Ratnamani or imported options. For competitive quotations, contact Creative Metal Industries at +91 99982 80619 — we offer direct mill pricing without intermediary markup." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 347H Boiler Tube","description":"SS 347H high-carbon niobium stabilized seamless boiler and superheater tubes per ASTM A213 TP347H. Superior creep strength up to 870°C. OD 12.7-101.6mm. IBR certified. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"500","highPrice":"11000","offerCount":"350+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"24","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 347H Tube Supplier India","item":"https://www.creativemetalind.com/ss-347h-tube-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss347hTubeSupplierIndia() {
  return (
    <>
      <Title>SS 347H Boiler Tube Supplier India | ASTM A213 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 347H tube supplier India — ASTM A213 TP347H niobium stabilized seamless boiler & superheater tubes. High carbon for creep strength up to 870°C. OD 12.7-101.6mm. IBR certified. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-347h-tube-supplier-india" />
      <Meta property="og:title" content="SS 347H Tube Supplier India | Boiler Grade Niobium Stabilized | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 347H boiler tube supplier India — ASTM A213 TP347H for superheaters & reformers. High carbon Nb stabilized for creep. IBR certified. Vadodara stock." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-347h-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 347H Tube Supplier India | Boiler Grade | CMI" />
      <Meta name="twitter:description" content="SS 347H boiler tube supplier India — Nb stabilized, high carbon for creep. IBR certified." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 347H Tube Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 347H Tube Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 347H Tube Supplier in India — Boiler Grade Niobium Stabilized
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a specialist <strong>SS 347H tube supplier in India</strong> stocking ASTM A213 TP347H high-carbon niobium-stabilized seamless tubes for superheater, reformer, and boiler applications. The controlled high carbon (0.04-0.10%) combined with niobium stabilization (Nb ≥ 10×C%) delivers exceptional creep rupture strength at temperatures up to 870°C — making TP347H the preferred specification for the most demanding high-temperature tube applications in power plants, refineries, and petrochemical facilities. IBR certified stock available in OD 12.7mm to 101.6mm with same-day dispatch from Vadodara.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 347H Tube Grades — Ready Stock India</h2>
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
            {label:"Grade",value:"TP347H (High Carbon: 0.04-0.10%, Nb ≥ 10×C%)"},
            {label:"Type",value:"Seamless Tube Only (Cold Drawn / Hot Finished)"},
            {label:"Size Range",value:"OD 12.7mm to 101.6mm"},
            {label:"Wall Thickness",value:"BWG 12-18 / Minimum Wall per ASTM A213"},
            {label:"Max Service Temp",value:"870°C (Superior creep above 600°C vs 321H)"},
            {label:"Composition",value:"17-19% Cr, 9-13% Ni, Nb ≥ 10×C%, C: 0.04-0.10%"},
            {label:"Testing",value:"Hydrostatic / ECT, Flattening, Flaring, Hardness ≤90 HRB, IGC"},
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 347H Tubes in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Superheater tubes:</strong> Primary and secondary superheaters in coal, gas, and oil-fired power plants (540-620°C steam)</li>
            <li><strong>Reformer tubes:</strong> Catalytic reformer tubes in refineries, steam methane reformer (SMR) pigtails</li>
            <li><strong>Ethylene crackers:</strong> Radiant coil tubes, transfer line exchangers (TLE), quench system tubes</li>
            <li><strong>Boiler tubes:</strong> High-pressure boiler banks in supercritical and ultra-supercritical power plants</li>
            <li><strong>HRSG:</strong> Heat Recovery Steam Generator superheater and reheater sections in combined cycle plants</li>
            <li><strong>Ammonia plants:</strong> Secondary reformer tubes, waste heat boiler tubes, shift converter coolers</li>
            <li><strong>Methanol plants:</strong> Reformer outlet tubes, steam drum internals, waste heat recovery</li>
            <li><strong>Fertilizer industry:</strong> Urea reactor tubes, high-pressure carbamate lines (347H for temperature + Nb stabilization)</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 347H Tubes from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>IBR certified stock:</strong> Form III-C documentation ready for boiler inspection compliance in India</li>
          <li><strong>Premium mill sourcing:</strong> Sandvik, Ratnamani, Sumitomo — ASME, PED, and IBR approved manufacturers</li>
          <li><strong>Tight tolerances:</strong> All tubes per ASTM A213 dimensional requirements — boiler and heat exchanger grade</li>
          <li><strong>Complete testing:</strong> Hydrostatic/ECT, flattening, flaring, hardness, IGC (A262 Practice E), grain size verification</li>
          <li><strong>U-bend tubes:</strong> Pre-bent U-tubes available for shell-and-tube heat exchangers per customer drawings</li>
          <li><strong>Technical expertise:</strong> Grade selection guidance — 347H vs 321H vs 304H vs 310H for your specific conditions</li>
          <li><strong>Cut-to-length:</strong> Precision tube cutting with deburring, ready for immediate installation</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch from Vadodara, 2-5 day delivery across India</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 347H Tube</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 347H Boiler Tubes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>IBR certified stock at Vadodara. Same-day dispatch. Complete documentation package.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+347H+boiler+tube+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-347-pipe-supplier-india", label:"SS 347 Pipe Supplier"},
              {href:"/ss-321h-tube-supplier-india", label:"SS 321H Boiler Tube"},
              {href:"/ss-321-pipe-supplier-india", label:"SS 321 Pipe (Ti Stabilized)"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 Pipe (High Temp)"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel P91/P22 Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-347h-tube-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 347H Tube Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
