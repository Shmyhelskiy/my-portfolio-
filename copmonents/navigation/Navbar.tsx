"use client";
import { SectionId } from "@/lib/constants/navigation";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const SECTION_IDS = [SectionId.Home, SectionId.Skills, SectionId.Projects];

export default function Navbar() {
  const t = useTranslations("Navigation");
  const { activeSection, scrollToSection } = useScrollSpy(SECTION_IDS);

  const navLinks = useMemo(
    () => [
      { label: t("home"), id: SectionId.Home },
      { label: t("skills"), id: SectionId.Skills },
      { label: t("projects"), id: SectionId.Projects },
    ],
    [t],
  );
  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 flex justify-center font-inter pt-3"
      aria-label="Main navigation"
    >
      <ul className="flex gap-2 items-center bg-white py-2 px-6 rounded-4xl">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li
              key={link.id}
              className={cn(
                "px-2 py-1.5 font-medium leading-6 tracking-[-0.2px] rounded-2xl text-secondary-foreground hover:bg-nav-hover duration-400 ease-out transition-all",
                isActive &&
                  "bg-nav-selected! cursor-default text-nav-foreground-selected",
              )}
            >
              <button
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
