"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Book } from "lucide-react";

const EDUCATION_DATA = [
  {
    year: "2021 – 2025",
    degree: "B.Sc. Computer Engineering",
    institution: "Giresun University",
    desc: "Comprehensive study of software engineering principles, algorithms, and artificial intelligence.",
  },
  {
    year: "2023 – 2024",
    degree: "Erasmus+ Exchange Program",
    institution: "Kazimierz Wielki University, Poland",
    desc: "Immersive international experience focusing on advanced software methodologies.",
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
      { threshold: 0.3 }
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
          {EDUCATION_DATA.map((item, index) => (
            <div 
              key={index}
              className={`p-8 border border-theme-border hover:border-theme-accent transition-all duration-700 bg-theme-bg relative group overflow-hidden delay-${index * 300} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-theme-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <span className="font-serif text-5xl text-theme-text/10 italic absolute -top-4 -right-4 transition-transform duration-700 group-hover:scale-110">
                  {item.year.split(' ')[0]}
                </span>
                <div className="text-sm font-bold text-theme-accent tracking-widest uppercase mb-4">
                  {item.year}
                </div>
                <h3 className="font-serif text-2xl text-theme-text mb-2">
                  {item.degree}
                </h3>
                <p className="text-theme-secondary font-medium mb-4">
                  {item.institution}
                </p>
                <p className="text-theme-text-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
