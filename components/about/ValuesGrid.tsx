import {
  ShieldCheck,
  Award,
  Home,
  Clock,
  Target,
  Heart,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Consistency Over Intensity",
    desc: "Sustainable routines beat short bursts. We focus on habits that stick long after the session ends.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    desc: "Every trainer holds verified fitness certifications and undergoes ongoing skill audits.",
  },
  {
    icon: Home,
    title: "Doorstep Convenience",
    desc: "Zero commute, zero equipment hassle — we bring everything needed straight to you.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    desc: "Your time matters. Our coaches arrive on schedule, session after session.",
  },
  {
    icon: Target,
    title: "Personalized Programming",
    desc: "Plans built around your assessment, goals, and recovery — never generic templates.",
  },
  {
    icon: Heart,
    title: "Community & Family Wellness",
    desc: "From kids to seniors, we design programs for every member of your household.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div
        className="dot-grid pointer-events-none absolute -left-20 top-10 h-72 w-72 text-white/5 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
            What We Stand For
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Values That Shape Every Session
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div
                className={`lunge-mark ${
                  i % 2 === 0 ? "is-teal" : "is-orange"
                } h-12 w-12`}
              >
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
