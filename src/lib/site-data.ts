/* Single source of truth for content that appears both on screen and inside
   structured data. Keeping them together stops the rendered FAQ and the
   FAQPage schema from drifting apart, which is the usual way rich results
   silently break. */

export const SITE = {
  name: "OUTKAST STUDIOS",
  url: "https://outkast-studio.vercel.app",
  email: "Oukast.studio2026@gmail.com",
  description:
    "OUTKAST STUDIOS is a creative agency building bold, high-performance websites, AI UGC advertising and brand identities for ambitious brands worldwide.",
  sameAs: [
    "https://www.instagram.com/outkast._.studio/",
  ],
  areaServed: ["US", "GB", "AE", "IN", "AU"],
  services: [
    "Portfolio & Business Websites",
    "AI UGC Advertising",
    "Meta Ads Campaign Management",
    "30 Day Content Calendars",
    "Brand Identity & Brand Building",
    "Full Growth Partnerships",
  ],
};

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How long does a website take?",
    a: "Our typical custom web project turnaround is 2 to 4 weeks, depending on design complexity, custom GSAP animations, and asset readiness.",
  },
  {
    q: "Do you offer monthly content?",
    a: "Yes! Our Creative 30 Days Content Calendar and AI UGC Ads packages provide continuous monthly content creation designed to keep your brand consistently active.",
  },
  {
    q: "Do you run Meta Ads?",
    a: "Absolutely. We manage data-driven ad campaigns on Facebook & Instagram, pairing our high-converting AI UGC creatives with precision targeting to achieve high ROAS.",
  },
  {
    q: "What is AI UGC Ads?",
    a: "AI UGC (User Generated Content) Ads use hyper-realistic AI creators, voice models, and hooks tailored to look 100% organic on TikTok, Reels, and Shorts.",
  },
  {
    q: "Do you work worldwide?",
    a: "Yes! We work with ambitious brands worldwide across 18+ countries including USA, UK, UAE, India, Europe, and Australia.",
  },
  {
    q: "How many clients do you take on at once?",
    a: "We strictly work with 11 clients at a time so every project gets senior attention. When all 11 slots are filled, new enquiries join a waitlist for the next opening.",
  },
];
