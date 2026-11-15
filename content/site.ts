/**
 * Sitedeki tüm içerik burada. Bir şeyi değiştirmek için bileşenlere
 * dokunmana gerek yok, sadece bu dosyayı düzenle.
 *
 * Her metin { tr, en } çiftidir. Tek dilde yazmak istersen ikisine de
 * aynı metni koyabilirsin.
 */

export type L = { tr: string; en: string };

export const profile = {
  name: "Ayşe Sude Özden",
  short: "Sude",
  email: "aysesudeozden@gmail.com",
  links: {
    github: "https://github.com/aysesudeozden",
    linkedin: "https://www.linkedin.com/in/ay%C5%9Fe-sude-%C3%B6zden-872013227/",
    instagram: "https://www.instagram.com/aysesudeozden",
  },
};

export const hero = {
  command: "./merhaba.sh",
  title: { tr: "Merhaba, ben Sude.", en: "Hi, I'm Sude." } as L,
  tagline: {
    tr: "Yazılım mühendisiyim. Çoğunlukla web ve backend, arada bir de güvenlik.",
    en: "Software engineer. Mostly web and backend, with a bit of security on the side.",
  } as L,
  // Girişteki küçük durum tablosu
  status: [
    { k: { tr: "rol", en: "role" }, v: { tr: "yazılım mühendisi", en: "software engineer" } },
    { k: { tr: "şu an", en: "now" }, v: { tr: "Mexicanizate", en: "Mexicanizate" } },
    { k: { tr: "okul", en: "school" }, v: { tr: "Giresun Üni. '25", en: "Giresun Univ. '25" } },
    { k: { tr: "ilgi", en: "into" }, v: { tr: "web · backend · güvenlik", en: "web · backend · security" } },
  ] as { k: L; v: L }[],
};

export const about = {
  paragraphs: [
    {
      tr: "Giresun Üniversitesi'nde Bilgisayar Mühendisliği okudum, bir dönemim de Erasmus+ ile Polonya'da, Bydgoszcz'da geçti. Şu an Mexicanizate'te yazılım mühendisi olarak çalışıyorum.",
      en: "I studied Computer Engineering at Giresun University and spent one semester in Bydgoszcz, Poland, on Erasmus+. I currently work as a software engineer at Mexicanizate.",
    },
    {
      tr: "Arayüz tarafında React ve Next.js ile çalışmayı seviyorum. Backend'de Python ve Node.js kullanıyorum, son zamanlarda en çok agent servisleri ve MCP sunucularıyla uğraştım. Bir sistemi kurmak kadar nasıl açık verdiğini anlamak da ilgimi çekiyor, siber güvenliğe merakım oradan geliyor.",
      en: "On the front end I like working with React and Next.js. On the back end I use Python and Node.js, and lately I've spent most of my time on agent services and MCP servers. I'm as curious about how a system leaks as how it's built, which is where my interest in security comes from.",
    },
    {
      tr: "Kod dışında yazıyorum, renklerle oynuyorum ve kırmızıyı o kadar seviyorum ki kendi editör temamı yaptım.",
      en: "Outside of code I write, play with colours, and I like red enough that I made my own editor theme.",
    },
  ] as L[],
  // "Şu sıralar" listesi
  now: [
    { tr: "Mexicanizate'te yazılım mühendisi olarak çalışıyorum.", en: "Working as a software engineer at Mexicanizate." },
    { tr: "Ağ güvenliği ve OSINT okuyorum.", en: "Reading about network security and OSINT." },
    { tr: "Yazılar sayfasına bir şeyler biriktiriyorum.", en: "Slowly filling up the writing page." },
  ] as L[],
  skills: [
    { group: { tr: "Frontend", en: "Frontend" } as L, items: ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "CSS"] },
    { group: { tr: "Backend", en: "Backend" } as L, items: ["Python", "Node.js", "FastAPI", "Java", "SQL", "PostgreSQL", "Docker", "SAP ABAP"] },
    { group: { tr: "Veri", en: "Data" } as L, items: ["Data science", "scikit-learn", "Computer vision", "MCP"] },
    { group: { tr: "Güvenlik", en: "Security" } as L, items: ["Network security", "OSINT", "Web security"] },
  ],
};

