"use client";

import { useLanguage } from "@/context/LanguageContext";
import { education, ui } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

export default function Education() {
  const { tx } = useLanguage();

  return (
    <Section id="education" meta={ui.sections.education}>
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 100} className="h-full">
            <article className="h-full rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-bordo-text/50">
              <p className="font-mono text-[12.5px] text-dim">{tx(edu.period)}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{edu.school}</h3>
              <p className="mt-0.5 text-ink/80">{tx(edu.degree)}</p>
              <p className="mt-0.5 text-[14px] text-dim">
                {tx(edu.place)}
                {edu.note && (
                  <>
                    {" "}
                    · <span className="font-mono text-[12.5px] text-bordo-text">{tx(edu.note)}</span>
                  </>
                )}
              </p>
              <p className="mt-4 leading-relaxed text-muted">{tx(edu.desc)}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
