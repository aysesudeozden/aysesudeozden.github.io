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
  "nav.about": { tr: "hakkımda", en: "about" },
  "nav.experience": { tr: "deneyim", en: "experience" },
  "nav.education": { tr: "eğitim", en: "education" },
  "nav.projects": { tr: "projeler", en: "projects" },
  "nav.contact": { tr: "iletişim", en: "contact" },
  
  // About
  "about.title": { tr: "Mimar.", en: "The Architect." },
  "about.p1": { 
    tr: "Ben Ayşe Sude Özden, Bilgisayar Mühendisliği öğrencisi ve Yapay Zeka ile Veri Mühendisliğine derin bir tutku duyan Fullstack Geliştiriciyim.", 
    en: "I am Ayşe Sude Özden, a Computer Engineering student and Fullstack Developer with a deep passion for AI and Data Engineering." 
  },
  "about.p2": { 
    tr: "Teknolojideki yolculuğum sadece işlevsel değil, aynı zamanda mimari açıdan zarif sistemler kurma arzumdan güç alıyor. Karmaşık veri problemleri ile kusursuz kullanıcı deneyimlerinin kesişim noktasında gelişiyorum.", 
    en: "My journey in tech is driven by the desire to build systems that are not only functional but architecturally elegant. I thrive in the intersection of complex data problems and seamless user experiences." 
  },
  "about.p3": { 
    tr: "Makine öğrenimi modellerini optimize etmekten sinematik web arayüzleri oluşturmaya kadar, her kod satırının bir amaca hizmet etmesi ve bir hikaye anlatması gerektiğine inanıyorum.", 
    en: "From fine-tuning machine learning models to crafting cinematic web interfaces, I believe that every line of code should serve a purpose and tell a story." 
  },
  "about.arsenal": { tr: "Temel Cephanelik", en: "Core Arsenal" },
  "about.hero_text": { tr: "Zarif, kalıcı dijital mimariler inşa ediyorum.", en: "Crafting elegant, timeless digital architectures." },
  
  // Experience
  "exp.title": { tr: "Kayıtlar.", en: "Chronicles." },
  
  // Education
  "edu.title": { tr: "Akademi.", en: "Academia." },
  
  // Projects
  "proj.title": { tr: "Sergiler.", en: "Exhibitions." },
  "proj.desc": { tr: "Dijital mimariler ve algoritmik çözümlerden oluşan seçkin bir koleksiyon.", en: "A curated selection of digital architectures and algorithmic solutions." },
  
  // Contact
  "contact.title": { tr: "Bağlantı Kuralım.", en: "Let's Connect." },
  "contact.desc": { tr: "İster yeni bir proje, ister bir işbirliği ya da teknoloji ve tasarım üzerine bir sohbet olsun. Yeni fırsatları değerlendirmeye her zaman açığım.", en: "Whether it's a new project, a collaboration, or just a conversation about technology and design. I'm always open to discussing new opportunities." },
  "contact.btn": { tr: "Mesaj Gönder", en: "Send a Message" },
};

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

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
