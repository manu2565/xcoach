import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "60", unit: "min", label: "Per Session" },
  { value: "100", unit: "+", label: "Certified Trainers" },
  { value: "24/7", unit: "", label: "Support Available" },
];

const RESULTS = [
  {
    title: "Personalized Fitness Assessments",
    desc: "Full biological intake, joint range check, and heart rate tracking on day one.",
  },
  {
    title: "Fat-Loss Tracking & Safe Form",
    desc: "Weekly metrics assessment targeting safe muscle conditioning and structural alignment.",
  },
  {
    title: "Customized Metabolic Scaling",
    desc: "Exercises dynamically configured to match daily energy levels and recovery indicators.",
  },
  {
    title: "Biometric Progress Audits",
    desc: "Frequent physical performance updates to adjust nutrition guidelines and workload metrics.",
  },
];

const CONCIERGE = [
  {
    title: "Elite Trainer Punctuality",
    desc: "Strict prompt-arrival rules — we value your busy calendar above everything.",
  },
  {
    title: "Zero-Equipment Hassle",
    desc: "We supply all essential gear (mats, bands, blocks) for a complete workout.",
  },
  {
    title: "Custom Space Optimization",
    desc: "No large workout spaces needed. We optimize coaching to fit your specific room sizes.",
  },
  {
    title: "Continuous Skill Vetting",
    desc: "Ongoing trainer upgrades in kinesiology, posture, and rehabilitation protocols.",
  },
];

function StandardsList({
  heading,
  items,
  accent,
}: {
  heading: string;
  items: { title: string; desc: string }[];
  accent: "teal" | "orange";
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
        {heading}
      </h3>
      <ol className="mt-6 flex flex-col gap-5">
        {items.map((item, i) => (
          <li key={item.title} className="flex gap-4">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-extrabold ${
                accent === "teal"
                  ? "bg-teal/20 text-teal"
                  : "bg-orange/20 text-orange"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-display text-base font-bold text-white">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Standards() {
  return (
    <section
      id="standards"
      className="relative bg-navy py-20 text-white sm:py-28"
    >
      {/* Decorative dot grid */}
      <div
        className="dot-grid pointer-events-none absolute -left-20 top-10 h-72 w-72 text-white/5 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Our Quality Standards
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Elite protocols, engineered for results
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            Elite health protocols engineered for fast, safe, and measurable
            results.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center"
            >
              <p className="font-display text-4xl font-extrabold text-teal sm:text-5xl">
                {stat.value}
                <span className="text-orange">{stat.unit}</span>
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 sm:gap-10">
          <StandardsList
            heading="Results-Driven Progression"
            items={RESULTS}
            accent="teal"
          />
          <StandardsList
            heading="Premium Concierge Service"
            items={CONCIERGE}
            accent="orange"
          />
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark active:scale-[0.98]"
          >
            Book ₹299 Demo Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
