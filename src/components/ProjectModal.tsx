"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send, Loader2, MessageCircle, AlertCircle, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useModalChrome } from "./useModalChrome";
import { getWhatsAppUrl } from "@/lib/business-config";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_LIST = [
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

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadRef, setLeadRef] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Website Development"]);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatsappNumber: "",
    email: "",
    budget: "$1,500 – $3,500 / ₹1L – ₹3L",
    description: "",
    _hp: "",
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useModalChrome(isOpen, onClose);
  const { url: whatsappUrl, isConfigured: isWhatsAppConfigured } = getWhatsAppUrl();

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      const next = selectedServices.filter((s) => s !== service);
      setSelectedServices(next.length > 0 ? next : [service]);
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Valid business email required.";
    }
    const digits = formData.whatsappNumber.replace(/[^0-9]/g, "");
    if (!formData.whatsappNumber.trim() || digits.length < 7) {
      errs.whatsappNumber = "Valid WhatsApp number required.";
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = "Please describe goals in at least 10 characters.";
    }
    if (selectedServices.length === 0) {
      errs.services = "Select at least one service.";
    }
    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please try again.");
        if (data.errors) setValidationErrors(data.errors);
        return;
      }

      setStatus("success");
      setLeadRef(data.leadRef || "OKS-CONFIRMED");

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D03412", "#F8F3EF", "#8D161D"],
        });
      } catch {
        // Fallback
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again or message via WhatsApp.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
      setValidationErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#111111]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#8D161D] border border-[#D03412]/40 p-6 md:p-8 rounded-sm shadow-2xl z-10 my-auto text-[#F8F3EF] overflow-hidden paper-grain max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-[#F8F3EF]/70 hover:text-[#D03412] transition-colors"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {status === "success" ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#D03412] mx-auto animate-bounce" />
                <span className="text-xs font-mono tracking-widest text-[#D03412] uppercase font-bold block">
                  REF: {leadRef}
                </span>
                <h3 className="text-3xl font-editorial tracking-wider">PROJECT BRIEF TRANSMITTED</h3>
                <p className="text-sm font-mono text-[#F8F3EF]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our creative director will review your requirements for <strong className="text-white">{formData.businessName}</strong> and reply within 24 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {isWhatsAppConfigured && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive px-5 py-2.5 bg-[#25D366] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center gap-2"
                    >
                      <MessageCircle size={14} />
                      <span>WHATSAPP CHAT</span>
                    </a>
                  )}

                  <button
                    onClick={handleClose}
                    className="interactive px-5 py-2.5 bg-[#D03412] text-[#F8F3EF] font-mono text-xs uppercase tracking-wider font-bold rounded-sm"
                  >
                    DONE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#D03412] uppercase block mb-1 font-bold">
                    START A PROJECT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-editorial uppercase leading-tight">
                    LET&apos;S BUILD SOMETHING OUTKAST.
                  </h3>
                  <p className="text-xs font-mono text-[#F8F3EF]/75 mt-1">
                    Direct review by senior creative team. 24-hour turnaround on project feasibility.
                  </p>
                </div>

                {status === "error" && (
                  <div className="p-3 bg-[#5C0F14] border border-[#D03412] rounded-sm flex items-center gap-2 text-xs font-mono text-[#F8F3EF]">
                    <AlertCircle size={16} className="text-[#D03412] shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block font-bold">
                    Required Service(s) *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_LIST.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`interactive text-[11px] font-mono uppercase px-3 py-1.5 rounded-sm border transition-all ${
                            isSelected
                              ? "bg-[#D03412] text-white border-[#D03412] font-bold"
                              : "bg-[#7C1117] text-[#F8F3EF]/70 border-[#D03412]/30 hover:border-[#D03412]"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-3 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:border-[#D03412]"
                    />
                    {validationErrors.name && (
                      <p className="text-[10px] font-mono text-[#D03412]">{validationErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your brand or venture"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-3 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:border-[#D03412]"
                    />
                    {validationErrors.businessName && (
                      <p className="text-[10px] font-mono text-[#D03412]">{validationErrors.businessName}</p>
                    )}
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-3 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:border-[#D03412]"
                    />
                    {validationErrors.whatsappNumber && (
                      <p className="text-[10px] font-mono text-[#D03412]">{validationErrors.whatsappNumber}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-3 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:border-[#D03412]"
                    />
                    {validationErrors.email && (
                      <p className="text-[10px] font-mono text-[#D03412]">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block">
                    Estimated Budget *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-3 text-xs font-mono text-[#F8F3EF] focus:outline-none focus:border-[#D03412]"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b} className="bg-[#7C1117]">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#F8F3EF]/80 block">
                    Project Goals *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your goals, timeline, or current challenges..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#7C1117] border border-[#D03412]/30 rounded-sm p-3 text-xs font-mono text-[#F8F3EF] placeholder-[#F8F3EF]/40 focus:outline-none focus:border-[#D03412] resize-y"
                  />
                  {validationErrors.description && (
                    <p className="text-[10px] font-mono text-[#D03412]">{validationErrors.description}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {isWhatsAppConfigured && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive text-xs font-mono text-[#25D366] hover:underline flex items-center gap-1.5"
                    >
                      <MessageCircle size={14} />
                      <span>Prefer WhatsApp instead?</span>
                    </a>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="interactive w-full sm:w-auto ml-auto px-6 py-3 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#D03412]/30 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>SUBMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT BRIEF</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
