import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Creative Agency in Rishikesh | Outkast Studios",
  description:
    "Outkast Studios serves Rishikesh businesses with brand building, website development, social media management, AI advertising and Meta Ads campaigns.",
  alternates: {
    canonical: `${CANONICAL}/rishikesh`,
  },
  openGraph: {
    title: "Creative Agency in Rishikesh | Outkast Studios",
    description:
      "Outkast Studios serves Rishikesh businesses with brand building, website development, social media management, AI advertising and Meta Ads campaigns.",
    url: `${CANONICAL}/rishikesh`,
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
      item: `${CANONICAL}/rishikesh`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creative Agency Services – Rishikesh",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Rishikesh",
  },
  serviceType: [
    "Brand Identity",
    "Website Development",
    "Social Media Management",
    "AI Advertising",
    "Meta Ads",
  ],
  description:
    "Outkast Studios provides internationally-positioned brand building, website development, social media management, AI video advertising and Meta Ads for wellness, yoga, retreat and tourism businesses in Rishikesh.",
};

const SERVICES = [
  {
    title: "International Brand Building",
    badge: "GLOBALLY CREDIBLE",
    description:
      "Retreat centres, yoga studios and wellness brands in Rishikesh compete for international guests who judge you entirely on your digital presence. We build brand identities and storytelling systems that resonate with audiences from Europe, North America and Southeast Asia — not just domestic travellers.",
  },
  {
    title: "AI Advertising for Tourism",
    badge: "PERFORMANCE",
    description:
      "Cinematic AI-generated video ads for Rishikesh tourism and wellness businesses. Showcase your retreat atmosphere, yoga programmes and Himalayan setting with scroll-stopping creative that works across Instagram, YouTube and Facebook — at a fraction of traditional production costs.",
  },
  {
    title: "Booking-Focused Websites",
    badge: "CONVERSION-FIRST",
    description:
      "Fast, mobile-first websites designed around your booking flow. For Rishikesh retreat centres and yoga studios, the website must do real work — convert international visitors into confirmed bookings. We build custom sites engineered for trust and action.",
  },
  {
    title: "Social Media Management",
    badge: "VISUAL STORYTELLING",
    description:
      "Instagram and Facebook management built around Rishikesh's visual richness — yoga sessions, nature, the Ganges, ceremony. We create content that attracts international followers and converts them into enquiries and bookings.",
  },
  {
    title: "Meta Ads for Wellness Brands",
    badge: "TARGETED REACH",
    description:
      "Facebook and Instagram advertising campaigns targeted at international wellness travellers actively searching for yoga retreats, meditation programmes and Himalayan experiences. Precision targeting to the audiences most likely to book.",
  },
];

const FAQS = [
  {
    q: "Does Outkast Studios work with yoga studios and wellness businesses in Rishikesh?",
    a: "Yes — wellness, yoga, retreat centres, adventure tourism and hospitality businesses in Rishikesh are exactly the kind of clients we're built for. These businesses need globally credible digital presences to attract international guests, and that's what we build. We collaborate fully remotely via WhatsApp and video calls.",
  },
  {
    q: "How can a Rishikesh retreat centre attract more international guests?",
    a: "The two biggest levers are a credible website and a consistent social media presence. International guests research heavily before booking — if your website looks outdated or your Instagram is inactive, you lose those bookings to competitors. We build both: websites optimised for trust and conversion, and social content designed to attract international wellness travellers.",
  },
  {
    q: "What makes a good website for a Rishikesh wellness business?",
    a: "Three things: speed (international visitors will not wait for a slow site), clarity (your programmes, pricing and booking process should be instantly understandable), and atmosphere (visuals and copy that make the visitor feel the peace and experience before they arrive). We combine all three in every site we build.",
  },
  {
    q: "Do you manage Instagram for local businesses in Rishikesh?",
    a: "Yes. We handle the full account — content strategy, Reels production, caption writing, hashtag research, posting schedule and community engagement. For Rishikesh businesses, we lean into the visual content that performs best: yoga and meditation visuals, nature, the Ganges, festival moments and retreat life.",
  },
  {
    q: "Can AI video advertising work for a Rishikesh tourism business?",
    a: "Very effectively. AI-generated video ads let us produce cinematic, emotionally resonant content — the kind that makes someone stop scrolling and start dreaming about a retreat — at a cost that makes sense for even a mid-sized Rishikesh business. They perform best on Instagram Reels and Facebook video placements targeting international audiences.",
  },
];

export default function RishikeshPage() {
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
        headline="Creative Agency Serving Rishikesh Businesses"
        subheadline="Globally credible brand building, websites and social media — for Rishikesh's wellness, yoga, retreat and tourism sector."
        localAngle="Rishikesh is a world-famous destination. International visitors choose yoga studios, retreat centres and adventure experiences based almost entirely on digital presence. The gap between a credible online identity and an outdated one is the gap between a full calendar and empty rooms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rishikesh", href: "/rishikesh" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        ctaHeadline="Let's Build Your International Presence"
        ctaBody="Rishikesh businesses deserve digital identities as compelling as the experiences they offer. Tell us about your retreat, studio or tourism brand — and we'll show you what's possible."
        internalLinks={[
          { label: "Website Development in Rishikesh →", href: "/website-development-rishikesh" },
          { label: "Social Media in Rishikesh →", href: "/social-media-management-rishikesh" },
          { label: "Also serve Haridwar →", href: "/haridwar" },
          { label: "← Back to Home", href: "/" },
        ]}
        whatsappMessage="Hi Outkast Studios, I run a wellness/tourism business in Rishikesh and I'd like to discuss building my digital presence."
      />
    </>
  );
}
