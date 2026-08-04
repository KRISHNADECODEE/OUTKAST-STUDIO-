"use client";

import React from "react";
import Image from "next/image";
import { CircularStamp, VerticalPagination } from "../ui/BrandAssets";
import { ArrowRight } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative min-h-screen py-28 px-4 sm:px-8 lg:px-16 flex flex-col justify-between bg-[#8D161D] overflow-hidden paper-grain border-b border-[#D03412]/30">
      
      {/* Background Seamless Wrinkled Red Paper Overlay */}
      <div className="absolute inset-0 opacity-35 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Dark red paper texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10 relative">
        
        {/* Left Vertical Indicator Sidebar */}
        <div className="hidden lg:block lg:col-span-1 border-r border-[#D03412]/20 pr-4">
          <VerticalPagination activeIndex={2} totalIndex={6} />
        </div>

        {/* Left Column: Headline & Copy (Exact Mockup Match) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest text-[#D03412] uppercase font-bold border-b border-[#D03412]/40 pb-0.5 inline-block">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-[84px] font-editorial leading-[0.86] uppercase text-[#F8F3EF] tracking-tight">
            WE DESIGN
            <br />
            EXPERIENCES
            <br />
            THAT{" "}
            <span className="font-brush text-[#D03412] capitalize tracking-normal inline-block text-5xl sm:text-7xl lg:text-[80px] mt-1 drop-shadow-lg">
              Hit Different.
            </span>
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#F8F3EF]/80 max-w-sm leading-relaxed border-l-2 border-[#D03412] pl-3">
            We craft bold, high-performance websites and digital experiences for brands that don't follow trends, they set them.
          </p>

          <div className="pt-2">
            <a
              href="#services"
              className="interactive inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D03412] hover:text-[#F8F3EF] border-b border-[#D03412] pb-1 transition-colors group font-bold"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Curved Peeling Paper Layer Revealing Kraft Paper & Red Brush OUT (Exact Mockup Match) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Kraft Paper Container */}
          <div className="relative aspect-[4/3.5] w-full max-w-lg bg-[#D4B896] rounded-sm p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden border border-[#7C1117]/30 group">
            
            {/* Background Texture on Kraft */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[radial-gradient(#7C1117_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Dark Red Wrinkled Paper Peeling Corner Layer */}
            <div className="absolute -top-10 -right-10 w-full h-[130%] bg-[#7C1117] rotate-[15deg] pointer-events-none opacity-95 shadow-[-15px_15px_30px_rgba(0,0,0,0.7)] border-l-4 border-[#D03412]" />

            {/* Kraft Top Right Note */}
            <div className="relative z-20 self-end max-w-[140px] text-right space-y-1">
              <span className="text-[9px] font-mono tracking-widest text-[#7C1117] uppercase font-bold block">
                CREATIVE WITHOUT RULES.
              </span>
              <div className="w-8 h-[1.5px] bg-[#D03412] ml-auto" />
            </div>

            {/* Giant Red Brush Script "OUT" */}
            <div className="relative z-20 my-auto text-center">
              <span className="font-brush text-8xl sm:text-[120px] text-[#D03412] block transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 drop-shadow-xl select-none">
                OUT
              </span>
            </div>

            {/* Kraft Paper Bottom Details: Crosshairs, Star & Copyright */}
            <div className="relative z-20 flex justify-between items-end text-[10px] font-mono text-[#7C1117] font-bold">
              <div className="flex items-center gap-2">
                <span>✦</span>
                <span>OUTKAST STUDIO</span>
              </div>
              <div className="flex items-center gap-2">
                <span>© 2026</span>
                <span>+</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar: Trusted Brands & Stamp (Exact Mockup Match) */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#D03412]/20 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Left Label */}
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[10px] font-mono tracking-widest text-[#D03412] uppercase font-bold block">
            TRUSTED BY BOLD BRANDS
          </span>
          <div className="w-6 h-[1px] bg-[#D03412] mx-auto md:mx-0" />
        </div>

        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-editorial tracking-widest text-[#F8F3EF]/70">
          <span className="hover:text-[#D03412] transition-colors cursor-pointer">MONKMODE®</span>
          <span className="hover:text-[#D03412] transition-colors cursor-pointer">WILDLENS</span>
          <span className="hover:text-[#D03412] transition-colors cursor-pointer">L U N E</span>
          <span className="hover:text-[#D03412] transition-colors cursor-pointer">KAIROZ</span>
          <span className="hover:text-[#D03412] transition-colors cursor-pointer">THIRDEYE</span>
        </div>

        {/* Paragraph & Stamp */}
        <div className="flex items-center gap-6">
          <p className="text-xs font-mono text-[#F8F3EF]/60 max-w-xs text-center md:text-right hidden sm:block">
            We partner with ambitious brands to create work that stands out and performs.
          </p>

          <div className="hidden xl:block">
            <CircularStamp text="OUTKAST • CREATED WITH PURPOSE • " />
          </div>
        </div>

      </div>

    </section>
  );
}
