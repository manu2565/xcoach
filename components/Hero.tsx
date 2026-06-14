// import { ArrowRight, MessageCircle, Zap, Award, Briefcase } from "lucide-react";
// import HeroSlider from "./HeroSlider";

// const WHATSAPP_NOW =
//   "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20want%20to%20chat%20about%20booking%20a%20fitness%20trainer.";

// const CHIPS = [
//   {
//     icon: Zap,
//     title: "Luxury Home Sessions",
//     desc: "Tailored 1-hour workouts at your home, on your time.",
//   },
//   {
//     icon: Award,
//     title: "Elite Certified Coaches",
//     desc: "Fully vetted professionals for fat loss, muscle gain & sports.",
//   },
//   {
//     icon: Briefcase,
//     title: "Built for Busy Lifestyles",
//     desc: "Perfect for professionals, seniors, and active families.",
//   },
// ];

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-cream pb-28 pt-[calc(var(--header-h)+1.5rem)] sm:pb-36 sm:pt-[calc(var(--header-h)+2.5rem)]"
//     >
//       {/* Decorative dot-grid backdrop */}
//       <div
//         className="dot-grid pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-teal/15 sm:h-[560px] sm:w-[560px]"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute -left-16 bottom-10 h-40 w-40 rotate-45 rounded-3xl bg-teal/10 sm:h-56 sm:w-56"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Eyebrow */}
//         <div className="animate-fade-up text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark">
//             <span className="h-2 w-2 rounded-full bg-orange" />
//             Doorstep Fitness Coaching
//           </span>
//         </div>

//         {/* Image slider */}
//         <div className="relative mt-6 animate-fade-up [animation-delay:100ms]">
//           <div className="relative h-[320px] w-full overflow-hidden rounded-[1.75rem] shadow-2xl shadow-navy/25 sm:h-[420px] sm:rounded-[2.25rem] lg:h-[480px]">
//             <HeroSlider />
//           </div>
//         </div>

//         {/* Overlapping content card */}
//         <div className="relative z-10 mx-auto -mt-16 max-w-4xl animate-fade-up rounded-[1.75rem] bg-white px-6 py-8 text-center shadow-2xl shadow-navy/15 sm:-mt-20 sm:rounded-[2.25rem] sm:px-12 sm:py-10 lg:-mt-24 lg:px-16 lg:py-12 [animation-delay:200ms]">
//           <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[3.1rem]">
//             Delhi NCR&rsquo;s Premium{" "}
//             <span className="relative inline-block">
//               Doorstep Fitness
//               <svg
//                 viewBox="0 0 200 12"
//                 preserveAspectRatio="none"
//                 className="absolute -bottom-1 left-0 h-3 w-full text-orange"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M2 9 C 50 2, 150 2, 198 9"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="5"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </span>{" "}
//             Network
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
//             We bring luxury personal training, yoga, and custom wellness
//             protocols directly to your living room. No gym crowds, no
//             commuting&mdash;just elite certified coaches dedicated to your
//             transformation.
//           </p>

//           {/* CTAs */}
//           <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <a
//               href="#contact"
//               className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-xl active:scale-[0.98] sm:w-auto"
//             >
//               Book ₹299 Demo Session
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </a>
//             <a
//               href={WHATSAPP_NOW}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-teal px-7 py-3.5 text-base font-bold text-teal-dark transition-colors hover:bg-teal-light active:scale-[0.98] sm:w-auto"
//             >
//               <MessageCircle className="h-5 w-5" aria-hidden="true" />
//               WhatsApp Now
//             </a>
//           </div>
//         </div>

//         {/* Feature chips */}
//         <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
//           {CHIPS.map(({ icon: Icon, title, desc }) => (
//             <div
//               key={title}
//               className="rounded-2xl border border-navy/5 bg-white/70 p-5 shadow-sm shadow-navy/5"
//             >
//               <div className="lunge-mark is-teal h-10 w-10">
//                 <Icon className="h-4 w-4 text-white" aria-hidden="true" />
//               </div>
//               <p className="mt-3 font-display text-sm font-bold text-navy">
//                 {title}
//               </p>
//               <p className="mt-1 text-xs leading-relaxed text-navy/60">
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, MessageCircle, Zap, Award, Briefcase } from "lucide-react";
import HeroSlider from "./HeroSlider";

const WHATSAPP_NOW =
  "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20want%20to%20chat%20about%20booking%20a%20fitness%20trainer.";

const CHIPS = [
  {
    icon: Zap,
    title: "Luxury Home Sessions",
    desc: "Tailored 1-hour workouts at your home, on your time.",
  },
  {
    icon: Award,
    title: "Elite Certified Coaches",
    desc: "Fully vetted professionals for fat loss, muscle gain & sports.",
  },
  {
    icon: Briefcase,
    title: "Built for Busy Lifestyles",
    desc: "Perfect for professionals, seniors, and active families.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pb-28 pt-0 sm:pb-6 sm:pt-0"
    >
           {/* <div className="relative mt-6 w-full animate-fade-up [animation-delay:100ms]">
        <div className="relative h-[480px] w-full overflow-hidden shadow-2xl shadow-navy/25 sm:h-[420px] lg:h-[480px]">
          <HeroSlider />
        </div>
      </div> */}
      {/* Decorative Elements */}
      {/* <div
        className="dot-grid pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-teal/15 sm:h-[560px] sm:w-[560px]"
        aria-hidden="true"
      /> */}
      {/* <div
        className="pointer-events-none absolute -left-16 bottom-10 h-40 w-40 rotate-45 rounded-3xl bg-teal/10 sm:h-56 sm:w-56"
        aria-hidden="true"
      /> */}

      {/* Full Width Hero Slider */}
 

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-20 lg:pb-12">
        {/* Overlapping Content Card */}
        <div className="relative z-10 mx-auto -mt-16 max-w-4xl animate-fade-up rounded-[1.75rem] bg-white px-6 py-8 text-center shadow-2xl shadow-navy/15 sm:-mt-20 sm:rounded-[2.25rem] sm:px-12 sm:py-10 lg:-mt-24 lg:px-16 lg:py-12 [animation-delay:200ms]">
          <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2rem]">
            Delhi NCR&rsquo;s Premium{" "}
            <span className="relative inline-block">Doorstep Fitness</span>{" "}
            Network
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
            We bring luxury personal training, yoga, and custom wellness
            protocols directly to your living room. No gym crowds, no
            commuting—just elite certified coaches dedicated to your
            transformation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              Book ₹299 Demo Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={WHATSAPP_NOW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-teal px-7 py-3.5 text-base font-bold text-teal-dark transition-colors hover:bg-teal-light active:scale-[0.98] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Feature Chips */}
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {CHIPS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-navy/5 bg-white/70 p-5 shadow-sm shadow-navy/5"
            >
              <div className="lunge-mark is-teal h-10 w-10">
                <Icon className="h-4 w-4 text-white" />
              </div>

              <p className="mt-3 font-display text-sm font-bold text-navy">
                {title}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-navy/60">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
