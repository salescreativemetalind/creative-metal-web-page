import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

export default function SteelPipeSupplierVasai() {
  const brandColor = "#E8821A";
  const phone = "+91 99982 80619";
  const phoneLink = "tel:+919998280619";
  const domain = "https://www.creativemetalind.com";

  const products = [
    { name: "SS Pipes (304, 316L, 321, 202)", desc: "Stainless steel pipes for pharma, chemical, and food processing applications in Vasai-Virar industrial cluster." },
    { name: "CS Pipes (A106, A53, IS 1239)", desc: "Carbon steel seamless and ERW pipes for general engineering and fabrication units in Palghar district." },
    { name: "Pharma-grade SS Tubes (316L EP)", desc: "Electropolished 316L tubes meeting pharma and biotech standards for Vasai chemical-pharma cluster." },
    { name: "SS Fittings & Flanges", desc: "Stainless steel butt-weld fittings, forged flanges in 304, 316L grades for process piping." },
    { name: "MS Structural Pipes", desc: "Mild steel structural pipes and hollow sections for Vasai-Virar construction and real estate boom." },
    { name: "GI Pipes", desc: "Galvanized iron pipes for water supply, plumbing, and general infrastructure projects in Palghar." },
    { name: "Steel Plates & Sheets", desc: "HR, CR, SS plates and sheets for fabrication shops and engineering units in Vasai MIDC." },
    { name: "Pipe Fittings CS/SS", desc: "Elbows, tees, reducers, couplings in carbon steel and stainless steel for complete piping solutions." },
  ];

  const industries = [
    { name: "Chemical & Pharma Cluster", desc: "SS 316L pipes and EP tubes for pharma plants, API units, and chemical processors in Vasai-Tarapur belt." },
    { name: "Engineering & Fabrication", desc: "CS and MS pipes for precision engineering, machine building, and heavy fabrication workshops." },
    { name: "Steel Fabricators", desc: "Structural steel, MS pipes, plates for fabrication units serving construction and industrial projects." },
    { name: "Food Processing & Packaging", desc: "Food-grade SS pipes and fittings for dairy, beverage, and food processing plants in Vasai-Virar." },
    { name: "Construction & Real Estate", desc: "Structural pipes, GI pipes, MS hollow sections for the booming construction sector in Palghar." },
    { name: "Small-scale Manufacturing", desc: "Cost-effective CS and MS pipes for SSI units, workshops, and small manufacturing setups." },
  ];

  const faqs = [
    { q: "Who is the best steel pipe supplier in Vasai-Virar area?", a: "Creative Metal Industries is a trusted pipe supplier serving Vasai-Virar and Palghar district with SS, CS, and structural pipes. We supply from our Vadodara warehouse with 1-day delivery to all Vasai-Virar industrial areas." },
    { q: "What is the delivery time to Vasai-Virar from your warehouse?", a: "We deliver within 1 day to Vasai-Virar, Palghar, and surrounding industrial areas. Our Vadodara warehouse is within 500 km, ensuring fast dispatch and next-day availability." },
    { q: "Do you supply pharma-grade stainless steel pipes?", a: "Yes, we supply 316L electropolished (EP) tubes and pipes meeting pharma-grade standards. These are ideal for the chemical-pharma cluster in Vasai and Tarapur MIDC." },
    { q: "Can you supply structural pipes for construction projects?", a: "Absolutely. We stock MS structural pipes, hollow sections, and GI pipes suitable for the construction boom in Vasai-Virar and Palghar real estate projects." },
    { q: "What is the cost advantage of ordering from CMI over Mumbai suppliers?", a: "We offer competitive ex-Vadodara pricing with transparent freight. Our direct-from-mill sourcing and bulk inventory mean 10-15% savings compared to Mumbai traders, with same-day or next-day delivery." },
  ];

  const supplyAreas = [
    "Vasai MIDC", "Virar Industrial", "Tarapur MIDC", "Boisar MIDC",
    "Palghar Industrial", "Manor Industrial", "Bhiwandi Warehouse Belt",
    "Thane-Belapur", "Navi Mumbai", "Taloja MIDC", "Ambernath MIDC", "Dombivli MIDC",
  ];

  const relatedLinks = [
    { url: "/steel-pipe-supplier-navi-mumbai", label: "Steel Pipe Supplier Navi Mumbai" },
    { url: "/steel-pipe-supplier-thane", label: "Steel Pipe Supplier Thane" },
    { url: "/ss-304-316l-pipe-supplier-india", label: "SS 304/316L Pipe Supplier India" },
    { url: "/steel-supplier-patalganga", label: "Steel Supplier Patalganga" },
    { url: "/steel-supplier-silvassa", label: "Steel Supplier Silvassa" },
  ];

  return (
    <>
      <Title>Pipe Supplier Vasai | SS & CS Pipes Palghar | CMI</Title>
      <Meta name="description" content="Pipe supplier Vasai-Virar — SS 316L pharma-grade, CS pipes, structural steel for Palghar industries. 1-day delivery. Call +91 99982 80619." />
      <Meta name="keywords" content="pipe supplier Vasai Palghar, industrial steel Vasai, steel pipe supplier Vasai-Virar, SS pipes Palghar, CS pipes Vasai, pharma grade pipes Vasai" />
      <Link rel="canonical" href={`${domain}/steel-pipe-supplier-vasai`} />

      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${brandColor} 0%, #d4710f 100%)`,
        color: "#fff",
        padding: "60px 20px",
        "text-align": "center",
      }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h1 style={{ "font-size": "2.2rem", "margin-bottom": "16px", "font-weight": "700" }}>
            Pipe Supplier Vasai-Virar | SS & CS Pipes for Palghar Industries
          </h1>
          <p style={{ "font-size": "1.15rem", "margin-bottom": "24px", opacity: "0.95" }}>
            Creative Metal Industries — your trusted pipe supplier serving Vasai-Virar, Palghar district, and surrounding industrial areas.
            SS 316L pharma-grade, CS pipes, structural steel with <strong>1-day delivery</strong>.
          </p>
          <a href={phoneLink} style={{
            display: "inline-block",
            background: "#fff",
            color: brandColor,
            padding: "14px 36px",
            "border-radius": "6px",
            "font-weight": "700",
            "font-size": "1.1rem",
            "text-decoration": "none",
          }}>
            Call Now: {phone}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "16px", color: "#222" }}>
            Leading Pipe Supplier in Vasai-Virar & Palghar District
          </h2>
          <p style={{ "font-size": "1.05rem", "line-height": "1.7", color: "#444", "margin-bottom": "14px" }}>
            Creative Metal Industries supplies a comprehensive range of stainless steel, carbon steel, and structural pipes to the growing industrial belt of Vasai-Virar and Palghar district. Located in Vadodara's GIDC Makarpura, we serve the chemical-pharma cluster, engineering workshops, steel fabricators, food processing units, and construction projects across the region.
          </p>
          <p style={{ "font-size": "1.05rem", "line-height": "1.7", color: "#444", "margin-bottom": "14px" }}>
            With a focus on <strong>SS pipes for pharma/chemical applications</strong>, <strong>CS pipes for general engineering</strong>, and <strong>structural steel for construction</strong>, we are the go-to supplier for industries in Vasai MIDC, Tarapur MIDC, Boisar, and the wider Palghar industrial corridor.
          </p>
          <p style={{ "font-size": "1.05rem", "line-height": "1.7", color: "#444" }}>
            Our 1-day delivery capability (Vadodara to Vasai-Virar, ~500 km) ensures your production never stops waiting for material.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: "50px 20px", background: "#f8f8f8" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "30px", color: "#222", "text-align": "center" }}>
            Steel Pipes & Products We Supply to Vasai-Virar
          </h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {products.map((product) => (
              <div style={{
                background: "#fff",
                padding: "24px",
                "border-radius": "8px",
                "box-shadow": "0 2px 8px rgba(0,0,0,0.07)",
                "border-left": `4px solid ${brandColor}`,
              }}>
                <h3 style={{ "font-size": "1.1rem", "margin-bottom": "8px", color: "#222" }}>{product.name}</h3>
                <p style={{ "font-size": "0.95rem", color: "#555", "line-height": "1.6" }}>{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "30px", color: "#222", "text-align": "center" }}>
            Industries We Serve in Vasai-Virar & Palghar
          </h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {industries.map((industry) => (
              <div style={{
                padding: "24px",
                "border-radius": "8px",
                border: "1px solid #e8e8e8",
                background: "#fafafa",
              }}>
                <h3 style={{ "font-size": "1.1rem", "margin-bottom": "8px", color: brandColor }}>{industry.name}</h3>
                <p style={{ "font-size": "0.95rem", color: "#555", "line-height": "1.6" }}>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Areas Section */}
      <section style={{ padding: "50px 20px", background: "#f8f8f8" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "20px", color: "#222", "text-align": "center" }}>
            Areas We Supply Steel Pipes in & Around Vasai-Virar
          </h2>
          <p style={{ "text-align": "center", "margin-bottom": "24px", color: "#555" }}>
            We deliver to all major industrial zones in Palghar, Thane, and Navi Mumbai region:
          </p>
          <div style={{ display: "flex", "flex-wrap": "wrap", gap: "12px", "justify-content": "center" }}>
            {supplyAreas.map((area) => (
              <span style={{
                background: "#fff",
                border: `1px solid ${brandColor}`,
                color: "#333",
                padding: "8px 18px",
                "border-radius": "20px",
                "font-size": "0.95rem",
                "font-weight": "500",
              }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "800px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "30px", color: "#222", "text-align": "center" }}>
            Frequently Asked Questions — Pipe Supplier Vasai
          </h2>
          {faqs.map((faq) => (
            <div style={{ "margin-bottom": "24px", "border-bottom": "1px solid #eee", "padding-bottom": "20px" }}>
              <h3 style={{ "font-size": "1.05rem", color: "#222", "margin-bottom": "8px" }}>{faq.q}</h3>
              <p style={{ "font-size": "0.95rem", color: "#555", "line-height": "1.7" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose CMI */}
      <section style={{ padding: "50px 20px", background: "#f8f8f8" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "24px", color: "#222", "text-align": "center" }}>
            Why Choose Creative Metal Industries for Vasai-Virar?
          </h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <div style={{ "text-align": "center", padding: "20px" }}>
              <div style={{ "font-size": "2rem", "margin-bottom": "10px" }}>🚚</div>
              <h3 style={{ "font-size": "1rem", "margin-bottom": "6px", color: "#222" }}>1-Day Delivery</h3>
              <p style={{ "font-size": "0.9rem", color: "#555" }}>Vadodara to Vasai-Virar in under 24 hours. No production downtime.</p>
            </div>
            <div style={{ "text-align": "center", padding: "20px" }}>
              <div style={{ "font-size": "2rem", "margin-bottom": "10px" }}>🏭</div>
              <h3 style={{ "font-size": "1rem", "margin-bottom": "6px", color: "#222" }}>Mill-Direct Pricing</h3>
              <p style={{ "font-size": "0.9rem", color: "#555" }}>10-15% savings over Mumbai traders with direct sourcing from mills.</p>
            </div>
            <div style={{ "text-align": "center", padding: "20px" }}>
              <div style={{ "font-size": "2rem", "margin-bottom": "10px" }}>📋</div>
              <h3 style={{ "font-size": "1rem", "margin-bottom": "6px", color: "#222" }}>Full Documentation</h3>
              <p style={{ "font-size": "0.9rem", color: "#555" }}>Mill test certificates, material traceability for pharma and chemical compliance.</p>
            </div>
            <div style={{ "text-align": "center", padding: "20px" }}>
              <div style={{ "font-size": "2rem", "margin-bottom": "10px" }}>📦</div>
              <h3 style={{ "font-size": "1rem", "margin-bottom": "6px", color: "#222" }}>Ready Stock</h3>
              <p style={{ "font-size": "0.9rem", color: "#555" }}>5000+ MT inventory of SS, CS, MS pipes ready for immediate dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "50px 20px",
        background: `linear-gradient(135deg, #222 0%, #333 100%)`,
        color: "#fff",
        "text-align": "center",
      }}>
        <div style={{ "max-width": "700px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "16px" }}>
            Get Steel Pipes Delivered to Vasai-Virar Tomorrow
          </h2>
          <p style={{ "font-size": "1.05rem", "margin-bottom": "24px", opacity: "0.9" }}>
            Call us for competitive quotes on SS, CS, and structural pipes. Serving Vasai MIDC, Tarapur, Boisar, and all Palghar industrial areas.
          </p>
          <a href={phoneLink} style={{
            display: "inline-block",
            background: brandColor,
            color: "#fff",
            padding: "14px 36px",
            "border-radius": "6px",
            "font-weight": "700",
            "font-size": "1.1rem",
            "text-decoration": "none",
            "margin-right": "12px",
          }}>
            Call: {phone}
          </a>
          <a href={`${domain}/about`} style={{
            display: "inline-block",
            background: "transparent",
            color: "#fff",
            padding: "14px 36px",
            "border-radius": "6px",
            "font-weight": "600",
            "font-size": "1.05rem",
            "text-decoration": "none",
            border: "2px solid #fff",
          }}>
            About CMI
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ "max-width": "800px", margin: "0 auto", "text-align": "center" }}>
          <h2 style={{ "font-size": "1.3rem", "margin-bottom": "20px", color: "#222" }}>
            Related Pages
          </h2>
          <div style={{ display: "flex", "flex-wrap": "wrap", gap: "10px", "justify-content": "center" }}>
            {relatedLinks.map((link) => (
              <a href={link.url} style={{
                color: brandColor,
                "text-decoration": "none",
                padding: "8px 16px",
                border: `1px solid ${brandColor}`,
                "border-radius": "4px",
                "font-size": "0.9rem",
                "font-weight": "500",
              }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section style={{ padding: "30px 20px", background: "#f0f0f0", "text-align": "center" }}>
        <p style={{ "font-size": "0.9rem", color: "#666", "margin-bottom": "6px" }}>
          <strong>Creative Metal Industries</strong> | 386/B GIDC Estate Makarpura, Vadodara, Gujarat 390010
        </p>
        <p style={{ "font-size": "0.9rem", color: "#666" }}>
          Phone: <a href={phoneLink} style={{ color: brandColor, "text-decoration": "none" }}>{phone}</a> | Website: <a href={domain} style={{ color: brandColor, "text-decoration": "none" }}>www.creativemetalind.com</a>
        </p>
      </section>
    </>
  );
}
