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
  { href: "/metal-trading",    label: "Trading"    },
  { href: "/reviews",          label: "Reviews"    },
  { href: "/#contact",         label: "Contact"    },
];

// Real hub pages surfaced directly from the header, on every PageLayout page.
// The NAV_LINKS above are mostly homepage anchors (/#about, /#product-tabs)
// which give crawlers no path into the product/location hubs from an interior
// page. These direct links do, and they resolve from anywhere on the site.
const HUB_LINKS = [
  { href: "/ss-304-316l-pipe-supplier-india",  label: "SS Pipes" },
  { href: "/alloy-steel-pipe-supplier-india",  label: "Alloy Steel" },
  { href: "/duplex-steel-supplier-vadodara",   label: "Duplex" },
  { href: "/inconel-pipe-supplier-india",      label: "Exotic Alloys" },
  { href: "/carbon-steel-pipe-supplier-india", label: "Carbon Steel" },
  { href: "/ms-plate-supplier-india",          label: "Mild Steel" },
  { href: "/products",                         label: "All Products" },
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
      {/* Secondary hub bar — crawlable links from the header into the main
          product/location hubs (the primary nav is mostly homepage anchors). */}
      <div class="nav-hub-bar" aria-label="Product categories">
        <div class="container" style="display:flex;flex-wrap:wrap;gap:0.35rem 1.1rem;align-items:center;justify-content:center;padding-top:0.4rem;padding-bottom:0.4rem">
          <For each={HUB_LINKS}>{(l) => (
            <a href={l.href} style="font-size:0.8rem;font-weight:600;color:#374151;text-decoration:none;white-space:nowrap">{l.label}</a>
          )}</For>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-nav" role="dialog" aria-label="Navigation menu">
        <button class="mobile-close" id="mobile-close-btn" aria-label="Close menu">✕</button>
        <For each={NAV_LINKS}>{(l) => (
          <a href={l.href}>{l.label}</a>
        )}</For>
        <div style="border-top:1px solid rgba(255,255,255,0.1);margin:0.5rem 0;padding-top:0.5rem" />
        <For each={HUB_LINKS}>{(l) => (
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
              <li><a href="/incoloy-800-pipe-supplier-india">Incoloy Pipes</a></li>
              <li><a href="/carbon-steel-pipe-supplier-india">Carbon Steel Pipes</a></li>
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
        {/* SEO Internal Links — Product categories */}
        <div class="footer-grid" style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.1)">
          <nav aria-label="Stainless steel products">
            <h4>Stainless Steel</h4>
            <ul>
              <li><a href="/ss-304-316l-pipe-supplier-india">SS 304 / 316L Pipe</a></li>
              <li><a href="/ss-seamless-pipe-supplier-india">SS Seamless Pipe</a></li>
              <li><a href="/ss-310-pipe-supplier-india">SS 310 Pipe</a></li>
              <li><a href="/ss-321-pipe-supplier-india">SS 321 Pipe</a></li>
              <li><a href="/ss-347-pipe-supplier-india">SS 347 Pipe</a></li>
              <li><a href="/ss-904l-pipe-supplier-india">SS 904L Pipe</a></li>
              <li><a href="/ss-sheet-supplier-vadodara">SS Sheet &amp; Plate</a></li>
            </ul>
          </nav>
          <nav aria-label="Carbon and alloy steel products">
            <h4>Carbon &amp; Alloy Steel</h4>
            <ul>
              <li><a href="/carbon-steel-pipe-supplier-india">Carbon Steel Pipe</a></li>
              <li><a href="/carbon-steel-sa516-plate-stockist-india">SA 516 Plate</a></li>
              <li><a href="/a106-gr-b-seamless-pipe-india">A106 Gr B Pipe</a></li>
              <li><a href="/a53-erw-pipe-supplier-india">A53 ERW Pipe</a></li>
              <li><a href="/api-5l-line-pipe-supplier-india">API 5L Line Pipe</a></li>
              <li><a href="/alloy-steel-pipe-supplier-india">Alloy Steel Pipe</a></li>
              <li><a href="/astm-a36-steel-plate-supplier-india">ASTM A36 Plate</a></li>
            </ul>
          </nav>
          <nav aria-label="Duplex and exotic alloys">
            <h4>Duplex &amp; Exotic Alloys</h4>
            <ul>
              <li><a href="/duplex-2205-plate-supplier-india">Duplex 2205 Plate</a></li>
              <li><a href="/super-duplex-2507-pipe-supplier">Super Duplex 2507</a></li>
              <li><a href="/inconel-pipe-supplier-india">Inconel Pipe</a></li>
              <li><a href="/hastelloy-pipe-supplier-india">Hastelloy Pipe</a></li>
              <li><a href="/monel-400-pipe-supplier-india">Monel 400 Pipe</a></li>
              <li><a href="/titanium-pipe-supplier-india">Titanium Pipe</a></li>
              <li><a href="/incoloy-800-pipe-supplier-india">Incoloy 800 Pipe</a></li>
            </ul>
          </nav>
          <nav aria-label="Mild and structural steel">
            <h4>Mild / Structural Steel</h4>
            <ul>
              <li><a href="/ms-plate-supplier-india">MS Plate</a></li>
              <li><a href="/ms-angle-channel-supplier-vadodara">MS Angle / Channel</a></li>
              <li><a href="/ms-beam-ismb-supplier-india">MS Beam ISMB</a></li>
              <li><a href="/ms-channel-ismc-supplier-india">MS Channel ISMC</a></li>
              <li><a href="/ms-flat-bar-supplier-india">MS Flat Bar</a></li>
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
