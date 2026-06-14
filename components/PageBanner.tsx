// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// export default function PageBanner({
//   eyebrow,
//   title,
//   description,
//   crumb,
// }: {
//   eyebrow: string;
//   title: string;
//   description?: string;
//   crumb: string;
// }) {
//   return (
//     <section className="relative overflow-hidden bg-navy pt-[var(--header-h)]">
//       {/* Decorative glows */}
//       <div
//         className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl sm:h-96 sm:w-96"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-orange/20 blur-3xl sm:h-80 sm:w-80"
//         aria-hidden="true"
//       />
//       <div
//         className="dot-grid pointer-events-none absolute inset-0 text-white/[0.04]"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
//         <nav
//           aria-label="Breadcrumb"
//           className="flex items-center gap-1.5 text-sm font-medium text-white/55"
//         >
//           <Link href="/" className="transition-colors hover:text-white">
//             Home
//           </Link>
//           <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
//           <span className="text-white">{crumb}</span>
//         </nav>

//         <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal">
//           <span className="h-2 w-2 rounded-full bg-orange" />
//           {eyebrow}
//         </span>

//         <h1 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
//           {title}
//         </h1>

//         {description && (
//           <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
//             {description}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function PageBanner({
  eyebrow,
  title,
  description,
  crumb,
  image = "/images/about-banner.jpg",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-[var(--header-h)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      {/* Decorative Glow */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm font-medium text-white/70"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="text-white">{crumb}</span>
        </nav>

        {/* Tag */}
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-orange" />
          {eyebrow}
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}