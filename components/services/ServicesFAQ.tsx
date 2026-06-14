import {
  HelpCircle,
  ShieldCheck,
  Clock3,
  Dumbbell,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const FAQS = [
  {
    question: "How long is each session?",
    answer:
      "Every CoachKart session is a focused 60 minutes — long enough for a complete warm-up, workout, and cool-down, without eating into your whole day.",
  },
  {
    question: "Do I need to provide any equipment?",
    answer:
      "No. Your coach brings all essential equipment, including mats, resistance bands, and blocks, so you don't need a home gym to get started.",
  },
  {
    question: "Can I switch between programs?",
    answer:
      "Yes. Your plan can evolve as your goals change — talk to your coach or our support team anytime to adjust your program.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer:
      "All programs are tailored to your current fitness level, including first-timers. Your first session includes an assessment to set the right starting point.",
  },
  {
    question: "Which areas do you currently serve?",
    answer:
      "We currently operate across Delhi, Gurugram, Noida, Ghaziabad, and Faridabad, with new neighborhoods being added regularly.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Side */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-teal-dark">
              <HelpCircle className="h-4 w-4" />
              FAQs
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy lg:text-5xl">
              Questions About
              <span className="block text-orange">
                Our Programs
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              Everything you need to know before starting your
              fitness journey with CoachKart. From equipment and
              schedules to training plans and service areas.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <Clock3 className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  60 Min Sessions
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Structured workouts with warm-up and cool-down.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <Dumbbell className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Equipment Included
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Coaches bring essential training equipment.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <ShieldCheck className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Certified Coaches
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Trusted and professionally vetted trainers.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5">
                <HelpCircle className="h-8 w-8 text-orange" />
                <h4 className="mt-3 font-bold text-navy">
                  Beginner Friendly
                </h4>
                <p className="mt-2 text-sm text-navy/60">
                  Personalized plans for every fitness level.
                </p>
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