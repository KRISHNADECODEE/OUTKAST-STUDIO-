import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Website Development Company in Haridwar | Outkast Studios",
  description:
    "Professional website design and development for businesses in Haridwar. Custom portfolio websites, business sites and landing pages by Outkast Studios.",
  alternates: {
    canonical: `${CANONICAL}/website-development-haridwar/`,
  },
  openGraph: {
    title: "Website Development Company in Haridwar | Outkast Studios",
    description:
      "Professional website design and development for businesses in Haridwar. Custom portfolio websites, business sites and landing pages by Outkast Studios.",
    url: `${CANONICAL}/website-development-haridwar/`,
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
      item: `${CANONICAL}/haridwar/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Website Development",
      item: `${CANONICAL}/website-development-haridwar/`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development – Haridwar",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Haridwar",
  },
  serviceType: "Website Development",
  description:
    "Custom website design and development for Haridwar businesses. Mobile-first, fast-loading business websites, portfolio sites and booking-focused landing pages.",
};

const SERVICES = [
  {
    title: "Business Websites",
    badge: "CUSTOM BUILT",
    description:
      "A professional business website for your Haridwar shop, service or studio. No templates — every page is built to reflect your business, load instantly on mobile, and show up on Google.",
  },
  {
    title: "Booking & Enquiry Pages",
    badge: "CONVERSION-FIRST",
    description:
      "For Haridwar hotels, tour operators, tailors and service businesses that need customers to take action online — call, WhatsApp, or submit a request. We engineer pages around that specific goal.",
  },
  {
    title: "Portfolio & Showcase Sites",
    badge: "DISPLAY",
    description:
      "Show your work professionally. For artisans, boutiques, designers and creative businesses in Haridwar, a portfolio site replaces a folder of WhatsApp screenshots with a credible, shareable presence.",
  },
  {
    title: "Local SEO Optimisation",
    badge: "GOOGLE-READY",
    description:
      "Every website we build is structured to be found on Google for searches like 'best hotel in Haridwar' or 'tailor near me'. Technical SEO is baked in from day one — not added as an afterthought.",
  },
  {
    title: "Mobile-First Development",
    badge: "FAST",
    description:
      "More than 85% of Haridwar searches happen on mobile. We build mobile-first by default — fast-loading, touch-friendly, and readable on any screen size from an older Android to a large desktop.",
  },
  {
    title: "Website Maintenance",
    badge: "ONGOING",
    description:
      "Post-launch support: content updates, security patches, performance monitoring and technical fixes. Available as a monthly retainer or on-demand, so you are never left managing a broken site alone.",
  },
];

const FAQS = [
  {
    q: "How much does a website cost in Haridwar?",
    a: "Our projects start from approximately ₹25,000 for a clean, mobile-first custom website for a small business. More complex sites — with booking integrations, e-commerce, or multi-page architecture — are priced based on scope. We provide a fixed, all-inclusive quote before work begins. No surprises.",
  },
  {
    q: "How long does it take to build a business website?",
    a: "A standard business website takes 2–4 weeks from briefing to launch, depending on complexity. We work in clear stages: discovery, design, development, review and launch. You are involved at key decision points, and we do not disappear mid-project.",
  },
  {
    q: "What type of website does a small business in Haridwar need?",
    a: "Most small businesses in Haridwar need a 3–5 page site: a homepage that explains what you do, a services or product page, an about section, and a clear contact or enquiry page. If you take bookings, a booking flow or WhatsApp CTA is essential. We help you identify exactly what your site needs in an initial conversation.",
  },
  {
    q: "Can you build a website that gets found on Google?",
    a: "Yes — search engine optimisation is built into every website we develop. We handle technical structure, page speed, metadata, schema markup, and local SEO so your business appears when people search for services in Haridwar. We have done this for Su Tour & Travels and Om Ladies Tailor, among others.",
  },
  {
    q: "Do I need a website if I already have an Instagram page?",
    a: "Instagram and a website serve very different purposes. Instagram builds awareness — a website builds trust and closes the customer. When someone searches 'best tour company in Haridwar' on Google, your Instagram page does not appear. A website also gives you a professional enquiry channel, full control over your content, and credibility that social media alone cannot provide.",
  },
];

export default function WebsiteDevelopmentHaridwarPage() {
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
        headline="Website Development for Haridwar Businesses"
        subheadline="Custom, mobile-first websites that put your Haridwar business on Google — built for performance and real conversions."
        localAngle="Most Haridwar businesses run on WhatsApp and word of mouth alone — which works until a competitor gets a website and starts appearing on Google first. A professionally built website changes that equation permanently."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Haridwar", href: "/haridwar/" },
          { label: "Website Development", href: "/website-development-haridwar/" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        ctaHeadline="Build Your Haridwar Business Website"
        ctaBody="Tell us about your business — what you sell, who your customers are, and what you want them to do when they find you online. We'll come back with a clear, honest proposal."
        internalLinks={[
          { label: "← Haridwar Overview", href: "/haridwar/" },
          { label: "Social Media Haridwar →", href: "/social-media-management-haridwar/" },
          { label: "Website Dev in Rishikesh →", href: "/website-development-rishikesh/" },
          { label: "← Back to Home", href: "/" },
        ]}
        whatsappMessage="Hi Outkast Studios, I need a website built for my Haridwar business. Can we discuss?"
      />
    </>
  );
}
