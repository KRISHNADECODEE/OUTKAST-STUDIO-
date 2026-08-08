import { SITE, FAQS } from "@/lib/site-data";

/* Structured data for search and AI answer engines. Organization establishes
   who the agency is and what it sells; FAQPage gives engines pre-chunked
   question/answer pairs they can quote directly. */

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Outkast Studios",
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  sameAs: SITE.sameAs,
  areaServed: SITE.areaServed.map((c) => ({ "@type": "Country", name: c })),
  knowsAbout: SITE.services,
  makesOffer: SITE.services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service, provider: { "@id": `${SITE.url}/#organization` } },
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    availableLanguage: ["English"],
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
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

export default function JsonLd() {
  return (
    <>
      {[organization, website, faqPage].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Content is authored here, not user input; stringify keeps it valid JSON.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
