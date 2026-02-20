import { useTranslations } from "next-intl";
import Separator from "../../Separator";
import SkillCarousel from "../../SkillCarousel";

export default function MainInfoCard() {
  const t = useTranslations("Home");
  return (
    <div className="md:col-span-2 md:row-span-2 bg-card rounded-2xl p-6 md:p-8 flex flex-col shadow-card">
      <Separator className="h-1 bg-primary rounded-full mb-8 w-12" />

      <div className="flex flex-col gap-3 font-inter">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.2px] text-foreground">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl tracking-[-0.2px] font-medium text-secondary-foreground">
          {t("subtitle")}
        </p>
        <SkillCarousel />
        <p className="text-secondary-foreground tracking-[-0.2px] text-sm  ">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
