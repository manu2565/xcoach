// // "use client";

// // import { useCallback, useEffect, useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // type Slide = {
// //   id: string;
// //   eyebrow: string;
// //   title: string;
// //   art: React.ReactNode;
// // };

// // /** Geometric "trainer" figure reused across slides, recolored per slide */
// // function FigureMark({
// //   primary,
// //   accent,
// //   flip = false,
// // }: {
// //   primary: string;
// //   accent: string;
// //   flip?: boolean;
// // }) {
// //   return (
// //     <g transform={flip ? "translate(420,0) scale(-1,1)" : undefined}>
// //       <circle cx="80" cy="70" r="26" fill={accent} />
// //       <path d="M80 96 L80 195" stroke={primary} strokeWidth="20" strokeLinecap="round" />
// //       <path d="M80 120 L20 165" stroke={primary} strokeWidth="17" strokeLinecap="round" />
// //       <path d="M80 120 L165 96" stroke={primary} strokeWidth="17" strokeLinecap="round" />
// //       <path d="M80 195 L25 280" stroke={primary} strokeWidth="20" strokeLinecap="round" />
// //       <path d="M80 195 L140 280" stroke={primary} strokeWidth="20" strokeLinecap="round" />
// //     </g>
// //   );
// // }

// // const SLIDES: Slide[] = [
// //   {
// //     id: "personal-training",
// //     eyebrow: "1-on-1 Sessions",
// //     title: "Personal Training, Delivered to Your Door",
// //     art: (
// //       <svg
// //         viewBox="0 0 1600 800"
// //         className="h-full w-full"
// //         preserveAspectRatio="xMidYMid slice"
// //         aria-hidden="true"
// //       >
// //         <defs>
// //           <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
// //             <stop offset="0%" stopColor="#0F2C4A" />
// //             <stop offset="55%" stopColor="#16395C" />
// //             <stop offset="100%" stopColor="#0C6E76" />
// //           </linearGradient>
// //           <radialGradient id="glow1a" cx="50%" cy="50%" r="50%">
// //             <stop offset="0%" stopColor="#14919B" stopOpacity="0.55" />
// //             <stop offset="100%" stopColor="#14919B" stopOpacity="0" />
// //           </radialGradient>
// //           <radialGradient id="glow1b" cx="50%" cy="50%" r="50%">
// //             <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.4" />
// //             <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
// //           </radialGradient>
// //         </defs>
// //         <rect width="1600" height="800" fill="url(#g1)" />
// //         <circle cx="1280" cy="180" r="380" fill="url(#glow1a)" />
// //         <circle cx="260" cy="700" r="420" fill="url(#glow1b)" />
// //         <path d="M120 120 L 760 760" stroke="#14919B" strokeWidth="90" strokeLinecap="round" opacity="0.12" />
// //         <path d="M1500 60 L 880 760" stroke="#FF5A1F" strokeWidth="90" strokeLinecap="round" opacity="0.12" />
// //         <g transform="translate(1080,160) scale(1.5)">
// //           <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
// //         </g>
// //       </svg>
// //     ),
// //   },
// //   {
// //     id: "yoga-flexibility",
// //     eyebrow: "Mind & Body",
// //     title: "Yoga & Flexibility Sessions at Home",
// //     art: (
// //       <svg
// //         viewBox="0 0 1600 800"
// //         className="h-full w-full"
// //         preserveAspectRatio="xMidYMid slice"
// //         aria-hidden="true"
// //       >
// //         <defs>
// //           <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
// //             <stop offset="0%" stopColor="#0C6E76" />
// //             <stop offset="55%" stopColor="#0F4A56" />
// //             <stop offset="100%" stopColor="#0F2C4A" />
// //           </linearGradient>
// //           <radialGradient id="glow2a" cx="50%" cy="50%" r="50%">
// //             <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.45" />
// //             <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
// //           </radialGradient>
// //           <radialGradient id="glow2b" cx="50%" cy="50%" r="50%">
// //             <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
// //             <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
// //           </radialGradient>
// //         </defs>
// //         <rect width="1600" height="800" fill="url(#g2)" />
// //         <circle cx="1320" cy="220" r="380" fill="url(#glow2a)" />
// //         <circle cx="420" cy="600" r="420" fill="url(#glow2b)" />
// //         <path
// //           d="M120 620 C 420 480, 1180 480, 1480 620"
// //           stroke="#FFFFFF"
// //           strokeWidth="14"
// //           strokeLinecap="round"
// //           opacity="0.18"
// //           fill="none"
// //         />
// //         <path
// //           d="M120 700 C 420 560, 1180 560, 1480 700"
// //           stroke="#FF5A1F"
// //           strokeWidth="10"
// //           strokeLinecap="round"
// //           opacity="0.25"
// //           fill="none"
// //         />
// //         <g transform="translate(980,140) scale(1.5)">
// //           <FigureMark primary="#0F2C4A" accent="#FFFFFF" />
// //         </g>
// //         <g transform="translate(260,260) scale(1)">
// //           <circle cx="80" cy="60" r="22" fill="#FF5A1F" opacity="0.9" />
// //           <path d="M80 82 L80 150" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.85" />
// //           <path d="M80 95 L15 55" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
// //           <path d="M80 95 L150 130" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
// //           <path d="M80 150 L25 215" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.85" />
// //           <path d="M80 150 L145 215" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.85" />
// //         </g>
// //       </svg>
// //     ),
// //   },
// //   {
// //     id: "society-group",
// //     eyebrow: "Society Groups",
// //     title: "Energising Group Workouts in Your Society",
// //     art: (
// //       <svg
// //         viewBox="0 0 1600 800"
// //         className="h-full w-full"
// //         preserveAspectRatio="xMidYMid slice"
// //         aria-hidden="true"
// //       >
// //         <defs>
// //           <linearGradient id="g3" x1="0" y1="1" x2="1" y2="0">
// //             <stop offset="0%" stopColor="#081A2E" />
// //             <stop offset="50%" stopColor="#0F2C4A" />
// //             <stop offset="100%" stopColor="#0C6E76" />
// //           </linearGradient>
// //           <radialGradient id="glow3a" cx="50%" cy="50%" r="50%">
// //             <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.5" />
// //             <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
// //           </radialGradient>
// //           <radialGradient id="glow3b" cx="50%" cy="50%" r="50%">
// //             <stop offset="0%" stopColor="#14919B" stopOpacity="0.5" />
// //             <stop offset="100%" stopColor="#14919B" stopOpacity="0" />
// //           </radialGradient>
// //         </defs>
// //         <rect width="1600" height="800" fill="url(#g3)" />
// //         <circle cx="220" cy="160" r="360" fill="url(#glow3a)" />
// //         <circle cx="1380" cy="640" r="420" fill="url(#glow3b)" />
// //         <g transform="translate(760,180) scale(1.3)">
// //           <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
// //         </g>
// //         <g transform="translate(980,260) scale(1.1)">
// //           <FigureMark primary="#FFFFFF" accent="#14919B" />
// //         </g>
// //         <g transform="translate(1180,180) scale(1.3)">
// //           <FigureMark primary="#FFFFFF" accent="#14919B" flip />
// //         </g>
// //       </svg>
// //     ),
// //   },
// // ];

