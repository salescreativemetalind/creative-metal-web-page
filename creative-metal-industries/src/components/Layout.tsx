import { For, JSX } from "solid-js";
import { RelatedPages } from "./RelatedPages";

const NAV_LINKS = [
  { href: "/",                 label: "Home"       },
  { href: "/#about",           label: "About Us"   },
  { href: "/#product-tabs",    label: "Products"   },
  { href: "/#metals",          label: "Materials"  },
  { href: "/#services",        label: "Services"   },
  { href: "/#industries",      label: "Industries" },
  { href: "/#faq",             label: "FAQ"        },
  { href: "/blog",             label: "Blog"       },
  { href: "/metal-trading",    label: "Trading"    },
  { href: "/reviews",          label: "Reviews"    },
  { href: "/#contact",         label: "Contact"    },
];

export function SiteNav(props: { active?: string }) {
  return (
    <nav class="nav scrolled" id="site-nav" aria-label="Main navigation">
      <div class="container nav-inner">
        <a href="/" class="nav-logo" aria-label="Creative Metal Industries — Home">
          <img
            src="/logo_cmi.png"
            alt="Creative Metal Industries — SS Pipes, Plates & Fittings Manufacturer, Vadodara"
            class="logo-img"
            width="160"
            height="81"
            fetchpriority="high"
          />
        </a>
        <ul class="nav-links">
          <For each={NAV_LINKS.filter(l => l.label !== "Home")}>{(l) => (
            <li>
              <a href={l.href} class={props.active === l.label ? "nav-active" : ""}>
                {l.label}
              </a>
            </li>
          )}</For>
        </ul>
        <div class="nav-cta">
          <a href="tel:+919998280619" class="btn btn-outline" style="padding:0.5rem 1rem;font-size:0.83rem">
            📞 +91 99982 80619
          </a>
          <a href="/#contact" class="btn btn-primary" style="padding:0.5rem 1rem;font-size:0.83rem">
            Get a Quote
          </a>
        </div>
        <button class="hamburger" aria-label="Open menu" id="hamburger-btn">
          <span/><span/><span/>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-nav" role="dialog" aria-label="Navigation menu">
        <button class="mobile-close" id="mobile-close-btn" aria-label="Close menu">✕</button>
        <For each={NAV_LINKS}>{(l) => (
          <a href={l.href}>{l.label}</a>
        )}</For>
        <a href="/#contact" class="btn btn-primary">Get a Quote</a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="footer-logo nav-logo">
              <img
                src="/logo_cmi.png"
                alt="Creative Metal Industries — Vadodara"
                class="logo-img"
                width="180"
                height="91"
                loading="lazy"
              />
            </a>
            <p>Manufacturer, stockist &amp; supplier of SS, Carbon &amp; Alloy Steel Pipes, Plates, Fittings, Flanges and Exotic Alloys. Vadodara, Gujarat. Est. 2012.</p>
            <nav class="social-links" aria-label="Contact links">
              <a href="mailto:creativemetalind@gmail.com" class="social-link" aria-label="Email">✉</a>
              <a href="tel:+919998280619" class="social-link" aria-label="Phone">📞</a>
              <a href="https://wa.me/919998280619" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener">💬</a>
              <a href="https://www.creativemetalind.com" class="social-link" aria-label="Website" target="_blank" rel="noopener">🌐</a>
            </nav>
          </div>
          <nav aria-label="Site pages">
            <h4>Navigation</h4>
            <ul>
              <For each={NAV_LINKS}>{(l) => <li><a href={l.href}>{l.label}</a></li>}</For>
            </ul>
          </nav>
          <nav aria-label="Materials">
            <h4>Materials</h4>
            <ul>
              <li><a href="/stainless-steel-supplier-gujarat">Stainless Steel</a></li>
              <li><a href="/alloy-steel-pipe-supplier-india">Alloy Steel Pipes</a></li>
              <li><a href="/duplex-steel-supplier-vadodara">Duplex &amp; Super Duplex</a></li>
              <li><a href="/inconel-pipe-supplier-india">Inconel Pipes</a></li>
              <li><a href="/monel-400-pipe-supplier-india">Monel Pipes</a></li>
              <li><a href="/hastelloy-pipe-supplier-india">Hastelloy Pipes</a></li>
              <li><a href="/titanium-pipe-supplier-india">Titanium Pipes</a></li>
              <li><a href="/copper-nickel-pipe-supplier-india">Copper Nickel Pipes</a></li>
              <li><a href="/boiler-tube-supplier-india">Boiler Tubes</a></li>
              <li><a href="/heat-exchanger-tube-supplier-india">Heat Exchanger Tubes</a></li>
              <li><a href="/forged-fittings-supplier-india">Forged Fittings</a></li>
              <li><a href="/ss-round-bar-supplier-vadodara">SS Round Bars</a></li>
              <li><a href="/ms-plate-supplier-india">MS Plates</a></li>
              <li><a href="/ss-sheet-supplier-vadodara">SS Sheets &amp; Plates</a></li>
              <li><a href="/api-5l-line-pipe-supplier-india">API 5L Line Pipe</a></li>
            </ul>
          </nav>
          <div>
            <h4>Contact</h4>
            <div class="footer-cert" style="margin-bottom:1.25rem">
              <div class="cert-badge">📍 F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001</div>
              <div class="cert-badge">📞 +91 99982 80619 (Sunny Shah)</div>
              <div class="cert-badge">📞 +91 98255 06110 (Ghewar Shah)</div>
              <div class="cert-badge">✉ creativemetalind@gmail.com</div>
              <div class="cert-badge">🕐 Mon–Sat: 9 AM – 7 PM</div>
            </div>
            <h4>Certifications</h4>
            <div class="footer-cert">
              <div class="cert-badge">🏅 IBR Form III-C</div>
              <div class="cert-badge">✅ NACE / HIC Compliant</div>
              <div class="cert-badge">📄 MTC on All Material</div>
              <div class="cert-badge">🌍 Export to 50+ Countries</div>
            </div>
          </div>
        </div>
        {/* SEO Internal Links — Locations & Industries */}
        <div class="footer-grid" style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.1)">
          <nav aria-label="Supply locations">
            <h4>Supply Locations</h4>
            <ul>
              <li><a href="/ss-pipe-supplier-vadodara">Vadodara</a></li>
              <li><a href="/ss-pipe-supplier-ahmedabad">Ahmedabad</a></li>
              <li><a href="/ss-pipe-supplier-surat">Surat</a></li>
              <li><a href="/ss-pipe-supplier-mumbai">Mumbai</a></li>
              <li><a href="/ss-pipe-supplier-rajkot">Rajkot</a></li>
              <li><a href="/steel-supplier-bharuch">Bharuch</a></li>
              <li><a href="/steel-supplier-dahej">Dahej</a></li>
              <li><a href="/ss-pipe-supplier-pune">Pune</a></li>
              <li><a href="/stainless-steel-supplier-gujarat">All Gujarat</a></li>
            </ul>
          </nav>
          <nav aria-label="Industries served">
            <h4>Industries</h4>
            <ul>
              <li><a href="/blog/piping-material-oil-refinery">Refinery</a></li>
              <li><a href="/blog/steel-for-power-plant-boiler">Power Plant</a></li>
              <li><a href="/blog/ss-pipe-for-pharma-industry">Pharmaceutical</a></li>
              <li><a href="/blog/piping-for-oil-gas-pipeline">Oil &amp; Gas</a></li>
            </ul>
          </nav>
          <nav aria-label="Price guides">
            <h4>Price Guides</h4>
            <ul>
              <li><a href="/blog/ss-pipe-price-list-india">SS Pipe Price List</a></li>
              <li><a href="/blog/ss-304-pipe-price-per-kg">SS 304 Pipe Price</a></li>
              <li><a href="/blog/ss-316l-pipe-price-per-kg">SS 316L Pipe Price</a></li>
              <li><a href="/blog/tmt-bar-price-today-gujarat">TMT Bar Price Gujarat</a></li>
              <li><a href="/blog/ms-plate-price-vadodara">MS Plate Price</a></li>
              <li><a href="/blog/erw-pipe-price-india">ERW Pipe Price</a></li>
              <li><a href="/blog/duplex-2205-pipe-price-india">Duplex Pipe Price</a></li>
              <li><a href="/blog/inconel-625-pipe-price-india">Inconel Pipe Price</a></li>
            </ul>
          </nav>
          <nav aria-label="Technical guides">
            <h4>Guides &amp; Resources</h4>
            <ul>
              <li><a href="/blog/ss-pipe-weight-chart">SS Pipe Weight Chart</a></li>
              <li><a href="/blog/pipe-fittings-selection-guide">Pipe Fittings Types</a></li>
              <li><a href="/blog/flange-dimensions-chart-150-300">Flange Dimensions</a></li>
              <li><a href="/blog/what-is-ibr-certification">What is IBR?</a></li>
              <li><a href="/blog/what-is-mill-test-certificate">What is MTC?</a></li>
              <li><a href="/blog/sch-80-vs-sch-160-pipe">SCH 80 vs SCH 160</a></li>
              <li><a href="/blog/seamless-vs-welded-ss-pipe">Seamless vs Welded</a></li>
              <li><a href="/blog/wn-flange-vs-so-flange">WN vs SO Flange</a></li>
              <li><a href="/blog/ss-304-vs-ss-316-difference">SS 304 vs 316</a></li>
              <li><a href="/blog/butt-weld-vs-socket-weld">Buttweld vs Socket Weld</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>© {year} Creative Metal Industries, Vadodara. All rights reserved.</p>
          <nav class="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Trade</a>
            <a href="/sitemap">Site Map</a>
            <a href="https://www.creativemetalind.com" target="_blank" rel="noopener">www.creativemetalind.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function PageLayout(props: { children: JSX.Element; active?: string; currentPath?: string; breadcrumb?: { label: string; href?: string }[] }) {
  return (
    <>
      <SiteNav active={props.active} />
      <main id="main-content" style="padding-top:72px">
        {props.breadcrumb && props.breadcrumb.length > 0 && (
          <nav class="breadcrumb-nav" aria-label="Breadcrumb" style="background:#f9fafb;border-bottom:1px solid #e5e7eb;padding:0.6rem 1.5rem;font-size:0.82rem;color:#6b7280">
            <ol style="display:flex;flex-wrap:wrap;align-items:center;gap:0.25rem;list-style:none;margin:0;padding:0;max-width:1200px;margin-left:auto;margin-right:auto">
              <For each={props.breadcrumb}>{(item, index) => (
                <li style="display:flex;align-items:center;gap:0.25rem">
                  {index() > 0 && <span style="margin:0 0.3rem;color:#9ca3af" aria-hidden="true">›</span>}
                  {item.href && index() < props.breadcrumb!.length - 1
                    ? <a href={item.href} style="color:#E8821A;text-decoration:none;font-weight:500">{item.label}</a>
                    : <span style="color:#374151;font-weight:600" aria-current={index() === props.breadcrumb!.length - 1 ? "page" : undefined}>{item.label}</span>
                  }
                </li>
              )}</For>
            </ol>
          </nav>
        )}
        {props.children}
        {props.currentPath && (
          <div style="max-width:960px;margin:0 auto;padding:0 1.5rem 2rem">
            <RelatedPages currentPath={props.currentPath} />
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
