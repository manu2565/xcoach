// import { Award, Home, Briefcase } from "lucide-react";

// const ITEMS = [
//   {
//     icon: Award,
//     title: "Certified Elite Fitness Coaches",
//     desc: "Every coach in our network is independently vetted for certification, experience, and communication skills before being matched with clients. We continuously evaluate performance through client feedback and skill audits.",
//     gradient: "from-navy via-navy-light to-teal-dark",
//     glow: "bg-teal/25",
//   },
//   {
//     icon: Home,
//     title: "Luxury Home Training Experience",
//     desc: "We bring the studio experience to you: premium equipment, structured warm-ups, and a session plan designed around your space, schedule, and goals — so it feels less like a workout and more like a personal wellness ritual.",
//     gradient: "from-teal-dark via-navy-light to-navy",
//     glow: "bg-orange/20",
//   },
//   {
//     icon: Briefcase,
//     title: "Tailored Working Professional Fitness",
//     desc: "Early mornings, lunch breaks, or late evenings — our scheduling flexes around your calendar, not the other way around, so consistency never has to compete with your career.",
//     gradient: "from-navy via-teal-dark to-teal",
//     glow: "bg-orange/25",
//   },
// ];

// export default function Promise() {
//   return (
//     <section className="relative bg-cream py-20 sm:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
//             Our Promise
//           </span>
//           <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
//             What Makes CoachKart Different
//           </h2>
//         </div>

//         <div className="mt-14 flex flex-col gap-14 sm:gap-20">
//           {ITEMS.map(({ icon: Icon, title, desc, gradient, glow }, i) => (
//             <div
//               key={title}
//               className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
//             >
//               {/* Visual panel */}
//               <div
//                 className={`relative order-1 mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br shadow-xl shadow-navy/15 sm:rounded-[2.25rem] ${gradient} ${
//                   i % 2 === 1 ? "lg:order-2" : "lg:order-1"
//                 }`}
//               >
//                 <div className="dot-grid absolute inset-0 text-white/10" aria-hidden="true" />
//                 <div
//                   className={`pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full ${glow} blur-2xl`}
//                   aria-hidden="true"
//                 />
//                 <div
//                   className={`pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full ${glow} blur-2xl`}
//                   aria-hidden="true"
//                 />
//                 <div className="relative flex h-full items-center justify-center">
//                   <div className="lunge-mark is-orange flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
//                     <Icon className="h-10 w-10 text-white sm:h-12 sm:w-12" aria-hidden="true" />
//                   </div>
//                 </div>
//               </div>

//               {/* Text */}
//               <div
//                 className={`order-2 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
//               >
//                 <span className="font-display text-sm font-extrabold text-teal-dark">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
//                   {title}
//                 </h3>
//                 <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
//                   {desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Promise() {
  const ITEMS = [
    {
      title: "Certified Elite Fitness Coaches",
      desc: "Every coach in our network is independently vetted for certification, experience, and communication skills before being matched with clients. We continuously evaluate performance through client feedback and skill audits.",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1400&auto=format&fit=crop",
      stat: "100+",
      label: "Certified Coaches",
    },
    {
      title: "Luxury Home Training Experience",
      desc: "We bring the studio experience to you: premium equipment, structured warm-ups, and a session plan designed around your space, schedule, and goals — so it feels less like a workout and more like a personal wellness ritual.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop",
      stat: "60 Min",
      label: "Focused Sessions",
    },
    {
      title: "Tailored Working Professional Fitness",
      desc: "Early mornings, lunch breaks, or late evenings — our scheduling flexes around your calendar, not the other way around, so consistency never has to compete with your career.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
      stat: "24/7",
      label: "Flexible Scheduling",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,145,155,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,90,31,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Our Promise
          </span>

          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            What Makes CoachKart Different
          </h2>

          <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
            Personalized fitness coaching delivered directly to your doorstep,
            designed around your goals, schedule, and lifestyle.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Image Side */}
              <div
                className={`${
                  i % 2 === 1 ? "lg:order-2" : ""
                } relative overflow-hidden rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]`}
              >
                <div className="relative aspect-[16/10]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-lg font-bold text-navy shadow-lg backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                    <p className="font-display text-2xl font-extrabold text-white">
                      {item.stat}
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/75">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-display text-sm font-extrabold text-teal-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl lg:text-[2rem]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
                  {item.desc}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                    Personal Coaching
                  </span>

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                    Goal Focused
                  </span>

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                    Flexible Schedule
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
