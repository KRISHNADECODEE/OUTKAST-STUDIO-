import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Social Media Management Agency in Rishikesh | Outkast Studios",
  description:
    "Complete social media management for Rishikesh yoga studios, retreat centres, wellness brands and adventure tourism. Content strategy, Reels, and international audience engagement.",
  alternates: {
    canonical: `${CANONICAL}/social-media-management-rishikesh/`,
  },
  openGraph: {
    title: "Social Media Management Agency in Rishikesh | Outkast Studios",
    description:
      "Complete social media management for Rishikesh yoga studios, retreat centres, wellness brands and adventure tourism. Content strategy, Reels, and international audience engagement.",
    url: `${CANONICAL}/social-media-management-rishikesh/`,
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
      name: "Rishikesh",
      item: `${CANONICAL}/rishikesh/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Social Media Management",
      item: `${CANONICAL}/social-media-management-rishikesh/`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management – Rishikesh",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Rishikesh",
  },
  serviceType: "Social Media Management",
  description:
    "Social media management for Rishikesh wellness retreats, yoga teacher trainings, and adventure sports brands targeting national and global travelers.",
};

const SERVICES = [
  {
    title: "Retreat & Wellness Storytelling",
    badge: "GLOBAL APPEAL",
    description:
      "Rishikesh is the yoga capital of the world. We craft serene, visually captivating video content and thoughtful philosophical captions that resonate deeply with international seekers.",
  },
  {
    title: "High-Energy Adventure Reels",
    badge: "VIRAL HOOKS",
    description:
      "For rafting, camping, bungee jumping, and trekking operators — we produce adrenaline-packed, fast-cut Reels designed to stop the scroll and drive instant weekend bookings.",
  },
  {
    title: "YTT & Course Promotion",
    badge: "HIGH-TICKET",
    description:
      "200-hour and 300-hour Yoga Teacher Trainings are premium investments. We craft educational carousels, student transformation journeys, and clear admissions timelines.",
  },
  {
    title: "International Community Engagement",
    badge: "TRUST BUILDING",
    description:
      "Navigating international time zones, currencies, and FAQs across WhatsApp and Instagram DMs to ensure foreign travellers feel safe, guided, and welcomed.",
  },
];

const FAQS = [
  {
    q: "Why is social media different for Rishikesh brands compared to standard cities?",
    a: "Rishikesh draws a unique demographic: international spiritual seekers, domestic weekenders, and adventure enthusiasts. Content must look internationally polished, culturally grounded, and aesthetically breath-taking, rather than like standard corporate marketing.",
  },
  {
    q: "How can our retreat fill upcoming batch dates through Instagram?",
    a: "By presenting authentic day-in-the-life journeys, student interviews, instructor lineage, and clear booking milestones. When paired with targeted Meta Ads in key source countries (Europe, North America, Southeast Asia), batches fill months in advance.",
  },
  {
    q: "Do you handle English and Hindi content?",
    a: "Yes. For wellness and international retreats, we focus on fluent, elegant English communication. For domestic adventure and hospitality, we can tailor bilingual tone and phrasing.",
  },
  {
    q: "Can you help us build an aesthetic grid that looks like a luxury publication?",
    a: "Absolutely. Outkast Studios has a dark editorial design background. We reject generic Canva templates in favor of bespoke visual layouts that give your centre international credibility.",
  },
  {
    q: "What do we need to provide to get started?",
    a: "High-resolution photos, raw smartphone clips of daily classes/activities, and answers to our strategic onboarding brief. We do the heavy lifting: editing, music licensing, copywriting, scheduling, and analytics.",
  },
];

const INTERNAL_LINKS = [
  { label: "Rishikesh Creative Hub", href: "/rishikesh" },
  { label: "Website Development Rishikesh", href: "/website-development-rishikesh" },
  { label: "Haridwar Social Media", href: "/social-media-management-haridwar" },
  { label: "AI Video Advertising", href: "/ai-video-advertising" },
];

export default function SocialMediaRishikeshPage() {
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
        headline="Social Media Management for Rishikesh Brands"
        subheadline="Connect your retreat, yoga school, or adventure outfit with travelers seeking transformation."
        localAngle="In Rishikesh, your competitors aren't just down the street — you compete for attention with Bali, Costa Rica, and Goa. We give your studio the visual distinction required to win globally."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rishikesh", href: "/rishikesh" },
          { label: "Social Media", href: "/social-media-management-rishikesh" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        internalLinks={INTERNAL_LINKS}
        ctaHeadline="Ready to Grow Your Rishikesh Brand?"
        ctaBody="Schedule a free strategy conversation and let us audit your current social channels."
      />
    </>
  );
}
