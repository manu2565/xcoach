// import type { Metadata } from "next";
// import PageBanner from "@/components/PageBanner";
// import WhyJoinRequirements from "@/components/careers/WhyJoinRequirements";
// import ApplicationProcess from "@/components/careers/ApplicationProcess";
// import TrainerFAQ from "@/components/careers/TrainerFAQ";
// import ApplyCTA from "@/components/careers/ApplyCTA";

// export const metadata: Metadata = {
//   title: "For Trainers | CoachKart — Join Our Coaching Network",
//   description:
//     "Join CoachKart's certified trainer network across Delhi NCR. Competitive compensation, hassle-free scheduling, and continuous professional development.",
// };

// export default function CareersPage() {
//   return (
//     <>
//       <PageBanner
//         eyebrow="For Trainers"
//         title="Build Your Coaching Career With CoachKart"
//         description="Join a growing network of certified fitness professionals delivering premium sessions across Delhi NCR — with the scheduling and client acquisition handled for you."
//         crumb="Careers"
//           image="/images/innepage.jpg"
//       />
//       <WhyJoinRequirements />
//       <ApplicationProcess />
//       <TrainerFAQ />
//       <ApplyCTA />
//     </>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Blog | CoachKart — Fitness Tips, Training Guides & Wellness Advice",
  description:
    "Expert fitness articles from CoachKart's certified coaches. Home training guides, nutrition tips, wellness routines and service updates for Delhi NCR.",
};

const CATEGORIES = ["All posts", "Fitness tips", "Services", "Wellness", "Nutrition"];

const CAT_STYLES: Record<string, string> = {
  "Fitness tips": "bg-orange-50 text-orange-700 border-orange-200",
  Services: "bg-teal-50 text-teal-700 border-teal-200",
  Wellness: "bg-purple-50 text-purple-700 border-purple-200",
  Nutrition: "bg-green-50 text-green-700 border-green-200",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Let's Get Your First Session Booked"
        description="Share a few details and we'll match you with a certified coach near you — or reach us directly via call, WhatsApp, or email."
        crumb="Contact"
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=60"
      />
      {/* ── Banner ── */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        {/* <div className="absolute inset-0">
          <Image
            src=""
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
        </div> */}


        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange">
            CoachKart blog
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Fitness tips, trainer insights
            <span className="block text-orange">&amp; wellness guides</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Expert advice from certified coaches — from fat loss science to
            home workout hacks, all written for real people with real schedules.
          </p>

          {/* Category filter chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={cat === "All posts" ? "/blog" : `/blog?category=${cat}`}
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white/60 transition hover:border-orange hover:bg-orange hover:text-white"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Featured post — full-width 2-column */}
          <article className="group mb-10 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold ${CAT_STYLES[featured.category]}`}
                  >
                    {featured.category}
                  </span>
                  <span className="rounded-full bg-orange/10 px-3 py-1 text-[11px] font-bold text-orange">
                    Featured
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
                  {featured.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-navy/60 sm:text-base">
                  {featured.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-3 text-xs text-navy/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-navy/20" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                    {featured.authorInitials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{featured.author}</p>
                    <p className="text-xs text-navy/50">{featured.authorRole}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange/20 transition hover:bg-orange-dark"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* 5 remaining posts — 3-column grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span
                    className={`mb-3 inline-block self-start rounded-full border px-3 py-1 text-[11px] font-semibold ${CAT_STYLES[post.category]}`}
                  >
                    {post.category}
                  </span>

                  <h2 className="font-display text-[15px] font-bold leading-snug text-navy line-clamp-2 flex-1">
                    {post.title}
                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-[11px] text-navy/50">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                    <span className="h-1 w-1 rounded-full bg-navy/20" />
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-orange/25 bg-orange/8 px-4 py-1.5 text-xs font-semibold text-orange transition hover:bg-orange hover:text-white hover:border-orange"
                  >
                    Read more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-14 flex items-center justify-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-navy/50 hover:border-orange hover:text-orange transition">
              ‹
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-semibold transition ${p === 1
                  ? "border-navy bg-navy text-white"
                  : "border-gray-200 bg-white text-navy/60 hover:border-orange hover:text-orange"
                  }`}
              >
                {p}
              </button>
            ))}
            <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-navy/50 hover:border-orange hover:text-orange transition">
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
