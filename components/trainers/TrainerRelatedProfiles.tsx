"use client";

import { Star, MapPin, ArrowRight } from "lucide-react";

const TRAINERS = [
  {
    id: 1,
    name: "Rahul Sharma",
    specialty: "Weight Loss & Strength Training",
    rating: "4.9",
    experience: "8 Years",
    location: "South Delhi",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ankit Verma",
    specialty: "Muscle Building Expert",
    rating: "4.8",
    experience: "7 Years",
    location: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Priya Mehra",
    specialty: "Women's Fitness Coach",
    rating: "5.0",
    experience: "6 Years",
    location: "Noida",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TrainerRelatedProfiles() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Similar Trainers
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
            Explore More
            <span className="block text-teal-dark">
              Fitness Experts
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-navy/70">
            Discover other highly rated trainers who can help you
            achieve your fitness goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-navy shadow">
                  ⭐ {trainer.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-navy">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-orange font-semibold">
                  {trainer.specialty}
                </p>

                <div className="mt-5 flex items-center gap-2 text-navy/60">
                  <MapPin className="h-4 w-4" />
                  {trainer.location}
                </div>

                <div className="mt-2 text-navy/60">
                  Experience: {trainer.experience}
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-orange transition group-hover:gap-3"
                >
                  View Profile
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/trainers"
            className="inline-flex items-center rounded-full bg-navy px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            View All Trainers
          </a>
        </div>
      </div>
    </section>
  );
}