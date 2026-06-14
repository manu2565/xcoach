import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import StatsStrip from "@/components/about/StatsStrip";
import StandardsLists from "@/components/standards/StandardsLists";
import VettingProcess from "@/components/standards/VettingProcess";
import CTABanner from "@/components/CTABanner";
export const metadata: Metadata = {
  title: "Our Standards | CoachKart — Quality You Can Measure",
  description:
    "See the certification checks, performance audits, and concierge-level service standards every CoachKart trainer is held to before and during your sessions.",
};
export default function StandardsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Quality Standards"
        title="Elite Protocols, Engineered for Results"
        description="Consistency, safety, and a concierge-level experience — every session, every coach, every time."
        crumb="Our Standards"
        image="/images/innepage.jpg"
      />
      <StatsStrip />
      <StandardsLists />
      <VettingProcess />
      <CTABanner
        title="Experience the CoachKart standard yourself"
        description="Book a ₹299 demo session and see why our protocols are built for measurable, lasting results."
      />
    </>
  );
}
