import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import LogoMark from "./LogoMark";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Programs", href: "#services" },
  { label: "Quality Standards", href: "#standards" },
  { label: "Careers (Trainers)", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

const PROGRAM_LINKS = [
  "Personal Training",
  "Society Group Training",
  "Family Fitness",
  "Kids Fit Club",
  "Yoga & Zumba",
  "Sports Coaching",
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EL7MtDFJY/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xcoachkart",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xcoachkart/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@XcoachKart",
    Icon: Youtube,
  },
];

function PinterestIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.395-1.72-4.07-4.176-4.07-2.845 0-4.515 2.135-4.515 4.34 0 .859.327 1.781.735 2.281a.296.296 0 0 1 .068.284c-.073.31-.24.995-.273 1.134-.043.18-.144.219-.332.132-1.236-.575-2.01-2.382-2.01-3.834 0-3.122 2.27-5.989 6.54-5.989 3.434 0 6.103 2.446 6.103 5.715 0 3.41-2.15 6.156-5.135 6.156-1.002 0-1.945-.52-2.268-1.136l-.617 2.355A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* 🔥 NEWSLETTER SECTION */}
        <div className="mb-14 rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-2xl font-bold">
                Get Fitness Tips & Offers
              </h2>
              <p className="text-white/60 mt-1">
                Subscribe for updates, workouts & trainer insights.
              </p>
            </div>

            <div className="flex w-full max-w-md items-center gap-2">
              <div className="flex w-full items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Mail className="h-4 w-4 text-white/60" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                />
              </div>

              <button className="rounded-full bg-orange px-5 py-2 text-sm font-bold hover:bg-orange-dark transition">
                Subscribe
              </button>
            </div>

          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-xl font-extrabold">
                <span>Coach</span>
                <span className="text-orange">Kart</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm text-white/60">
              Premium doorstep fitness coaching platform connecting certified
              trainers with clients across India.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-teal transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href="https://in.pinterest.com/xcoachkart/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-teal transition"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase text-white/80">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase text-white/80">
              Programs
            </h3>
            <ul className="mt-4 space-y-2">
              {PROGRAM_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-teal transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between text-xs text-white/50">
          <p>© 2026 CoachKart. All rights reserved.</p>
          <p>Built for modern doorstep fitness experience.</p>
        </div>
      </div>
    </footer>
  );
}