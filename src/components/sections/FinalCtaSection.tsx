"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HanddrawnSmiley, BrushStroke } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/business-config";

const SERVICE_OPTIONS = [
  "Brand Building",
  "AI Advertising",
  "Website Development",
  "Social Media Management",
  "Meta Ads",
  "Full Growth Partnership",
];

const BUDGET_OPTIONS = [
  "Under $1,500 / ₹1,00,000",
  "$1,500 – $3,500 / ₹1L – ₹3L",
  "$3,500 – $7,500 / ₹3L – ₹6L",
  "$7,500+ / ₹6L+ Enterprise",
];

export default function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatsappNumber: "",
    email: "",
    services: ["Website Development"],
    budget: "$1,500 – $3,500 / ₹1L – ₹3L",
    description: "",
    _hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [leadRef, setLeadRef] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const { url: whatsappUrl, isConfigured: isWhatsAppConfigured } = getWhatsAppUrl();

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const next = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: next.length > 0 ? next : [service] };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "A valid business email is required.";
    }
    const digits = formData.whatsappNumber.replace(/[^0-9]/g, "");
    if (!formData.whatsappNumber.trim() || digits.length < 7) {
      errs.whatsappNumber = "Valid WhatsApp number with country code is required.";
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = "Please describe your goals in at least 10 characters.";
    }
    if (formData.services.length === 0) {
      errs.services = "Select at least one required service.";
    }
    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) {
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit brief. Please try again.");
        if (data.errors) setValidationErrors(data.errors);
        return;
      }

      setStatus("success");
      setLeadRef(data.leadRef || "OKS-CONFIRMED");

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D03412", "#F8F3EF", "#8D161D"],
        });
      } catch {
        // Confetti fallback
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection or contact us via WhatsApp.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      businessName: "",
      whatsappNumber: "",
      email: "",
      services: ["Website Development"],
      budget: "$1,500 – $3,500 / ₹1L – ₹3L",
      description: "",
      _hp: "",
    });
    setValidationErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-[#8D161D] overflow-hidden paper-grain"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Wrinkled paper texture"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="crosses" opacity={0.07} size={60} />
      <NoiseOverlay variant="grain02" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Big Editorial Headline */}
        <div className="space-y-6">
          <SectionCounter index={10} label="Start a Project" />

          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight max-w-5xl">
            YOUR BRAND HAS POTENTIAL.
            <br />
            <span className="text-[#F8F3EF]">LET&apos;S MAKE THE WORLD</span>{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Notice<span className="text-[#F8F3EF]">.</span>
            </span>
          </h2>

          <BrushStroke variant="sweep" className="w-80 h-8 text-[#D03412]/70" />

          <p className="text-base sm:text-lg font-mono text-[#F8F3EF]/85 leading-relaxed max-w-2xl">
            Whether you are launching a new venture, rebranding an established company, or scaling with high-converting AI video advertising, let&apos;s build something unforgettable.
          </p>
        </div>

        {/* Contact Grid: Form (Left) & WhatsApp / Direct Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Enquiry Form Container */}
          <div className="lg:col-span-8 bg-[#8D161D] border border-[#D03412]/40 rounded-sm p-6 sm:p-10 shadow-2xl paper-grain relative">
            {status === "success" ? (
              <div className="py-12 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D03412]/20 border border-[#D03412] flex items-center justify-center mx-auto text-[#D03412]">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest text-[#D03412] uppercase font-bold">
                    REFERENCE: {leadRef}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-editorial uppercase text-[#F8F3EF]">
                    PROJECT BRIEF RECEIVED
                  </h3>
                  <p className="text-sm font-mono text-[#F8F3EF]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our creative director is reviewing your requirements for <strong className="text-white">{formData.businessName}</strong> and will reach out within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {isWhatsAppConfigured && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center gap-2 shadow-lg"
                    >
                      <MessageCircle size={15} />
                      <span>FOLLOW UP ON WHATSAPP</span>
                    </a>
                  )}

                  <button
                    onClick={handleReset}
                    className="interactive px-6 py-3 border border-[#F8F3EF]/30 text-[#F8F3EF] hover:border-[#D03412] hover:bg-[#7C1117] font-mono text-xs uppercase tracking-wider font-bold rounded-sm transition-colors"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Honeypot field (hidden from genuine users) */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="border-b border-[#D03412]/20 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold block mb-1">
                    CONFIDENTIAL PROJECT INTAKE
                  </span>
                  <h3 className="text-2xl font-editorial uppercase text-[#F8F3EF]">
                    Tell Us About Your Vision
                  </h3>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-4 bg-[#5C0F14] border border-[#D03412] rounded-sm flex items-start gap-3 text-xs font-mono text-[#F8F3EF] animate-in fade-in">
                    <AlertCircle size={18} className="text-[#D03412] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#D03412] font-bold uppercase mb-0.5">
                        Submission Error
                      </strong>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                {/* Required Services Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold">
                    1. Required Service(s) <span className="text-[#D03412]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICE_OPTIONS.map((srv) => {
                      const selected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`interactive p-3 text-left rounded-sm border text-[11px] font-mono uppercase tracking-wider transition-all ${
                            selected
                              ? "bg-[#D03412] border-[#D03412] text-white font-bold shadow-md"
                              : "bg-[#7C1117] border-[#D03412]/30 text-[#F8F3EF]/75 hover:border-[#D03412]/70"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                  {validationErrors.services && (
                    <p className="text-[11px] font-mono text-[#D03412]">
                      {validationErrors.services}
                    </p>
                  )}
                </div>

                {/* Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold"
                    >
                      2. Your Name <span className="text-[#D03412]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-[#7C1117] border rounded-sm p-3.5 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:ring-1 focus:ring-[#D03412] ${
                        validationErrors.name ? "border-[#D03412]" : "border-[#D03412]/40"
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[11px] font-mono text-[#D03412]">
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-business"
                      className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold"
                    >
                      3. Business / Brand Name <span className="text-[#D03412]">*</span>
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      placeholder="e.g. Lumina Apparel"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full bg-[#7C1117] border rounded-sm p-3.5 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:ring-1 focus:ring-[#D03412] ${
                        validationErrors.businessName ? "border-[#D03412]" : "border-[#D03412]/40"
                      }`}
                    />
                    {validationErrors.businessName && (
                      <p className="text-[11px] font-mono text-[#D03412]">
                        {validationErrors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-whatsapp"
                      className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold"
                    >
                      4. WhatsApp Number <span className="text-[#D03412]">*</span>
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className={`w-full bg-[#7C1117] border rounded-sm p-3.5 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:ring-1 focus:ring-[#D03412] ${
                        validationErrors.whatsappNumber ? "border-[#D03412]" : "border-[#D03412]/40"
                      }`}
                    />
                    {validationErrors.whatsappNumber && (
                      <p className="text-[11px] font-mono text-[#D03412]">
                        {validationErrors.whatsappNumber}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold"
                    >
                      5. Business Email <span className="text-[#D03412]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. vikram@lumina.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#7C1117] border rounded-sm p-3.5 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:ring-1 focus:ring-[#D03412] ${
                        validationErrors.email ? "border-[#D03412]" : "border-[#D03412]/40"
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[11px] font-mono text-[#D03412]">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Estimated Budget Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold">
                    6. Estimated Project Budget <span className="text-[#D03412]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`interactive p-3 text-left rounded-sm border text-xs font-mono transition-all flex items-center justify-between ${
                          formData.budget === opt
                            ? "bg-[#7C1117] border-[#D03412] ring-1 ring-[#D03412] text-white font-bold"
                            : "bg-[#7C1117]/60 border-[#D03412]/20 text-[#F8F3EF]/70 hover:border-[#D03412]/60"
                        }`}
                      >
                        <span>{opt}</span>
                        {formData.budget === opt && (
                          <span className="w-2 h-2 rounded-full bg-[#D03412]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-description"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F8F3EF] font-bold"
                  >
                    7. Project Description &amp; Objectives <span className="text-[#D03412]">*</span>
                  </label>
                  <textarea
                    id="contact-description"
                    rows={4}
                    placeholder="Tell us about the brand, your target audience, timeline, or key objectives..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full bg-[#7C1117] border rounded-sm p-3.5 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:ring-1 focus:ring-[#D03412] leading-relaxed resize-y ${
                      validationErrors.description ? "border-[#D03412]" : "border-[#D03412]/40"
                    }`}
                  />
                  {validationErrors.description && (
                    <p className="text-[11px] font-mono text-[#D03412]">
                      {validationErrors.description}
                    </p>
                  )}
                </div>

                {/* Submit Row */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D03412]/20">
                  <div className="text-[11px] font-mono text-[#F8F3EF]/60 flex items-center gap-2">
                    <Sparkles size={12} className="text-[#D03412]" />
                    <span>Direct senior review · 24-hour response guaranteed</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="interactive w-full sm:w-auto px-8 py-4 bg-[#D03412] hover:bg-[#b02a0e] disabled:opacity-50 text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#D03412]/30"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>TRANSMITTING BRIEF...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT PROJECT BRIEF</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels, WhatsApp Card & Studio Information */}
          <div className="lg:col-span-4 space-y-6">
            {/* WhatsApp Direct Enquiry Card */}
            <div className="bg-[#8D161D] border border-[#D03412]/40 rounded-sm p-6 sm:p-8 shadow-2xl space-y-5 paper-grain">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-editorial uppercase tracking-wider text-[#F8F3EF]">
                    WHATSAPP ENQUIRY DESK
                  </h4>
                  <span className="text-[10px] font-mono uppercase text-[#34D399] tracking-widest font-bold">
                    DIRECT STRATEGY CHAT
                  </span>
                </div>
              </div>

              <p className="text-xs font-mono text-[#F8F3EF]/80 leading-relaxed">
                Prefer a quick chat before submitting a full brief? Message our studio directly on WhatsApp to check timeline availability.
              </p>

              {isWhatsAppConfigured ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageCircle size={15} />
                  <span>CHAT ON WHATSAPP</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <div className="p-3 bg-[#7C1117] border border-[#D03412]/30 rounded-sm text-[11px] font-mono text-[#F8F3EF]/75">
                  <span className="text-[#D03412] font-bold block mb-1">DIRECT WHATSAPP CHANNEL:</span>
                  Number verification pending configuration. Use the project brief form to the left for immediate dispatch.
                </div>
              )}
            </div>

            {/* Studio Operating Commitments */}
            <div className="bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-6 space-y-4 paper-grain">
              <div className="flex justify-between items-center border-b border-[#D03412]/20 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">
                  STUDIO COMMITMENT
                </span>
                <HanddrawnSmiley className="w-6 h-6 text-[#D03412]" />
              </div>

              <ul className="space-y-2.5 text-xs font-mono text-[#F8F3EF]/75">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D03412] mt-1.5 shrink-0" />
                  <span>No pitch decks, no retainer lock-in pressure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D03412] mt-1.5 shrink-0" />
                  <span>Fixed-scope proposals agreed before kickoff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D03412] mt-1.5 shrink-0" />
                  <span>Direct communication with the creators doing the work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D03412] mt-1.5 shrink-0" />
                  <span>Based in India. Working with ambitious brands worldwide.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
