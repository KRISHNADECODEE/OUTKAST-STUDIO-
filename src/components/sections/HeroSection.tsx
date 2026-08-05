"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "../ProjectModal";
import { ArrowUpRight } from "lucide-react";
import { BrushStroke, Handwritten } from "../ui/BrushAssets";
import {
  BackgroundPattern,
  NoiseOverlay,
  PaperTape,
  SectionCounter,
} from "../ui/PaperAssets";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12 px-6 sm:px-10 lg:px-16 flex flex-col justify-between bg-[#7C1117] overflow-hidden paper-grain">
      
      {/* Background Wrinkled Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-45 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Dark red paper texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Crosshatch pattern + film grain */}
      <BackgroundPattern variant="crosses" opacity={0.07} size={56} />
      <NoiseOverlay variant="grain02" opacity={0.2} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10 relative">

        {/* Left / Center Section: GIANT BRAND + EDITORIAL HEADLINE */}
        <div className="lg:col-span-7 space-y-6">

          <SectionCounter index={1} label="Outkast Studios" />

          {/* Massive OUTKAST Title (Exact Mockup Match) */}
          <div className="relative select-none">
            <h1 className="text-7xl sm:text-9xl lg:text-[160px] xl:text-[180px] font-editorial font-extrabold leading-[0.82] tracking-tighter text-[#F8F3EF]/90 uppercase opacity-95">
              OUTKAST
            </h1>
          </div>

          {/* Editorial Sub-Headline */}
          <div className="space-y-1 pt-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
              CREATIVE WEBSITES
              <br />
              FOR BRANDS
              <br />
              THAT REFUSE
              <br />
              TO LOOK ORDINARY<span className="text-[#D03412] font-bold">.</span>
            </h2>

            {/* Painted rule under the headline */}
            <BrushStroke variant="tapered" className="w-56 h-4 text-[#D03412] mt-3" />
          </div>

          {/* Paragraph & CTA Row */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end border-t border-[#D03412]/20">
            
            {/* Left Paragraph & Button */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-mono text-[#F8F3EF]/80 leading-relaxed max-w-xs">
                We design digital experiences that are bold, original and unforgettable.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="interactive px-6 py-3 border border-[#F8F3EF]/40 hover:border-[#D03412] hover:bg-[#D03412] text-[#F8F3EF] font-mono text-xs tracking-widest uppercase rounded-xs transition-all flex items-center gap-2 group font-bold shadow-lg"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D03412] group-hover:text-white" />
              </button>
            </div>

            {/* Right Divider & Only 11 Clients Badge */}
            <div className="sm:border-l border-[#D03412]/30 sm:pl-6 space-y-1">
              <span className="text-xs font-mono tracking-wider text-[#D03412] font-bold block uppercase">
                ONLY 11 CLIENTS
              </span>
              <span className="text-xs font-mono text-[#F8F3EF]/70 block">
                At a time. Always.
              </span>
            </div>

          </div>

        </div>

        {/* Right Side: 3D Crumpled Red Paper Sculpture Visual & Stamp Badge */}
        <div className="lg:col-span-5 relative flex justify-center items-center">

          {/* Tape pinning the print to the page */}
          <PaperTape
            variant="masking"
            rotate={-14}
            className="absolute -top-4 left-6 w-28 h-8 z-20"
          />
          <PaperTape
            variant="torn"
            rotate={9}
            className="absolute -bottom-3 right-8 w-24 h-7 z-20"
          />

          <div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group border border-[#D03412]/30 bg-[#7C1117]">
            <Image
              src="/assets/hero-paper-sculpture.jpg"
              alt="3D Wrinkled Paper Sculpture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Dark Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7C1117] via-transparent to-transparent opacity-60" />

            {/* Circular Stamp Badge Overlay on Right Fold (Exact Mockup Match) */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#D03412]/60 border-dashed flex items-center justify-center p-2 bg-[#7C1117]/80 backdrop-blur-xs shadow-2xl animate-[spin_30s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="heroStampCircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[6.5px] font-mono tracking-[0.2em] fill-[#F8F3EF] uppercase font-bold">
                  <textPath href="#heroStampCircle">
                    WHERE RIGOROUS CREATIVITY MEETS UNCOMPROMISING EXECUTION •
                  </textPath>
                </text>
              </svg>
              <div className="absolute font-brush text-[#D03412] text-xs tracking-widest text-center rotate-[-12deg]">
                OUTKAST
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar: Location & Social Links (Exact Mockup Match) */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#D03412]/20 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 relative text-xs font-mono">
        
        {/* Left Location */}
        <div className="flex items-center gap-2 text-[#F8F3EF]/70">
          <span className="w-2 h-2 rounded-full bg-[#D03412] animate-ping" />
          <span className="text-[#D03412] font-bold">• BASED IN INDIA, WORKING WORLDWIDE</span>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-6 text-[#F8F3EF]/70 font-mono tracking-widest uppercase text-[11px]">
          <a
            href="https://www.instagram.com/outkast._.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D03412] transition-colors"
          >
            INSTAGRAM
          </a>
          <span>•</span>
          <a href="#" className="hover:text-[#D03412] transition-colors">
            BEHANCE
          </a>
          <span>•</span>
          <a href="#" className="hover:text-[#D03412] transition-colors">
            DRIBBBLE
          </a>
        </div>

      </div>

      {/* Far Right Scroll Marker Indicator */}
      <div className="hidden xl:flex fixed right-6 bottom-16 flex-col items-center gap-3 z-30 text-[#F8F3EF]/40 text-[10px] font-mono tracking-widest">
        <Handwritten className="text-[#D03412] text-lg" rotate={-8} underline={false}>
          Scroll
        </Handwritten>
        <div className="w-px h-12 bg-[#D03412]/40" />
        <span className="writing-mode-vertical uppercase">SCROLL</span>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
