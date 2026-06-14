"use client";

import {
  Trophy,
  Medal,
  Award,
  Target,
  Star,
  Users,
} from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Users,
    value: "500+",
    title: "Clients Trained",
  },
  {
    icon: Trophy,
    value: "8+",
    title: "Years Experience",
  },
  {
    icon: Target,
    value: "85%",
    title: "Goal Success Rate",
  },
  {
    icon: Star,
    value: "4.9",
    title: "Average Rating",
  },
];

export default function TrainerAchievements() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Achievements
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
            Proven Performance &
            <span className="block text-teal-dark">
              Professional Excellence
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            Consistent client success, verified credentials, and years of
            professional coaching experience.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-navy via-navy-light to-teal-dark">
          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 lg:p-14 text-white">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange">
                Top Rated Trainer
              </span>

              <h3 className="mt-6 text-4xl font-extrabold">
                Delivering Results
                Since Day One
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Dedicated to helping clients achieve sustainable
                fitness transformations through personalized coaching,
                accountability, and science-backed training methods.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">
                  <Award className="mb-2 h-6 w-6 text-orange" />
                  Certified Professional
                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">
                  <Medal className="mb-2 h-6 w-6 text-orange" />
                  Verified Coach
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-5 p-8 lg:p-12">
              {ACHIEVEMENTS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-white/10 p-6 backdrop-blur"
                  >
                    <Icon className="h-10 w-10 text-orange" />

                    <h4 className="mt-5 text-4xl font-extrabold text-white">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-white/70">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}