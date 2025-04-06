import Breadcrumb from "@/components/Breadcrumb";
import MembershipComparison from "@/components/MembershipComparison";
import Packages from "@/components/Packages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusive Travel Packages at HeavenQuest Inn & Suites",
  description:
    "Browse our exclusive travel packages at HeavenQuest Inn & Suites. Our tailored packages offer luxury stays and unique experiences designed for unforgettable vacations",
  keywords:
    "travel packages, exclusive hotel deals, luxury vacation packages, tailored travel packages, HeavenQuest packages, vacation packages India, luxury holiday packages, all-inclusive hotel deals, custom hotel stays",
};

export default function Home() {
  return (
    <div>
      <Breadcrumb
        title="Package Details"
        path="packages"
        backgroundImage="/img/bg/package.jpg"
      />
      <Packages />
      <MembershipComparison />
    </div>
  );
}
