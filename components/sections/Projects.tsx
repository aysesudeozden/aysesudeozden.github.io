"use client";

import PixelCard from "../PixelCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Proje 1",
      description: t('proj.1.desc'),
      tech: ["Next.js", "React", "TailwindCSS"]
    },
    {
      title: "Proje 2",
      description: t('proj.2.desc'),
      tech: ["TypeScript", "Framer Motion", "CSS"]
    },
    {
      title: "Proje 3",
      description: t('proj.3.desc'),
      tech: ["TypeScript", "Framer Motion", "CSS"]
    },
    {
      title: "Proje 4",
      description: t('proj.4.desc'),
      tech: ["TypeScript", "Framer Motion", "CSS"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6 pt-24">
      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent uppercase">{t('proj.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center h-full">
              <PixelCard
                colors="#0a43beff,#0f1f38ff,#111827ff"
                gap={12}
                speed={40}
                className="h-[350px] w-full max-w-md"
              >
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-[#d1d1d1] mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-tighter font-bold border border-white/30 rounded bg-white/5 text-white"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
