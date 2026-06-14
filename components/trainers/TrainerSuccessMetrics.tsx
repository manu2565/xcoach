"use client";

import {
  TrendingUp,
  Dumbbell,
  HeartPulse,
  Users,
  Trophy,
  Target,
} from "lucide-react";

const METRICS = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Coached",
  },
  {
    icon: Trophy,
    value: "8+",
    label: "Years Experience",
  },
  {
    icon: Target,
    value: "85%",
    label: "Goal Achievement Rate",
  },
  {
    icon: HeartPulse,
    value: "4.9★",
    label: "Average Rating",
  },
];

export default function TrainerSuccessMetrics() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Success Metrics
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
            Proven Results
            <span className="block text-teal-dark">
              Backed By Real Numbers
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            Performance indicators collected from client journeys,
            transformation programs, and coaching outcomes.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[30px] bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal-dark text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-5xl font-extrabold text-navy">
                  {item.value}
                </h3>

                <p className="mt-2 text-navy/65">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Performance Dashboard */}
        <div className="mt-14 overflow-hidden rounded-[40px] bg-gradient-to-r from-navy via-navy-light to-teal-dark">
          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 lg:p-14 text-white">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange">
                Performance Overview
              </span>

              <h3 className="mt-6 text-4xl font-extrabold">
                Helping Clients Reach
                Their Fitness Goals Faster
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Every coaching plan is built around measurable
                progress, accountability, and long-term fitness
                sustainability.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-orange" />
                <span className="text-lg font-semibold">
                  Consistent Growth Across All Programs
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="p-10 lg:p-14">
              <div className="space-y-6">

                <div>
                  <div className="mb-2 flex justify-between text-white">
                    <span>Weight Loss Success</span>
                    <span>92%</span>
                  </div>

                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[92%] rounded-full bg-orange" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-white">
                    <span>Muscle Gain Programs</span>
                    <span>88%</span>
                  </div>

                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[88%] rounded-full bg-orange" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-white">
                    <span>Client Retention</span>
                    <span>95%</span>
                  </div>

                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[95%] rounded-full bg-orange" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-white">
                    <span>Overall Satisfaction</span>
                    <span>98%</span>
                  </div>

                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[98%] rounded-full bg-orange" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 rounded-[32px] bg-cream p-8 text-center">
          <Dumbbell className="mx-auto h-10 w-10 text-orange" />

          <p className="mx-auto mt-5 max-w-3xl text-xl font-semibold text-navy">
            "Fitness success isn't about perfection. It's about
            consistency, accountability, and having the right coach
            beside you."
          </p>
        </div>

      </div>
    </section>
  );
}