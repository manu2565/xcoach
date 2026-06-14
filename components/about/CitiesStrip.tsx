import { MapPin } from "lucide-react";

const CITIES = ["Delhi", "Gurugram", "Noida", "Ghaziabad", "Faridabad"];

export default function CitiesStrip() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="lunge-mark is-orange mx-auto h-14 w-14">
          <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Proudly Serving Delhi NCR
        </h2>
        <p className="mt-3 text-base leading-relaxed text-navy/65 sm:text-lg">
          Our certified coaches are active across these cities, with new
          neighborhoods added every month.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {CITIES.map((city) => (
            <span
              key={city}
              className="rounded-full bg-teal-light px-5 py-2 text-sm font-semibold text-teal-dark"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
