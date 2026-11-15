"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { profile, ui } from "@/content/site";
import { Section } from "@/components/ui";

export default function Footer({ withContact = true }: { withContact?: boolean }) {
  const { tx } = useLanguage();

  const links = [
    { href: profile.links.github, label: "github" },
    { href: profile.links.linkedin, label: "linkedin" },
    { href: profile.links.instagram, label: "instagram" },
  ];

  return (
    <footer className="relative">
      {withContact && (
        <Section id="contact" meta={ui.sections.contact}>
          <p className="max-w-xl text-[17px] leading-relaxed text-muted">{tx(ui.contactDesc)}</p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-6 inline-flex flex-wrap items-baseline gap-x-3 text-[clamp(1.4rem,4vw,2.3rem)] font-semibold tracking-tight text-ink"
          >
            <span className="font-mono text-[0.55em] font-normal text-bordo-text">$ mail</span>
            <span className="underline decoration-bordo decoration-2 underline-offset-8 transition-colors group-hover:text-bordo-text">
              {profile.email}
            </span>
          </a>
        </Section>
      )}

      <div className="mx-auto flex max-w-5xl flex-col-reverse items-start justify-between gap-4 border-t border-line px-5 py-8 font-mono text-[12px] sm:flex-row sm:items-center sm:px-8">
        <p className="text-dim">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-5 text-muted">
          <Link href="/yazilar" className="transition-colors hover:text-bordo-text">
            {tx(ui.nav.writing)}
          </Link>
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bordo-text"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
