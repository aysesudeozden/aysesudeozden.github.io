"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Feather } from "lucide-react";

const EXPERIENCE_DATA = [
  {
    year: "2025",
    title: "Software Engineering Intern",
    company: "Tech Corp",
    desc: "Worked on AI integration and data pipelines, bridging the gap between raw data and actionable intelligence.",
  },
  {
    year: "2024",
    title: "Data Analyst Intern",
    company: "Data Inc",
    desc: "Built complex dashboards and performed rigorous statistical analysis to uncover hidden patterns.",
  },
  {
    year: "2021 – 2025",
    title: "B.Sc. Computer Engineering",
    company: "Giresun University",
    desc: "Focus on AI, Data Structures, and advanced algorithmic design.",
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
          {EXPERIENCE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Left Side (Empty on mobile, alternating on desktop) */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'text-right pr-16' : 'order-last text-left pl-16'}`}>
                  {isEven && (
                    <div className="font-serif text-5xl text-theme-text/10 italic">{item.year}</div>
                  )}
                  {!isEven && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-2xl text-theme-text">{item.title}</h3>
                      <p className="text-sm font-bold text-theme-accent tracking-widest uppercase">{item.company}</p>
                      <p className="text-theme-text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-theme-accent bg-theme-bg flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-theme-secondary opacity-50"></div>
                </div>

                {/* Right Side (Content on mobile, alternating on desktop) */}
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'text-left md:pl-16' : 'text-left md:text-right md:pr-16 md:order-first'}`}>
                  {!isEven && (
                    <div className="hidden md:block font-serif text-5xl text-theme-text/10 italic">{item.year}</div>
                  )}
                  {isEven && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-2xl text-theme-text">{item.title}</h3>
                      <p className="text-sm font-bold text-theme-accent tracking-widest uppercase">{item.company}</p>
                      <p className="text-theme-text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                  {/* Mobile year display */}
                  <div className="md:hidden mt-4 font-serif text-3xl text-theme-text/20 italic">{item.year}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
