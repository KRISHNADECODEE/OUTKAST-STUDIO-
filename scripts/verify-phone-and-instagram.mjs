import https from "https";

const BASE = "https://outkast-studio.vercel.app";

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, body: data }));
    }).on("error", reject);
  });
}

async function verify() {
  console.log("=== VERIFYING LIVE PRODUCTION DEPLOYMENT ===");
  const home = await fetchRaw(BASE);
  console.log(`Homepage HTTP Status: ${home.statusCode}`);
  const html = home.body;

  const hasPhoneTel = html.includes("tel:+919528002988");
  console.log(`Direct Call Link (tel:+919528002988): ${hasPhoneTel ? "PASS" : "FAIL"}`);

  const hasWaLink = html.includes("wa.me/919528002988");
  console.log(`WhatsApp Link (wa.me/919528002988): ${hasWaLink ? "PASS" : "FAIL"}`);

  const hasInstagram = html.includes("instagram.com/outkast.studios.official");
  console.log(`Official Instagram Link (outkast.studios.official): ${hasInstagram ? "PASS" : "FAIL"}`);

  const llms = await fetchRaw(`${BASE}/llms.txt`);
  console.log(`\nllms.txt HTTP Status: ${llms.statusCode}`);
  const hasPhoneInLlms = llms.body.includes("95280 02988");
  const hasInstaInLlms = llms.body.includes("outkast.studios.official");
  console.log(`llms.txt Phone: ${hasPhoneInLlms ? "PASS" : "FAIL"}`);
  console.log(`llms.txt Instagram: ${hasInstaInLlms ? "PASS" : "FAIL"}`);
}

verify().catch(console.error);
