import { User, Users, Heart, Dumbbell, Check } from "lucide-react";

const PROGRAMS = [
  {
    icon: User,
    accent: "is-orange" as const,
    title: "1-on-1 Personal Training",
    bestFor: "Focused fat loss & strength goals",
    desc: "A dedicated coach designs and adapts your plan every week based on real progress data — built around your body, not a template.",
    points: [
      "Dedicated focus with customized attention",
      "Specialized Fat Loss & Muscle Toning",
      "Weekly checks & performance tracking",
    ],
  },
  {
    icon: Users,
    accent: "is-teal" as const,
    title: "Small Group / Society Training",
    bestFor: "Societies & friend groups (5–10 people)",
    desc: "Bring the energy of a fitness studio to your complex's lawn or clubhouse, split across a small group at a fraction of the individual cost.",
    points: [
      "5–10 members per society group",
      "Fun, high-energy community environment",
      "Cost-effective lifestyle scaling models",
    ],
  },
  {
    icon: Heart,
    accent: "is-navy" as const,
    title: "Family & Kids Fitness",
    bestFor: "Multi-generational households",
    desc: "From energetic kids to senior parents, sessions are structured so every family member gets movement suited to their level.",
    points: [
      "Healthy, active family bonding sessions",
      "Engaging, kids-friendly workout plans",
      "Building healthy, sustainable movement habits",
    ],
  },
  {
    icon: Dumbbell,
    accent: "is-orange" as const,
    title: "Versatile Doorstep Coaching",
    bestFor: "Variety seekers & active athletes",
    desc: "Mix and match disciplines across the week — never get bored, and keep your body adapting to new challenges.",
    points: [
      "Yoga sessions for balance & flexibility",
      "Cardio-intensive Zumba & Dance workouts",
      "Strength coaching & bodyweight calisthenics",
      "Athletic sports training for active lifestyles",
    ],
  },
];

export default function ProgramsGrid() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Our Programs
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A Program for Every Goal &amp; Household
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Every program is delivered by certified coaches, fully equipped,
            and structured around a 60-minute session.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map(({ icon: Icon, accent, title, bestFor, desc, points }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl border border-navy/5 bg-cream p-6 shadow-sm shadow-navy/5 transition-shadow hover:shadow-lg hover:shadow-navy/10 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`lunge-mark ${accent} h-12 w-12 shrink-0`}>
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-teal-light px-3 py-1 text-right text-xs font-bold text-teal-dark">
                  {bestFor}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {desc}
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-navy/70"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