// // export default function HeroSlider() {
// //   const [index, setIndex] = useState(0);
// //   const [paused, setPaused] = useState(false);

// //   const goTo = useCallback((i: number) => {
// //     setIndex((i + SLIDES.length) % SLIDES.length);
// //   }, []);

// //   useEffect(() => {
// //     if (paused) return;
// //     const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
// //     return () => clearInterval(t);
// //   }, [paused]);

// //   return (
// //     <div
// //       className="group relative h-full w-full overflow-hidden bg-navy"
// //       onMouseEnter={() => setPaused(true)}
// //       onMouseLeave={() => setPaused(false)}
// //     >
// //       {SLIDES.map((slide, i) => (
// //         <div
// //           key={slide.id}
// //           aria-hidden={i !== index}
// //           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// //             i === index ? "opacity-100" : "opacity-0"
// //           }`}
// //         >
// //           <div
// //             key={i === index ? `${slide.id}-${index}` : slide.id}
// //             className={`h-full w-full ${i === index ? "animate-kenburns" : ""}`}
// //           >
// //             {slide.art}
// //           </div>
// //         </div>
// //       ))}

// //       {/* Directional gradient overlay for text legibility */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/35 to-transparent" />
// //       <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

// //       {/* Slide caption (bottom-right) */}
// //       <div className="absolute bottom-6 right-6 hidden max-w-[240px] text-right md:block">
// //         <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">
// //           {SLIDES[index].eyebrow}
// //         </p>
// //         <p className="mt-1 font-display text-base font-bold text-white">
// //           {SLIDES[index].title}
// //         </p>
// //       </div>

