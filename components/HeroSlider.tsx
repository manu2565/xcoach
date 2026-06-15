

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";
const slides = [
  {
    image: "/images/personal-training.jpg",
    badge: "1-on-1 Personal Training",
    title: "Your Personal Trainer At Your Doorstep",
    description:
      "Certified fitness trainers delivering customized workout sessions at home across Delhi NCR.",
  },
  {
    image: "/images/yoga-session.jpg",
    badge: "Yoga & Wellness",
    title: "Private Yoga Sessions In The Comfort Of Your Home",
    description:
      "Improve flexibility, posture and mental wellness with experienced yoga instructors.",
  },
  {
    image: "/images/group-workout.jpg",
    badge: "Society Group Fitness",
    title: "Transform Your Society Into A Fitness Community",
    description:
      "Group workouts, Zumba sessions and wellness programs for apartments and societies.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[95vh] min-h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-10">
         <div className="max-w-3xl ml-8">
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              {slides[current].badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-5xl">
              {slides[current].title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              {slides[current].description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
                Book Free Consultation
                <ArrowRight size={18} />
              </button>

              <a
                href="tel:+919643342464"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl lg:flex">
        <div className="grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <h3 className="text-3xl font-bold text-orange-400">2500+</h3>
            <p className="text-sm text-gray-300">Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">100+</h3>
            <p className="text-sm text-gray-300">Trainers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">4.9★</h3>
            <p className="text-sm text-gray-300">Rating</p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index ? "w-10 bg-orange-500" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

