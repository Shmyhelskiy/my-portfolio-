"use client";
import dynamic from "next/dynamic";
import Navbar from "../navigation/Navbar";

const ThemeToggle = dynamic(() => import("../navigation/ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 flex justify-center pt-3 px-2">
      <div className="flex items-center gap-2 p-2 rounded-4xl border border-border">
        <Navbar />

        <div className="w-px h-6 bg-border-hight" />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* <LangSwitcher /> */}
        </div>
      </div>
    </header>
  );
}
