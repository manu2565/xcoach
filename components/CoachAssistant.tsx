"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

export default function CoachAssistant() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange to-orange-600 text-white shadow-[0_10px_40px_rgba(255,90,31,.4)] transition hover:scale-110"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[320px] overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-[0_20px_80px_rgba(0,0,0,.18)] backdrop-blur-xl">
      
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#0F2C4A] to-[#14919B] p-5 text-white">
        
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-full p-1 hover:bg-white/10"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-semibold">
            Coach Available Now
          </span>
        </div>

        <h4 className="mt-3 text-xl font-bold">
          Need Fitness Guidance?
        </h4>

        <p className="mt-2 text-sm text-white/80">
          Connect with a certified CoachKart trainer and get a personalized fitness plan.
        </p>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="mb-4 rounded-2xl bg-green-50 p-3 text-sm text-green-700">
          ⚡ Average response time: Under 2 minutes
        </div>

        <div className="grid grid-cols-2 gap-3">
          
          <a
            href="https://wa.me/918595596066"
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 font-semibold text-white transition hover:scale-105"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="tel:+918595596066"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#0F2C4A] px-4 py-3 font-semibold text-white transition hover:scale-105"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>
      </div>
    </div>
  );
}