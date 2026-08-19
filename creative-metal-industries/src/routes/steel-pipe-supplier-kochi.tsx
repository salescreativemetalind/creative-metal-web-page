/**
 * /steel-pipe-supplier-kochi
 * Target: "pipe supplier Kochi Kerala", "SS fittings Kochi",
 * "BPCL Kochi", "steel pipe supplier Kochi"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings", grades: "SS 304/316L Elbows, Tees, Reducers, Caps", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 316L, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205 (UNS S31803), Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Exotic Alloys", grades: "Inconel 625, Monel 400, Hastelloy C276, Titanium Gr.2", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, SA 387 Gr.11/22, Cladded Plates", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "BPCL Kochi Refinery", desc: "India's largest single-location refinery complex — alloy pipes, SS fittings, IBR-certified materials for turnaround and expansion projects" },
  { icon: "\u{1F6A2}", name: "Cochin Shipyard Ltd", desc: "India's premier shipbuilder — marine-grade SS 316L pipes, duplex steel, Cu-Ni alloys for vessel piping and repair projects" },
  { icon: "\u{1F3ED}", name: "FACT Udyogamandal", desc: "Fertilizers and Chemicals Travancore — SS 316L, alloy pipes, chemical-resistant fittings for ammonia and acid service" },
  { icon: "\u{1F41F}", name: "Seafood & Fish Processing", desc: "Kerala's Rs 20,000 Cr fishing industry — SS 316L pipes and fittings for hygienic processing, cold storage and brine systems" },
  { icon: "\u26FD", name: "Petronet LNG Kochi", desc: "India's LNG terminal — cryogenic-grade SS 304L/316L, low-temperature CS pipes with NACE compliance for gas distribution" },
  { icon: "\u{1F4BB}", name: "IT Parks & Facilities", desc: "Infopark, SmartCity Kochi — SS piping for HVAC, fire protection systems, MEP contractors supplying tech campuses" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Kochi, Kerala?", a: "Creative Metal Industries (CMI) is a leading steel pipe supplier serving Kochi and Kerala since 2012. We supply stainless steel pipes (304, 316L, 321, 310S, 904L), carbon steel (A106, API 5L), alloy steel (P91, P22, P11), duplex and exotic alloys. We are a trusted vendor for BPCL Kochi Refinery contractors, Cochin Shipyard, FACT Udyogamandal and Petronet LNG Kochi. Our Vadodara warehouse stocks 2000+ tonnes with 2-3 day delivery to Kochi via road transport." },
  { q: "What is the delivery time for steel pipes from Vadodara to Kochi?", a: "Delivery from our Vadodara warehouse to Kochi is 2-3 working days via road (approximately 1,500 km). We have regular transport arrangements to Kochi and all Kerala locations. Express dispatch available for urgent refinery shutdown requirements. We deliver to BPCL Kochi area, Ambalamugal industrial belt, Eloor industrial area, Edayar, Angamaly and all Kerala industrial locations." },
  { q: "Do you supply materials for BPCL Kochi Refinery shutdown projects?", a: "Yes, we have extensive experience supplying materials for BPCL Kochi Refinery turnaround and shutdown projects. Our range includes IBR-certified alloy steel pipes (P5, P9, P11, P22, P91), SS 304/316L pipes and fittings, high-pressure flanges, and carbon steel piping. All materials supplied with complete documentation — MTC EN 10204 3.1/3.2, IBR Form III-C, TPI reports, PMI certificates. We support EPC contractors with urgent material supply during tight shutdown windows." },
  { q: "What SS 316L products are available for Kochi's seafood industry?", a: "We supply a complete range of SS 316L products suitable for Kerala's seafood and fish processing industry. This includes SS 316L seamless and welded pipes (Schedule 10S to 40S), buttweld fittings (elbows, tees, reducers), sanitary/dairy fittings (tri-clamp), and electropolished tubes for hygienic applications. SS 316L is ideal for Kochi's coastal environment due to superior chloride resistance. All products meet FDA and food-grade requirements." },
  { q: "Can you supply marine-grade steel for Cochin Shipyard projects?", a: "Absolutely. We supply marine-grade materials for Cochin Shipyard and other Kerala shipbuilding/repair facilities. Our range includes SS 316L pipes and fittings for vessel piping, duplex 2205 for seawater systems, Cu-Ni 90/10 pipes for condensers and heat exchangers, and Monel 400 for specialized applications. We also supply structural steel plates and sections for hull fabrication. All materials certified to Lloyd's, DNV, or BV marine classification standards as required." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-kochi#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Pipe Supplier Kochi","description":"Leading pipe supplier in Kochi, Kerala offering SS pipes, fittings, alloy steel, duplex and exotic alloys for BPCL Refinery, Cochin Shipyard and Kerala industries.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-kochi","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Kochi","containedInPlace":{"@type":"State","name":"Kerala"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Pipe Supplier Kochi","item":"https://www.creativemetalind.com/steel-pipe-supplier-kochi"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierKochi() {
  return (
    <>
      <Title>Pipe Supplier Kochi | SS Fittings & BPCL Vendor | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Pipe supplier Kochi Kerala — SS 316L pipes, fittings, alloy steel for BPCL Refinery & Cochin Shipyard. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-kochi" />
      <Meta property="og:title" content="Pipe Supplier Kochi Kerala | SS Fittings, Alloy Steel | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Kochi — SS pipes, fittings, alloy steel for refinery & shipyard. 2-3 day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-kochi" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Kochi | SS Fittings & BPCL Vendor | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Kochi Kerala — SS, alloy, duplex pipes & fittings. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Kochi" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Kochi</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Pipe Supplier in Kochi — SS Fittings, Alloy Steel &amp; Refinery Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Kerala's trusted <strong>pipe supplier in Kochi</strong>, delivering stainless steel pipes, SS 316L fittings, carbon steel pipes, alloy steel pipes (P5/P9/P11/P22/P91), duplex steel, and exotic alloys to the state's major industrial facilities. We are an approved vendor for contractors working at <strong>BPCL Kochi Refinery</strong> — India's largest single-location refinery — Cochin Shipyard, FACT Udyogamandal, and Petronet LNG Kochi terminal. Our 2000+ tonne Vadodara warehouse ensures 2-3 day delivery to Kochi across the full range of industrial piping materials. Kerala's coastal environment demands superior corrosion-resistant materials — our SS 316L, duplex and super duplex stocks are always ready for Kochi's demanding applications.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Kochi</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Kochi Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>BPCL Kochi Refinery approved:</strong> Regular supplier to EPC contractors during refinery turnarounds — IBR pipes, TPI documentation, emergency material supply</li>
            <li><strong>Marine-grade materials:</strong> SS 316L, duplex 2205, Cu-Ni, Monel for Cochin Shipyard and Kerala's maritime industry — all marine classification certified</li>
            <li><strong>Coastal corrosion expertise:</strong> SS 316L and duplex recommendations for Kerala's high-humidity, salt-laden atmosphere — superior chloride resistance</li>
            <li><strong>Seafood industry specialist:</strong> Hygienic SS 316L pipes, sanitary fittings, electropolished tubes for fish processing and cold storage facilities</li>
            <li><strong>2-3 day delivery to Kochi:</strong> Regular transport from Vadodara (1,500 km) — express dispatch for refinery shutdown emergencies</li>
            <li><strong>Complete shutdown support:</strong> Alloy P91/P22/P11, SS, CS pipes with full documentation ready — no waiting for mill delivery during turnarounds</li>
            <li><strong>Direct mill pricing:</strong> Jindal, SAIL, Sumitomo, Vallourec, Sandvik — bypass Kerala's multi-layer dealer network for better rates</li>
            <li><strong>Full documentation package:</strong> MTC EN 10204 3.1/3.2, IBR Form III-C, PMI, TPI, NACE compliance — as per BPCL/Cochin Shipyard specs</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Kochi &amp; Kerala</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Kochi &amp; Kerala</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Ambalamugal (BPCL)","Eloor Industrial Area","Edayar Industrial","Angamaly","Kalamassery","Aluva","Thrissur Industrial","Palakkad Industrial","Kozhikode (Calicut)","Thiruvananthapuram","Kochi Port Trust","Willingdon Island"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Materials for Kerala's Industrial Needs</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Kerala's unique industrial landscape demands specialized piping materials that withstand coastal humidity, chemical exposure, and marine environments. Creative Metal Industries supplies the complete range — <strong>SS 316L pipes and fittings</strong> for seafood processing and pharmaceutical plants, <strong>duplex 2205 and super duplex 2507</strong> for seawater cooling systems at BPCL and Petronet LNG, <strong>alloy steel P91/P22</strong> for high-temperature refinery service, <strong>Inconel 625</strong> for FACT's acid-resistant applications, and <strong>Cu-Ni 90/10</strong> for Cochin Shipyard's heat exchanger systems. From Kochi's refinery corridor to Thrissur's engineering cluster to Palakkad's growing industrial zone — one reliable source for all your piping needs.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Kochi</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes or SS Fittings in Kochi? Get Quote Now!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS 316L, Alloy Steel, Duplex — Pipes, Fittings, Flanges. Ready stock. 2-3 day delivery to Kochi.</p>
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
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/steel-pipe-supplier-chennai",label:"Steel Pipe Supplier Chennai"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-pipe-supplier-kochi" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Kochi Kerala | SS Fittings, Alloy Steel, Refinery Piping | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
