"use client";

import { Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { label: "nav.about", id: "about" },
  { label: "nav.experience", id: "experience" },
  { label: "nav.education", id: "education" },
  { label: "nav.projects", id: "projects" },
  { label: "nav.contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "education", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(id);
          return;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Vertical Navbar (Left Side Anchor) */}
      <nav className="hidden lg:flex flex-col gap-6 absolute bottom-16 left-16 z-50">
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`font-serif text-sm tracking-[0.3em] uppercase text-left transition-all duration-500 hover:text-theme-secondary hover:translate-x-4
              ${activeSection === id ? "text-theme-text font-semibold translate-x-2" : "text-theme-text-muted"}
            `}
          >
            {activeSection === id && <span className="mr-2 inline-block w-2 h-2 rounded-full bg-theme-accent mist-fade"></span>}
            {t(label)}
          </button>
        ))}

        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-theme-border/30">
          <button 
            onClick={toggleLang}
            className="font-serif text-xs tracking-widest text-theme-text-muted hover:text-theme-secondary transition-colors uppercase"
          >
            {lang === 'en' ? 'TR' : 'EN'}
          </button>
          
          <button 
            onClick={toggleTheme}
            className="text-theme-text-muted hover:text-theme-secondary transition-colors"
            aria-label="Toggle theme"
          >
             <Moon size={16} className={`transition-transform duration-500 ${theme === 'light' ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between transition-colors duration-500 ${mobileMenuOpen ? 'bg-theme-bg' : 'bg-theme-bg/80 backdrop-blur-md'}`}>
        <button
          onClick={() => scrollTo("about")}
          className="font-serif text-xl italic tracking-wider text-theme-text"
        >
          Sude.
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-theme-text">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-theme-bg pt-32 px-8 flex flex-col gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-serif text-2xl tracking-[0.2em] uppercase text-left text-theme-text"
            >
              {t(label)}
            </button>
          ))}
          <div className="flex items-center gap-8 mt-auto mb-16">
            <button onClick={toggleLang} className="font-serif text-lg tracking-widest text-theme-text uppercase">
              {lang === 'en' ? 'TR' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="text-theme-text">
              <Moon size={24} className={theme === 'light' ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
