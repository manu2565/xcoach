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

function List({
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
      <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
        {heading}
      </h3>
      <ol className="mt-6 flex flex-col gap-5">
        {items.map((item, i) => (
          <li key={item.title} className="flex gap-4">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-extrabold ${
                accent === "teal"
                  ? "bg-teal-light text-teal-dark"
                  : "bg-orange-light text-orange-dark"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-display text-base font-bold text-navy">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-navy/60">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function StandardsLists() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
            The CoachKart Standard
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Every Session, Held to the Same Bar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Two pillars guide every coach in our network: measurable results,
            and a premium concierge-style experience.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-10">
          <List heading="Results-Driven Progression" items={RESULTS} accent="teal" />
          <List heading="Premium Concierge Service" items={CONCIERGE} accent="orange" />
        </div>
      </div>
    </section>
  );
}
