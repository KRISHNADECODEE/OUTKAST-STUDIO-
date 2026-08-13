"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MadeToConvertBadge } from "../ui/BrandAssets";
import { ArrowUpRight } from "lucide-react";
import VideoModal from "../VideoModal";
import CinematicVideo from "../ui/CinematicVideo";
import UgcCarousel, { type UgcReel } from "../ui/UgcCarousel";

export default function AiUgcSection() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    category: string;
    thumbnail: string;
    video?: string;
  } | null>(null);

  /* `img` doubles as the poster frame for entries that have a `video`. */
  const phoneMockups: UgcReel[] = [
    {
      category: "SKINCARE BRAND",
      img: "/assets/ugc-skincare-poster.jpg",
      video: "/videos/ugc-skincare.mp4",
      title: "Glow Serum AI UGC Hook",
    },
    {
      category: "COSMETIC PRODUCT",
      img: "/assets/ugc-cosmetic-poster.jpg",
      video: "/videos/ugc-cosmetic.mp4",
      title: "Enigma Fragrance Film",
    },
    {
      category: "FITNESS BRAND",
      img: "/assets/ugc-fitness.jpg",
      title: "Isolated Whey Protein Ad",
    },
    {
      category: "HOME DECOR BRAND",
      img: "/assets/ugc-decor-poster.jpg",
      video: "/videos/ugc-decor.mp4",
      title: "Ghost Lamp Ambient Hook",
    },
    {
      category: "FASHION BRAND",
      img: "/assets/ugc-fashion-poster.jpg",
      video: "/videos/ugc-fashion.mp4",
      title: "Panvero Folk Apparel Hook",
    },
    {
      category: "TRAVEL BRAND",
      img: "/assets/greek-statue.jpg",
      title: "Coastal Escape Experience",
    },
    {
      category: "PRODUCT REVIEW",
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

        {/* Featured showreel */}
        <article className="relative">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-[#D03412]">
              AI 3D Product Film
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F8F3EF]/50">
              No studio · no shoot day
            </span>
          </div>

          <CinematicVideo
            src="/videos/ai-ugc-comparison.mp4"
            poster="/assets/ai-ugc-comparison-poster.jpg"
            label="AI 3D Product Film"
            ratio="16/9"
          />
        </article>

        {/* Reel deck — three on screen, the rest a tap away. */}
        <div className="relative pt-6">

          {/* Floating Made To Convert Badge */}
          <div className="absolute -top-4 right-6 z-40 hidden sm:block">
            <MadeToConvertBadge />
          </div>

          <UgcCarousel
            reels={phoneMockups}
            onExpand={(reel) =>
              setSelectedVideo({
                title: reel.title,
                category: reel.category,
                thumbnail: reel.img,
                video: reel.video,
              })
            }
          />

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
