"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Feather } from "lucide-react";

const EXPERIENCE_DATA = [
  {
    year: "2024",
    titleKey: "exp.intern3.title",
    companyKey: "exp.company3",
    descKey: "exp.intern3.desc",
  },
  {
    year: "2023",
    titleKey: "exp.intern2.title",
    companyKey: "exp.company2",
    descKey: "exp.intern2.desc",
  },
  {
    year: "2022",
    titleKey: "exp.intern1.title",
    companyKey: "exp.company1",
    descKey: "exp.intern1.desc",
  },
];

export default function Experience() {
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
    <section ref={sectionRef} id="experience" className="py-32 px-8 lg:px-16 relative bg-theme-bg">
      {/* Decorative vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-theme-border to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className={`font-serif text-3xl md:text-5xl text-theme-secondary text-center mb-24 font-light tracking-widest transition-all duration-1000 flex items-center justify-center gap-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Feather size={24} className="opacity-50" /> {t('exp.title')} <Feather size={24} className="opacity-50 scale-x-[-1]" />
        </h2>

        <div className="space-y-24">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 transition-all duration-1000 delay-${idx * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-theme-accent bg-theme-bg z-10 shadow-[0_0_15px_var(--theme-accent)]"></div>

              {/* Left Side (Even items) */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'} pl-12 md:pl-0`}>
                <div className="font-mono text-sm tracking-widest text-theme-accent mb-2">{exp.year}</div>
                <h3 className="font-serif text-2xl text-theme-text mb-2">{t(exp.titleKey)}</h3>
                <div className="text-theme-text-muted text-sm uppercase tracking-wider font-semibold mb-4">{t(exp.companyKey)}</div>
              </div>

              {/* Right Side (Even items) */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:text-right md:pr-12'} pl-12 md:pl-0`}>
                <p className="text-theme-text-muted font-light leading-relaxed">{t(exp.descKey)}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
