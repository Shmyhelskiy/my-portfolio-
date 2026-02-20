import { getGradientColors } from "@/lib/utils/getGradientColors";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ProjectCardProps {
  title?: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title = "NDA",
  subtitle,
  description,
  technologies,
  link = "",
}: ProjectCardProps) {
  const gradients = getGradientColors(title);
  return (
    <Link
      href={link}
      className={cn(
        "bg-card rounded-2xl overflow-hidden cursor-default",
        link && "cursor-pointer",
      )}
    >
      <div
        style={
          {
            "--grad-l": gradients.light,
            "--grad-d": gradients.dark,
          } as React.CSSProperties
        }
        className="flex items-center justify-center min-h-32 md:min-h-44 bg-(image:--grad-l) dark:bg-(image:--grad-d)"
      >
        <span className="text-card/20 text-6xl md:text-7xl font-bold tracking-[-0.2px] select-none">
          {title[0]}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-2 tracking-[-0.2px]">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-md font-medium text-foreground leading-5">
          {subtitle}
        </p>
        <p className="text-sm text-secondary-foreground">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {technologies.map((item) => {
            return (
              <span
                className="px-2.5 py-1 text-xs font-medium text-secondary-foreground bg-fill rounded-full"
                key={item}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
