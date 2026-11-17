import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Social Media Management Agency in Haridwar | Outkast Studios",
  description:
    "Social media content creation, Reels production, account management and growth strategy for Haridwar businesses. Outkast Studios handles your complete Instagram and Facebook presence.",
  alternates: {
    canonical: `${CANONICAL}/social-media-management-haridwar`,
  },
  openGraph: {
    title: "Social Media Management Agency in Haridwar | Outkast Studios",
    description:
      "Social media content creation, Reels production, account management and growth strategy for Haridwar businesses. Outkast Studios handles your complete Instagram and Facebook presence.",
    url: `${CANONICAL}/social-media-management-haridwar`,
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
      name: "Haridwar",
      item: `${CANONICAL}/haridwar`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Social Media Management",
      item: `${CANONICAL}/social-media-management-haridwar`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management – Haridwar",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Haridwar",
  },
  serviceType: "Social Media Management",
  description:
    "End-to-end social media management for Haridwar businesses. Content planning, high-impact Reels, professional visual feeds, and community management.",
};

const SERVICES = [
  {
    title: "Reels & Video Production",
    badge: "ATTENTION-FIRST",
    description:
      "Short-form video tailored for Instagram algorithms. We script, edit, and deliver Reels that capture the cultural vibrancy, local flavours, and hospitality unique to Haridwar.",
  },
  {
    title: "Content Calendar & Strategy",
    badge: "SYSTEMATIC",
    description:
      "No more random, sporadic posting. We map out full monthly content calendars aligned with local festivals, tourist influxes, and seasonal business peaks.",
  },
  {
    title: "Grid & Graphic Design",
    badge: "EDITORIAL QUALITY",
    description:
      "Elevate your feed from amateur smartphone snaps to an aesthetic, editorial brand statement. Clean typography, premium color palettes, and curated carousels.",
  },
  {
    title: "Community & Inbound Management",
    badge: "DIRECT CONVERSION",
    description:
      "We help manage DMs, comments, and client inquiries so warm prospective leads are routed promptly into direct WhatsApp or phone consultations.",
  },
];

const FAQS = [
  {
    q: "Why do Haridwar businesses struggle with social media?",
    a: "Most local business owners attempt to manage Instagram between operational fires, leading to inconsistent posting, generic festival flyers, and low engagement. Haridwar has enormous cultural and visual richness; turning that into consistent, engaging content requires a dedicated creative team.",
  },
  {
    q: "What platforms should a Haridwar brand focus on?",
    a: "For 90% of consumer-facing businesses in Haridwar — hospitality, retail, food, fashion, and wellness — Instagram and Meta (Facebook) are the core conversion channels. We prioritise high-retention Reels and carousel formats.",
  },
  {
    q: "Do I need to provide photos and videos, or do you shoot them?",
    a: "We work flexibly. For local clients, we provide creative direction for captured footage, or we collaborate on dedicated capture days. We then edit, color-grade, sound-design, and schedule all published assets.",
  },
  {
    q: "How does social media turn into actual footfall or sales?",
    a: "Social media builds desire and top-of-mind recall. Through clear calls-to-action, location tags, local hashtag clustering, and frictionless WhatsApp chat links, viewers are converted into direct walk-ins or private enquiries.",
  },
  {
    q: "Can social media management be paired with Meta Ads?",
    a: "Yes, and that is often our most effective recommendation. Organic content establishes trust and brand legitimacy, while Meta Ads ensure your best-performing posts are distributed directly to prospective customers in Uttarakhand.",
  },
];

const INTERNAL_LINKS = [
  { label: "Haridwar Creative Hub", href: "/haridwar" },
  { label: "Rishikesh Social Media", href: "/social-media-management-rishikesh" },
  { label: "Website Development Haridwar", href: "/website-development-haridwar" },
  { label: "Branding Agency Haridwar", href: "/branding-agency-haridwar" },
];

export default function SocialMediaHaridwarPage() {
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
        headline="Social Media Management for Haridwar Brands"
        subheadline="Turn your Instagram feed from a dormant gallery into an active customer acquisition engine."
        localAngle="Haridwar has millions of pilgrims and tourists alongside a loyal local market. We create cultural, aesthetic, and performance content that commands attention in both segments."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Haridwar", href: "/haridwar" },
          { label: "Social Media", href: "/social-media-management-haridwar" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        internalLinks={INTERNAL_LINKS}
        ctaHeadline="Ready to Upgrade Your Social Presence?"
        ctaBody="Let us take the stress of content creation off your plate so you can focus on running your business."
      />
    </>
  );
}
