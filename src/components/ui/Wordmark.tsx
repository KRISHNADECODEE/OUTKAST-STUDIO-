import React from "react";

/* ==========================================================================
   OUTKAST WORDMARK
   Marker-drawn letterforms rebuilt as vector strokes, so the logo stays crisp
   from a 16px favicon up to the 1200x630 OG card. Pure geometry — no <text>,
   no font dependency — which is what lets it render inside icon/OG routes.

   To swap in the original artwork instead, drop it at
   `public/assets/logo-outkast.svg` and point <OutkastLogo> at it.
   ========================================================================== */

export const LOGO_RED = "#C8381A";

/* The letterforms only — sits on an ascending baseline, as drawn. */
export const OutkastMark = ({
  className = "h-10 w-auto text-[#C8381A]",
  strokeScale = 1,
}: {
  className?: string;
  strokeScale?: number;
}) => (
  <svg
    viewBox="0 0 900 300"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {/* O */}
    <path
      d="M88 116c34 0 56 36 55 78-1 42-22 76-55 76s-56-34-57-76c-1-42 23-78 57-78Z"
      strokeWidth={30 * strokeScale}
    />
    <path d="M62 168c9 7 11 18 8 28" strokeWidth={11 * strokeScale} />

    {/* U */}
    <path
      d="M178 138c-2 44-5 78 11 96 14 16 38 12 45-10 6-22 6-58 8-92"
      strokeWidth={30 * strokeScale}
    />

    {/* T */}
    <path d="M258 122c34-10 76-14 108-8" strokeWidth={24 * strokeScale} />
    <path d="M312 118c-2 44-4 80-6 110" strokeWidth={28 * strokeScale} />

    {/* K */}
    <path d="M400 104c-2 44-4 82-6 116" strokeWidth={28 * strokeScale} />
    <path d="M396 172c26-26 52-52 74-72" strokeWidth={24 * strokeScale} />
    <path d="M400 176c24 20 48 42 68 60" strokeWidth={26 * strokeScale} />

    {/* A */}
    <path d="M508 218c14-46 30-90 44-122" strokeWidth={26 * strokeScale} />
    <path d="M554 96c14 34 28 76 40 120" strokeWidth={26 * strokeScale} />
    <path d="M524 172c20-4 44-6 62-2" strokeWidth={14 * strokeScale} />

    {/* S */}
    <path
      d="M676 74c-24-12-58-8-64 14-6 22 22 34 44 44 22 10 36 26 26 44-10 18-44 20-66 8"
      strokeWidth={26 * strokeScale}
    />

    {/* T */}
    <path d="M718 58c34-12 80-16 112-8" strokeWidth={24 * strokeScale} />
    <path d="M772 54c-2 42-4 76-6 104" strokeWidth={28 * strokeScale} />
  </svg>
);

/* Just the O — used for the favicon pack and tight spaces. */
export const OutkastMonogram = ({
  className = "h-8 w-8 text-[#C8381A]",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M104 26c42 0 69 41 68 89-1 48-27 87-68 87s-69-39-70-87c-1-48 28-89 70-89Z"
      strokeWidth="34"
    />
    <path d="M70 88c11 8 14 21 10 32" strokeWidth="13" />
  </svg>
);

/* Full lockup: wordmark + letterspaced STUDIOS, as on the brand sheet. */
export const OutkastLogo = ({
  className = "h-9",
  markClassName = "text-[#F8F3EF]",
  studioClassName = "text-[#D03412]",
}: {
  className?: string;
  markClassName?: string;
  studioClassName?: string;
}) => (
  <div className={`flex flex-col items-end select-none ${className}`}>
    <OutkastMark className={`h-[70%] w-auto ${markClassName}`} />
    <span
      className={`font-sans font-semibold uppercase leading-none tracking-[0.42em] text-[0.58rem] md:text-[0.62rem] -mt-0.5 mr-[0.1em] ${studioClassName}`}
    >
      Studios
    </span>
  </div>
);
