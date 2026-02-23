"use client";
import { Copy, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../../Button";
import { copyText } from "@/helpers/utils/copy-text";

const TEL: string = "+380683011136";

export default function LocationCard() {
  const t = useTranslations("Home");

  return (
    <div className="md:col-span-2 bg-card rounded-2xl p-4 md:p-6 flex flex-col h-fit gap-1 shadow-card">
      <div className="flex items-center gap-1 text-secondary-foreground">
        <MapPin size={14} />

        <p className="text-xs font-medium uppercase tracking-[-0.2px]">
          {t("location-title")}
        </p>
      </div>

      <p className="text-foreground text-lg font-medium tracking-[-0.2px]">
        {t("location-location")}
      </p>

      <div className="flex gap-2 items-center">
        <Phone size={14} className="text-icon" />

        <a
          href={`tel:${TEL}`}
          className="text-secondary-foreground hover:text-foreground"
        >
          {TEL}
        </a>

        <Button className="size-6 text-icon" onClick={() => copyText(TEL)}>
          <Copy size={16} />
        </Button>
      </div>
    </div>
  );
}
