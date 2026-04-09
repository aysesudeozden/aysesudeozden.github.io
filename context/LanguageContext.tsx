"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en";

interface Translations {
  [key: string]: {
    tr: string;
    en: string;
  };
}

const translations: Translations = {
  // Navbar
  "nav.about": { tr: "Hakkımda", en: "About" },
  "nav.edu_exp": { tr: "Eğitim & Deneyim", en: "Edu & Exp" },
  "nav.projects": { tr: "Projeler", en: "Projects" },
  // Hero
  "hero.subtitle": {
    tr: "Merhaba, sürekli soru sormayı ve sorularıma gerekli araştırmalar ile cevap bulmayı seven, yenilenen teknolojiye ayak uydurmaya çalışan bir bilgisayar mühendisiyim. ",
    en: "Hey there, I am a computer engineer who loves asking questions and finding answers to them through research, and who tries to keep up with new technologies."
  },
  "hero.creative": { tr: "Fullstack Geliştirici", en: "Fullstack Developer" },
  "hero.contact": { tr: "Benimle İletişime Geç", en: "Contact Me" },
  // About
  "about.title": { tr: "Hakkımda", en: "About" },
  "about.p1": {
    tr: "İnsan merkezli, okunabilirliği yüksek ve performansı odakta tutan modern uygulamalar inşa etmekten keyif alıyorum. Geliştirdiğim her projede estetiği ve fonksiyonelliği bir araya getirmeye çabalıyorum.",
    en: "I enjoy building human-centric, highly readable, and performance-oriented modern applications. I strive to combine aesthetics with functionality in every project I develop."
  },
  // Education & Experience
  "edu_exp.title": { tr: "Eğitim & Deneyim", en: "Education & Experience" },
  "edu.title": { tr: "Eğitim", en: "Education" },
  "edu.university": { tr: "Bilgisayar Mühendisliği (Lisans)", en: "Computer Engineering (B.Sc)" },
  "edu.university.desc": { tr: "Yazılım geliştirme, algoritmalar ve veri yapıları üzerine odaklanarak mezun oldum.", en: "Graduated with a focus on software development, algorithms, and data structures." },
  "edu.university.name": { tr: "Giresun Üniversitesi", en: "Giresun University" },
  "edu.erasmus": { tr: "Erasmus+", en: "Erasmus+" },
  "edu.erasmus.desc": { tr: "Erasmus+ programı kapsamında Polonya'da eğitim aldım.", en: "I studied in Poland within the scope of the Erasmus+ program." },
  "edu.erasmus.year": { tr: "Şubat - Temmuz 2023", en: "February - July 2023" },
  "edu.erasmus.name": { tr: "Uniwersytet Kazimierza Wielkiego", en: "Kazimierz Wielki University" },

  "exp.title": { tr: "Deneyim", en: "Experience" },
  "exp.intern1.title": { tr: "Yazılım Stajyeri", en: "Software Engineering Intern" },
  "exp.intern1.desc": { tr: "Full-stack geliştirme süreçlerine katkı sağladım, modern web teknolojileriyle projeler geliştirdim.", en: "Contributed to full-stack development processes, developed projects with modern web technologies." },
  "exp.intern2.title": { tr: "Frontend Stajyeri", en: "Frontend Developer Intern" },
  "exp.intern2.desc": { tr: "Kullanıcı arayüzü tasarımı ve React bileşenleri üzerine yoğunlaştım.", en: "Focused on UI design and React component development." },
  "exp.intern3.title": { tr: "Backend Stajyeri", en: "Backend Developer Intern" },
  "exp.intern3.desc": { tr: "Sunucu taraflı mantık ve veritabanı yönetimi konularında deneyim kazandım.", en: "Gained experience in server-side logic and database management." },
  "exp.company": { tr: "Dataliva Bilişim A.Ş.", en: "Dataliva  Inc." },
  "exp.company2": { tr: "Ziraat Teknoloji A.Ş.", en: "Ziraat Technology Inc." },
  "exp.company3": { tr: "Giresun Üniversitesi - Erasmus+ Koordinatörlüğü", en: "Giresun University - Erasmus+ Coordinatorship" },

  // Projects
  "proj.title": { tr: "Projeler", en: "Projects" },
  "proj.1.desc": { tr: "Modern web teknolojileri kullanılarak geliştirilmiş interaktif platform.", en: "An interactive platform developed using modern web technologies." },
  "proj.2.desc": { tr: "Gelişmiş kullanıcı deneyimi odaklı, hızlı ve güvenilir mobil uygulama arayüzü.", en: "Fast and reliable mobile application interface focused on advanced user experience." },
  // Skills
  "skills.title": { tr: "Yetenekler", en: "Skills" },
  "skills.desc": { tr: "Uzmanlaştığım teknolojiler:", en: "Technologies I've mastered:" },
  // Contact
  "nav.contact": { tr: "İletişim", en: "Contact" },
  "contact.title": { tr: "İletişim", en: "Contact" },
  "contact.desc": { tr: "Sorularınız, fırsatlar veya sadece merhaba demek için bana ulaşabilirsiniz.", en: "Feel free to reach out to me for questions, opportunities, or just to say hi." },
  "contact.email": { tr: "E-posta Gönder", en: "Send an Email" },
  // Footer
  "footer.left": { tr: "Ayşe Sude Özden tarafından 🎧 & 👩🏻‍💻 ile yapıldı", en: "Made with 🎧 & 👩🏻‍💻 by Ayşe Sude Özden" },
  "footer.rights": { tr: "Tüm hakları saklıdır.", en: "All rights reserved." }
};

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("tr");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "tr" ? "en" : "tr";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  };

  const t = (key: string) => {
    if (!translations[key]) return key;
    return translations[key][lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
