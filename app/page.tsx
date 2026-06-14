import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Standards from "@/components/Standards";
import Careers from "@/components/Careers";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import HeroSlider from "@/components/HeroSlider";

import VideoSliderSection from "@/components/VideoSliderSection";
export default function Home() {
  return (
    <>
    <HeroSlider />
      <Hero />
      <About />
      <Services />
      <Standards />
      <VideoSliderSection />
      <Careers />
      <Testimonials />
      <Contact />
    </>
  );
}
