"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/content/site";

const SECTIONS = ["about", "experience", "education", "projects"] as const;

// Tema, <html> etiketindeki "dark" sınıfından okunur (layout.tsx'teki betik ayarlar)
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getTheme = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");

function ThemeToggle() {
  const { tx } = useLanguage();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "dark");
  const next = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={tx(ui.theme[next])}
      title={tx(ui.theme[next])}
      className="rounded p-1.5 text-muted transition-colors hover:text-bordo-text"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

export default function Header({ home = false }: { home?: boolean }) {
  const { lang, toggleLang, tx } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(home ? "" : "writing");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!home) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [home]);

  const itemClass = (id: string) =>
    `whitespace-nowrap font-mono text-[12.5px] transition-colors ${
      active === id ? "text-bordo-text" : "text-muted hover:text-ink"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center font-mono text-[13px] text-ink">
          sude<span className="text-dim">@ozden:~$</span>
          <span className="ml-1.5 inline-block h-[14px] w-[7px] animate-blink bg-bordo" />
        </Link>

        <nav className="flex min-w-0 items-center gap-5">
          <div className="hidden items-center gap-5 md:flex">
            {SECTIONS.map((id) => (
              <a key={id} href={home ? `#${id}` : `/#${id}`} className={itemClass(id)}>
                {active === id && <span className="mr-0.5">&gt;</span>}
                {tx(ui.nav[id])}
              </a>
            ))}
          </div>
          <Link href="/yazilar" className={itemClass("writing")}>
            {active === "writing" && <span className="mr-0.5">&gt;</span>}
            {tx(ui.nav.writing)}
          </Link>
          <div className="flex items-center gap-1 border-l border-line pl-3">
            <button
              onClick={toggleLang}
              className="rounded px-1.5 py-1 font-mono text-[11.5px] text-muted transition-colors hover:text-bordo-text"
              aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
