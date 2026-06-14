"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, LogIn } from "lucide-react";
import LogoMark from "./LogoMark";

const WHATSAPP_URL =
  "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20would%20like%20to%20know%20more%20about%20your%20doorstep%20fitness%20sessions.";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Standards", href: "/standards" },
  { label: "For Trainers (Careers)", href: "/careers" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<"client" | "trainer">("client");
  const [forgotMode, setForgotMode] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {" "}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_18px_-6px_rgba(15,44,74,0.25)]"
          : "bg-cream/80 backdrop-blur-sm"
          }`}
        style={{ height: "var(--header-h)" }}
      >
        <div className="mx-auto flex h-full max-w-7.5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="CoachKart — Home"
          >
            <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-navy">Coach</span>
              <span className="text-orange">Kart</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-semibold text-navy/80 transition-colors hover:bg-teal-light hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* <Link
            href="/contact"
            className="flex items-center gap-1.5 text-[15px] font-semibold text-navy/80 transition-colors hover:text-teal-dark"
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Login
          </Link> */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[15px] font-bold text-white shadow-sm shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-md hover:shadow-orange/40 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">+91 85955 96066</span>
            </a>
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[15px] font-bold text-white shadow-sm shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-md hover:shadow-orange/40 active:scale-[0.98]"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-teal-light lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[var(--header-h)] overflow-y-auto bg-cream border-t border-navy/10 transition-[max-height,opacity] duration-300 ease-in-out ${open
            ? "max-h-[calc(100vh-var(--header-h))] opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-teal-light hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLoginOpen(true);
                setOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-navy"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3.5 text-base font-bold text-white shadow-sm shadow-orange/30 transition-colors hover:bg-orange-dark"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp: +91 85955 96066
            </a>
          </nav>
        </div>
      </header>
      {loginOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[36px] border border-white/20 bg-white/95 shadow-[0_40px_100px_rgba(15,44,74,0.25)] backdrop-blur-xl">
            {/* Close */}
            <button
              onClick={() => {
                setLoginOpen(false);
                setForgotMode(false);
              }}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* LEFT PANEL */}
              <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0F2C4A] via-[#16496D] to-[#0C6E76] p-7 text-white">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="relative z-10">
                  <img
                    src="/logo.png"
                    alt="CoachKart"
                    className="h-20 w-auto"
                  />
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                    Trusted by 10,000+ Members
                  </div>
                  <h2 className="mt-6 text-5xl font-black leading-tight">
                    Your Personal
                    <span className="block text-orange-400">
                      Fitness Journey
                    </span>
                  </h2>
                  <img
                    src="/fitness-login.png"
                    alt="Fitness"
                    className="mx-auto mt-8 w-full max-w-xs"
                  />
                  <p className="mt-4 max-w-sm text-white/75">
                    India's premium doorstep fitness platform connecting
                    certified trainers with fitness enthusiasts.
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <h4 className="text-2xl font-bold">10K+</h4>
                    <p className="text-xs text-white/70">Clients</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <h4 className="text-2xl font-bold">500+</h4>
                    <p className="text-xs text-white/70">Trainers</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <h4 className="text-2xl font-bold">4.9★</h4>
                    <p className="text-xs text-white/70">Rating</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="p-6 lg:p-7">
                {!forgotMode ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-slate-900">
                        {authMode === "login"
                          ? "Welcome Back"
                          : "Create Account"}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        Access your CoachKart dashboard
                      </p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-6 flex rounded-2xl bg-slate-100 p-1">
                      <button
                        onClick={() => setAuthMode("login")}
                        className={`flex-1 rounded-xl py-3 font-semibold transition ${authMode === "login"
                          ? "bg-orange text-white shadow-md"
                          : "text-slate-600"
                          }`}
                      >
                        Login
                      </button>

                      <button
                        onClick={() => setAuthMode("signup")}
                        className={`flex-1 rounded-xl py-3 font-semibold transition ${authMode === "signup"
                          ? "bg-orange text-white shadow-md"
                          : "text-slate-600"
                          }`}
                      >
                        Sign Up
                      </button>
                    </div>

                    {/* Role */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setRole("client")}
                        className={`group rounded-2xl border p-4 text-left transition-all duration-300 ${role === "client"
                          ? "border-orange bg-orange/5 shadow-lg"
                          : "border-slate-200 hover:border-orange/30"
                          }`}
                      >
                        <div className="text-3xl">🏋️</div>
                        <h4 className="mt-2 font-bold">Client</h4>
                        <p className="text-xs text-slate-500">
                          Book fitness sessions
                        </p>
                      </button>

                      <button
                        onClick={() => setRole("trainer")}
                        className={`rounded-2xl border p-4 text-left transition ${role === "trainer"
                          ? "border-orange bg-orange/5"
                          : "border-slate-200"
                          }`}
                      >
                        <div className="text-3xl">🎯</div>
                        <h4 className="font-bold">Trainer</h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Join As Coach
                        </p>
                      </button>
                    </div>

                    {authMode === "signup" && (
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="
w-full
rounded-2xl
border
border-slate-200
bg-slate-50
px-4
py-3
text-sm
outline-none
transition-all
focus:border-orange
focus:bg-white
focus:ring-4
focus:ring-orange/10
"
                      />
                    )}

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="
w-full
rounded-2xl
border
border-slate-200
bg-slate-50
px-4
py-3
text-sm
outline-none
transition-all
focus:border-orange
focus:bg-white
focus:ring-4
focus:ring-orange/10
"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      className="
w-full
rounded-2xl
border
border-slate-200
bg-slate-50
px-4
py-3
text-sm
outline-none
transition-all
focus:border-orange
focus:bg-white
focus:ring-4
focus:ring-orange/10
"
                    />

                    {authMode === "login" && (
                      <div className="mb-6 text-right">
                        <button
                          type="button"
                          onClick={() => setForgotMode(true)}
                          className="font-medium text-orange"
                        >
                          Forgot Password?
                        </button>
                      </div>
                    )}

                    <button className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02]">
                      {authMode === "login"
                        ? `Login as ${role}`
                        : `Create ${role} Account`}
                    </button>

                    <div className="my-6 flex items-center">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="px-3 text-xs text-slate-400">
                        OR CONTINUE WITH
                      </span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="rounded-2xl border py-3 font-semibold hover:bg-slate-50">
                        Google
                      </button>

                      <button className="rounded-2xl border py-3 font-semibold hover:bg-slate-50">
                        Facebook
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Reset Password
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Enter your registered email address.
                    </p>

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="
mt-6
w-full
rounded-2xl
border
border-slate-200
bg-slate-50
px-4
py-3
text-sm
outline-none
transition-all
focus:border-orange
focus:bg-white
focus:ring-4
focus:ring-orange/10
"
                    />

                    <button className="mt-5 w-full rounded-2xl bg-orange py-4 font-bold text-white">
                      Send Reset Link
                    </button>

                    <button
                      onClick={() => setForgotMode(false)}
                      className="mt-4 w-full font-semibold text-orange"
                    >
                      Back to Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   Menu,
//   X,
//   MessageCircle,
//   LogIn,
//   User,
//   Bell,
//   ChevronDown,
//   LayoutDashboard,
//   LogOut,
// } from "lucide-react";
// import LogoMark from "./LogoMark";

// const WHATSAPP_URL =
//   "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20would%20like%20to%20book%20a%20trial%20session.";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Trainers", href: "/trainers" },
//   { label: "Contact", href: "/contact" },
// ];

// type UserRole = "guest" | "client" | "trainer";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   // 🔥 MOCK AUTH STATE (later replace with backend / NextAuth)
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [role, setRole] = useState<UserRole>("client");

//   const user = {
//     name: "Manu Singh",
//     avatar: "https://i.pravatar.cc/100",
//   };

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/90 backdrop-blur-md shadow-md"
//             : "bg-white/70 backdrop-blur-sm"
//         }`}
//         style={{ height: "var(--header-h)" }}
//       >
//         <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-2">
//             <LogoMark className="h-9 w-9" />
//             <span className="text-xl font-extrabold">
//               Coach<span className="text-orange">Kart</span>
//             </span>
//           </Link>

