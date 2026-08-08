"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MadeToConvertBadge } from "../ui/BrandAssets";
import { Play, ChevronRight, ArrowUpRight } from "lucide-react";
import VideoModal from "../VideoModal";
import CinematicVideo from "../ui/CinematicVideo";
import InlineLoopVideo from "../ui/InlineLoopVideo";

export default function AiUgcSection() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    category: string;
    views: string;
    ctr: string;
    thumbnail: string;
    video?: string;
  } | null>(null);

  /* `img` doubles as the poster frame for entries that have a `video`. */
  const phoneMockups: {
    category: string;
    views: string;
    ctr: string;
    img: string;
    title: string;
    video?: string;
  }[] = [
    {
      category: "SKINCARE BRAND",
      views: "3.2M",
      ctr: "8.7%",
      img: "/assets/ugc-skincare-poster.jpg",
      video: "/videos/ugc-skincare.mp4",
      title: "Glow Serum AI UGC Hook",
    },
    {
      category: "FITNESS BRAND",
      views: "2.6M",
      ctr: "7.1%",
      img: "/assets/ugc-fitness.jpg",
      title: "Isolated Whey Protein Ad",
    },
    {
      category: "HOME DECOR BRAND",
      views: "1.8M",
      ctr: "6.3%",
      img: "/assets/paper-bg.jpg",
      title: "Minimalist Studio Ambient",
    },
    {
      category: "FASHION BRAND",
      views: "2.9M",
      ctr: "9.2%",
      img: "/assets/ugc-fashion.jpg",
      title: "Streetwear Drops Hook",
    },
    {
      category: "TRAVEL BRAND",
      views: "4.1M",
      ctr: "10.4%",
      img: "/assets/greek-statue.jpg",
      title: "Coastal Escape Experience",
    },
    {
      category: "PRODUCT REVIEW",
      views: "2.4M",
      ctr: "9.6%",
      img: "/assets/ugc-jewelry-poster.jpg",
      video: "/videos/ugc-jewelry.mp4",
      title: "Ring Showcase Review Hook",
    },
  ];

  return (
    <section id="ai-ugc" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#8D161D] overflow-hidden paper-grain border-b border-[#D03412]/30">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Wrinkled paper texture"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header & Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D03412]">
              <span className="border-b border-[#D03412] pb-0.5 font-bold uppercase">
                08 / 13 • AI UGC SHOWCASE
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.88] uppercase text-[#F8F3EF] tracking-tight">
              AI ADS THAT DON'T LOOK LIKE{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Ai.
              </span>
            </h2>

            <p className="text-sm font-mono text-[#F8F3EF]/80 leading-relaxed border-l-2 border-[#D03412] pl-3">
              Hyper realistic. Scroll stopping. Conversion driven.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="interactive inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#F8F3EF] border-b border-[#D03412] pb-1 hover:text-[#D03412] transition-colors font-bold"
            >
              <span>VIEW MORE EXAMPLES</span>
              <ArrowUpRight size={14} className="text-[#D03412]" />
            </a>
          </div>
        </div>

        {/* Split-screen comparison reel */}
        <article className="relative">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-[#D03412]">
              Standard Ad vs. AI UGC Ad
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F8F3EF]/50">
              Same product · same spend
            </span>
          </div>

          <CinematicVideo
            src="/videos/ai-ugc-comparison.mp4"
            webmSrc="/videos/ai-ugc-comparison.webm"
            poster="/assets/ugc-fashion.jpg"
            label="Standard Ad vs. AI UGC Ad"
            ratio="16/9"
          />
        </article>

        {/* 5 Phone Deck Deck with Floating Made To Convert Badge (Exact Mockup 2 Match) */}
        <div className="relative pt-6">
          
          {/* Floating Made To Convert Badge */}
          <div className="absolute -top-4 right-6 z-30 hidden sm:block">
            <MadeToConvertBadge />
          </div>

          {/* 6 cards divide evenly at every breakpoint — no orphan row. */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {phoneMockups.map((phone, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Preview ${phone.title} — ${phone.category}`}
                onClick={() =>
                  setSelectedVideo({
                    title: phone.title,
                    category: phone.category,
                    views: phone.views,
                    ctr: phone.ctr,
                    thumbnail: phone.img,
                    video: phone.video,
                  })
                }
                className="interactive relative w-full text-left aspect-[9/18] bg-[#111111] rounded-[22px] border-2 border-[#D03412]/40 p-2 overflow-hidden shadow-2xl group hover:border-[#D03412] focus-visible:border-[#D03412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412] transition-all duration-300 cursor-pointer hover:-translate-y-2"
              >
                {/* Top Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-[#111111] rounded-full z-20 border border-white/10" />

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#7C1117]">
                  {phone.video ? (
                    <InlineLoopVideo
                      src={phone.video}
                      poster={phone.img}
                      alt={phone.category}
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <Image
                      src={phone.img}
                      alt={phone.category}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#D03412]/80 group-hover:bg-[#D03412] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play size={16} className="fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="absolute bottom-2 left-2 right-2 space-y-1 z-10 bg-[#111111]/85 backdrop-blur-xs p-2 rounded-md border border-white/10">
                    <span className="text-[8px] font-mono tracking-widest text-[#D03412] uppercase font-bold block truncate">
                      {phone.category}
                    </span>
                    <div className="flex justify-between text-[9px] font-mono text-[#F8F3EF]/90 font-bold pt-0.5 border-t border-white/10">
                      <span>{phone.views} VIEWS</span>
                      <span className="text-[#D03412]">{phone.ctr} CTR</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Floating Arrow */}
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden xl:block">
            <button className="w-10 h-10 rounded-full border border-[#D03412]/40 bg-[#7C1117] text-[#F8F3EF] flex items-center justify-center hover:bg-[#D03412] transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoData={selectedVideo}
      />
    </section>
  );
}
