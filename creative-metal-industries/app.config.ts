import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,
  server: {
    preset: "vercel",
    // Remove trailing slashes to prevent duplicate URL indexing
    prerender: {
      crawlLinks: true,
      routes: [
        // ── Stainless Steel ──
        "/ss-304-316l-pipe-supplier-india",
        "/ss-seamless-pipe-supplier-india",
        "/ss-sheet-supplier-vadodara",
        "/ss-310-pipe-supplier-india",
        "/ss-310s-plate-supplier-india",
        "/ss-321-pipe-supplier-india",
        "/ss-347-pipe-supplier-india",
        "/ss-410-pipe-supplier-india",
        "/ss-430-sheet-supplier-india",
        "/ss-904l-pipe-supplier-india",
        "/stainless-steel-supplier-vadodara",
        "/stainless-steel-supplier-gujarat",
        // ── Carbon Steel ──
        "/carbon-steel-pipe-supplier-india",
        "/carbon-steel-sa516-plate-stockist-india",
        "/a106-gr-b-seamless-pipe-india",
        "/a53-erw-pipe-supplier-india",
        "/api-5l-line-pipe-supplier-india",
        "/astm-a36-steel-plate-supplier-india",
        // ── Alloy Steel (Chrome-Moly) ──
        "/alloy-steel-pipe-supplier-india",
        "/p5-alloy-steel-pipe-supplier",
        "/p9-alloy-steel-pipe-supplier",
        "/p11-alloy-steel-pipe-supplier",
        "/p22-alloy-steel-pipe-supplier",
        "/p92-alloy-steel-pipe-supplier",
        // ── Duplex / Super Duplex ──
        "/duplex-steel-supplier-vadodara",
        "/duplex-2205-plate-supplier-india",
        "/super-duplex-2507-pipe-supplier",
        // ── Inconel / Incoloy ──
        "/inconel-pipe-supplier-india",
        "/inconel-600-pipe-supplier-india",
        "/inconel-718-supplier-india",
        "/incoloy-800-pipe-supplier-india",
        "/incoloy-825-pipe-supplier-india",
        // ── Hastelloy ──
        "/hastelloy-pipe-supplier-india",
        "/hastelloy-c22-pipe-supplier-india",
        "/hastelloy-b2-pipe-supplier-india",
        // ── Monel ──
        "/monel-400-pipe-supplier-india",
        "/monel-k500-supplier-india",
        // ── Titanium ──
        "/titanium-pipe-supplier-india",
        "/titanium-bar-supplier-india",
        "/titanium-grade-2-pipe-india",
        "/titanium-grade-5-pipe-india",
        // ── Mild / Structural Steel ──
        "/ms-plate-supplier-india",
        "/ms-angle-channel-supplier-vadodara",
        "/ms-beam-ismb-supplier-india",
        "/ms-channel-ismc-supplier-india",
        "/ms-flat-bar-supplier-india",
        // ── Site pages ──
        "/privacy-policy",
        "/terms",
        "/sitemap",
      ],
    },
  },
});
