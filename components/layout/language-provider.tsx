"use client";

import * as React from "react";
import {
  defaultLocale,
  dictionaries,
  htmlLang,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

function persistLocale(locale: Locale) {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.documentElement.lang = htmlLang(locale);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(defaultLocale);

  React.useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = htmlLang(stored);
      return;
    }

    const browser = navigator.language.toLowerCase();
    const next: Locale = browser.startsWith("en") ? "en" : defaultLocale;
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const value = React.useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
