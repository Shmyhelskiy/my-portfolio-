"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SkillCarousel() {
  const t = useTranslations("Home");
  const skills = t.raw("carouselSkills");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="h-10 flex items-center overflow-hidden pb-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={skills[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="px-4 py-1.5 bg-primary-muted font-inter rounded-xl text-primary text-sm font-semibold border border-border tracking-[-0.2px]"
        >
          {skills[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
