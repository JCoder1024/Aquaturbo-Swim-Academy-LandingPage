"use client";

import { Button } from "../ui/button";
import { useLanguage } from "./language-provider";

export const ToggleLanguage = ({ inverted = false }: { inverted?: boolean }) => {
  const { locale, setLocale, t } = useLanguage();
  const nextLocale = locale === "zh-TW" ? "en" : "zh-TW";

  return (
    <Button
      type="button"
      onClick={() => setLocale(nextLocale)}
      size="sm"
      variant="ghost"
      className={
        inverted
          ? "w-full justify-start text-primary-foreground hover:bg-white/10 hover:text-white"
          : "w-full justify-start"
      }
      aria-label={t.language.switchTo}
    >
      <span className="inline-flex items-center gap-1 font-medium tabular-nums">
        <span
          className={
            inverted
              ? locale === "zh-TW"
                ? "text-white"
                : "text-white/60"
              : locale === "zh-TW"
                ? "text-foreground"
                : "text-muted-foreground"
          }
        >
          {t.language.zh}
        </span>
        <span className={inverted ? "text-white/60" : "text-muted-foreground/70"}>
          /
        </span>
        <span
          className={
            inverted
              ? locale === "en"
                ? "text-white"
                : "text-white/60"
              : locale === "en"
                ? "text-foreground"
                : "text-muted-foreground"
          }
        >
          {t.language.en}
        </span>
      </span>
    </Button>
  );
};
