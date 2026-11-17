"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "../ProjectModal";
import { ArrowUpRight, Sparkles, Layers, Terminal } from "lucide-react";
import { BrushStroke, Handwritten } from "../ui/BrushAssets";
import {
  BackgroundPattern,
  NoiseOverlay,
  PaperTape,
  SectionCounter,
} from "../ui/PaperAssets";
import { BUSINESS_CONFIG, getSocialUrl } from "@/lib/business-config";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const instagram = getSocialUrl("instagram");
  const behance = getSocialUrl("behance");
  const dribbble = getSocialUrl("dribbble");

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-12 px-6 sm:px-10 lg:px-16 flex flex-col justify-between bg-[#7C1117] overflow-hidden paper-grain"
    >
      {/* Background Wrinkled Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-45 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Dark red paper texture"
          fill
          sizes="100vw"
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
          <SectionCounter index={1} label="Creative Growth Studio" />

          {/* Wordmark — decorative brand mark */}
          <div className="relative select-none" aria-hidden="true">
            <p className="wordmark-fit font-editorial font-extrabold leading-[0.82] tracking-tighter text-[#F8F3EF]/90 uppercase opacity-95 whitespace-nowrap">
              OUTKAST
            </p>
          </div>

          {/* The page's single H1 — exact headline requested */}
          <div className="space-y-1 pt-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-bold leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
              WE MAKE BRANDS
              <br />
              <span className="text-[#F8F3EF]">IMPOSSIBLE TO</span>{" "}
              <span className="font-brush text-[#D03412] capitalize tracking-normal block sm:inline">
                Ignore<span className="text-[#F8F3EF]">.</span>
              </span>
            </h1>

            {/* Painted rule under the headline */}
            <BrushStroke variant="tapered" className="w-56 h-4 text-[#D03412] mt-3" />
          </div>

          {/* Subheadline requested */}
          <p className="text-base sm:text-lg font-mono text-[#F8F3EF]/85 leading-relaxed max-w-xl">
            From bold brand identities and high-performance websites to AI-powered advertising and growth campaigns, we create digital experiences that move businesses forward.
          </p>

          {/* Paragraph & CTA Row */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end border-t border-[#D03412]/20">
            {/* Primary & Secondary conversion actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="interactive px-6 py-4 sm:py-3.5 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-[13px] sm:text-xs tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2 group font-bold shadow-xl shadow-[#D03412]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F3EF]"
                >
                  <span>LET&apos;S BUILD YOUR BRAND</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>

                <a
                  href="#portfolio"
                  className="interactive px-6 py-4 sm:py-3.5 border border-[#F8F3EF]/45 hover:border-[#F8F3EF] hover:bg-[#F8F3EF]/10 text-[#F8F3EF] font-mono text-[13px] sm:text-xs tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2 group font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#D03412] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Studio Capability & Trust Pillar (Replaces fake scarcity) */}
            <div className="sm:border-l border-[#D03412]/30 sm:pl-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#34D399] font-bold">
                  Accepting Client Projects
                </span>
              </div>
              <p className="text-xs font-mono text-[#F8F3EF]/75 leading-relaxed">
                Strategic brand building, custom Next.js engineering &amp; high-impact AI advertising.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Sophisticated Animated Digital Production Artwork */}
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
              alt="Outkast Studios 3D Wrinkled Paper Sculpture & Creative Direction"
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Dark Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7C1117] via-transparent to-transparent opacity-60" />

            {/* Digital Production Overlay Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#111111]/85 border border-[#D03412]/40 backdrop-blur-xs px-3 py-1.5 rounded-sm flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#F8F3EF]">
              <Sparkles size={12} className="text-[#D03412] animate-pulse" />
              <span>DIGITAL PRODUCTION // 4K &amp; CODE</span>
            </div>

            {/* Production Specs Pill (Bottom Left) */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1 bg-[#7C1117]/90 border border-[#D03412]/30 px-3 py-2 rounded-sm text-[9px] font-mono tracking-widest text-[#F8F3EF]/80">
              <span className="text-[#D03412] font-bold flex items-center gap-1.5">
                <Terminal size={10} /> FULL-STACK &amp; AI VIDEO
              </span>
              <span>NO TEMPLATES • BESPOKE CRAFT</span>
            </div>

            {/* Circular Stamp Badge Overlay on Right Fold */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#D03412]/60 border-dashed flex items-center justify-center p-2 bg-[#7C1117]/85 backdrop-blur-xs shadow-2xl animate-[spin_30s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="heroStampCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
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

      {/* Bottom Bar: Location & Verified Social Links */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#D03412]/20 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 relative text-xs font-mono">
        {/* Left Location */}
        <div className="flex items-center gap-2 text-[#F8F3EF]/80">
          <span className="w-2 h-2 rounded-full bg-[#D03412] animate-ping" />
          <span className="text-[#D03412] font-bold">
            • {BUSINESS_CONFIG.locationDisplay.toUpperCase()}
          </span>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-6 text-[#F8F3EF]/70 font-mono tracking-widest uppercase text-[11px]">
          {instagram.isConfigured ? (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D03412] transition-colors"
            >
              INSTAGRAM
            </a>
          ) : (
            <span className="opacity-40">INSTAGRAM</span>
          )}

          <span>•</span>

          {behance.isConfigured ? (
            <a
              href={behance.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D03412] transition-colors"
            >
              BEHANCE
            </a>
          ) : (
            <a href="#contact" className="hover:text-[#D03412] transition-colors">
              BEHANCE
            </a>
          )}

          <span>•</span>

          {dribbble.isConfigured ? (
            <a
              href={dribbble.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D03412] transition-colors"
            >
              DRIBBBLE
            </a>
          ) : (
            <a href="#contact" className="hover:text-[#D03412] transition-colors">
              DRIBBBLE
            </a>
          )}
        </div>
      </div>

      {/* Far Right Scroll Marker Indicator */}
      <div className="hidden xl:flex fixed right-6 bottom-16 flex-col items-center gap-3 z-30 text-[#F8F3EF]/40 text-[10px] font-mono tracking-widest pointer-events-none">
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
