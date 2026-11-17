import https from "https";

const BASE = "https://outkast-studio.vercel.app";

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });
    req.on("error", reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error("Timeout"));
    });
  });
}

function fetchHeaders(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method: "HEAD" }, (res) => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
      });
    });
    req.on("error", reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error("Timeout"));
    });
    req.end();
  });
}

async function verifyOg() {
  console.log("=== 1. VERIFY LIVE OG IMAGE ===");
  const imgRes = await fetchHeaders(`${BASE}/og-image.png`);
  console.log(`Image HTTP Status: ${imgRes.statusCode}`);
  console.log(`Content-Type: ${imgRes.headers["content-type"]}`);
  console.log(`Content-Length: ${imgRes.headers["content-length"]} bytes (~${Math.round(imgRes.headers["content-length"] / 1024)} KB)`);

  const jpgRes = await fetchHeaders(`${BASE}/og-image.jpg`);
  console.log(`Fallback JPG Status: ${jpgRes.statusCode}`);

  console.log("\n=== 2. VERIFY HOMEPAGE HTML OPEN GRAPH & TWITTER TAGS ===");
  const home = await fetchRaw(BASE);
  const body = home.body;

  const checks = [
    { name: "og:title", regex: /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i },
    { name: "og:description", regex: /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i },
    { name: "og:url", regex: /<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i },
    { name: "og:type", regex: /<meta\s+property=["']og:type["']\s+content=["']([^"']+)["']/i },
    { name: "og:site_name", regex: /<meta\s+property=["']og:site_name["']\s+content=["']([^"']+)["']/i },
    { name: "og:image", regex: /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i },
    { name: "og:image:width", regex: /<meta\s+property=["']og:image:width["']\s+content=["']([^"']+)["']/i },
    { name: "og:image:height", regex: /<meta\s+property=["']og:image:height["']\s+content=["']([^"']+)["']/i },
    { name: "og:image:alt", regex: /<meta\s+property=["']og:image:alt["']\s+content=["']([^"']+)["']/i },
    { name: "twitter:card", regex: /<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i },
    { name: "twitter:title", regex: /<meta\s+name=["']twitter:title["']\s+content=["']([^"']+)["']/i },
    { name: "twitter:description", regex: /<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["']/i },
    { name: "twitter:image", regex: /<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i },
  ];

  for (const c of checks) {
    const match = body.match(c.regex);
    if (match) {
      console.log(`PASS | ${c.name}: "${match[1]}"`);
    } else {
      console.log(`FAIL | ${c.name}: NOT FOUND`);
    }
  }

  // Count og:image tags to confirm no duplicates
  const ogImageMatches = [...body.matchAll(/<meta\s+property=["']og:image["']/gi)];
  console.log(`\nTotal og:image tags found: ${ogImageMatches.length} (Expected: 1)`);

  // Check robots.txt
  console.log("\n=== 3. VERIFY ROBOTS.TXT ACCESSIBILITY ===");
  const robotsRes = await fetchRaw(`${BASE}/robots.txt`);
  const isImageBlocked = robotsRes.body.includes("Disallow: /og-image") || robotsRes.body.includes("Disallow: /*.png");
  console.log(`Robots.txt status: ${robotsRes.statusCode}`);
  console.log(`Is og-image.png blocked by robots.txt: ${isImageBlocked ? "YES (BLOCKED)" : "NO (ACCESSIBLE)"}`);
}

verifyOg().catch(console.error);
