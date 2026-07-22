import { Title, Meta, Link } from "@solidjs/meta";

const PRODUCTS = [
  { name: "Stainless Steel Pipes", slug: "ss-pipes", desc: "Premium SS 304, 316, 316L seamless and welded pipes for industrial and pharma applications in Goa." },
  { name: "Carbon Steel Pipes", slug: "cs-pipes", desc: "ASTM A106/A53 carbon steel pipes for port infrastructure, shipyard, and fertilizer plant piping in Goa." },
  { name: "Pharma-Grade SS Tubes", slug: "pharma-grade-ss-tubes", desc: "Electropolished stainless steel tubes meeting ASME BPE standards for Sanofi, Glenmark, and pharma units in Goa." },
  { name: "SS Fittings & Flanges", slug: "ss-fittings-flanges", desc: "Stainless steel buttweld fittings, forged flanges, and couplings for process piping in Goa industries." },
  { name: "Structural Steel", slug: "structural-steel", desc: "IS 2062 structural steel beams, channels, and angles for tourism infrastructure and construction in Goa." },
  { name: "GI Pipes", slug: "gi-pipes", desc: "Hot-dip galvanized iron pipes for water supply, plumbing, and corrosion-resistant applications in coastal Goa." },
  { name: "Alloy Steel Pipes", slug: "alloy-steel-pipes", desc: "ASTM A335 P11/P22 alloy steel pipes for high-temperature service at fertilizer and chemical plants in Goa." },
  { name: "Steel Plates", slug: "steel-plates", desc: "SA516 Gr.70, IS 2062, and stainless steel plates for shipbuilding, port equipment, and mining in Goa." },
];

const INDUSTRIES = [
  { name: "Zuari Agro Chemicals (Fertilizer)", desc: "Supplying carbon steel, alloy steel, and SS pipes for fertilizer processing, ammonia lines, and acid handling at Zuari Nagar plant." },
  { name: "Mormugao Port Trust", desc: "Structural steel, GI pipes, and CS pipes for port infrastructure, cargo handling equipment, and marine terminal maintenance." },
  { name: "Goa Shipyard Limited", desc: "Steel plates, SS fittings, and specialized marine-grade pipes for naval vessel construction and ship repair at Vasco." },
  { name: "Pharma Cluster (Sanofi, Glenmark)", desc: "Pharma-grade electropolished SS tubes, sanitary fittings, and validated piping systems for drug manufacturing at Verna Industrial Estate." },
  { name: "Mining & Iron Ore Processing", desc: "Heavy-duty steel pipes, plates, and structural steel for mining operations, ore processing, and conveyor systems in Bicholim and Sanguem." },
  { name: "Tourism Infrastructure", desc: "Structural steel, GI pipes, and SS railings for hotel construction, resort development, and coastal infrastructure projects across Goa." },
];

