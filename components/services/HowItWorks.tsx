import {
  MessageCircle,
  UserCheck,
  ClipboardList,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Book Your ₹299 Demo",
    desc: "Share your goals and location via WhatsApp or our contact form — takes under a minute.",
  },
  {
    icon: UserCheck,
    title: "Get Matched With a Coach",
    desc: "We pair you with a certified trainer suited to your goals, schedule, and location.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Assessment",
    desc: "Your first session includes a full fitness assessment and a walkthrough of your plan.",
  },
  {
    icon: TrendingUp,
    title: "Train Consistently",
    desc: "Weekly sessions, progress tracking, and plan adjustments as you keep improving.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-teal-light/30 py-20 sm:py-28">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            How It Works
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            From First Message
            <span className="block text-teal-dark">
              To Your First Session
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Getting started is simple. From booking your demo to achieving
            measurable results, every step is designed to be seamless.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-gradient-to-r from-orange via-teal-dark to-orange lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group relative"
              >
                {/* Card */}
                <div className="relative rounded-[28px] border border-white/50 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  
                  {/* Step Number */}
                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-orange font-bold text-white shadow-lg">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal-dark text-white shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">
                    {title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-navy/65">
                    {desc}
                  </p>

                  {/* CTA Indicator */}
                  <div className="mt-6 flex items-center text-sm font-semibold text-teal-dark">
                    Step {i + 1}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Desktop Connector Arrow */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-4 top-12 z-10 hidden lg:block">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
                      <ArrowRight className="h-4 w-4 text-teal-dark" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-3xl font-extrabold text-navy">1 Min</h3>
            <p className="mt-2 text-sm text-navy/60">
              Demo Booking Time
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-3xl font-extrabold text-navy">100+</h3>
            <p className="mt-2 text-sm text-navy/60">
              Certified Coaches
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-3xl font-extrabold text-navy">5,000+</h3>
            <p className="mt-2 text-sm text-navy/60">
              Sessions Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}