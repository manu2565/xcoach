"use client";

import Image from "next/image";
import {
  Award,
  Users,
  Star,
  Dumbbell,
} from "lucide-react";

export default function TrainerAbout() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* Image Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1400&auto=format&fit=crop"
                alt="Trainer"
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-6 rounded-3xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 fill-orange text-orange" />
                <div>
                  <h4 className="font-bold text-navy">4.9/5 Rating</h4>
                  <p className="text-sm text-navy/60">
                    Based on 180+ Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
              About Trainer
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold text-navy sm:text-5xl">
              Helping Clients Build
              <span className="block text-teal-dark">
                Sustainable Fitness Habits
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              Rahul Sharma is a certified fitness professional with over
              8 years of experience helping individuals achieve weight
              loss, muscle gain, strength improvement, and overall
              wellness. His coaching approach combines science-backed
              training methods with personalized guidance to ensure
              long-term success.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-navy/70">
              From busy professionals and beginners to advanced fitness
              enthusiasts, Rahul has successfully coached hundreds of
              clients across Delhi NCR through customized training
              programs.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-100 p-5 shadow-lg shadow-black/5">
                <Users className="h-8 w-8 text-orange" />
                <h3 className="mt-3 text-3xl font-extrabold text-navy">
                  500+
                </h3>
                <p className="text-sm text-navy/60">
                  Clients Trained
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 p-5 shadow-lg shadow-black/5">
                <Award className="h-8 w-8 text-orange" />
                <h3 className="mt-3 text-3xl font-extrabold text-navy">
                  8+
                </h3>
                <p className="text-sm text-navy/60">
                  Years Experience
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 p-5 shadow-lg shadow-black/5">
                <Dumbbell className="h-8 w-8 text-orange" />
                <h3 className="mt-3 text-3xl font-extrabold text-navy">
                  3000+
                </h3>
                <p className="text-sm text-navy/60">
                  Sessions Completed
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 p-5 shadow-lg shadow-black/5">
                <Star className="h-8 w-8 text-orange" />
                <h3 className="mt-3 text-3xl font-extrabold text-navy">
                  4.9
                </h3>
                <p className="text-sm text-navy/60">
                  Average Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}