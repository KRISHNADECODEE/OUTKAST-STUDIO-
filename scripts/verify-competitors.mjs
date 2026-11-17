const competitors = [
  { name: 'Yuvan Creations', domain: 'https://yuvancreations.in', city: 'Haridwar' },
  { name: 'Digital Innovations', domain: 'https://dgtlinnovations.in', city: 'Haridwar' },
  { name: 'Shreeji Web Solutions', domain: 'https://shreejiwebsolutions.com', city: 'Haridwar' },
  { name: 'Mayraweb', domain: 'https://mayraweb.com', city: 'Haridwar/Roorkee' },
  { name: 'Dezloper', domain: 'https://dezloper.com', city: 'Haridwar' },
  { name: 'Ecurve Digital', domain: 'https://ecurvedigital.in', city: 'Haridwar' },
  { name: 'The Brand Marketing', domain: 'https://thebrandmarketing.in', city: 'Rishikesh' },
  { name: 'Ads YB Digital', domain: 'https://adsybdigital.com', city: 'Rishikesh' },
  { name: 'Aparnova Media', domain: 'https://aparnovamedia.com', city: 'Rishikesh' },
  { name: 'Rishikesh Advertiser', domain: 'https://rishikeshadvertiser.in', city: 'Rishikesh' },
  { name: 'SocialGuava', domain: 'https://socialguava.com', city: 'Rishikesh' },
  { name: 'TreeMultisoft', domain: 'https://treemultisoft.com', city: 'Rishikesh' },
  { name: 'GYAR Tech Solutions', domain: 'https://gyartechsolutions.in', city: 'Rishikesh' },
  { name: 'NJ Graphica', domain: 'https://njgraphica.com', city: 'Roorkee' },
  { name: 'ERP Tech Pro', domain: 'https://erptechpro.com', city: 'Roorkee' },
  { name: 'Social Hikers', domain: 'https://socialhikers.in', city: 'Roorkee' },
  { name: 'Efox Technologies', domain: 'https://efoxtechnologies.com', city: 'Roorkee' },
  { name: 'Coderhill', domain: 'https://coderhill.in', city: 'Roorkee' }
];

async function verifyCompetitors() {
  const results = [];
  for (const c of competitors) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(c.domain, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: controller.signal
      });
      clearTimeout(timeout);
      
      const text = await res.text();
      const title = text.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || 'No title';
      const h1 = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') || 'No H1';
      
      results.push({
        name: c.name,
        domain: c.domain,
        city: c.city,
        accessible: true,
        status: res.status,
        title: title.substring(0, 70),
        h1: h1.substring(0, 70),
      });
    } catch (e) {
      results.push({
        name: c.name,
        domain: c.domain,
        city: c.city,
        accessible: false,
        error: e.message
      });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

verifyCompetitors();
