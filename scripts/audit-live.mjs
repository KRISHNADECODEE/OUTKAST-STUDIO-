import fs from 'node:fs';

const urls = [
  'https://outkast-studio.vercel.app/haridwar/',
  'https://outkast-studio.vercel.app/rishikesh/',
  'https://outkast-studio.vercel.app/website-development-haridwar/',
  'https://outkast-studio.vercel.app/website-development-rishikesh/',
  'https://outkast-studio.vercel.app/social-media-management-haridwar/',
  'https://outkast-studio.vercel.app/social-media-management-rishikesh/',
  'https://outkast-studio.vercel.app/ai-video-advertising/',
  'https://outkast-studio.vercel.app/branding-agency-haridwar/'
];

async function checkSitemap() {
  const smRes = await fetch('https://outkast-studio.vercel.app/sitemap.xml');
  const smText = await smRes.text();
  return smText;
}

async function audit() {
  const sitemap = await checkSitemap();
  const results = [];
  
  for (const u of urls) {
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      const text = await res.text();
      
      const titleMatch = text.match(/<title>([^<]*)<\/title>/i);
      const descMatch = text.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
      const h1Match = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const canonMatch = text.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
      const robotsMatch = text.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
      
      const linkMatches = [...text.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
      const internalLinks = linkMatches.filter(l => l.startsWith('/') || l.includes('outkast-studio.vercel.app'));
      
      const cleanH1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : 'None';
      const parsed = new URL(u);
      const slug = parsed.pathname.replace(/\/$/, '');
      const inSitemap = sitemap.includes(slug);

      results.push({
        url: u,
        status: res.status,
        indexable: !robotsMatch || !robotsMatch[1].toLowerCase().includes('noindex'),
        title: titleMatch ? titleMatch[1].trim() : 'None',
        description: descMatch ? descMatch[1].trim() : 'None',
        h1: cleanH1,
        canonical: canonMatch ? canonMatch[1] : 'None',
        internalLinksCount: internalLinks.length,
        inSitemap: inSitemap,
        htmlLength: text.length
      });
    } catch (e) {
      results.push({
        url: u,
        error: e.message
      });
    }
  }
  
  console.log(JSON.stringify(results, null, 2));
}

audit();
