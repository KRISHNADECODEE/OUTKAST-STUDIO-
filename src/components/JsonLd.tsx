import { SITE, FAQS } from "@/lib/site-data";
import { BUSINESS_CONFIG } from "@/lib/business-config";

/* Structured data for search and AI answer engines. Organization establishes
   who the agency is and what it sells; FAQPage gives engines pre-chunked
   question/answer pairs they can quote directly; Service schemas establish local relevance. */

const hasValidEmail =
  Boolean(BUSINESS_CONFIG.officialEmail) &&
  !BUSINESS_CONFIG.officialEmail.includes("[OWNER TO CONFIRM]") &&
  BUSINESS_CONFIG.officialEmail.includes("@");

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Outkast Studios",
  url: SITE.url,
  description: SITE.description,
  ...(hasValidEmail ? { email: BUSINESS_CONFIG.officialEmail } : {}),
  sameAs: SITE.sameAs,
  address: {
    "@type": "PostalAddress",
    addressCountry: BUSINESS_CONFIG.businessCountry,
  },
  areaServed: [
    { "@type": "City", name: "Haridwar" },
    { "@type": "City", name: "Rishikesh" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: SITE.services,
  makesOffer: SITE.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
      provider: { "@id": `${SITE.url}/#organization` },
    },
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-9528002988",
    url: `${SITE.url}/#contact`,
    ...(hasValidEmail ? { email: BUSINESS_CONFIG.officialEmail } : {}),
    availableLanguage: ["English", "Hindi"],
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE.url}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const services = [
  { name: "Brand Building", desc: "Brand identity, positioning, visual direction and storytelling for businesses across Haridwar, Rishikesh, and India." },
  { name: "AI Video Advertising", desc: "AI UGC advertisements, product films and promotional videos for social media campaigns." },
  { name: "Website Development", desc: "Custom portfolio websites, business websites and conversion-focused landing pages." },
  { name: "Social Media Management", desc: "Content calendars, Reels production, account management and growth strategy." },
  { name: "Meta Ads Management", desc: "Facebook and Instagram advertising, campaign management and performance optimisation." },
].map((s, i) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE.url}/#service-${i}`,
  name: s.name,
  description: s.desc,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: [
    { "@type": "City", name: "Haridwar" },
    { "@type": "City", name: "Rishikesh" },
    { "@type": "Country", name: "India" },
  ],
  url: SITE.url,
}));

export default function JsonLd() {
  return (
    <>
      {[organization, website, faqPage, ...services].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
