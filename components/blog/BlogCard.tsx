import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

const CAT_STYLES: Record<string, string> = {
  "Fitness tips": "bg-orange-50 text-orange-700 border-orange-200",
  Services: "bg-teal-50 text-teal-700 border-teal-200",
  Wellness: "bg-purple-50 text-purple-700 border-purple-200",
  Nutrition: "bg-green-50 text-green-700 border-green-200",
};

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={`group rounded-2xl border border-gray-100 bg-white overflow-hidden flex shadow-sm hover:shadow-md transition-shadow duration-300 ${featured ? "flex-row" : "flex-col"
        }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden ${featured ? "w-1/2 min-h-[220px]" : "w-full h-[180px]"
          }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className={`flex flex-col p-5 ${featured ? "flex-1 p-7" : ""}`}>
        <span
          className={`inline-block self-start text-[11px] font-semibold px-3 py-1 rounded-full border mb-3 ${CAT_STYLES[post.category]
            }`}
        >
          {post.category}
        </span>

        <h2
          className={`font-bold leading-snug text-navy line-clamp-2 ${featured ? "text-[18px]" : "text-[14px]"
            }`}
        >
          {post.title}
        </h2>

        {featured && (
          <p className="mt-2 text-sm leading-relaxed text-navy/60 line-clamp-2">
            {post.excerpt}
          </p>
        )}

        <div className="mt-3 flex items-center gap-3 text-[11px] text-navy/50">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-navy/20" />
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 self-start inline-flex items-center gap-1.5 text-[12px] font-semibold text-orange bg-orange/8 border border-orange/20 rounded-full px-4 py-1.5 hover:bg-orange hover:text-white hover:border-orange transition-all duration-200"
        >
          Read more
          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}