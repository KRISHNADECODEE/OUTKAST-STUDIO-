import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Branding Agency in Haridwar | Outkast Studios",
  description:
    "Brand identity, visual direction and brand positioning for businesses in Haridwar. Logo design, brand guidelines, storytelling and digital brand experiences.",
  alternates: {
    canonical: `${CANONICAL}/branding-agency-haridwar`,
  },
  openGraph: {
    title: "Branding Agency in Haridwar | Outkast Studios",
    description:
      "Brand identity, visual direction and brand positioning for businesses in Haridwar. Logo design, brand guidelines, storytelling and digital brand experiences.",
    url: `${CANONICAL}/branding-agency-haridwar`,
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
      name: "Branding Agency",
      item: `${CANONICAL}/branding-agency-haridwar`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Branding & Brand Building – Haridwar",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Haridwar",
  },
  serviceType: "Branding & Brand Identity",
  description:
    "Comprehensive brand building for Haridwar enterprises. Strategy, visual identity, custom typography, packaging direction, and brand guidelines.",
};

const SERVICES = [
  {
    title: "Brand Strategy & Positioning",
    badge: "FOUNDATIONAL",
    description:
      "Clarify your brand core, mission, and unique commercial moat. We define how your Haridwar business differentiates itself from local commoditised competitors.",
  },
  {
    title: "Visual Identity Systems",
    badge: "BESPOKE DESIGN",
    description:
      "Logomarks, responsive emblems, typography pairings, color psychology, and textural palettes designed to look timeless across print, signage, and digital.",
  },
  {
    title: "Editorial Brand Guidelines",
    badge: "COHESION",
    description:
      "A complete brand book detailing clear rules for staff, printers, and external partners to maintain consistent aesthetic discipline everywhere.",
  },
  {
    title: "Packaging & Physical Touchpoints",
    badge: "TACTILE EXPERIENCE",
    description:
      "From retail bags and luxury clothing tags to hotel keycard sleeves and corporate stationery — we ensure physical products match your digital prestige.",
  },
];

const FAQS = [
  {
    q: "Why do local businesses in Haridwar need professional branding?",
    a: "As national retail chains, franchise hotels, and modern D2C brands enter tier-2 cities like Haridwar, local businesses can no longer survive solely on family heritage or location. Professional branding enables you to defend your pricing, command respect, and build genuine customer loyalty.",
  },
  {
    q: "Is branding just a logo design?",
    a: "No. A logo is merely a signature. Branding encompasses your market positioning, your typography, your color systems, the tone of voice in your messaging, and how customers feel whenever they interact with your company.",
  },
  {
    q: "How long does a branding project take?",
    a: "A typical brand identity system takes between 2 to 4 weeks depending on the scope of physical deliverables (packaging, interior signage guidelines, stationery) and feedback rounds.",
  },
  {
    q: "Can you rebrand an established, long-running business without alienating existing customers?",
    a: "Yes. In fact, that was exactly our challenge with Om Ladies Tailor. We preserve the authentic soul and heritage of established businesses while stripping away outdated visual clutter and elevating their craft to modern luxury standards.",
  },
  {
    q: "Will we receive all source files?",
    a: "Yes. You receive vector source files (AI, SVG, EPS), print-ready exports (PDF, CMYK), and digital-optimised assets (PNG, WebP), along with your full Brand Guidelines documentation.",
  },
];

const INTERNAL_LINKS = [
  { label: "Haridwar Creative Hub", href: "/haridwar" },
  { label: "Website Development Haridwar", href: "/website-development-haridwar" },
  { label: "Social Media Haridwar", href: "/social-media-management-haridwar" },
  { label: "Case Study: Om Ladies Tailor", href: "/work/om-ladies-tailor" },
];

export default function BrandingAgencyHaridwarPage() {
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
        headline="Branding Agency Serving Haridwar Businesses"
        subheadline="Build a brand identity so distinct and memorable that customers never confuse you with anyone else."
        localAngle="We help Haridwar businesses break out of the local commodity trap and establish themselves as respected, premium category leaders."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Haridwar", href: "/haridwar" },
          { label: "Branding", href: "/branding-agency-haridwar" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        internalLinks={INTERNAL_LINKS}
        ctaHeadline="Ready to Build an Unforgettable Brand?"
        ctaBody="Talk directly with our creative directors to discuss your business positioning and visual transformation."
      />
    </>
  );
}
