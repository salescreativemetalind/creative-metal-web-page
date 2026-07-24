/**
 * /a691-pipe-supplier-india
 * Target: "A691 pipe supplier India", "ASTM A691 EFW pipe",
 * "large diameter high temp pipe India", "A691 power plant header pipe"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"A691 1CR (Gr.A387-12)", composition:"1Cr-0.5Mo", sizes:"16 inch to 60 inch", schedule:"Various WT", apps:"Power plant headers, crossover", ht:"N+T + PWHT (seam)", stock:"Available" },
  { grade:"A691 1.25CR (Gr.A387-11)", composition:"1.25Cr-0.5Mo", sizes:"16 inch to 60 inch", schedule:"Various WT", apps:"Boiler headers, HRSG piping", ht:"N+T + PWHT (seam)", stock:"Ready Stock" },
  { grade:"A691 2.25CR (Gr.A387-22)", composition:"2.25Cr-1Mo", sizes:"16 inch to 60 inch", schedule:"Various WT", apps:"Main steam, HP headers", ht:"N+T + PWHT (seam)", stock:"Ready Stock" },
  { grade:"A691 5CR (Gr.A387-5)", composition:"5Cr-0.5Mo", sizes:"16 inch to 48 inch", schedule:"Various WT", apps:"Refinery headers, transfer lines", ht:"N+T + PWHT (seam)", stock:"Available" },
  { grade:"A691 9CR (Gr.A387-91)", composition:"9Cr-1Mo-V-Nb", sizes:"16 inch to 48 inch", schedule:"Various WT", apps:"USC boiler headers", ht:"N+T + PWHT (seam)", stock:"Available" },
  { grade:"A691 CMSH-70 (Gr.A516-70)", composition:"C-Mn", sizes:"16 inch to 60 inch", schedule:"Various WT", apps:"Moderate temp headers, vessels", ht:"Normalised + PWHT (seam)", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is ASTM A691 EFW pipe and how is it made?", a:"ASTM A691 is an Electric Fusion Welded (EFW) steel pipe specification for high-temperature, high-pressure service. A691 pipe is manufactured by forming ASTM A387 (or A516) alloy/carbon steel plate into a cylindrical shape and welding the longitudinal seam using submerged arc welding (SAW). The pipe then undergoes full heat treatment (normalising + tempering) and the weld seam receives 100% radiographic examination (RT) per ASME Section V. A691 is used where seamless pipe is unavailable in large diameters — typically 16 inch to 60 inch — making it essential for power plant headers, large-diameter crossover piping and refinery transfer lines." },
  { q:"What is the difference between A691 and seamless A335 pipe?", a:"A691 is an EFW (welded) pipe made from plate, while A335 is a seamless pipe made by piercing solid billets. A691 is used for large diameters (16 inch to 60 inch) where seamless pipe is either unavailable or prohibitively expensive. A335 seamless pipe is preferred for sizes up to 24 inch due to no weld seam and inherently better integrity. For A691, the weld seam must be 100% RT examined and the pipe PWHT'd after welding. The base plate (A387) chemistry and properties are identical — the difference is solely the manufacturing method. A691 pipe grade designation corresponds to its source plate: 1.25CR = A387 Gr.11, 2.25CR = A387 Gr.22." },
  { q:"What sizes of A691 EFW pipe does CMI supply?", a:"Creative Metal Industries supplies ASTM A691 EFW pipe in diameters from 16 inches (400NB) to 60 inches (1500NB) in various wall thicknesses from 12mm to 100mm depending on the design pressure and temperature. Standard grades include 1.25CR (from A387 Gr.11 plate), 2.25CR (from A387 Gr.22 plate), 5CR (from A387 Gr.5 plate) and CMSH-70 (from A516 Gr.70 plate). Pipe lengths typically 6-12 metres. For common sizes like 16 inch-36\" in 1.25CR and 2.25CR, we maintain ready stock. Larger sizes and 9CR grade are available on 8-12 week mill delivery." },
  { q:"What testing and inspection does A691 pipe undergo?", a:"ASTM A691 pipe undergoes rigorous testing and inspection: 100% radiographic examination (RT) of the longitudinal weld seam per ASME Section V; hydrostatic test at pressure per ASTM A691 formula; tensile testing of base metal and weld seam (transverse tensile across weld); guided bend tests (face and root bends) on weld specimens; Charpy impact testing at specified temperature (if supplementary requirement S1 is invoked); hardness testing on base metal, weld metal and HAZ; and full dimensional inspection. The pipe manufacturer must hold ASME U-stamp or equivalent pressure vessel fabrication certification." },
  { q:"Where is A691 EFW pipe used in power plants?", a:"In thermal power plants, A691 EFW pipe is used wherever large-diameter Cr-Mo piping is required: boiler outlet headers (24 inch-36\" dia) connecting superheater tube banks to main steam lines; HP/IP crossover pipes connecting HP turbine exhaust to reheater inlet; cold reheat lines (large diameter, moderate temperature); HRSG manifolds and headers in combined cycle plants; and attemperator bypass piping. The most common grades for power plant service are 1.25CR (for intermediate-temperature headers at 480-540°C) and 2.25CR (for main steam headers at 540-565°C in subcritical plants)." },
  { q:"Does CMI supply A691 pipe with IBR certification?", a:"Yes, we supply ASTM A691 EFW pipe with IBR Form III-C certification for boiler and pressure piping applications in India. The IBR certification covers both the source plate (A387 with IBR) and the pipe fabrication (welding procedure qualified per IBR requirements, RT of weld seam witnessed by IBR inspector). Our A691 suppliers are IBR-approved fabricators with full ASME and IBR certification. Documentation includes plate MTC (original A387 certificate), welding procedure qualification records (WPQR), RT film reader sheets, hardness survey reports, heat treatment records and IBR Form III-C for the finished pipe." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A691 EFW Pipe","description":"ASTM A691 Electric Fusion Welded (EFW) pipe from A387 plate for large-diameter high-temperature power plant headers. Sizes 16 inch to 60 inch. Cr-Mo grades. IBR certified.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-A691-EFW","material":"Cr-Mo Alloy Steel (EFW from A387 Plate)","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"800","highPrice":"15000","offerCount":"100+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"22","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"A691 Pipe Supplier India","item":"https://www.creativemetalind.com/a691-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function A691PipeSupplierIndia() {
  return (
    <>
      <Title>A691 EFW Pipe Supplier India | ASTM A691 | Large Dia High Temp | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="A691 EFW pipe supplier India — ASTM A691 Electric Fusion Welded pipe from A387 plate for large-diameter power plant headers. Sizes 16 inch to 60 inch. Cr-Mo grades. IBR certified. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/a691-pipe-supplier-india" />
      <Meta property="og:title" content="A691 EFW Pipe Supplier India | ASTM A691 Large Diameter | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A691 EFW pipe — large dia power plant headers, Cr-Mo grades from A387 plate. 16 inch to 60 inch. IBR. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/a691-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="A691 EFW Pipe Supplier India | ASTM A691 | Large Dia | CMI" />
      <Meta name="twitter:description" content="ASTM A691 EFW pipe India — large dia headers, Cr-Mo. 16 inch to 60 inch. IBR certified. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — A691 EFW Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Alloy Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>A691 EFW Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            A691 EFW Pipe Supplier India — ASTM A691 (from A387 Plate)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a specialist <strong>ASTM A691 EFW pipe supplier in India</strong> providing large-diameter Electric Fusion Welded pipe for power plant headers, high-temperature crossover piping and refinery transfer lines. A691 pipe is manufactured from ASTM A387 Cr-Mo plates using submerged arc welding, enabling diameters from 16" to 60" that are impossible to achieve with seamless pipe. All A691 pipe supplied with 100% radiographic examination, full heat treatment and <strong>IBR Form III-C</strong> certification. Grades: 1.25CR, 2.25CR, 5CR, 9CR and CMSH-70.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A691 EFW Pipe Grades — Stock & Supply List</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A691 EFW Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A691 / ASME SA691 (EFW Pipe)"},
            {label:"Manufacturing",value:"Electric Fusion Welded (SAW) from A387/A516 plate"},
            {label:"Size Range",value:"16 inch to 60 inch (400NB to 1500NB)"},
            {label:"Wall Thickness",value:"12mm to 100mm (per design pressure)"},
            {label:"Grades",value:"1CR, 1.25CR, 2.25CR, 5CR, 9CR, CMSH-70"},
            {label:"Heat Treatment",value:"Normalised + Tempered (plate) + PWHT (weld seam)"},
            {label:"Weld Exam",value:"100% Radiography (RT) per ASME Section V"},
            {label:"Testing",value:"Hydrostatic, Tensile (base+weld), Bend, Hardness, Impact"},
            {label:"Certification",value:"MTC EN 10204 3.2 (witnessed), IBR Form III-C"},
            {label:"Manufacturers",value:"Pennar, Ratnamani, Welspun, Man Industries"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A691 EFW Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Boiler Outlet Headers",desc:"A691 2.25CR and 1.25CR for large-diameter boiler outlet headers (24 inch-36\") connecting superheater banks to main steam lines"},
            {title:"HP/IP Crossover Piping",desc:"Large diameter (24 inch-48 inch) EFW pipe for HP turbine exhaust to reheater inlet (cold reheat) and hot reheat crossover"},
            {title:"HRSG Manifolds & Headers",desc:"A691 1.25CR for HRSG evaporator and superheater manifolds in combined cycle power plants"},
            {title:"Main Steam Headers",desc:"A691 2.25CR thick-wall pipe for main steam collecting headers in 500MW+ thermal power units"},
            {title:"Refinery Transfer Lines",desc:"A691 5CR for large-diameter crude distillation transfer lines and vacuum column inlet piping"},
            {title:"Penstock & High-Pressure",desc:"A691 CMSH-70 for hydroelectric penstock piping and large-diameter high-pressure water systems"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy A691 EFW Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Large-diameter specialist:</strong> Dedicated stock and supply capability for A691 EFW pipe from 16" to 60" diameter</li>
          <li><strong>All Cr-Mo grades:</strong> 1CR, 1.25CR, 2.25CR, 5CR and 9CR — complete range for power plant and refinery headers</li>
          <li><strong>IBR certified:</strong> All A691 pipe supplied with IBR Form III-C covering source plate, fabrication and inspection</li>
          <li><strong>100% RT examined:</strong> Complete radiographic coverage of longitudinal weld seam per ASME Section V requirements</li>
          <li><strong>Approved fabricators:</strong> Sourced from Pennar, Ratnamani, Welspun — ASME U-stamp and IBR approved manufacturers</li>
          <li><strong>Source plate control:</strong> We can supply A387 plate from our stock to the pipe fabricator, ensuring plate quality control</li>
          <li><strong>Project documentation:</strong> Complete QAP, WPS/PQR, RT reader sheets, hardness surveys, heat treatment records</li>
          <li><strong>Technical support:</strong> Assistance with pipe specification, design pressure calculations and grade selection</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — A691 EFW Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need A691 EFW Pipe? Get Expert Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A691 — 1.25CR, 2.25CR, 5CR, 9CR. Sizes 16" to 60". 100% RT. IBR certified. Power plant grade.</p>
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
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/sa-387-alloy-plate-supplier-india",label:"SA387 Alloy Plate Supplier"},
            {href:"/p22-alloy-steel-pipe-supplier",label:"P22 Alloy Steel Pipe Supplier"},
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
            {href:"/p92-alloy-steel-pipe-supplier",label:"P92 Alloy Steel Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/a691-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — A691 EFW Pipe Supplier India | ASTM A691 | Large Diameter High-Temp | IBR | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
