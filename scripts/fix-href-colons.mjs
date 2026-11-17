import fs from "fs";

const files = [
  "src/app/haridwar/page.tsx",
  "src/app/rishikesh/page.tsx",
  "src/app/website-development-haridwar/page.tsx",
  "src/app/website-development-rishikesh/page.tsx",
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  // Replace href: "/slug/" with href: "/slug"
  content = content.replace(/href:\s*"\/([a-z0-9\-]+)\/"/g, 'href: "/$1"');
  fs.writeFileSync(file, content, "utf8");
  console.log(`Cleaned href: in ${file}`);
}
