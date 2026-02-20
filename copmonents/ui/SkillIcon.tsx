import Image from "next/image";
import { SkillTypes } from "@/lib/types/data-types";

export const SkillIcon = ({ title, lightIcon, darkIcon, alt }: SkillTypes) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src={lightIcon}
        alt={alt}
        width={24}
        height={24}
        className="block dark:hidden"
      />

      <Image
        src={darkIcon}
        alt={alt}
        width={24}
        height={24}
        className="hidden dark:block"
      />

      <span className="text-sm font-medium text-secondary-foreground">
        {title}
      </span>
    </div>
  );
};
