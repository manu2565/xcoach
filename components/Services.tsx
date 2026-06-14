import { User, Users, Heart, Dumbbell, Check, ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    icon: User,
    accent: "is-orange" as const,
    title: "1-on-1 Personal Training",
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
    points: [
      "Yoga sessions for balance & flexibility",
      "Cardio-intensive Zumba & Dance workouts",
      "Strength coaching & bodyweight calisthenics",
      "Athletic sports training for active lifestyles",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-teal-light py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Our Programs
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Flexible fitness, delivered to your doorstep
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Flexible fitness solutions designed for your lifestyle, delivered
            right to your doorstep.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROGRAMS.map(({ icon: Icon, accent, title, points }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm shadow-navy/5 transition-shadow hover:shadow-lg hover:shadow-navy/10 sm:p-7"
            >
              <div className={`lunge-mark ${accent} h-12 w-12`}>
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">
                {title}
              </h3>
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

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-light active:scale-[0.98]"
          >
            Book ₹299 Demo Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
