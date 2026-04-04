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
  "nav.education": { tr: "Eğitim", en: "Education" },
  "nav.projects": { tr: "Projeler", en: "Projects" },
  // Hero
  "hero.subtitle": { tr: "Yazılım Geliştirici", en: "Software Developer" },
  "hero.creative": { tr: "Üretken Düşünür", en: "Creative Thinker" },
  // About
  "about.title": { tr: "Hakkımda", en: "About" },
  "about.p1": { 
    tr: "Merhaba, ben Ayşe Sude Özden. Teknolojiye ve yazılıma duyduğum merakla, karmaşık problemleri sade ve zarif çözümlere dönüştürmeyi hedefleyen bir geliştiriciyim.", 
    en: "Hello, I'm Ayşe Sude Özden. With my curiosity for technology and software, I am a developer aiming to turn complex problems into simple and elegant solutions." 
  },
  "about.p2": { 
    tr: "İnsan merkezli, okunabilirliği yüksek ve performansı odakta tutan modern uygulamalar inşa etmekten keyif alıyorum. Geliştirdiğim her projede estetiği ve fonksiyonelliği bir araya getirmeye çabalıyorum.", 
    en: "I enjoy building human-centric, highly readable, and performance-oriented modern applications. I strive to combine aesthetics with functionality in every project I develop." 
  },
  // Education
  "edu.title": { tr: "Eğitim", en: "Education" },
  "edu.university": { tr: "Bilgisayar Mühendisliği (Lisans)", en: "Computer Engineering (B.Sc)" },
  "edu.university.desc": { tr: "Yazılım geliştirme, algoritmalar ve veri yapıları üzerine odaklanarak mezun oldum.", en: "Graduated with a focus on software development, algorithms, and data structures." },
  "edu.highschool": { tr: "Lise Eğitimi", en: "High School" },
  "edu.highschool.desc": { tr: "Sayısal bölüm mezunu.", en: "Graduated from Science & Math track." },
  // Projects
  "proj.title": { tr: "Projeler", en: "Projects" },
  "proj.1.desc": { tr: "Modern web teknolojileri kullanılarak geliştirilmiş interaktif platform.", en: "An interactive platform developed using modern web technologies." },
  "proj.2.desc": { tr: "Gelişmiş kullanıcı deneyimi odaklı, hızlı ve güvenilir mobil uygulama arayüzü.", en: "Fast and reliable mobile application interface focused on advanced user experience." },
  // Skills
  "nav.skills": { tr: "Yetenekler", en: "Skills" },
  "skills.title": { tr: "Yetenekler", en: "Skills" },
  "skills.desc": { tr: "Sürekli öğreniyor ve geliştiriyorum. İşte şu ana kadar uzmanlaştığım bazı teknolojiler:", en: "I am constantly learning and improving. Here are some technologies I have mastered so far:" },
  // Contact
  "nav.contact": { tr: "İletişim", en: "Contact" },
  "contact.title": { tr: "İletişim", en: "Contact" },
  "contact.desc": { tr: "Sorularınız, fırsatlar veya sadece merhaba demek için bana ulaşabilirsiniz.", en: "Feel free to reach out to me for questions, opportunities, or just to say hi." },
  "contact.email": { tr: "E-posta Gönder", en: "Send an Email" },
  // Footer
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
