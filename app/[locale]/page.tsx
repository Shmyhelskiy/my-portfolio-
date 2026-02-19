import HomeSection from "@/copmonents/sections/HomeSection";
import SkillsSection from "@/copmonents/sections/SkillsSection";

export default function Page() {
  return (
    <main className="pt-24 bg-background flex flex-col gap-6 px-5 sm:px-6">
      <HomeSection />
      <SkillsSection />
      <section className="min-h-screen" id="projects">
        Projects
      </section>
    </main>
  );
}
