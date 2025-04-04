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
