import { projectsData } from "@/lib/constants/projects-data";
import { useTranslations } from "next-intl";
import ProjectCard from "../ui/cards/projects-section-cards/ProjectCard";

export default function ProjectSection() {
  const t = useTranslations("Projects");
  return (
    <section className="min-h-screen flex flex-col gap-3 font-inter" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2px] text-foreground">
        {t("title")}
      </h2>

      <p className="text-md md:text-lg tracking-[-0.2px] text-secondary-foreground leading-6">
        {t("subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={t(`items.${project.id}.title`)}
            subtitle={t(`items.${project.id}.subtitle`)}
            description={t(`items.${project.id}.description`)}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
