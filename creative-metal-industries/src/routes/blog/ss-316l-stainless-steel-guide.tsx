/**
 * /blog/ss-316l-stainless-steel-guide
 * Standalone page for SS 316L — separate from the "304 vs 316L" comparison
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"SS 316L Stainless Steel — Complete Guide to Properties, Applications & Sourcing","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-17", "dateModified": "2026-06-17","image":"https://www.creativemetalind.com/img/ss_seamless_pipes.jpeg","url":"https://www.creativemetalind.com/blog/ss-316l-stainless-steel-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What makes SS 316L different from SS 304?","acceptedAnswer":{"@type":"Answer","text":"SS 316L contains 2-3% Molybdenum which gives it superior resistance to chloride pitting and crevice corrosion. It also has lower carbon (0.03% max) preventing sensitisation during welding. 316L is the standard grade for marine, pharmaceutical, and chemical processing where chlorides are present."}},{"@type":"Question","name":"Where is SS 316L used?","acceptedAnswer":{"@type":"Answer","text":"SS 316L is used in pharmaceutical equipment (reactors, piping, vessels), marine hardware, coastal architecture, chemical processing (organic acids, chloride solutions), pulp & paper mills, food processing (high-salt environments), medical implants, and offshore oil & gas platforms."}},{"@type":"Question","name":"Can SS 316L withstand seawater?","acceptedAnswer":{"@type":"Answer","text":"SS 316L performs significantly better than 304 in seawater but is not immune to pitting in stagnant or warm seawater. For full seawater immersion or temperatures above 25°C, Duplex 2205 or Super Duplex 2507 is recommended. 316L works well for splash zones and intermittent seawater contact."}},{"@type":"Question","name":"What is the difference between SS 316 and SS 316L?","acceptedAnswer":{"@type":"Answer","text":"SS 316 and SS 316L have the same chromium-nickel-molybdenum base, but 316L has lower carbon (0.03% max vs 0.08% for 316). The low carbon in 316L prevents chromium carbide precipitation (sensitisation) during welding, so it keeps full corrosion resistance in the weld zone. For welded fabrications and any corrosive/chloride service, 316L is preferred; standard 316 is fine for non-welded or lightly welded parts where slightly higher strength is useful."}}]});

export default function SS316LGuide() {
  return (
    <>
      <Title>SS 316L Stainless Steel Guide | CMI</Title>
      <Meta property="og:description" content="Complete guide to SS 316L stainless steel — molybdenum-enhanced corrosion resistance, chemical composition, mechanical properties, pharma/marine/chemical applications. Supplier India." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-316l-stainless-steel-guide" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Guide to SS 316L stainless steel — molybdenum-enhanced corrosion resistance, composition, mechanical properties and pharma, marine and chemical uses." />
      <Meta name="keywords" content="ss 316l, ss316l, 316l stainless steel, ss 316, aisi 316l, uns s31603, 1.4404, marine grade stainless steel, ss 316 vs 316l, ss 304 vs ss 316, 316l chemical composition, 316l properties, 316l price per kg, ss 316l pipe, ss 316l plate, ss 316l sheet, stainless steel pipe manufacturer india, ss pipe supplier vadodara" />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-316l-stainless-steel-guide" />
      <Meta property="og:title" content="SS 316L Stainless Steel — Complete Material Guide" />
      <Meta property="og:type" content="article" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 316L Stainless Steel Guide — Properties & Applications | CMI" />
      <Meta name="twitter:description" content="Complete guide to SS 316L stainless steel — molybdenum-enhanced corrosion resistance, chemical composition, mechanical properties, pharma/marine/chemical applications. Supplier India." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Nav */}
      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/blog" style={{color:"#E8821A","font-weight":"600","font-size":"0.9rem","text-decoration":"none"}}>← All Articles</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a>
        <span style={{margin:"0 0.5rem"}}>›</span>
        <a href="/blog" style={{color:"#E8821A","text-decoration":"none"}}>Blog</a>
        <span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS 316L Stainless Steel Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>

        {/* Header */}
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#DBEAFE",color:"#1E40AF",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Material Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 10 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            316L Stainless Steel — The Marine Grade Standard Explained
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            When standard SS 304 isn't enough — when chlorides, seawater, pharmaceutical purity, or aggressive chemicals are involved — engineers reach for <strong>SS 316L</strong>. The addition of 2-3% Molybdenum transforms this alloy into a chloride-resistant workhorse that dominates marine, pharma, and chemical processing applications worldwide. As a leading <strong>SS 304 316L pipe supplier in India</strong> and <strong>stainless steel pipe manufacturer</strong>, Creative Metal Industries stocks the complete 316L range from our Vadodara facility.
          </p>
        </div>

        {/* What makes 316L different */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What Makes 316L Different from 304?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The single most important difference is <strong>Molybdenum (Mo)</strong>. SS 316L contains 2-3% Mo, which SS 304 completely lacks. Molybdenum dramatically improves resistance to pitting and crevice corrosion in chloride-containing environments — the exact failure mode that destroys 304 in coastal, marine, and chemical service.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The "L" in 316L stands for <strong>Low Carbon</strong> (max 0.03% vs 0.08% for standard 316). This low carbon content prevents chromium carbide precipitation at grain boundaries during welding — a phenomenon called sensitisation that leads to intergranular corrosion in the heat-affected zone. For any welded construction in corrosive service, 316L is the mandatory specification.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>The Pitting Resistance Equivalent Number (PREN) quantifies chloride resistance: PREN = %Cr + 3.3×%Mo + 16×%N. For SS 304, PREN ≈ 18. For SS 316L, PREN ≈ 24. This 33% improvement in PREN translates to dramatically better performance in any environment containing chlorides, bromides, or iodides.</p>

        {/* Chemical Composition */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Chemical Composition of SS 316L</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Element</th><th style={{padding:"0.7rem 1rem"}}>SS 316L (wt%)</th><th style={{padding:"0.7rem 1rem"}}>Why It's There</th></tr></thead>
            <tbody>
              {[["Chromium (Cr)","16.0–18.0%","Forms Cr₂O₃ passive film — primary corrosion barrier"],["Nickel (Ni)","10.0–14.0%","Stabilises austenite; improves ductility and acid resistance"],["Molybdenum (Mo)","2.0–3.0%","KEY ADDITION — resists chloride pitting and crevice corrosion"],["Carbon (C)","0.030% max","Low carbon prevents sensitisation during welding"],["Manganese (Mn)","2.0% max","Deoxidiser; hot-working aid"],["Silicon (Si)","0.75% max","Deoxidiser; improves oxidation resistance"],["Nitrogen (N)","0.10% max","Strengthens and improves PREN"],["Phosphorus (P)","0.045% max","Impurity — kept low"],["Sulphur (S)","0.030% max","Impurity — kept low"],["Iron (Fe)","Balance","Base matrix"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem",color:"#6b7280"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>UNS designation: S31603 | EN equivalent: 1.4404 | Standard: ASTM A312/A240/A182/A276</p>

        {/* Low Carbon Benefits */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why the "L" (Low Carbon) Matters for Welding</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>When stainless steel is heated to 450-850°C during welding, carbon atoms diffuse to grain boundaries and combine with chromium to form chromium carbides (Cr₂₃C₆). This depletes chromium from the area immediately surrounding the grain boundaries, dropping local Cr content below the critical 10.5% needed for passivation. The result: a narrow band of material that corrodes preferentially — intergranular corrosion (IGC).</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>By limiting carbon to 0.03% max (vs 0.08% in standard 316), the 316L grade ensures there simply isn't enough carbon available to form harmful carbide precipitates during typical welding thermal cycles. This means:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li>No post-weld solution annealing required for most applications</li>
          <li>Multi-pass welds don't accumulate sensitisation</li>
          <li>The welded joint retains full corrosion resistance equal to the base metal</li>
          <li>No IGC testing (ASTM A262) failures — critical for pharma and chemical acceptance</li>
          <li>Longer service life in corrosive environments without premature weld-zone failure</li>
        </ul>

        {/* Corrosion Resistance */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Corrosion Resistance — Pitting and Crevice Protection</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Molybdenum's role in 316L is specifically to resist <strong>localised corrosion</strong> — pitting and crevice attack — which are the most dangerous forms of corrosion because they penetrate through the wall thickness while leaving surrounding areas apparently unaffected.</p>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Corrosion Type</th><th style={{padding:"0.7rem 1rem"}}>SS 304 Performance</th><th style={{padding:"0.7rem 1rem"}}>SS 316L Performance</th></tr></thead>
            <tbody>
              {[["Atmospheric (urban/rural)","Excellent","Excellent (overkill)"],["Freshwater","Excellent","Excellent"],["Seawater splash zone","Poor — pits rapidly","Good — handles intermittent exposure"],["Seawater immersion","Fails within months","Marginal — upgrade to Duplex for full immersion"],["Chloride solutions (>200 ppm)","Fails","Resists up to ~1000 ppm Cl⁻ at ambient"],["Dilute organic acids","Good","Excellent"],["Concentrated H₂SO₄","Poor","Moderate (better than 304)"],["Pharmaceutical WFI/PW","Acceptable","Standard grade — required by most pharma specs"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center","font-size":"0.84rem"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center","font-size":"0.84rem"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Applications of SS 316L</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🌊",title:"Marine & Coastal",desc:"Boat hardware, coastal railings, desalination components, dock fittings, offshore platform piping. Anywhere salt spray or seawater contact occurs."},{icon:"💊",title:"Pharmaceutical & Biotech",desc:"Reactors, WFI piping, CIP/SIP systems, fermenters, purified water storage. The default grade specified by FDA, WHO-GMP, and EU pharmacopoeias."},{icon:"🧪",title:"Chemical Processing",desc:"Organic acid storage, chloride-bearing process streams, bleach plants, dyeing equipment. Handles environments that pit and destroy SS 304."},{icon:"🏥",title:"Medical Devices",desc:"Surgical instruments, orthopaedic implants (316LVM — vacuum melted variant), dental tools. Biocompatible with human tissue."},{icon:"🍷",title:"Food & Beverage (High-Salt)",desc:"Brine tanks, pickle processing, soy sauce production, seafood handling, salt-curing equipment. Where food-grade 304 fails due to salt content."},{icon:"🏭",title:"Pulp & Paper",desc:"Digesters, bleach plant piping, white liquor handling. Chloride and sulphide environments that destroy 304 within months."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Source from CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Source 316L from Creative Metal Industries?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>As India's established <strong>SS 304 316L pipe supplier</strong> and a <strong>stainless steel pipe manufacturer</strong> based in Vadodara, Gujarat, we offer specific advantages for 316L procurement:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> SS 316L seamless and welded pipes (ASTM A312) from 6NB to 600NB, all schedules SCH 5S to XXS, at our GIDC Makarpura warehouse</li>
          <li><strong>Plates & sheets:</strong> SS 316L plates (ASTM A240) from 1mm to 100mm thickness, all standard widths, CR and hot-rolled</li>
          <li><strong>Fittings & flanges:</strong> ASTM A403 WP316L buttweld fittings + ASTM A182 F316L flanges — complete range</li>
          <li><strong>Mill sources:</strong> Sandvik (Sweden), Ratnamani (India), POSCO (Korea), Outokumpu (Finland) — all with original MTC 3.1/3.2</li>
          <li><strong>Electropolished pipe:</strong> For pharmaceutical WFI/PW systems — Ra ≤ 0.5µm ID finish with surface roughness certificate</li>
          <li><strong>IBR Form III-C:</strong> Available for boiler and pressure vessel applications requiring Indian Boiler Regulations compliance</li>
          <li><strong>Same-day dispatch:</strong> Standard sizes ship same day from Vadodara. Pan-India delivery in 2-5 working days</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 316L</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What makes SS 316L different from SS 304?",a:"SS 316L contains 2-3% Molybdenum (which 304 lacks entirely) giving it PREN 24 vs 18 for 304. This means dramatically better resistance to chloride pitting and crevice corrosion. The 'L' (low carbon 0.03% max) prevents sensitisation during welding. 316L costs 20-30% more than 304 but is essential for marine, pharma, and chloride environments."},{q:"Where is SS 316L used?",a:"316L is the standard grade for: pharmaceutical equipment (WFI piping, reactors, vessels), marine hardware (boat fittings, coastal railings), chemical processing (chloride solutions, organic acids), medical implants (316LVM), food processing involving salt/brine, pulp & paper bleach plants, and offshore oil & gas platforms."},{q:"Can SS 316L withstand seawater?",a:"316L handles seawater splash and intermittent exposure well. However, for full continuous seawater immersion (especially above 25°C), it can still pit. For full seawater service, upgrade to Duplex 2205 (PREN 35) or Super Duplex 2507 (PREN 42). 316L is suitable for seawater-cooled condensers with adequate flow velocity (>1 m/s) preventing stagnation."},{q:"What is the difference between SS 316 and SS 316L?",a:"Same Cr-Ni-Mo base, but 316L has lower carbon (0.03% max vs 0.08% for 316). The low carbon prevents sensitisation during welding, so 316L keeps full corrosion resistance in the weld zone. Choose 316L for welded fabrication and chloride/corrosive service; standard 316 suits non-welded parts needing slightly higher strength."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS 316L Pipes, Plates or Fittings?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Ready stock at Vadodara. Sandvik, Ratnamani, POSCO brands. MTC + IBR + PMI on every consignment.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Related */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/blog/ss-304-stainless-steel-guide",label:"SS 304 Guide"},{href:"/blog/duplex-2205-steel-guide",label:"Duplex 2205 Guide"},{href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe Supplier"},{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/blog/mill-test-certificate-guide",label:"How to Read MTC"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/ss-316l-stainless-steel-guide" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 316L Pipe Supplier India | Stainless Steel Manufacturer Vadodara</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
