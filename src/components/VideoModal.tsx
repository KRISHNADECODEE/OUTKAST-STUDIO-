"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, ShieldCheck } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoData: {
    title: string;
    category: string;
    views: string;
    ctr: string;
    thumbnail: string;
  } | null;
}

export default function VideoModal({ isOpen, onClose, videoData }: VideoModalProps) {
  if (!videoData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-sm bg-[#8D161D] border border-[#D03412]/50 rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[9/16] flex flex-col justify-between p-6"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0.3), rgba(141,22,29,0.9)), url(${videoData.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 bg-[#D03412] text-[#F8F3EF] text-[10px] font-mono tracking-widest uppercase rounded-full font-bold">
                {videoData.category}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#111111]/60 text-white flex items-center justify-center hover:bg-[#D03412] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Simulated Play Interface */}
            <div className="my-auto text-center z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#D03412]/90 border border-white/40 flex items-center justify-center shadow-xl animate-pulse cursor-pointer">
                <Play size={28} className="fill-white text-white ml-1" />
              </div>
              <p className="mt-4 text-xs font-mono tracking-widest text-[#F8F3EF]/90 uppercase">
                AI UGC AD SAMPLE PLAYING
              </p>
            </div>

            {/* Bottom Details */}
            <div className="bg-[#111111]/80 backdrop-blur-sm p-4 rounded-xl border border-[#D03412]/30 space-y-2 z-10">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70">{videoData.title}</span>
                <span className="text-[#D03412] font-bold">HIGH CONVERTING</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono font-bold pt-1 border-t border-white/10">
                <span className="text-white">{videoData.views} VIEWS</span>
                <span className="text-[#D03412]">{videoData.ctr} CTR</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
