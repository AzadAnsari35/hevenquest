import { TopDestinationSection } from "@/components/TopDestinationSection";
import { AboutSection } from "@/components/AboutSection";
import { DestinationGallery } from "@/components/DestinationGallery";
import { FeatureAreaSection } from "@/components/FeatureAreaSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTAAreaSection } from "@/components/CTAAreaSection";
import { CounterSection } from "@/components/CounterSection";
import { Testimonials } from "@/components/Testimonials";
import HeroSlider from "@/components/HeroSlider";
import Breadcrumb from "@/components/Breadcrumb";

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
