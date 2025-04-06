import { AboutSection } from "@/components/AboutSection";
import Breadcrumb from "@/components/Breadcrumb";
import { CTAAreaSection } from "@/components/CTAAreaSection";
import { CounterSection } from "@/components/CounterSection";
import { Testimonials } from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - HeavenQuest Inn & Suites",
  description:
    "Learn more about HeavenQuest Inn & Suites, where luxury meets exceptional service. Our commitment to delivering personalized stays and unforgettable travel experiences makes us a top choice for travelers.",
  keywords:
    "about HeavenQuest Inn & Suites, luxury accommodations, personalized service, 5-star hospitality, boutique hotel, luxury travel, premium stays, hotel services, travel experiences, boutique hotel India, luxury destination stays",
};

export default function Home() {
  return (
    <div>
      <Breadcrumb
        title="About Us"
        path="about"
        backgroundImage="/img/bg/about.jpg"
      />
      <AboutSection />
      <CTAAreaSection />
      <CounterSection />
      <Testimonials />
    </div>
  );
}
