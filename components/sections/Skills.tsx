"use client";

import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS",
  "Node.js", "Express", "HTML5", "CSS3", "Framer Motion", "Git", "Figma"
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6 pt-24 border-y border-theme-border/30 bg-theme-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,108,56,0.05),transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto w-full mb-12 text-center px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent uppercase">{t('skills.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>
        <p className="text-center text-theme-text-muted text-lg max-w-2xl mx-auto leading-relaxed">{t('skills.desc')}</p>
      </div>

      {/* Marquee Mask (fades edges) */}
      <div className="absolute left-0 right-0 h-32 pointer-events-none z-10 bg-gradient-to-r from-theme-bg via-transparent to-theme-bg content-['']"></div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {/* Double repetition for seamless loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="mx-4 px-6 py-1 rounded-full border border-theme-border bg-theme-surface text-theme-text font-medium text-lg uppercase tracking-wider hover:border-theme-accent hover:text-theme-accent hover:shadow-[0_0_15px_rgba(178,52,35,0.3)] transition-all cursor-crosshair pb-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