//           {/* NAV */}
//           <nav className="hidden lg:flex gap-6">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm font-semibold text-gray-700 hover:text-orange"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-3">

//             {/* WhatsApp CTA */}
//             <a
//               href={WHATSAPP_URL}
//               className="hidden sm:flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-white text-sm font-bold hover:scale-105 transition"
//             >
//               <MessageCircle size={16} />
//               Book Trial
//             </a>

//             {/* Notifications */}
//             {isLoggedIn && (
//               <button className="relative rounded-full p-2 hover:bg-gray-100">
//                 <Bell size={18} />
//                 <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
//               </button>
//             )}

//             {/* LOGIN / PROFILE */}
//             {!isLoggedIn ? (
//               <button
//                 className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white text-sm font-bold"
//                 onClick={() => setIsLoggedIn(true)}
//               >
//                 <LogIn size={16} />
//                 Login
//               </button>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdown(!dropdown)}
//                   className="flex items-center gap-2 rounded-full border px-3 py-1.5 hover:bg-gray-50"
//                 >
//                   <img
//                     src={user.avatar}
//                     className="h-7 w-7 rounded-full"
//                     alt="user"
//                   />
//                   <span className="text-sm font-semibold">{user.name}</span>
//                   <ChevronDown size={16} />
//                 </button>