export type Experience = {
  period: L;
  role: L;
  company: string;
  kind: L;
  place?: L;
  desc: L;
  tags?: string[];
  current?: boolean;
};

// En yeni en üstte
export const experience: Experience[] = [
  {
    period: { tr: "Nis 2024 – bugün", en: "Apr 2024 – now" },
    role: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
    company: "Mexicanizate",
    kind: { tr: "Çırak", en: "Apprenticeship" },
    desc: {
      tr: "Web geliştirme ve veri yönetimi üzerine çalışıyorum.",
      en: "Working on web development and data management.",
    },
    tags: ["Web", "Data management"],
    current: true,
  },
  {
    period: { tr: "Ara 2025 – Eyl 2026", en: "Dec 2025 – Sep 2026" },
    role: { tr: "Veri Bilimi Bursiyeri", en: "Data Science Scholar" },
    company: "Yapay Zeka ve Teknoloji Akademisi",
    kind: { tr: "Burs programı", en: "Scholarship" },
    place: { tr: "Uzaktan", en: "Remote" },
    desc: {
      tr: "10 ay boyunca veri bilimi ve SQL eğitimi aldım. CineMatch'i bu dönemde ekibimle birlikte geliştirdik.",
      en: "Ten months of data science and SQL training. My team and I built CineMatch during this time.",
    },
    tags: ["Data science", "SQL", "Python"],
  },
  {
    period: { tr: "Eyl 2025 – Kas 2025", en: "Sep 2025 – Nov 2025" },
    role: { tr: "SAP ABAP Stajyeri", en: "SAP ABAP Intern" },
    company: "Dataliva",
    kind: { tr: "Staj", en: "Internship" },
    place: { tr: "Zeytinburnu, İstanbul", en: "Zeytinburnu, Istanbul" },
    desc: {
      tr: "Rapor, form ve ALV (ABAP List Viewer) gridleri geliştirip özelleştirdim. İş süreçlerinin SAP tarafında nasıl yürüdüğünü yakından gördüm.",
      en: "Built and customised reports, forms and ALV (ABAP List Viewer) grids, and saw how business processes actually run inside SAP.",
    },
    tags: ["SAP ABAP", "ALV", "Data analysis"],
  },
  {
    period: { tr: "Tem 2025 – Ağu 2025", en: "Jul 2025 – Aug 2025" },
    role: { tr: "Backend Geliştirici", en: "Backend Developer" },
    company: "Ziraat Teknoloji A.Ş.",
    kind: { tr: "Staj", en: "Internship" },
    place: { tr: "Ataşehir, İstanbul", en: "Ataşehir, Istanbul" },
    desc: {
      tr: "Backend uygulamaları, agent servisleri ve MCP sunucuları geliştirdim. Agent.exe bu stajda çıktı.",
      en: "Built backend applications, agent services and MCP servers. Agent.exe came out of this internship.",
    },
    tags: ["Python", "Node.js", "SQL", "Docker", "MCP"],
  },
  {
    period: { tr: "Kas 2023 – Haz 2024", en: "Nov 2023 – Jun 2024" },
    role: { tr: "Kısmi Zamanlı Öğrenci", en: "Part-time Student Assistant" },
    company: "Giresun Üniversitesi",
    kind: { tr: "Yarı zamanlı", en: "Part-time" },
    place: { tr: "Giresun, hibrit", en: "Giresun, hybrid" },
    desc: {
      tr: "2023–2024 akademik yılı boyunca Erasmus Koordinatörlüğü'nde çalıştım.",
      en: "Worked at the Erasmus Coordination Office during the 2023–2024 academic year.",
    },
    tags: ["Web", "Databases"],
  },
];

export type Education = {
  period: L;
  school: string;
  degree: L;
  place: L;
  desc: L;
  note?: L;
};

