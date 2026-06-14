"use client";

import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";

const GOALS = [
  "Fat Loss & Muscle Toning",
  "Strength Training & Conditioning",
  "Endurance & Stamina",
  "Flexibility & Yoga",
  "General Fitness & Health",
  "Kids Fitness (Active Play)",
];

const CITIES = ["Delhi", "Gurugram", "Noida", "Ghaziabad", "Faridabad"];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [goal, setGoal] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message =
      `Hi CoachKart! I'd like to book the ₹299 demo session.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Location: ${location}\n` +
      `Fitness Goal: ${goal}`;

    const url = `https://wa.me/918595596066?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative bg-teal-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Get in Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Book your ₹299 demo session
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Share a few details and we&rsquo;ll match you with a certified
            coach near you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 sm:p-9"
          >
            <h3 className="font-display text-xl font-bold text-navy">
              Send Us Your Details
            </h3>
            <p className="mt-1 text-sm text-navy/60">
              Book your Luxury Home Training Experience at just ₹299.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-navy"
                >
                  Full Name <span className="text-orange">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-teal"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-semibold text-navy"
                >
                  Phone Number <span className="text-orange">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-teal"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-1.5 block text-sm font-semibold text-navy"
                >
                  Location / Area in Delhi NCR{" "}
                  <span className="text-orange">*</span>
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Sector 50, Noida"
                  className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-teal"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="goal"
                  className="mb-1.5 block text-sm font-semibold text-navy"
                >
                  Fitness Goal <span className="text-orange">*</span>
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal"
                >
                  <option value="" disabled>
                    Select your Fitness Goal
                  </option>
                  {GOALS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/30 transition-colors hover:bg-orange-dark active:scale-[0.98] sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Book ₹299 Demo Session
            </button>
            <p className="mt-3 text-xs text-navy/50">
              We&rsquo;ll redirect you to WhatsApp to complete your demo
              session scheduling.
            </p>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+918595596066"
                  className="flex items-center gap-4 transition-opacity hover:opacity-80"
                >
                  <span className="lunge-mark is-teal h-12 w-12 shrink-0">
                    <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/55">
                      Call Us
                    </p>
                    <p className="font-display text-base font-bold">
                      +91 85955 96066
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918595596066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-opacity hover:opacity-80"
                >
                  <span className="lunge-mark is-orange h-12 w-12 shrink-0">
                    <MessageCircle className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/55">
                      WhatsApp Us
                    </p>
                    <p className="font-display text-base font-bold">
                      +91 85955 96066
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:coachkart@gmail.com"
                  className="flex items-center gap-4 transition-opacity hover:opacity-80"
                >
                  <span className="lunge-mark is-teal h-12 w-12 shrink-0">
                    <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/55">
                      Email Support
                    </p>
                    <p className="font-display text-base font-bold break-all">
                      coachkart@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 sm:p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange" aria-hidden="true" />
                <h3 className="font-display text-base font-bold text-navy">
                  Certified Elite Fitness Coaches in
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <span
                    key={city}
                    className="rounded-full bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/60">
                Offering Tailored Working Professional Fitness programs
                directly at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
