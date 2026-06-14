"use client";

import { ArrowUpRight } from "lucide-react";

const TRANSFORMATIONS = [
  {
    name: "Amit Sharma",
    result: "Lost 18kg in 5 Months",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Priya Verma",
    result: "Strength & Fat Loss",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rahul Gupta",
    result: "Muscle Gain Journey",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Neha Singh",
    result: "12kg Weight Loss",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TrainerTransformations() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Client Results
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold text-navy sm:text-5xl">
            Real People.
            <span className="block text-teal-dark">
              Real Transformations.
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            A glimpse into the journeys of clients who achieved
            measurable results through consistent coaching and
            personalized fitness plans.
          </p>
        </div>

        {/* Featured Transformation */}
        <div className="mt-16 overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop"
                alt="Transformation"
                className="h-full min-h-[450px] w-full object-cover"
              />

              <div className="absolute left-6 top-6 rounded-full bg-orange px-4 py-2 text-sm font-bold text-white">
                Featured Success Story
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="text-3xl font-extrabold text-navy">
                Lost 22kg & Rebuilt Confidence
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-navy/70">
                Through structured strength training, nutrition
                guidance, and weekly progress reviews, this client
                transformed both physically and mentally in less than
                six months.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-3xl font-extrabold text-orange">
                    22kg
                  </h4>
                  <p className="text-sm text-navy/60">
                    Weight Lost
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-extrabold text-orange">
                    6
                  </h4>
                  <p className="text-sm text-navy/60">
                    Months
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-extrabold text-orange">
                    100%
                  </h4>
                  <p className="text-sm text-navy/60">
                    Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="h-5 w-5 text-navy" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-navy">
                  {item.name}
                </h3>

                <p className="mt-2 text-orange font-semibold">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-extrabold text-navy">
              500+
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Clients Trained
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-extrabold text-navy">
              85%
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Goal Achievement Rate
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-extrabold text-navy">
              4.9★
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}