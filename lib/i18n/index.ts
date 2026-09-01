import { en, type Dictionary } from "./en";
import { zhTW } from "./zh-TW";

export type Locale = "zh-TW" | "en";

export const locales: Locale[] = ["zh-TW", "en"];
export const defaultLocale: Locale = "zh-TW";
export const LOCALE_STORAGE_KEY = "aquaturbo-locale";

export const dictionaries: Record<Locale, Dictionary> = {
  "zh-TW": zhTW,
  en,
};

export function isLocale(value: string | null): value is Locale {
  return value === "zh-TW" || value === "en";
}

export function htmlLang(locale: Locale) {
  return locale === "zh-TW" ? "zh-Hant" : "en";
}

export type { Dictionary };
