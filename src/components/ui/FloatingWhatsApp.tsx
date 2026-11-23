"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, ArrowUpRight, X, Instagram } from "lucide-react";
import {
  BUSINESS_CONFIG,
  getWhatsAppUrl,
  getPhoneHref,
  getSocialUrl,
} from "@/lib/business-config";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { url: whatsappUrl, isConfigured: isWAConfigured } = getWhatsAppUrl();
  const phone = getPhoneHref();
  const instagram = getSocialUrl("instagram");

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Floating Mini Action Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Quick Contact Menu"
          className="relative mb-1 w-80 rounded-sm border border-[#D03412]/50 bg-[#111111]/95 p-5 text-[#F8F3EF] shadow-2xl backdrop-blur-md paper-grain animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close contact card"
            className="absolute top-3 right-3 text-[#F8F3EF]/60 hover:text-[#D03412] transition-colors p-1"
          >
            <X size={14} />
          </button>

          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold">
              DIRECT STUDIO DESK
            </span>
          </div>

          <h4 className="text-sm font-editorial uppercase tracking-wide text-[#F8F3EF] mb-1">
            LET&apos;S TALK BUSINESS
          </h4>
          <p className="text-xs font-mono leading-relaxed text-[#F8F3EF]/75 mb-4">
            Call or chat directly with our team for project scoping, turnaround time &amp; pricing.
          </p>

          {/* Action 1: Direct Call Button */}
          <div className="space-y-2">
            <a
              href={phone.href}
              className="interactive w-full py-2.5 px-3.5 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-[11px] uppercase tracking-wider font-bold rounded-sm flex items-center justify-between transition-all duration-200 shadow-lg hover:shadow-[#D03412]/30 group"
            >
              <div className="flex items-center gap-2">
                <Phone size={14} className="group-hover:rotate-12 transition-transform" />
                <span>CALL: {phone.display}</span>
              </div>
              <ArrowUpRight size={13} />
            </a>

            {/* Action 2: WhatsApp Chat Button */}
            <a
              href={isWAConfigured ? whatsappUrl : "#contact"}
              target={isWAConfigured ? "_blank" : undefined}
              rel={isWAConfigured ? "noopener noreferrer" : undefined}
              className="interactive w-full py-2.5 px-3.5 bg-[#8D161D] hover:bg-[#7C1117] border border-[#25D366]/40 hover:border-[#25D366] text-[#F8F3EF] font-mono text-[11px] uppercase tracking-wider font-bold rounded-sm flex items-center justify-between transition-colors shadow-md group"
            >
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-[#25D366]" />
                <span>WHATSAPP CHAT</span>
              </div>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Social Quick Link */}
          <div className="pt-3 mt-3 border-t border-[#F8F3EF]/10 flex items-center justify-between text-[10px] font-mono text-[#F8F3EF]/60">
            <span>OFFICIAL INSTAGRAM</span>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive text-[#D03412] hover:text-[#F8F3EF] flex items-center gap-1 font-bold transition-colors"
            >
              <Instagram size={12} />
              <span>@outkast.studios.official</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div className="flex items-center gap-2">
        {/* Call Quick Button (Mobile & Desktop) */}
        <a
          href={phone.href}
          aria-label={`Call Outkast Studios at ${phone.display}`}
          className="interactive h-12 px-3.5 rounded-full bg-[#111111]/90 hover:bg-[#8D161D] text-[#F8F3EF] border border-[#D03412]/50 hover:border-[#D03412] flex items-center gap-2 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 paper-grain"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
          </span>
          <Phone size={16} className="text-[#D03412]" />
          <span className="text-[11px] font-mono uppercase tracking-wider font-bold pr-1">
            CALL US
          </span>
        </a>

        {/* WhatsApp Quick Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Quick Connect Menu"
          aria-expanded={isOpen}
          className="interactive relative h-12 w-12 rounded-full bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] border border-[#F8F3EF]/20 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F3EF]"
        >
          <span className="absolute inset-0 rounded-full bg-[#D03412] opacity-30 animate-ping -z-10" />
          <MessageCircle size={22} className="fill-current text-[#F8F3EF]" />
        </button>
      </div>
    </div>
  );
}
