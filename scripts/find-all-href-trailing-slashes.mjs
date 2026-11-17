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
    // Check href: "/slug/" or href="/slug/"
    const matches = line.matchAll(/href[:=]\s*["'](\/[a-z0-9\-_]+(?:\/[a-z0-9\-_]+)*\/)["']/g);
    for (const m of matches) {
      if (m[1] !== "/") {
        console.log(`HREF ${file}:${idx + 1}: ${m[1]} in line: ${line.trim()}`);
        count++;
      }
    }
  });
}
console.log(`Found ${count} occurrences.`);
