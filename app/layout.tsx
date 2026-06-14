import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoachKart | Professional Doorstep Fitness Coaching in Delhi NCR",
  description:
    "Redefine your fitness with CoachKart. Certified personal trainers for 1-hour doorstep sessions, custom workouts, and nutrition guidance — delivered to your home across Delhi, Gurugram, Noida, Ghaziabad & Faridabad.",
  keywords: [
    "fitness coaching Delhi NCR",
    "personal trainer doorstep",
    "home fitness coach Noida",
    "fitness trainer Gurugram",
    "doorstep yoga training",
    "strength training home",
    "kids fitness Delhi",
    "society group fitness training",
  ],
  openGraph: {
    title: "CoachKart | Professional Doorstep Fitness Coaching",
    description:
      "Certified trainers, transparent pricing, and structured 1-hour sessions delivered directly to your doorstep in Delhi NCR. Book a demo session today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
