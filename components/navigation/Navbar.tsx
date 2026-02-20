"use client";
import { SectionId } from "@/lib/constants/navigation";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { cn } from "@/lib/utils/cn";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const SECTION_IDS = [SectionId.Home, SectionId.Skills, SectionId.Projects];

export default function Navbar() {
  const t = useTranslations("Navigation");
  const { activeSection, scrollToSection } = useScrollSpy(SECTION_IDS);

  const navLinks = useMemo(
    () => [
      { label: t(SectionId.Home), id: SectionId.Home },
      { label: t(SectionId.Skills), id: SectionId.Skills },
      { label: t(SectionId.Projects), id: SectionId.Projects },
    ],
    [t],
  );

  return (
    <nav aria-label="Main navigation">
      <ul className="flex gap-2 items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li
              key={link.id}
              className={cn(
                "px-1 py-0.5 md:px-2 md:py-1.5 font-medium leading-6 tracking-[-0.2px] rounded-2xl text-secondary-foreground hover:bg-nav-hover duration-400 ease-out transition-all",
                isActive && "bg-nav-selected! text-nav-foreground-selected",
              )}
            >
              <button
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "cursor-pointer outline-none",
                  isActive && "cursor-default",
                )}
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
