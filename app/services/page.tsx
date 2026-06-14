import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProgramsGrid from "@/components/services/ProgramsGrid";
import HowItWorks from "@/components/services/HowItWorks";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import CTABanner from "@/components/CTABanner";
import WhyChooseCoachKart from "@/components/services/WhyChooseCoachKart";
import ResultsSection from "@/components/services/ResultsSection";
export const metadata: Metadata = {
  title: "Our Programs | CoachKart — Doorstep Fitness Coaching",
  description:
    "Explore CoachKart's doorstep fitness programs: 1-on-1 personal training, society group sessions, family & kids fitness, and versatile yoga, cardio & strength coaching across Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Programs"
        title="Fitness Programs Built Around Your Life"
        description="Whether you're training solo, with your family, or with your whole society — there's a CoachKart program designed for you."
        crumb="Services"
        image="/images/innepage.jpg"
      />
      <ProgramsGrid />

      <WhyChooseCoachKart />

      <HowItWorks />
      <ResultsSection />
      <ServicesFAQ />
      <CTABanner />
    </>
  );
}
