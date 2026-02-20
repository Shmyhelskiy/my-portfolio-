import { useTranslations } from "next-intl";
import PulsIndicator from "../../PulsIndicator";

export default function HomeProjectCard() {
  const t = useTranslations("Home");

  return (
    <div className="md:col-span-2 bg-card rounded-2xl p-4 md:p-6 flex flex-col gap-1 shadow-card h-fit">
      <p className="text-xs font-medium text-secondary-foreground uppercase tracking-[-0.2px]">
        {t("currentProject-title")}
      </p>
      <div className="flex items-center gap-2">
        <PulsIndicator />
        <span className="text-progress tracking-[-0.2px]">
          {t("currentProject-in-progress")}
        </span>
      </div>

      <p className="text-foreground text-lg font-medium tracking-[-0.2px]">
        {t("currentProject-name-project")}
      </p>
      <p className="text-secondary-foreground text-sm tracking-[-0.2px]">
        {t("currentProject-description-project")}
      </p>
    </div>
  );
}