export const education: Education[] = [
  {
    period: { tr: "2021 – 2025", en: "2021 – 2025" },
    school: "Giresun Üniversitesi",
    degree: { tr: "Bilgisayar Mühendisliği, lisans", en: "B.Sc. Computer Engineering" },
    place: { tr: "Giresun", en: "Giresun, Türkiye" },
    desc: {
      tr: "KAVŞAK360 burada, bir ekip projesi olarak çıktı.",
      en: "KAVŞAK360 started here as a team project.",
    },
    note: { tr: "GNO 3.22", en: "GPA 3.22" },
  },
  {
    period: { tr: "Şub – Tem 2023", en: "Feb – Jul 2023" },
    school: "Uniwersytet Kazimierza Wielkiego",
    degree: { tr: "Bilgisayar Bilimi, Erasmus+", en: "Computer Science, Erasmus+" },
    place: { tr: "Bydgoszcz, Polonya", en: "Bydgoszcz, Poland" },
    desc: {
      tr: "Altı ay Polonya'da okudum.",
      en: "Six months of studying in Poland.",
    },
  },
];

export type Project = {
  name: string;
  subtitle?: L;
  desc: L;
  tags: string[];
  repo?: string;
  live?: string;
  context?: L;
  year?: string;
};

export const projects: Project[] = [
  {
    name: "CineMatch",
    subtitle: { tr: "Film öneri sistemi", en: "Film recommender" },
    desc: {
      tr: "84.000'den fazla filmlik bir veri seti üzerinde çalışan hibrit bir öneri sistemi. Kosinüs benzerliği, tür ağırlıkları ve popülerliği birlikte kullanıyor. Backend FastAPI, arayüz Next.js; filmleri bir sohbet üzerinden keşfediyorsun.",
      en: "A hybrid recommender built on a dataset of 84,000+ films. It combines cosine similarity, genre weights and popularity. FastAPI on the back end, Next.js on the front, and you discover films through a chat.",
    },
    tags: ["Python", "FastAPI", "scikit-learn", "Next.js"],
    repo: "https://github.com/aysesudeozden/CineMatch",
    live: "https://cinematch-rho-eight.vercel.app",
    context: { tr: "ekip projesi", en: "team project" },
    year: "2026",
  },
  {
    name: "KAVŞAK360",
    subtitle: { tr: "Adaptif trafik sinyalizasyonu", en: "Adaptive traffic signalling" },
    desc: {
      tr: "Giresun merkezdeki 8 ışıklı kavşak üzerine kurulu, görüntü işleme ve makine öğrenimiyle çalışan bir sinyalizasyon sistemi. Amaç kazaları azaltmak ve trafiği rahatlatmak.",
      en: "A signalling system for 8 traffic-light junctions in central Giresun, using computer vision and machine learning. The goal is fewer accidents and smoother traffic.",
    },
    tags: ["Python", "Machine learning", "Computer vision"],
    context: { tr: "ekip projesi", en: "team project" },
    year: "2024",
  },
  {
    name: "Agent.exe",
    desc: {
      tr: "Çalışanların belirlenen saatler içindeki çalışma düzenini takip eden bir izleme uygulaması.",
      en: "A monitoring app that tracks employees' work patterns within set hours.",
    },
    tags: ["Python", "Node.js"],
    context: { tr: "Ziraat Teknoloji stajı", en: "Ziraat Teknoloji internship" },
    year: "2025",
  },
  {
    name: "Fact-Check AI",
    desc: {
      tr: "Şüpheli haberleri ve iddiaları yapay zeka ajanlarıyla kontrol eden bir doğrulama platformu. Ekipte Product Owner'dım.",
      en: "A fact-checking platform that checks suspicious news and claims with AI agents. I was the team's Product Owner.",
    },
    tags: ["Next.js", "TypeScript"],
    repo: "https://github.com/aysesudeozden/yzta-bootcamp",
    live: "https://yzta-bootcamp-chi.vercel.app",
    context: { tr: "YZTA bootcamp", en: "YZTA bootcamp" },
    year: "2026",
  },
  {
    name: "MOVIE-MCP",
    desc: {
      tr: "Cursor içinden TMDB'de film aramaya yarayan bir MCP sunucusu. Python ile yazdım, veriyi PostgreSQL'de tutuyor.",
      en: "An MCP server for searching TMDB from inside Cursor. Written in Python, with data stored in PostgreSQL.",
    },
    tags: ["Python", "PostgreSQL", "MCP"],
    repo: "https://github.com/aysesudeozden/MOVIE-MCP",
    year: "2025",
  },
  {
    name: "Miray Kılıçkaya",
    subtitle: { tr: "Psikolog web sitesi", en: "Psychologist's website" },
    desc: {
      tr: "Bir psikolog için hazırladığım kişisel web sitesi.",
      en: "A personal website I made for a psychologist.",
    },
    tags: ["Web design", "Frontend"],
    year: "2026",
  },
  {
    name: "redtheme",
    desc: {
      tr: "Kod editörleri için kendi kırmızı temam. Open VSX'te yayında.",
      en: "My own red theme for code editors, published on Open VSX.",
    },
    tags: ["VS Code"],
    repo: "https://github.com/aysesudeozden/redtheme",
    live: "https://open-vsx.org/extension/aysesudeozden/redtheme",
    year: "2026",
  },
  {
    name: "A/B Testing 101",
    desc: {
      tr: "Uzun form ile adımlı formun kayıt sürelerini karşılaştıran küçük bir veri bilimi çalışması. Permütasyon testi ve p-hacking üzerine notlar da var.",
      en: "A small data science study comparing sign-up times for a long and a stepped form, with notes on permutation tests and p-hacking.",
    },
    tags: ["Python", "Jupyter"],
    repo: "https://github.com/aysesudeozden/ab-testing-101",
    year: "2026",
  },
];

