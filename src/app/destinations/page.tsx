import DestinationsPage from "@/components/DestinationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Destinations with HeavenQuest Inn & Suites ",
  description:
    "Discover top destinations offered by HeavenQuest Inn & Suites. From exotic getaways to relaxing retreats, our handpicked locations provide the perfect escape for every traveler.",
  keywords:
    "luxury travel destinations, vacation spots, top destinations India, travel locations, HeavenQuest destinations, best places to visit, luxury travel experiences, hotel destinations, vacation retreats",
};

function Destination() {
  return <DestinationsPage />;
}

export default Destination;
