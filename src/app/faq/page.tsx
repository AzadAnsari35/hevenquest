import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - HeavenQuest Inn & Suites",
  description:
    "Find answers to your questions about HeavenQuest Inn & Suites. From bookings to policies, our FAQ section covers everything you need to know for a seamless experience.",
  keywords:
    "HeavenQuest FAQ, hotel frequently asked questions, booking FAQs, policies, travel queries, hotel information, answers to hotel questions, luxury hotel FAQs, customer support",
};
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
