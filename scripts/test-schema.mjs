async function testSchema() {
  const res = await fetch('https://outkast-studio.vercel.app/haridwar/');
  const text = await res.text();
  const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const matches = [...text.matchAll(scriptRegex)];
  
  console.log('Schemas found on /haridwar:', matches.length);
  matches.forEach((m, idx) => {
    try {
      const parsed = JSON.parse(m[1]);
      console.log(`Schema #${idx+1}: @type = ${parsed['@type'] || 'Array/Object'} | name = ${parsed.name || parsed['@id'] || 'N/A'}`);
    } catch(e) {
      console.log(`Schema #${idx+1}: PARSE ERROR`, e.message);
    }
  });
}
testSchema();
