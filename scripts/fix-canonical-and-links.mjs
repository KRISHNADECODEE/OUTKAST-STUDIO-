import fs from "fs";

// 1. Fix the 8 local landing pages
const localPages = [
  "src/app/ai-video-advertising/page.tsx",
  "src/app/branding-agency-haridwar/page.tsx",
  "src/app/haridwar/page.tsx",
  "src/app/rishikesh/page.tsx",
  "src/app/social-media-management-haridwar/page.tsx",
  "src/app/social-media-management-rishikesh/page.tsx",
  "src/app/website-development-haridwar/page.tsx",
  "src/app/website-development-rishikesh/page.tsx",
];

for (const file of localPages) {
  let content = fs.readFileSync(file, "utf8");
  // Replace ${CANONICAL}/slug/ with ${CANONICAL}/slug
  content = content.replace(/\$\{CANONICAL\}\/([a-z0-9\-]+)\//g, "${CANONICAL}/$1");
  fs.writeFileSync(file, content, "utf8");
  console.log(`Updated local landing page: ${file}`);
}

// 2. Fix the 7 blog articles
const blogPages = [
  "src/app/blog/how-local-businesses-use-ai-video-advertising/page.tsx",
  "src/app/blog/how-much-does-a-website-cost-in-haridwar/page.tsx",
  "src/app/blog/how-much-spend-instagram-marketing-small-business/page.tsx",
  "src/app/blog/how-to-choose-social-media-agency-rishikesh/page.tsx",
  "src/app/blog/how-to-generate-leads-meta-ads/page.tsx",
  "src/app/blog/is-professional-website-necessary-small-business/page.tsx",
  "src/app/blog/what-should-social-media-management-package-include/page.tsx",
];

for (const file of blogPages) {
  let content = fs.readFileSync(file, "utf8");
  // Replace href="/slug/" with href="/slug"
  content = content.replace(/href="\/([a-z0-9\-]+)\/"/g, 'href="/$1"');
  fs.writeFileSync(file, content, "utf8");
  console.log(`Updated blog article: ${file}`);
}

console.log("All canonical tags and internal links updated successfully.");
