"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const NAV_LINKS = [
  { key: "nav.about", id: "about" },
  { key: "nav.edu_exp", id: "education" },
  { key: "nav.projects", id: "projects" },
];

const SOCIALS = [
  { icon: <Github size={15} />, href: "https://github.com/aysesudeozden", label: "GitHub" },
  { icon: <Linkedin size={15} />, href: "https://linkedin.com/in/aysesudeozden", label: "LinkedIn" },
  { icon: <Instagram size={15} />, href: "https://www.instagram.com/aysesudeozden/", label: "Instagram" },
  { icon: <Mail size={15} />, href: "mailto:aysesudeozden@gmail.com", label: "Email" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0);

      // Active section detection
      const sections = ["about", "education", "projects"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-theme-bg/90 backdrop-blur-md border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-8">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          id="nav-logo"
        >
          <span className="text-theme-accent font-bold text-sm group-hover:text-theme-accent-hover transition-colors">
            ~/sude-ozden
          </span>
          <span className="animate-blink text-theme-accent font-bold text-sm leading-none">▊</span>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ key, id }) => (
            <button
              key={id}
              id={`nav-${id}`}
              onClick={() => scrollTo(id)}
              className={`px-4 py-1.5 text-xs tracking-wider transition-all rounded font-mono ${
                activeSection === id
                  ? "text-theme-accent bg-theme-accent/10 border border-theme-accent/30"
                  : "text-theme-text-muted hover:text-theme-text hover:bg-theme-surface"
              }`}
            >
              <span className="text-theme-text-dim mr-1">./</span>
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Socials */}
          <div className="hidden sm:flex items-center gap-2 border-r border-theme-border pr-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-theme-text-muted hover:text-theme-accent transition-colors p-1.5 hover:bg-theme-surface rounded"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Language toggle */}
          <button
            id="lang-toggle"
            onClick={toggleLang}
            className="px-3 py-1.5 text-xs font-bold text-theme-text-muted border border-theme-border rounded hover:border-theme-accent hover:text-theme-accent transition-all font-mono"
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>
        </div>
      </div>

      {/* Scroll progress line */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-theme-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%`, boxShadow: "0 0 8px var(--theme-accent)" }}
      />
    </header>
  );
}
