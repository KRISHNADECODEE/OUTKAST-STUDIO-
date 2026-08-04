import React from "react";

/* ==========================================================================
   3. TORN PAPER EDGES
   Absolutely-positioned deckled edges that sit on the boundary of a section.
   `color` should match the colour of the *adjacent* section so the rip reads
   as one sheet lying over another.
   ========================================================================== */

export type TornSide = "top" | "bottom" | "left" | "right" | "diagonal" | "corner";

const TORN_EDGE: Record<TornSide, { viewBox: string; d: string; box: string }> = {
  top: {
    viewBox: "0 0 1200 40",
    d: "M0 40V16c38-9 74 5 112 2s70-16 108-11 68 19 106 15 66-19 104-16 68 17 106 14 70-16 108-12 74 14 112 6 76-14 114-8 66 12 90 6V0H0Z",
    box: "absolute top-0 left-0 w-full",
  },
  bottom: {
    viewBox: "0 0 1200 40",
    d: "M0 0v24c38 9 74-5 112-2s70 16 108 11 68-19 106-15 66 19 104 16 68-17 106-14 70 16 108 12 74-14 112-6 76 14 114 8 66-12 90-6v6H0Z",
    box: "absolute bottom-0 left-0 w-full",
  },
  left: {
    viewBox: "0 0 40 1200",
    d: "M40 0H16c-9 38 5 74 2 112s-16 70-11 108 19 68 15 106-19 66-16 104 17 68 14 106-16 70-12 108 14 74 6 112-14 76-8 114 12 66 6 90h24Z",
    box: "absolute top-0 left-0 h-full",
  },
  right: {
    viewBox: "0 0 40 1200",
    d: "M0 0h24c9 38-5 74-2 112s16 70 11 108-19 68-15 106 19 66 16 104-17 68-14 106 16 70 12 108-14 74-6 112 14 76 8 114-12 66-6 90H0Z",
    box: "absolute top-0 right-0 h-full",
  },
  diagonal: {
    viewBox: "0 0 1200 120",
    d: "M0 120V96c60-16 120-38 180-46s120 10 180 0 120-32 180-40 120 12 180 4 120-28 180-34 120 8 120 8V0H0Z",
    box: "absolute top-0 left-0 w-full",
  },
  corner: {
    viewBox: "0 0 400 200",
    d: "M400 0v40c-40 6-78 26-118 34s-82-4-122 8-76 40-116 48-44 6-44 6V0Z",
    box: "absolute top-0 right-0",
  },
};

