import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import WhyJoinRequirements from "@/components/careers/WhyJoinRequirements";
import ApplicationProcess from "@/components/careers/ApplicationProcess";
import TrainerFAQ from "@/components/careers/TrainerFAQ";
import ApplyCTA from "@/components/careers/ApplyCTA";

export const metadata: Metadata = {
  title: "For Trainers | CoachKart — Join Our Coaching Network",
  description:
    "Join CoachKart's certified trainer network across Delhi NCR. Competitive compensation, hassle-free scheduling, and continuous professional development.",
};

export default function CareersPage() {
  return (
    <>
      <PageBanner
        eyebrow="For Trainers"
        title="Build Your Coaching Career With CoachKart"
        description="Join a growing network of certified fitness professionals delivering premium sessions across Delhi NCR — with the scheduling and client acquisition handled for you."
        crumb="Careers"
          image="/images/innepage.jpg"
      />
      <WhyJoinRequirements />
      <ApplicationProcess />
      <TrainerFAQ />
      <ApplyCTA />
    </>
  );
}
