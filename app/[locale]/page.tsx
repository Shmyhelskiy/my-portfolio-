import Home from "@/copmonents/sections/Home";

export default function Page() {
  return (
    <main className="pt-24 bg-background flex flex-col gap-6 px-5 sm:px-6">
      <Home />
      <section className="min-h-screen" id="skills">
        Skills
      </section>
      <section className="min-h-screen" id="projects">
        Projects
      </section>
    </main>
  );
}
