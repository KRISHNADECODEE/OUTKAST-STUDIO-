"use client";

import React from "react";
import Image from "next/image";
import { FeaturedProjectsAnnotation } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import { ProjectSlider, type SlideProject } from "../ui/ProjectSlider";

export default function PortfolioSection() {
  const projects = [
    {
      title: "THE MASKED ASTROLOGER",
      tagline: "High-End Mystic & Luxury Experience",
      category: "LUXURY PORTFOLIO",
      url: "https://the-masked-astrologer-premium.vercel.app/",
      img: "/assets/masked-astrologer.jpg",
      headline: "Mystic Redefined.",
    },
    {
      title: "SU TOUR & TRAVELS",
      tagline: "Premium Luxury Travel & Escapes",
      category: "TRAVEL PORTFOLIO",
      url: "https://sutourandtravel.in/",
      img: "/assets/su-tour-travels.jpg",
      headline: "Adventure Awaits.",
    },
    {
      title: "XTRM",
      tagline: "Rap Artist Site & Streaming Presence",
      category: "MUSIC & ARTIST BRAND",
      url: "https://xtrm-gamma.vercel.app/",
      img: "/assets/xtrm.jpg",
      headline: "Real Recognize Real.",
    },
    {
      title: "OM LADIES TAILOR",
      tagline: "Bespoke Fashion & Luxury Atelier",
      category: "BOUTIQUE FASHION",
      url: "https://om-ladies-tailor.vercel.app/",
      img: "/assets/om-ladies-tailor.jpg",
      headline: "Elegance Craft.",
    },
  ];

  const slides: SlideProject[] = projects.map((p, i) => ({
    id: i,
    title: p.title,
    category: p.category,
    tagline: p.tagline,
    headline: p.headline,
    imageSrc: p.img,
    url: p.url,
  }));

  return (
    <section id="portfolio" className="relative py-28 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain">
      
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
            <SectionCounter index={5} label="Our Work" />

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
              DIGITAL EXPERIENCES THAT LEAVE A{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Mark.
              </span>
            </h2>

            <p className="text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
              A selection of projects we're proud of. Different industries. Same obsession with quality.
            </p>
          </div>

        </div>

        {/* Animated project slider */}
        <ProjectSlider projects={slides} />

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#D03412]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-brush text-[#D03412]">“</span>
            <p className="text-sm font-mono text-[#F8F3EF]/80">
              We don't follow trends. <span className="text-[#D03412] font-bold">We set standards.</span>
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs font-mono text-[#F8F3EF]/70">
            <div><strong className="text-[#F8F3EF] text-lg font-editorial">50+</strong> PROJECTS</div>
            <div><strong className="text-[#D03412] text-lg font-editorial">30+</strong> CLIENTS</div>
            <div><strong className="text-[#F8F3EF] text-lg font-editorial">98%</strong> RETENTION</div>
          </div>
        </div>

      </div>

    </section>
  );
}
