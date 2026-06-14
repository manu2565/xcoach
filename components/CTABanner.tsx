import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20would%20like%20to%20know%20more%20about%20your%20doorstep%20fitness%20sessions.";

export default function CTABanner({
  title = "Ready to start your transformation?",
  description = "Book a ₹299 demo session and meet your certified coach at your doorstep this week.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div
        className="dot-grid pointer-events-none absolute inset-0 text-white/[0.04]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-45 rounded-3xl bg-teal/15 sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-xl active:scale-[0.98] sm:w-auto"
          >
            Book ₹299 Demo Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10 active:scale-[0.98] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
