"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Moon, Sun, Globe } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-theme-border/30 bg-theme-bg/70 backdrop-blur-md transition-colors duration-300">
      <div 
        className="text-theme-accent font-bold tracking-widest cursor-pointer text-xl"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ASÖ
      </div>

      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-theme-text font-medium text-sm">
        <button onClick={() => handleScroll('about')} className="hover:text-theme-accent transition-colors">{t('nav.about')}</button>
        <button onClick={() => handleScroll('skills')} className="hover:text-theme-accent transition-colors">{t('nav.skills')}</button>
        <button onClick={() => handleScroll('education')} className="hover:text-theme-accent transition-colors">{t('nav.education')}</button>
        <button onClick={() => handleScroll('projects')} className="hover:text-theme-accent transition-colors">{t('nav.projects')}</button>
        <button onClick={() => handleScroll('contact')} className="hover:text-theme-accent transition-colors">{t('nav.contact')}</button>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-theme-surface border border-theme-border text-theme-text text-xs font-semibold hover:border-theme-accent transition-colors"
        >
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded bg-theme-surface border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}
