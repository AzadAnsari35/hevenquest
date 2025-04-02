import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div>
      <Breadcrumb
        title="Asked Questions"
        path="faq"
        backgroundImage="/img/bg/faq.jpg"
      />

      <FaqSection />
    </div>
  );
}
