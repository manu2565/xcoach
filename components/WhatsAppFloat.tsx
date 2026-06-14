// // "use client";

// // import { useState } from "react";
// // import {
// //   MessageCircle,
// //   Phone,
// //   Calendar,
// //   Instagram,
// //   Plus,
// // } from "lucide-react";

// // export default function FloatingContactDock() {
// //   const [open, setOpen] = useState(false);

// //   const actions = [
// //     {
// //       icon: MessageCircle,
// //       href: "https://wa.me/918595596066",
// //       label: "WhatsApp",
// //       color: "bg-green-500",
// //     },
// //     {
// //       icon: Phone,
// //       href: "tel:+918595596066",
// //       label: "Call",
// //       color: "bg-blue-500",
// //     },
// //     {
// //       icon: Calendar,
// //       href: "#contact",
// //       label: "Book Demo",
// //       color: "bg-orange",
// //     },
// //     {
// //       icon: Instagram,
// //       href: "https://instagram.com",
// //       label: "Instagram",
// //       color: "bg-pink-500",
// //     },
// //   ];

// //   return (
// //     <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
// //       {open &&
// //         actions.map((item, index) => (
// //           <a
// //             key={index}
// //             href={item.href}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="group flex items-center gap-3"
// //           >
// //             <span className="rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-navy shadow-lg backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100">
// //               {item.label}
// //             </span>

// //             <div
// //               className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} text-white shadow-xl transition-transform duration-300 hover:scale-110`}
// //             >
// //               <item.icon size={20} />
// //             </div>
// //           </a>
// //         ))}

// //       {/* Main Button */}
// //       <button
// //         onClick={() => setOpen(!open)}
// //         className="group flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange to-orange-600 text-white shadow-2xl transition-all duration-300 hover:scale-110"
// //       >
// //         <Plus
// //           size={28}
// //           className={`transition-transform duration-300 ${
// //             open ? "rotate-45" : ""
// //           }`}
// //         />
// //       </button>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import {
//   MessageCircle,
//   Phone,
//   CalendarDays,
//   Instagram,
//   Plus,
// } from "lucide-react";

// export default function FloatingContactDock() {
//   const [open, setOpen] = useState(false);

//   const actions = [
//     {
//       icon: MessageCircle,
//       href: "https://wa.me/918595596066",
//       label: "WhatsApp",
//       bg: "bg-green-500",
//     },
//     {
//       icon: Phone,
//       href: "tel:+918595596066",
//       label: "Call Now",
//       bg: "bg-blue-500",
//     },
//     {
//       icon: CalendarDays,
//       href: "#contact",
//       label: "Book Trial",
//       bg: "bg-orange",
//     },
//     {
//       icon: Instagram,
//       href: "https://instagram.com",
//       label: "Instagram",
//       bg: "bg-pink-500",
//     },
//   ];

//   return (
//     <div className="fixed bottom-6 right-6 z-[9999]">
//       {/* Online Badge */}
//       <div
//         className={`absolute bottom-24 right-0 transition-all duration-500 ${
//           open
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-4 pointer-events-none"
//         }`}
//       >
//         <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-white/80 px-4 py-2 shadow-xl backdrop-blur-xl">
//           <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
//           <span className="text-xs font-semibold text-navy">
//             Coach Available
//           </span>
//         </div>
//       </div>

//       {/* Contact Panel */}
//       <div
//         className={`absolute bottom-20 right-0 transition-all duration-500 ${
//           open
//             ? "opacity-100 translate-y-0 scale-100"
//             : "opacity-0 translate-y-4 scale-95 pointer-events-none"
//         }`}
//       >
//         <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
//           <div className="space-y-3">
//             {actions.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-3 rounded-2xl px-2 py-1 transition-all hover:bg-white/10"
//               >
//                 <div
//                   className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
//                 >
//                   <item.icon size={20} />
//                 </div>

//                 <span className="pr-2 text-sm font-semibold text-white whitespace-nowrap">
//                   {item.label}
//                 </span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         aria-label="Open Contact Options"
//         className="
//           group
//           relative
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-full
//           bg-gradient-to-br
//           from-orange
//           via-orange
//           to-orange-600
//           text-white
//           shadow-[0_0_40px_rgba(255,90,31,0.45)]
//           transition-all
//           duration-500
//           hover:scale-110
//         "
//       >
//         {/* Glow Ring */}
//         <span className="absolute inset-0 rounded-full animate-ping bg-orange/20" />

//         <Plus
//           size={28}
//           className={`relative z-10 transition-transform duration-500 ${
//             open ? "rotate-45" : ""
//           }`}
//         />
//       </button>
//     </div>
//   );
// }

// "use client";

// import { MessageCircle, Phone, Calendar, Instagram } from "lucide-react";

// const items = [
//   {
//     icon: MessageCircle,
//     label: "WhatsApp",
//     href: "https://wa.me/918595596066",
//     bg: "bg-green-500",
//   },
//   {
//     icon: Phone,
//     label: "Call Now",
//     href: "tel:+918595596066",
//     bg: "bg-sky-500",
//   },
//   {
//     icon: Calendar,
//     label: "Book Trial",
//     href: "#contact",
//     bg: "bg-orange",
//   },

// ];

// export default function FloatingRail() {
//   return (
//     <div className="fixed right-0 top-1/2 z-[9999] -translate-y-1/2">
//       <div className="flex flex-col gap-3">
//         {items.map((item) => (
//           <a
//             key={item.label}
//             href={item.href}
//             target="_blank"
//             rel="noreferrer"
//             className="
//               group
//               flex
//               items-center
//               justify-end
//             "
//           >
//             <div
//               className="
//               flex
//               items-center
//               overflow-hidden
//               rounded-l-2xl
//               border
//               border-white/10
//               bg-white/90
//               backdrop-blur-xl
//               shadow-xl
//               transition-all
//               duration-500
//               hover:pr-4
//             "
//             >
//               <span
//                 className="
//                 max-w-0
//                 overflow-hidden
//                 whitespace-nowrap
//                 text-sm
//                 font-semibold
//                 text-navy
//                 transition-all
//                 duration-500
//                 group-hover:max-w-[150px]
//                 group-hover:px-4
//               "
//               >
//                 {item.label}
//               </span>

//               <div
//                 className={`flex h-14 w-14 items-center justify-center ${item.bg} text-white`}
//               >
//                 <item.icon size={22} />
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const items = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/918595596066",
    bg: "bg-[#25D366]",
  },
  {
    icon: Phone,
    label: "Call Now",
    href: "tel:+918595596066",
    bg: "bg-sky-500",
  },
  {
    icon: Calendar,
    label: "Book Trial",
    href: "#contact",
    bg: "bg-orange-500",
  },
];

export default function FloatingRail() {
  return (
    <div className="fixed right-0 top-1/2 z-[9999] -translate-y-1/2">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            className="group flex items-center justify-end"
          >
            <div
              className="
                flex
                items-center
                overflow-hidden
                rounded-l-2xl
                border
                border-white/10
                bg-white/95
                backdrop-blur-xl
                shadow-xl
                transition-all
                duration-500
                hover:pr-4
                hover:shadow-2xl
              "
            >
              <span
                className="
                  max-w-0
                  overflow-hidden
                  whitespace-nowrap
                  text-sm
                  font-semibold
                  text-slate-800
                  transition-all
                  duration-500
                  group-hover:max-w-[160px]
                  group-hover:px-4
                "
              >
                {item.label}
              </span>

              <div
                className={`flex h-14 w-14 items-center justify-center ${item.bg} text-white`}
              >
                <item.icon size={24} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
