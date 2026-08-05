"use client";

import React from "react";
import { BigX, Handwritten, HandArrow, type XVariant } from "./BrushAssets";

/* ==========================================================================
   BRAND ASSETS — barrel + the brand-specific compositions.
   The raw asset groups live in their own modules; re-exported here so every
   existing import path keeps working.
   ========================================================================== */

export * from "./BrushAssets";
export * from "./PaperAssets";
export * from "./OutkastIcons";
export * from "./Wordmark";

/* Kept for backwards compatibility — the sheet's X graphics now live in BigX. */
export const GiantBrushX = ({
  className = "w-64 h-64 opacity-25 text-[#D03412]",
  variant = "brush",
}: {
  className?: string;
  variant?: XVariant;
}) => <BigX variant={variant} className={className} />;

/* Handwritten "FEATURED PROJECTS" label with a curved arrow beneath. */
export const FeaturedProjectsAnnotation = ({
  className = "w-44",
  label = "Featured",
}: {
  className?: string;
  label?: string;
}) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <Handwritten className="text-[#D03412] text-xl md:text-2xl" rotate={-6}>
      {label}
    </Handwritten>
    <HandArrow className="w-16 h-10 text-[#D03412] mt-1" />
  </div>
);

/* Torn kraft badge — "MADE TO CONVERT." */
export const MadeToConvertBadge = ({ className = "" }: { className?: string }) => (
  <div className={`relative select-none rotate-6 ${className}`}>
    <svg viewBox="0 0 220 92" className="w-44 h-[4.6rem] drop-shadow-2xl" aria-hidden="true">
      <path
        d="M8 14c26-8 54 4 82-2s56-10 84-4 40 6 44 14c-6 12 2 26-4 38s-30 8-56 14-54 6-82 2-46 4-62-6c-8-12-2-26-6-38s-6-14 0-18Z"
        fill="#D4B896"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-brush text-[#7C1117] text-sm md:text-base leading-tight text-center -rotate-3">
        <span className="text-[#D03412]">MADE TO</span>
        <br />
        CONVERT.
      </span>
    </div>
  </div>
);

/* Rotating circular stamp. */
export const CircularStamp = ({
  text = "OUTKAST STUDIOS • CREATED WITH PURPOSE • BUILT DIFFERENT • ",
  className = "w-28 h-28 md:w-36 md:h-36",
}: {
  text?: string;
  className?: string;
}) => {
  const pathId = React.useId();
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-[#D03412]/50 border-dashed animate-[spin_25s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id={pathId}
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[7.5px] font-mono tracking-[0.22em] fill-[#D03412] uppercase font-bold">
            <textPath href={`#${pathId}`}>{text}</textPath>
          </text>
        </svg>
      </div>
      <span className="font-brush text-[#D03412] text-xs md:text-sm tracking-widest text-center rotate-[-12deg]">
        OUTKAST
      </span>
    </div>
  );
};

/* Section pagination now lives in the live, scroll-driven ScrollRail
   (src/components/ScrollRail.tsx). */
