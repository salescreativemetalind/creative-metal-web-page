/**
 * /ss-electropolished-pipe-india
 * Target: "SS electropolished pipe India", "316L EP pipe supplier",
 * "ASTM A270 electropolished pipe", "pharmaceutical pipe supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade:"316L EP Ra<=0.4um", composition:"16Cr-10Ni-2Mo, EP ID/OD", sizes:"OD 12.7-114.3mm, WT 1.65-2.77mm", wall:"ASTM A270 / ASME BPE", apps:"Pharma WFI/PW systems", ht:"Annealed + electropolished + passivated", stock:"Ready Stock" },
  { grade:"316L EP Ra<=0.25um", composition:"16Cr-10Ni-2Mo, ultra-EP ID", sizes:"OD 25.4-76.2mm, WT 1.65-2.11mm", wall:"ASME BPE SF-4", apps:"Biotech, semiconductor UHP gas", ht:"Annealed + ultra-EP + passivated", stock:"Available" },
  { grade:"304L EP", composition:"18Cr-8Ni-0.03C, EP ID/OD", sizes:"OD 12.7-101.6mm, WT 1.65-2.77mm", wall:"ASTM A270", apps:"Food, dairy, cosmetics", ht:"Annealed + electropolished", stock:"Ready Stock" },
  { grade:"316L EP Orbital", composition:"16Cr-10Ni-2Mo, EP + orbital weld prep", sizes:"OD 12.7-76.2mm, WT 1.65mm", wall:"ASME BPE", apps:"Pharma high-purity loops", ht:"Annealed + EP + squared ends", stock:"Ready Stock" },
  { grade:"316L EP Fittings", composition:"16Cr-10Ni-2Mo, EP ID match", sizes:"OD 12.7-76.2mm, tri-clamp/butt-weld", wall:"ASME BPE", apps:"System components, elbows, tees", ht:"Annealed + EP + passivated", stock:"Available" },
];

const FAQS = [
  { q:"What is electropolished (EP) pipe and how is it made?", a:"Electropolished pipe is stainless steel tube that has undergone an electrochemical surface finishing process. The pipe is immersed in a phosphoric-sulphuric acid electrolyte and subjected to a direct current, causing controlled dissolution of surface peaks. This produces an ultra-smooth, microscopically flat surface with Ra values below 0.4 micrometres (typically 0.2-0.4um). The process also enriches the chromium-to-iron ratio on the surface, creating a superior passive layer that resists corrosion and particle adhesion." },
  { q:"What Ra values can you supply and how are they measured?", a:"We supply EP pipe in two standard Ra levels: Ra less than or equal to 0.4 micrometres (standard pharmaceutical grade per ASME BPE SF-3) and Ra less than or equal to 0.25 micrometres (ultra-high-purity grade per ASME BPE SF-4 for semiconductor applications). Surface roughness is measured using a calibrated profilometer at multiple locations along the tube length and at both ends. Each tube is supplied with an individual Ra measurement report showing readings at 0-degree, 90-degree, 180-degree and 270-degree positions." },
  { q:"Which pharmaceutical standards does your EP pipe meet?", a:"Our 316L EP pipe complies with ASTM A270, ASME BPE (BioProcessing Equipment standard), FDA 21 CFR, EU GMP Annex 1, and ISPE Baseline Guide for Water and Steam Systems. The pipe meets 3-A Sanitary Standards for cleanability. Documentation includes material certificates, EP process certificates, Ra measurement reports, borescope images, passivation verification per ASTM A967, and rouge-free test reports. We can supply validation packages for pharma project qualification (IQ/OQ documentation)." },
  { q:"What joining methods are recommended for EP pipe systems?", a:"Orbital automatic TIG welding is the preferred joining method for EP pipe systems because it produces consistent, repeatable welds with minimal heat-affected zone and no crevices. Orbital welds maintain the internal surface quality of the EP pipe and can be borescope-inspected to ASME BPE weld acceptance criteria. For connections to equipment, tri-clamp (sanitary clamp) fittings are used. We supply EP pipe with squared, deburred ends prepared specifically for orbital welding to ensure proper fit-up and penetration." },
  { q:"Can you supply complete EP pipe systems including fittings?", a:"Yes. We supply complete electropolished piping systems including straight tubes, 90-degree and 45-degree elbows, tees, reducers, tri-clamp ferrules, gaskets, clamps, sample valves, diaphragm valves, and tank outlets — all electropolished to matching Ra values. This ensures consistent surface quality throughout the entire system. We can also provide pre-fabricated pipe spools (orbital welded in our clean room) ready for site installation, significantly reducing field welding and validation time." },
  { q:"What is passivation and why is it important for EP pipe?", a:"Passivation is a chemical treatment (typically with citric or nitric acid per ASTM A967) that removes free iron from the surface and enhances the protective chromium oxide layer. After electropolishing, passivation further improves the corrosion resistance of the pipe surface and reduces the risk of rouge formation in high-purity water systems. All our EP pipe is passivated after electropolishing and verified by water-break testing and ferroxyl testing to confirm a uniform, iron-free passive surface." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Electropolished Pipe 316L","description":"316L electropolished pipe to ASTM A270/ASME BPE. Ra<=0.4um and Ra<=0.25um. OD 12.7-114.3mm. For pharmaceutical purified water, biotech, semiconductor. Complete EP system supply with fittings.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"800","highPrice":"6000","offerCount":"150+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"26","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Electropolished Pipe India","item":"https://www.creativemetalind.com/ss-electropolished-pipe-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsElectropolishedPipeIndia() {
  return (
    <>
      <Title>SS Electropolished Pipe India | 316L EP Ra 0.4um | ASTM A270 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="India's leading SS electropolished pipe supplier. 316L EP pipe to ASTM A270/ASME BPE. Ra<=0.4um and Ra<=0.25um. OD 12.7-114.3mm. Pharmaceutical, biotech, semiconductor. Complete EP systems with fittings. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-electropolished-pipe-india" />
      <Meta property="og:title" content="SS Electropolished Pipe India | 316L EP | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="316L electropolished pipe supplier India — ASTM A270, ASME BPE. Ra<=0.4um. Pharma WFI, biotech, semiconductor. Complete systems. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-electropolished-pipe-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Electropolished Pipe India | 316L EP Ra 0.4um | CMI" />
      <Meta name="twitter:description" content="316L EP pipe supplier India — ASTM A270. Ra<=0.4um. Pharma, biotech, semiconductor. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Electropolished Pipe India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Electropolished Pipe India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Electropolished Pipe Supplier India — 316L EP, ASME BPE
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>SS electropolished pipe supplier</strong> providing 316L and 304L EP pipe to <strong>ASTM A270 and ASME BPE</strong> standards. Internal surface roughness Ra less than or equal to 0.4 micrometres (standard pharma) and Ra less than or equal to 0.25 micrometres (semiconductor ultra-high-purity). OD range 12.7mm to 114.3mm. We supply complete electropolished piping systems including tubes, fittings, valves and pre-fabricated spools for pharmaceutical purified water (WFI/PW), biotech clean utilities, and semiconductor gas delivery. Ready stock from Vadodara.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Electropolished Pipe Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition / Finish</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Standard</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.wall}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standards",value:"ASTM A270, ASME BPE, 3-A Sanitary"},
            {label:"OD Range",value:"12.7mm to 114.3mm"},
            {label:"Wall Thickness",value:"1.65mm to 2.77mm"},
            {label:"Surface Roughness",value:"Ra <= 0.4um (SF-3), Ra <= 0.25um (SF-4)"},
            {label:"EP Process",value:"Phosphoric-sulphuric acid electrolyte"},
            {label:"Passivation",value:"Citric acid per ASTM A967"},
            {label:"Documentation",value:"Ra reports, borescope, EP cert, MTC"},
            {label:"End Prep",value:"Squared, deburred, orbital weld ready"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Electropolished Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Pharma-qualified supply:</strong> ASTM A270, ASME BPE, FDA 21 CFR, EU GMP Annex 1 compliant</li>
          <li><strong>Verified Ra values:</strong> Individual tube Ra measurement reports with profilometer traceable to national standards</li>
          <li><strong>Complete system supply:</strong> EP tubes + fittings + valves all matched to same Ra specification</li>
          <li><strong>Orbital weld ready:</strong> Squared, deburred ends prepared for automatic orbital TIG welding</li>
          <li><strong>Pre-fabricated spools:</strong> Orbital-welded assemblies from our clean environment workshop</li>
          <li><strong>Passivation certified:</strong> Every tube passivated per ASTM A967 and verified by ferroxyl testing</li>
          <li><strong>Validation support:</strong> IQ/OQ documentation packages for pharmaceutical project qualification</li>
          <li><strong>Ready stock:</strong> 316L EP tubes OD 12.7-76.2mm in Ra 0.4um or less dispatched within 48 hours</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS Electropolished Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"💊",name:"Pharmaceutical WFI/PW"},{icon:"🧬",name:"Biotech Clean Utilities"},{icon:"💻",name:"Semiconductor UHP Gas"},{icon:"🧪",name:"API Manufacturing"},{icon:"💉",name:"Injectables Production"},{icon:"🔬",name:"Laboratory Systems"},{icon:"🏥",name:"Hospital Gas Piping"},{icon:"🥛",name:"High-Purity Dairy/Food"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Electropolished Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Electropolished Pipe? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>316L EP. ASTM A270, ASME BPE. Ra 0.4um or less. OD 12.7-114.3mm. Complete pharma systems. Ready stock India.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>+91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-polished-pipe-supplier-india",label:"SS Polished Pipe India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
            {href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings India"},
            {href:"/ss-capillary-tube-supplier-india",label:"SS Capillary Tube India"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Electropolished Pipe Supplier India | ASTM A270 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
