import ConnectCard from "../ui/cards/home-section-cards/ConnetctCard";
import MainInfoCard from "../ui/cards/home-section-cards/MainInfoCard";
import HomeProjectCard from "../ui/cards/home-section-cards/HomeProjectCard";
import LocationCard from "../ui/cards/home-section-cards/LocationCard";
import { Button } from "../ui/Button";
import { Download } from "lucide-react";
import CVCard from "../ui/cards/home-section-cards/CVCard";

export default function HomeSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[minmax(140px,auto)] auto-rows-auto min-h-screen"
      id="home"
      aria-label="Home section"
    >
      <MainInfoCard />
      <HomeProjectCard />
      <LocationCard />
      <ConnectCard />
      <CVCard />
    </section>
  );
}
