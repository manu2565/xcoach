// import { MessageCircle, FileCheck2, PlayCircle, Handshake } from "lucide-react";

// const STEPS = [
//   {
//     icon: MessageCircle,
//     title: "Apply via WhatsApp",
//     desc: "Send your certification details and experience through our WhatsApp line.",
//   },
//   {
//     icon: FileCheck2,
//     title: "Document & Certification Review",
//     desc: "Our team verifies your certification and experience, typically within 48 hours.",
//   },
//   {
//     icon: PlayCircle,
//     title: "Trial Session",
//     desc: "Complete an evaluated trial session covering technique, communication, and punctuality.",
//   },
//   {
//     icon: Handshake,
//     title: "Onboarding & First Client",
//     desc: "Finish onboarding and get matched with your first client in your preferred area.",
//   },
// ];

// export default function ApplicationProcess() {
//   return (
//     <section className="relative bg-teal-light py-20 sm:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
//             Application Process
//           </span>
//           <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
//             From Application to Your First Client
//           </h2>
//         </div>

//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {STEPS.map(({ icon: Icon, title, desc }, i) => (
//             <div
//               key={title}
//               className="relative rounded-2xl bg-white p-6 shadow-sm shadow-navy/5"
//             >
//               <span className="font-display text-sm font-extrabold text-orange">
//                 {String(i + 1).padStart(2, "0")}
//               </span>
//               <div className="lunge-mark is-navy mt-3 h-12 w-12">
//                 <Icon className="h-5 w-5 text-white" aria-hidden="true" />
//               </div>
//               <h3 className="mt-4 font-display text-base font-bold text-navy">
//                 {title}
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-navy/65">
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  MessageCircle,
  FileCheck2,
  PlayCircle,
  Handshake,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Apply via WhatsApp",
    desc: "Send your certification details and experience through our WhatsApp line.",
  },
  {
    icon: FileCheck2,
    title: "Document & Certification Review",
    desc: "Our team verifies your certification and experience, typically within 48 hours.",
  },
  {
    icon: PlayCircle,
    title: "Trial Session",
    desc: "Complete an evaluated trial session covering technique, communication, and punctuality.",
  },
  {
    icon: Handshake,
    title: "Onboarding & First Client",
    desc: "Finish onboarding and get matched with your first client in your preferred area.",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-white py-20 sm:py-28">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Application Process
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            From Application
            <span className="block text-teal-dark">
              To Your First Client
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Join CoachKart through a simple and transparent process designed
            to connect qualified trainers with motivated clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Progress Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-gradient-to-r from-orange via-teal-dark to-orange lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group relative">
                <div className="relative rounded-[30px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  
                  {/* Step Number */}
                  <div className="absolute -top-5 left-8 flex h-11 w-11 items-center justify-center rounded-full bg-orange text-sm font-bold text-white shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal-dark shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">
                    {title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-navy/65">
                    {desc}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold text-teal-dark">
                    Step {i + 1}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-4 top-14 z-10 hidden lg:block">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
                      <ArrowRight className="h-4 w-4 text-teal-dark" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-3xl font-extrabold text-navy">48 Hrs</h3>
            <p className="mt-2 text-sm text-navy/60">
              Application Review
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-3xl font-extrabold text-navy">100+</h3>
            <p className="mt-2 text-sm text-navy/60">
              Active Coaches
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-3xl font-extrabold text-navy">Delhi NCR</h3>
            <p className="mt-2 text-sm text-navy/60">
              Service Coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}