"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-6 pt-24 relative overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-theme-accent opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto w-full text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text mb-6 uppercase">
          {t('contact.title')}
        </h2>
        <p className="text-theme-text-muted text-lg mb-12 max-w-xl mx-auto">
          {t('contact.desc')}
        </p>

        <a
          href="mailto:[EMAIL_ADDRESS]"
          className="inline-flex items-center gap-3 px-8 py-4 bg-theme-accent hover:bg-theme-accent-hover text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(225,29,72,0.3)] mb-16"
        >
          <Mail size={20} />
          [EMAIL_ADDRESS]
        </a>

        <div className="flex items-center justify-center gap-8">
          <a href="https://github.com/aysesudeozden" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-theme-text-muted hover:text-theme-text transition-colors">
            <Github size={24} />
            <span className="font-medium">GitHub</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/aysesudeozden" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-theme-text-muted hover:text-theme-text transition-colors">
            <Linkedin size={24} />
            <span className="font-medium">LinkedIn</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}
