import React from "react";

/* ==========================================================================
   4. ORANGE BRUSH STROKES
   Organic paint-stroke shapes. All inherit `currentColor`, so set the colour
   with a text-* class on the element itself.
   ========================================================================== */

export type BrushVariant =
  | "bar"
  | "tapered"
  | "dry"
  | "sweep"
  | "slash"
  | "scribble"
  | "ring"
  | "splatter";

const BRUSH_PATHS: Record<BrushVariant, { viewBox: string; body: React.ReactNode }> = {
  // Thick, ragged-edged horizontal slab
  bar: {
    viewBox: "0 0 300 64",
    body: (
      <path d="M6 34c34-14 74-6 116-11 40-5 82 8 122 1 26-5 46 2 54 6-10 11-30 15-56 12-40 5-80-4-120 0-42 5-80-2-116-8Z" />
    ),
  },
  // Wide at the left, feathering to a point on the right
  tapered: {
    viewBox: "0 0 300 64",
    body: (
      <path d="M8 22c40-8 84 2 128 4 46 2 96 4 156 8-58 8-108 6-154 4-44-2-88 6-130-2Z" />
    ),
  },
  // Dry-brush: broken slab with fibre gaps
  dry: {
    viewBox: "0 0 300 64",
    body: (
      <>
        <path d="M6 24c30-6 62-2 92 0-30 6-62 8-92 6Z" />
        <path d="M112 26c38-4 78 0 116 4-38 6-78 6-116 2Z" />
        <path d="M242 32c18-2 36 0 52 4-18 4-36 4-52 0Z" />
        <path d="M10 40c46-4 94 2 140 6-46 4-94 2-140-2Z" />
        <path d="M168 46c34-2 68 2 100 8-34 2-68 0-100-4Z" />
      </>
    ),
  },
  // Long arcing sweep
  sweep: {
    viewBox: "0 0 300 90",
    body: (
      <path d="M8 66C58 22 140 6 292 14c-58 12-114 16-160 30-34 10-64 26-90 34-14 4-24 0-34-12Z" />
    ),
  },
  // Steep diagonal slash
  slash: {
    viewBox: "0 0 120 120",
    body: (
      <path d="M14 108C40 74 70 38 100 8c8-8 14 2 10 10-26 34-56 68-82 100-6 8-18 2-14-10Z" />
    ),
  },
  // Hatched scribble — several overlapping strokes
  scribble: {
    viewBox: "0 0 120 120",
    body: (
      <>
        <path d="M12 100 82 14c6-8 14 0 9 8l-70 86c-5 7-14 0-9-8Z" />
        <path d="M38 102 108 16c6-8 13 0 8 8l-70 86c-5 7-13 0-8-8Z" />
        <path d="M64 104l44-54c6-8 14 0 9 8l-45 54c-5 7-13 0-8-8Z" />
      </>
    ),
  },
  // Hand-drawn brush circle (open ring)
  ring: {
    viewBox: "0 0 120 120",
    body: (
      <path
        d="M92 26C74 10 40 10 24 30 4 54 10 92 38 104c30 13 66-4 72-32 5-24-10-46-34-52"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    ),
  },
  // Ink splatter cluster
  splatter: {
    viewBox: "0 0 120 120",
    body: (
      <>
        <circle cx="56" cy="58" r="26" />
        <circle cx="94" cy="34" r="7" />
        <circle cx="22" cy="86" r="6" />
        <circle cx="96" cy="82" r="5" />
        <circle cx="30" cy="28" r="4.5" />
        <circle cx="66" cy="100" r="4" />
        <circle cx="104" cy="58" r="3" />
        <circle cx="12" cy="52" r="2.5" />
      </>
    ),
  },
};

export const BrushStroke = ({
  variant = "bar",
  className = "w-40 h-10 text-[#D03412]",
}: {
  variant?: BrushVariant;
  className?: string;
}) => {
  const brush = BRUSH_PATHS[variant];
  return (
    <svg
      viewBox={brush.viewBox}
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {brush.body}
    </svg>
  );
};

/* ==========================================================================
   11. LARGE X GRAPHICS — 5 variants
   ========================================================================== */

export type XVariant = "brush" | "rough" | "thin" | "boxed" | "double";

