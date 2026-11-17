"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowUpRight, X } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/business-config";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { url, isConfigured } = getWhatsAppUrl();

  const handleAction = () => {
    if (isConfigured) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 print:hidden">
      {/* Floating Mini Prompt Balloon */}
      {isOpen && (
        <div className="relative mb-1 w-72 rounded-sm border border-[#D03412]/50 bg-[#8D161D] p-4 text-[#F8F3EF] shadow-2xl backdrop-blur-md paper-grain animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close message"
            className="absolute top-2.5 right-2.5 text-[#F8F3EF]/60 hover:text-[#F8F3EF] transition-colors"
          >
            <X size={14} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F8F3EF]/70 font-bold">
              Direct Enquiry Desk
            </span>
          </div>

          <p className="text-xs font-mono leading-relaxed text-[#F8F3EF]/90 mb-3">
            Have a project in mind? Connect directly for scope discussions, pricing, and turnaround times.
          </p>

          <button
            onClick={handleAction}
            className="interactive w-full py-2 px-3 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-[11px] uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-1.5 transition-colors shadow-lg"
          >
            <span>{isConfigured ? "START WHATSAPP CHAT" : "START PROJECT ENQUIRY"}</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2 group">
        <span className="hidden sm:inline-block px-3 py-1.5 rounded-sm bg-[#111111]/90 border border-[#D03412]/40 text-[11px] font-mono uppercase tracking-wider text-[#F8F3EF]/90 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Quick Project Enquiry
        </span>

        <button
          onClick={() => {
            if (isOpen) {
              handleAction();
            } else {
              setIsOpen(true);
            }
          }}
          aria-label="Contact Outkast Studios on WhatsApp"
          className="interactive relative h-13 w-13 rounded-full bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] border border-[#F8F3EF]/20 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F3EF]"
        >
          <span className="absolute inset-0 rounded-full bg-[#D03412] opacity-30 animate-ping -z-10" />
          <MessageCircle size={24} className="fill-current text-[#F8F3EF]" />
        </button>
      </div>
    </div>
  );
}