export const TornEdge = ({
  side = "top",
  color = "#7C1117",
  className = "",
  height = "h-8",
}: {
  side?: TornSide;
  color?: string;
  className?: string;
  height?: string;
}) => {
  const edge = TORN_EDGE[side];
  const isVertical = side === "left" || side === "right";
  return (
    <div
      className={`${edge.box} ${isVertical ? "w-8" : height} pointer-events-none z-20 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox={edge.viewBox}
        preserveAspectRatio="none"
        className="w-full h-full"
        fill={color}
      >
        <path d={edge.d} />
      </svg>
    </div>
  );
};

/* Seam between two stacked sections: the lower sheet rips over the upper one.
   `from` is the colour above the tear, `to` is the section below. */
export const SectionSeam = ({
  from,
  to,
  height = "h-9 md:h-12",
  flip = false,
}: {
  from: string;
  to: string;
  height?: string;
  flip?: boolean;
}) => (
  <div
    className={`relative w-full ${height} -mt-px overflow-hidden`}
    style={{ backgroundColor: from }}
    aria-hidden="true"
  >
    {/* viewBox width matches the path's actual 1000u span — otherwise the
        last 200u render as a flat step at the right edge. */}
    <svg
      viewBox="0 0 1000 48"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M0 22c42-11 76 6 118 3s72-15 112-11 66 17 104 13 68-18 108-14 72 15 112 11 74-13 114-9 68 12 106 8 76-14 116-9 68 10 110 4v54H0Z"
        fill={to}
      />
    </svg>
  </div>
);

/* ==========================================================================
   5. PAPER TAPE ASSETS
   Strips of tape for pinning cards to the page.
   ========================================================================== */

export type TapeVariant = "white" | "masking" | "brown" | "folded" | "torn" | "crossed";

const TAPE_FILL: Record<TapeVariant, string> = {
  white: "#EFE8E2",
  masking: "#D9C4A3",
  brown: "#B08154",
  folded: "#DCCAAE",
  torn: "#D4B896",
  crossed: "#E2D3BB",
};

export const PaperTape = ({
  variant = "masking",
  rotate = -8,
  className = "w-28 h-8",
}: {
  variant?: TapeVariant;
  rotate?: number;
  className?: string;
}) => {
  const fill = TAPE_FILL[variant];

  if (variant === "crossed") {
    return (
      <div className={`relative pointer-events-none select-none ${className}`} aria-hidden="true">
        <svg viewBox="0 0 120 60" className="w-full h-full opacity-90">
          <g fill={fill}>
            <path d="M10 18 108 34l-2 12L8 30Z" transform="rotate(-14 60 30)" />
            <path d="M10 30 108 14l2 12L12 42Z" transform="rotate(14 60 30)" />
          </g>
        </svg>
      </div>
    );
  }

  /* Straight strips with zig-zag torn ends — the long edges only drift a
     couple of units so the tape never pinches in the middle. */
  const shapes: Record<Exclude<TapeVariant, "crossed">, React.ReactNode> = {
    white: (
      <path d="M5 11h110l-4 4.5 4 4.5-4 4.5 4 4.5H5l4-4.5-4-4.5 4-4.5Z" />
    ),
    masking: (
      <path d="M5 10.5C38 9 78 12 115 10.5l-4 4.5 4 4.5-4 4.5 4 4.5C78 28 38 31 5 29.5l4-4.5-4-4.5 4-4.5Z" />
    ),
    brown: (
      <path d="M5 11C40 9.5 80 12.5 115 11l-5 3 5 3-5 3 5 3-5 3C80 28 40 31 5 29l5-3-5-3 5-3-5-3Z" />
    ),
    folded: (
      <>
        <path d="M5 11h105l-4 4.5 4 4.5-4 4.5 4 4.5H5l4-4.5-4-4.5 4-4.5Z" />
        <path d="M110 11 93 20l17 9Z" opacity="0.5" />
      </>
    ),
    torn: (
      <path d="M5 12C42 9 78 13 115 10.5l-5 4 5 5-5 4 5 5C78 31 42 27 5 29.5l5-4-5-5 5-4Z" />
    ),
  };

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 120 40"
        className="w-full h-full drop-shadow-md opacity-90"
        fill={fill}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {shapes[variant]}
      </svg>
    </div>
  );
};

/* ==========================================================================
   6. NOISE OVERLAY — 5 grain flavours
   Rendered as inline SVG filters so nothing has to be downloaded.
   ========================================================================== */

export type GrainVariant = "grain01" | "grain02" | "scratches" | "dust" | "paper";

const GRAIN: Record<GrainVariant, { freq: string; octaves: number; opacity: number; blend: string }> = {
  grain01: { freq: "0.8", octaves: 3, opacity: 0.22, blend: "overlay" },
  grain02: { freq: "0.65", octaves: 4, opacity: 0.3, blend: "soft-light" },
  scratches: { freq: "0.02 0.9", octaves: 2, opacity: 0.18, blend: "overlay" },
  dust: { freq: "1.4", octaves: 1, opacity: 0.15, blend: "screen" },
  paper: { freq: "0.045", octaves: 5, opacity: 0.35, blend: "multiply" },
};

export const NoiseOverlay = ({
  variant = "grain01",
  className = "",
  opacity,
}: {
  variant?: GrainVariant;
  className?: string;
  opacity?: number;
}) => {
  const g = GRAIN[variant];
  const id = `noise-${variant}`;
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: opacity ?? g.opacity, mixBlendMode: g.blend as React.CSSProperties["mixBlendMode"] }}
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={g.freq}
            numOctaves={g.octaves}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
};

/* ==========================================================================
   7. BACKGROUND PATTERNS
   Tiling CSS/SVG patterns. Drop inside a `relative` container.
   ========================================================================== */

export type PatternVariant = "grid" | "dots" | "crosses" | "arrows" | "lines";

export const BackgroundPattern = ({
  variant = "grid",
  className = "",
  opacity = 0.12,
  color = "#F8F3EF",
  size = 44,
}: {
  variant?: PatternVariant;
  className?: string;
  opacity?: number;
  color?: string;
  size?: number;
}) => {
  const id = `pat-${variant}-${size}`;

  const tiles: Record<PatternVariant, React.ReactNode> = {
    grid: <path d={`M${size} 0H0v${size}`} fill="none" stroke={color} strokeWidth="1" />,
    dots: <circle cx={size / 2} cy={size / 2} r="1.8" fill={color} />,
    crosses: (
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round">
        <path d={`M${size / 2 - 6} ${size / 2 - 6}l12 12M${size / 2 + 6} ${size / 2 - 6}l-12 12`} />
      </g>
    ),
    arrows: (
      <g stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={`M${size / 2 - 7} ${size / 2 + 5}l7-9 7 9`} />
      </g>
    ),
    lines: <path d={`M0 ${size / 2}h${size}`} stroke={color} strokeWidth="1" />,
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }} aria-hidden="true">
      <svg className="w-full h-full">
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          {tiles[variant]}
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

/* ==========================================================================
   10. SECTION DIVIDERS
   ========================================================================== */

export type DividerVariant = "torn" | "brush" | "paint" | "cross" | "arrow";

export const SectionDivider = ({
  variant = "brush",
  className = "w-full h-6 text-[#D03412]",
}: {
  variant?: DividerVariant;
  className?: string;
}) => {
  const marks: Record<DividerVariant, { viewBox: string; body: React.ReactNode }> = {
    // Sharp jagged rip rather than rolling blobs
    torn: {
      viewBox: "0 0 600 24",
      body: (
        <path
          d="M0 15l34-7 26 8 40-6 28 7 36-9 30 6 42-5 26 8 38-8 32 5 28-7 40 9 34-6 30 7 44-9 26 6 36-4 30 7V24H0Z"
          fill="currentColor"
        />
      ),
    },
    // Tapered bar — edges must never cross, or it renders as a bowtie
    brush: {
      viewBox: "0 0 600 24",
      body: (
        <path
          d="M4 12C150 5 380 4 596 9 380 15 150 19 4 13Z"
          fill="currentColor"
        />
      ),
    },
    paint: {
      viewBox: "0 0 600 24",
      body: (
        <path
          d="M4 12h592"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ),
    },
    cross: {
      viewBox: "0 0 60 60",
      body: (
        <g fill="currentColor">
          <path d="M10 8c8 10 18 22 28 34 6 8 12 14 16 20-8 2-14-4-20-11-10-12-20-24-26-35-2-4-1-8 2-8Z" />
          <path d="M50 8c-8 10-18 22-28 34-6 8-12 14-16 20 8 2 14-4 20-11 10-12 20-24 26-35 2-4 1-8-2-8Z" />
        </g>
      ),
    },
    arrow: {
      viewBox: "0 0 120 60",
      body: (
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 46C34 40 66 26 104 12" />
          <path d="M84 10l22 1-4 21" />
        </g>
      ),
    },
  };

  const mark = marks[variant];
  return (
    <svg
      viewBox={mark.viewBox}
      preserveAspectRatio={variant === "cross" || variant === "arrow" ? "xMidYMid meet" : "none"}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {mark.body}
    </svg>
  );
};

/* ==========================================================================
   SECTION COUNTER — the "07 / 14" eyebrow used at the top of every section
   ========================================================================== */

export const SectionCounter = ({
  index,
  total = 14,
  label,
  className = "",
}: {
  index: number;
  total?: number;
  label?: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-4 select-none ${className}`}>
    <span className="text-[11px] font-mono tracking-[0.25em] text-[#F8F3EF]/45 tabular-nums">
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
    <SectionDivider variant="paint" className="w-10 h-3 text-[#D03412]/50" />
    {label && (
      <span className="text-[11px] font-mono tracking-[0.25em] text-[#D03412] uppercase font-bold">
        {label}
      </span>
    )}
  </div>
);
