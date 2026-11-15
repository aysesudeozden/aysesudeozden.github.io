"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { about, profile, ui } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

export default function About() {
  const { tx } = useLanguage();

  return (
    <Section id="about" meta={ui.sections.about}>
      <div className="grid gap-12 md:grid-cols-[1fr_14rem] md:gap-16">
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-ink" : undefined}>
              {tx(p)}
            </p>
          ))}
        </Reveal>

        {/* Küçük portre: siyah-beyaz, üzerine gelince renklenir */}
        <Reveal delay={100} className="order-first md:order-none">
          <div className="group relative aspect-[4/5] w-40 overflow-hidden rounded-lg border border-line md:w-full">
            <Image
              src="/avatar.jpg"
              alt={profile.name}
              fill
              sizes="(min-width: 768px) 224px, 160px"
              className="object-cover object-[50%_28%] grayscale transition duration-700 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-bordo opacity-25 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
          </div>
          <p className="mt-2 font-mono text-[11px] text-dim">bu-benim.jpg</p>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 font-mono text-[12.5px] text-dim">
            <span className="text-bordo-text">#</span> {tx(ui.now)}
          </h3>
          <ul className="space-y-2 text-[15.5px] text-muted">
            {about.now.map((n, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="font-mono text-bordo-text">&gt;</span>
                <span>{tx(n)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-[12.5px] text-dim">
            <span className="text-bordo-text">#</span> {tx(ui.skills)}
          </h3>
          <dl className="space-y-2 font-mono text-[12.5px]">
            {about.skills.map((group) => (
              <div key={group.group.en} className="grid grid-cols-[5.5rem_1fr] gap-2">
                <dt className="text-ink">{tx(group.group).toLowerCase()}:</dt>
                <dd className="leading-6 text-muted">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
