const blogUrls = [
  'https://outkast-studio.vercel.app/blog/',
  'https://outkast-studio.vercel.app/blog/how-much-does-a-website-cost-in-haridwar/',
  'https://outkast-studio.vercel.app/blog/how-to-choose-social-media-agency-rishikesh/',
  'https://outkast-studio.vercel.app/blog/how-much-spend-instagram-marketing-small-business/',
  'https://outkast-studio.vercel.app/blog/how-local-businesses-use-ai-video-advertising/',
  'https://outkast-studio.vercel.app/blog/what-should-social-media-management-package-include/',
  'https://outkast-studio.vercel.app/blog/how-to-generate-leads-meta-ads/',
  'https://outkast-studio.vercel.app/blog/is-professional-website-necessary-small-business/'
];

const workUrls = [
  'https://outkast-studio.vercel.app/work/',
  'https://outkast-studio.vercel.app/work/su-tour-travels/',
  'https://outkast-studio.vercel.app/work/xtrm/',
  'https://outkast-studio.vercel.app/work/om-ladies-tailor/',
  'https://outkast-studio.vercel.app/work/the-masked-astrologer/'
];

async function checkUrls(name, list) {
  console.log(`\n=== Checking ${name} ===`);
  for (const u of list) {
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const text = await res.text();
      const title = text.match(/<title>([^<]*)<\/title>/i)?.[1] || 'No title';
      const hasSchema = text.includes('application/ld+json');
      console.log(`${res.status} | Schema: ${hasSchema} | ${u} | Title: ${title.substring(0, 40)}...`);
    } catch (e) {
      console.log(`ERR | ${u} | ${e.message}`);
    }
  }
}

async function run() {
  await checkUrls('Blog Articles', blogUrls);
  await checkUrls('Case Studies', workUrls);
}

run();
