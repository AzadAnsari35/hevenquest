import { TopDestinationSection } from "@/components/TopDestinationSection";
import { AboutSection } from "@/components/AboutSection";
import { DestinationGallery } from "@/components/DestinationGallery";
import { FeatureAreaSection } from "@/components/FeatureAreaSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTAAreaSection } from "@/components/CTAAreaSection";
import { CounterSection } from "@/components/CounterSection";
import { Testimonials } from "@/components/Testimonials";
import HeroSlider from "@/components/HeroSlider";
import { Loader } from "@/components/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HeavenQuest Inn & Suites - Luxury Stays & Memorable Experiences",
  description:
    "Welcome to HeavenQuest Inn & Suites, where comfort meets luxury. Explore our top-tier accommodations, personalized services, and seamless travel experiences. Book your dream stay today and create unforgettable memories with us.",
  keywords:
    "luxury hotel, personalized accommodations, best travel experiences, premium stays, HeavenQuest Inn & Suites, vacation bookings, boutique hotels, family-friendly stays, travel destinations, hotel booking, 5-star hospitality, seamless travel services, luxury travel India",
};

export default function Home() {
  return (
    <Loader>
      <HeroSlider />
      <AboutSection />
      <TopDestinationSection />
      <DestinationGallery />
      <FeatureAreaSection />
      <WhyChooseUs />
      <CTAAreaSection />
      <CounterSection />
      <Testimonials />
    </Loader>
  );
}