// //       {/* Arrows */}
// //       <button
// //         type="button"
// //         onClick={() => goTo(index - 1)}
// //         aria-label="Previous slide"
// //         className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all hover:bg-white/25 group-hover:opacity-100 sm:left-6"
// //       >
// //         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// //       </button>
// //       <button
// //         type="button"
// //         onClick={() => goTo(index + 1)}
// //         aria-label="Next slide"
// //         className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all hover:bg-white/25 group-hover:opacity-100 sm:right-6"
// //       >
// //         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// //       </button>

// //       {/* Dots */}
// //       <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 md:left-6 md:translate-x-0">
// //         {SLIDES.map((slide, i) => (
// //           <button
// //             key={slide.id}
// //             type="button"
// //             onClick={() => goTo(i)}
// //             aria-label={`Go to slide ${i + 1}: ${slide.title}`}
// //             aria-current={i === index}
// //             className={`h-2.5 rounded-full transition-all ${
// //               i === index ? "w-8 bg-orange" : "w-2.5 bg-white/40 hover:bg-white/70"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useCallback, useEffect, useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // type Slide = {
// //   id: string;
// //   eyebrow: string;
// //   title: string;
// //   gradient: string;
// //   art: React.ReactNode;
// // };

// // /** Small geometric "trainer" figure reused across slides, recolored per slide */
// // function FigureMark({
// //   primary,
// //   accent,
// //   flip = false,
// // }: {
// //   primary: string;
// //   accent: string;
// //   flip?: boolean;
// // }) {
// //   return (
// //     <g transform={flip ? "translate(420,0) scale(-1,1)" : undefined}>
// //       <circle cx="80" cy="70" r="22" fill={accent} />
// //       <path
// //         d="M80 92 L80 170"
// //         stroke={primary}
// //         strokeWidth="16"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M80 110 L30 150"
// //         stroke={primary}
// //         strokeWidth="14"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M80 110 L150 90"
// //         stroke={primary}
// //         strokeWidth="14"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M80 170 L40 240"
// //         stroke={primary}
// //         strokeWidth="16"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M80 170 L125 240"
// //         stroke={primary}
// //         strokeWidth="16"
// //         strokeLinecap="round"
// //       />
// //     </g>
// //   );
// // }

