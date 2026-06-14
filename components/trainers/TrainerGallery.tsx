"use client";

import { Camera, Image as ImageIcon } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546484959-f5f8e7c1c2b5?q=80&w=1400&auto=format&fit=crop",
];

export default function TrainerGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            <Camera className="h-4 w-4" />
            Trainer Gallery
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
            Life, Training &
            <span className="block text-teal-dark">
              Fitness Moments
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-navy/70">
            A glimpse into real training sessions, client workouts,
            and fitness lifestyle moments.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="mt-16 columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[24px] break-inside-avoid"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

              <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
                <ImageIcon className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-14 rounded-[32px] bg-cream p-8 text-center">
          <h3 className="text-3xl font-extrabold text-navy">
            Real Training. Real Results.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-navy/70">
            Every session is documented with real client progress
            and transformation journeys.
          </p>
        </div>
      </div>
    </section>
  );
}