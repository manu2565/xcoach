import type { Metadata } from "next";

import PageBanner from "@/components/PageBanner";

import TrainerAbout from "@/components/trainers/TrainerAbout";
import TrainerExpertise from "@/components/trainers/TrainerExpertise";
import TrainerCertifications from "@/components/trainers/TrainerCertifications";
import TrainerTransformations from "@/components/trainers/TrainerTransformations";
import TrainerReviews from "@/components/trainers/TrainerReviews";
import TrainerPrograms from "@/components/trainers/TrainerPrograms";
import TrainerAvailability from "@/components/trainers/TrainerAvailability";
import TrainerAchievements from "@/components/trainers/TrainerAchievements";
import TrainerServiceAreas from "@/components/trainers/TrainerServiceAreas";
import TrainerVideoIntro from "@/components/trainers/TrainerVideoIntro";
import TrainerSuccessMetrics from "@/components/trainers/TrainerSuccessMetrics";
import TrainerGallery from "@/components/trainers/TrainerGallery";
import TrainerFAQ from "@/components/trainers/TrainerFAQ";
import TrainerRelatedProfiles from "@/components/trainers/TrainerRelatedProfiles";

import ApplyCTA from "@/components/trainers/ApplyCTA";

export const metadata: Metadata = {
  title: "Trainer Profile | CoachKart",
  description:
    "View certified fitness trainer profile including experience, certifications, reviews, availability and service areas.",
};

export default function TrainerPage() {
  return (
    <>
      {/* HERO */}
      <PageBanner
        eyebrow="Certified Trainer"
        title="Meet Your Fitness Coach"
        description="Explore full profile, experience, certifications, reviews and availability before booking your session."
        crumb="Trainer Profile"
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
      />

      {/* PROFILE SECTIONS */}
      <TrainerAbout />

      <TrainerExpertise />

      <TrainerCertifications />

      <TrainerTransformations />

      <TrainerReviews />

      <TrainerPrograms />

      <TrainerAvailability />

      <TrainerAchievements />

      <TrainerServiceAreas />

      <TrainerVideoIntro />

      <TrainerSuccessMetrics />

      <TrainerGallery />

      <TrainerFAQ />

      <TrainerRelatedProfiles />

      {/* FINAL CTA */}
      <ApplyCTA />
    </>
  );
}