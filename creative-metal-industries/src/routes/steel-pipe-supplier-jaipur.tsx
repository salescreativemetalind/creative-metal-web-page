/**
 * /steel-pipe-supplier-jaipur
 * Target: "pipe supplier Jaipur", "SS fittings Jaipur",
 * "alloy steel Jaipur", "steel pipe supplier Jaipur"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings", grades: "SS 304/316L Elbows, Tees, Reducers, Caps", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Duplex Steel", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, Boiler Quality", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Structural Steel & TMT", grades: "TMT Fe500D, MS Angle, ISMC, ISMB", sizes: "Per IS standards", type: "SAIL / Jindal / Tata", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "Cement & Mining Industry", desc: "JK Cement, UltraTech, Birla — alloy pipes, wear plates, structural steel for kilns and crushers" },
  { icon: "\u{1F6E2}\uFE0F", name: "Oil Refineries (HPCL/IOCL)", desc: "HPCL Jaipur terminal, pipeline projects — SS, CS, alloy pipes with full documentation" },
  { icon: "\u26A1", name: "Power Plants", desc: "Suratgarh TPS, Kota TPS — P91, P22, P11 alloy pipes with IBR Form III-C certification" },
  { icon: "\u{1F48A}", name: "Pharmaceutical", desc: "Sitapura pharma cluster — SS 316L electropolished pipes for GMP-compliant installations" },
  { icon: "\u{1F697}", name: "Automobile & Engineering", desc: "Mahindra, Honda, Bosch Jaipur — precision tubes, hydraulic pipes, SS fittings" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Infrastructure", desc: "Jaipur Metro, smart city projects, RIICO industrial areas — TMT, structural steel, MS plates" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Jaipur?", a: "Creative Metal Industries (CMI) is a trusted steel pipe supplier serving Jaipur and Rajasthan since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11), duplex and exotic alloys along with fittings and flanges. We serve Rajasthan's cement industry, power plants (Suratgarh, Kota TPS), pharma cluster at Sitapura, and RIICO industrial areas. Our Vadodara warehouse stocks 2000+ tonnes with 1-2 day delivery to Jaipur via NH48." },
  { q: "What is the delivery time for pipes from Vadodara to Jaipur?", a: "Delivery from our Vadodara warehouse to Jaipur is just 1-2 working days via road (approx 680 km via NH48). This is one of the fastest delivery corridors we serve. Express same-day dispatch available for urgent requirements. We deliver to all RIICO industrial areas — Sitapura, Mansarovar, Vishwakarma, Bagru, Bhiwadi and Neemrana." },
  { q: "Do you supply SS fittings and flanges in Jaipur?", a: "Yes, we maintain comprehensive stock of SS fittings and flanges for Jaipur industries. Our range includes buttweld fittings (90/45 elbows, equal/reducing tees, concentric/eccentric reducers, caps in SS 304/316L/321), forged fittings (socket weld and threaded), and flanges (weld neck, slip-on, blind, ring type joint in class 150 to 2500). All supplied with original MTC and full material traceability. Same fittings available in carbon steel and alloy steel grades." },
  { q: "What is the price of alloy steel pipe in Jaipur?", a: "Alloy steel pipe (ASTM A335 P11) prices in Jaipur start from Rs 450 per kg for standard sizes. P22 ranges Rs 500-800 per kg and P91 ranges Rs 800-1200 per kg depending on size, schedule and wall thickness. All prices are ex-Vadodara with nominal freight to Jaipur. For exact current pricing, call +91 99982 80619 — formal quotation within 4 hours. Direct mill supply from Sumitomo, Vallourec, ISMT — no broker margins." },
  { q: "Can you supply to cement plants and mining projects in Rajasthan?", a: "Absolutely. We have extensive experience supplying to Rajasthan's cement and mining industry — JK Cement, UltraTech, Birla Corp, ACC, Ambuja. We supply MS pipes (IS 1239/IS 3589) for utility piping, alloy steel pipes for kiln and preheater systems, wear-resistant plates (Hardox equivalent), structural steel (angles, channels, beams) for plant construction, and SS pipes for water treatment. Complete documentation with original MTC and test certificates provided." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-jaipur#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Pipe Supplier Jaipur","description":"Leading steel pipe supplier in Jaipur offering SS pipes, CS pipes, alloy steel, SS fittings, flanges and structural steel for cement, power and manufacturing industries.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-jaipur","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Jaipur","containedInPlace":{"@type":"State","name":"Rajasthan"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Pipe Supplier Jaipur","item":"https://www.creativemetalind.com/steel-pipe-supplier-jaipur"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierJaipur() {
  return (
    <>
      <Title>Pipe Supplier Jaipur | SS Fittings & Alloy Steel | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Pipe supplier Jaipur — SS 304/316L pipes, fittings, flanges, alloy steel P91/P22, carbon steel. 1-2 day delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-jaipur" />
      <Meta property="og:title" content="Pipe Supplier Jaipur | SS Fittings, Alloy Steel | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Jaipur — SS pipes, fittings, alloy steel. 1-2 day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-jaipur" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Jaipur | SS Fittings & Alloy Steel | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Jaipur — SS, CS, alloy pipes & fittings. 1-2 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Jaipur" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Jaipur</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Pipe Supplier in Jaipur — SS Fittings, Alloy Steel &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Rajasthan's preferred <strong>pipe supplier in Jaipur</strong>, delivering stainless steel pipes, SS fittings, carbon steel pipes, alloy steel pipes, flanges and structural steel to the state's thriving industrial sector. From Rajasthan's massive cement industry (JK Cement, UltraTech, Birla) to Kota and Suratgarh thermal power stations, HPCL pipeline projects to Sitapura's pharma cluster — we supply premium piping materials with just 1-2 day delivery from our 2000+ tonne Vadodara warehouse. Being only 680 km away on NH48, Jaipur enjoys one of our fastest delivery corridors.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Jaipur</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Jaipur Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Fastest delivery in Rajasthan:</strong> Just 1-2 days from Vadodara to Jaipur (680 km via NH48) — faster than Delhi or Mumbai suppliers</li>
            <li><strong>Cement industry specialist:</strong> MS pipes, alloy pipes, wear plates, structural steel for kiln systems, crushers and material handling</li>
            <li><strong>Complete SS fittings range:</strong> Buttweld elbows, tees, reducers + forged fittings + flanges in SS 304/316L/321 — all from ready stock</li>
            <li><strong>Power plant approved:</strong> IBR-certified P91, P22, P11 for Kota TPS, Suratgarh TPS and other Rajasthan state power plants</li>
            <li><strong>No middleman pricing:</strong> Direct from Jindal, SAIL, Sumitomo, Vallourec — bypass Jaipur's Chandpole/Johari Bazaar dealer chains</li>
            <li><strong>Full documentation:</strong> MTC EN 10204 3.1/3.2, IBR Form III-C, PMI, TPI reports — as per your project specifications</li>
            <li><strong>All materials, one source:</strong> SS, CS, alloy, duplex, exotic alloys + fittings + flanges + plates + structural — single purchase order</li>
            <li><strong>13+ years serving Rajasthan:</strong> Trusted by the state's leading cement companies, EPC contractors and fabricators</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Jaipur &amp; Rajasthan</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Jaipur &amp; Rajasthan</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["RIICO Sitapura","RIICO Mansarovar","Vishwakarma Industrial Area","Bagru Industrial Area","Bhiwadi (Alwar)","Neemrana (Japanese Zone)","Kota Industrial Area","Jodhpur RIICO","Udaipur Industrial","Ajmer RIICO","Bhilwara Textile Belt","Suratgarh TPS"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines Available in Jaipur</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Creative Metal Industries delivers the full range of industrial steel products across Rajasthan. Beyond pipes and fittings, our inventory includes <strong>flanges</strong> (SS/CS/alloy in all types and pressure classes), <strong>steel plates</strong> (SA 516 Gr.70, boiler quality, IS 2062 structural), <strong>TMT bars</strong> (Fe 500D for construction — SAIL, Tata, Jindal), <strong>structural steel</strong> (MS angle, ISMC channel, ISMB beam for plant construction), <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel for specialized chemical applications), and <strong>fasteners</strong> (A193 B7 stud bolts, A194 2H nuts). From cement plant expansion to pharma facility piping to highway construction — one supplier for everything.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Jaipur</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes or SS Fittings in Jaipur? Get Quote Now!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS, Carbon Steel, Alloy — Pipes, Fittings, Flanges. Ready stock. 1-2 day delivery to Jaipur.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings India"},
            {href:"/steel-pipe-supplier-delhi",label:"Steel Pipe Supplier Delhi"},
            {href:"/steel-supplier-indore",label:"Steel Supplier Indore"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="jaipur" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-jaipur" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Jaipur | SS Fittings, Alloy Steel, Industrial Piping | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
