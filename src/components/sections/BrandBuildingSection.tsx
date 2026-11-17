"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GiantBrushX, CircularStamp } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import {
  Compass,
  Palette,
  Volume2,
  FileText,
  Share2,
  CheckCircle2,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const PILLARS = [
  {
    id: "positioning",
    num: "01",
    title: "BRAND POSITIONING",
    icon: Compass,
    summary: "Market wedge, competitor white-space & commercial differentiation.",
    details:
      "We uncover what makes your business genuinely distinct, pinpointing the strategic market gap where competitors are weak and your ideal clients are actively looking.",
  },
  {
    id: "identity",
    num: "02",
    title: "BRAND IDENTITY",
    icon: Palette,
    summary: "Visual design systems, bespoke marks & recognizable brand codes.",
    details:
      "From bespoke logomarks and typographic systems to signature color palettes and paper textures, we design unmistakable visual identities that build long-term brand equity.",
  },
  {
    id: "voice",
    num: "03",
    title: "BRAND VOICE",
    icon: Volume2,
    summary: "Editorial tone, messaging frameworks & unforgettable copy.",
    details:
      "Words shape perception. We build your brand's editorial personality: punchy taglines, brand narrative rules, and messaging guides that speak with authority and confidence.",
  },
  {
    id: "content-strategy",
    num: "04",
    title: "CONTENT STRATEGY",
    icon: FileText,
    summary: "Cross-platform storytelling roadmaps & viral hook formulation.",
    details:
      "We design comprehensive content roadmaps engineered to attract attention, nurture trust, and turn casual followers into active commercial enquiries.",
  },
  {
    id: "social-direction",
    num: "05",
    title: "SOCIAL MEDIA DIRECTION",
    icon: Share2,
    summary: "Curated aesthetic & high-retention short-form video direction.",
    details:
      "Consistent feed art direction, high-converting Reel aesthetics, and carousel frameworks that make your social profiles look like a high-end editorial publication.",
  },
  {
    id: "visual-consistency",
    num: "06",
    title: "VISUAL CONSISTENCY",
    icon: CheckCircle2,
    summary: "Unified brand governance across web, ads, print & media.",
    details:
      "We ensure every single touchpoint—from your website and Meta ad creatives to packaging and pitch decks—speaks the exact same visual language.",
  },
  {
    id: "digital-presence",
    num: "07",
    title: "DIGITAL PRESENCE",
    icon: Globe2,
    summary: "Credibility architecture & digital authority across the web.",
    details:
      "An end-to-end digital footprint that turns first-time visitors into paying clients through seamless UX, fast loading speeds, and unquestionable legitimacy.",
  },
];

export default function BrandBuildingSection() {
  const [selectedPillar, setSelectedPillar] = useState<string>("positioning");

  const activePillar = PILLARS.find((p) => p.id === selectedPillar) || PILLARS[0];

  return (
    <section
      id="brand-building"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#7C1117] overflow-hidden paper-grain border-b border-[#D03412]/30"
    >
      {/* Wrinkled Red Paper Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="grid" opacity={0.05} size={50} />
      <NoiseOverlay variant="grain01" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#D03412]/20 pb-10">
          <div className="lg:col-span-8 space-y-4">
            <SectionCounter index={5} label="Creative Growth Partner" />

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
              WE DON&apos;T JUST DESIGN LOGOS.
              <br />
              WE BUILD BRANDS THAT{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Command Attention.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-mono text-[#F8F3EF]/85 leading-relaxed max-w-2xl border-l-2 border-[#D03412] pl-4">
              Acting as your external creative director and brand-growth partner, Outkast Studios bridges the gap between high-end visual aesthetics and commercial business results.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-2">
            <span className="inline-block px-3 py-1 bg-[#8D161D] border border-[#D03412]/40 text-[#D03412] font-mono text-xs uppercase tracking-widest font-bold rounded-sm">
              EXTERNAL CREATIVE PARTNER
            </span>
            <p className="text-xs font-mono text-[#F8F3EF]/60">
              For ambitious founders, luxury labels &amp; digital brands worldwide.
            </p>
          </div>
        </div>

        {/* 7 Pillars Interactive Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 7 Interactive Navigation Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = pillar.id === selectedPillar;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`interactive text-left p-5 rounded-sm border transition-all duration-300 flex flex-col justify-between gap-3 paper-grain ${
                    isSelected
                      ? "bg-[#8D161D] border-[#D03412] shadow-xl ring-1 ring-[#D03412]/50 translate-x-1"
                      : "bg-[#7C1117]/80 border-[#D03412]/20 hover:border-[#D03412]/60 hover:bg-[#8D161D]/50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#D03412] text-white"
                          : "bg-[#5C0F14] text-[#D03412] border border-[#D03412]/30"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-mono text-[#D03412] font-bold">
                      {pillar.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-editorial text-[#F8F3EF] uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#F8F3EF]/70 leading-relaxed mt-1 line-clamp-2">
                      {pillar.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Featured Pillar Deep-Dive Card & Greek Statue Collage */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="bg-[#8D161D] border border-[#D03412]/40 rounded-sm p-6 sm:p-8 shadow-2xl space-y-6 paper-grain relative overflow-hidden">
              {/* Background Kraft Paper Fragment & Brush X Watermark */}
              <div className="absolute -top-12 -right-12 pointer-events-none opacity-20">
                <GiantBrushX className="w-48 h-48 text-[#D03412]" />
              </div>

              <div className="flex items-center justify-between border-b border-[#D03412]/30 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D03412]" />
                  <span className="text-xs font-mono tracking-widest text-[#D03412] font-bold uppercase">
                    PILLAR {activePillar.num} // DEEP DIVE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#F8F3EF]/50 uppercase">
                  OUTKAST BRAND SYSTEM
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-2xl sm:text-3xl font-editorial uppercase text-[#F8F3EF] leading-tight">
                  {activePillar.title}
                </h4>
                <p className="text-xs font-mono text-[#D03412] font-semibold tracking-wide">
                  {activePillar.summary}
                </p>
                <p className="text-xs sm:text-sm font-mono text-[#F8F3EF]/85 leading-relaxed pt-2">
                  {activePillar.details}
                </p>
              </div>

              <div className="p-4 bg-[#5C0F14]/70 border border-[#D03412]/30 rounded-sm space-y-2">
                <span className="text-[10px] font-mono text-[#D03412] uppercase font-bold tracking-widest block">
                  HOW WE PARTNER WITH YOU
                </span>
                <p className="text-[11px] font-mono text-[#F8F3EF]/80 leading-relaxed">
                  We don&apos;t just deliver static styleguides. We work alongside your team to implement, maintain, and evolve your visual standard across every customer channel.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="#contact"
                  className="interactive px-5 py-2.5 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-wider font-bold rounded-sm inline-flex items-center gap-2 transition-colors shadow-lg"
                >
                  <span>DISCUSS YOUR BRAND</span>
                  <ArrowUpRight size={14} />
                </a>

                <div className="hidden sm:block">
                  <CircularStamp className="w-20 h-20 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
