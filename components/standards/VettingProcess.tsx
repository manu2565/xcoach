import { FileCheck2, ShieldCheck, PlayCircle, RefreshCw } from "lucide-react";

const STEPS = [
  {
    icon: FileCheck2,
    title: "Certification Verification",
    desc: "We confirm valid fitness certifications (ACE, Gold's Gym, K11, B.P.Ed, or equivalent) before onboarding.",
  },
  {
    icon: ShieldCheck,
    title: "Background & Reference Checks",
    desc: "Identity, experience, and prior client references are verified for safety and credibility.",
  },
  {
    icon: PlayCircle,
    title: "Trial Session Evaluation",
    desc: "Every coach completes evaluated trial sessions, scored on technique, communication, and punctuality.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Performance Audits",
    desc: "Ongoing client feedback and periodic skill refreshers keep every coach at the same elite standard.",
  },
];

export default function VettingProcess() {
  return (
    <section className="relative bg-teal-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Behind the Scenes
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How We Vet Every Coach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Before a coach ever reaches your doorstep, they pass through a
            four-stage quality process.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative rounded-2xl bg-white p-6 shadow-sm shadow-navy/5"
            >
              <span className="font-display text-sm font-extrabold text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lunge-mark is-navy mt-3 h-12 w-12">
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
