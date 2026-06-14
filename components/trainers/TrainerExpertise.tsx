"use client";

import {
  Dumbbell,
  Activity,
  HeartPulse,
  Flame,
  ShieldCheck,
  Users,
} from "lucide-react";

const EXPERTISE = [
  {
    icon: Flame,
    title: "Weight Loss",
    description:
      "Structured fat-loss programs focused on sustainable results and healthy lifestyle changes.",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building",
    description:
      "Strength-based training programs designed for muscle growth and improved physique.",
  },
  {
    icon: Activity,
    title: "Functional Fitness",
    description:
      "Improve mobility, endurance, flexibility, and overall body performance.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Conditioning",
    description:
      "Boost stamina, cardiovascular health, and athletic performance.",
  },
  {
    icon: ShieldCheck,
    title: "Senior Fitness",
    description:
      "Safe and effective training plans tailored for older adults and rehabilitation support.",
  },
  {
    icon: Users,
    title: "Group Training",
    description:
      "Family, couple, and society fitness sessions with engaging group workouts.",
  },
];

export default function TrainerExpertise() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Areas of Expertise
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Specialized Fitness
            <span className="block text-teal-dark">
              Coaching Programs
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Personalized coaching across multiple fitness disciplines,
            helping clients achieve specific health and performance goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {EXPERTISE.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-[28px] bg-white p-8 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal-dark text-white transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-navy">
                {title}
              </h3>

              <p className="mt-3 leading-relaxed text-navy/65">
                {description}
              </p>

              <div className="mt-5 h-1 w-0 rounded-full bg-orange transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}