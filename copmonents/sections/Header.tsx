"use client";
import dynamic from "next/dynamic";
import Navbar from "../navigation/Navbar";
import LangSwitcher from "../navigation/LangSwitcher";
import Separator from "../ui/Separator";

const ThemeToggle = dynamic(() => import("../navigation/ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 flex justify-center pt-3 px-2">
      <div className="flex items-center gap-2 p-2 rounded-4xl border border-border">
        <Navbar />

        <Separator />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
