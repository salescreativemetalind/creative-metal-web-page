import { Title, Meta, Link } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { PageLayout } from "../../components/Layout";

const ARTICLES: Record<string, {
  title: string; seoTitle: string; seoDesc: string; tag: string; date: string; readTime: string;
  intro: string; sections: { heading: string; body: string }[];
}> = {
  "ss-304-vs-316l": {
    title: "SS 304 vs SS 316L — Which Stainless Steel Grade Should You Choose?",
    seoTitle: "SS 304 vs 316L — Which Grade to Choose? | CMI Vadodara",
    seoDesc: "SS 304 vs SS 316L: corrosion resistance, temperature limits, cost and applications explained. Creative Metal Industries, Vadodara stocks both grades.",
    tag: "Technical Guide", date: "May 2026", readTime: "5 min read", While they look identical and share many properties, the differences in composition make them suited for very different environments. Here is a complete comparison to help you specify the right grade.",
    sections: [
      { heading: "Chemical Composition", body: "SS 304 contains 18% chromium and 8% nickel (18/8). SS 316L adds 2–3% molybdenum to this composition, which dramatically improves resistance to pitting and crevice corrosion — especially in chloride-containing environments. The 'L' suffix in 316L means low carbon (max 0.03%), reducing the risk of sensitisation during welding." },
      { heading: "Corrosion Resistance", body: "SS 316L is significantly more resistant to chloride attack than 304. In marine environments, coastal areas, and applications involving seawater, saline solutions, or halides, 316L is the correct choice. SS 304 will pit and crevice corrode in such conditions. However, for general atmospheric exposure, food processing, and non-chloride environments, SS 304 performs excellently at a lower cost." },
      { heading: "Temperature Range", body: "Both grades perform well in service temperatures from -196°C (cryogenic) to approximately 870°C. However, above 425°C, the L-grade (low carbon) versions are preferred because standard carbon grades can sensitise at grain boundaries, leading to intergranular corrosion." },
      { heading: "Mechanical Properties", body: "SS 304 and 316L have almost identical mechanical properties. Both have a minimum tensile strength of around 515 MPa and yield strength of 205 MPa (annealed condition). Neither grade should be considered where high-strength structural steel is required." },
      { heading: "Applications", body: "SS 304: Kitchen equipment, food processing, architectural cladding, chemical containers, heat exchangers (non-chloride service), general process piping.\n\nSS 316L: Pharmaceutical equipment, chemical reactors, marine hardware, coastal structures, pulp and paper mills, desalination plants, welded assemblies in chemical service." },
      { heading: "Cost Difference", body: "SS 316L typically costs 20–40% more than SS 304 due to the addition of molybdenum. For non-chloride applications, specifying 316L where 304 is sufficient adds unnecessary cost. Always match the grade to the actual service environment." },
    ],
  },
  "how-to-read-mtc": {
    title: "How to Read a Mill Test Certificate (MTC) — A Practical Guide",
    seoTitle: "How to Read a Mill Test Certificate (MTC) | CMI",
    seoDesc: "Learn to read EN 10204 3.1 and 3.2 Mill Test Certificates — heat number, chemical composition, mechanical properties explained by Creative Metal Industries.",
    tag: "Buyer's Guide", date: "Apr 2026", readTime: "6 min read",
    intro: "A Mill Test Certificate (MTC) — also called a Material Test Report (MTR) — is a quality assurance document that certifies the material composition and mechanical properties of a metal product as produced by the mill. Understanding how to read one is essential for any procurement engineer or quality inspector.",
    sections: [
      { heading: "EN 10204 3.1 vs 3.2 — What's the Difference?", body: "EN 10204 defines the types of inspection documents. Type 3.1 is issued by the mill's own quality department — the most common form. Type 3.2 is countersigned by an independent third-party inspector (e.g., DNV, TUV, SGS, LLOYDS) in addition to the mill. Critical applications like pressure vessels, boilers, and nuclear equipment typically require 3.2." },
      { heading: "Heat Number / Cast Number", body: "Every steel heat (batch) cast at the mill is assigned a unique heat number. This is the primary traceability identifier — it links the physical material to the MTC. Always cross-check that the heat number stamped or stencilled on the material matches the MTC." },
      { heading: "Chemical Composition", body: "The MTC lists the actual ladle analysis (chemical composition) of the heat. Compare these values against the applicable standard (e.g., ASTM A312 for SS seamless pipes). All elements — C, Mn, Si, P, S, Cr, Ni, Mo — must be within specification limits." },
      { heading: "Mechanical Properties", body: "Tensile strength, yield strength (0.2% proof stress), elongation and hardness (Brinell or Rockwell) are listed. These must meet or exceed the minimum values specified in the relevant ASTM, ASME, IS or EN standard for the grade and product form." },
      { heading: "Product Dimensions", body: "The MTC confirms the actual dimensions — outside diameter, wall thickness, length — of the supplied material. For pipes, this includes the schedule or wall thickness designation." },
      { heading: "Test Performed", body: "The MTC will list tests performed: hydrostatic, non-destructive examination (UT, RT, PT, MT), impact test (Charpy), intergranular corrosion test, etc. Ensure all tests required by your purchase order or project specification are present and passed." },
    ],
  },
  "duplex-vs-super-duplex": {
    title: "Duplex 2205 vs Super Duplex 2507 — Understanding the Difference",
    seoTitle: "Duplex 2205 vs Super Duplex 2507 | CMI Vadodara",
    seoDesc: "Duplex 2205 vs Super Duplex 2507 — PREN values, chloride resistance, strength and when to specify each. Stocked at Creative Metal Industries, Vadodara.",
    tag: "Material Science", date: "Mar 2026", readTime: "7 min read",
    intro: "Duplex and Super Duplex stainless steels are dual-phase alloys containing approximately equal proportions of austenite and ferrite. This microstructure gives them roughly twice the strength of standard austenitic grades while maintaining excellent corrosion resistance. But when should you choose 2205 over 2507?",
    sections: [
      { heading: "Composition and PREN Value", body: "The Pitting Resistance Equivalent Number (PREN) determines chloride pitting resistance: PREN = %Cr + 3.3×%Mo + 16×%N.\n\nDuplex 2205 (UNS S31803/S32205): ~22% Cr, 3% Mo, 5.5% Ni, 0.15% N → PREN ≈ 35\nSuper Duplex 2507 (UNS S32750): ~25% Cr, 4% Mo, 7% Ni, 0.27% N → PREN ≈ 42\n\nA PREN above 40 is required for seawater service. This makes 2507 the correct choice for offshore and subsea applications." },
      { heading: "Corrosion Resistance", body: "Both grades resist chloride stress corrosion cracking (SCC) far better than austenitic 316L. Duplex 2205 is suitable for mildly corrosive chloride environments — coastal structures, desalination, chemical processing. Super Duplex 2507 is designed for severe chloride service — offshore platforms, subsea umbilicals, seawater cooling systems." },
      { heading: "Mechanical Strength", body: "2205: UTS ≈ 620 MPa, Yield ≈ 450 MPa\n2507: UTS ≈ 795 MPa, Yield ≈ 550 MPa\n\nBoth are approximately twice as strong as austenitic grades, allowing thinner wall sections and lighter weight designs." },
      { heading: "Weldability and Fabrication", body: "Both grades require careful heat input control during welding to maintain the austenite-ferrite phase balance. Intermetallic phases (sigma phase) can precipitate at 700–1000°C, causing embrittlement. Post-weld solution annealing is recommended for critical service. Super duplex is more sensitive and requires tighter process control." },
      { heading: "Applications", body: "Duplex 2205: Chemical plant piping, heat exchangers, pressure vessels, FGD scrubbers, paper and pulp digesters, general offshore structural.\n\nSuper Duplex 2507: Seawater handling, subsea equipment, high-pressure injection lines, desalination high-pressure sections, oil & gas umbilicals." },
      { heading: "Cost Comparison", body: "Super Duplex 2507 typically costs 30–50% more than Duplex 2205, reflecting its higher alloy content (particularly molybdenum and nickel). Specify 2507 only where the PREN > 40 requirement or the extreme corrosion resistance is genuinely needed." },
    ],
  },
};