// // const SLIDES: Slide[] = [
// //   {
// //     id: "personal-training",
// //     eyebrow: "1-on-1 Sessions",
// //     title: "Personal Training, Delivered to Your Door",
// //     gradient: "from-navy via-navy-light to-teal-dark",
// //     art: (
// //       <svg
// //         viewBox="0 0 700 500"
// //         className="h-full w-full"
// //         preserveAspectRatio="xMidYMid slice"
// //         aria-hidden="true"
// //       >
// //         <path
// //           d="M40 60 L 320 420"
// //           stroke="#14919B"
// //           strokeWidth="40"
// //           strokeLinecap="round"
// //           opacity="0.3"
// //         />
// //         <path
// //           d="M660 60 L 380 420"
// //           stroke="#FF5A1F"
// //           strokeWidth="40"
// //           strokeLinecap="round"
// //           opacity="0.3"
// //         />
// //         <circle cx="350" cy="250" r="160" fill="#14919B" opacity="0.12" />
// //         <g transform="translate(280,90)">
// //           <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
// //         </g>
// //       </svg>
// //     ),
// //   },
// //   {
// //     id: "yoga-flexibility",
// //     eyebrow: "Mind & Body",
// //     title: "Yoga & Flexibility Sessions at Home",
// //     gradient: "from-teal-dark via-teal to-navy",
// //     art: (
// //       <svg
// //         viewBox="0 0 700 500"
// //         className="h-full w-full"
// //         preserveAspectRatio="xMidYMid slice"
// //         aria-hidden="true"
// //       >
// //         <circle cx="540" cy="120" r="120" fill="#FF5A1F" opacity="0.18" />
// //         <path
// //           d="M80 440 C 200 380, 500 380, 620 440"
// //           stroke="#FFFFFF"
// //           strokeWidth="10"
// //           strokeLinecap="round"
// //           opacity="0.25"
// //           fill="none"
// //         />
// //         <g transform="translate(150,80)">
// //           <circle cx="80" cy="60" r="22" fill="#FF5A1F" />
// //           <path
// //             d="M80 82 L80 150"
// //             stroke="#FFFFFF"
// //             strokeWidth="16"
// //             strokeLinecap="round"
// //           />
// //           <path
// //             d="M80 95 L20 60"
// //             stroke="#FFFFFF"
// //             strokeWidth="14"
// //             strokeLinecap="round"
// //           />
// //           <path
// //             d="M80 95 L150 130"
// //             stroke="#FFFFFF"
// //             strokeWidth="14"
// //             strokeLinecap="round"
// //           />
// //           <path
// //             d="M80 150 L30 210"
// //             stroke="#FFFFFF"
// //             strokeWidth="16"
// //             strokeLinecap="round"
// //           />
// //           <path
// //             d="M80 150 L140 210"
// //             stroke="#FFFFFF"
// //             strokeWidth="16"
// //             strokeLinecap="round"
// //           />
// //         </g>
// //         <g transform="translate(380,150)">
// //           <FigureMark primary="#0F2C4A" accent="#FFFFFF" />
// //         </g>
// //       </svg>
// //     ),
// //   },
// //   {
// //     id: "society-group",
// //     eyebrow: "Society Groups",
// //     title: "Energising Group Workouts in Your Society",
// //     gradient: "from-navy via-teal-dark to-teal",
// //     art: (
// //       <svg
// //         viewBox="0 0 700 500"
// //         className="h-full w-full"
// //         preserveAspectRatio="xMidYMid slice"
// //         aria-hidden="true"
// //       >
// //         <rect x="0" y="0" width="700" height="500" fill="transparent" />
// //         <circle cx="120" cy="100" r="140" fill="#FF5A1F" opacity="0.15" />
// //         <g transform="translate(110,120) scale(0.85)">
// //           <FigureMark primary="#FFFFFF" accent="#14919B" />
// //         </g>
// //         <g transform="translate(290,150) scale(1)">
// //           <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
// //         </g>
// //         <g transform="translate(470,120) scale(0.85)">
// //           <FigureMark primary="#FFFFFF" accent="#14919B" flip />
// //         </g>
// //       </svg>
// //     ),
// //   },
// // ];

// // export default function HeroSlider() {
// //   const [index, setIndex] = useState(0);
// //   const [paused, setPaused] = useState(false);

// //   const goTo = useCallback((i: number) => {
// //     setIndex((i + SLIDES.length) % SLIDES.length);
// //   }, []);

// //   useEffect(() => {
// //     if (paused) return;
// //     const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
// //     return () => clearInterval(t);
// //   }, [paused]);

// //   return (
// //     <div
// //       className="relative h-[600px] w-full overflow-hidden"
// //       onMouseEnter={() => setPaused(true)}
// //       onMouseLeave={() => setPaused(false)}
// //     >
// //       {SLIDES.map((slide, i) => (
// //         <div
// //           key={slide.id}
// //           aria-hidden={i !== index}
// //           className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ease-in-out ${
// //             i === index ? "opacity-100" : "opacity-0"
// //           }`}
// //         >
// //           <div className="dot-grid absolute inset-0 text-white/10" />
// //           {slide.art}
// //         </div>
// //       ))}

// //       {/* Bottom gradient for text legibility */}
// //       <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

// //       {/* Slide caption (bottom-right, small) */}
// //       <div className="absolute bottom-5 right-5 hidden max-w-[220px] text-right sm:block">
// //         <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
// //           {SLIDES[index].eyebrow}
// //         </p>
// //         <p className="mt-1 font-display text-sm font-bold text-white">
// //           {SLIDES[index].title}
// //         </p>
// //       </div>

// //       {/* Arrows */}
// //       <button
// //         type="button"
// //         onClick={() => goTo(index - 1)}
// //         aria-label="Previous slide"
// //         className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 sm:left-5"
// //       >
// //         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// //       </button>
// //       <button
// //         type="button"
// //         onClick={() => goTo(index + 1)}
// //         aria-label="Next slide"
// //         className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 sm:right-5"
// //       >
// //         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// //       </button>

