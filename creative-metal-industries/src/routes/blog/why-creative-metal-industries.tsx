/**
 * /blog/why-creative-metal-industries
 * Target: "creative metal industries vadodara", "steel trading company Gujarat", "TMT bars supplier Gujarat", "steel stockist Vadodara"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Why Creative Metal Industries is Gujarat's Preferred Steel Trading Company","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-17","image":"https://www.creativemetalind.com/logo_cmi.png","url":"https://www.creativemetalind.com/blog/why-creative-metal-industries"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Creative Metal Industries supply?","acceptedAnswer":{"@type":"Answer","text":"Creative Metal Industries supplies the complete range of industrial metals: Stainless Steel (304, 316L, 321, 310S, 904L), Carbon Steel (IS 2062, SA 516, A106), Alloy Steel (P5, P9, P11, P22, P91), Duplex & Super Duplex (2205, 2507), and Exotic Alloys (Inconel, Monel, Hastelloy, Titanium, Aluminium, Copper). Product forms: pipes, plates, sheets, fittings, flanges, bars, structural sections, and TMT bars."}},{"@type":"Question","name":"Where is Creative Metal Industries located?","acceptedAnswer":{"@type":"Answer","text":"Office: F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Vadodara 390001, Gujarat. Warehouse/Yard: 386/B, GIDC Estate, Makarpura, Vadodara 390010. The 1,092 sq.mtr warehouse at GIDC Makarpura holds ready stock for immediate dispatch. Open Monday to Saturday, 9 AM to 7 PM. Contact: +91 99982 80619 (Sunny Shah)."}},{"@type":"Question","name":"Does Creative Metal Industries deliver outside Gujarat?","acceptedAnswer":{"@type":"Answer","text":"Yes — we deliver pan-India (2-5 working days) and export to 50+ countries including UAE, Saudi Arabia, Oman, Kuwait, Bahrain, UK, and USA. For Gujarat: same-day delivery to Vadodara, Ahmedabad, Surat, Rajkot, Bharuch, Ankleshwar, Dahej, Gandhinagar. Dedicated transport arrangements for full-truck-load quantities."}}]});

export default function WhyCMI() {
  return (
    <>
      <Title>Why Creative Metal Industries — Gujarat's Steel Trading Company | Vadodara</Title>
      <Meta name="description" content="Why Gujarat's industries choose Creative Metal Industries Vadodara — 15+ years, 1092 sq.mtr stock yard, SS/CS/alloy/exotic metals, IBR/MTC certified. Steel trading company Gujarat. Steel stockist Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/why-creative-metal-industries" />
      <Meta property="og:title" content="Why Creative Metal Industries is Gujarat's Preferred Steel Supplier" />
      <Meta property="og:type" content="article" />
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
        <span>Why Creative Metal Industries</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FFEDD5",color:"#C2410C",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Company</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 7 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            Why Creative Metal Industries is Gujarat's Preferred Steel Trading Company
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Since 2012, <strong>Creative Metal Industries Vadodara</strong> has grown from a small steel trading desk to one of Gujarat's most respected industrial metal suppliers. Operating from a 1,092 sq.mtr warehouse at GIDC Makarpura and serving 500+ projects across India and 50+ export destinations, we have earned the trust of EPC contractors, fabricators, and plant maintenance teams as a reliable <strong>steel stockist in Vadodara</strong> and comprehensive <strong>steel trading company in Gujarat</strong>.
          </p>
        </div>

        {/* Legacy */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Our Legacy and Presence in Vadodara</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Founded by Ghewar Shah in 2012 at Loha Bhavan — the historic steel trading hub of Vadodara's Lakkadpitha Road — Creative Metal Industries began by supplying stainless steel pipes to Gujarat's petrochemical plants. Over 15 years, we expanded into carbon steel, alloy steel, exotic alloys, structural steel, and <a href="/tmt-bars-supplier-gujarat" style={{color:"#E8821A"}}>TMT bars</a> — becoming a one-stop metal trading house.</p>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(140px,1fr))",gap:"0.75rem"}}>
            {[{n:"2012",l:"Year Established"},{n:"15+",l:"Years Experience"},{n:"500+",l:"Projects Supplied"},{n:"50+",l:"Countries Exported"},{n:"1,092",l:"Sq.Mtr Yard Area"},{n:"10+",l:"Metal Alloy Families"}].map(s => (
              <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem","text-align":"center"}}>
                <div style={{"font-size":"1.3rem","font-weight":"800",color:"#E8821A"}}>{s.n}</div>
                <div style={{"font-size":"0.75rem",color:"#6b7280","font-weight":"600"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Extensive Inventory — Every Metal Family</h2>
          <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px"}}>
            <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"500px"}}>
              <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Material Family</th><th style={{padding:"0.7rem 1rem"}}>Key Grades</th><th style={{padding:"0.7rem 1rem"}}>Product Forms</th></tr></thead>
              <tbody>
                {[["Stainless Steel","304, 316L, 321, 310S, 904L","Pipes, plates, fittings, flanges, bars"],["Carbon Steel","IS 2062, SA 516, A106, API 5L","Plates, seamless pipes, ERW, structural"],["Alloy Steel","P5, P9, P11, P22, P91, P92","Seamless pipes, fittings, flanges"],["Duplex / Super Duplex","2205 (S31803), 2507 (S32750)","Pipes, plates, fittings, flanges, bars"],["Exotic Alloys","Inconel 625, Hastelloy C-276, Monel 400, Ti Gr.2/5","All product forms"],["Structural Steel","MS Angle, ISMC, ISMB, Plate, Bars","IS 808, IS 2062 sections"],["TMT Bars","Fe 500, 500D, 550D, 600","8mm to 40mm, BIS certified"]].map((r,i) => (
                  <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"700"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem"}}>{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Quality Assurance — Documentation You Can Trust</h2>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Mill Test Certificates:</strong> EN 10204 Type 3.1/3.2 on every consignment — original mill documents, never copies</li>
            <li><strong>IBR Form III-C:</strong> For all boiler and pressure vessel materials — mandatory for power plant piping in India</li>
            <li><strong>NACE MR-01-75:</strong> Compliant material for sour service with HIC test reports (NACE TM-0284)</li>
            <li><strong>Third-party inspection:</strong> DNV GL, TUV SUD, SGS, Bureau Veritas, Lloyd's Register — at our Vadodara facility</li>
            <li><strong>PMI verification:</strong> Every incoming lot checked with XRF gun — wrong grade = rejected at our gate</li>
            <li><strong>Dimensional inspection:</strong> OD, wall thickness, length verified against ASTM/ASME tolerances before dispatch</li>
          </ul>
        </div>

        {/* Pan-India Supply */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Pan-India Supply + Export Capability</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>From our central Gujarat location, we serve the entire country and beyond:</p>
          <div style={{display:"grid","grid-template-columns":"1fr 1fr",gap:"1rem"}}>
            <div>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#065F46","margin-bottom":"0.5rem"}}>Gujarat (Same-Day):</h3>
              <p style={{"font-size":"0.85rem",color:"#374151","line-height":"1.7",margin:0}}>Vadodara, Ahmedabad, Surat, Rajkot, Bharuch, Ankleshwar, Dahej, Hazira, Gandhinagar, Jamnagar, Vapi, Valsad</p>
            </div>
            <div>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#1E40AF","margin-bottom":"0.5rem"}}>Pan-India (2-5 days):</h3>
              <p style={{"font-size":"0.85rem",color:"#374151","line-height":"1.7",margin:0}}>Mumbai, Pune, Chennai, Hyderabad, Bangalore, Delhi NCR, Kolkata, Bhopal, Indore, Jaipur — and all industrial hubs</p>
            </div>
          </div>
          <p style={{"font-size":"0.88rem",color:"#6b7280","margin-top":"1rem"}}>Export: UAE, Oman, Saudi Arabia, Kuwait, Bahrain, UK, USA, and 50+ countries — complete export documentation, packing, and freight coordination handled in-house.</p>
        </div>

        {/* Industries */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries Served</h2>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(150px,1fr))",gap:"0.6rem"}}>
            {["Oil & Gas","Petrochemicals","Power & Energy","Fertilizers","Chemical & Pharma","Marine & Offshore","Railways & Metro","Construction & EPC","Cement & Mining","Water & Desalination","Food Processing","Aerospace & Defence"].map(ind => (
              <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.6rem 0.8rem","font-size":"0.82rem","font-weight":"600",color:"#374151","text-align":"center"}}>{ind}</div>
            ))}
          </div>
        </div>

        {/* On-Time Delivery */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Our Commitment to On-Time Delivery</h2>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Same-day dispatch:</strong> Standard sizes from ready stock — orders placed before 2 PM ship same day</li>
            <li><strong>Dedicated transport:</strong> Own fleet for local Gujarat deliveries + partner transporters for pan-India</li>
            <li><strong>Emergency supply:</strong> Plant shutdown situations handled on priority — we understand that downtime costs lakhs per hour</li>
            <li><strong>Phased delivery:</strong> For large projects — scheduled deliveries as per your construction sequence, not all at once</li>
            <li><strong>Track and trace:</strong> Dispatch confirmation with vehicle number and expected arrival time shared on WhatsApp</li>
          </ul>
        </div>

        {/* Why Choose */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose Creative Metal Industries?</h2>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem"}}>
            {[{icon:"🏭",h:"Direct Manufacturer & Stockist",d:"No middlemen — mill-direct pricing with full traceability. Your margins stay intact."},{icon:"📦",h:"Deep Ready Stock",d:"1,092 sq.mtr yard carries 1000+ pipe sizes, plates, structural, TMT — for immediate needs."},{icon:"📄",h:"Complete Documentation",d:"MTC 3.1/3.2, IBR Form III-C, NACE, HIC, PMI — no shortcuts on paperwork."},{icon:"🌍",h:"Global Sourcing Network",d:"Sandvik, Ratnamani, POSCO, SAIL, AMNS, Haynes, Special Metals — direct relationships."},{icon:"✂️",h:"Value-Added Services",d:"Cut-to-size, beveling, threading, polishing, pickling — processed to your drawing."},{icon:"🚚",h:"Fastest Delivery in Gujarat",d:"Same-day dispatch. Gujarat next-day. Pan-India 2-5 days. Emergency priority available."}].map(c => (
              <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem"}}>
                <span style={{"font-size":"1.3rem"}}>{c.icon}</span>
                <h3 style={{"font-size":"0.9rem","font-weight":"700",color:"#111827",margin:"0.4rem 0 0.3rem"}}>{c.h}</h3>
                <p style={{"font-size":"0.82rem",color:"#6b7280","line-height":"1.5",margin:0}}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions</h2>
          <div style={{display:"flex","flex-direction":"column",gap:"0.75rem"}}>
            {[{q:"What does Creative Metal Industries supply?",a:"Complete range: SS (304, 316L, 321, 310S, 904L), Carbon Steel (IS 2062, SA 516, A106, API 5L), Alloy Steel (P5-P92), Duplex/Super Duplex (2205, 2507), Exotic Alloys (Inconel, Monel, Hastelloy, Titanium), Structural Steel (Angles, Channels, Beams), TMT Bars (Fe 500D). Product forms: pipes, plates, sheets, fittings, flanges, bars."},{q:"Where is Creative Metal Industries located?",a:"Office: F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Vadodara 390001. Warehouse: 386/B GIDC Estate, Makarpura, Vadodara 390010 (1,092 sq.mtr). Open Mon-Sat 9 AM-7 PM. Contact: +91 99982 80619 (Sunny Shah)."},{q:"Does CMI deliver outside Gujarat?",a:"Yes — pan-India delivery (2-5 days) and export to 50+ countries (UAE, Saudi, Oman, Kuwait, UK, USA). Gujarat same-day: Vadodara, Ahmedabad, Surat, Rajkot, Bharuch, Ankleshwar, Dahej. Dedicated transport for full-truck loads."}].map(f => (
              <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Ready to Partner with Us?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>15+ years. 500+ projects. Every metal. Every certification. One call.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Send Enquiry →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Explore Our Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/tmt-bars-supplier-gujarat",label:"TMT Bars Gujarat"},{href:"/metal-trading",label:"Metal Trading Company"},{href:"/products",label:"Steel Weight Charts"},{href:"/about",label:"About Us"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Trading Company Gujarat | Steel Stockist Vadodara | TMT Bars Supplier</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
