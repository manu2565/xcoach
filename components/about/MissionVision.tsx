import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Mission &amp; Vision
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why We Do What We Do
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-navy/5 bg-cream p-7 shadow-sm shadow-navy/5 sm:p-9">
            <div className="lunge-mark is-orange h-14 w-14">
              <Target className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy sm:text-2xl">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/65 sm:text-base">
              To make world-class personal training accessible, affordable,
              and convenient by delivering it directly to people&rsquo;s
              homes across Delhi NCR&mdash;removing every barrier between
              intention and action.
            </p>
          </div>

          <div className="rounded-3xl border border-navy/5 bg-cream p-7 shadow-sm shadow-navy/5 sm:p-9">
            <div className="lunge-mark is-teal h-14 w-14">
              <Eye className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy sm:text-2xl">
              Our Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/65 sm:text-base">
              To become India&rsquo;s most trusted name in doorstep
              fitness&mdash;recognized for certified expertise, consistent
              quality, and real, measurable transformations in every home we
              visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
