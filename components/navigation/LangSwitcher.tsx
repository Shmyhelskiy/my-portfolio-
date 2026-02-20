"use client";

import { useLocale } from "next-intl";
import { Button } from "../ui/Button";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "uk" : "en";
    router.replace(pathname, { locale: nextLocale, scroll: false });
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="font-bold text-[11px] uppercase tracking-wider"
      aria-label="Switch language"
    >
      <div className="relative w-full h-full flex items-center justify-center text-foreground">
        <span>{locale === "en" ? "UA" : "EN"}</span>
      </div>
    </Button>
  );
}
