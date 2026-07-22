import { Title, Meta, Link } from "@solidjs/meta";

export default function SteelPipeSupplierHubli() {
  const products = [
    { name: "SS Pipes (304, 316L, 202, 321)", desc: "Stainless steel pipes for engineering, food processing & chemical applications in Hubli-Dharwad." },
    { name: "CS Pipes (A106, A53, IS 1239, IS 3589)", desc: "Carbon steel pipes for industrial piping, boiler lines & structural use across Karnataka." },
    { name: "MS Structural (IS 2062, IS 1161, IS 4923)", desc: "Mild steel structural pipes and sections for construction & fabrication in Hubli region." },
    { name: "SS Fittings & Flanges", desc: "Stainless steel fittings and flanges for process piping & sanitary applications." },
    { name: "Alloy Steel Pipes (P11/P22)", desc: "Alloy steel pipes for high-temperature service in power plants & refineries." },
    { name: "GI Pipes", desc: "Galvanized iron pipes for water supply, plumbing & general purpose piping." },
    { name: "Steel Plates", desc: "MS, SS & alloy steel plates for fabrication, pressure vessels & structural use." },
    { name: "Pipe Fittings CS/SS", desc: "Carbon steel & stainless steel pipe fittings — elbows, tees, reducers, flanges." },
  ];

  const industries = [
    { name: "Engineering & Foundry Cluster", desc: "Supplying pipes and fittings to Hubli's engineering workshops and foundry units." },
    { name: "Railway Workshop Hubli", desc: "Structural and piping materials for railway maintenance and fabrication workshops." },
    { name: "Textile Industry", desc: "Steam and process piping solutions for textile mills in Hubli-Dharwad region." },
    { name: "Food Processing", desc: "SS pipes and hygienic fittings for food processing plants in North Karnataka." },
    { name: "BVB/University R&D", desc: "Material supply for research labs and university engineering projects." },
    { name: "Sugar & Cement Plants", desc: "Heavy-duty piping and structural steel for sugar mills and cement factories." },
  ];

  const faqs = [
    { q: "Who is the best steel pipe supplier in Hubli-Dharwad?", a: "Creative Metal Industries is a trusted pipe supplier in Hubli-Dharwad, offering SS, CS, MS structural pipes and fittings with 1-2 day delivery from our Vadodara warehouse." },
    { q: "What is the delivery time for pipes to Hubli?", a: "We deliver within 1-2 days to Hubli-Dharwad and surrounding North Karnataka areas. Distance is approximately 800 km from our Vadodara facility." },
    { q: "Do you supply pipes for engineering industries in Hubli?", a: "Yes, we supply a complete range of SS, CS and alloy steel pipes to engineering workshops, foundries and fabrication units across Hubli's industrial areas." },
    { q: "Can you supply structural steel for construction projects in Hubli?", a: "Absolutely. We stock MS structural pipes (IS 2062, IS 1161, IS 4923) and steel plates suitable for construction and infrastructure projects in Hubli-Dharwad." },
    { q: "Do you cover all of North Karnataka?", a: "Yes, we supply to Hubli, Dharwad, Gadag, Haveri, Davangere, Hospet, Bellary, Shimoga and all North Karnataka industrial areas." },
  ];

  const supplyAreas = [
    "Hubli Industrial Area", "Dharwad Industrial", "Gokul Road Engineering Belt",
    "Railway Workshop", "Tarihal Industrial", "Belur Industrial",
    "Gadag Industrial", "Haveri Industrial", "Davangere Industrial",
    "Hospet Steel/Mining", "Bellary Steel Belt", "Shimoga Industries",
  ];

  const relatedLinks = [
    { url: "/steel-supplier-mangalore", label: "Steel Supplier Mangalore" },
    { url: "/steel-pipe-supplier-bangalore", label: "Steel Pipe Supplier Bangalore" },
    { url: "/steel-pipe-supplier-goa", label: "Steel Pipe Supplier Goa" },
    { url: "/ss-304-316l-pipe-supplier-india", label: "SS 304/316L Pipe Supplier India" },
    { url: "/steel-supplier-hazira", label: "Steel Supplier Hazira" },
  ];

  return (
    <>
      <Title>Pipe Supplier Hubli | SS & CS Pipes Karnataka | CMI</Title>
      <Meta name="description" content="Pipe supplier Hubli-Dharwad — SS, CS, structural pipes for engineering, textile, food industries. 1-2 day delivery. Call +91 99982 80619." />
      <Meta name="keywords" content="pipe supplier Hubli Karnataka, steel Dharwad, steel pipe supplier Hubli, SS pipes Hubli, CS pipes Karnataka, structural steel Hubli-Dharwad" />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-hubli" />

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        padding: "60px 20px",
        "text-align": "center",
        color: "#fff",
      }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h1 style={{ "font-size": "2.2rem", "margin-bottom": "16px", color: "#E8821A" }}>
            Pipe Supplier Hubli-Dharwad | SS & CS Pipes Karnataka
          </h1>
          <p style={{ "font-size": "1.15rem", "line-height": "1.7", opacity: "0.92" }}>
            Creative Metal Industries supplies high-quality stainless steel, carbon steel, and structural pipes to Hubli-Dharwad's engineering, textile, food processing, and railway industries. We deliver within <strong>1-2 days</strong> from our Vadodara warehouse — 800 km direct supply to North Karnataka.
          </p>
          <a href="tel:+919998280619" style={{
            display: "inline-block",
            "margin-top": "24px",
            padding: "14px 36px",
            background: "#E8821A",
            color: "#fff",
            "font-size": "1.1rem",
            "font-weight": "bold",
            "border-radius": "6px",
            "text-decoration": "none",
          }}>
            Call +91 99982 80619
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "12px", color: "#1a1a2e" }}>
            Steel Pipes & Products We Supply in Hubli-Dharwad
          </h2>
          <p style={{ "text-align": "center", "margin-bottom": "36px", color: "#555", "max-width": "700px", margin: "0 auto 36px" }}>
            Complete range of SS, CS, MS structural pipes, fittings, flanges and steel plates for engineering and industrial applications in North Karnataka.
          </p>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {products.map((product) => (
              <div style={{
                padding: "24px",
                border: "1px solid #e8e8e8",
                "border-radius": "8px",
                "border-left": "4px solid #E8821A",
                background: "#fafafa",
              }}>
                <h3 style={{ "font-size": "1.05rem", "margin-bottom": "8px", color: "#1a1a2e" }}>{product.name}</h3>
                <p style={{ "font-size": "0.92rem", color: "#555", "line-height": "1.6", margin: "0" }}>{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section style={{ padding: "50px 20px", background: "#f5f5f5" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "12px", color: "#1a1a2e" }}>
            Industries We Serve in Hubli-Dharwad
          </h2>
          <p style={{ "text-align": "center", "margin-bottom": "36px", color: "#555", "max-width": "700px", margin: "0 auto 36px" }}>
            Trusted by engineering foundries, railway workshops, textile mills, food processors and educational institutions across North Karnataka.
          </p>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {industries.map((industry) => (
              <div style={{
                padding: "24px",
                background: "#fff",
                "border-radius": "8px",
                "box-shadow": "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                <h3 style={{ "font-size": "1.05rem", "margin-bottom": "8px", color: "#E8821A" }}>{industry.name}</h3>
                <p style={{ "font-size": "0.92rem", color: "#555", "line-height": "1.6", margin: "0" }}>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Areas Section */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ "max-width": "1100px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "12px", color: "#1a1a2e" }}>
            Our Supply Network in North Karnataka
          </h2>
          <p style={{ "text-align": "center", "margin-bottom": "36px", color: "#555", "max-width": "700px", margin: "0 auto 36px" }}>
            We deliver steel pipes, fittings, and structural materials to all major industrial zones in the Hubli-Dharwad region and North Karnataka.
          </p>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {supplyAreas.map((area) => (
              <div style={{
                padding: "14px 18px",
                background: "#f9f9f9",
                border: "1px solid #eee",
                "border-radius": "6px",
                "font-size": "0.95rem",
                color: "#333",
              }}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "50px 20px", background: "#f5f5f5" }}>
        <div style={{ "max-width": "800px", margin: "0 auto" }}>
          <h2 style={{ "text-align": "center", "font-size": "1.8rem", "margin-bottom": "36px", color: "#1a1a2e" }}>
            Frequently Asked Questions — Steel Pipe Supplier Hubli
          </h2>
          {faqs.map((faq) => (
            <div style={{ "margin-bottom": "24px", padding: "20px", background: "#fff", "border-radius": "8px", "box-shadow": "0 1px 4px rgba(0,0,0,0.05)" }}>
              <h3 style={{ "font-size": "1rem", "margin-bottom": "10px", color: "#1a1a2e" }}>{faq.q}</h3>
              <p style={{ "font-size": "0.93rem", color: "#555", "line-height": "1.7", margin: "0" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "50px 20px",
        background: "linear-gradient(135deg, #E8821A 0%, #d4710f 100%)",
        "text-align": "center",
        color: "#fff",
      }}>
        <div style={{ "max-width": "700px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.7rem", "margin-bottom": "16px" }}>
            Get a Quote for Steel Pipes in Hubli-Dharwad
          </h2>
          <p style={{ "font-size": "1.05rem", "margin-bottom": "24px", opacity: "0.95", "line-height": "1.6" }}>
            Contact Creative Metal Industries for competitive pricing on SS, CS, and structural pipes. Fast 1-2 day delivery across North Karnataka.
          </p>
          <div style={{ display: "flex", gap: "16px", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{
              padding: "14px 32px",
              background: "#fff",
              color: "#E8821A",
              "font-weight": "bold",
              "border-radius": "6px",
              "text-decoration": "none",
              "font-size": "1rem",
            }}>
              Call +91 99982 80619
            </a>
            <a href="https://www.creativemetalind.com/about" style={{
              padding: "14px 32px",
              background: "transparent",
              color: "#fff",
              "font-weight": "bold",
              "border-radius": "6px",
              "text-decoration": "none",
              "font-size": "1rem",
              border: "2px solid #fff",
            }}>
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ "max-width": "900px", margin: "0 auto", "text-align": "center" }}>
          <h2 style={{ "font-size": "1.4rem", "margin-bottom": "20px", color: "#1a1a2e" }}>
            Related Pages
          </h2>
          <div style={{ display: "flex", "flex-wrap": "wrap", gap: "12px", "justify-content": "center" }}>
            {relatedLinks.map((link) => (
              <a href={link.url} style={{
                padding: "10px 20px",
                background: "#f5f5f5",
                color: "#E8821A",
                "border-radius": "6px",
                "text-decoration": "none",
                "font-size": "0.9rem",
                "font-weight": "500",
                border: "1px solid #e8e8e8",
              }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section style={{ padding: "40px 20px", background: "#1a1a2e", color: "#ccc", "text-align": "center" }}>
        <div style={{ "max-width": "600px", margin: "0 auto" }}>
          <p style={{ "font-size": "1rem", "margin-bottom": "8px", color: "#E8821A", "font-weight": "bold" }}>
            Creative Metal Industries
          </p>
          <p style={{ "font-size": "0.9rem", "line-height": "1.7", margin: "0" }}>
            386/B GIDC Estate Makarpura, Vadodara, Gujarat 390010<br />
            Phone: <a href="tel:+919998280619" style={{ color: "#E8821A", "text-decoration": "none" }}>+91 99982 80619</a><br />
            Website: <a href="https://www.creativemetalind.com" style={{ color: "#E8821A", "text-decoration": "none" }}>www.creativemetalind.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
