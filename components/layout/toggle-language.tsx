"use client";

import { Button } from "../ui/button";
import { useLanguage } from "./language-provider";

export const ToggleLanguage = () => {
  const { locale, setLocale, t } = useLanguage();
  const nextLocale = locale === "zh-TW" ? "en" : "zh-TW";

  return (
    <Button
      type="button"
      onClick={() => setLocale(nextLocale)}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
      aria-label={t.language.switchTo}
    >
      <span className="inline-flex items-center gap-1 font-medium tabular-nums">
        <span className={locale === "zh-TW" ? "text-foreground" : "text-muted-foreground"}>
          {t.language.zh}
        </span>
        <span className="text-muted-foreground/70">/</span>
        <span className={locale === "en" ? "text-foreground" : "text-muted-foreground"}>
          {t.language.en}
        </span>
      </span>
    </Button>
  );
};
