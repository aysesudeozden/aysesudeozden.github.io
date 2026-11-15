"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { hero, profile, ui } from "@/content/site";
import { BloodCursor } from "@/components/ui";

export default function Hero() {
  const { tx } = useLanguage();
  const [titleStart, titleEnd = ""] = tx(hero.title).split(profile.short);

  return (
    <section className="mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
      <div className="grid items-end gap-14 lg:grid-cols-[1.45fr_1fr]">
        <div>
          <p className="animate-rise font-mono text-[13px] text-muted">
            <span className="text-dim">~/sude</span> <span className="text-bordo-text">$</span> {hero.command}
          </p>
          <h1
            className="mt-6 animate-rise text-[clamp(3rem,9vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.035em] text-ink"
            style={{ animationDelay: "120ms" }}
          >
            {titleStart}
            <span
              className="glitch font-serif text-[1.08em] font-normal italic tracking-normal text-bordo-text"
              data-text={profile.short}
            >
              {profile.short}
            </span>
            {titleEnd}
          </h1>
          <p
            className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            {tx(hero.tagline)}
            <BloodCursor drip />
          </p>
          <div
            className="mt-10 flex animate-rise flex-wrap items-center gap-3 font-mono text-[13px]"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#projects"
              className="rounded bg-bordo px-4 py-2.5 text-white transition-opacity hover:opacity-85"
            >
              {tx(ui.heroCta.projects)} ↓
            </a>
            <Link
              href="/yazilar"
              className="rounded border border-line px-4 py-2.5 text-ink transition-colors hover:border-bordo-text hover:text-bordo-text"
            >
              {tx(ui.heroCta.writing)}
            </Link>
          </div>
        </div>

        {/* Küçük durum tablosu */}
        <div
          className="animate-rise rounded-lg border border-line bg-surface/70 font-mono text-[12.5px] backdrop-blur-sm"
          style={{ animationDelay: "480ms" }}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-dim">
            <span>status.txt</span>
            <span className="flex items-center gap-1.5 text-bordo-text">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bordo" />
              online
            </span>
          </div>
          <dl className="space-y-2.5 px-4 py-4">
            {hero.status.map((row) => (
              <div key={row.k.en} className="grid grid-cols-[4.5rem_1fr] gap-3">
                <dt className="text-dim">{tx(row.k)}</dt>
                <dd className="text-ink">{tx(row.v)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
