import { Wallet, TrendingUp, CalendarCheck, BadgeCheck } from "lucide-react";

const WHY_JOIN = [
  {
    icon: Wallet,
    title: "Competitive Compensation",
    desc: "Competitive rates and rewards for punctuality and client retention.",
  },
  {
    icon: TrendingUp,
    title: "Professional Development",
    desc: "Continuous coaching upgrades in kinesiology and client biomechanics.",
  },
  {
    icon: CalendarCheck,
    title: "Hassle-Free Scheduling",
    desc: "We handle marketing, bookings, and scheduling. You focus strictly on training.",
  },
];

const REQUIREMENTS = [
  "Valid Fitness Certification (ACE, Gold's Gym, K11, B.P.Ed, or equivalent).",
  "Minimum 1-2 years of client handling or fitness center experience.",
  "Own transport vehicle (Two-wheeler preferred) for travel across Delhi NCR.",
];

export default function WhyJoinRequirements() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left — why join */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
              Why CoachKart
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Built for Trainers Who Want More
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70 sm:text-lg">
              We handle the logistics so you can focus on what you do
              best&mdash;coaching. Here&rsquo;s what joining the network
              looks like.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              {WHY_JOIN.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="lunge-mark is-teal h-12 w-12 shrink-0">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/65">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — requirements card */}
          <div className="flex flex-col rounded-3xl bg-navy p-7 text-white shadow-xl shadow-navy/20 sm:p-9">
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Requirements
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              A quick checklist before you apply.
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {REQUIREMENTS.map((req) => (
                <li key={req} className="flex gap-3">
                  <BadgeCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
