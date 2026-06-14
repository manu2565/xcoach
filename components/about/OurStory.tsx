// import { Quote } from "lucide-react";

// function FigureMark({ primary, accent }: { primary: string; accent: string }) {
//   return (
//     <g>
//       <circle cx="80" cy="70" r="24" fill={accent} />
//       <path d="M80 94 L80 185" stroke={primary} strokeWidth="18" strokeLinecap="round" />
//       <path d="M80 116 L22 158" stroke={primary} strokeWidth="15" strokeLinecap="round" />
//       <path d="M80 116 L158 94" stroke={primary} strokeWidth="15" strokeLinecap="round" />
//       <path d="M80 185 L28 262" stroke={primary} strokeWidth="18" strokeLinecap="round" />
//       <path d="M80 185 L135 262" stroke={primary} strokeWidth="18" strokeLinecap="round" />
//     </g>
//   );
// }

// export default function OurStory() {
//   return (
//     <section className="relative bg-white py-20 sm:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
//           {/* Left — narrative */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
//               Our Story
//             </span>
//             <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
//               Fitness That Comes to You
//             </h2>
//             <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
//               CoachKart began with a simple observation: the people who need
//               fitness the most&mdash;busy professionals, parents, and
//               seniors&mdash;are often the ones with the least time to chase
//               it. Commuting to a gym, waiting for equipment, and navigating
//               crowded class schedules can quietly become the reason people
//               give up before they even start.
//             </p>
//             <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
//               So we flipped the model. Instead of asking you to come to
//               fitness, we built a network of certified coaches who bring a
//               complete, structured session directly to your home&mdash;fully
//               equipped, perfectly timed, and tailored to your goals from day
//               one.
//             </p>

//             <blockquote className="mt-7 flex gap-4 rounded-2xl bg-teal-light p-5 sm:p-6">
//               <Quote
//                 className="h-7 w-7 shrink-0 text-teal-dark"
//                 aria-hidden="true"
//               />
//               <p className="font-display text-base font-semibold leading-relaxed text-navy sm:text-lg">
//                 We don&rsquo;t just train you. We show up, every session,
//                 until your goals become your habits.
//               </p>
//             </blockquote>
//           </div>

//           {/* Right — visual panel */}
//           <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-light to-teal-dark shadow-2xl shadow-navy/25 sm:rounded-[2.5rem]">
//             <div className="dot-grid absolute inset-0 text-white/10" aria-hidden="true" />
//             <svg
//               viewBox="0 0 400 500"
//               className="absolute inset-0 h-full w-full"
//               aria-hidden="true"
//             >
//               <circle cx="320" cy="90" r="150" fill="#14919B" opacity="0.18" />
//               <circle cx="70" cy="430" r="160" fill="#FF5A1F" opacity="0.16" />
//               <g transform="translate(110,90) scale(1.05)">
//                 <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
//               </g>
//             </svg>

//             <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
//                   <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
//                     60<span className="text-orange">min</span>
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
//                     Focused Sessions
//                   </p>
//                 </div>
//                 <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
//                   <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
//                     100<span className="text-orange">+</span>
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
//                     Certified Coaches
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { Quote } from "lucide-react";

export default function OurStory() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — narrative */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
              Our Story
            </span>

            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Fitness That Comes to You
            </h2>

            <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
              CoachKart began with a simple observation: the people who need
              fitness the most—busy professionals, parents, and seniors—are
              often the ones with the least time to chase it. Commuting to a
              gym, waiting for equipment, and navigating crowded class
              schedules can quietly become the reason people give up before
              they even start.
            </p>

            <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              So we flipped the model. Instead of asking you to come to
              fitness, we built a network of certified coaches who bring a
              complete, structured session directly to your home—fully
              equipped, perfectly timed, and tailored to your goals from day
              one.
            </p>

            <blockquote className="mt-7 flex gap-4 rounded-2xl bg-teal-light p-5 sm:p-6">
              <Quote
                className="h-7 w-7 shrink-0 text-teal-dark"
                aria-hidden="true"
              />
              <p className="font-display text-base font-semibold leading-relaxed text-navy sm:text-lg">
                We don&apos;t just train you. We show up, every session,
                until your goals become your habits.
              </p>
            </blockquote>
          </div>

          {/* Right — Image Panel */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20 sm:rounded-[2.5rem]">
            {/* Main Image */}
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
              alt="Personal Fitness Training"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

            {/* Decorative Glow */}
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-teal/20 blur-3xl" />
            <div className="absolute -left-8 bottom-10 h-32 w-32 rounded-full bg-orange/20 blur-3xl" />

            {/* Floating Badge */}
            <div className="absolute left-5 top-5 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Trusted By
              </p>
              <p className="text-lg font-bold text-navy">
                5,000+ Clients
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    60<span className="text-orange">min</span>
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                    Focused Sessions
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    100<span className="text-orange">+</span>
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                    Certified Coaches
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="absolute right-5 top-24 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xl font-bold text-navy">4.9★</p>
              <p className="text-xs text-gray-500">
                Average Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}