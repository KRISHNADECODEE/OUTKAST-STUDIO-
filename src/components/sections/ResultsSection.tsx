"use client";

import React from "react";
import Image from "next/image";
import { BrushStroke } from "../ui/BrushAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

export default function ResultsSection() {
  const stats = [
    { value: "120+", label: "PROJECTS DELIVERED" },
    { value: "45M+", label: "VIEWS GENERATED" },
    { value: "9X", label: "AVERAGE ROAS" },
    { value: "96%", label: "CLIENT SATISFACTION" },
    { value: "18", label: "COUNTRIES SERVED" },
  ];

  return (
    <section id="results" className="relative py-24 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain">
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          className="object-cover"
        />
      </div>

      {/* Ruled pattern + grain */}
      <BackgroundPattern variant="lines" opacity={0.06} size={30} />
      <NoiseOverlay variant="dust" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Label */}
        <SectionCounter index={7} label="Results" />

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight max-w-3xl">
          NUMBERS THAT SPEAK{" "}
          <span className="font-brush text-[#D03412] capitalize block sm:inline">
            Louder.
          </span>
        </h2>

        <BrushStroke variant="dry" className="w-72 h-5 text-[#D03412]/80" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 border-t border-b border-[#D03412]/20 py-12">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 text-center md:text-left group">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-editorial text-[#D03412] group-hover:scale-110 transition-transform block">
                {stat.value}
              </span>
              <p className="text-xs font-mono tracking-widest text-[#F8F3EF]/70 uppercase font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
