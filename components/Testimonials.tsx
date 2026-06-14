// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// const TESTIMONIALS = [
//   {
//     quote:
//       "The convenience and structure CoachKart brings is unmatched. I've been doing their Tailored Working Professional Fitness sessions with colleagues at home. Having Certified Elite Fitness Coaches show up right at our doorstep makes staying consistent effortless, helping us maintain high energy throughout our busy workdays.",
//     name: "Amit Malhotra",
//     meta: "Delhi · Small Group Society Training",
//     initials: "AM",
//   },
//   {
//     quote:
//       "Finding time for the gym was impossible with my corporate schedule. CoachKart's Luxury Home Training Experience changed everything. My trainer arrives exactly at 6:30 AM in Noida, and the 1-on-1 focus on Fat Loss & Muscle Toning has helped me lose 8 kgs, double my energy, and transform my daily lifestyle.",
//     name: "Priya Kapoor",
//     meta: "Noida · Personal Training",
//     initials: "PK",
//   },
//   {
//     quote:
//       "We started CoachKart's Family & Kids Fitness sessions on weekends and it's become the highlight of our week. Our coach keeps both our kids and us engaged with fun, age-appropriate routines. It's the easiest way we've found to build healthy habits together as a family.",
//     name: "Sanjana Verma",
//     meta: "Gurugram · Family & Kids Fitness",
//     initials: "SV",
//   },
//   {
//     quote:
//       "After a back injury, I was hesitant to restart any fitness routine. CoachKart's yoga coach designed a gentle, progressive plan focused on flexibility and posture correction. Within weeks, my mobility improved and the sessions fit perfectly into my evenings.",
//     name: "Rohan Singh",
//     meta: "Faridabad · Yoga & Flexibility",
//     initials: "RS",
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const goTo = useCallback((i: number) => {
//     setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
//   }, []);

//   useEffect(() => {
//     if (paused) return;
//     const t = setInterval(
//       () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
//       6000
//     );
//     return () => clearInterval(t);
//   }, [paused]);

//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-28">
//       <div
//         className="dot-grid pointer-events-none absolute -right-20 top-10 h-72 w-72 text-teal/10 sm:h-96 sm:w-96"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
//             What Our Clients Say
//           </span>
//           <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
//             Real results, real routines
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
//             Stories from working professionals and families across Delhi NCR.
//           </p>
//         </div>

//         {/* Slider */}
//         <div
//           className="relative mx-auto mt-12 max-w-3xl"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           <div className="lunge-mark is-orange absolute -top-6 left-6 h-12 w-12 sm:-top-7 sm:left-10 sm:h-14 sm:w-14">
//             <Quote className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden="true" />
//           </div>

//           <div className="relative overflow-hidden rounded-3xl border border-navy/5 bg-cream shadow-sm shadow-navy/5">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${index * 100}%)` }}
//             >
//               {TESTIMONIALS.map((t) => (
//                 <figure
//                   key={t.name}
//                   className="flex w-full shrink-0 flex-col p-7 pt-12 sm:p-10 sm:pt-14"
//                 >
//                   <div className="flex gap-1 text-orange" aria-hidden="true">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-current" />
//                     ))}
//                   </div>
//                   <blockquote className="mt-4 text-sm leading-relaxed text-navy/75 sm:text-base lg:text-lg">
//                     &ldquo;{t.quote}&rdquo;
//                   </blockquote>
//                   <figcaption className="mt-6 flex items-center gap-3">
//                     <span className="lunge-mark is-navy h-11 w-11 shrink-0">
//                       <span className="font-display text-sm font-bold text-white">
//                         {t.initials}
//                       </span>
//                     </span>
//                     <div>
//                       <p className="font-display text-sm font-bold text-navy">
//                         {t.name}
//                       </p>
//                       <p className="text-xs text-navy/55">{t.meta}</p>
//                     </div>
//                   </figcaption>
//                 </figure>
//               ))}
//             </div>
//           </div>

//           {/* Arrows */}
//           <button
//             type="button"
//             onClick={() => goTo(index - 1)}
//             aria-label="Previous testimonial"
//             className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md shadow-navy/10 transition-colors hover:bg-teal-light sm:-left-5"
//           >
//             <ChevronLeft className="h-5 w-5" aria-hidden="true" />
//           </button>
//           <button
//             type="button"
//             onClick={() => goTo(index + 1)}
//             aria-label="Next testimonial"
//             className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md shadow-navy/10 transition-colors hover:bg-teal-light sm:-right-5"
//           >
//             <ChevronRight className="h-5 w-5" aria-hidden="true" />
//           </button>

//           {/* Dots */}
//           <div className="mt-6 flex justify-center gap-2">
//             {TESTIMONIALS.map((t, i) => (
//               <button
//                 key={t.name}
//                 type="button"
//                 onClick={() => goTo(i)}
//                 aria-label={`Go to testimonial ${i + 1}: ${t.name}`}
//                 aria-current={i === index}
//                 className={`h-2.5 rounded-full transition-all ${
//                   i === index ? "w-8 bg-orange" : "w-2.5 bg-navy/15 hover:bg-navy/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { Star } from "lucide-react";

// const TESTIMONIALS = [
//   {
//     quote:
//       "The convenience and structure CoachKart brings is unmatched. I've been doing their Tailored Working Professional Fitness sessions with colleagues at home. Having Certified Elite Fitness Coaches show up right at our doorstep makes staying consistent effortless, helping us maintain high energy throughout our busy workdays.",
//     name: "Amit Malhotra",
//     meta: "Delhi · Small Group Society Training",
//     initials: "AM",
//   },
//   {
//     quote:
//       "Finding time for the gym was impossible with my corporate schedule. CoachKart's Luxury Home Training Experience changed everything. My trainer Priyanka arrives exactly at 6:30 AM in Noida, and the 1-on-1 focus on Fat Loss & Muscle Toning has helped me lose 8 kgs, double my energy, and transform my daily lifestyle.",
//     name: "Priya Kapoor",
//     meta: "Noida · Personal Training",
//     initials: "PK",
//   },

// ];

// export default function Testimonials() {
//   return (
//     <section className="relative bg-white py-20 sm:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
//             What Our Clients Say
//           </span>
//           <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
//             Real results, real routines
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
//             Stories from working professionals and families across Delhi NCR.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-6 sm:grid-cols-2">
//           {TESTIMONIALS.map((t) => (
//             <figure
//               key={t.name}
//               className="flex flex-col rounded-2xl border border-navy/5 bg-cream p-6 shadow-sm shadow-navy/5 sm:p-8"
//             >
//               <div className="flex gap-1 text-orange" aria-hidden="true">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} className="h-4 w-4 fill-current" />
//                 ))}
//               </div>
//               <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy/75 sm:text-base">
//                 &ldquo;{t.quote}&rdquo;
//               </blockquote>
//               <figcaption className="mt-6 flex items-center gap-3">
//                 <span className="lunge-mark is-navy h-11 w-11">
//                   <span className="font-display text-sm font-bold text-white">
//                     {t.initials}
//                   </span>
//                 </span>
//                 <div>
//                   <p className="font-display text-sm font-bold text-navy">
//                     {t.name}
//                   </p>
//                   <p className="text-xs text-navy/55">{t.meta}</p>
//                 </div>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The convenience and structure CoachKart brings is unmatched. I've been doing their Tailored Working Professional Fitness sessions with colleagues at home. Having Certified Elite Fitness Coaches show up right at our doorstep makes staying consistent effortless, helping us maintain high energy throughout our busy workdays.",
    name: "Amit Malhotra",
    meta: "Delhi · Small Group Society Training",
    initials: "AM",
  },
  {
    quote:
      "Finding time for the gym was impossible with my corporate schedule. CoachKart's Luxury Home Training Experience changed everything. My trainer Priyanka arrives exactly at 6:30 AM in Noida, and the 1-on-1 focus on Fat Loss & Muscle Toning has helped me lose 8 kgs, double my energy, and transform my daily lifestyle.",
    name: "Priya Kapoor",
    meta: "Noida · Personal Training",
    initials: "PK",
  },
  {
    quote:
      "The convenience and structure CoachKart brings is unmatched. I've been doing their Tailored Working Professional Fitness sessions with colleagues at home. Having Certified Elite Fitness Coaches show up right at our doorstep makes staying consistent effortless, helping us maintain high energy throughout our busy workdays.",
    name: "Amit Malhotra",
    meta: "Delhi · Small Group Society Training",
    initials: "AM",
  },
  {
    quote:
      "Finding time for the gym was impossible with my corporate schedule. CoachKart's Luxury Home Training Experience changed everything. My trainer Priyanka arrives exactly at 6:30 AM in Noida, and the 1-on-1 focus on Fat Loss & Muscle Toning has helped me lose 8 kgs, double my energy, and transform my daily lifestyle.",
    name: "Priya Kapoor",
    meta: "Noida · Personal Training",
    initials: "PK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= TESTIMONIALS.length - 2 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            What Our Clients Say
          </span>

          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Real results, real routines
          </h2>

          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Stories from working professionals and families across Delhi NCR.
          </p>
        </div>

        {/* Slider */}
        {/* Slider */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 50}%)`,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="w-full shrink-0 px-3 md:w-1/2"
              >
                <figure className="h-full flex flex-col rounded-2xl border border-navy/5 bg-cream p-6 shadow-sm shadow-navy/5 sm:p-8">
                  <div className="flex gap-1 text-orange" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy/75 sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="lunge-mark is-navy h-11 w-11">
                      <span className="font-display text-sm font-bold text-white">
                        {t.initials}
                      </span>
                    </span>

                    <div>
                      <p className="font-display text-sm font-bold text-navy">
                        {t.name}
                      </p>
                      <p className="text-xs text-navy/55">{t.meta}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-orange"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
