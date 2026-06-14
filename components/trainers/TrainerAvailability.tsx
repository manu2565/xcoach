
"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const DAYS = [
  { day: "Monday", time: "6:00 AM - 9:00 PM", available: true },
  { day: "Tuesday", time: "6:00 AM - 9:00 PM", available: true },
  { day: "Wednesday", time: "6:00 AM - 9:00 PM", available: true },
  { day: "Thursday", time: "6:00 AM - 9:00 PM", available: true },
  { day: "Friday", time: "6:00 AM - 9:00 PM", available: true },
  { day: "Saturday", time: "7:00 AM - 6:00 PM", available: true },
  { day: "Sunday", time: "By Appointment", available: false },
];

export default function TrainerAvailability() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-teal/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            Availability
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-navy sm:text-5xl">
            Schedule &
            <span className="block text-orange">
              Training Availability
            </span>
          </h2>

          <p className="mt-5 text-lg text-navy/70">
            Check available training hours and preferred coaching slots.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Schedule */}
          <div className="rounded-[32px] bg-cream p-8 shadow-xl">
            <div className="mb-8 flex items-center gap-3">
              <CalendarDays className="h-7 w-7 text-orange" />
              <h3 className="text-2xl font-bold text-navy">
                Weekly Schedule
              </h3>
            </div>

            <div className="space-y-4">
              {DAYS.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-2xl bg-white p-5"
                >
                  <div>
                    <h4 className="font-bold text-navy">
                      {item.day}
                    </h4>
                    <p className="text-sm text-navy/60">
                      {item.time}
                    </p>
                  </div>

                  {item.available ? (
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                      Available
                    </span>
                  ) : (
                    <span className="rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
                      Limited
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Info */}
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-navy via-navy-light to-teal-dark p-8 text-white">
            <h3 className="text-2xl font-bold">
              Quick Information
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Clock3 className="mt-1 h-6 w-6 text-orange" />
                <div>
                  <h4 className="font-semibold">
                    Session Duration
                  </h4>
                  <p className="text-white/70">
                    60 Minutes Per Session
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 text-orange" />
                <div>
                  <h4 className="font-semibold">
                    Service Area
                  </h4>
                  <p className="text-white/70">
                    Delhi NCR & Nearby Areas
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 text-orange" />
                <div>
                  <h4 className="font-semibold">
                    Trial Session
                  </h4>
                  <p className="text-white/70">
                    Available For New Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white/10 p-6 backdrop-blur">
              <h4 className="text-3xl font-extrabold">
                15+
              </h4>

              <p className="mt-2 text-white/70">
                Active Weekly Training Slots Available
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}