import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Creative Agency in Haridwar | Outkast Studios",
  description:
    "Outkast Studios is a creative growth studio serving businesses in Haridwar. Brand identity, website development, social media, AI advertising and Meta Ads.",
  alternates: {
    canonical: `${CANONICAL}/haridwar`,
  },
  openGraph: {
    title: "Creative Agency in Haridwar | Outkast Studios",
    description:
      "Outkast Studios is a creative growth studio serving businesses in Haridwar. Brand identity, website development, social media, AI advertising and Meta Ads.",
    url: `${CANONICAL}/haridwar`,
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
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creative Agency Services – Haridwar",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Haridwar",
  },
  serviceType: [
    "Brand Identity",
    "Website Development",
    "Social Media Management",
    "AI Advertising",
    "Meta Ads",
  ],
  description:
    "Outkast Studios provides brand building, website development, social media management, AI video advertising and Meta Ads for businesses in Haridwar.",
};

const SERVICES = [
  {
    title: "Brand Building",
    badge: "IDENTITY",
    description:
      "Haridwar businesses often operate without a recognisable visual identity. We build brand systems — logo, colour palette, typography, tone — that make your business memorable to both pilgrims and local customers.",
  },
  {
    title: "AI Advertising",
    badge: "NEW",
    description:
      "AI-generated video ads designed to perform on Instagram, YouTube and Facebook. Ideal for Haridwar hospitality, retail and tourism businesses that need high-quality creative without traditional production costs.",
  },
  {
    title: "Website Development",
    badge: "CUSTOM CODE",
    description:
      "Mobile-first, fast-loading custom websites that put your Haridwar business on Google. No templates — every site is hand-coded for performance, trust and conversions.",
  },
  {
    title: "Social Media Management",
    badge: "GROWTH",
    description:
      "Consistent, strategy-led Instagram and Facebook content for Haridwar businesses. We write captions, design graphics, produce Reels — and manage the entire account so you don't have to.",
  },
  {
    title: "Meta Ads",
    badge: "PERFORMANCE",
    description:
      "Facebook and Instagram advertising campaigns built for Haridwar audiences. From awareness to bookings and direct enquiries — precision-targeted to reach spiritual tourists, locals and pilgrims.",
  },
];

const FAQS = [
  {
    q: "Does Outkast Studios work with businesses in Haridwar?",
    a: "Yes. We work with businesses across Haridwar — from local retail and tailoring shops to hospitality brands, spiritual tourism operators, and service providers. Geography is no barrier: we collaborate remotely via WhatsApp and video calls, delivering the same standard of work we provide to any other client.",
  },
  {
    q: "What digital services do local Haridwar businesses need most?",
    a: "Most Haridwar businesses we speak to have one of three gaps: no professional website (which means zero Google visibility), inconsistent or absent social media, or no branded identity beyond a basic sign board. The right starting point depends on your business goals — a quick consultation helps us identify the highest-leverage investment for you.",
  },
  {
    q: "How much does a professional website cost for a Haridwar business?",
    a: "Our website projects start from approximately ₹25,000 for a clean, mobile-first custom site — and go up based on features like booking systems, e-commerce, or multi-language support. We provide a fixed-scope quote before any work begins, with no surprise charges.",
  },
  {
    q: "Can a Haridwar business compete with brands from bigger cities?",
    a: "Absolutely — and many already do. A professionally designed website and consistent social media presence levels the playing field entirely. Pilgrims and tourists searching for hotels, tour operators or local services online judge you by your digital presence, not your city. We help Haridwar businesses look and compete at a national level.",
  },
  {
    q: "Do you offer social media management for Haridwar brands?",
    a: "Yes. We offer complete Instagram and Facebook account management — content calendars, Reels production, caption writing, posting, and community engagement. For Haridwar businesses, we lean into the rich visual culture of the city — ghats, festivals, local craft — to build authentic, high-engagement content.",
  },
];

export default function HaridwarPage() {
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
        headline="Creative Agency Serving Haridwar Businesses"
        subheadline="Brand identity, websites, social media and AI advertising — built for businesses that call Haridwar home."
        localAngle="Haridwar's mix of spiritual tourism, local retail and growing hospitality means the market is busy — but most businesses still lack a professional digital presence. That gap is your opportunity."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Haridwar", href: "/haridwar" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        ctaHeadline="Let's Build Your Haridwar Brand"
        ctaBody="Whether you need a website, a social media strategy, or a full brand identity — start with a conversation. We'll tell you honestly what will move your business forward."
        internalLinks={[
          { label: "Website Development in Haridwar →", href: "/website-development-haridwar" },
          { label: "Social Media in Haridwar →", href: "/social-media-management-haridwar" },
          { label: "Branding in Haridwar →", href: "/branding-agency-haridwar" },
          { label: "Also serve Rishikesh →", href: "/rishikesh" },
          { label: "← Back to Home", href: "/" },
        ]}
        whatsappMessage="Hi Outkast Studios, I'm a business in Haridwar and I'd like to discuss your services."
      />
    </>
  );
}