// //       {/* Dots */}
// //       <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:left-5 sm:translate-x-0">
// //         {SLIDES.map((slide, i) => (
// //           <button
// //             key={slide.id}
// //             type="button"
// //             onClick={() => goTo(i)}
// //             aria-label={`Go to slide ${i + 1}: ${slide.title}`}
// //             aria-current={i === index}
// //             className={`h-2.5 rounded-full transition-all ${
// //               i === index
// //                 ? "w-7 bg-orange"
// //                 : "w-2.5 bg-white/50 hover:bg-white/80"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import Image from "next/image";
// // import { useEffect, useState } from "react";
// // import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";

// // const slides = [
// //   {
// //     image: "/images/personal-training.jpg",
// //     badge: "1-on-1 Personal Training",
// //     title: "Your Personal Trainer At Your Doorstep",
// //     description:
// //       "Certified fitness trainers delivering customized workout sessions at home across Delhi NCR.",
// //   },
// //   {
// //     image: "/images/yoga-session.jpg",
// //     badge: "Yoga & Wellness",
// //     title: "Private Yoga Sessions In The Comfort Of Your Home",
// //     description:
// //       "Improve flexibility, posture and mental wellness with experienced yoga instructors.",
// //   },
// //   {
// //     image: "/images/group-workout.jpg",
// //     badge: "Society Group Fitness",
// //     title: "Transform Your Society Into A Fitness Community",
// //     description:
// //       "Group workouts, Zumba sessions and wellness programs for apartments and societies.",
// //   },
// // ];

// // export default function Hero() {
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const prevSlide = () => {
// //     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
// //   };

// //   const nextSlide = () => {
// //     setCurrent((prev) => (prev + 1) % slides.length);
// //   };

// //   return (
// //     <section className="relative h-[95vh] min-h-[700px] overflow-hidden">
// //       {slides.map((slide, index) => (
// //         <div
// //           key={index}
// //           className={`absolute inset-0 transition-opacity duration-1000 ${
// //             current === index ? "opacity-100" : "opacity-0"
// //           }`}
// //         >
// //           <Image
// //             src={slide.image}
// //             alt={slide.title}
// //             fill
// //             priority
// //             className="object-cover scale-105"
// //           />

// //           <div className="absolute inset-0 bg-black/60" />
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
// //         </div>
// //       ))}

// //       {/* Content */}
// //       <div className="relative z-20 flex h-full items-center">
// //         <div className="container mx-auto px-6 lg:px-10">
// //           <div className="max-w-3xl ml-8">
// //             <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
// //               {slides[current].badge}
// //             </span>

// //             <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-5xl">
// //               {slides[current].title}
// //             </h1>

// //             <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
// //               {slides[current].description}
// //             </p>

// //             <div className="mt-8 flex flex-wrap gap-4">
// //               <button className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
// //                 Book Free Consultation
// //                 <ArrowRight size={18} />
// //               </button>

// //               <a
// //                 href="tel:+919643342464"
// //                 className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
// //               >
// //                 <Phone size={18} />
// //                 Call Now
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Floating Stats */}
// //       <div className="absolute bottom-8 right-8 z-20 hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl lg:flex">
// //         <div className="grid grid-cols-3 gap-8 text-center text-white">
// //           <div>
// //             <h3 className="text-3xl font-bold text-orange-400">2500+</h3>
// //             <p className="text-sm text-gray-300">Clients</p>
// //           </div>

// //           <div>
// //             <h3 className="text-3xl font-bold text-orange-400">100+</h3>
// //             <p className="text-sm text-gray-300">Trainers</p>
// //           </div>

// //           <div>
// //             <h3 className="text-3xl font-bold text-orange-400">4.9★</h3>
// //             <p className="text-sm text-gray-300">Rating</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Arrows */}
// //       <button
// //         onClick={prevSlide}
// //         className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
// //       >
// //         <ChevronLeft />
// //       </button>

// //       <button
// //         onClick={nextSlide}
// //         className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
// //       >
// //         <ChevronRight />
// //       </button>

// //       {/* Dots */}
// //       <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrent(index)}
// //             className={`h-3 rounded-full transition-all ${
// //               current === index ? "w-10 bg-orange-500" : "w-3 bg-white/40"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";

