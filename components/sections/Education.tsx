"use client";

import { useLanguage } from "@/context/LanguageContext";

const EDUCATION = [
  {
    year: "2021 – 2025",
    degree: "edu.university",
    institution: "edu.university.name",
    desc: "edu.university.desc",
    type: "education",
  },
  {
    year: "edu.erasmus.year",
    degree: "edu.erasmus",
    institution: "edu.erasmus.name",
    desc: "edu.erasmus.desc",
    type: "exchange",
  },
];

const EXPERIENCE = [
  {
    year: "2025",
    role: "exp.intern1.title",
    company: "exp.company",
    desc: "exp.intern1.desc",
  },
  {
    year: "2025",
    role: "exp.intern2.title",
    company: "exp.company2",
    desc: "exp.intern2.desc",
  },
  {
    year: "2023 – 2024",
    role: "exp.intern3.title",
    company: "exp.company3",
    desc: "exp.intern3.desc",
  },
];

function TimelineEntry({
  year,
  title,
  subtitle,
  desc,
  index,
  isLast,
}: {
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative pl-10 group">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-[7px] top-5 bottom-0 w-px bg-theme-border/40" />
      )}
      {/* Node */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-theme-accent bg-theme-bg group-hover:bg-theme-accent transition-all" />

      <div className="pb-8">
        <span className="inline-block text-[10px] font-mono text-theme-amber tracking-widest mb-1 bg-theme-amber/10 border border-theme-amber/20 px-2 py-0.5 rounded">
          {year}
        </span>
        <h4 className="text-sm font-bold text-theme-text mb-0.5 group-hover:text-theme-accent transition-colors">
          {title}
        </h4>
        <p className="text-[11px] text-theme-text-muted uppercase tracking-widest font-mono mb-2">
          {subtitle}
        </p>
        <p className="text-xs text-theme-text-muted/70 leading-relaxed max-w-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-theme-surface/20 relative">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-theme-accent font-bold text-xs">sude@portfolio</span>
          <span className="text-theme-text-dim text-xs">:~$</span>
          <span className="text-theme-text text-xs">ls -la ./experience</span>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-1 h-8 bg-theme-accent rounded-full" />
          <h2 className="text-xl font-bold text-theme-text tracking-wider uppercase font-mono">
            {t("edu_exp.title")}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-theme-accent text-xs font-mono bg-theme-accent/10 border border-theme-accent/20 px-3 py-1 rounded">
              [education]
            </span>
          </div>
          {EDUCATION.map((item, i) => (
            <TimelineEntry
              key={i}
              index={i}
              year={item.year.startsWith("edu.") ? t(item.year) : item.year}
              title={t(item.degree)}
              subtitle={t(item.institution)}
              desc={t(item.desc)}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-theme-accent text-xs font-mono bg-theme-accent/10 border border-theme-accent/20 px-3 py-1 rounded">
              [experience]
            </span>
          </div>
          {EXPERIENCE.map((item, i) => (
            <TimelineEntry
              key={i}
              index={i}
              year={item.year}
              title={t(item.role)}
              subtitle={t(item.company)}
              desc={t(item.desc)}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-6 border-t border-theme-border/30 pt-4">
        <span className="text-xs text-theme-text-dim font-mono">
          <span className="text-theme-accent">▶</span>&nbsp; {EDUCATION.length + EXPERIENCE.length} entries found &nbsp;·&nbsp; sorted by year desc
        </span>
      </div>
    </section>
  );
}
