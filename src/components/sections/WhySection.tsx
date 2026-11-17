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
  const points = [
    {
      num: "01",
      title: "STRATEGY BEFORE EXECUTION",
      desc: "We never design in the dark. Every visual decision, site architecture, and ad hook starts with a rigorous understanding of your market, your buyers, and your commercial objectives.",
      icon: IconTarget,
    },
    {
      num: "02",
      title: "CREATIVE-FIRST THINKING",
      desc: "In a sea of formulaic templates and repetitive social trends, we build original, memorable brand assets that cut through digital noise and make your business impossible to ignore.",
      icon: IconCreative,
    },
    {
      num: "03",
      title: "AI-POWERED PRODUCTION",
      desc: "We harness cutting-edge AI video and generative tools to produce studio-grade commercial visuals, dynamic creators, and rapid ad iterations without traditional production bloat.",
      icon: IconAi,
    },
    {
      num: "04",
      title: "CUSTOM DIGITAL EXPERIENCES",
      desc: "No generic site builders or cloned themes. Every website is custom-engineered with clean Next.js code, responsive layouts, fluid animations, and conversion-focused architectures.",
      icon: IconBrand,
    },
    {
      num: "05",
      title: "TRANSPARENT COMMUNICATION",
      desc: "Direct access to the creative minds doing the actual work. Realistic milestones, honest turnaround scopes, transparent feedback loops, and zero agency smoke-and-mirrors.",
      icon: IconRocket,
    },
    {
      num: "06",
      title: "GROWTH-ORIENTED PARTNERSHIPS",
      desc: "We measure creative craftsmanship by real business impact. We partner with ambitious founders to build long-term brand equity, customer trust, and commercial traction.",
      icon: IconGrowth,
    },
  ];

  return (
    <section
      id="why"
      className="relative py-28 px-6 md:px-12 bg-[#8D161D] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="dots" opacity={0.08} size={38} />
      <NoiseOverlay variant="scratches" />

      {/* Giant Red Brush X Watermark */}
      <div className="absolute -top-6 -right-10 pointer-events-none opacity-25">
        <BigX variant="rough" className="w-[28rem] h-[28rem] text-[#D03412]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <SectionCounter index={6} label="Why Outkast" />

          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D03412]">
            <span className="px-3 py-1 border border-[#D03412]/40 rounded-full bg-[#7C1117]/60 uppercase font-bold">
              THE OUTKAST STANDARD
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.95] uppercase text-[#F8F3EF]">
            SIX PRINCIPLES BEHIND OUR{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Work.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
            We operate without agency bureaucracy or vanity metrics. Here is what you can always expect when partnering with Outkast Studios.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="interactive bg-[#7C1117]/80 border border-[#D03412]/30 p-8 rounded-sm hover:border-[#D03412] transition-all duration-300 space-y-4 group paper-grain hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#8D161D] border border-[#D03412]/40 flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#D03412] font-bold">{item.num}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-editorial tracking-wider text-[#F8F3EF] group-hover:text-[#D03412] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F8F3EF]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D03412]/20 flex items-center justify-between text-[10px] font-mono text-[#F8F3EF]/50 uppercase tracking-widest">
                  <span>OUTKAST DISCIPLINE</span>
                  <span className="text-[#D03412] font-bold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
