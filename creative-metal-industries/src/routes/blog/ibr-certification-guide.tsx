/**
 * /blog/ibr-certification-guide
 * Target: "IBR certification India", "IBR Form III-C", "IBR approved supplier Vadodara"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"IBR Certification Explained — What Indian Buyers Need to Know","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-20","image":"https://www.creativemetalind.com/og-image.jpg","url":"https://www.creativemetalind.com/blog/ibr-certification-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is IBR certification in India?","acceptedAnswer":{"@type":"Answer","text":"IBR stands for Indian Boiler Regulations, a set of rules under the Indian Boilers Act 1923 that govern the manufacture, inspection, and certification of boilers and pressure vessel components in India. IBR certification (Form III-C) is a mandatory legal document certifying that a material has been manufactured and tested under the supervision of an authorised IBR inspector."}},{"@type":"Question","name":"When is IBR certification mandatory?","acceptedAnswer":{"@type":"Answer","text":"IBR certification is mandatory for all materials used in: (1) Steam boilers operating above 1 kg/cm² pressure, (2) Steam piping systems, (3) Pressure vessels connected to boiler systems, (4) Feed water systems operating above specified pressure limits. Any pipe, plate, fitting, or flange used in these services must carry valid IBR Form III-C certification."}},{"@type":"Question","name":"What is IBR Form III-C?","acceptedAnswer":{"@type":"Answer","text":"Form III-C is the official IBR material certificate issued by the manufacturer under the supervision of an authorised Boiler Inspector. It contains: manufacturer details, heat number, material specification, chemical composition, mechanical test results, dimensions, quantity, and the authorised inspector's stamp and signature. It is the legal proof that the material is fit for boiler service."}},{"@type":"Question","name":"How to verify if IBR certification is genuine?","acceptedAnswer":{"@type":"Answer","text":"To verify IBR authenticity: (1) Check for the authorised inspector's personal stamp and signature on Form III-C, (2) Verify the inspector's registration number with the Chief Inspector of Boilers in the respective state, (3) Cross-check heat numbers on the certificate with markings on the physical material, (4) Confirm the manufacturing mill is an IBR-approved manufacturer."}}]});

export default function IbrCertificationGuide() {
  return (
    <>
      <Title>IBR Certification Explained — Guide for Indian Buyers | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="IBR Form III-C certification explained — what it is, when required, which materials need IBR, how to verify. Guide for Indian boiler and pressure vessel buyers. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ibr-certification-guide" />
      <Meta property="og:title" content="IBR Certification Explained — What Indian Buyers Need to Know" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ibr-certification-guide" />
      <Meta property="og:description" content="IBR Form III-C certification explained — what it is, when required, which materials need IBR, how to verify." />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="IBR Certification Explained — Guide for Indian Buyers | CMI" />
      <Meta name="twitter:description" content="IBR Form III-C certification explained — what it is, when required, which materials need IBR, how to verify. Guide for boiler and pressure vessel buyers." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/blog" style={{color:"#E8821A","font-weight":"600","font-size":"0.9rem","text-decoration":"none"}}>&#8592; All Articles</a>
      </nav>

      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/blog" style={{color:"#E8821A","text-decoration":"none"}}>Blog</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>IBR Certification Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FEE2E2",color:"#991b1b",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Compliance Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 9 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            IBR Certification Explained — What Indian Buyers Need to Know
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            If you are procuring pipes, plates, fittings, or flanges for boiler service, steam piping, or pressure vessels in India, you will encounter the requirement for IBR certification. This is not optional — it is a legal mandate under the Indian Boilers Act 1923. Understanding what IBR means, when it applies, and how to verify it can save you from costly procurement mistakes and legal complications. <strong>Creative Metal Industries Vadodara</strong> is an authorised <strong>IBR-approved supplier</strong> for pipes, plates, fittings, and flanges across all material grades.
          </p>
        </div>

        {/* What is IBR */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What Is IBR — Indian Boiler Regulations?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>IBR (Indian Boiler Regulations) is a comprehensive set of rules framed under the Indian Boilers Act, 1923. These regulations govern the design, manufacture, inspection, testing, and certification of boilers, boiler components, and pressure parts used in boiler systems across India.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The primary purpose of IBR is safety — boiler explosions can be catastrophic, and IBR ensures that every component in a boiler system meets stringent quality, material, and testing requirements before it enters service. The regulations are administered by the Central Boilers Board (CBB) under the Ministry of Commerce and Industry, and enforced by state-level Chief Inspectors of Boilers.</p>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>IBR has been in force since 1950 (first notified under the Act of 1923) and has undergone multiple amendments to incorporate modern materials, manufacturing methods, and international standards while maintaining its core safety mandate.</p>

        {/* When is IBR Mandatory */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>When Is IBR Certification Mandatory?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>IBR certification is legally required for materials and components used in the following services:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"1rem","padding-left":"1.25rem"}}>
          <li><strong>Steam boilers:</strong> All boilers generating steam at pressure above 1 kg/cm{"\u00B2"} (gauge) — every pressure part including drums, headers, tubes, and attachments</li>
          <li><strong>Steam piping:</strong> All piping carrying steam from boiler to point of use — including main steam, auxiliary steam, and blow-down piping</li>
          <li><strong>Feed water piping:</strong> From feed pump discharge to boiler drum — all pipes, fittings, valves in this circuit</li>
          <li><strong>Boiler mountings and fittings:</strong> Safety valves, blow-off valves, feed check valves, water level gauges, pressure gauges</li>
          <li><strong>Economisers and superheaters:</strong> All tube bundles, headers, and connecting piping</li>
          <li><strong>Pressure vessels:</strong> Vessels connected to boiler systems operating above specified pressure thresholds</li>
        </ul>
        <p style={{"font-size":"0.92rem",color:"#6b7280","line-height":"1.8","margin-bottom":"2rem"}}>Important: Non-boiler pressure vessels (like process vessels in refineries) may follow ASME instead of IBR, depending on the state inspector's jurisdiction. Always confirm with the local Chief Inspector of Boilers for your specific application.</p>

        {/* Form III-C Explained */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>IBR Form III-C — The Material Certificate</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Form III-C is the official IBR material certificate — the legal document that certifies a batch of material has been manufactured, tested, and inspected in compliance with IBR requirements. It is issued by the material manufacturer under the direct supervision of an authorised IBR Boiler Inspector.</p>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>A valid Form III-C contains:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Manufacturer details:</strong> Name, address, IBR approval number of the manufacturing mill</li>
          <li><strong>Material specification:</strong> IS/ASTM/BS standard, grade, and class of the material</li>
          <li><strong>Heat number:</strong> Unique identification tracing material back to the melt</li>
          <li><strong>Chemical composition:</strong> Ladle and product analysis results showing compliance with spec limits</li>
          <li><strong>Mechanical properties:</strong> Tensile strength, yield strength, elongation, impact values (if required)</li>
          <li><strong>Dimensions and quantity:</strong> Size, thickness, length, and number of pieces in the lot</li>
          <li><strong>Test details:</strong> Hydrostatic test pressure (for pipes), NDT results, special tests as required</li>
          <li><strong>Inspector's certification:</strong> Personal stamp, signature, and registration number of the authorised IBR inspector who witnessed testing</li>
        </ul>

        {/* Which Products Need IBR */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Which Products Need IBR Certification?</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"480px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Product</th><th style={{padding:"0.7rem 1rem"}}>IBR Required?</th><th style={{padding:"0.7rem 1rem"}}>Common Grades</th></tr></thead>
            <tbody>
              {[["Seamless pipes (boiler tubes)","Yes — Form III-C","SA 106 Gr.B, SA 335 P11/P22/P91"],["Welded pipes (steam service)","Yes — Form III-C","SA 672, SA 691"],["Plates (boiler drums/headers)","Yes — Form III-C","SA 516 Gr.60/70, SA 387 Gr.11/22"],["Buttweld fittings","Yes — Form III-C","SA 234 WPB, WP11, WP22"],["Forged fittings","Yes — Form III-C","SA 105, SA 182 F11/F22/F91"],["Flanges","Yes — Form III-C","SA 105, SA 182 F11/F22"],["Tubes (economiser/superheater)","Yes — Form III-C","SA 210 Gr.A1, SA 213 T11/T22"],["Valves (boiler mountings)","Yes — IBR approved","Various per application"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center","font-size":"0.82rem"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Verify */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>How to Verify IBR Certification Authenticity</h2>
        <ol style={{"font-size":"0.92rem",color:"#374151","line-height":"2","margin-bottom":"1rem","padding-left":"1.25rem"}}>
          <li><strong>Inspector's stamp and signature:</strong> Every Form III-C must bear the personal stamp (with registration number) and wet signature of the authorised Boiler Inspector who supervised testing. No stamp = not valid.</li>
          <li><strong>Verify inspector registration:</strong> Cross-check the inspector's registration number with the Chief Inspector of Boilers in the manufacturing state. Each inspector has a unique number traceable in government records.</li>
          <li><strong>Heat number traceability:</strong> The heat number on Form III-C must match the heat number physically stamped/stencilled on the material. Check multiple pieces randomly.</li>
          <li><strong>Manufacturing mill approval:</strong> Confirm the manufacturing mill listed on the certificate is an IBR-approved manufacturer. The list of approved manufacturers is available with state Boiler Directorates.</li>
          <li><strong>Physical marking:</strong> IBR-certified material must be physically marked with: material specification, grade, heat number, manufacturer's logo, and IBR stamp.</li>
        </ol>
        <p style={{"font-size":"0.92rem",color:"#6b7280","line-height":"1.8","margin-bottom":"2rem"}}>Warning: The market has instances of forged (fake) IBR certificates. Always procure from authorised stockists like Creative Metal Industries who maintain direct relationships with IBR-approved mills and can provide verifiable documentation trails.</p>

        {/* CMI as IBR Supplier */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Creative Metal Industries — Authorised IBR Supplier</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Direct mill procurement:</strong> All IBR material sourced directly from IBR-approved primary manufacturers — no secondary or rerolled material</li>
          <li><strong>Complete documentation:</strong> Original Form III-C certificates with every supply, verifiable with issuing authority</li>
          <li><strong>Grade coverage:</strong> Carbon steel (SA 106, SA 516), alloy steel (SA 335 P11/P22/P91, SA 387), stainless steel — all grades for boiler and pressure vessel service</li>
          <li><strong>Product range:</strong> Pipes, plates, fittings, flanges, tubes — complete boiler material packages from single source</li>
          <li><strong>EPC and boiler manufacturer supply:</strong> Regular supplier to boiler OEMs, EPC contractors, and maintenance/shutdown procurement for power plants and process industries across India</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is IBR certification in India?",a:"IBR (Indian Boiler Regulations) certification is a mandatory legal requirement under the Indian Boilers Act 1923 for all materials used in boiler systems, steam piping, and connected pressure vessels. The certificate (Form III-C) proves that material was manufactured and tested under authorised inspector supervision."},{q:"When is IBR certification mandatory?",a:"IBR is mandatory for: steam boilers above 1 kg/cm\u00B2 pressure, all steam piping, feed water piping, economisers, superheaters, and pressure vessels connected to boiler systems. If the material enters boiler or steam service, IBR certification is legally required — no exceptions."},{q:"What is IBR Form III-C?",a:"Form III-C is the official material certificate under IBR. It contains manufacturer details, material specification, heat number, chemical composition, mechanical test results, dimensions, and most importantly — the authorised IBR inspector's stamp and signature certifying that all testing was witnessed and results comply with regulations."},{q:"How to verify if IBR certification is genuine?",a:"Verify by: (1) Checking for inspector's personal stamp with registration number, (2) Cross-verifying inspector number with state Chief Inspector of Boilers, (3) Matching heat numbers on certificate with physical material markings, (4) Confirming the mill is IBR-approved. Always buy from authorised stockists with verifiable supply chains."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need IBR-Certified Material?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Pipes, plates, fittings, flanges — all grades with original IBR Form III-C. Authorised supplier for boiler OEMs and EPC contractors.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles and Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},{href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe Fittings Vadodara"},{href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},{href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — IBR Certified Material Supplier | Boiler Pipes, Plates, Fittings | Vadodara India</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
