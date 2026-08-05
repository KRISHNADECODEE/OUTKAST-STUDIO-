"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CircularStamp } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay } from "../ui/PaperAssets";

/* ==========================================================================
   WHAT WE DO — torn paper reveal slide
   The right half is a three-layer paper composite: a cream sliver is the
   "underneath", and two dark red torn sheets sit on top of it so the brush
   OUT reads as something exposed by tearing the page open.
   ========================================================================== */

const BRANDS = ["MONKMODE®", "WILDLENS", "LUNE", "KAIROZ", "THIRDEYE"];

/* The reveal is full-bleed below lg and 52% of the viewport above it; each
   sheet is ~110% of that. Without this next/image assumes the largest
   candidate and ships a 3840px asset to a phone. */
const PAPER_SIZES = "(min-width: 1024px) 60vw, 112vw";

/* Tiny registration crosses, as on the brand sheet. */
const Crosshair = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" className={`absolute text-[#D03412]/50 ${className}`} aria-hidden="true">
    <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="relative min-h-screen pt-28 pb-10 px-6 sm:px-10 lg:px-16 flex flex-col justify-between bg-[#5C0F14] overflow-hidden paper-grain border-b border-[#D03412]/30"
    >
      {/* Wrinkled paper ground */}
      <div className="absolute inset-0 opacity-60 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/dark_red_wrinkled_paper_1785853551188.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Vignette so the edges fall away and the tear carries the light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 62% 45%, rgba(140,26,26,0.55) 0%, rgba(64,10,14,0.45) 55%, rgba(30,5,7,0.85) 100%)",
        }}
      />

      <BackgroundPattern variant="crosses" opacity={0.05} size={56} />
      <NoiseOverlay variant="grain02" opacity={0.22} />

      {/* ================= TORN PAPER REVEAL =================
          Three layers read as one tear: the cream band is the exposed paper,
          and the two red sheets close over it from above and below. Geometry
          was tuned against a render of the reference slide. */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[46%] xl:w-[52%] pointer-events-none select-none z-[5] opacity-30 lg:opacity-100">
        {/* Cream underlayer, with the brush mark sitting on it */}
        <div className="absolute top-[20%] -left-[4%] w-[106%] rotate-[-6deg] drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)]">
          <Image
            src="/assets/torn-cream-cut.png"
            alt=""
            width={1536}
            height={1024}
            sizes={PAPER_SIZES}
            className="w-full h-auto"
          />
        </div>

        <span className="absolute left-[28%] top-[34%] font-brush text-[#C1300F] text-[clamp(4rem,11vw,11rem)] leading-none -rotate-[7deg] z-[6] drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
          OUT
        </span>

        <span className="absolute left-[30%] top-[54%] z-[6] text-[9px] font-mono tracking-[0.18em] text-[#7C1117]/75 uppercase leading-relaxed -rotate-[6deg]">
          OUTKAST STUDIOS
          <br />© 2026
        </span>

        {/* Dark red sheet tearing away above the reveal */}
        <div className="absolute -top-[24%] -left-[8%] w-[112%] rotate-[-6deg] z-[7] drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]">
          <Image
            src="/assets/torn-red-sheet-cut.png"
            alt=""
            width={1536}
            height={1024}
            sizes={PAPER_SIZES}
            className="w-full h-auto"
          />
        </div>

        {/* Second fragment curling in below the reveal */}
        <div className="absolute top-[44%] -left-[4%] w-[104%] rotate-[-6deg] z-[7] drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]">
          <Image
            src="/assets/torn-red-sliver-cut.png"
            alt=""
            width={1536}
            height={1024}
            sizes={PAPER_SIZES}
            className="w-full h-auto"
          />
        </div>

        <Crosshair className="w-3 h-3 top-[36%] right-[10%] z-[8]" />
        <Crosshair className="w-2.5 h-2.5 bottom-[30%] left-[16%] z-[8]" />
      </div>

      {/* Annotation, above the paper */}
      <p className="hidden lg:block absolute top-[22%] right-8 z-20 text-[10px] font-mono tracking-[0.16em] text-[#D03412] uppercase leading-[1.7] font-bold">
        CREATIVE
        <br />
        WITHOUT
        <br />
        RULES.
      </p>

      {/* ================= COPY ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        {/* Kept clear of the reveal, which owns the right 46% at lg and 52%
            from xl. At exactly 1024 the copy has the least room, so it steps
            down there rather than running under the paper. */}
        <div className="max-w-md sm:max-w-lg lg:max-w-[28rem] xl:max-w-[34rem] space-y-5">
          {/* Eyebrow */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D03412] uppercase font-bold block">
              WHAT WE DO
            </span>
            <span className="block w-24 h-px bg-[#D03412]/60" />
          </div>

          {/* Headline */}
          {/* "EXPERIENCES" is a single unbreakable word ~11.9x the font size
              wide, so the type has to be sized off the column, not chosen by
              eye — otherwise it spills over the paper (and gets clipped by the
              section's overflow on small screens). */}
          <h2 className="font-editorial font-extrabold uppercase text-[#F8F3EF] leading-[0.88] tracking-tight text-[clamp(1.5rem,7vw,2.25rem)] lg:text-[clamp(2rem,3.2vw,2.6rem)]">
            WE DESIGN
            <br />
            EXPERIENCES
            <br />
            <span className="inline-flex flex-wrap items-baseline gap-x-4">
              THAT
              <span className="font-brush text-[#D03412] normal-case tracking-normal text-[clamp(1.4rem,6.5vw,2rem)] lg:text-[clamp(1.75rem,2.9vw,2.4rem)] -rotate-2">
                Hit Different.
              </span>
            </span>
          </h2>

          {/* Body */}
          <p className="text-sm font-sans text-[#F8F3EF]/75 leading-relaxed max-w-md">
            We craft bold, high-performance websites and digital experiences for
            brands that don&apos;t follow trends, they set them.
          </p>

          {/* CTA */}
          <a
            href="#services"
            className="interactive group inline-flex items-center gap-3 pb-1 border-b border-[#D03412]/60 hover:border-[#D03412] text-[#D03412] font-mono text-xs tracking-[0.2em] uppercase font-bold transition-colors"
          >
            <span>EXPLORE SERVICES</span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* ================= TRUSTED BY STRIP ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#F8F3EF]/15">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="text-[11px] font-mono tracking-[0.2em] text-[#D03412] uppercase font-bold leading-relaxed shrink-0">
            TRUSTED BY
            <br />
            BOLD BRANDS
            <span className="block w-6 h-px bg-[#D03412]/60 mt-3" />
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 lg:gap-x-14 grow">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-sm md:text-base font-sans font-bold tracking-[0.12em] text-[#F8F3EF]/85 uppercase whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>

          <p className="text-[11px] font-sans text-[#F8F3EF]/65 leading-relaxed max-w-[15rem] shrink-0">
            We partner with ambitious brands to create work that stands out and
            performs.
          </p>
        </div>
      </div>

      {/* Rotating stamp, bottom right */}
      <div className="hidden xl:block absolute bottom-24 right-16 z-20">
        <CircularStamp className="w-28 h-28" />
      </div>

      {/* Right edge scroll marker */}
      <div className="hidden lg:flex absolute right-6 bottom-28 flex-col items-center gap-3 z-20 text-[#F8F3EF]/35 text-[10px] font-mono tracking-[0.25em]">
        <div className="w-px h-16 bg-[#F8F3EF]/20" />
        <span className="writing-mode-vertical uppercase">SCROLL</span>
      </div>
    </section>
  );
}
