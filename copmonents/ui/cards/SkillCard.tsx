import { SkillIcon } from "../SkillIcon";

interface SkillCardProps {
  title: string;
  lightIcon: string;
  darkIcon: string;
  alt: string;
}

export const SkillCard = ({
  title,
  lightIcon,
  darkIcon,
  alt,
}: SkillCardProps) => {
  return (
    <div
      key={title}
      className="rounded-2xl max-w-48 bg-card p-5 flex flex-col items-center gap-3 cursor-default shadow-card-skill hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <SkillIcon
        title={title}
        lightIcon={lightIcon}
        darkIcon={darkIcon}
        alt={alt}
      />
    </div>
  );
};
