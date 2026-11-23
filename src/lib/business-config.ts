/**
 * OUTKAST STUDIOS — CENTRAL BUSINESS & BRAND CONFIGURATION
 * 
 * Single source of truth for all business information, brand positioning,
 * contact details, social profiles, and studio statistics.
 * 
 * EDITABLE FIELDS:
 * Replace any placeholder marked "[OWNER TO CONFIRM]" once confirmed.
 * Unverified statistics must never be published without genuine analytics backing.
 */

export interface VerifiedProject {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  servicesProvided: string[];
  summary: string;
  liveUrl?: string;
  imageSrc: string;
  headline: string;
  isVerifiedClientWork: boolean;
}

export interface StudioPillar {
  title: string;
  description: string;
  badge?: string;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  positioningStatement: string;
  market: string;
  locationDisplay: string;
  
  // Contact & Registration Information (Editable Placeholders)
  officialEmail: string;
  phoneNumber: string;
  phoneRaw: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessCountry: string;

  // Conversion & Messaging Systems
  whatsappNumber: string;
  whatsappPrefilledMessage: string;

  // Verified & Editable Social Links
  instagramUrl: string;
  behanceUrl: string;
  dribbbleUrl: string;

  // Web Architecture & SEO
  canonicalUrl: string;

  // Local SEO & Search Engine Optimization
  targetLocations: string[];
  serviceArea: string;
  primaryKeywords: {
    haridwar: string[];
    rishikesh: string[];
  };

  // Centralized Business Statistics
  // RULE: Only genuine, verified data may be displayed.
  // When no verified numbers exist, honest qualitative commitments are rendered instead.
  statistics: {
    hasVerifiedMetrics: boolean;
    verifiedMetrics: Array<{
      label: string;
      value: string;
      verificationSource: string;
    }>;
    honestCommitments: StudioPillar[];
  };

