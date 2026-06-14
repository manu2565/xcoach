"use client";

import { MessageCircle, CalendarCheck, Zap } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918595596066?text=Hi%20I%20want%20to%20book%20a%20trial%20session%20with%20this%20trainer.";

export default function ApplyCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy via-navy-light to-teal-dark py-20 sm:py-28">

      {/* Glow effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
          <Zap className="h-4 w-4 text-orange" />
          Ready to Start
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
          Book Your First
          <span className="block text-orange">
            Trial Session Today
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Start your fitness journey with a certified trainer at your home.
          Get personalized guidance and real results from day one.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-bold text-white shadow-lg transition hover:scale-105 hover:bg-orange-dark"
          >
            <MessageCircle className="h-5 w-5" />
            Book via WhatsApp
          </a>

          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20">
            <CalendarCheck className="h-5 w-5" />
            Check Availability
          </button>

        </div>

        {/* Small info */}
        <p className="mt-8 text-sm text-white/60">
          ⚡ Response within 24 hours • Certified Trainers • Home Sessions Available
        </p>

      </div>
    </section>
  );
}