import fs from "fs";
import path from "path";

function walk(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) results.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/.test(file)) results.push(full);
  }
  return results;
}

const files = walk("src");
let count = 0;
for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  lines.forEach((line, idx) => {
    const matches = line.matchAll(/href=["'](\/[^"'#\s]+\/)["']/g);
    for (const m of matches) {
      if (m[1] !== "/") {
        console.log(`${file}:${idx + 1}: ${m[1]} in: ${line.trim()}`);
        count++;
      }
    }
    const ogMatches = line.matchAll(/url:\s*`?\${CANONICAL}(\/[^`"'\s]+\/)`?/g);
    for (const m of ogMatches) {
      if (m[1] !== "/") {
        console.log(`OG_URL ${file}:${idx + 1}: ${m[1]}`);
        count++;
      }
    }
    const itemMatches = line.matchAll(/item:\s*`?\${CANONICAL}(\/[^`"'\s]+\/)`?/g);
    for (const m of itemMatches) {
      if (m[1] !== "/") {
        console.log(`JSONLD_ITEM ${file}:${idx + 1}: ${m[1]}`);
        count++;
      }
    }
  });
}
console.log(`Found ${count} occurrences.`);
