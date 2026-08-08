"use client";

import React from "react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

export default function BrandsMarquee() {
  const brands = [
    "THE MASKED ASTROLOGER",
    "CRACK UPSC EXAMS",
    "SU TOUR & TRAVEL",
    "XTRM",
    "OM LADIES TAILOR",
    "MONKMODE®",
    "WILDLENS",
    "L U N E",
    "KAIROZ",
    "THIRDEYE",
    "FITLEAN",
    "NOIR.",
    "VYBE",
    "HUSL",
  ];

  return (
    <section className="relative py-16 bg-[#7C1117] overflow-hidden border-t border-b border-[#D03412]/30 select-none">
      
      <BackgroundPattern variant="lines" opacity={0.05} size={26} />
      <NoiseOverlay variant="dust" />

      {/* Label */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative z-10">
        <SectionCounter index={11} label="Brands We've Worked With" />
      </div>

      {/* Infinite Logo Marquee */}
      <div className="flex overflow-hidden space-x-12 py-4">
        <div className="flex space-x-12 items-center animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {brands.concat(brands).map((brand, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-editorial tracking-widest text-[#F8F3EF]/60 hover:text-[#D03412] transition-colors cursor-pointer"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Ticker Tape */}
      <div className="mt-8 py-3 bg-[#8D161D] border-t border-b border-[#D03412]/20 text-xs font-mono tracking-widest text-[#D03412] uppercase font-bold flex overflow-hidden">
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
