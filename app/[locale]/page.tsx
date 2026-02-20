import HomeSection from "@/copmonents/sections/HomeSection";
import SkillsSection from "@/copmonents/sections/SkillsSection";
import ProjectSection from "@/copmonents/sections/ProjectSection";

export default function Page() {
  return (
    <main className="pt-24 bg-background flex flex-col gap-6 px-5 sm:px-6">
      <HomeSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
}
