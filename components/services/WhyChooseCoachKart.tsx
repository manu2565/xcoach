"use client";
const FEATURES = [
  {
    title: "Certified Personal Coaches",
    description:
      "Professionally certified trainers matched to your fitness goals and experience level.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Train At Home",
    description:
      "No commuting, no crowded gyms. Enjoy professional fitness sessions in your own space.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Morning, evening, or weekend sessions that fit around your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
];
export default function WhyChooseCoachKart() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-navy">
            Fitness Designed Around You
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[28px] bg-white shadow-xl transition hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-navy/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}