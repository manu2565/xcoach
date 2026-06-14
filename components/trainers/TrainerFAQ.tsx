// "use client";

// import FAQAccordion from "@/components/FAQAccordion";
// import { Sparkles } from "lucide-react";

// const FAQS = [
//   {
//     question: "How do I book a session with this trainer?",
//     answer:
//       "You can directly book a trial session via WhatsApp or the booking form. The trainer will confirm availability and schedule your first session.",
//   },
//   {
//     question: "Is a trial session available?",
//     answer:
//       "Yes, most trainers offer a trial session so you can understand their training style before committing to a package.",
//   },
//   {
//     question: "Do I need equipment for home training?",
//     answer:
//       "No, basic equipment is provided by the trainer depending on your program. You only need a small workout space.",
//   },
//   {
//     question: "Can I reschedule my sessions?",
//     answer:
//       "Yes, sessions can be rescheduled with prior notice based on trainer availability.",
//   },
//   {
//     question: "Are trainers certified?",
//     answer:
//       "Yes, all trainers are verified and certified through recognized fitness institutions and internal screening.",
//   },
// ];

// export default function TrainerFAQ() {
//   return (
//     <section className="relative overflow-hidden py-24 sm:py-32">

//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
//           alt="fitness background"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-navy/80" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

//         {/* HEADER */}
//         <div className="text-center text-white">

//           <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur">
//             <Sparkles className="h-4 w-4 text-orange" />
//             FAQs
//           </div>

//           <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
//             Everything About
//             <span className="block text-orange">
//               Your Trainer
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
//             Clear answers before you start your fitness journey — no confusion, no hidden steps.
//           </p>

//         </div>

//         {/* FAQ BOX */}
//         <div className="mt-14 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-10">

//           <FAQAccordion items={FAQS} />

//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import FAQAccordion from "@/components/FAQAccordion";
import { Sparkles } from "lucide-react";

const FAQS = [
  {
    question: "How do I book a session with this trainer?",
    answer:
      "You can directly book a trial session via WhatsApp or the booking form. The trainer will confirm availability and schedule your first session.",
  },
  {
    question: "Is a trial session available?",
    answer:
      "Yes, most trainers offer a trial session so you can understand their training style before committing to a package.",
  },
  {
    question: "Do I need equipment for home training?",
    answer:
      "No, basic equipment is provided by the trainer depending on your program. You only need a small workout space.",
  },
  {
    question: "Can I reschedule my sessions?",
    answer:
      "Yes, sessions can be rescheduled with prior notice based on trainer availability.",
  },
  {
    question: "Are trainers certified?",
    answer:
      "Yes, all trainers are verified and certified through recognized fitness institutions and internal screening.",
  },
];

export default function TrainerFAQ() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-10">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
          alt="fitness background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur">
            <Sparkles className="h-4 w-4 text-orange" />
            FAQs
          </div>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Everything About
            <span className="block text-orange">Your Trainer</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
            Clear answers before you start your fitness journey.
          </p>
        </div>

        {/* FAQ BOX */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