  // Verified Client & Showcase Projects
  projects: VerifiedProject[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Outkast Studios",
  legalName: "Outkast Studios",
  tagline: "Creative Growth Studio",
  positioningStatement:
    "We build brands that get noticed, digital experiences that build trust, and creative campaigns that move businesses forward.",
  market: "India and international clients",
  locationDisplay: "Based in India. Working worldwide",

  // Contact details — editable configuration fields
  // DO NOT invent arbitrary fake emails or addresses.
  officialEmail: "[OWNER TO CONFIRM]",
  phoneNumber: "+91 95280 02988",
  phoneRaw: "+919528002988",
  businessAddress: "[OWNER TO CONFIRM]",
  businessCity: "[OWNER TO CONFIRM]",
  businessState: "[OWNER TO CONFIRM]",
  businessCountry: "India",

  // Verified WhatsApp enquiry channel (e.g., "91XXXXXXXXXX")
  whatsappNumber: "919528002988",
  whatsappPrefilledMessage:
    "Hi Outkast Studios, I'm interested in discussing a project for my business. Please share more details about your services.",

  // Social Channels
  instagramUrl: "https://www.instagram.com/outkast.studios.official/",
  behanceUrl: "[OWNER TO CONFIRM]",
  dribbbleUrl: "[OWNER TO CONFIRM]",

  canonicalUrl: "https://outkast-studio.vercel.app",

  // Local SEO targeting
  targetLocations: ["Haridwar", "Rishikesh"],
  serviceArea: "Uttarakhand, India",
  primaryKeywords: {
    haridwar: [
      "creative agency in Haridwar",
      "digital marketing agency in Haridwar",
      "website development company in Haridwar",
      "social media marketing agency in Haridwar",
      "branding agency in Haridwar",
      "AI video advertising agency in Haridwar",
    ],
    rishikesh: [
      "creative agency in Rishikesh",
      "digital marketing agency in Rishikesh",
      "website developer in Rishikesh",
      "social media management in Rishikesh",
      "branding agency in Rishikesh",
      "AI advertising agency in Rishikesh",
    ],
  },

  statistics: {
    // Keep false until genuine analytics-verified data is provided by the studio owner
    hasVerifiedMetrics: false,
    verifiedMetrics: [],
    honestCommitments: [
      {
        title: "Bespoke Architectures",
        description: "Custom websites built around your specific business goals, not generic templates.",
        badge: "CUSTOM CODE",
      },
      {
        title: "Attention-Engineered",
        description: "Creative campaigns and AI UGC designed to arrest scroll and build genuine audience engagement.",
        badge: "ORGANIC HOOKS",
      },
      {
        title: "Strategy-Led Experiences",
        description: "Every touchpoint aligned with long-term brand positioning and commercial value.",
        badge: "POSITIONING FIRST",
      },
      {
        title: "Measurable Execution",
        description: "Focused on creative craftsmanship, conversion clarity, and continuous improvement.",
        badge: "FULL TRANSPARENCY",
      },
    ],
  },

  projects: [
    {
      id: "su-tour-travels",
      name: "SU Tour & Travels",
      tagline: "High-Ticket Luxury Travel & Escapes",
      industry: "Travel & Hospitality",
      servicesProvided: ["Custom Travel Website", "Digital Brand Presence", "Meta Ads Strategy"],
      summary:
        "Designed and developed an immersive booking and enquiry website tailored for high-ticket travel packages and international explorers, engineered for fast mobile loading and intuitive itinerary browsing.",
      liveUrl: "https://sutourandtravel.in/",
      imageSrc: "/assets/su-tour-travels.jpg",
      headline: "Adventure Awaits.",
      isVerifiedClientWork: true,
    },
    {
      id: "xtrm",
      name: "XTRM",
      tagline: "Rap Artist Site & Streaming Presence",
      industry: "Music & Artist Brand",
      servicesProvided: ["Artist Brand Identity", "Interactive Website", "Streaming Conversion Architecture"],
      summary:
        "Created an aggressive, raw, high-fashion web experience for hip-hop artist XTRM, seamlessly integrating audio drops, streaming platform directs, and streetwear aesthetic.",
      liveUrl: "https://xtrm-gamma.vercel.app/",
      imageSrc: "/assets/xtrm.jpg",
      headline: "Real Recognize Real.",
      isVerifiedClientWork: true,
    },
    {
      id: "om-ladies-tailor",
      name: "Om Ladies Tailor",
      tagline: "Bespoke Fashion & Luxury Atelier",
      industry: "Boutique Fashion",
      servicesProvided: ["Brand Positioning", "Luxury Atelier Web Experience", "Local Inbound Funnel"],
      summary:
        "Positioned a bespoke tailoring atelier into an elevated modern fashion destination, highlighting craft precision, made-to-measure services, and direct client booking.",
      liveUrl: "https://om-ladies-tailor.vercel.app/",
      imageSrc: "/assets/om-ladies-tailor.jpg",
      headline: "Elegance Craft.",
      isVerifiedClientWork: true,
    },
    {
      id: "the-masked-astrologer",
      name: "The Masked Astrologer",
      tagline: "High-End Mystic & Luxury Experience",
      industry: "Luxury Portfolio",
      servicesProvided: ["Mystic Brand Identity", "High-End Portfolio", "Private Session Consultation Flow"],
      summary:
        "Crafted a dark, mysterious editorial experience that elevated personal consultations into an exclusive luxury service with frictionless booking.",
      liveUrl: "https://the-masked-astrologer-premium.vercel.app/",
      imageSrc: "/assets/masked-astrologer.jpg",
      headline: "Mystic Redefined.",
      isVerifiedClientWork: true,
    },
  ],
};

/**
 * Generates the clean WhatsApp enquiry link based on configuration.
 * Gracefully falls back to the on-page contact section if the owner has not confirmed the number yet.
 */
export function getWhatsAppUrl(customMessage?: string): { url: string; isConfigured: boolean } {
  const rawNumber = BUSINESS_CONFIG.whatsappNumber;
  const isConfigured =
    Boolean(rawNumber) &&
    rawNumber !== "[OWNER TO CONFIRM]" &&
    rawNumber.trim().length > 6;

  const message = encodeURIComponent(customMessage || BUSINESS_CONFIG.whatsappPrefilledMessage);

  if (!isConfigured) {
    return {
      url: "#contact",
      isConfigured: false,
    };
  }

  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  return {
    url: `https://wa.me/${cleanNumber}?text=${message}`,
    isConfigured: true,
  };
}

/**
 * Returns a safe mailto URL or fallback anchor.
 */
export function getEmailHref(): { href: string; isConfigured: boolean; display: string } {
  const email = BUSINESS_CONFIG.officialEmail;
  const isConfigured =
    Boolean(email) &&
    email !== "[OWNER TO CONFIRM]" &&
    email.includes("@");

  if (!isConfigured) {
    return {
      href: "#contact",
      isConfigured: false,
      display: "Contact Studio Directly",
    };
  }

  return {
    href: `mailto:${email}`,
    isConfigured: true,
    display: email,
  };
}

/**
 * Returns safe social link or null if not confirmed.
 */
export function getSocialUrl(platform: "instagram" | "behance" | "dribbble"): {
  url: string;
  isConfigured: boolean;
} {
  const map = {
    instagram: BUSINESS_CONFIG.instagramUrl,
    behance: BUSINESS_CONFIG.behanceUrl,
    dribbble: BUSINESS_CONFIG.dribbbleUrl,
  };

  const val = map[platform];
  const isConfigured = Boolean(val) && val !== "[OWNER TO CONFIRM]" && val.startsWith("http");

  return {
    url: isConfigured ? val : "#contact",
    isConfigured,
  };
}

/**
 * Returns safe direct phone call link and formatted display number.
 */
export function getPhoneHref(): { href: string; display: string; isConfigured: boolean } {
  const rawNumber = BUSINESS_CONFIG.phoneRaw;
  const isConfigured = Boolean(rawNumber) && rawNumber.length > 7;

  return {
    href: isConfigured ? `tel:${rawNumber}` : "#contact",
    display: BUSINESS_CONFIG.phoneNumber || "+91 95280 02988",
    isConfigured,
  };
}
