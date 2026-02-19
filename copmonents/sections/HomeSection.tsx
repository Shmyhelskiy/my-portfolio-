import ConnectCard from "../ui/cards/ConnetctCard";
import MainInfoCard from "../ui/cards/MainInfoCard";
import ProjectCard from "../ui/cards/ProjectCard";
import LocationCard from "../ui/cards/LocationCard";

export default function HomeSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[minmax(140px,auto)] auto-rows-auto min-h-screen"
      id="home"
    >
      <MainInfoCard />
      <ProjectCard />
      <LocationCard />
      <ConnectCard />
    </section>
  );
}
