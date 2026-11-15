"use client";

import { useLanguage } from "@/context/LanguageContext";
import { experience, ui } from "@/content/site";
import { Drop, Reveal, Section } from "@/components/ui";

export default function Experience() {
  const { tx } = useLanguage();

  return (
    <Section id="experience" meta={ui.sections.experience}>
      <ol className="relative ml-1 border-l border-line">
        {experience.map((exp, i) => (
          <li key={exp.company + exp.period.en} className="relative pb-12 pl-7 last:pb-0 sm:pl-9">
            {exp.current ? (
              <Drop className="absolute -left-[5px] top-[5px] h-[13px] w-[9px] text-bordo" />
            ) : (
              <span className="absolute -left-[4.5px] top-[7px] h-2 w-2 border border-dim bg-bg" />
            )}
            <Reveal delay={i * 50}>
              <p className="font-mono text-[12.5px] text-dim">
                {tx(exp.period)}
                {exp.current && <span className="ml-2 text-bordo-text">[{tx(ui.current)}]</span>}
              </p>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink">
                {tx(exp.role)} <span className="font-normal text-dim">@</span>{" "}
                <span className="font-medium text-ink/80">{exp.company}</span>
              </h3>
              <p className="mt-0.5 text-[14px] text-dim">
                {tx(exp.kind)}
                {exp.place && <> · {tx(exp.place)}</>}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{tx(exp.desc)}</p>
              {exp.tags && (
                <p className="mt-3 font-mono text-[12px] text-dim">
                  {exp.tags.map((t) => `#${t.toLowerCase().replace(/\s+/g, "-")}`).join(" ")}
                </p>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
