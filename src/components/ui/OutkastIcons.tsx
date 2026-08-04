import React from "react";

/* ==========================================================================
   9. CUSTOM ICONS
   Hand-drawn line set matching the asset sheet. Uniform 32x32 grid, single
   stroke weight, round joins — so they sit next to each other cleanly.
   ========================================================================== */

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const Svg = ({
  children,
  className = "w-8 h-8 text-[#D03412]",
  strokeWidth = 1.6,
}: IconProps & { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

/* Folder with a lifted tab — portfolio / work */
export const IconPortfolio = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 9a2 2 0 0 1 2-2h6.2a2 2 0 0 1 1.5.7L14.5 10H27a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M3 14h26" />
  </Svg>
);

/* Infinity loop — Meta ads */
export const IconMetaAds = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 16c0-3.6 2.2-6 5-6 2.4 0 4 1.8 5.4 4.2L16 16l1.6 1.8C19 20.2 20.6 22 23 22c2.8 0 5-2.4 5-6s-2.2-6-5-6c-2.4 0-4 1.8-5.4 4.2L16 16l-1.6 1.8C13 20.2 11.4 22 9 22c-2.8 0-5-2.4-5-6Z" />
  </Svg>
);

/* Four-point sparkle cluster — AI */
export const IconAi = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16 4c.9 4.6 2.5 6.2 7 7-4.5.8-6.1 2.4-7 7-.9-4.6-2.5-6.2-7-7 4.5-.8 6.1-2.4 7-7Z" />
    <path d="M25.5 19.5c.45 2.3 1.25 3.1 3.5 3.5-2.25.4-3.05 1.2-3.5 3.5-.45-2.3-1.25-3.1-3.5-3.5 2.25-.4 3.05-1.2 3.5-3.5Z" />
    <path d="M7 20c.35 1.8.95 2.4 2.7 2.7-1.75.3-2.35.9-2.7 2.7-.35-1.8-.95-2.4-2.7-2.7C6.05 22.4 6.65 21.8 7 20Z" />
  </Svg>
);

/* Star inside a circle — brand */
export const IconBrand = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="16" cy="16" r="12" />
    <path d="m16 9 2.2 4.5 5 .7-3.6 3.5.85 4.95L16 20.3l-4.45 2.35.85-4.95-3.6-3.5 5-.7Z" />
  </Svg>
);

/* Calendar — content calendar */
export const IconCalendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="6" width="24" height="22" rx="2" />
    <path d="M4 13h24M10 3v6M22 3v6" />
    <path d="M10 19h3M19 19h3" />
  </Svg>
);

/* Rocket — launch */
export const IconRocket = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16 3c4.2 3.2 6.5 7.6 6.5 12.4 0 2.6-.6 5-1.7 7.1h-9.6C10.1 20.4 9.5 18 9.5 15.4 9.5 10.6 11.8 6.2 16 3Z" />
    <circle cx="16" cy="13" r="2.6" />
    <path d="M11.2 19 6 22.4l2.3 4M20.8 19 26 22.4l-2.3 4" />
    <path d="M14 26c.7 1.6 1.4 2.6 2 3 .6-.4 1.3-1.4 2-3" />
  </Svg>
);

/* Ascending bar chart with arrow — growth */
export const IconGrowth = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 27h24" />
    <path d="M8 27v-6M14 27v-10M20 27v-14M26 27v-19" />
    <path d="M6 14 12 9l5 4 8-7" />
    <path d="M21 6h4v4" />
  </Svg>
);

/* Concentric target — precision */
export const IconTarget = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="16" r="7" />
    <circle cx="16" cy="16" r="2.2" />
    <path d="M16 1v5M16 26v5M1 16h5M26 16h5" />
  </Svg>
);

/* Pencil — creative direction */
export const IconCreative = (p: IconProps) => (
  <Svg {...p}>
    <path d="M22.5 4.2a2.6 2.6 0 0 1 3.7 0l1.6 1.6a2.6 2.6 0 0 1 0 3.7L11.4 26 4 28l2-7.4Z" />
    <path d="m20.6 6.1 5.3 5.3M6 20.6l5.4 5.4" />
  </Svg>
);

/* Handshake — partnership */
export const IconPartnership = (p: IconProps) => (
  <Svg {...p}>
    <path d="m2 13 5-3 6 3.5 2.6-1.4a3 3 0 0 1 2.8 0L21 13" />
    <path d="M30 13l-5-3-4.4 2.5" />
    <path d="M13 13.5 9.6 17a2 2 0 0 0 2.6 3l1.4-1.2 2.2 1.9a2 2 0 0 0 2.9-2.7l2.1 1.5a2 2 0 0 0 2.6-3L21 13" />
    <path d="M2 13v6M30 13v6" />
  </Svg>
);

/* Convenience map so sections can look an icon up by name */
export const OUTKAST_ICONS = {
  portfolio: IconPortfolio,
  metaAds: IconMetaAds,
  ai: IconAi,
  brand: IconBrand,
  calendar: IconCalendar,
  rocket: IconRocket,
  growth: IconGrowth,
  target: IconTarget,
  creative: IconCreative,
  partnership: IconPartnership,
} as const;

export type OutkastIconName = keyof typeof OUTKAST_ICONS;
