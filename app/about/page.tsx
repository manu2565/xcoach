import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import OurStory from "@/components/about/OurStory";
import StatsStrip from "@/components/about/StatsStrip";
import MissionVision from "@/components/about/MissionVision";
import Promise from "@/components/about/Promise";
import ValuesGrid from "@/components/about/ValuesGrid";
import CitiesStrip from "@/components/about/CitiesStrip";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | CoachKart — Doorstep Fitness Coaching in Delhi NCR",
  description:
    "Learn how CoachKart brings certified personal trainers, yoga coaches, and group fitness sessions directly to your doorstep across Delhi, Gurugram, Noida, Ghaziabad & Faridabad.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Premium Fitness Coaching, Delivered to Your Doorstep"
        description="Discover the story, mission, and standards behind Delhi NCR's growing network of certified doorstep fitness coaches."
        crumb="About"
        image="/images/innepage.jpg"
      />
      <OurStory />
      <StatsStrip />
      <MissionVision />
      <Promise />
      <ValuesGrid />
      <CitiesStrip />
      <CTABanner />
    </>
  );
}