const FAQS = [
  {
    q: "Who is the best steel pipe supplier for industries in Goa?",
    a: "Creative Metal Industries is a trusted steel pipe supplier serving Goa's industrial sector from Vadodara. We supply SS, CS, alloy steel, and pharma-grade pipes to Zuari Agro, Mormugao Port, Goa Shipyard, and pharma companies. With 1-2 day delivery and full mill test certificates, we ensure reliable supply for all Goa industries.",
  },
  {
    q: "What is the delivery time for steel pipes from Vadodara to Goa?",
    a: "We deliver steel pipes and fittings to all industrial areas in Goa within 1-2 business days. Our Vadodara warehouse is approximately 600 km from Goa, and we maintain ready stock of commonly required sizes. Urgent orders can be dispatched same-day with dedicated transport for critical project requirements.",
  },
  {
    q: "Do you supply pharma-grade stainless steel tubes for pharmaceutical companies in Goa?",
    a: "Yes, we supply electropolished SS 316L pharma-grade tubes meeting ASME BPE standards for pharmaceutical manufacturers in Goa including Sanofi and Glenmark at Verna Industrial Estate. All tubes come with surface finish reports, material certificates, and comply with FDA and WHO-GMP guidelines for drug manufacturing.",
  },
  {
    q: "What materials do you supply for Goa Shipyard and marine applications?",
    a: "For Goa Shipyard Limited and marine applications, we supply shipbuilding-grade steel plates (LR/DNV/BV approved), marine-grade SS 316 pipes, structural steel sections, and specialized welding consumables. Our materials meet classification society standards required for naval vessel construction and ship repair work.",
  },
  {
    q: "Can you supply pipes and fittings for Zuari fertilizer plant operations?",
    a: "Absolutely. We supply carbon steel seamless pipes, alloy steel pipes (P11, P22), SS 304/316 pipes, and high-pressure fittings for Zuari Agro Chemicals. Our products handle ammonia, phosphoric acid, and high-temperature steam services. We provide IBR-approved materials with complete traceability documentation.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.creativemetalind.com/#business",
      name: "Creative Metal Industries",
      url: "https://www.creativemetalind.com",
      logo: "https://www.creativemetalind.com/logo.png",
      image: "https://www.creativemetalind.com/logo.png",
      telephone: "+91-99982-80619",
      email: "info@creativemetalind.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "386/B GIDC Estate Makarpura",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390010",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.2587",
        longitude: "73.1924",
      },
      areaServed: {
        "@type": "City",
        name: "Goa",
      },
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      description:
        "Creative Metal Industries is a leading steel pipe supplier in Goa offering SS pipes, CS pipes, pharma-grade SS tubes, alloy steel pipes, steel plates, and fittings for Zuari Agro, Mormugao Port, Goa Shipyard, pharma, mining, and tourism infrastructure.",
    },
    {
      "@type": "Product",
      name: "Steel Pipes and Fittings for Goa Industries",
      description:
        "Premium quality steel pipes, pharma-grade SS tubes, fittings, flanges, and structural steel supplied to industries in Goa including fertilizer, port, shipyard, pharma, and mining sectors.",
      brand: { "@type": "Brand", name: "Creative Metal Industries" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Creative Metal Industries" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
        { "@type": "ListItem", position: 2, name: "Steel Pipe Supplier Goa", item: "https://www.creativemetalind.com/steel-pipe-supplier-goa" },
      ],
    },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export default function SteelPipeSupplierGoa() {
  return (
    <>
      <Title>Steel Pipe Supplier in Goa | SS, CS, Alloy Pipes | Creative Metal Industries</Title>
      <Meta
        name="description"
        content="Leading steel pipe supplier in Goa. SS pipes, CS pipes, pharma-grade SS tubes, alloy steel pipes for Zuari Agro, Mormugao Port, Goa Shipyard, pharma & mining. 1-2 day delivery from Vadodara."
      />
      <Meta
        name="keywords"
        content="steel pipe supplier Goa, industrial steel Goa, SS pipe supplier Goa, carbon steel pipe Goa, pharma grade SS tube Goa, alloy steel pipe Goa, steel plate Goa, GI pipe Goa, Mormugao Port steel, Goa Shipyard pipe supplier"
      />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-goa" />
      <Meta property="og:title" content="Steel Pipe Supplier in Goa | Creative Metal Industries" />
      <Meta
        property="og:description"
        content="Trusted steel pipe supplier for Goa industries. SS, CS, pharma-grade, alloy steel pipes & fittings. 1-2 day delivery to Zuari Nagar, Mormugao, Verna, Ponda."
      />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-goa" />
      <Meta property="og:type" content="website" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="text-sm mb-6 text-gray-400">
            <a href="/" class="hover:text-[#E8821A] transition-colors">Home</a>
            <span class="mx-2">/</span>
            <span class="text-[#E8821A]">Steel Pipe Supplier Goa</span>
          </nav>
          <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Trusted <span class="text-[#E8821A]">Steel Pipe Supplier</span> in Goa
          </h1>
          <p class="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            Creative Metal Industries delivers premium steel pipes, pharma-grade SS tubes, fittings, and structural steel to Goa's fertilizer, port, shipyard, pharmaceutical, mining, and tourism industries. Reliable 1-2 day delivery from our Vadodara warehouse — 600 km away.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="tel:+919998280619"
              class="inline-flex items-center bg-[#E8821A] hover:bg-[#d4740f] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Call +91 99982 80619
            </a>
            <a
              href="/contact"
              class="inline-flex items-center border-2 border-[#E8821A] text-[#E8821A] hover:bg-[#E8821A] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">
            Steel Pipes & Products We Supply in <span class="text-[#E8821A]">Goa</span>
          </h2>
          <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Complete range of industrial steel pipes, pharma-grade tubes, fittings, and structural steel for Goa's diverse industries.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p class="text-gray-600 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">
            Industries We Serve in <span class="text-[#E8821A]">Goa</span>
          </h2>
          <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From fertilizer plants to shipyards, our steel products power Goa's key industrial sectors.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <div class="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p class="text-gray-600 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Areas Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">
            Steel Pipe Delivery Areas in <span class="text-[#E8821A]">Goa</span>
          </h2>
          <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We deliver steel pipes and industrial materials to all major industrial estates, ports, and commercial zones across Goa.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Zuari Nagar",
              "Mormugao Port",
              "Verna Industrial Estate",
              "Kundaim Industrial Estate",
              "Ponda Industrial Area",
              "Mapusa Industrial Estate",
              "Sancoale Shipyard Area",
              "Cuncolim Industrial Estate",
              "Bicholim Mining Belt",
              "Sanguem Mining Area",
              "Margao Commercial Hub",
              "Old Goa Heritage Zone",
            ].map((area) => (
              <div class="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
                <p class="text-gray-700 font-medium text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Choose Creative Metal Industries for <span class="text-[#E8821A]">Goa</span>?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-14 h-14 bg-[#E8821A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-[#E8821A] text-2xl font-bold">1-2</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Day Delivery to Goa</h3>
              <p class="text-gray-600 text-sm">Fast delivery from Vadodara warehouse to all industrial locations across Goa within 1-2 business days.</p>
            </div>
            <div class="text-center">
              <div class="w-14 h-14 bg-[#E8821A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-[#E8821A] text-2xl font-bold">✓</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Mill Test Certificates</h3>
              <p class="text-gray-600 text-sm">Complete documentation including MTCs, IBR certificates, and third-party inspection reports with every order.</p>
            </div>
            <div class="text-center">
              <div class="w-14 h-14 bg-[#E8821A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-[#E8821A] text-2xl font-bold">★</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Pharma-Grade Quality</h3>
              <p class="text-gray-600 text-sm">Electropolished SS tubes meeting ASME BPE standards for pharmaceutical and biotech applications in Goa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions — Steel Pipe Supply in <span class="text-[#E8821A]">Goa</span>
          </h2>
          <div class="mt-12 space-y-6">
            {FAQS.map((faq) => (
              <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p class="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related <span class="text-[#E8821A]">Steel Supply</span> Pages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/steel-supplier-mangalore" class="bg-white rounded-lg p-4 border border-gray-100 hover:border-[#E8821A] hover:shadow-md transition-all text-gray-700 hover:text-[#E8821A] font-medium">
              Steel Supplier Mangalore
            </a>
            <a href="/steel-pipe-supplier-hubli" class="bg-white rounded-lg p-4 border border-gray-100 hover:border-[#E8821A] hover:shadow-md transition-all text-gray-700 hover:text-[#E8821A] font-medium">
              Steel Pipe Supplier Hubli
            </a>
            <a href="/ss-304-316l-pipe-supplier-india" class="bg-white rounded-lg p-4 border border-gray-100 hover:border-[#E8821A] hover:shadow-md transition-all text-gray-700 hover:text-[#E8821A] font-medium">
              SS 304/316L Pipe Supplier India
            </a>
            <a href="/duplex-steel-supplier-vadodara" class="bg-white rounded-lg p-4 border border-gray-100 hover:border-[#E8821A] hover:shadow-md transition-all text-gray-700 hover:text-[#E8821A] font-medium">
              Duplex Steel Supplier Vadodara
            </a>
            <a href="/steel-supplier-hazira" class="bg-white rounded-lg p-4 border border-gray-100 hover:border-[#E8821A] hover:shadow-md transition-all text-gray-700 hover:text-[#E8821A] font-medium">
              Steel Supplier Hazira
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold mb-4">Need Steel Pipes Delivered to Goa?</h2>
          <p class="text-gray-300 text-lg mb-8">
            Get competitive quotes for SS pipes, CS pipes, pharma-grade tubes, and all industrial steel products. 1-2 day delivery to all Goa locations.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919998280619"
              class="inline-flex items-center bg-[#E8821A] hover:bg-[#d4740f] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Call +91 99982 80619
            </a>
            <a
              href="/contact"
              class="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Request Quote Online
            </a>
          </div>
          <p class="text-gray-400 text-sm mt-6">
            Creative Metal Industries — 386/B GIDC Estate Makarpura, Vadodara, Gujarat 390010
          </p>
        </div>
      </section>
    </>
  );
}
