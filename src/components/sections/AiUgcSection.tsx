"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MadeToConvertBadge } from "../ui/BrandAssets";
import { ArrowUpRight, Sparkles, Video, Play } from "lucide-react";
import VideoModal from "../VideoModal";
import CinematicVideo from "../ui/CinematicVideo";
import UgcCarousel, { type UgcReel } from "../ui/UgcCarousel";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

export default function AiUgcSection() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    category: string;
    thumbnail: string;
    video?: string;
  } | null>(null);

  /* Real available project assets, properly labeled as Concept Projects */
  const phoneMockups: UgcReel[] = [
    {
      category: "SKINCARE HOOK",
      img: "/assets/ugc-skincare-poster.jpg",
      video: "/videos/ugc-skincare.mp4",
      title: "Glow Serum AI UGC Hook",
      label: "Concept Project",
    },
    {
      category: "LUXURY PERFUME",
      img: "/assets/ugc-cosmetic-poster.jpg",
      video: "/videos/ugc-cosmetic.mp4",
      title: "Enigma Fragrance 3D Commercial",
      label: "Concept Project",
    },
    {
      category: "FITNESS NUTRITION",
      img: "/assets/ugc-fitness.jpg",
      title: "Isolated Whey Protein Ad Hook",
      label: "Concept Project",
    },
    {
      category: "HOME DECOR",
      img: "/assets/ugc-decor-poster.jpg",
      video: "/videos/ugc-decor.mp4",
      title: "Ghost Lamp Ambient Commercial",
      label: "Concept Project",
    },
    {
      category: "STREETWEAR APPAREL",
      img: "/assets/ugc-fashion-poster.jpg",
      video: "/videos/ugc-fashion.mp4",
      title: "Panvero Folk Apparel Fashion Hook",
      label: "Concept Project",
    },
    {
      category: "FINE JEWELRY",
      img: "/assets/ugc-jewelry-poster.jpg",
      video: "/videos/ugc-jewelry.mp4",
      title: "Ring Showcase Product Review Hook",
      label: "Concept Project",
    },
  ];

  return (
    <section
      id="ai-ugc"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#8D161D] overflow-hidden paper-grain border-b border-[#D03412]/30"
    >
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

      <BackgroundPattern variant="lines" opacity={0.06} size={36} />
      <NoiseOverlay variant="dust" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header & Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D03412]/20 pb-8">
          <div className="space-y-4 max-w-2xl">
            <SectionCounter index={4} label="Flagship Offering" />

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.88] uppercase text-[#F8F3EF] tracking-tight">
              AI ADS THAT DON&apos;T LOOK LIKE{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Ai.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-mono text-[#F8F3EF]/85 leading-relaxed border-l-2 border-[#D03412] pl-3">
              Hyper-realistic virtual creators, 3D product commercials, and conversion-focused video hooks. Designed for Instagram Reels, TikTok, and Meta Ad campaigns without traditional studio costs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-[11px] font-mono text-[#F8F3EF]/60 bg-[#7C1117] border border-[#D03412]/30 px-3 py-1.5 rounded-sm">
              <span className="text-[#D03412] font-bold">TRANSPARENCY NOTE:</span> Speculative &amp; demo reels are labeled as Concept Projects.
            </div>

            <a
              href="#contact"
              className="interactive inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#F8F3EF] border-b border-[#D03412] pb-1 hover:text-[#D03412] transition-colors font-bold uppercase shrink-0"
            >
              <span>REQUEST CUSTOM DEMO</span>
              <ArrowUpRight size={14} className="text-[#D03412]" />
            </a>
          </div>
        </div>

        {/* Featured 3D Cinematic Commercial Showcase */}
        <article className="relative bg-[#7C1117]/60 border border-[#D03412]/30 p-4 sm:p-6 rounded-sm shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#D03412]" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-[#F8F3EF]">
                AI 3D Product Film: Studio Commercial Showcase
              </h3>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest">
              <span className="bg-[#D03412]/20 text-[#D03412] border border-[#D03412]/40 px-2 py-0.5 rounded-xs font-bold">
                Concept Project
              </span>
              <span className="text-[#F8F3EF]/50">No physical shoot required</span>
            </div>
          </div>

          <CinematicVideo
            src="/videos/ai-ugc-comparison.mp4"
            poster="/assets/ai-ugc-comparison-poster.jpg"
            label="AI 3D Product Film Showcase"
            ratio="16/9"
          />
        </article>

        {/* 5 Formats Showcase Deck: Vertical Video Carousel */}
        <div className="relative pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold block">
                FORMAT PORTFOLIO
              </span>
              <h3 className="text-xl sm:text-2xl font-editorial uppercase text-[#F8F3EF]">
                AI UGC &amp; Lifestyle Ad Creatives
              </h3>
            </div>
            <div className="hidden sm:block">
              <MadeToConvertBadge />
            </div>
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

        {/* Capabilities Breakdown Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#D03412]/20">
          {[
            {
              title: "AI UGC Advertisements",
              desc: "Organic creator-style hooks with natural cadence, facial expressions, and relatable hooks.",
            },
            {
              title: "AI Product Commercials",
              desc: "Cinematic lighting, zero gravity floats, and macro textures impossible on a traditional shoot.",
            },
            {
              title: "Cinematic Product Videos",
              desc: "Dynamic camera moves and luxury pacing tailored for brand awareness campaigns.",
            },
            {
              title: "Social Ad Campaigns",
              desc: "Rapid multi-variant creative testing to isolate winning hooks for Meta Ads.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#7C1117]/50 border border-[#D03412]/20 rounded-sm space-y-1.5"
            >
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D03412] font-bold">
                {item.title}
              </h4>
              <p className="text-[11px] font-mono text-[#F8F3EF]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
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
