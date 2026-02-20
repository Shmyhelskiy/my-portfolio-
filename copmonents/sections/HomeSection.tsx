import ConnectCard from "../ui/cards/home-section-cards/ConnetctCard";
import MainInfoCard from "../ui/cards/home-section-cards/MainInfoCard";
import HomeProjectCard from "../ui/cards/home-section-cards/HomeProjectCard";
import LocationCard from "../ui/cards/home-section-cards/LocationCard";

export default function HomeSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[minmax(140px,auto)] auto-rows-auto min-h-screen"
      id="home"
    >
      <MainInfoCard />
      <HomeProjectCard />
      <LocationCard />
      <ConnectCard />
    </section>
  );
}