export default function BlogPost() {
  const params = useParams();
  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <PageLayout active="Blog">
        <Title>Article Not Found | Creative Metal Industries Blog</Title>
        <Meta name="robots" content="noindex, follow" />
        <Meta name="description" content="This article is not available. Browse our technical guides on stainless steel, alloy steel, duplex and exotic alloys." />
        <section class="page-hero">
          <div class="container">
            <h1>Article Not Found</h1>
            <p>This article does not exist. <a href="/blog" style="color:var(--amber)">Browse all articles →</a></p>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout active="Blog">
      <Title>{article.seoTitle}</Title>
      <Meta name="description" content={article.seoDesc} />
      <Link rel="canonical" href={`https://www.creativemetalind.com/blog/${params.slug}`} />
      <Meta property="og:type"        content="article" />
      <Meta property="og:title"       content={article.seoTitle} />
      <Meta property="og:description" content={article.seoDesc} />
      <Meta property="og:url"         content={`https://www.creativemetalind.com/blog/${params.slug}`} />
      <Meta property="og:image"       content="https://www.creativemetalind.com/logo_cmi.png" />
      <Meta name="twitter:card"        content="summary_large_image" />
      <Meta name="twitter:title"       content={article.seoTitle} />
      <Meta name="twitter:description" content={article.seoDesc} />

      <section class="page-hero page-hero-sm">
        <div class="container">
          <div class="article-meta-top">
            <span class="blog-tag">{article.tag}</span>
            <span class="blog-date">{article.date}</span>
            <span class="blog-read-time">🕐 {article.readTime}</span>
          </div>
          <h1 class="article-title">{article.title}</h1>
          <p class="article-intro">{article.intro}</p>
          <a href="/blog" class="blog-link" style="font-size:0.875rem">← Back to Blog</a>
        </div>
      </section>

      <section class="article-body">
        <div class="container">
          <div class="article-content">
            {article.sections.map(s => (
              <div class="article-section">
                <h2>{s.heading}</h2>
                {s.body.split("\n\n").map(para => <p>{para}</p>)}
              </div>
            ))}
            <div class="article-cta-box">
              <h3>Need to source this material?</h3>
              <p>Creative Metal Industries stocks SS 304, 316L, Duplex 2205, Super Duplex 2507 and all other grades in pipes, plates, fittings and flanges. Call us or send an enquiry.</p>
              <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.25rem">
                <a href="/#contact" class="btn btn-primary">Send Enquiry →</a>
                <a href="tel:+919998280619" class="btn btn-outline">📞 +91 99982 80619</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
