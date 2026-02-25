import { skillsData } from "@/lib/constants/skills-data";
import { useTranslations } from "next-intl";
import { SkillCard } from "../ui/cards/skills-section-cards/SkillCard";

export default function SkillsSection() {
  const t = useTranslations("Skills");
  return (
    <section
      className=" flex flex-col gap-3 font-inter"
      id="skills"
      aria-label="Skills section"
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2px] text-foreground">
        {t("title")}
      </h2>
      <p className="text-md md:text-lg tracking-[-0.2px] text-secondary-foreground leading-6">
        {t("subtitle")}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {skillsData.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}

        <div className="flex items-center justify-center rounded-2xl max-w-48 bg-card p-5 border border-dashed border-muted-foreground/20 opacity-70 hover:opacity-100 transition-opacity shadow-card-skill">
          <span className="text-sm font-medium text-secondary-foreground">
            More coming soon...
          </span>
        </div>
      </div>
    </section>
  );
}