// Arayüzdeki küçük metinler
export const ui = {
  nav: {
    about: { tr: "hakkımda", en: "about" },
    experience: { tr: "deneyim", en: "experience" },
    education: { tr: "eğitim", en: "education" },
    projects: { tr: "projeler", en: "projects" },
    writing: { tr: "yazılar", en: "writing" },
  },
  sections: {
    about: { n: "01", path: "~/hakkimda", title: { tr: "hakkımda", en: "about" } },
    experience: { n: "02", path: "~/deneyim", title: { tr: "deneyim", en: "experience" } },
    education: { n: "03", path: "~/egitim", title: { tr: "eğitim", en: "education" } },
    projects: { n: "04", path: "~/projeler", title: { tr: "projeler", en: "projects" } },
    contact: { n: "05", path: "~/iletisim", title: { tr: "bana yaz", en: "say hi" } },
  },
  heroCta: {
    projects: { tr: "projelere bak", en: "see projects" },
    writing: { tr: "yazılar", en: "writing" },
  },
  theme: {
    light: { tr: "açık temaya geç", en: "switch to light" },
    dark: { tr: "koyu temaya geç", en: "switch to dark" },
  },
  now: { tr: "şu sıralar", en: "lately" },
  skills: { tr: "kullandıklarım", en: "tools" },
  current: { tr: "şu an", en: "now" },
  code: { tr: "kod", en: "code" },
  live: { tr: "site", en: "site" },
  contactDesc: {
    tr: "Bir proje, bir fikir ya da sadece selam. En kolay e-postayla ulaşırsın.",
    en: "A project, an idea or just a hello. Email is the easiest way to reach me.",
  },
  writing: {
    title: { tr: "yazılar", en: "writing" },
    desc: {
      tr: "Öğrendiklerim, notlarım, aklımdan geçenler.",
      en: "Things I've learned, notes, things on my mind.",
    },
    empty: { tr: "Henüz yazı yok.", en: "No posts yet." },
    back: { tr: "tüm yazılar", en: "all posts" },
    minutes: { tr: "dk", en: "min" },
    draft: { tr: "taslak", en: "draft" },
  },
};
