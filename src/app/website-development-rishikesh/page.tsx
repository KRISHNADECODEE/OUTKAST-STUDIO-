import type { Metadata } from "next";
import LocalPageLayout from "@/components/local/LocalPageLayout";

const CANONICAL = "https://outkast-studio.vercel.app";

export const metadata: Metadata = {
  title: "Website Development Company in Rishikesh | Outkast Studios",
  description:
    "Custom website design and development for Rishikesh's yoga studios, retreats, adventure businesses and hospitality brands. Mobile-first, conversion-focused.",
  alternates: {
    canonical: `${CANONICAL}/website-development-rishikesh/`,
  },
  openGraph: {
    title: "Website Development Company in Rishikesh | Outkast Studios",
    description:
      "Custom website design and development for Rishikesh's yoga studios, retreats, adventure businesses and hospitality brands. Mobile-first, conversion-focused.",
    url: `${CANONICAL}/website-development-rishikesh/`,
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
      name: "Website Development",
      item: `${CANONICAL}/website-development-rishikesh/`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development – Rishikesh",
  provider: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: CANONICAL,
  },
  areaServed: {
    "@type": "City",
    name: "Rishikesh",
  },
  serviceType: "Website Development",
  description:
    "Custom website design and development for yoga studios, retreat centres, adventure tourism and hospitality businesses in Rishikesh. Mobile-first, booking-focused.",
};

const SERVICES = [
  {
    title: "Retreat & Yoga Studio Websites",
    badge: "BOOKING-FOCUSED",
    description:
      "Built to convert international interest into confirmed bookings. We design retreat websites with programme clarity, trust signals, gallery sections and direct booking or enquiry flows — everything an international guest needs to feel confident booking.",
  },
  {
    title: "Adventure & Tourism Sites",
    badge: "EXPERIENCE-LED",
    description:
      "For rafting operators, trek companies and adventure businesses in Rishikesh. Fast, visual, mobile-first websites that communicate the thrill of the experience and make it easy to book, enquire or WhatsApp — immediately.",
  },
  {
    title: "Hospitality & Guesthouse Websites",
    badge: "DIRECT BOOKINGS",
    description:
      "Reduce dependency on OTA platforms by driving direct bookings through your own website. We build hotel and guesthouse sites with availability info, gallery, amenities and clear CTAs for direct enquiries.",
  },
  {
    title: "International SEO & Google Visibility",
    badge: "GLOBAL REACH",
    description:
      "We optimise every Rishikesh site we build for search terms that international visitors actually use — 'yoga retreat Rishikesh', 'best retreat centre Rishikesh', 'white water rafting Rishikesh'. Technical SEO built in from the start.",
  },
  {
    title: "Multilingual-Ready Architecture",
    badge: "GLOBAL AUDIENCE",
    description:
      "Planning to serve guests from Germany, the UK, the US or Japan? We build your site on a multilingual-ready architecture so expanding into additional languages in the future is straightforward, not a rebuild.",
  },
  {
    title: "Performance & Core Web Vitals",
    badge: "FAST LOAD",
    description:
      "International guests on slow connections or mobile data will not wait for a slow site. We obsess over page speed, image optimisation, and Core Web Vitals to ensure your site loads fast — everywhere in the world.",
  },
];

const FAQS = [
  {
    q: "What does a good website for a Rishikesh retreat centre look like?",
    a: "A great retreat centre website does five things well: it communicates the atmosphere and transformation on offer (through visuals and copy), clearly explains the programmes and schedule, shows social proof, makes the booking or enquiry process effortless, and loads fast on mobile. We build all five into every retreat site we create.",
  },
  {
    q: "How much does a yoga studio website cost?",
    a: "A yoga studio website starts from approximately ₹30,000 for a clean custom site with programme listing, gallery, and enquiry flow. Sites with online booking integrations or international payment gateways are priced higher based on scope. We provide fixed quotes before work begins.",
  },
  {
    q: "Can you build websites that attract international visitors to Rishikesh?",
    a: "Yes — we approach every Rishikesh wellness and tourism site with international visitors in mind. That means international SEO (targeting search terms used globally, not just in India), fast load times from anywhere in the world, and copy and design that speaks to international sensibilities around wellness travel.",
  },
  {
    q: "Should a Rishikesh wellness brand have a blog or just a booking page?",
    a: "Both serve different purposes. A booking page captures demand — a blog creates it. For Rishikesh wellness businesses, a blog with articles like 'What to expect at a Rishikesh yoga retreat' or 'Best time to visit Rishikesh for a silent meditation retreat' attracts organic international search traffic and builds trust before the booking decision. We recommend both, implemented in the right order.",
  },
  {
    q: "How do I get my Rishikesh business to appear on Google?",
    a: "Three levers: a technically sound, indexed website (we handle this), local SEO optimisation for 'near me' and Rishikesh-specific searches (also handled), and content that answers what your audience is searching for. For international bookings, targeting keywords like 'yoga retreat Rishikesh' in your site's copy and blog is essential. We guide this entire strategy.",
  },
];

export default function WebsiteDevelopmentRishikeshPage() {
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
        headline="Website Development for Rishikesh Businesses"
        subheadline="Internationally credible, booking-focused websites for Rishikesh yoga studios, retreat centres, adventure businesses and hospitality brands."
        localAngle="Rishikesh's market is global — retreat guests, yoga students and adventure tourists come from every continent. The website is often the first and only thing they see before deciding whether to book. It needs to be excellent."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rishikesh", href: "/rishikesh/" },
          { label: "Website Development", href: "/website-development-rishikesh/" },
        ]}
        services={SERVICES}
        faqs={FAQS}
        ctaHeadline="Build Your International-Ready Website"
        ctaBody="Tell us about your retreat centre, yoga studio or tourism business in Rishikesh. We'll design and build a website that earns the trust of international guests and converts them into bookings."
        internalLinks={[
          { label: "← Rishikesh Overview", href: "/rishikesh/" },
          { label: "Social Media Rishikesh →", href: "/social-media-management-rishikesh/" },
          { label: "Website Dev in Haridwar →", href: "/website-development-haridwar/" },
          { label: "← Back to Home", href: "/" },
        ]}
        whatsappMessage="Hi Outkast Studios, I need a website for my Rishikesh business — retreat/yoga/tourism. Can we discuss?"
      />
    </>
  );
}
