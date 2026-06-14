"use client";

import { Play, Award, Users, Star } from "lucide-react";

export default function TrainerVideoIntro() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Video Side */}
          <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
              alt="Trainer Introduction"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* Play Button */}
            <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl transition hover:scale-110">
              <Play
                className="ml-1 h-10 w-10 text-orange"
                fill="currentColor"
              />
            </button>

            {/* Duration */}
            <div className="absolute bottom-6 right-6 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              2:35 Introduction
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
              Meet Your Coach
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
              Get To Know
              <span className="block text-teal-dark">
                Your Fitness Coach
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              Watch a short introduction from your trainer and learn
              about coaching philosophy, fitness expertise, client
              success stories, and what to expect from your sessions.
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-orange" />
                <div>
                  <h3 className="font-bold text-navy">
                    Certified Professional
                  </h3>
                  <p className="text-sm text-navy/60">
                    Internationally recognized fitness credentials
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-orange" />
                <div>
                  <h3 className="font-bold text-navy">
                    500+ Clients Trained
                  </h3>
                  <p className="text-sm text-navy/60">
                    Across weight loss, strength & wellness goals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Star className="h-8 w-8 text-orange" />
                <div>
                  <h3 className="font-bold text-navy">
                    4.9 Average Rating
                  </h3>
                  <p className="text-sm text-navy/60">
                    Trusted by hundreds of happy clients
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 rounded-full bg-orange px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-orange-dark">
              Watch Introduction
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}