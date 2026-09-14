"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen pt-32 pb-16 px-8 lg:px-16 relative bg-theme-bg flex items-center">
      <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <h1 className="font-serif text-5xl md:text-7xl text-theme-text mb-12 font-light leading-snug">
          {t('about.hero_text')}
        </h1>
        
        <div className="space-y-8 text-theme-text-muted font-light leading-relaxed text-lg lg:text-xl">
          <p className="border-l-2 border-theme-accent/50 pl-6 py-2">
            {t('about.p1')}
          </p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
        
        <div className="mt-16">
           <h3 className="font-serif text-xl text-theme-text mb-6 border-b border-theme-border pb-2 inline-block">
             {t('about.arsenal')}
           </h3>
           <div className="flex flex-wrap gap-4 mt-4">
             {["Python", "TypeScript", "Next.js", "PostgreSQL", "Machine Learning"].map(skill => (
               <span key={skill} className="px-4 py-2 border border-theme-border/50 text-theme-text-muted text-xs tracking-widest uppercase hover:border-theme-accent hover:text-theme-accent transition-colors cursor-pointer bg-theme-surface/30">
                 {skill}
               </span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
