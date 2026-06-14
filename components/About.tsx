import { Award, Home, Briefcase, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    icon: Award,
    title: "Certified Elite Fitness Coaches",
    desc: "All coaches undergo rigorous vetting, background checks, and continuous client-success mapping.",
  },
  {
    icon: Home,
    title: "Luxury Home Training Experience",
    desc: "A high-end wellness club experience in your living room, complete with custom workout routines.",
  },
  {
    icon: Briefcase,
    title: "Tailored Working Professional Fitness",
    desc: "Flexible scheduling options designed to align perfectly with high-intensity corporate calendars.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — narrative */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
              About CoachKart
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Your Fitness Goals,
              <br className="hidden sm:block" /> Reimagined at Home
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
              At CoachKart, we eliminate the friction of staying healthy. No
              intimidating gym environments, no wasted commuting time&mdash;just
              custom-tailored, results-driven coaching delivered directly to
              your living room. We build sustainable daily habits through
              elite motivation, expert form correction, and personalized
              nutrition guidance that fits your calendar seamlessly.
            </p>

            <blockquote className="mt-7 flex gap-4 rounded-2xl bg-teal-light p-5 sm:p-6">
              <Quote
                className="h-7 w-7 shrink-0 text-teal-dark"
                aria-hidden="true"
              />
              <p className="font-display text-base font-semibold leading-relaxed text-navy sm:text-lg">
                True fitness is not just about temporary intensity; it&rsquo;s
                about the consistency, proper form, and transformational
                habits you build in your everyday space.
              </p>
            </blockquote>

            <p className="mt-7 text-base leading-relaxed text-navy/70 sm:text-lg">
              We match you with a certified coach who shows up at your door,
              maps your targets, and brings the equipment.{" "}
              <span className="font-bold text-navy">
                Your home, your terms, your transformation.
              </span>
            </p>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-dark transition-colors hover:text-navy"
            >
              Read our full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Right — pillar cards */}
          <div className="flex flex-col gap-5">
            {PILLARS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-navy/5 bg-cream p-5 shadow-sm shadow-navy/5 sm:p-6"
              >
                <div
                  className={`lunge-mark ${
                    i === 1 ? "is-orange" : "is-navy"
                  } h-12 w-12 shrink-0 sm:h-14 sm:w-14`}
                >
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
