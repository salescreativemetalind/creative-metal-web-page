type AnalyticsValue = string | number | boolean;
type AnalyticsParameters = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
  }
}

const CONTACT_METHODS = {
  "tel:": "phone",
  "mailto:": "email",
  "https://wa.me/": "whatsapp",
  "http://wa.me/": "whatsapp",
} as const;

export function trackAnalyticsEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return false;
  window.gtag("event", eventName, parameters);
  return true;
}

export function trackSuccessfulEnquiry(material: string, product: string) {
  return trackAnalyticsEvent("generate_lead", {
    method: "website_form",
    enquiry_material: material || "not_selected",
    enquiry_product: product || "not_selected",
  });
}

export function contactMethodForHref(href: string) {
  const normalized = href.trim().toLowerCase();
  return Object.entries(CONTACT_METHODS).find(([prefix]) => normalized.startsWith(prefix))?.[1] || "";
}

export function installContactIntentTracking(documentValue: Document = document) {
  const onClick = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest("a[href]");
    if (!(anchor instanceof HTMLAnchorElement)) return;
    const method = contactMethodForHref(anchor.href);
    if (!method) return;
    trackAnalyticsEvent("contact_intent", {
      method,
      link_location: anchor.closest("header, nav, main, footer")?.tagName.toLowerCase() || "page",
    });
  };
  documentValue.addEventListener("click", onClick);
  return () => documentValue.removeEventListener("click", onClick);
}
