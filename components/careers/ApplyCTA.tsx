// import { MessageCircle } from "lucide-react";

// const APPLY_URL =
//   "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20am%20a%20certified%20trainer%20and%20I%27d%20like%20to%20apply%20to%20join%20your%20network.";

// export default function ApplyCTA() {
//   return (
//     <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
//       <div
//         className="dot-grid pointer-events-none absolute inset-0 text-white/[0.04]"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-45 rounded-3xl bg-teal/15 sm:h-80 sm:w-80"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
//         <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
//           Ready to Train With CoachKart?
//         </h2>
//         <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
//           Send us your certification and availability on WhatsApp — our team
//           typically responds within a day.
//         </p>

//         <a
//           href={APPLY_URL}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-colors hover:bg-orange-dark active:scale-[0.98]"
//         >
//           <MessageCircle className="h-5 w-5" aria-hidden="true" />
//           Apply Now via WhatsApp
//         </a>
//       </div>
//     </section>
//   );
// }

import {
  MessageCircle,
  ArrowRight,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

const APPLY_URL =
  "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20am%20a%20certified%20trainer%20and%20I%27d%20like%20to%20apply%20to%20join%20your%20network.";

export default function ApplyCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-teal-dark" />

      {/* Glow Effects */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="grid items-center gap-12 p-8 sm:p-10 lg:grid-cols-2 lg:p-14">
            
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
                Join CoachKart
              </span>

              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                Ready to Train
                <span className="block text-orange">
                  With CoachKart?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Become part of a growing network of certified fitness
                professionals. Get matched with clients near you, enjoy
                flexible scheduling, and build a rewarding coaching career.
              </p>

              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-bold text-white shadow-xl shadow-orange/30 transition-all duration-300 hover:scale-105 hover:bg-orange-dark"
              >
                <MessageCircle className="h-5 w-5" />
                Apply Now via WhatsApp

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Stats */}
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange">
                    <Award className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      100+
                    </h3>
                    <p className="text-sm text-white/65">
                      Certified Coaches
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-dark">
                    <Users className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      5000+
                    </h3>
                    <p className="text-sm text-white/65">
                      Sessions Delivered
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange">
                    <Briefcase className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      Flexible
                    </h3>
                    <p className="text-sm text-white/65">
                      Work Schedule
                    </p>
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