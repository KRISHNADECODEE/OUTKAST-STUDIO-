import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "AI Video Advertising Agency India | AI UGC Ads | Outkast Studios",
  description:
    "AI-generated UGC advertisements, product films and performance video ads for Indian businesses. Scale creative production without traditional film crews.",
  alternates: {
    canonical: `${CANONICAL}/ai-video-advertising`,
  },
  openGraph: {
    title: "AI Video Advertising Agency India | AI UGC Ads | Outkast Studios",
    description:
      "AI-generated UGC advertisements, product films and performance video ads for Indian businesses. Scale creative production without traditional film crews.",
    url: `${CANONICAL}/ai-video-advertising`,
    siteName: "Outkast Studios",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: CANONICAL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Video Advertising",
      item: `${CANONICAL}/ai-video-advertising`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Video Advertising & Synthetic UGC Ads",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "AI Video Production & Advertising",
  description:
    "AI-powered UGC advertisements, synthetic video creative, rapid iteration ad variants, and performance video marketing for Indian D2C and service brands.",
};

const SERVICES = [
  {
    title: "AI UGC Advertisements",
    badge: "RAPID ITERATION",
    description:
      "High-converting user-generated style testimonials, unboxings, and problem-solution hooks produced with cutting-edge synthetic media workflows. Test 10 hooks in the time it usually takes to shoot one.",
  },
  {
    title: "Dynamic Product Films",
    badge: "HYPER-REAL",
    description:
      "Cinematic 3D-feel product reveals and surreal visual environments without booking studios, lighting gear, or logistics crews. Ideal for fashion, lifestyle, and consumer goods.",
  },
  {
    title: "Multilingual Ad Scaling",
    badge: "PAN-INDIA",
    description:
      "Deploy localized creative campaigns across Hindi, English, and regional Indian languages with natural lip-sync and localized voiceover nuances.",
  },
  {
    title: "Creative Hook Testing Sprints",
    badge: "PERFORMANCE-DRIVEN",
    description:
      "Stop guessing what creative wins. We script, generate, and deliver 15-30 variant hooks per campaign sprint to find the winning ad angle that lowers your cost-per-acquisition.",
  },
];

const FAQS = [
  {
    q: "What is AI UGC advertising and how does it actually work?",
    a: "AI UGC (User Generated Content) utilizes advanced generative video, voice cloning, and synthetic actor pipelines to produce authentic-looking social video ads. Instead of waiting weeks to coordinate with influencers and studio videographers, we write the script and generate production-grade video creative in days.",
  },
  {
    q: "Are the video ads clearly transparent about using AI?",
    a: "Yes. Outkast Studios believes in complete creative integrity. We adhere to all platform advertising guidelines (Meta, Google, TikTok), ensuring ethical disclosure while maintaining engaging, authentic storytelling that drives commercial results.",
  },
  {
    q: "Will AI video replace traditional commercial shoots completely?",
    a: "Not entirely. For tactile, high-touch luxury goods, physical production still has a vital place. However, for digital performance marketing, rapid creative testing, and social-first ad campaigns, AI video delivers 80-90% lower production costs with 10x faster iteration speeds.",
  },
  {
    q: "Can local businesses in Uttarakhand or tier-2 cities benefit from AI video?",
    a: "Absolutely. Local businesses often cannot afford Rs 1-3 Lakhs for a single video production day. With AI video advertising, local clinics, hotels, real estate developers, and retail stores can compete with national brand creative quality on a fraction of the budget.",
  },
  {
    q: "How do we get started with an AI video sprint?",
    a: "We start with a product audit and target audience analysis. Our team scripts 5-10 distinct hooks, generates the visual assets, edits final deliverables in 9:16 vertical format with captions and sound design, and delivers ad-ready files.",
  },
];

const INTERNAL_LINKS = [
  { label: "Haridwar Creative Hub", href: "/haridwar" },
  { label: "Rishikesh Creative Hub", href: "/rishikesh" },
  { label: "Our Verified Work", href: "/work" },
  { label: "Blog: AI Video for Local Businesses", href: "/blog/how-local-businesses-use-ai-video-advertising" },
];

export default function AiVideoAdvertisingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <LocalPageLayout
        headline="AI Video Advertising for Indian Brands"
        subheadline="Scale high-converting video creative, UGC hooks, and performance ads without massive production overhead."
        localAngle="Built for ambitious Indian D2C brands, local enterprises, and growth-stage companies that need fresh, scroll-stopping video ads every week."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "AI Advertising", href: "/ai-video-advertising" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        internalLinks={INTERNAL_LINKS}
        ctaHeadline="Ready to Test AI Video Creative?"
        ctaBody="Tell us about your product or service. We'll outline a test sprint with custom hooks tailored to your target demographic."
      />
    </>
  );
}
