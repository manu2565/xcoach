import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Copy,
  Share2,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import PageBanner from "@/components/PageBanner";


interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | CoachKart Blog`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

const CAT_STYLES: Record<string, string> = {
  "Fitness tips": "bg-orange-50 text-orange-700 border-orange-200",
  Services: "bg-teal-50 text-teal-700 border-teal-200",
  Wellness: "bg-purple-50 text-purple-700 border-purple-200",
  Nutrition: "bg-green-50 text-green-700 border-green-200",
};

const WHATSAPP_CTA =
  "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20want%20to%20book%20a%20demo%20session.";

export default function BlogInnerPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-16">
        {/* <div className="absolute inset-0">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
        </div> */}
        <PageBanner
          eyebrow="Contact Us"
          title="Let's Get Your First Session Booked"
          description="Share a few details and we'll match you with a certified coach near you — or reach us directly via call, WhatsApp, or email."
          crumb="Contact"
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=60"
        />

        <div className="rounded-[32px] border border-white/20 bg-white/95 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

          <nav className="mb-5 flex items-center gap-2 text-xs text-gray-500">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </nav>

          <span
            className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold ${CAT_STYLES[post.category]}`}
          >
            {post.category}
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight text-navy">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={15} />
              {post.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={15} />
              {post.readTime}
            </span>

            <span className="flex items-center gap-2">
              <Eye size={15} />
              {post.views}
            </span>
          </div>

          <div className="mt-7 flex items-center justify-between border-t pt-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white font-bold">
                {post.authorInitials}
              </div>

              <div>
                <h4 className="font-bold text-navy">
                  {post.author}
                </h4>

                <p className="text-sm text-gray-500">
                  {post.authorRole}
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
              ⭐ Verified CoachKart Expert
            </div>
          </div>
        </div>
      </section >

      {/* ── Article Content ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white pb-24 pt-0">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 -mt-24 relative z-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

            {/* Main Content */}
            <div>

              <div className="overflow-hidden rounded-[36px] border border-white bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

                {/* Featured Image */}
                <div className="relative h-[320px] md:h-[500px] overflow-hidden">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-md ${CAT_STYLES[post.category]}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 md:p-12">

                  <div
                    className="
              prose
              prose-lg
              max-w-none
              prose-headings:text-navy
              prose-headings:font-bold
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-p:text-[17px]
              prose-p:leading-8
              prose-p:text-slate-700
              prose-li:text-slate-700
              prose-li:leading-8
              "
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                  />

                  {/* Stats */}
                  <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">

                    {[
                      "500+ Trainers",
                      "50K+ Sessions",
                      "4.9 Rating",
                      "Delhi NCR"
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border bg-slate-50 p-6 text-center hover:shadow-lg transition"
                      >
                        <h3 className="font-bold text-navy">
                          {item}
                        </h3>
                      </div>
                    ))}

                  </div>

                  {/* Callout */}
                  <div className="my-10 rounded-3xl border border-orange-200 bg-orange-50 p-6">

                    <h4 className="mb-2 font-bold text-orange-900">
                      CoachKart Tip
                    </h4>

                    <p className="text-orange-800">
                      All our certified coaches cover major Delhi NCR
                      localities including Dwarka, Rohini, Noida,
                      Gurgaon and Greater Kailash.
                    </p>

                  </div>

                  {/* Share */}
                  <div className="border-t pt-8">

                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Share this article
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      <button className="rounded-full bg-green-500 px-5 py-3 text-white hover:bg-green-600">
                        WhatsApp
                      </button>

                      <button className="rounded-full border px-5 py-3 hover:bg-slate-50">
                        Copy Link
                      </button>

                      <button className="rounded-full border px-5 py-3 hover:bg-slate-50">
                        Share
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">

              <div className="sticky top-24 space-y-6">

                {/* Author Card */}
                <div className="rounded-3xl border bg-white p-6 shadow-sm">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white font-bold">
                      {post.authorInitials}
                    </div>

                    <div>
                      <h4 className="font-bold text-navy">
                        {post.author}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {post.authorRole}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Meta Card */}
                <div className="rounded-3xl border bg-white p-6 shadow-sm">

                  <h4 className="mb-4 font-bold text-navy">
                    Article Info
                  </h4>

                  <div className="space-y-4 text-sm">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {post.readTime}
                    </div>

                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      {post.views}
                    </div>

                  </div>

                </div>

                {/* CTA Card */}
                <div className="rounded-3xl bg-navy p-6 text-white">

                  <h4 className="text-xl font-bold">
                    Book a Demo Session
                  </h4>

                  <p className="mt-3 text-white/70">
                    Start your fitness journey today.
                  </p>

                  <a
                    href={WHATSAPP_CTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-orange px-5 py-3 font-semibold text-white"
                  >
                    WhatsApp Now
                  </a>

                </div>

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* ── Related Posts ── */}
      < section className="border-t border-gray-100 bg-white py-16 sm:py-20" >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-extrabold text-navy">
            You might also like
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`mb-2 inline-block rounded-full border px-3 py-0.5 text-[11px] font-semibold ${CAT_STYLES[rp.category]}`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="font-display text-[14px] font-bold leading-snug text-navy line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="mt-2 text-xs text-navy/45">
                    {rp.date} · {rp.readTime}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange">
                    Read more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}
