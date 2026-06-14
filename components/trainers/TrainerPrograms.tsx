"use client";

import {
  Dumbbell,
  Users,
  HeartPulse,
  Activity,
  Home,
  Laptop,
  ArrowRight,
} from "lucide-react";

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description:
      "1-on-1 customized fitness coaching designed around your goals and fitness level.",
  },
  {
    icon: Users,
    title: "Couple Training",
    description:
      "Train together with your partner and stay motivated throughout the journey.",
  },
  {
    icon: Home,
    title: "Home Fitness",
    description:
      "Professional coaching delivered directly to your home with personalized sessions.",
  },
  {
    icon: Activity,
    title: "Weight Loss Program",
    description:
      "Structured fat-loss coaching including workouts and progress tracking.",
  },
  {
    icon: HeartPulse,
    title: "Senior Fitness",
    description:
      "Safe and effective training focused on mobility, balance, and overall health.",
  },
  {
    icon: Laptop,
    title: "Online Coaching",
    description:
      "Virtual training sessions with customized plans and ongoing support.",
  },
];

export default function TrainerPrograms() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Programs Offered
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold text-navy sm:text-5xl">
            Coaching Programs
            <span className="block text-teal-dark">
              Tailored For Every Goal
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            Choose from a variety of personalized fitness programs
            designed to match your lifestyle, goals, and experience level.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-[30px] bg-white p-8 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal-dark text-white">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-navy">
                {title}
              </h3>

              <p className="mt-3 leading-relaxed text-navy/65">
                {description}
              </p>

              <div className="mt-6 flex items-center font-semibold text-orange">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Card */}
        <div className="mt-14 overflow-hidden rounded-[36px] bg-gradient-to-r from-navy via-navy-light to-teal-dark p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange">
                Most Popular
              </span>

              <h3 className="mt-5 text-4xl font-extrabold">
                Personal Training Program
              </h3>

              <p className="mt-4 text-white/75">
                Personalized workouts, nutrition guidance,
                progress tracking, and complete accountability
                to help you reach your fitness goals faster.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="text-4xl font-extrabold">
                  500+
                </h4>
                <p className="text-sm text-white/70">
                  Clients
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold">
                  4.9★
                </h4>
                <p className="text-sm text-white/70">
                  Rating
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold">
                  90%
                </h4>
                <p className="text-sm text-white/70">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}