//                 {/* DROPDOWN */}
//                 {dropdown && (
//                   <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-white shadow-lg overflow-hidden">
//                     <Link
//                       href={
//                         role === "trainer"
//                           ? "/trainer/dashboard"
//                           : "/client/dashboard"
//                       }
//                       className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
//                     >
//                       <LayoutDashboard size={16} />
//                       Dashboard
//                     </Link>

//                     <button
//                       className="flex w-full items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
//                       onClick={() => {
//                         setIsLoggedIn(false);
//                         setDropdown(false);
//                       }}
//                     >
//                       <LogOut size={16} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* MOBILE MENU */}
//             <button
//               className="lg:hidden p-2"
//               onClick={() => setOpen(!open)}
//             >
//               {open ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="lg:hidden border-t bg-white px-4 py-4">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="block py-3 text-sm font-semibold"
//                 onClick={() => setOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   Menu,
//   X,
//   MessageCircle,
//   LogIn,
//   User,
//   Bell,
//   ChevronDown,
//   LayoutDashboard,
//   LogOut,
// } from "lucide-react";
// import LogoMark from "./LogoMark";

// const WHATSAPP_URL =
//   "https://wa.me/918595596066?text=Hi%20CoachKart!%20I%20would%20like%20to%20book%20a%20trial%20session.";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Trainers", href: "/trainers" },
//   { label: "Contact", href: "/contact" },
// ];

// type UserRole = "guest" | "client" | "trainer";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   // 🔥 MOCK AUTH STATE (later replace with backend / NextAuth)
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [role, setRole] = useState<UserRole>("client");

//   const user = {
//     name: "Manu Singh",
//     avatar: "https://i.pravatar.cc/100",
//   };

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/90 backdrop-blur-md shadow-md"
//             : "bg-white/70 backdrop-blur-sm"
//         }`}
//         style={{ height: "var(--header-h)" }}
//       >
//         <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-2">
//             <LogoMark className="h-9 w-9" />
//             <span className="text-xl font-extrabold">
//               Coach<span className="text-orange">Kart</span>
//             </span>
//           </Link>

//           {/* NAV */}
//           <nav className="hidden lg:flex gap-6">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm font-semibold text-gray-700 hover:text-orange"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-3">

//             {/* WhatsApp CTA */}
//             <a
//               href={WHATSAPP_URL}
//               className="hidden sm:flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-white text-sm font-bold hover:scale-105 transition"
//             >
//               <MessageCircle size={16} />
//               Book Trial
//             </a>

//             {/* Notifications */}
//             {isLoggedIn && (
//               <button className="relative rounded-full p-2 hover:bg-gray-100">
//                 <Bell size={18} />
//                 <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
//               </button>
//             )}

//             {/* LOGIN / PROFILE */}
//             {!isLoggedIn ? (
//               <button
//                 className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white text-sm font-bold"
//                 onClick={() => setIsLoggedIn(true)}
//               >
//                 <LogIn size={16} />
//                 Login
//               </button>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdown(!dropdown)}
//                   className="flex items-center gap-2 rounded-full border px-3 py-1.5 hover:bg-gray-50"
//                 >
//                   <img
//                     src={user.avatar}
//                     className="h-7 w-7 rounded-full"
//                     alt="user"
//                   />
//                   <span className="text-sm font-semibold">{user.name}</span>
//                   <ChevronDown size={16} />
//                 </button>

//                 {/* DROPDOWN */}
//                 {dropdown && (
//                   <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-white shadow-lg overflow-hidden">
//                     <Link
//                       href={
//                         role === "trainer"
//                           ? "/trainer/dashboard"
//                           : "/client/dashboard"
//                       }
//                       className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
//                     >
//                       <LayoutDashboard size={16} />
//                       Dashboard
//                     </Link>

//                     <button
//                       className="flex w-full items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
//                       onClick={() => {
//                         setIsLoggedIn(false);
//                         setDropdown(false);
//                       }}
//                     >
//                       <LogOut size={16} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* MOBILE MENU */}
//             <button
//               className="lg:hidden p-2"
//               onClick={() => setOpen(!open)}
//             >
//               {open ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="lg:hidden border-t bg-white px-4 py-4">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="block py-3 text-sm font-semibold"
//                 onClick={() => setOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </header>
//     </>
//   );
// }
