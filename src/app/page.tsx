import { TopDestinationSection } from "@/components/TopDestinationSection";
import { AboutSection } from "@/components/AboutSection";
import { DestinationGallery } from "@/components/DestinationGallery";
import { FeatureAreaSection } from "@/components/FeatureAreaSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTAAreaSection } from "@/components/CTAAreaSection";
import { CounterSection } from "@/components/CounterSection";
import { Testimonials } from "@/components/Testimonials";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <TopDestinationSection />
      <DestinationGallery />
      <FeatureAreaSection />
      <WhyChooseUs />
      <CTAAreaSection />
      <CounterSection />
      <Testimonials />
    </div>
  );
}
