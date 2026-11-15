"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L } from "@/content/site";

export type Language = "tr" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  /** Bir { tr, en } çiftinden aktif dildeki metni döndürür */
  tx: (text: L) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("tr");

  useEffect(() => {
    let initial: Language | null = null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "tr" || saved === "en") initial = saved;
    } catch {}
    if (!initial) initial = navigator.language?.toLowerCase().startsWith("tr") ? "tr" : "en";
    // Tarayıcı tercihi ancak hidrasyondan sonra okunabilir
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "tr" ? "en" : "tr";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  const tx = useCallback((text: L) => text[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
