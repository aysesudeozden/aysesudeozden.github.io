"use client";

import { useEffect, useRef, useState } from "react";
import type { L } from "@/content/site";
import { useLanguage } from "@/context/LanguageContext";

/** Görünür alana girince yumuşakça beliren sarmalayıcı */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Tek bir kan damlası */
export function Drop({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 10 15" aria-hidden className={className} style={style}>
      <path d="M5 0C5 0 10 6.6 10 10a5 5 0 0 1-10 0C0 6.6 5 0 5 0Z" fill="currentColor" />
    </svg>
  );
}

/** Yanıp sönen bordo imleç; ucundan arada bir damla düşer */
export function BloodCursor({ drip = false }: { drip?: boolean }) {
  return (
    <span aria-hidden className="relative ml-1 inline-block h-[0.95em] w-[0.5em] translate-y-[0.14em]">
      <span className="absolute inset-0 animate-blink bg-bordo" />
      {drip && (
        <Drop
          className="absolute left-1/2 top-full h-[9px] w-[6px] -translate-x-1/2 animate-drip text-bordo"
          style={{ animationDelay: "2.5s" }}
        />
      )}
    </span>
  );
}

/** Bölüm: başlıkta numara, başlık ve terminal yolu */
export function Section({
  id,
  meta,
  children,
}: {
  id: string;
  meta: { n: string; path: string; title: L };
  children: React.ReactNode;
}) {
  const { tx } = useLanguage();
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-10 flex items-center gap-4 sm:mb-14">
        <span className="font-mono text-[13px] text-bordo-text">{meta.n}</span>
        <h2 className="text-[2rem] font-bold leading-none tracking-tight text-ink sm:text-[2.6rem]">{tx(meta.title)}</h2>
        <span className="h-px flex-1 bg-line" />
        <span className="hidden font-mono text-[12px] text-dim sm:inline">{meta.path}</span>
      </Reveal>
      {children}
    </section>
  );
}
