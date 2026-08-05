"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FeaturedProjectsAnnotation } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      title: "XTRM STREETWEAR",
      tagline: "High Fashion Apparel & Culture",
      category: "E-COMMERCE & FASHION",
      url: "https://xtrm-gamma.vercel.app/",
      img: "/assets/xtrm.jpg",
      headline: "Built Different.",
    },
    {
      title: "OM LADIES TAILOR",
      tagline: "Bespoke Fashion & Luxury Atelier",
      category: "BOUTIQUE FASHION",
      url: "https://om-ladies-tailor.vercel.app/",
      img: "/assets/om-ladies-tailor.jpg",
      headline: "Elegance Craft.",
    },
    {
      title: "LUNE LUXURY",
      tagline: "Timeless designs. Unmatched experiences.",
      category: "PORTFOLIO WEBSITE",
      url: "#",
      img: "/assets/paper-bg.jpg",
      headline: "Luxury Redefined.",
    },
    {
      title: "WILDLENS",
      tagline: "Explore. Capture. Inspire.",
      category: "MEDIA & FILM",
      url: "#",
      img: "/assets/greek-statue.jpg",
      headline: "Capture Beauty.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="relative py-28 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain">
      
      {/* Texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
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

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="interactive w-12 h-12 rounded-full border border-[#D03412]/40 bg-[#8D161D]/60 hover:bg-[#D03412] text-[#F8F3EF] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="interactive w-12 h-12 rounded-full border border-[#D03412]/40 bg-[#8D161D]/60 hover:bg-[#D03412] text-[#F8F3EF] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Project Cards Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] bg-[#8D161D] border border-[#D03412]/30 rounded-sm overflow-hidden flex flex-col justify-between p-6 group hover:border-[#D03412] transition-all duration-300 shadow-xl paper-grain"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between text-xs font-mono text-[#D03412] font-bold">
                <span>{project.category}</span>
                <span>0{idx + 1}</span>
              </div>

              {/* Center Image / Mockup Screen */}
              <div className="my-6 relative aspect-[9/14] rounded-sm overflow-hidden border border-[#111111]/40 bg-[#111111]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 400px, (min-width: 640px) 360px, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 space-y-1 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#D03412] uppercase font-bold">
                    {project.title}
                  </span>
                  <h3 className="text-2xl font-editorial text-[#F8F3EF] leading-tight">
                    {project.headline}
                  </h3>
                  <p className="text-xs font-mono text-[#F8F3EF]/70 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 border-t border-[#D03412]/20 flex items-center justify-between">
                <span className="text-xs font-mono text-[#F8F3EF]/70">{project.title}</span>
                {project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-center gap-1.5 text-xs font-mono text-[#D03412] hover:text-[#F8F3EF] font-bold transition-colors"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#D03412] font-bold">CASE STUDY ↗</span>
                )}
              </div>
            </div>
          ))}
        </div>

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
