"use client";

import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Amit Verma",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    rating: 5,
    review:
      "I lost 15kg in 4 months. The workouts were practical, motivating, and easy to follow.",
  },
  {
    name: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    rating: 5,
    review:
      "Professional, punctual and highly knowledgeable. Every session felt personalized.",
  },
  {
    name: "Rohit Gupta",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    rating: 5,
    review:
      "The strength program completely changed my fitness level within a few months.",
  },
];

export default function TrainerReviews() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Client Reviews
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold text-navy sm:text-5xl">
            What Clients Say
            <span className="block text-teal-dark">
              About This Trainer
            </span>
          </h2>
        </div>

        {/* Review Summary */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* Left */}
          <div className="rounded-[32px] bg-gradient-to-br from-navy to-teal-dark p-10 text-white">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-orange text-orange"
                />
              ))}
            </div>

            <h3 className="mt-5 text-6xl font-extrabold">
              4.9
            </h3>

            <p className="mt-3 text-white/70">
              Average Rating from 180+ verified client reviews.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div>
                <h4 className="text-3xl font-bold">
                  180+
                </h4>
                <p className="text-white/70">
                  Reviews
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">
                  96%
                </h4>
                <p className="text-white/70">
                  Repeat Clients
                </p>
              </div>
            </div>
          </div>

          {/* Featured Review */}
          <div className="rounded-[32px] bg-cream p-10">
            <Quote className="h-12 w-12 text-orange" />

            <p className="mt-6 text-xl leading-relaxed text-navy">
              Rahul helped me lose over 18kg and completely
              transformed my lifestyle. The sessions were
              challenging, motivating, and perfectly tailored
              to my schedule.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
                alt="Client"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h4 className="font-bold text-navy">
                  Amit Verma
                </h4>

                <p className="text-sm text-navy/60">
                  Lost 18kg in 5 Months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-[28px] border border-gray-100 bg-white p-7 shadow-lg shadow-black/5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-navy">
                    {review.name}
                  </h4>

                  <div className="mt-1 flex">
                    {Array.from({ length: review.rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-orange text-orange"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-navy/70">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}