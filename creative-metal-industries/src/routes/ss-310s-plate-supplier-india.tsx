/**
 * /ss-310s-plate-supplier-india
 * Target: "SS 310S plate supplier India furnace", "SS 310S sheet supplier",
 * "stainless steel 310S plate stockist India"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SIZES = [
  { thickness: "3mm – 6mm", width: "1250mm / 1500mm", length: "2500mm / 3000mm / 6000mm", finish: "Hot Rolled No.1", stock: "Ready Stock" },
  { thickness: "8mm – 16mm", width: "1500mm / 2000mm", length: "3000mm / 6000mm", finish: "Hot Rolled No.1", stock: "Ready Stock" },
  { thickness: "20mm – 50mm", width: "1500mm / 2000mm", length: "3000mm / 6000mm", finish: "Hot Rolled No.1", stock: "Available" },
  { thickness: "50mm – 80mm", width: "1500mm / 2000mm", length: "As rolled", finish: "Hot Rolled", stock: "Available (2-3 weeks)" },
  { thickness: "0.5mm – 3mm (Sheet)", width: "1000mm / 1250mm", length: "2000mm / 2500mm", finish: "2B / BA / No.4", stock: "Ready Stock" },
];

const FAQS = [
  { q: "What is the maximum temperature for SS 310S plate?", a: "SS 310S plate can withstand continuous service temperatures up to 1050°C and intermittent exposure up to 1100°C. The 25Cr-20Ni composition provides superior oxidation resistance compared to 304 (870°C) and 321 (870°C). For continuous service above 1050°C, consider Inconel or refractory-lined construction. Creative Metal Industries stocks SS 310S plates in all thicknesses." },
  { q: "What sizes of SS 310S plate are available?", a: "We stock SS 310S hot rolled plates from 3mm to 80mm thickness, widths up to 2000mm, and lengths up to 6000mm per ASTM A240. Cold rolled sheets (0.5-3mm) available in 2B, BA, and No.4 finishes. Custom sizes including flame-cut, plasma-cut, and waterjet-cut shapes available from our Vadodara facility. Contact +91 99982 80619 for stock check." },
  { q: "What is the difference between SS 310S plate and 304 plate for furnace use?", a: "SS 310S (25Cr-20Ni) operates at 180°C higher than 304 (18Cr-8Ni). At 900°C, 310S retains useful strength and oxidation resistance while 304 would suffer severe scaling and grain growth. 310S costs more (higher Ni/Cr content) but lasts 3-5x longer in furnace applications, making it more economical over the lifecycle. CMI stocks both grades." },
  { q: "Can SS 310S plate be welded?", a: "Yes. SS 310S is readily weldable using SMAW (E310-16 electrode), GTAW (ER310 filler), and SAW processes. Preheat is not required. Interpass temperature should be limited to 150°C max to prevent hot cracking (high Ni content). Post-weld heat treatment is generally not required. The low carbon 'S' variant (≤0.08%C) resists sensitization in the HAZ." },
  { q: "Do you supply SS 310S plate with MTC and cut-to-size?", a: "Yes. Every SS 310S plate from Creative Metal Industries comes with Mill Test Certificate (EN 10204 3.1/3.2) showing full chemical analysis and mechanical properties. We offer flame cutting, plasma cutting, waterjet cutting, and shearing to your exact dimensions. Third-party inspection under DNV, TUV, SGS available at our Vadodara facility." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 310S Plate & Sheet","description":"SS 310S stainless steel plate per ASTM A240 for high temperature furnace applications up to 1050°C. Thickness 3mm to 80mm. Creative Metal Industries Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"450","highPrice":"8000","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"29","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 310S Plate Supplier India","item":"https://www.creativemetalind.com/ss-310s-plate-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss310sPlateSupplierIndia() {
  return (
    <>
      <Title>SS 310S Plate Supplier India | Furnace Grade | High Temp | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 310S plate supplier India — ASTM A240 furnace grade stainless steel plate up to 1050°C. Thickness 3mm to 80mm. Cut-to-size. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-310s-plate-supplier-india" />
      <Meta property="og:title" content="SS 310S Plate Supplier India | High Temperature Furnace Grade | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 310S plate supplier India — furnace grade, up to 1050°C. Thickness 3-80mm. Cut-to-size. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-310s-plate-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 310S Plate Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 310S Plate Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 310S Plate Supplier in India — Furnace Grade Stainless Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's leading <strong>SS 310S plate supplier</strong> stocking ASTM A240 TP310S hot rolled plates and cold rolled sheets for high temperature furnace, heat treatment, and thermal processing applications. 25Cr-20Ni composition delivers exceptional oxidation resistance up to 1050°C continuous service. Thickness range 3mm to 80mm, widths up to 2000mm. Cut-to-size service available. Ready stock at Vadodara with same-day dispatch.
          </p>
        </div>

        {/* Size Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 310S Plate & Sheet — Available Sizes</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"700px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Width</th><th style={{padding:"0.7rem 0.8rem"}}>Length</th><th style={{padding:"0.7rem 0.8rem"}}>Finish</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {SIZES.map((s,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{s.thickness}</td><td style={{padding:"0.6rem 0.8rem"}}>{s.width}</td><td style={{padding:"0.6rem 0.8rem"}}>{s.length}</td><td style={{padding:"0.6rem 0.8rem"}}>{s.finish}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:s.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{s.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Technical Specifications — SS 310S Plate</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A240 / SA240 Type 310S"},
            {label:"Composition",value:"25Cr-20Ni, C ≤0.08%, Mn ≤2.0%"},
            {label:"Density",value:"7.93 g/cm³"},
            {label:"Max Service Temp",value:"1050°C continuous / 1100°C intermittent"},
            {label:"Tensile Strength",value:"≥515 MPa (min)"},
            {label:"Yield Strength",value:"≥205 MPa (0.2% offset)"},
            {label:"Elongation",value:"≥40% (min, 50mm gauge)"},
            {label:"Hardness",value:"≤217 HBW (max)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 310S Plate</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Furnace linings and muffles:</strong> Annealing, normalizing, carburizing furnaces</li>
            <li><strong>Heat treatment fixtures:</strong> Baskets, trays, jigs, rails for batch and continuous furnaces</li>
            <li><strong>Thermal oxidizers:</strong> Combustion chambers and internal baffles</li>
            <li><strong>Incinerator components:</strong> Grate bars, chamber walls, flue gas ducting</li>
            <li><strong>Kiln components:</strong> Cement kiln liners, ceramic kiln furniture supports</li>
            <li><strong>Flare tips and stacks:</strong> Refinery flare system components</li>
            <li><strong>Radiant tubes:</strong> Heat treatment furnace radiant heating elements</li>
            <li><strong>Catalytic converter housings:</strong> Automotive and industrial applications</li>
          </ul>
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 310S Plate</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 310S Plate? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock. Cut-to-size. Complete MTC. Delivery across India.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+310S+plate+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 310S Plate Supplier India</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
