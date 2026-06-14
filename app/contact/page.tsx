import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import ContactFAQ from "@/components/contact-page/ContactFAQ";
import CitiesStrip from "@/components/about/CitiesStrip";

export const metadata: Metadata = {
  title: "Contact Us | CoachKart — Book Your ₹299 Demo Session",
  description:
    "Get in touch with CoachKart to book a ₹299 doorstep fitness demo session, ask questions, or reach our support team via call, WhatsApp, or email.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Let's Get Your First Session Booked"
        description="Share a few details and we'll match you with a certified coach near you — or reach us directly via call, WhatsApp, or email."
        crumb="Contact"
          image="/images/innepage.jpg"
      />
      <Contact />
      <ContactFAQ />
      <CitiesStrip />
    </>
  );
}
