"use client";

import {
  MapPin,
  Navigation,
  CheckCircle2,
} from "lucide-react";

const AREAS = [
  "South Delhi",
  "West Delhi",
  "Dwarka",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Faridabad",
  "Ghaziabad",
];

export default function TrainerServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-teal/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Service Areas
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
            Available For
            <span className="block text-orange">
              Home Training Sessions
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            This trainer currently provides doorstep fitness coaching
            across multiple locations in Delhi NCR.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          
          {/* Map Style Visual */}
          <div className="relative overflow-hidden rounded-[36px]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
              alt="Service Areas"
              className="h-full min-h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-3xl font-extrabold text-white">
                  Delhi NCR Coverage
                </h3>

                <p className="mt-3 text-white/75">
                  Home visits available across major residential
                  communities and societies.
                </p>
              </div>
            </div>
          </div>

          {/* Areas Grid */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {AREAS.map((area) => (
                <div
                  key={area}
                  className="group rounded-[28px] border border-gray-100 bg-white p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
                      <MapPin className="h-7 w-7 text-orange" />
                    </div>

                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-navy">
                    {area}
                  </h3>

                  <p className="mt-2 text-sm text-navy/60">
                    Available for personal and home fitness sessions.
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 rounded-[32px] bg-gradient-to-r from-navy to-teal-dark p-8 text-white">
              <div className="flex items-start gap-4">
                <Navigation className="mt-1 h-8 w-8 text-orange" />

                <div>
                  <h3 className="text-2xl font-bold">
                    Flexible Travel Radius
                  </h3>

                  <p className="mt-3 text-white/75">
                    Depending on scheduling and demand, additional
                    nearby locations may also be accommodated.
                  </p>

                  <div className="mt-6 flex gap-8">
                    <div>
                      <h4 className="text-3xl font-extrabold">
                        8+
                      </h4>
                      <p className="text-white/70 text-sm">
                        Areas Covered
                      </p>
                    </div>

                    <div>
                      <h4 className="text-3xl font-extrabold">
                        500+
                      </h4>
                      <p className="text-white/70 text-sm">
                        Sessions Delivered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}