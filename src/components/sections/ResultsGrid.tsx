"use client";

import React from "react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

/* ==========================================================================
   RESULTS GRID
   Replaces the plain "trusted by" name marquee with mini case studies, so the
   social proof carries a number instead of just a logo.

   ⚠ THE FIGURES BELOW ARE PLACEHOLDERS. They were not supplied by the client
   and have not been verified against any analytics account. Publishing
   unverified performance claims attributed to named businesses is a legal and
   reputational risk — replace every `metric` and `detail` with real reported
   numbers, or remove the entry, before this goes live.
   ========================================================================== */

type CaseStudy = {
  brand: string;
  sector: string;
  metric: string;
  metricLabel: string;
  detail: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    brand: "THE MASKED ASTROLOGER",
    sector: "Luxury Portfolio",
    metric: "+45%",
    metricLabel: "Conversion Rate",
    detail: "Mystic editorial rebuild and a booking flow rewritten around one action.",
  },
  {
    brand: "SU TOUR & TRAVELS",
    sector: "Travel",
    metric: "4x",
    metricLabel: "ROAS",
    detail: "Meta campaigns paired with a booking site built for international enquiries.",
  },
  {
    brand: "XTRM",
    sector: "Music & Artist Brand",
    metric: "1M+",
    metricLabel: "Streams Driven",
    detail: "Artist platform and release campaigns tuned for streaming conversion.",
  },
  {
    brand: "OM LADIES TAILOR",
    sector: "Boutique Fashion",
    metric: "3.2x",
    metricLabel: "Enquiry Volume",
    detail: "Local atelier positioned as a premium made-to-measure destination.",
  },
  {
    brand: "MONKMODE®",
    sector: "Fitness",
    metric: "+68%",
    metricLabel: "Retention",
    detail: "Content calendar and creative system that kept the feed consistent.",
  },
  {
    brand: "WILDLENS",
    sector: "Media & Film",
    metric: "2.4x",
    metricLabel: "Inbound Leads",
    detail: "Showreel-led site that turned passive viewers into booked shoots.",
  },
];

export default function ResultsGrid() {
  return (
    <section
      id="results-grid"
      aria-labelledby="results-grid-heading"
      className="relative py-24 px-6 md:px-12 bg-[#7C1117] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain"
    >
      <BackgroundPattern variant="lines" opacity={0.05} size={26} />
      <NoiseOverlay variant="dust" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 space-y-4">
          <SectionCounter index={11} label="Brands We've Worked With" />

          <h2
            id="results-grid-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight"
          >
            TRUSTED BY BRANDS.{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Proven by numbers.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.brand}
              className="group relative bg-[#8D161D]/70 border border-[#D03412]/30 hover:border-[#D03412] rounded-sm p-6 flex flex-col gap-4 transition-colors duration-300 paper-grain"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-[0.18em] uppercase text-[#F8F3EF]">
                    {study.brand}
                  </h3>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#F8F3EF]/50">
                    {study.sector}
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-4xl sm:text-5xl font-editorial font-extrabold leading-none text-[#D03412] tabular-nums">
                  {study.metric}
                </p>
                <p className="mt-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#F8F3EF]/80">
                  {study.metricLabel}
                </p>
              </div>

              <p className="text-xs font-mono leading-relaxed text-[#F8F3EF]/65 border-l-2 border-[#D03412]/60 pl-3">
                {study.detail}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Ticker tape retained from the old marquee */}
      <div className="mt-12 py-3 bg-[#8D161D] border-t border-b border-[#D03412]/20 text-xs font-mono tracking-widest text-[#D03412] uppercase font-bold flex overflow-hidden relative z-10">
        <div className="flex space-x-8 animate-[marquee_20s_linear_infinite_reverse] whitespace-nowrap">
          {Array(6)
            .fill("WE BUILD BRANDS THAT LAST. • WE CREATE EXPERIENCES THAT HIT DIFFERENT. • ")
            .map((txt, idx) => (
              <span key={idx}>{txt}</span>
            ))}
        </div>
      </div>
    </section>
  );
}
