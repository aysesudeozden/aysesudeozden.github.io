"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Moon, Sun, Globe } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div className={`
        pointer-events-auto
        flex items-center gap-4 md:gap-8 px-6 py-3 rounded-full border transition-all duration-500
        ${isScrolled 
          ? "bg-theme-bg/60 border-theme-border/40 backdrop-blur-lg shadow-xl translate-y-[-5px]" 
          : "bg-transparent border-transparent"
        }
      `}>
        <div 
          className="text-theme-accent font-bold tracking-widest cursor-pointer text-lg md:text-xl hidden sm:block"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ASÖ
        </div>

        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 text-theme-text font-medium text-xs md:text-sm">
          <button onClick={() => handleScrollTo('about')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.about')}</button>
          <button onClick={() => handleScrollTo('skills')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.skills')}</button>
          <button onClick={() => handleScrollTo('education')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.education')}</button>
          <button onClick={() => handleScrollTo('projects')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.projects')}</button>
          <button onClick={() => handleScrollTo('contact')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.contact')}</button>
        </nav>

        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-theme-border/30">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1.6 px-2 py-1 rounded bg-theme-surface/50 border border-theme-border/50 text-theme-text text-[10px] md:text-xs font-semibold hover:border-theme-accent transition-colors"
          >
            <Globe size={12} />
            {lang.toUpperCase()}
          </button>

          <button 
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-full bg-theme-surface/50 border border-theme-border/50 text-theme-text hover:text-theme-accent hover:border-theme-accent transition-all"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
}
