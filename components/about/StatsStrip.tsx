const STATS = [
  { value: "60", unit: "min", label: "Focused Sessions" },
  { value: "100", unit: "+", label: "Certified Coaches" },
  { value: "24/7", unit: "", label: "Support Available" },
  { value: "5", unit: "", label: "Cities in Delhi NCR" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-teal-light py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white px-4 py-6 text-center shadow-sm shadow-navy/5 sm:px-6 sm:py-8"
            >
              <p className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                {stat.value}
                <span className="text-orange">{stat.unit}</span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-navy/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