// const slides = [
//   {
//     image: "/images/personal-training.jpg",
//     badge: "1-on-1 Personal Training",
//     title: "Your Personal Trainer At Your Doorstep",
//     description:
//       "Certified fitness trainers delivering customized workout sessions at home across Delhi NCR.",
//   },
//   {
//     image: "/images/yoga-session.jpg",
//     badge: "Yoga & Wellness",
//     title: "Private Yoga Sessions In The Comfort Of Your Home",
//     description:
//       "Improve flexibility, posture and mental wellness with experienced yoga instructors.",
//   },
//   {
//     image: "/images/group-workout.jpg",
//     badge: "Society Group Fitness",
//     title: "Transform Your Society Into A Fitness Community",
//     description:
//       "Group workouts, Zumba sessions and wellness programs for apartments and societies.",
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   return (
// <section className="relative h-full w-full overflow-hidden">
//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             current === index ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-black/60" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
//         </div>
//       ))}

//       {/* Content */}
//       <div className="relative z-20 flex h-full items-center">
//         <div className="w-full px-6 md:px-12 lg:px-20">
//           <div className="max-w-3xl">
//             <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
//               {slides[current].badge}
//             </span>

//             <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
//               {slides[current].title}
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
//               {slides[current].description}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
//                 Book Free Consultation
//                 <ArrowRight size={18} />
//               </button>

//               <a
//                 href="tel:+919643342464"
//                 className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
//               >
//                 <Phone size={18} />
//                 Call Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats */}
//       <div className="absolute bottom-8 right-8 z-20 hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl lg:flex">
//         <div className="grid grid-cols-3 gap-8 text-center text-white">
//           <div>
//             <h3 className="text-3xl font-bold text-orange-400">2500+</h3>
//             <p className="text-sm text-gray-300">Clients</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-orange-400">100+</h3>
//             <p className="text-sm text-gray-300">Trainers</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-orange-400">4.9★</h3>
//             <p className="text-sm text-gray-300">Rating</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-3 rounded-full transition-all ${
//               current === index ? "w-10 bg-orange-500" : "w-3 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Slide = {
//   id: string;
//   eyebrow: string;
//   title: string;
//   gradient: string;
//   art: React.ReactNode;
// };

// /** Small geometric "trainer" figure reused across slides, recolored per slide */
// function FigureMark({
//   primary,
//   accent,
//   flip = false,
// }: {
//   primary: string;
//   accent: string;
//   flip?: boolean;
// }) {
//   return (
//     <g transform={flip ? "translate(420,0) scale(-1,1)" : undefined}>
//       <circle cx="80" cy="70" r="22" fill={accent} />
//       <path
//         d="M80 92 L80 170"
//         stroke={primary}
//         strokeWidth="16"
//         strokeLinecap="round"
//       />
//       <path
//         d="M80 110 L30 150"
//         stroke={primary}
//         strokeWidth="14"
//         strokeLinecap="round"
//       />
//       <path
//         d="M80 110 L150 90"
//         stroke={primary}
//         strokeWidth="14"
//         strokeLinecap="round"
//       />
//       <path
//         d="M80 170 L40 240"
//         stroke={primary}
//         strokeWidth="16"
//         strokeLinecap="round"
//       />
//       <path
//         d="M80 170 L125 240"
//         stroke={primary}
//         strokeWidth="16"
//         strokeLinecap="round"
//       />
//     </g>
//   );
// }

// const SLIDES: Slide[] = [
//   {
//     id: "personal-training",
//     eyebrow: "1-on-1 Sessions",
//     title: "Personal Training, Delivered to Your Door",
//     gradient: "from-navy via-navy-light to-teal-dark",
//     art: (
//       <svg
//         viewBox="0 0 700 500"
//         className="h-full w-full"
//         preserveAspectRatio="xMidYMid slice"
//         aria-hidden="true"
//       >
//         <path
//           d="M40 60 L 320 420"
//           stroke="#14919B"
//           strokeWidth="40"
//           strokeLinecap="round"
//           opacity="0.3"
//         />
//         <path
//           d="M660 60 L 380 420"
//           stroke="#FF5A1F"
//           strokeWidth="40"
//           strokeLinecap="round"
//           opacity="0.3"
//         />
//         <circle cx="350" cy="250" r="160" fill="#14919B" opacity="0.12" />
//         <g transform="translate(280,90)">
//           <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
//         </g>
//       </svg>
//     ),
//   },
//   {
//     id: "yoga-flexibility",
//     eyebrow: "Mind & Body",
//     title: "Yoga & Flexibility Sessions at Home",
//     gradient: "from-teal-dark via-teal to-navy",
//     art: (
//       <svg
//         viewBox="0 0 700 500"
//         className="h-full w-full"
//         preserveAspectRatio="xMidYMid slice"
//         aria-hidden="true"
//       >
//         <circle cx="540" cy="120" r="120" fill="#FF5A1F" opacity="0.18" />
//         <path
//           d="M80 440 C 200 380, 500 380, 620 440"
//           stroke="#FFFFFF"
//           strokeWidth="10"
//           strokeLinecap="round"
//           opacity="0.25"
//           fill="none"
//         />
//         <g transform="translate(150,80)">
//           <circle cx="80" cy="60" r="22" fill="#FF5A1F" />
//           <path
//             d="M80 82 L80 150"
//             stroke="#FFFFFF"
//             strokeWidth="16"
//             strokeLinecap="round"
//           />
//           <path
//             d="M80 95 L20 60"
//             stroke="#FFFFFF"
//             strokeWidth="14"
//             strokeLinecap="round"
//           />
//           <path
//             d="M80 95 L150 130"
//             stroke="#FFFFFF"
//             strokeWidth="14"
//             strokeLinecap="round"
//           />
//           <path
//             d="M80 150 L30 210"
//             stroke="#FFFFFF"
//             strokeWidth="16"
//             strokeLinecap="round"
//           />
//           <path
//             d="M80 150 L140 210"
//             stroke="#FFFFFF"
//             strokeWidth="16"
//             strokeLinecap="round"
//           />
//         </g>
//         <g transform="translate(380,150)">
//           <FigureMark primary="#0F2C4A" accent="#FFFFFF" />
//         </g>
//       </svg>
//     ),
//   },
//   {
//     id: "society-group",
//     eyebrow: "Society Groups",
//     title: "Energising Group Workouts in Your Society",
//     gradient: "from-navy via-teal-dark to-teal",
//     art: (
//       <svg
//         viewBox="0 0 700 500"
//         className="h-full w-full"
//         preserveAspectRatio="xMidYMid slice"
//         aria-hidden="true"
//       >
//         <rect x="0" y="0" width="700" height="500" fill="transparent" />
//         <circle cx="120" cy="100" r="140" fill="#FF5A1F" opacity="0.15" />
//         <g transform="translate(110,120) scale(0.85)">
//           <FigureMark primary="#FFFFFF" accent="#14919B" />
//         </g>
//         <g transform="translate(290,150) scale(1)">
//           <FigureMark primary="#FFFFFF" accent="#FF5A1F" />
//         </g>
//         <g transform="translate(470,120) scale(0.85)">
//           <FigureMark primary="#FFFFFF" accent="#14919B" flip />
//         </g>
//       </svg>
//     ),
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const goTo = useCallback((i: number) => {
//     setIndex((i + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     if (paused) return;
//     const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
//     return () => clearInterval(t);
//   }, [paused]);

//   return (
//     <div
//       className="relative h-[600px] w-full overflow-hidden"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {SLIDES.map((slide, i) => (
//         <div
//           key={slide.id}
//           aria-hidden={i !== index}
//           className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ease-in-out ${
//             i === index ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="dot-grid absolute inset-0 text-white/10" />
//           {slide.art}
//         </div>
//       ))}

//       {/* Bottom gradient for text legibility */}
//       <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

//       {/* Slide caption (bottom-right, small) */}
//       <div className="absolute bottom-5 right-5 hidden max-w-[220px] text-right sm:block">
//         <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
//           {SLIDES[index].eyebrow}
//         </p>
//         <p className="mt-1 font-display text-sm font-bold text-white">
//           {SLIDES[index].title}
//         </p>
//       </div>

//       {/* Arrows */}
//       <button
//         type="button"
//         onClick={() => goTo(index - 1)}
//         aria-label="Previous slide"
//         className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 sm:left-5"
//       >
//         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
//       </button>
//       <button
//         type="button"
//         onClick={() => goTo(index + 1)}
//         aria-label="Next slide"
//         className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 sm:right-5"
//       >
//         <ChevronRight className="h-5 w-5" aria-hidden="true" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:left-5 sm:translate-x-0">
//         {SLIDES.map((slide, i) => (
//           <button
//             key={slide.id}
//             type="button"
//             onClick={() => goTo(i)}
//             aria-label={`Go to slide ${i + 1}: ${slide.title}`}
//             aria-current={i === index}
//             className={`h-2.5 rounded-full transition-all ${
//               i === index
//                 ? "w-7 bg-orange"
//                 : "w-2.5 bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

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

