"use client";

import React from "react";
import Image from "next/image";
import { FeaturedProjectsAnnotation } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import { ProjectSlider, type SlideProject } from "../ui/ProjectSlider";
import { BUSINESS_CONFIG } from "@/lib/business-config";

export default function PortfolioSection() {
  const slides: SlideProject[] = BUSINESS_CONFIG.projects.map((p) => ({
    id: p.id,
    title: p.name,
    category: p.industry,
    tagline: p.tagline,
    headline: p.headline,
    imageSrc: p.imageSrc,
    url: p.liveUrl || "#",
    servicesProvided: p.servicesProvided,
    summary: p.summary,
  }));

  return (
    <section
      id="portfolio"
      className="relative py-28 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain"
    >
      {/* Texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="grid" opacity={0.06} size={64} />
      <NoiseOverlay variant="grain01" />

      {/* Handwritten annotation pointing at the reel */}
      <div className="hidden xl:block absolute top-32 right-16 z-20 pointer-events-none">
        <FeaturedProjectsAnnotation label="Featured" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <SectionCounter index={3} label="Our Work" />

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
              DIGITAL EXPERIENCES THAT LEAVE A{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Mark.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
              Real projects engineered by Outkast Studios. Every project is built from scratch around specific client brand positioning and conversion goals.
            </p>
          </div>
        </div>

        {/* Animated project slider */}
        <ProjectSlider projects={slides} />

        {/* Bottom Banner — Honest Capability Statements (No Unverified Numbers) */}
        <div className="pt-8 border-t border-[#D03412]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-brush text-[#D03412]">“</span>
            <p className="text-sm font-mono text-[#F8F3EF]/85">
              Custom websites built around your <span className="text-[#D03412] font-bold">business goals.</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#F8F3EF]/75">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D03412]" />
              <span>CUSTOM ARCHITECTURES</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D03412]" />
              <span>CONVERSION FOCUS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D03412]" />
              <span>VERIFIED WORK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
