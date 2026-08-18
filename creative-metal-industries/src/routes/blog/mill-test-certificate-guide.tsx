/**
 * /blog/mill-test-certificate-guide
 * Target: "how to read mill test certificate", "creative metal industries vadodara", "engineering material supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Read a Mill Test Certificate (MTC) — A Complete Guide","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-17","image":"https://www.creativemetalind.com/img/ss_seamless_pipe.webp","url":"https://www.creativemetalind.com/blog/mill-test-certificate-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a Mill Test Certificate (MTC)?","acceptedAnswer":{"@type":"Answer","text":"A Mill Test Certificate (MTC), also called a Material Test Report (MTR) or Mill Certificate, is a quality document issued by the steel manufacturer certifying the actual chemical composition and mechanical properties of a specific heat (batch) of material. It links the physical product to its tested properties via a unique heat number stamped on the material."}},{"@type":"Question","name":"What is the difference between EN 10204 3.1 and 3.2?","acceptedAnswer":{"@type":"Answer","text":"EN 10204 Type 3.1 is issued and validated by the manufacturer's own authorised inspection representative. Type 3.2 is validated by BOTH the manufacturer's inspector AND an independent third-party inspector (e.g., DNV, TUV, SGS, Bureau Veritas, Lloyd's). Type 3.2 is required for critical applications: pressure vessels, boilers, nuclear, and IBR-certified material in India."}},{"@type":"Question","name":"What should I check first on an MTC?","acceptedAnswer":{"@type":"Answer","text":"First verify: (1) Heat number on MTC matches the heat number stamped/stencilled on the physical material, (2) Grade/specification matches your purchase order (e.g., SA-312 TP316L), (3) All chemical elements are within the standard's limits, (4) Tensile, yield, and elongation meet or exceed minimums, (5) Any supplementary tests ordered (impact, IGC, hardness) are present and passed."}}]});

export default function MtcGuide() {
  return (
    <>
      <Title>How to Read a Mill Test Certificate (MTC) | Guide | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Complete guide to reading Mill Test Certificates — EN 10204 3.1 vs 3.2, heat numbers, chemical composition, mechanical properties, impact tests. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/mill-test-certificate-guide" />
      <Meta property="og:title" content="How to Read a Mill Test Certificate (MTC) — Complete Guide" />
      <Meta property="og:type" content="article" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="How to Read a Mill Test Certificate (MTC) — Guide | CMI India" />
      <Meta name="twitter:description" content="Complete guide to reading Mill Test Certificates — EN 10204 3.1 vs 3.2, heat numbers, chemical composition, mechanical properties, impact tests. Creative Metal Industries Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/blog" style={{color:"#E8821A","font-weight":"600","font-size":"0.9rem","text-decoration":"none"}}>← All Articles</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <a href="/blog" style={{color:"#E8821A","text-decoration":"none"}}>Blog</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>Mill Test Certificate Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#DCFCE7",color:"#166534",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Buyer's Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 8 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            How to Read a Mill Test Certificate (MTC) — A Complete Guide
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Every steel product you purchase — pipe, plate, fitting, flange, or bar — should come with a Mill Test Certificate proving its composition and properties match the specification you ordered. Yet many procurement engineers and inspectors struggle to interpret MTC data correctly, leading to wrong material acceptance or unnecessary rejections. This guide from <strong>Creative Metal Industries Vadodara</strong> explains every section of an MTC so you can verify material quality with confidence.
          </p>
        </div>

        {/* Section 1 — What is MTC */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What is an MTC and Why It Matters</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>A Mill Test Certificate (MTC) — also called Material Test Report (MTR), Mill Certificate, or Inspection Certificate — is a quality assurance document issued by the steel manufacturer for each heat (batch) of steel produced. It certifies the actual chemical composition and mechanical properties of the material as tested by the mill's laboratory.</p>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8",margin:0}}>The MTC is your legal proof that the material meets the ordered specification. Without it, you cannot verify if the pipe stamped "316L" is actually 316L — it could be 304 (cheaper, wrong corrosion resistance) or even carbon steel with a fake stamp. For IBR-certified boiler materials in India, the MTC (plus Form III-C) is a mandatory legal document retained for the equipment's entire operational life.</p>
        </div>

        {/* Section 2 — Key Sections */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Sections of an MTC Explained</h2>
          <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px"}}>
            <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
              <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Section</th><th style={{padding:"0.7rem 1rem"}}>What It Contains</th><th style={{padding:"0.7rem 1rem"}}>What to Check</th></tr></thead>
              <tbody>
                {[["Header","Mill name, certificate number, date, customer, PO number","Matches your purchase order and supplier"],["Product Description","Grade, standard, size, quantity, delivery condition","Grade = your spec (e.g., SA-312 TP316L)"],["Heat / Cast Number","Unique batch identifier from steelmaking","Must match number stamped on physical material"],["Chemical Composition","Actual ladle analysis (C, Mn, Si, P, S, Cr, Ni, Mo...)","Every element within standard's min/max limits"],["Mechanical Properties","Tensile, yield, elongation, hardness","All values meet or exceed specification minimums"],["Dimensional Data","OD, wall thickness, length","Within ASTM/ASME tolerance limits"],["Test Results","Hydrostatic, flattening, flaring, NDE, impact","All tests PASSED with values recorded"],["Certification Type","EN 10204 Type 3.1 or 3.2","Matches what your PO specified"]].map((r,i) => (
                  <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"700"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem",color:"#065F46"}}>{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3 — Heat Numbers */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Understanding Heat Numbers and Lot Numbers</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The <strong>heat number</strong> is the single most important traceability identifier on any MTC. Every batch of steel melted in a furnace is assigned a unique heat number at the steelmaking stage. This number follows the material through every subsequent process — rolling, heat treatment, finishing, cutting — and is stamped or stencilled on every piece.</p>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Heat number:</strong> Links to chemical composition (one analysis per heat). All material from the same heat has identical chemistry.</li>
            <li><strong>Lot number:</strong> A subset of a heat — material heat-treated together. Mechanical properties are tested per lot. One heat may have multiple lots if heat-treated in different batches.</li>
            <li><strong>Critical check:</strong> ALWAYS verify that the heat number on the physical material matches the heat number on the MTC. If they don't match — the MTC is not valid for that material.</li>
          </ul>
        </div>

        {/* Section 4 — Tensile & Yield */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Reading Tensile and Yield Strength Data</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The mechanical test section shows results from tensile testing a sample cut from the actual product:</p>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem","margin-bottom":"1rem"}}>
            <li><strong>Tensile Strength (UTS):</strong> Maximum stress before fracture. Must exceed the MINIMUM specified in the standard (e.g., 515 MPa for TP304)</li>
            <li><strong>Yield Strength (0.2% Proof Stress):</strong> Stress at which 0.2% permanent deformation occurs. Must exceed minimum (e.g., 205 MPa for TP304). This is the design-critical value.</li>
            <li><strong>Elongation:</strong> % stretch before breaking. Must exceed minimum (e.g., 35% for TP304). Higher = more ductile = safer in service.</li>
            <li><strong>Reduction of Area:</strong> Sometimes reported — indicates ductility in a different way. Not mandatory in most pipe standards.</li>
          </ul>
          <p style={{"font-size":"0.88rem",color:"#991B1B","font-weight":"600",margin:0}}>⚠ Important: If actual values are BELOW specification minimums — the material fails and must be rejected regardless of all other test results.</p>
        </div>

        {/* Section 5 — Impact Tests */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Understanding Impact Test Results</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Charpy V-notch impact tests measure toughness (resistance to brittle fracture) at a specific temperature. The MTC shows:</p>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Test temperature:</strong> e.g., -29°C, -46°C, 0°C — must match what your design code requires for the minimum design metal temperature (MDMT)</li>
            <li><strong>Individual values:</strong> Typically 3 specimens tested — each value is reported (e.g., 85J, 92J, 78J)</li>
            <li><strong>Average value:</strong> Average of 3 specimens must exceed the minimum (e.g., 27J average for carbon steel per ASME)</li>
            <li><strong>Single minimum:</strong> No individual specimen may fall below 70% of the required average (e.g., not below 20J if 27J average required)</li>
            <li><strong>Specimen size:</strong> Full-size (10×10mm) or sub-size (7.5×10, 5×10) — sub-size values must be adjusted by the reduction factor</li>
          </ul>
        </div>

        {/* Section 6 — Common Mistakes */}
        <div style={{background:"#FEF2F2",border:"1px solid #FECACA","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#991B1B","margin":"0 0 1rem","border-bottom":"2px solid #f87171","padding-bottom":"0.5rem"}}>Common Mistakes to Avoid</h2>
          <ol style={{"font-size":"0.92rem",color:"#374151","line-height":"2","padding-left":"1.25rem",margin:0}}>
            <li><strong>Not verifying heat number match:</strong> The MTC is worthless if the heat number doesn't match the physical material — someone may have provided a "paper mill cert" for different material</li>
            <li><strong>Accepting out-of-range chemistry:</strong> Even one element outside spec limits means the material doesn't conform — regardless of how close it is to the limit</li>
            <li><strong>Ignoring the L-grade carbon limit:</strong> For 304L/316L, max carbon is 0.030%. If the MTC shows 0.04% — it's standard 304/316, NOT the L-grade you ordered</li>
            <li><strong>Not checking all supplementary tests:</strong> If your PO specified IGC (A262), PMI, or hardness — these MUST appear on the MTC. Missing = non-conformance</li>
            <li><strong>Accepting Type 3.1 when 3.2 was ordered:</strong> If your project spec requires third-party witnessed testing (3.2), a manufacturer-only certificate (3.1) is non-compliant</li>
            <li><strong>Ignoring units:</strong> Some mills report in ksi (US), some in MPa (metric). 1 ksi = 6.895 MPa. Confusing them leads to incorrect acceptance decisions</li>
          </ol>
        </div>

        {/* Section 7 — Why CMI */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Creative Metal Industries Provides Full MTC Documentation</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>As a responsible <strong>engineering material supplier in India</strong>, <strong>Creative Metal Industries Vadodara</strong> supplies every product with complete, original Mill Test Certificates. Here's our documentation commitment:</p>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Original mill MTCs:</strong> EN 10204 3.1/3.2 — never copies, never third-party reproductions. Direct from Sandvik, Ratnamani, SAIL, AMNS</li>
            <li><strong>Heat number traceability:</strong> Every pipe, plate, and fitting is stamped with heat number that traces back to its MTC</li>
            <li><strong>PMI verification:</strong> Positive Material Identification (XRF gun) performed on incoming material — grade mismatch = rejected at our gate</li>
            <li><strong>Supplementary tests available:</strong> IGC (ASTM A262 Practice E), hardness traverse, grain size (E112), surface roughness — added per project requirement</li>
            <li><strong>IBR Form III-C:</strong> For boiler materials — complete IBR documentation chain from mill to your site</li>
            <li><strong>Digital copies:</strong> MTC scans emailed within 24 hours of dispatch for your records and incoming inspection preparation</li>
          </ul>
        </div>

        {/* FAQ */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — MTC</h2>
          <div style={{display:"flex","flex-direction":"column",gap:"0.75rem"}}>
            {[{q:"What is a Mill Test Certificate (MTC)?",a:"A quality document from the steel manufacturer certifying actual chemical composition and mechanical properties of a specific heat of material. Links physical product to tested properties via heat number. Legal proof the material meets the ordered specification."},{q:"What is the difference between EN 10204 3.1 and 3.2?",a:"3.1 = validated by the manufacturer's own inspector only. 3.2 = validated by manufacturer's inspector AND an independent third-party (DNV, TUV, SGS, BV). 3.2 is required for critical applications: pressure vessels, boilers, nuclear, and IBR material in India."},{q:"What should I check first on an MTC?",a:"(1) Heat number matches physical material, (2) Grade matches PO (e.g., SA-312 TP316L), (3) All chemical elements within limits, (4) Tensile/yield/elongation exceed minimums, (5) All supplementary tests (impact, IGC, hardness) present and passed if ordered."}].map(f => (
              <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Material with Full MTC Documentation?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Every product from CMI comes with original mill MTC. EN 10204 3.1/3.2. IBR Form III-C. PMI verified.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Send Enquiry →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/blog/astm-a312-pipe-guide",label:"ASTM A312 Guide"},{href:"/blog/ss-304-stainless-steel-guide",label:"SS 304 Guide"},{href:"/blog/nace-hic-steel-plates-guide",label:"NACE HIC Plates"},{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Supplier India"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/mill-test-certificate-guide" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Engineering Material Supplier India | Full MTC Documentation | Vadodara</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
