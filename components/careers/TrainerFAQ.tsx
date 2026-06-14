// import FAQAccordion from "@/components/FAQAccordion";

// const FAQS = [
//   {
//     question: "What certifications are accepted?",
//     answer:
//       "We accept ACE, Gold's Gym, K11, B.P.Ed, or other equivalent recognized fitness certifications. If you're unsure whether yours qualifies, send us the details on WhatsApp and our team will confirm.",
//   },
//   {
//     question: "How are clients assigned to me?",
//     answer:
//       "Clients are matched based on your location, areas of specialization, and availability — so your sessions stay within a convenient travel radius.",
//   },
//   {
//     question: "Can I work part-time?",
//     answer:
//       "Yes. Many of our coaches balance CoachKart sessions with other commitments. Scheduling is flexible and built around the availability you set.",
//   },
//   {
//     question: "Do I need my own equipment?",
//     answer:
//       "A basic personal kit (mat, resistance bands) is recommended, and CoachKart provides guidance on the standard equipment expected for each session type.",
//   },
// ];

// export default function TrainerFAQ() {
//   return (
//     <section className="relative bg-white py-20 sm:py-28">
//       <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
//             FAQs for Trainers
//           </span>
//           <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
//             Common Questions From Applicants
//           </h2>
//         </div>
//         <div className="mt-10">
//           <FAQAccordion items={FAQS} />
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  HelpCircle,
  Award,
  Briefcase,
  Clock,
  Dumbbell,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const FAQS = [
  {
    question: "What certifications are accepted?",
    answer:
      "We accept ACE, Gold's Gym, K11, B.P.Ed, or other equivalent recognized fitness certifications. If you're unsure whether yours qualifies, send us the details on WhatsApp and our team will confirm.",
  },
  {
    question: "How are clients assigned to me?",
    answer:
      "Clients are matched based on your location, areas of specialization, and availability — so your sessions stay within a convenient travel radius.",
  },
  {
    question: "Can I work part-time?",
    answer:
      "Yes. Many of our coaches balance CoachKart sessions with other commitments. Scheduling is flexible and built around the availability you set.",
  },
  {
    question: "Do I need my own equipment?",
    answer:
      "A basic personal kit (mat, resistance bands) is recommended, and CoachKart provides guidance on the standard equipment expected for each session type.",
  },
];

export default function TrainerFAQ() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          {/* Left Side */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange">
              <HelpCircle className="h-4 w-4" />
              Trainer FAQs
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy lg:text-5xl">
              Common Questions
              <span className="block text-teal-dark">
                From Applicants
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              Everything you need to know before joining CoachKart as a
              professional fitness coach.
            </p>

            {/* Info Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <Award className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Certified Trainers
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Recognized fitness certifications accepted.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <Briefcase className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Flexible Work
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Choose schedules that suit your availability.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <Clock className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Local Assignments
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Clients matched within convenient travel zones.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <Dumbbell className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Equipment Support
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Guidance on session equipment and setup.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 rounded-[28px] bg-gradient-to-r from-navy to-teal-dark p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-3xl font-extrabold">100+</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                    Coaches
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold">5000+</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                    Sessions
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold">4.9★</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                    Rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side FAQ */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}