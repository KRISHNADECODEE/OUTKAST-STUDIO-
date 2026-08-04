"use client";

import React from "react";
import Image from "next/image";
import { BigX } from "../ui/BrushAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import {
  IconTarget,
  IconCreative,
  IconAi,
  IconRocket,
  IconGrowth,
  IconBrand,
} from "../ui/OutkastIcons";

export default function WhySection() {
  const features = [
    {
      title: "STRATEGY FIRST",
      desc: "We dive deep into your brand, audience and market before creating anything.",
      icon: IconTarget,
    },
    {
      title: "CREATIVE THAT PERFORMS",
      desc: "Ideas that are not just beautiful, but built to get real measurable results.",
      icon: IconCreative,
    },
    {
      title: "AI-FIRST APPROACH",
      desc: "From AI UGC ads to smart creative automation, we leverage AI where it matters.",
      icon: IconAi,
    },
    {
      title: "FAST TURNAROUND",
      desc: "We respect your time. Quick execution without ever compromising on craftsmanship.",
      icon: IconRocket,
    },
    {
      title: "GROWTH PARTNER",
      desc: "We grow when you grow. Long term vision, dedicated support and real partnership.",
      icon: IconGrowth,
    },
    {
      title: "PREMIUM QUALITY",
      desc: "Top tier designs, smooth animations, paper textures and pixel-perfect execution.",
      icon: IconBrand,
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#8D161D] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain">
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper background"
          fill
          className="object-cover"
        />
      </div>

      {/* Pattern + grain */}
      <BackgroundPattern variant="dots" opacity={0.08} size={38} />
      <NoiseOverlay variant="scratches" />

      {/* Giant Red Brush X Watermark on Right */}
      <div className="absolute -top-6 -right-10 pointer-events-none opacity-25">
        <BigX variant="rough" className="w-[28rem] h-[28rem] text-[#D03412]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <SectionCounter index={6} label="Results" />

          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D03412]">
            <span className="px-3 py-1 border border-[#D03412]/40 rounded-full bg-[#7C1117]/60 uppercase font-bold">
              THE OUTKAST ADVANTAGE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.95] uppercase text-[#F8F3EF]">
            WHY BRANDS CHOOSE{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Outkast.
            </span>
          </h2>

          <p className="text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
            We don't just deliver services. We become your growth partner and creative backbone.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="interactive bg-[#7C1117]/70 border border-[#D03412]/30 p-8 rounded-sm hover:border-[#D03412] transition-all duration-300 space-y-4 group paper-grain hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-sm bg-[#8D161D] border border-[#D03412]/40 flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-editorial tracking-wider text-[#F8F3EF] group-hover:text-[#D03412] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#F8F3EF]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
