import https from "https";

const BASE = "https://outkast-studio.vercel.app";

const URLS = [
  "",
  "/haridwar",
  "/rishikesh",
  "/website-development-haridwar",
  "/website-development-rishikesh",
  "/social-media-management-haridwar",
  "/social-media-management-rishikesh",
  "/branding-agency-haridwar",
  "/ai-video-advertising",
  "/work",
  "/work/su-tour-travels",
  "/work/xtrm",
  "/work/om-ladies-tailor",
  "/work/the-masked-astrologer",
  "/blog",
  "/blog/how-much-does-a-website-cost-in-haridwar",
  "/blog/how-to-choose-social-media-agency-rishikesh",
  "/blog/how-much-spend-instagram-marketing-small-business",
  "/blog/how-local-businesses-use-ai-video-advertising",
  "/blog/what-should-social-media-management-package-include",
  "/blog/how-to-generate-leads-meta-ads",
  "/blog/is-professional-website-necessary-small-business",
];

function fetchRaw(url, maxRedirects = 0) {
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

async function verifyAll() {
  console.log("=== STEP 1: VERIFY SITEMAP.XML ===");
  try {
    const sitemapRes = await fetchRaw(`${BASE}/sitemap.xml`);
    console.log(`Sitemap HTTP Status: ${sitemapRes.statusCode}`);
    const matches = [...sitemapRes.body.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      (m) => m[1]
    );
    console.log(`Total URLs in live sitemap.xml: ${matches.length}`);
    const hasHash = matches.some((u) => u.includes("#"));
    console.log(`Contains hash fragments: ${hasHash ? "YES (FAIL)" : "NO (PASS)"}`);
    console.log(
      `Matches expected 22 URLs: ${
        matches.length === 22 ? "YES (PASS)" : "NO (COUNT MISMATCH)"
      }`
    );
  } catch (err) {
    console.error("Error fetching sitemap:", err.message);
  }

  console.log("\n=== STEP 2: VERIFY ALL 22 URLS & CANONICAL TAGS ===");
  const results = [];
  for (const path of URLS) {
    const targetUrl = `${BASE}${path}`;
    try {
      const res = await fetchRaw(targetUrl);
      const canonicalMatch = res.body.match(
        /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
      ) || res.body.match(
        /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i
      );
      const canonical = canonicalMatch ? canonicalMatch[1] : "NONE";

      let redirectWorks = "N/A";
      if (path !== "") {
        const slashRes = await fetchRaw(`${targetUrl}/`);
        redirectWorks =
          slashRes.statusCode === 308 &&
          slashRes.headers.location === path
            ? "308 -> Clean"
            : `Status ${slashRes.statusCode}`;
      }

      const pass =
        res.statusCode === 200 &&
        canonical === (path === "" ? BASE : targetUrl) &&
        (path === "" || redirectWorks === "308 -> Clean");

      results.push({
        path: path === "" ? "/" : path,
        status: res.statusCode,
        canonical,
        redirect: redirectWorks,
        pass,
      });
      console.log(
        `${pass ? "PASS" : "FAIL"} | ${path === "" ? "/" : path} | Status: ${
          res.statusCode
        } | Canonical: ${canonical} | Slash Redirect: ${redirectWorks}`
      );
    } catch (err) {
      console.error(`Error on ${targetUrl}:`, err.message);
      results.push({
        path,
        status: "ERR",
        canonical: "ERR",
        redirect: "ERR",
        pass: false,
      });
    }
  }

  const allPassed = results.every((r) => r.pass);
  console.log(
    `\n=== OVERALL STATUS: ${allPassed ? "ALL 22 URLS PASSED" : "FAILURES DETECTED"} ===`
  );
}

verifyAll();
