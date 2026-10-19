/**
 * /ss-310-pipe-supplier-india
 * Target: "SS 310 pipe supplier India", "SS 310S high temperature pipe",
 * "stainless steel 310 seamless pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 310 (TP310)", composition: "25Cr-20Ni", sizes: "1/2\" to 24\"", schedule: "SCH 5S–80S", apps: "Furnace parts, heat treatment baskets, radiant tubes", ht: "Solution Annealed 1040-1100°C", stock: "Confirm per order" },
  { grade: "SS 310S (TP310S)", composition: "25Cr-20Ni (Low C ≤0.08%)", sizes: "1/2\" to 16\"", schedule: "SCH 5S–80S", apps: "Kiln rollers, thermal oxidizers, incinerators", ht: "Solution Annealed", stock: "Confirm per order" },
  { grade: "SS 310H (TP310H)", composition: "25Cr-20Ni (High C 0.04-0.10%)", sizes: "1/2\" to 12\"", schedule: "SCH 10S–80S", apps: "High-temp creep service above 600°C", ht: "Solution Annealed", stock: "Confirm per order" },
  { grade: "SS 310MoLN", composition: "25Cr-22Ni-2Mo-N", sizes: "1/2\" to 8\"", schedule: "SCH 10S–40S", apps: "FGD systems, wet scrubbers, urea plants", ht: "Solution Annealed", stock: "Confirm per order" },
];

const FAQS = [
  { q: "What is the maximum temperature for SS 310/310S pipe?", a: "The service temperature for SS 310/310S depends on the grade, environment, design and applicable specification. Have a qualified engineer confirm suitability for the intended operating conditions. Product details shown on this page are enquiry references and require technical confirmation." },
  { q: "What is the difference between SS 310, 310S and 310H?", a: "SS 310, 310S and 310H have distinct composition and application requirements. Confirm the required grade against the governing specification and service conditions with a qualified technical professional. The grades shown here are enquiry references; confirm whether a specific grade can be offered for your order." },
  { q: "What sizes of SS 310 pipe can I enquire about?", a: "The size and schedule details shown on this page are enquiry references, not a stock commitment. Include your required grade, dimensions, schedule and quantity so the team can confirm whether the specification can be offered for your order." },
  { q: "Which industries use SS 310 pipe in India?", a: "SS 310-family materials may be specified for elevated-temperature applications. The correct grade and product form depend on service conditions and the governing specification; confirm material suitability with a qualified engineer." },
  { q: "What is the price of SS 310 pipe in India?", a: "No fixed price is published. Pricing depends on the confirmed grade, product form, dimensions, quantity and order requirements. Contact Creative Metal Industries with your specification to request a quotation. Availability, source and terms must be confirmed for the specific order." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 310 Pipe Supplier India","item":"https://www.creativemetalind.com/ss-310-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss310PipeSupplierIndia() {
  return (
    <>
      <Title>SS 310 Pipe Supplier India | High Temperature | 310S | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content={"SS 310 pipe supplier India — ASTM A312 TP310S seamless & welded pipes for high temperature furnace service up to 1100°C. Sizes 1/2\" to 24\"."} />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-310-pipe-supplier-india" />
      <Meta property="og:title" content="SS 310 Pipe Supplier India | High Temperature Stainless Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Enquire about SS 310 pipe specifications for high-temperature applications. Share your grade, dimensions and order requirements to request a quotation." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-310-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 310 Pipe Supplier India | High Temperature | CMI" />
      <Meta name="twitter:description" content="Enquire about SS 310 pipe specifications. Confirm the requested grade, dimensions, availability and order terms for a quotation." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 310 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 310 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 310 Pipe Supplier in India — High Temperature Stainless Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            This page provides SS 310-family pipe information for product enquiries. The listed grades, dimensions and technical details are references only; confirm the applicable specification and material suitability with a qualified engineer, and confirm whether the requested product can be offered for your order.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 310 Pipe Grades — Enquiry References</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Availability</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A312 / SA312 (Pipe) · ASTM A213 / SA213 (Tube)"},
            {label:"Grade",value:"TP310, TP310S, TP310H, TP310MoLN"},
            {label:"Type",value:"Seamless & Welded (EFW/ERW)"},
            {label:"Size Range",value:"1/2\" to 24\" (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 5S, 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"1050°C continuous / 1100°C intermittent"},
            {label:"Composition",value:"24-26% Cr, 19-22% Ni, ≤0.25% C (310)"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (A262), PMI, Solution Annealed"},
            {label:"Documentation",value:"Specify required certificates and inspection documents; confirm scope for the specific order"},
            {label:"Source",value:"Confirm the offered source and supporting documentation for the specific order"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 310/310S Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Cement industry:</strong> Kiln shells, preheater cyclones, cooler grate plates</li>
            <li><strong>Heat treatment:</strong> Furnace muffles, retorts, radiant tubes, baskets, fixtures</li>
            <li><strong>Steel plants:</strong> Reheating furnace components, roller hearth furnaces</li>
            <li><strong>Petrochemical:</strong> Ethylene cracker radiant coils, reformer pigtails</li>
            <li><strong>Glass industry:</strong> Melting tank components, lehr rollers</li>
            <li><strong>Thermal oxidizers:</strong> Combustion chambers, waste incinerators</li>
            <li><strong>Flue gas:</strong> FGD ducting (310MoLN variant for wet environments)</li>
            <li><strong>Power plants:</strong> Burner nozzles, flame shields, ash handling systems</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 310 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li>Share the required grade, product form, dimensions and governing specification for review.</li>
          <li>Confirm availability, source, documentation, inspection scope and delivery terms for the specific order.</li>
          <li>State any IBR or other project documentation requirements in the enquiry; applicability and availability must be confirmed for the offered material.</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 310 Pipe</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Enquire About SS 310/310S Pipe Requirements</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Send your specification to request a quotation and confirm availability, documentation and delivery terms for the order.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+310+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-310s-plate-supplier-india", label:"SS 310S Plate Supplier"},
              {href:"/ss-321-pipe-supplier-india", label:"SS 321 Pipe (Stabilized)"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe (Acid Resistant)"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel P91/P22 Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2205/2507 Supplier"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-310-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 310 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
