/**
 * /steel-supplier-salem
 * Target: "steel supplier Salem", "SAIL Salem steel Tamil Nadu",
 * "SS pipes Salem", "IBR alloy Mettur TPS"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "SS Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes (IBR)", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR Approved)", stock: "Ready Stock" },
  { category: "Boiler Tubes IBR", grades: "ASTM A213 T11, T22, T91, SA 213 T5/T9", sizes: "1/2\" to 6\" OD", type: "Seamless (IBR Certified)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, WN/SO/Blind Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "UNS S31803/S32205, S32750/S32760", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, SA 387 Gr.11/22, SS 304/316L Plates", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Specialty SS Tubes", grades: "SS 304/316L/321 Thin Wall Precision Tubes", sizes: "6mm to 76.2mm OD", type: "Seamless, Cold Drawn", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "SAIL Salem Steel Plant", desc: "SAIL Salem produces SS flat products (sheets/coils) — CMI complements by supplying SS PIPES, fittings, and flanges that Salem plant doesn't manufacture, serving their downstream customers" },
  { icon: "\u26A1", name: "Mettur TPS (TANGEDCO)", desc: "Mettur Thermal Power Station — alloy steel IBR boiler tubes T11/T22/T91, header pipes P22/P91, carbon steel piping for boiler maintenance and power generation systems" },
  { icon: "\u2699\uFE0F", name: "Textile Machinery", desc: "Salem's textile industry requires precision SS tubes for spinning machinery, dyeing equipment, and boiler systems — 304/316L seamless tubes in custom lengths" },
  { icon: "\u{1F697}", name: "Auto Ancillary", desc: "Automotive component manufacturers need thin-wall precision SS tubes, carbon steel for structural parts, and specialty alloys for exhaust systems and hydraulic lines" },
  { icon: "\u{1F525}", name: "Foundry & Casting", desc: "Salem's foundry cluster requires carbon steel pipes for furnace systems, SS for molten metal handling, and heat-resistant alloys for high-temperature casting applications" },
  { icon: "\u{1F9EA}", name: "Chemical & Pharma", desc: "Chemical processing and pharmaceutical facilities need SS 316L and duplex piping for corrosion resistance, with full material traceability and compliance documentation" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Salem for SS pipes and fittings?", a: "Creative Metal Industries (CMI) is a leading steel supplier for Salem, Tamil Nadu. We specialize in stainless steel pipes (304, 316L, 321, 310S, 904L, Duplex), SS fittings, and flanges — products that complement SAIL Salem Steel Plant's flat product range. While SAIL Salem makes SS sheets and coils, CMI supplies the SS PIPES, tubes, fittings, and flanges that local industries need. With 2000+ tonnes ready stock and 2-3 day delivery to Salem, we serve the region's manufacturing, power, and engineering sectors." },
  { q: "How fast can steel materials be delivered to Salem from Vadodara?", a: "Delivery to Salem takes 2-3 days from our Vadodara warehouse (approximately 1,400 km via NH48/NH44). For urgent requirements — power plant shutdowns at Mettur TPS or critical production needs — we offer priority dispatch with dedicated transport. Materials are dispatched within 24 hours of order confirmation. Our regular supply chain to Tamil Nadu ensures reliable, on-time delivery to Salem, Mettur, and surrounding industrial areas." },
  { q: "What SS materials does CMI supply that complement SAIL Salem's production?", a: "SAIL Salem Steel Plant manufactures stainless steel flat products — sheets, coils, and cold-rolled strips. CMI complements this by supplying SS PIPES (seamless and welded in 304/316L/321/310S), SS FITTINGS (elbows, tees, reducers in buttweld and forged), SS FLANGES (weld neck, slip-on, blind), and duplex steel piping. Salem's downstream industries need both flat products from SAIL and tubular products from suppliers like CMI to complete their projects." },
  { q: "Do you supply IBR-certified alloy pipes for Mettur Thermal Power Station?", a: "Yes, we supply complete IBR-certified alloy steel pipes and boiler tubes for Mettur TPS (TANGEDCO). Our range includes A335 P11/P22/P91 pipes for high-temperature steam lines, A213 T11/T22/T91 boiler tubes for superheater and reheater sections, and SA 106 Gr.C for headers. Every material comes with IBR Form III-C certification, stage-wise inspection reports, and complete traceability. We support both routine maintenance and major overhaul requirements at Mettur." },
  { q: "What materials do you supply for Salem's auto ancillary industry?", a: "For Salem's growing auto ancillary sector, we supply thin-wall precision SS tubes (304/316L) for exhaust systems and hydraulic lines, cold-drawn seamless tubes for fuel injection components, carbon steel ERW pipes for structural applications, and specialty alloy tubes for high-performance automotive parts. All materials come with mill test certificates, dimensional inspection reports, and can be supplied in custom cut lengths as per automotive OEM specifications." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-salem#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Salem","description":"Leading steel supplier for Salem, Tamil Nadu — SS pipes, duplex, IBR alloy for SAIL Salem region, Mettur TPS. 2-3 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-salem","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Salem","containedInPlace":{"@type":"State","name":"Tamil Nadu"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Salem","item":"https://www.creativemetalind.com/steel-supplier-salem"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierSalem() {
  return (
    <>
      <Title>Steel Supplier Salem | SS Pipes &amp; IBR Alloy | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Steel supplier Salem — SS pipes, duplex, IBR alloy for SAIL Salem region, Mettur TPS. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-salem" />
      <Meta property="og:title" content="Steel Supplier Salem | SS Pipes & IBR Alloy | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Salem — SS pipes, duplex, IBR alloy for SAIL Salem region, Mettur TPS. Complementing SAIL Salem with tubular products. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-salem" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Salem | SS Pipes & IBR Alloy | CMI" />
      <Meta name="twitter:description" content="Steel supplier Salem — SS pipes, duplex, IBR alloy for SAIL Salem region, Mettur TPS." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Salem" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Salem</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Salem — SS Pipes, Duplex &amp; IBR Alloy for SAIL Salem Region
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>steel supplier for Salem, Tamil Nadu</strong>, specializing in stainless steel pipes, duplex steel, and IBR-certified alloy piping that <strong>complements SAIL Salem Steel Plant's</strong> flat product range. While SAIL Salem manufactures SS sheets and coils, CMI supplies the <strong>SS pipes, tubes, fittings, and flanges</strong> that Salem's industries need for complete project execution. With 2000+ tonnes ready stock at our Vadodara warehouse, we deliver within <strong>2-3 days to Salem</strong> (1,400 km). Our expertise extends to <strong>Mettur Thermal Power Station</strong> with IBR-certified alloy boiler tubes and pipes, Salem's textile machinery sector, auto ancillary manufacturers, and the growing foundry cluster. CMI bridges the gap between SAIL Salem's flat stainless production and the region's demand for tubular SS products.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — SS Pipes, IBR Alloy &amp; Steel for Salem</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Salem Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Complementing SAIL Salem:</strong> SAIL Salem makes SS flat products (sheets/coils) — CMI supplies SS PIPES, fittings, and flanges that the plant doesn't manufacture, completing the supply chain for local industries</li>
            <li><strong>Full SS pipe range:</strong> 304, 316L, 321, 310S, 904L, and Duplex grades in seamless and welded — the tubular products Salem's downstream customers need alongside SAIL's flat stock</li>
            <li><strong>IBR alloy for Mettur TPS:</strong> Complete range of P5-P91 alloy pipes and T11/T22/T91 boiler tubes with IBR Form III-C certification for TANGEDCO's Mettur Thermal Power Station</li>
            <li><strong>2-3 day reliable delivery:</strong> 1,400 km from Vadodara to Salem covered efficiently via NH48/NH44 — dedicated transport for urgent power plant and production requirements</li>
            <li><strong>Precision tubes for auto sector:</strong> Thin-wall cold-drawn SS tubes for Salem's growing auto ancillary cluster — dimensional accuracy and surface finish meeting OEM specifications</li>
            <li><strong>Duplex &amp; Super Duplex stock:</strong> UNS S31803/S32205 and S32750/S32760 pipes for chemical processing and pharma facilities in the Salem-Erode industrial corridor</li>
            <li><strong>Complete documentation:</strong> Mill test certificates, IBR Form III-C, third-party inspection reports, PMI certificates — ready for industrial project compliance requirements</li>
            <li><strong>2000+ tonne inventory:</strong> Ex-stock availability eliminates 3-4 month mill lead times — immediate supply for production continuity and project deadlines</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Salem &amp; Tamil Nadu Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Salem &amp; Surrounding Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["SAIL Salem Plant","Mettur Dam TPS","Salem SIDCO","Yercaud Industrial","Rasipuram Industrial","Namakkal Transport Hub","Erode Textile Belt","Karur Industries","Tiruchengode Pump Makers","Attur Industrial","Sankagiri Transport Hub","Dharmapuri District"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Pipes &amp; Tubular Products — Complementing SAIL Salem Steel Plant</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          SAIL Salem Steel Plant is one of India's premier stainless steel producers, specializing in cold-rolled stainless steel sheets, coils, and strips. However, Salem's diverse industrial base also requires <strong>stainless steel pipes, tubes, fittings, and flanges</strong> — products that SAIL Salem doesn't manufacture. Creative Metal Industries fills this gap by supplying the complete range of <strong>SS 304/316L/321/310S seamless and welded pipes</strong>, precision tubes for textile and auto machinery, duplex steel for chemical processing, and IBR-certified alloy pipes for Mettur TPS. For the <strong>Mettur Thermal Power Station</strong> (TANGEDCO), we supply A335 P11/P22/P91 alloy pipes and A213 T11/T22/T91 boiler tubes with complete IBR documentation. Salem's <strong>auto ancillary sector</strong> benefits from our thin-wall precision SS tubes manufactured to tight tolerances for hydraulic lines, exhaust components, and fuel systems. CMI's 2000+ tonne inventory ensures that Salem's industries never face delays waiting for tubular stainless and alloy steel products.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Salem</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Pipes or IBR Alloy Steel in Salem?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Pipes, Duplex, IBR Alloy for SAIL Salem Region & Mettur TPS — Ready stock. 2-3 day delivery.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-trichy",label:"Steel Pipe Supplier Trichy"},
            {href:"/steel-pipe-supplier-coimbatore",label:"Steel Pipe Supplier Coimbatore"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe Supplier India"},
            {href:"/steel-pipe-supplier-chennai",label:"Steel Pipe Supplier Chennai"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="salem" />
      
        <RelatedPages currentPath="/steel-supplier-salem" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Salem | SS Pipes & IBR Alloy | Duplex Steel | SAIL Salem Region | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
