import Navbar from "../navigation/Navbar";
import LangSwitcher from "../navigation/LangSwitcher";
import Separator from "../ui/Separator";
import ThemeToggle from "../navigation/ThemeToggle";
import { cookies } from "next/headers";

export default async function Header() {
  const cookieStore = await cookies();
  const themeValue = cookieStore.get("theme")?.value || "light";

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 flex justify-center pt-3 px-2">
      <div className="flex items-center gap-2 p-2 rounded-4xl border border-border">
        <Navbar />

        <Separator />

        <div className="flex items-center gap-2">
          <ThemeToggle initialTheme={themeValue} />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
