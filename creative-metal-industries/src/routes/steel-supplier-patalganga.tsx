/**
 * /steel-supplier-patalganga
 * Target: "steel supplier Patalganga MIDC", "chemical pipe Patalganga",
 * "RIL Patalganga steel", "petrochemical pipes Raigad"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Hastelloy Pipes & Fittings", grades: "Hastelloy C276, C22, B2, Alloy 20", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex 2101", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, WN/SO/Blind Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Exotic Alloy Pipes", grades: "Inconel 625/600, Monel 400, Incoloy 825, Titanium Gr.2", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "NACE/Sour Service Pipes", grades: "A106 Gr.B (NACE), A333 Gr.6, NACE MR0175 Compliant", sizes: "1/2\" to 24\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Chemical-Grade Plates", grades: "SS 316L, Duplex 2205, Hastelloy C276, SA 516 Gr.70", sizes: "6mm to 150mm thick", type: "Hot Rolled, Clad", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "RIL Petrochemical Complex", desc: "Reliance Industries' major petrochemical facility — SS 316L, alloy steel, NACE-compliant CS for polymer, fiber, and chemical production units" },
  { icon: "\u{1F9EA}", name: "Gharda Chemicals & Agrochemical", desc: "Major agrochemical and fine chemical producers — Hastelloy C276 for acid service, duplex for chloride, SS 316L for organic solvent piping systems" },
  { icon: "\u{1F48A}", name: "Pharma Intermediates", desc: "Pharmaceutical intermediate manufacturing — electropolished SS 316L, sanitary fittings, acid-resistant alloys for active ingredient production" },
  { icon: "\u{1F3ED}", name: "NOCIL & Rubber Chemicals", desc: "Rubber chemical manufacturing — SS 316L for process piping, CS for utilities, Hastelloy for specialized reactors processing sulphur compounds" },
  { icon: "\u2697\uFE0F", name: "Specialty Chemical Plants", desc: "Fine chemicals, catalysts, and intermediates — exotic alloys for extreme pH, temperature, and pressure combinations in batch reactors" },
  { icon: "\u{1F4A7}", name: "Effluent Treatment & Utilities", desc: "Common ETP and utility systems — duplex 2205 for chlorinated water, FRP-compatible flanges, SS 316L for treated water distribution" },
];

const FAQS = [
  { q: "Who is the best steel supplier for Patalganga MIDC, Maharashtra?", a: "Creative Metal Industries (CMI) is a specialist chemical-grade steel supplier serving Patalganga MIDC — delivering within 1-2 days from Vadodara (500 km). We stock SS 316L, Hastelloy C276, duplex 2205, and NACE-compliant materials that Patalganga's petrochemical and chemical plants demand. Our expertise in corrosion-resistant alloys, competitive Gujarat pricing, and reliable logistics make us the preferred supplier over Mumbai-based dealers who lack specialty chemical-grade inventory." },
  { q: "How fast can chemical-grade pipes be delivered to Patalganga?", a: "1-2 day delivery — Patalganga MIDC (Raigad district) is approximately 500 km from Vadodara. Orders confirmed by morning are dispatched same day and reach Patalganga next day. For planned shutdown projects, we pre-position materials with advance notice. For emergency breakdowns at RIL or chemical plants, we can arrange express overnight delivery arriving early morning. Our logistics team knows the Patalganga route well, serving this chemical hub for over two decades." },
  { q: "Do you supply Hastelloy C276 for Patalganga's chemical industry?", a: "Yes, Hastelloy C276 is a core stocking item for Patalganga's aggressive chemical environments. We supply seamless pipes (1/2\" to 6\"), fittings (elbows, tees, reducers, crosses), flanges (WN, SO, blind), and plates in Hastelloy C276. Also available: Hastelloy C22 (improved pitting resistance), Hastelloy B2 (HCl service), and Alloy 20 (sulphuric acid). Essential for Patalganga's pesticide, agrochemical, and fine chemical plants handling mixed acids at elevated temperatures. All with mill TCs and PMI reports." },
  { q: "Can you supply NACE-compliant materials for Patalganga petrochemical?", a: "Absolutely. For RIL and other petrochemical units at Patalganga, we supply NACE MR0175/ISO 15156 compliant materials: carbon steel pipes (A106 Gr.B with restricted chemistry — 0.002% max sulphur, controlled CE), controlled hardness (max 22 HRC), alloy steel with heat treatment documentation, SS 316L (solution annealed), and duplex 2205 with ferrite content certification. All materials supplied with NACE compliance certificates, hardness test reports, and full chemical analysis traceability from mill to delivery." },
  { q: "What makes CMI better than Mumbai suppliers for Patalganga?", a: "Three critical advantages: (1) Specialty stock — we carry Hastelloy, Inconel, super duplex, Alloy 20 in ready stock; Mumbai dealers typically indent these with 8-12 week lead time; (2) Chemical expertise — 25+ years serving Gujarat's chemical belt (Ankleshwar, Jhagadia, Panoli) means we understand your corrosion challenges, acid concentrations, and temperature requirements; (3) Price — Gujarat's competitive ecosystem gives 10-15% savings on exotic alloys. For Patalganga's demanding chemical industry, expertise + stock + price = CMI advantage." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Steel Supplier Patalganga MIDC","description":"Chemical-grade steel supplier for Patalganga MIDC — SS 316L, Hastelloy C276, duplex, NACE pipes for RIL, Gharda, NOCIL. 1-2 day delivery from Vadodara.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-supplier-patalganga","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Patalganga MIDC, Raigad","containedInPlace":{"@type":"State","name":"Maharashtra"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"38","bestRating":"5"}},{"@type":"Product","name":"Chemical-Grade Pipes & Exotic Alloys — Patalganga Supply","description":"SS 316L, Hastelloy C276, duplex, NACE-compliant pipes and fittings for Patalganga's petrochemical and chemical plants. 1-2 day delivery.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"85","highPrice":"50000","offerCount":"3000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Patalganga","item":"https://www.creativemetalind.com/steel-supplier-patalganga"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierPatalganga() {
  return (
    <>
      <Title>Steel Supplier Patalganga MIDC | Chemical Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Patalganga MIDC — SS 316L, Hastelloy, duplex for RIL, Gharda & chemical plants. 1-2 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-patalganga" />
      <Meta property="og:title" content="Steel Supplier Patalganga MIDC | Chemical-Grade Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Chemical-grade steel supplier Patalganga — Hastelloy, SS 316L, duplex for petrochemical & agrochemical plants. 1-2 day delivery." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-patalganga" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Patalganga MIDC | Chemical Pipes | CMI" />
      <Meta name="twitter:description" content="Chemical pipe supplier Patalganga — Hastelloy, SS 316L, duplex for RIL & chemical plants." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Patalganga" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Patalganga</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Patalganga MIDC — Petrochemical &amp; Chemical-Grade Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a specialist <strong>steel supplier for Patalganga MIDC</strong> — delivering chemical-grade piping within <strong>1-2 days from Vadodara</strong> (500 km). Patalganga in Raigad district is Maharashtra's premier petrochemical and chemical manufacturing hub, housing <strong>Reliance Industries (RIL)</strong>, <strong>Gharda Chemicals</strong>, <strong>Herdillia Chemicals</strong>, <strong>NOCIL</strong>, and numerous pharma intermediate producers. These plants process aggressive chemicals — concentrated acids, chlorinated compounds, organic solvents — at high temperatures, demanding the highest corrosion-resistant materials. CMI's chemical-grade inventory of <strong>SS 316L, Hastelloy C276, duplex 2205, Alloy 20</strong>, and <strong>NACE-compliant carbon steel</strong> serves Patalganga's most demanding applications with competitive pricing and certified quality.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Chemical-Grade Pipes for Patalganga</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"700px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Product</th><th style={{padding:"0.7rem 0.8rem"}}>Grades</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{p.category}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.grades}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.type}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:p.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Patalganga Chemical Plants Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>1-2 day delivery to Patalganga:</strong> Dispatched same day from Vadodara, delivered next morning — faster than many Mumbai suppliers for this Raigad location</li>
            <li><strong>Chemical-grade specialist:</strong> SS 316L, Hastelloy C276/C22/B2, duplex, Alloy 20, Inconel — all grades for corrosive petrochemical environments</li>
            <li><strong>NACE/sour service materials:</strong> MR0175-compliant CS and alloy steel for RIL's petrochemical processing where H2S exposure requires controlled hardness</li>
            <li><strong>Gujarat chemical belt expertise:</strong> 25+ years supplying Ankleshwar, Jhagadia, Panoli chemical corridors — deep corrosion engineering knowledge applicable to Patalganga</li>
            <li><strong>PMI certified every shipment:</strong> Positive Material Identification on all exotic alloys — critical for safety in chemical plants handling toxic materials</li>
            <li><strong>Exotic alloys in ready stock:</strong> Hastelloy, Inconel, super duplex, titanium available immediately — not 8-12 week mill indent that loses you shutdown time</li>
            <li><strong>Competitive pricing:</strong> Gujarat's lower operational costs give 10-15% advantage on specialty alloys vs. Mumbai/Navi Mumbai market rates</li>
            <li><strong>Corrosion selection support:</strong> Our metallurgical team advises on optimal grade selection based on your specific acid type, concentration, and temperature</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Patalganga &amp; Raigad District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Patalganga &amp; Raigad Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Patalganga MIDC Phase 1","Patalganga MIDC Phase 2","RIL Complex","Rasayani MIDC","Roha MIDC","Mahad MIDC","Panvel Industrial","Khopoli MIDC","Pen Industrial","Nagothane (IPCL)","Taloja MIDC","Navi Mumbai TTC"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Petrochemical &amp; Chemical Piping Expertise for Patalganga</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Patalganga's chemical plants process some of Maharashtra's most challenging chemicals, and Creative Metal Industries provides tailored corrosion solutions. For <strong>RIL's petrochemical operations</strong>, we supply NACE-compliant carbon steel with controlled chemistry and hardness, SS 316L for general process service, and alloy steel for high-temperature cracking units. For <strong>Gharda Chemicals and agrochemical producers</strong>, Hastelloy C276 handles concentrated HCl and mixed acid environments. <strong>Duplex 2205</strong> serves chloride-containing process streams where SS 316L suffers pitting. For <strong>pharma intermediates</strong>, electropolished SS 316L meets GMP requirements. And for <strong>NOCIL's rubber chemicals</strong>, we supply specialized grades resistant to sulphur compounds at processing temperatures. One supplier with complete chemical-grade expertise — from material selection to certified delivery at your Patalganga plant gate.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Patalganga</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Chemical-Grade Pipes in Patalganga? 1-2 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS 316L, Hastelloy C276, Duplex, NACE Pipes — Ready stock. Next-day delivery from Vadodara to Patalganga.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-navi-mumbai",label:"Pipe Supplier Navi Mumbai"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/steel-supplier-jhagadia",label:"Steel Supplier Jhagadia GIDC"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-patalganga" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Patalganga MIDC | RIL, Gharda, NOCIL | Chemical-Grade SS, Hastelloy, Duplex | 1-2 Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
