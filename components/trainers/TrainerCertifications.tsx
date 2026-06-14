"use client";

import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Medal,
} from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: Award,
    title: "ACE Certified Personal Trainer",
    issuer: "American Council on Exercise",
    year: "2024",
  },
  {
    icon: BadgeCheck,
    title: "K11 Fitness Certification",
    issuer: "K11 School of Fitness Sciences",
    year: "2023",
  },
  {
    icon: ShieldCheck,
    title: "CPR & First Aid Certified",
    issuer: "Red Cross Approved Program",
    year: "2024",
  },
  {
    icon: Medal,
    title: "Advanced Strength Coaching",
    issuer: "Fitness Academy",
    year: "2025",
  },
];

export default function TrainerCertifications() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
            Certifications
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold text-navy sm:text-5xl">
            Verified Credentials &
            <span className="block text-teal-dark">
              Professional Qualifications
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            Industry-recognized certifications and professional training
            ensuring safe, effective, and science-backed coaching.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Side Certificates */}
          <div className="grid gap-6 sm:grid-cols-2">
            {CERTIFICATIONS.map(
              ({ icon: Icon, title, issuer, year }) => (
                <div
                  key={title}
                  className="group rounded-[28px] border border-gray-100 bg-white p-7 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal-dark text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-navy">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm text-navy/60">
                    {issuer}
                  </p>

                  <div className="mt-5 inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-bold text-orange">
                    Certified {year}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right Side Image */}
          <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1200&q=80"
              alt="Trainer Certification"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-3xl font-extrabold text-white">
                  100% Verified
                </h3>

                <p className="mt-2 text-white/80">
                  All certifications and qualifications are reviewed
                  before trainers are approved on CoachKart.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl bg-cream p-6 text-center">
            <h3 className="text-3xl font-extrabold text-navy">
              8+
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Years Experience
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-6 text-center">
            <h3 className="text-3xl font-extrabold text-navy">
              500+
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Clients Coached
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-6 text-center">
            <h3 className="text-3xl font-extrabold text-navy">
              4.9★
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}