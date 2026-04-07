"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Moon, Sun, Globe, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: <Mail size={16} />, href: "mailto:aysesudeozden@gmail.com", label: "Email" },
    { icon: <Github size={16} />, href: "https://github.com/aysesudeozden", label: "GitHub" },
    { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/aysesudeozden", label: "LinkedIn" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-theme-bg/80 backdrop-blur-md border-b border-theme-border/20 px-6 md:px-12 h-20 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-8">
        {/* Left Side: Branding & Navigation */}
        <div className="flex items-center gap-8 md:gap-12">
          <div 
            className="text-theme-accent font-bold tracking-widest cursor-pointer text-xl md:text-2xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ASÖ
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-theme-text font-medium text-sm tracking-wide">
            <button onClick={() => handleScrollTo('about')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.about')}</button>
            <button onClick={() => handleScrollTo('education')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.edu_exp')}</button>
            <button onClick={() => handleScrollTo('projects')} className="hover:text-theme-accent transition-colors whitespace-nowrap">{t('nav.projects')}</button>
          </nav>
        </div>

        {/* Right Side: Socials & Controls */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 border-r border-theme-border/30 pr-4">
            {socialLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-theme-text-muted hover:text-theme-accent transition-colors p-1.5 hover:scale-110 transform transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-surface/50 border border-theme-border/50 text-theme-text text-xs font-bold hover:border-theme-accent hover:text-theme-accent transition-all"
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-theme-surface/50 border border-theme-border/50 text-theme-text hover:text-theme-accent hover:border-theme-accent transition-all animate-in fade-in zoom-in duration-300"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
