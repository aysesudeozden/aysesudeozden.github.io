"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Book } from "lucide-react";

const EDUCATION_DATA = [
  {
    year: "2021 – 2025",
    degreeKey: "edu.university",
    instKey: "edu.university.name",
    descKey: "edu.university.desc",
  },
  {
    yearKey: "edu.erasmus.year",
    degreeKey: "edu.erasmus",
    instKey: "edu.erasmus.name",
    descKey: "edu.erasmus.desc",
  },
];

export default function Education() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-32 px-8 md:px-16 relative bg-theme-surface">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className={`font-serif text-3xl md:text-5xl text-theme-secondary mb-16 font-light tracking-widest transition-all duration-1000 flex items-center gap-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Book size={28} className="opacity-40" /> {t('edu.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EDUCATION_DATA.map((edu, index) => (
            <div 
              key={index} 
              className={`p-8 border border-theme-border/50 hover:border-theme-accent/50 bg-theme-bg/50 backdrop-blur-sm transition-all duration-1000 delay-${index * 200} group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="font-mono text-xs tracking-widest text-theme-accent mb-4 group-hover:text-theme-secondary transition-colors">
                {edu.year || t(edu.yearKey!)}
              </div>
              <h3 className="font-serif text-2xl text-theme-text mb-2">{t(edu.degreeKey)}</h3>
              <p className="text-theme-text-muted text-sm uppercase tracking-wider font-semibold mb-6">{t(edu.instKey)}</p>
              <p className="text-theme-text-muted font-light leading-relaxed">
                {t(edu.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
