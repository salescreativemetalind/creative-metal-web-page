/**
 * /inconel-pipe-supplier-india
 * Target: "Inconel pipe supplier India", "Inconel 625 pipe supplier",
 * "Inconel 600 pipe India", "nickel alloy pipe supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"Inconel 600", uns:"N06600", spec:"ASTM B167 / B829", composition:"72Ni-15Cr-8Fe", sizes:"1/2\" to 12\"", apps:"Furnace components, chemical processing, nuclear", stock:"Ready Stock" },
  { grade:"Inconel 625", uns:"N06625", spec:"ASTM B444 / B705", composition:"61Ni-21.5Cr-9Mo-3.6Nb", sizes:"1/2\" to 12\"", apps:"Offshore, flue gas, aerospace, chemical reactors", stock:"Ready Stock" },
  { grade:"Inconel 718", uns:"N07718", spec:"ASTM B637 / AMS 5662", composition:"52.5Ni-19Cr-18Fe-5.1Nb-3Mo", sizes:"1/2\" to 8\"", apps:"Gas turbines, aerospace, cryogenic", stock:"Available" },
  { grade:"Inconel 825", uns:"N08825", spec:"ASTM B423 / B705", composition:"42Ni-21.5Cr-3Mo-2.2Cu-30Fe", sizes:"1/2\" to 10\"", apps:"Acid production, oil well, pickling", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is the difference between Inconel 625 and Inconel 600?", a:"Inconel 625 (N06625) contains 9% Molybdenum and 3.6% Niobium which gives it superior corrosion resistance in aggressive environments including pitting and crevice corrosion. Inconel 600 (N06600) is a simpler Ni-Cr-Fe alloy with excellent oxidation resistance at high temperatures but lower corrosion resistance than 625. Use 625 for chemical/offshore and 600 for furnace/thermal processing applications." },
  { q:"What sizes of Inconel pipe do you stock?", a:"We stock Inconel seamless and welded pipes from 1/2 inch (15NB) to 12 inches (300NB) in schedules SCH 5S, 10S, 40S, 40, 80S, 80, 120, 160 and XXS. Standard random lengths 5-7 metres. Cut-to-length and custom sizes available on request with 4-6 week lead time from mill." },
  { q:"Why is Inconel pipe so expensive?", a:"Inconel pipe commands premium pricing due to: high nickel content (52-72%), complex alloy additions (Mo, Nb, Cr), difficult hot-working process, stringent quality testing (UT, ET, hydro, NACE), and limited global mill capacity. However, the total cost of ownership is lower due to extreme longevity in corrosive and high-temperature environments where carbon or stainless steel would fail rapidly." },
  { q:"Do you supply Inconel pipe with NACE compliance?", a:"Yes. All our Inconel pipes are available in NACE MR-01-75 / ISO 15156 compliant condition for sour service (H2S environments). This requires hardness below 40 HRC for Inconel 625 and solution annealed condition. We supply with full documentation including NACE compliance certificate, hardness reports, and IGC test per ASTM G28." },
  { q:"What industries use Inconel pipe?", a:"Inconel pipe is used in gas turbines and jet engines (718), chemical reactors and flue gas desulfurisation (625), nuclear reactors and furnace components (600), oil well tubing and acid production (825), aerospace exhaust systems, offshore subsea pipelines, bellows and expansion joints, and heat exchangers in corrosive environments." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/inconel-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Inconel Pipe Supplier India","item":"https://www.creativemetalind.com/inconel-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function InconelPipeSupplierIndia() {
  return (
    <>
      <Title>Inconel Pipe Supplier India | 625, 600, 718 | CMI Vadodara</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Inconel pipe supplier in India — Inconel 625 (N06625), 600 (N06600), 718 & 825 seamless and welded pipes. ASTM B444/B167. NACE + MTC certified." />
      <Link rel="canonical" href="https://www.creativemetalind.com/inconel-pipe-supplier-india" />
      <Meta property="og:title" content="Inconel Pipe Supplier India | 625, 600, 718, 825 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Inconel pipe supplier India — 625, 600, 718, 825 seamless and welded pipes. ASTM B444, B167. NACE, MTC certified. Creative Metal Industries Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/inconel-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Inconel Pipe Supplier India | 625, 600, 718 | CMI Vadodara" />
      <Meta name="twitter:description" content="Inconel pipe supplier India — 625, 600, 718, 825. ASTM B444/B167. NACE compliant. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Inconel Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Inconel Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            Inconel Pipe Supplier in India — Alloy 600, 625, 718, 825
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>Inconel pipe supplier</strong> stocking seamless and welded pipes in <strong>Inconel 625</strong> (UNS N06625), <strong>Inconel 600</strong> (UNS N06600), <strong>Inconel 718</strong> (UNS N07718) and <strong>Inconel 825</strong> (UNS N08825). All pipes manufactured to ASTM B444, B167, B829 and B705 specifications. These nickel-chromium superalloys deliver exceptional resistance to high-temperature oxidation, pitting, crevice corrosion and stress-corrosion cracking — ideal for the most demanding environments in aerospace, chemical, offshore and power generation industries. NACE MR-01-75 compliant. Full MTC with heat traceability.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Inconel Pipe Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>UNS</th><th style={{padding:"0.7rem 0.8rem"}}>Specification</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.uns}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.spec}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Inconel 625 */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Inconel 625 Pipe Supplier — Grades &amp; Specifications</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          As a dedicated <strong>Inconel 625 supplier</strong>, we hold ready stock of <strong>Inconel 625 pipe</strong> (UNS N06625) in seamless and welded form to ASTM B444 and B705, sizes 1/2" to 12". The 61Ni-21.5Cr-9Mo-3.6Nb composition delivers standout resistance to pitting, crevice corrosion and stress-corrosion cracking, which is why 625 is the grade of choice for offshore, flue gas desulfurisation and chemical reactor duty. Every length ships with full MTC and heat traceability — see the grade table above for the complete 625 specification.
        </p>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standards (Seamless)",value:"ASTM B444, B167, B829, B163"},
            {label:"Standards (Welded)",value:"ASTM B705, B514, B517"},
            {label:"Size Range",value:"1/2\" to 12\" (15NB to 300NB)"},
            {label:"Schedules",value:"SCH 5S, 10S, 40S, 40, 80S, 80, 120, 160, XXS"},
            {label:"Form",value:"Seamless, welded (ERW/EFW), fabricated"},
            {label:"Testing",value:"Hydro, UT, ET, IGC (ASTM G28), PMI, Flattening"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE MR-01-75"},
            {label:"Heat Treatment",value:"Solution annealed (1040-1175°C depending on grade)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Inconel Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Gas Turbines & Jet Engines",desc:"Inconel 718 and 625 for combustion liners, exhaust ducts, turbine seals operating at 650-1000°C"},
            {title:"Chemical Reactors",desc:"Inconel 625 for reactors handling HCl, H2SO4, phosphoric acid and chloride environments"},
            {title:"Offshore & Subsea",desc:"Inconel 625 clad and solid pipes for risers, umbilicals and flowlines in deepwater oil & gas"},
            {title:"Nuclear Reactors",desc:"Inconel 600 for steam generator tubes, reactor vessel components and control rod mechanisms"},
            {title:"Flue Gas Desulfurisation",desc:"Inconel 625 for FGD scrubber systems handling hot acidic gases in power plants"},
            {title:"Bellows & Expansion Joints",desc:"Inconel 625 for flexible expansion joints and bellows in high-temp exhaust systems"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose CMI for Exotic Alloy and Inconel Pipes?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Specialist exotic alloy stockist:</strong> Dedicated inventory of Inconel 625, 600, 718 and 825 pipes at our Vadodara warehouse</li>
          <li><strong>Mill-direct sourcing:</strong> We source from Special Metals (Huntington Alloys), VDM Metals, Sandvik and Nippon Alloys — guaranteed authenticity</li>
          <li><strong>Full traceability:</strong> Every pipe ships with original MTC, heat number, chemical and mechanical test reports per EN 10204 3.1/3.2</li>
          <li><strong>NACE compliant:</strong> All Inconel pipes supplied in solution annealed condition meeting NACE MR-01-75 / ISO 15156 for sour service</li>
          <li><strong>Technical expertise:</strong> Our team helps you select the right grade — 600 vs 625 vs 718 vs 825 — based on your operating conditions</li>
          <li><strong>PMI verified:</strong> 100% Positive Material Identification on every pipe using XRF analyser before dispatch</li>
          <li><strong>Competitive pricing:</strong> Direct import from mills — no intermediary markup. Formal quotation within 4 hours</li>
          <li><strong>Custom requirements:</strong> Special wall thickness, custom lengths, and non-standard schedules available with 4-8 week mill delivery</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Supply Inconel Pipe To</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"\u2708\uFE0F",name:"Aerospace & Defence"},{icon:"\u{1F6E2}\uFE0F",name:"Oil & Gas Upstream"},{icon:"\u{1F9EA}",name:"Chemical Processing"},{icon:"\u2622\uFE0F",name:"Nuclear Power"},{icon:"\u26A1",name:"Thermal Power Plants"},{icon:"\u2693",name:"Marine & Offshore"},{icon:"\u{1F52C}",name:"R&D / Laboratory"},{icon:"\u{1F3D7}\uFE0F",name:"EPC Contractors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Inconel Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Inconel Pipe? Get Expert Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Inconel 625, 600, 718, 825. ASTM B444/B167. Seamless and welded. NACE + MTC. Stock India.</p>
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
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/inconel-600-pipe-supplier-india",label:"Inconel 600 Pipe India"},
            {href:"/inconel-718-supplier-india",label:"Inconel 718 Supplier"},
            {href:"/hastelloy-pipe-supplier-india",label:"Hastelloy C276 Pipe"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/inconel-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Inconel Pipe Supplier India | Alloy 625, 600, 718, 825 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
