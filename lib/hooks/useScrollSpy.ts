import { useState, useEffect, useCallback } from "react";

export function useScrollSpy(ids: string[], offset: number = 80) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
        setActiveSection(id);
      }
    },
    [offset],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: `-${offset}px 0px -40% 0px`,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return { activeSection, scrollToSection };
}
