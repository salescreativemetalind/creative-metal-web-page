/**
 * /steel-supplier-mangalore
 * Target: "steel supplier Mangalore", "MRPL pipe",
 * "refinery steel Mangalore", "steel pipe supplier Mangalore"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Exotic Alloys", grades: "Inconel 625, Hastelloy C276, Monel 400, Incoloy 825", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, SA 387 Gr.11/22, IS 2062, NACE", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X65, PSL1 & PSL2", sizes: "2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "MRPL (Mangalore Refinery)", desc: "ONGC subsidiary, 15 MMTPA — alloy steel P5/P11/P22/P91 for turnarounds, SS fittings, exotic alloys for process piping upgrades" },
  { icon: "\u{1F6A2}", name: "NMPT (New Mangalore Port)", desc: "Major cargo and petroleum port — structural steel, API pipes for tank farm, MS for port infrastructure and jetty maintenance" },
  { icon: "\u{1F9EA}", name: "BASF India (Mangalore)", desc: "Chemical manufacturing — SS 316L, Hastelloy, duplex for chemical reactors, piping systems and effluent treatment plants" },
  { icon: "\u{1F33F}", name: "MCF (Mangalore Chemicals)", desc: "Fertilizer manufacturing — SS 304/316L for ammonia service, alloy pipes for reformer systems, NACE-compliant CS piping" },
  { icon: "\u{1F3ED}", name: "KIOCL Pellet Plant", desc: "Iron ore pelletization — wear plates, alloy pipes for high-temperature systems, structural steel for plant maintenance" },
  { icon: "\u26A1", name: "UPCL Thermal Power", desc: "Udupi Power Corporation — alloy P22/P91 for boiler systems, CS for BOP, SS for cooling water and DM plant piping" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Mangalore, Karnataka?", a: "Creative Metal Industries (CMI) is a trusted steel supplier serving Mangalore's refinery and industrial sector since 2012. We supply alloy steel pipes (P5/P11/P22/P91) for MRPL turnarounds, SS pipes and fittings, duplex steel for seawater systems, and carbon steel for port infrastructure. Located in Vadodara (1,000 km), we deliver to Mangalore in 2 working days. We are an established vendor for EPC contractors working at MRPL, BASF, and KIOCL projects." },
  { q: "What is the delivery time for steel pipes to Mangalore from Vadodara?", a: "Delivery from our Vadodara warehouse to Mangalore is 2 working days via road transport (approximately 1,000 km via NH48 through Goa). We have regular transport to Mangalore's industrial areas including MRPL refinery zone, Baikampady industrial area, Surathkal, and Panambur. Express dispatch available for urgent refinery shutdown requirements. We also deliver to Udupi, Karwar, Hubli-Dharwad, and other Karnataka coastal locations." },
  { q: "Do you supply materials for MRPL refinery shutdown projects?", a: "Yes, we are a proven material supplier for MRPL (Mangalore Refinery and Petrochemicals Ltd — ONGC subsidiary) turnaround and shutdown projects. Our ready stock includes IBR-certified alloy steel pipes (P5, P9, P11, P22, P91), SS 304/316L/321 pipes and fittings, high-pressure flanges (Class 150 to 2500), and exotic alloys (Inconel, Hastelloy). Complete documentation provided — MTC EN 10204 3.1/3.2, IBR Form III-C, TPI witness reports, PMI certificates, and NACE compliance." },
  { q: "What grades are suitable for Mangalore's coastal environment?", a: "Mangalore's coastal location demands materials with superior corrosion resistance. We recommend SS 316L (minimum) for process piping in coastal plants — its molybdenum content provides chloride resistance. For seawater applications at MRPL and NMPT, duplex 2205 offers excellent pitting resistance. Super duplex 2507 for high-chloride environments. For structural applications, we supply hot-dip galvanized steel or duplex where exposure is severe. Proper material selection prevents premature failure in Mangalore's humid, salt-laden atmosphere." },
  { q: "Can you supply for BASF and MCF chemical plants in Mangalore?", a: "Absolutely. For BASF India's Mangalore operations and Mangalore Chemicals & Fertilizers (MCF), we supply chemical-resistant piping materials. This includes SS 316L for general chemical service, Hastelloy C276 for aggressive acids, duplex 2205 for chloride-bearing streams, Inconel 625 for high-temperature corrosion, and NACE-compliant carbon steel for sour gas handling. We also supply SS 316L fittings and flanges for clean chemical process systems. All materials with PMI verification and complete chemical composition certificates." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-mangalore#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Mangalore","description":"Trusted steel supplier for Mangalore — MRPL refinery pipes, SS fittings, alloy steel. 2-day delivery from Vadodara for Karnataka's industrial coast.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-mangalore","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Mangalore","containedInPlace":{"@type":"State","name":"Karnataka"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Mangalore","item":"https://www.creativemetalind.com/steel-supplier-mangalore"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierMangalore() {
  return (
    <>
      <Title>Steel Supplier Mangalore | MRPL Refinery Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Mangalore — alloy steel, SS pipes for MRPL Refinery, BASF, port. 2-day delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-mangalore" />
      <Meta property="og:title" content="Steel Supplier Mangalore | MRPL Refinery Pipes & SS Fittings | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Mangalore — alloy, SS pipes for MRPL refinery & chemical plants. 2-day delivery. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-mangalore" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Mangalore | MRPL Refinery Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Mangalore — alloy, SS, duplex pipes for MRPL & coastal industries." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Mangalore" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Mangalore</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Mangalore — MRPL Refinery Pipes, SS Fittings &amp; Alloy Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>steel supplier for Mangalore</strong>, Karnataka's industrial coast — delivering within <strong>2 days from Vadodara (1,000 km)</strong>. Mangalore's industrial identity centers around <strong>MRPL (Mangalore Refinery — 15 MMTPA, ONGC subsidiary)</strong>, one of India's most modern refineries, complemented by NMPT port, BASF chemicals, MCF fertilizers, KIOCL pellet plant, and UPCL thermal power. This creates strong demand for alloy steel (P5/P9/P11/P22/P91), stainless steel pipes and fittings, duplex for seawater systems, and exotic alloys for chemical applications. Our 2000+ tonne Vadodara warehouse and established transport to Karnataka's coast ensure you never face material shortages during critical refinery shutdowns.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Mangalore</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Mangalore Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>MRPL refinery specialist:</strong> Regular supplier to EPC contractors for MRPL turnarounds — IBR alloy pipes, exotic alloys, complete documentation</li>
            <li><strong>Coastal corrosion expertise:</strong> SS 316L, duplex 2205, super duplex for Mangalore's humid salt-laden environment — proper material selection advice</li>
            <li><strong>2-day delivery from Vadodara:</strong> 1,000 km via NH48 through Goa — faster than most Mumbai-based suppliers for Karnataka coast</li>
            <li><strong>Chemical plant approved:</strong> SS 316L, Hastelloy C276, Inconel 625 for BASF and MCF — PMI verified with complete composition certificates</li>
            <li><strong>Complete IBR documentation:</strong> Form III-C, TPI witness, EN 10204 3.1/3.2, PMI — all as per MRPL/ONGC specifications</li>
            <li><strong>Port infrastructure support:</strong> Structural steel, API pipes for NMPT port expansion — MS plates, piling pipes, structural sections</li>
            <li><strong>Direct mill sourcing:</strong> Sumitomo, Vallourec, ISMT, Sandvik, Jindal — competitive rates bypassing multiple dealer layers</li>
            <li><strong>Emergency shutdown support:</strong> 2000+ tonne ready stock for critical items — no 12-week mill lead time during turnaround emergencies</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Mangalore &amp; Coastal Karnataka</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Mangalore &amp; Karnataka</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["MRPL Refinery Zone","Baikampady Industrial","Surathkal / NITK Belt","Panambur Port Area","Udupi (UPCL)","Karwar Naval Base","Hubli-Dharwad","Belgaum Industrial","Hassan Industrial","Shimoga","Davangere","Goa (nearby)"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Refinery &amp; Chemical Piping Solutions for Mangalore</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Mangalore's industrial profile combines refinery operations with chemical manufacturing and port activities, all in a challenging coastal environment. Creative Metal Industries supplies <strong>ASTM A335 P91/P22/P11 alloy steel</strong> for MRPL's high-temperature reformer and heater piping, <strong>SS 321/347 for cracker service</strong>, <strong>Hastelloy C276 and Inconel 625</strong> for BASF's aggressive chemical environments, <strong>duplex 2205 for seawater cooling</strong> at MRPL and UPCL, <strong>API 5L pipes</strong> for NMPT port tank farm piping, and <strong>carbon steel IS 1239/3589</strong> for utility and fire-fighting systems. Every material is selected for Mangalore's coastal conditions — we proactively recommend upgraded grades where standard materials would fail prematurely in the salt-laden atmosphere.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Mangalore</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Mangalore? Get Quote Now!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Alloy Steel, SS, Duplex, Exotic — Ready stock. 2-day delivery to Mangalore from Vadodara.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/steel-pipe-supplier-bangalore",label:"Steel Pipe Supplier Bangalore"},
            {href:"/steel-pipe-supplier-chennai",label:"Steel Pipe Supplier Chennai"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="mangalore" />
      
        <RelatedPages currentPath="/steel-supplier-mangalore" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Mangalore | MRPL Refinery Pipes, SS Fittings | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
