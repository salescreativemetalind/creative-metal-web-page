"""
IndexNow Submission Script — Creative Metal Industries
Submits all 57 URLs to Bing & Yandex for instant indexing.
Run: python submit-indexnow.py
"""

import json
import urllib.request

INDEXNOW_KEY = "b4d3f8e2a1c7905d6e4f1b8a3c2d7e9f"
HOST = "www.creativemetalind.com"
KEY_LOCATION = f"https://{HOST}/indexnow-key.txt"

URLS = [
    # CORE PAGES
    "https://www.creativemetalind.com/",
    "https://www.creativemetalind.com/about",
    "https://www.creativemetalind.com/products",
    "https://www.creativemetalind.com/reviews",
    # SEO LANDING PAGES
    "https://www.creativemetalind.com/metal-trading",
    "https://www.creativemetalind.com/ss-pipe-supplier-vadodara",
    "https://www.creativemetalind.com/stainless-steel-supplier-vadodara",
    "https://www.creativemetalind.com/duplex-steel-supplier-vadodara",
    "https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara",
    "https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india",
    "https://www.creativemetalind.com/nace-hic-steel-plate-supplier-india",
    "https://www.creativemetalind.com/tmt-bars-supplier-gujarat",
    "https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india",
    "https://www.creativemetalind.com/ss-seamless-pipe-supplier-india",
    "https://www.creativemetalind.com/ss-buttweld-fittings-supplier-india",
    "https://www.creativemetalind.com/inconel-pipe-supplier-india",
    "https://www.creativemetalind.com/ss-flanges-supplier-vadodara",
    "https://www.creativemetalind.com/alloy-steel-pipe-supplier-india",
    # BLOG PAGES
    "https://www.creativemetalind.com/blog",
    "https://www.creativemetalind.com/blog/ss-304-vs-316l",
    "https://www.creativemetalind.com/blog/how-to-read-mtc",
    "https://www.creativemetalind.com/blog/duplex-vs-super-duplex",
    "https://www.creativemetalind.com/blog/p91-alloy-steel-power-plants",
    "https://www.creativemetalind.com/blog/astm-a312-vs-api-5l",
    "https://www.creativemetalind.com/blog/hastelloy-vs-inconel",
    "https://www.creativemetalind.com/blog/understanding-pipe-schedules",
    "https://www.creativemetalind.com/blog/titanium-grades-comparison",
    "https://www.creativemetalind.com/blog/erw-vs-seamless-pipe",
    "https://www.creativemetalind.com/blog/ss-304-stainless-steel-guide",
    "https://www.creativemetalind.com/blog/ss-316l-stainless-steel-guide",
    "https://www.creativemetalind.com/blog/duplex-2205-steel-guide",
    "https://www.creativemetalind.com/blog/super-duplex-2507-guide",
    "https://www.creativemetalind.com/blog/hastelloy-c276-guide",
    "https://www.creativemetalind.com/blog/inconel-625-guide",
    "https://www.creativemetalind.com/blog/p91-alloy-steel-guide",
    "https://www.creativemetalind.com/blog/sa-516-carbon-steel-plate-guide",
    "https://www.creativemetalind.com/blog/nace-hic-steel-plates-guide",
    "https://www.creativemetalind.com/blog/tmt-bars-guide",
    "https://www.creativemetalind.com/blog/astm-a312-pipe-guide",
    "https://www.creativemetalind.com/blog/api-5l-pipe-guide",
    "https://www.creativemetalind.com/blog/pipe-schedule-chart",
    "https://www.creativemetalind.com/blog/mill-test-certificate-guide",
    "https://www.creativemetalind.com/blog/titanium-grade-2-vs-grade-5",
    "https://www.creativemetalind.com/blog/ss-pipe-fittings-flanges-guide",
    "https://www.creativemetalind.com/blog/why-creative-metal-industries",
    "https://www.creativemetalind.com/blog/industrial-raw-material-supplier-india",
    "https://www.creativemetalind.com/blog/ms-structural-steel-guide",
    "https://www.creativemetalind.com/blog/carbon-steel-pipe-guide",
    "https://www.creativemetalind.com/blog/ss-sheet-plate-guide",
    "https://www.creativemetalind.com/blog/ss-long-products-fittings-guide",
    "https://www.creativemetalind.com/blog/exotic-alloy-plate-sheet-guide",
    "https://www.creativemetalind.com/blog/ss-pipe-supplier-vadodara-guide",
    "https://www.creativemetalind.com/blog/ss-304-vs-321-guide",
    "https://www.creativemetalind.com/blog/pipe-fittings-selection-guide",
    "https://www.creativemetalind.com/blog/ibr-certification-guide",
    "https://www.creativemetalind.com/blog/inconel-vs-monel-guide",
    "https://www.creativemetalind.com/blog/ss-flange-types-guide",
]

def submit_to_indexnow(engine_url):
    """Submit all URLs to an IndexNow-compatible search engine."""
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": URLS
    }
    
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        engine_url,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            print(f"  ✅ {engine_url} → Status {response.status}")
            return True
    except Exception as e:
        print(f"  ❌ {engine_url} → Error: {e}")
        return False

if __name__ == "__main__":
    print(f"Submitting {len(URLS)} URLs via IndexNow...")
    print(f"Key: {INDEXNOW_KEY}")
    print(f"Key Location: {KEY_LOCATION}")
    print()
    
    # Bing IndexNow
    print("📤 Submitting to Bing...")
    submit_to_indexnow("https://www.bing.com/indexnow")
    
    # Yandex IndexNow  
    print("📤 Submitting to Yandex...")
    submit_to_indexnow("https://yandex.com/indexnow")
    
    # IndexNow.org (distributes to all partners)
    print("📤 Submitting to IndexNow.org...")
    submit_to_indexnow("https://api.indexnow.org/indexnow")
    
    print()
    print(f"✅ Done! {len(URLS)} URLs submitted to 3 search engines.")
    print()
    print("NEXT STEPS for Google (no IndexNow support yet):")
    print("1. Go to Google Search Console → URL Inspection")
    print("2. Paste each URL one by one → Click 'Request Indexing'")
    print("3. Do 10-15 URLs per day (daily limit ~50)")
    print("4. Start with landing pages (highest priority)")
