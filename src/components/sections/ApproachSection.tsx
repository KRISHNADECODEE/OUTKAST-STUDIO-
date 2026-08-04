"use client";

import React from "react";
import Image from "next/image";
import { VerticalPagination, GiantBrushX, CircularStamp } from "../ui/BrandAssets";
import { ArrowUpRight } from "lucide-react";

export default function ApproachSection() {
  const pillars = [
    {
      num: "01",
      title: "RESEARCH",
      desc: "We dive deep to understand your brand, your audience and the space you want to own.",
    },
    {
      num: "02",
      title: "DESIGN",
      desc: "We craft visuals and experiences that are bold, functional and uniquely yours.",
    },
    {
      num: "03",
      title: "DEVELOP",
      desc: "Clean. Fast. Responsive. Built to perform across every device and platform.",
    },
  ];

  return (
    <section id="approach" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#7C1117] overflow-hidden paper-grain border-b border-[#D03412]/30">
      
      {/* Wrinkled Red Paper Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:col-span-1 border-r border-[#D03412]/20 pr-4">
          <VerticalPagination activeIndex={3} totalIndex={6} />
        </div>

        {/* Headline Left */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D03412]">
            <span className="border-b border-[#D03412] pb-0.5 font-bold uppercase">
              OUR APPROACH • 03 / 06
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-[88px] font-editorial leading-[0.88] uppercase text-[#F8F3EF] tracking-tight">
            STRATEGY<span className="text-[#D03412] font-bold">.</span>
            <br />
            DESIGN<span className="text-[#D03412] font-bold">.</span>
            <br />
            EXPERIENCE<span className="text-[#D03412] font-bold">.</span>
            <br />
            <span className="font-brush text-[#D03412] capitalize tracking-normal block text-6xl sm:text-8xl mt-1">
              Impact<span className="text-[#F8F3EF]">.</span>
            </span>
          </h2>
        </div>

        {/* Right Artwork Box: Torn Paper Sculpture Revealing Greek Bust & Brush X (Exact Mockup 4 Match) */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          <div className="relative aspect-[4/5] w-full max-w-sm rounded-sm overflow-hidden border border-[#D03412]/40 shadow-2xl group bg-[#D4B896]">
            
            {/* Greek Statue Base Layer */}
            <Image
              src="/assets/greek-statue.jpg"
              alt="Greek Statue Torn Sculpture Artwork"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Giant Brush X Watermark on Kraft Paper */}
            <div className="absolute top-10 right-4 pointer-events-none opacity-40">
              <GiantBrushX className="w-48 h-48 text-[#D03412]" />
            </div>

            {/* Floating Top Right Tag */}
            <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-[#7C1117] uppercase font-bold max-w-[120px] text-right">
              IDEAS THAT BREAK PATTERNS. EXPERIENCES THAT CREATE IMPACT.
            </div>

            {/* Circular Stamp Badge */}
            <div className="absolute bottom-4 right-4">
              <CircularStamp text="OUTKAST • CREATED WITH PURPOSE • " />
            </div>
          </div>

        </div>

      </div>

      {/* Bottom 3 Pillars & CTA Link (Exact Mockup 4 Match) */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#D03412]/20 grid grid-cols-1 md:grid-cols-4 gap-8 items-start z-10 relative">
        
        {pillars.map((p) => (
          <div key={p.num} className="space-y-2 group">
            <span className="text-xs font-mono text-[#D03412] font-bold">{p.num}</span>
            <h3 className="text-xl font-editorial text-[#F8F3EF] group-hover:text-[#D03412] transition-colors uppercase">
              {p.title}
            </h3>
            <div className="w-6 h-[1px] bg-[#D03412]/40 my-1" />
            <p className="text-xs font-mono text-[#F8F3EF]/70 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}

        {/* Bottom Right CTA Link */}
        <div className="md:col-span-1 space-y-2 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-[#D03412]/30 md:pl-6">
          <span className="text-[10px] font-mono text-[#D03412] uppercase font-bold block">
            READY TO CREATE SOMETHING DIFFERENT?
          </span>
          <a
            href="#contact"
            className="interactive group flex items-center justify-between text-xs font-editorial text-[#F8F3EF] hover:text-[#D03412] transition-colors"
          >
            <span>LET'S BUILD YOUR NEXT BIG THING.</span>
            <div className="w-8 h-8 rounded-full border border-[#D03412] flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors shrink-0 ml-2">
              <ArrowUpRight size={16} />
            </div>
          </a>
        </div>

      </div>

    </section>
  );
}
