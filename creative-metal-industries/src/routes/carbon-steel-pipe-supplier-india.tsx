/**
 * /carbon-steel-pipe-supplier-india
 * GENERIC HUB — Target: "carbon steel pipe", "carbon steel pipe supplier",
 * "seamless pipe supplier". Grade-specific intent (A106/API 5L/ERW/SA516)
 * routes to the dedicated owner pages — this page owns the generic intent only.
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A106 Gr.B (Seamless)", type:"Seamless", sizes:"1/2\" to 24\"", apps:"High-temperature service, power, refinery", owner:"/a106-gr-b-seamless-pipe-india", stock:"Ready Stock" },
  { grade:"ASTM A53 (ERW / Seamless)", type:"ERW & Seamless", sizes:"1/2\" to 24\"", apps:"General service, water, structural, low-pressure", owner:"/a53-erw-pipe-supplier-india", stock:"Ready Stock" },
  { grade:"API 5L (PSL1 / PSL2)", type:"Seamless & Welded", sizes:"1/2\" to 24\"+", apps:"Oil & gas line pipe, transmission", owner:"/api-5l-line-pipe-supplier-india", stock:"Available" },
  { grade:"IS 1239 / IS 3589", type:"ERW", sizes:"NB & large diameter", apps:"Water, plumbing, structural (India)", owner:"/a53-erw-pipe-supplier-india", stock:"Ready Stock" },
  { grade:"SA 516 Plate (Vessel)", type:"Plate", sizes:"6mm to 200mm thk", apps:"Pressure-vessel & boiler plate", owner:"/carbon-steel-sa516-plate-stockist-india", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is carbon steel pipe?", a:"Carbon steel pipe is steel pipe whose main alloying element is carbon (with manganese), covering a broad family of specifications for pressure, structural, and general service. It is the most widely used pipe material in industry because it combines good strength, weldability, availability, and low cost. Depending on the specification and manufacturing route, carbon steel pipe is produced as seamless or welded (ERW/EFW), and grades are selected by service temperature, pressure, and application." },
  { q:"What is the difference between seamless and ERW carbon steel pipe?", a:"Seamless pipe is formed from a solid billet pierced and drawn without a weld seam, which suits high-pressure and high-temperature service (for example ASTM A106 Gr.B). ERW (Electric Resistance Welded) pipe is made by forming strip and welding the longitudinal seam; it is economical and widely used for general, water, and structural service (for example ASTM A53). Seamless is chosen where the seam would be a concern under severe conditions; ERW is chosen for cost efficiency in moderate service." },
  { q:"Which carbon steel pipe grade should I use?", a:"Match the grade to the service. For high-temperature service (power plants, refineries) use ASTM A106 Gr.B seamless. For general service, water, and structural use ASTM A53 (ERW or seamless) or IS 1239. For oil & gas line pipe and transmission use API 5L (PSL1/PSL2). For pressure-vessel and boiler plate use SA 516. We stock all of these and can advise on selection — see the grade table for links to each dedicated product page." },
  { q:"Do you supply seamless pipe as a seamless pipe supplier?", a:"Yes. Creative Metal Industries is a seamless pipe supplier stocking carbon steel seamless pipe (notably ASTM A106 Gr.B) alongside welded/ERW pipe. We supply both seamless and welded carbon steel pipe across common sizes and schedules from our Vadodara facility, with Mill Test Certificates and grade selection support so you receive the correct product for your service conditions." },
  { q:"What sizes and schedules of carbon steel pipe are available?", a:"Carbon steel pipe is stocked across common nominal bores (typically 1/2 inch to 24 inch) in standard schedules such as SCH 40, SCH 80, and heavier walls up to XXS for the relevant grades. Availability varies by specification — for example heavy-wall seamless for high-pressure service versus lighter ERW for general use. Exact stocked sizes are confirmed on enquiry, with cut-to-length and non-standard sizes supplied against project requirements." },
  { q:"What certification comes with carbon steel pipe?", a:"All carbon steel pipe is supplied with a Mill Test Certificate (EN 10204 3.1) documenting chemistry and mechanical properties. IBR Form III-C is available for boiler-connected piping on the applicable grades, and NACE MR-01-75 compliance is available where sour-service is required. Third-party inspection under DNV, TUV, SGS, Bureau Veritas, or Lloyd's Register can be arranged on request." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/carbon-steel-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Carbon Steel Pipe Supplier India","item":"https://www.creativemetalind.com/carbon-steel-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function CarbonSteelPipeSupplierIndia() {
  return (
    <>
      <Title>Carbon Steel Pipe Supplier India | Seamless &amp; ERW | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Carbon steel pipe supplier India — seamless & ERW pipe in A106, A53, API 5L & IS 1239 grades. Seamless pipe supplier with MTC. Ready stock Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" />
      <Meta property="og:title" content="Carbon Steel Pipe Supplier India | Seamless & ERW | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Carbon steel pipe supplier India — seamless & ERW pipe across A106, A53, API 5L & IS 1239. MTC certified. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Carbon Steel Pipe Supplier India | Seamless & ERW | CMI" />
      <Meta name="twitter:description" content="Carbon steel pipe supplier India — seamless & ERW. A106, A53, API 5L. MTC. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Carbon Steel Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Carbon Steel Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            Carbon Steel Pipe Supplier in India — Seamless &amp; ERW
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>carbon steel pipe supplier in India</strong> and <strong>seamless pipe supplier</strong>, stocking seamless and ERW/welded carbon steel pipe across the major specifications — ASTM A106, ASTM A53, API 5L, and IS 1239. As your single-source <strong>carbon steel pipe supplier</strong>, we match the right grade to your service — high-temperature, general, or line pipe — and supply every length with Mill Test Certificate from our GIDC Makarpura, Vadodara facility. Use the grade table below to reach the dedicated page for each specification.
          </p>
        </div>

        {/* Grade Table with owner links */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Carbon Steel Pipe Grades — Choose by Service</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade / Spec</th><th style={{padding:"0.7rem 0.8rem"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Typical Use</th><th style={{padding:"0.7rem 0.8rem"}}>Details</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.type}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem"}}><a href={g.owner} style={{color:"#E8821A","text-decoration":"underline","font-weight":"600"}}>View →</a></td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* About */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Seamless vs Welded Carbon Steel Pipe</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          Carbon steel pipe is produced by two main routes. <strong>Seamless pipe</strong> is formed from a solid billet without a longitudinal weld, making it the preferred choice for high-pressure and high-temperature service — our <a href="/a106-gr-b-seamless-pipe-india" style={{color:"#E8821A","text-decoration":"underline"}}>A106 Gr.B seamless pipe</a> is the classic example. <strong>ERW (welded) pipe</strong> is formed from strip with a welded seam and is a cost-effective choice for general, water, and structural service — see our <a href="/a53-erw-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"underline"}}>A53 ERW pipe</a> page.
        </p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          For oil & gas transmission and line-pipe duty, <a href="/api-5l-line-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"underline"}}>API 5L line pipe</a> (PSL1/PSL2) is the relevant specification, while pressure-vessel and boiler work uses plate such as <a href="/carbon-steel-sa516-plate-stockist-india" style={{color:"#E8821A","text-decoration":"underline"}}>SA 516 Gr.60/70</a>. As a generic carbon steel pipe hub, this page helps you identify the right specification and then routes you to the dedicated product page for full details.
        </p>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Carbon Steel Pipe — Supply Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Specifications",value:"ASTM A106, A53, API 5L, IS 1239/3589"},
            {label:"Manufacturing",value:"Seamless & welded (ERW/EFW)"},
            {label:"Size Range",value:"1/2\" to 24\" (grade dependent)"},
            {label:"Schedules",value:"SCH 40, 80, 120, 160, XXS (grade dependent)"},
            {label:"Ends",value:"Plain end, bevelled end, threaded (on request)"},
            {label:"Testing",value:"Hydrostatic, UT, flattening (per spec)"},
            {label:"Certification",value:"MTC EN 10204 3.1; IBR / NACE on applicable grades"},
            {label:"Inspection",value:"DNV, TUV, SGS, BV, LRIS on request"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Carbon Steel Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Power Plants",desc:"Boiler feedwater, steam and auxiliary piping — typically A106 Gr.B seamless for high-temperature duty"},
            {title:"Refineries & Petrochemical",desc:"Process piping and headers across a range of pressures and temperatures"},
            {title:"Oil & Gas Transmission",desc:"API 5L line pipe for crude, gas and product pipelines and gathering systems"},
            {title:"Water & Utilities",desc:"A53 / IS 1239 ERW pipe for water distribution, firewater and plumbing lines"},
            {title:"Structural & General",desc:"Structural supports, columns, and general fabrication using ERW pipe"},
            {title:"Fabrication & Fittings",desc:"Pipe spools with matching buttweld/forged fittings and flanges"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose Creative Metal Industries for Carbon Steel Pipe?</h2>
        <ul style={{"list-style":"none",padding:0,display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            "Single-source carbon steel pipe supplier — seamless and ERW across all major grades",
            "A106, A53, API 5L and IS 1239 stocked and supplied to specification",
            "Grade selection support — the right pipe for your service conditions",
            "Complete MTC (EN 10204 3.1); IBR and NACE on applicable grades",
            "Third-party inspection under DNV, TUV, SGS, BV, LRIS on request",
            "Pan-India delivery from GIDC Makarpura, Vadodara since 2012",
          ].map(point => (
            <li style={{display:"flex",gap:"0.7rem","align-items":"flex-start","font-size":"0.92rem",color:"#374151","line-height":"1.5"}}>
              <span style={{"flex-shrink":"0",color:"#E8821A","font-weight":"700"}}>✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Internal Links */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Explore Carbon Steel Pipe Grades</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/a106-gr-b-seamless-pipe-india",label:"A106 Gr.B Seamless Pipe"},
            {href:"/a53-erw-pipe-supplier-india",label:"A53 ERW Pipe"},
            {href:"/api-5l-line-pipe-supplier-india",label:"API 5L Line Pipe"},
            {href:"/carbon-steel-sa516-plate-stockist-india",label:"SA 516 Plate Stockist"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe & Fittings"},
          ].map(link => (
            <a href={link.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>
              {link.label} →
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Carbon Steel Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(faq => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{faq.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{faq.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"800",color:"#fff","margin-bottom":"0.75rem"}}>Need Carbon Steel Pipe?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem","font-size":"0.95rem"}}>
            Seamless or ERW, any major grade — get price and availability. Pan-India delivery.
          </p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi+I+need+carbon+steel+pipe" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <RelatedPages currentPath="/carbon-steel-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Carbon Steel Pipe Supplier India</p>
        <p>GIDC Makarpura, Vadodara 390010 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
