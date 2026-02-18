import { Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ConnectCard() {
  const t = useTranslations("Home");

  return (
    <div className="md:col-span-2 bg-card rounded-2xl h-fit p-2 md:p-6 flex flex-col sm:flex-row items-center gap-3 shadow-card ">
      <div className="flex items-center gap-4">
        <p className="text-xs font-medium text-secondary-foreground uppercase tracking-widest">
          {t("connect-title")}
        </p>

        <div className="flex items-center gap-3 text-secondary-foreground">
          <a
            href="https://github.com/Shmyhelskiy"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/oleksandr-shmyhelskyi/"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://t.me/Shmyhelskyi_Oleksandr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Send size={20} />
          </a>
        </div>
      </div>

      <a
        href="mailto:shmyhelskyi.o.v@gmail.com"
        target="_blank"
        className="flex items-center gap-1 text-primary font-medium hover:text-primary-hover transition-all"
      >
        {t("connect-get-in-touch")}
        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
