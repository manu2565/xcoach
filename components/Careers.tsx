import { Wallet, TrendingUp, CalendarCheck, BadgeCheck, MessageCircle } from "lucide-react";

const WHY_JOIN = [
  {
    icon: Wallet,
    title: "Competitive Compensation",
    desc: "Competitive rates and rewards for punctuality and client retention.",
  },
  {
    icon: TrendingUp,
    title: "Professional Development",
    desc: "Continuous coaching upgrades in kinesiology and client biomechanics.",
  },
  {
    icon: CalendarCheck,
    title: "Hassle-Free Scheduling",
    desc: "We handle marketing, bookings, and scheduling. You focus strictly on training.",
  },
];

const REQUIREMENTS = [
  "Valid Fitness Certification (ACE, Gold's Gym, K11, B.P.Ed, or equivalent).",
  "Minimum 1-2 years of client handling or fitness center experience.",
  "Own transport vehicle (Two-wheeler preferred) for travel across Delhi NCR.",
];

const APPLY_URL =
  "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20am%20a%20certified%20trainer%20and%20I%27d%20like%20to%20apply%20to%20join%20your%20network.";

export default function Careers() {
  return (
    <section id="careers" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left — why join */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
              For Trainers
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Join Our Trainer Network
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70 sm:text-lg">
              Are you a certified fitness trainer looking to make a real
              impact? Join CoachKart&rsquo;s professional coaching team.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              {WHY_JOIN.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="lunge-mark is-teal h-12 w-12 shrink-0">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/65">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — requirements card */}
          <div className="flex flex-col rounded-3xl bg-navy p-7 text-white shadow-xl shadow-navy/20 sm:p-9">
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Requirements
            </h3>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {REQUIREMENTS.map((req) => (
                <li key={req} className="flex gap-3">
                  <BadgeCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                    {req}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-colors hover:bg-orange-dark active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Apply Now via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