export const BigX = ({
  variant = "brush",
  className = "w-64 h-64 text-[#D03412]",
}: {
  variant?: XVariant;
  className?: string;
}) => {
  const strokes: Record<XVariant, React.ReactNode> = {
    // Heavy painted X with swollen middles
    brush: (
      <>
        <path d="M28 22c14-6 24 4 32 14 24 30 52 62 82 94 10 10 22 22 28 34-14 6-26-4-35-14-26-30-54-62-84-94-9-10-19-22-23-34Z" />
        <path d="M172 22c-14-6-24 4-32 14-24 30-52 62-82 94-10 10-22 22-28 34 14 6 26-4 35-14 26-30 54-62 84-94 9-10 19-22 23-34Z" />
      </>
    ),
    // Ragged dry-brush X
    rough: (
      <>
        <path d="M32 26c10 16 26 34 42 52 20 22 42 46 62 66 8 8 18 18 26 24-12 2-22-8-30-16-24-22-48-48-70-72-14-16-28-34-30-54Z" />
        <path d="M168 26c-10 16-26 34-42 52-20 22-42 46-62 66-8 8-18 18-26 24 12 2 22-8 30-16 24-22 48-48 70-72 14-16 28-34 30-54Z" />
        <path d="M52 40c6 10 14 20 22 30-10-6-20-18-22-30Z" opacity="0.55" />
        <path d="M140 150c8 8 16 16 26 22-12-2-22-12-26-22Z" opacity="0.55" />
      </>
    ),
    // Fine outlined X
    thin: (
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M36 30 164 170" />
        <path d="M164 30 36 170" />
      </g>
    ),
    // Painted X inside a hand-drawn frame
    boxed: (
      <>
        <rect
          x="26"
          y="26"
          width="148"
          height="148"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeDasharray="14 9"
        />
        <path d="M56 52c10 12 24 26 38 42 16 18 34 36 50 52-12 4-22-6-30-14-20-20-40-42-56-62-6-8-4-14-2-18Z" />
        <path d="M144 52c-10 12-24 26-38 42-16 18-34 36-50 52 12 4 22-6 30-14 20-20 40-42 56-62 6-8 4-14 2-18Z" />
      </>
    ),
    // Doubled-up marker X
    double: (
      <>
        <path d="M34 24c16 20 36 44 58 68 20 22 42 46 62 66-14 6-28-6-38-16-24-24-48-50-68-74-12-14-16-28-14-44Z" />
        <path d="M166 24c-16 20-36 44-58 68-20 22-42 46-62 66 14 6 28-6 38-16 24-24 48-50 68-74 12-14 16-28 14-44Z" />
        <path
          d="M52 44 152 156M152 44 52 156"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          opacity="0.5"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {strokes[variant]}
    </svg>
  );
};

/* ==========================================================================
   12. HANDWRITTEN ELEMENTS
   Script words with an optional underline flick, as seen on the asset sheet.
   ========================================================================== */

export type HandwrittenWord =
  | "Featured"
  | "Scroll"
  | "Explore"
  | "Made Different"
  | "Since 2026"
  | "Creative"
  | "Premium"
  | "Our Process"
  | "Let's Talk"
  | "Made To Convert";

export const Handwritten = ({
  children,
  underline = true,
  rotate = -4,
  className = "text-[#D03412] text-2xl",
}: {
  children: React.ReactNode;
  underline?: boolean;
  rotate?: number;
  className?: string;
}) => (
  <span
    className={`inline-flex flex-col items-start select-none font-brush leading-none ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <span>{children}</span>
    {underline && (
      <svg
        viewBox="0 0 200 16"
        className="w-full h-2 -mt-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M4 10c46-6 96-8 150-4 16 1 30 3 44 6" />
      </svg>
    )}
  </span>
);

/* Curved arrow annotation — pairs with a handwritten label */
export const HandArrow = ({
  className = "w-20 h-14 text-[#D03412]",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    <path d="M8 10c24 4 44 18 58 38" strokeDasharray="5 6" />
    <path d="M52 44l16 5 3-17" />
  </svg>
);

/* Hand-drawn smiley — bottom-right accent on the final CTA */
export const HanddrawnSmiley = ({
  className = "w-12 h-12 text-[#D03412]",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="40" strokeDasharray="6 6 2 4" />
    <circle cx="35" cy="40" r="4" fill="currentColor" />
    <circle cx="65" cy="40" r="4" fill="currentColor" />
    <path d="M30 65q20 20 40 0" strokeWidth="7" />
  </svg>
);
