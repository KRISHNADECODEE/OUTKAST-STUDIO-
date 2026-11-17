/* Single source of truth for content that appears both on screen and inside
   structured data (JSON-LD). Synchronized directly with business-config.ts. */

import { BUSINESS_CONFIG, getEmailHref } from "./business-config";

export const SITE = {
  name: BUSINESS_CONFIG.name,
  legalName: BUSINESS_CONFIG.legalName,
  tagline: BUSINESS_CONFIG.tagline,
  url: BUSINESS_CONFIG.canonicalUrl,
  email: BUSINESS_CONFIG.officialEmail,
  description: `${BUSINESS_CONFIG.name} is a ${BUSINESS_CONFIG.tagline}. ${BUSINESS_CONFIG.positioningStatement}`,
  sameAs: [
    BUSINESS_CONFIG.instagramUrl,
  ].filter((url) => Boolean(url) && url !== "[OWNER TO CONFIRM]" && url.startsWith("http")),
  areaServed: ["IN", "US", "GB", "AE", "AU", "CA", "SG", "DE"],
  services: [
    "Brand Building & Visual Identity",
    "AI UGC & AI Advertising",
    "Custom Website Development",
    "Social Media Management",
    "Meta Ads Management",
    "Content Strategy & Creative Production",
  ],
};

export type Faq = {
  id: string;
  q: string;
  a: string;
  category?: string;
};

export const FAQS: Faq[] = [
  {
    id: "services-offered",
    q: "What services does Outkast Studios offer?",
    a: "Outkast Studios is a creative growth studio specializing in five integrated disciplines: Brand Building (positioning, identity systems, and brand voice), AI Advertising (AI UGC ads, 3D product films, and cinematic video campaigns), Website Development (bespoke portfolio, business, and conversion-focused web applications), Social Media Management (30-day content calendars, Reels production, and feed direction), and Meta Ads (full-funnel Facebook and Instagram advertising and optimization).",
    category: "General",
  },
  {
    id: "website-cost",
    q: "How much does a website cost?",
    a: "Every website we engineer is custom-built from the ground up without generic templates. Pricing is scoped strictly based on project requirements—such as custom animation complexity, interactive 3D/canvas features, CMS architecture, and turnaround speed. Rather than hidden add-ons or retainer lock-ins, we provide a transparent, fixed-scope proposal after understanding your specific business objectives.",
    category: "Web Development",
  },
  {
    id: "ai-ugc-ads",
    q: "Do you create AI UGC advertisements?",
    a: "Yes. AI UGC advertising is one of our flagship capabilities. We create hyper-realistic virtual creators, bespoke product integrations, natural voice synthesis, and viral hooks engineered specifically for Instagram Reels, TikTok, and YouTube Shorts. You get studio-grade commercial assets without the cost, logistics, or multi-week delays of traditional studio shoot days.",
    category: "AI Advertising",
  },
  {
    id: "instagram-management",
    q: "Do you manage Instagram accounts?",
    a: "Yes. We manage brand Instagram accounts through complete creative execution: monthly content calendars, short-form video/Reel production, carousel designs, high-converting copywriting, and visual curation to establish a recognizable, authoritative presence in your market.",
    category: "Social Media",
  },
  {
    id: "monthly-packages",
    q: "Do you provide monthly packages?",
    a: "Yes. For ambitious brands looking for continuous creative production and sustained growth, we offer structured monthly studio partnerships. These combine ongoing social media content production, regular AI UGC ad creative refreshes, and active Meta ad campaign management into a single seamless relationship.",
    category: "Partnership",
  },
  {
    id: "meta-ads-management",
    q: "Do you manage Meta Ads?",
    a: "Yes. We manage data-driven advertising campaigns across Facebook and Instagram. Our workflow combines high-converting creative assets (including AI UGC and cinematic video) with precise audience targeting, creative split-testing, funnel tracking, and continuous conversion rate optimization.",
    category: "Meta Ads",
  },
  {
    id: "ad-budget-included",
    q: "Is the advertising budget included?",
    a: "No. Your media ad spend is paid directly to Meta (Facebook/Instagram) through your own ad account. This ensures you maintain 100% transparent ownership of your ad spend, billing, and pixel data. Our fee covers strategy, creative concepting, asset production, campaign setup, testing, and day-to-day optimization.",
    category: "Meta Ads",
  },
  {
    id: "project-timeline",
    q: "How long does a project take?",
    a: "Custom website projects typically take 2 to 4 weeks depending on design complexity, custom animation choreography, and asset readiness. AI advertising packages and brand identity sprints generally take 1 to 2 weeks from brief approval to final delivery.",
    category: "Process",
  },
  {
    id: "international-clients",
    q: "Do you work with businesses outside India?",
    a: "Yes! We are based in India and work with ambitious founders, brands, and businesses worldwide. We coordinate across international time zones via WhatsApp, Slack, email, and scheduled video sessions to ensure smooth collaboration regardless of location.",
    category: "General",
  },
];
