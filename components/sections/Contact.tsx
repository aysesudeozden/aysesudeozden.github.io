"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-40 px-8 md:px-16 relative bg-theme-bg overflow-hidden">
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-theme-surface to-transparent pointer-events-none"></div>

      <div className={`max-w-4xl mx-auto relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <h2 className="font-serif text-5xl md:text-7xl text-theme-text mb-8 font-light tracking-wide">
          {t('contact.title')}
        </h2>
        
        <p className="text-theme-text-muted text-lg max-w-lg mx-auto font-light mb-16">
          {t('contact.desc')}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="mailto:aysesudeozden@gmail.com" 
            className="group relative px-8 py-4 border border-theme-text text-theme-text hover:text-theme-bg overflow-hidden transition-colors duration-500"
          >
            <span className="absolute inset-0 bg-theme-text translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10"></span>
            <span className="flex items-center gap-3 tracking-widest uppercase text-sm">
              <Mail size={16} /> {t('contact.btn')}
            </span>
          </a>

          <div className="flex items-center gap-6">
            <a href="https://github.com/aysesudeozden" target="_blank" rel="noopener noreferrer" className="text-theme-text-muted hover:text-theme-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/aysesudeozden" target="_blank" rel="noopener noreferrer" className="text-theme-text-muted hover:text-theme-accent transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
