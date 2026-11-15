import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aysesudeozden.github.io"),
  title: {
    default: "Ayşe Sude Özden",
    template: "%s · Ayşe Sude Özden",
  },
  description: "Ayşe Sude Özden, yazılım mühendisi. Projeler, deneyim ve yazılar.",
  icons: { icon: "/ruby.png" },
  openGraph: {
    title: "Ayşe Sude Özden",
    description: "Yazılım mühendisi. Projeler, deneyim ve yazılar.",
    images: ["/avatar.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b0d" },
  ],
};

// Sayfa çizilmeden önce temayı uygular; böylece açılışta renk sıçraması olmaz.
// Varsayılan koyu tema; ziyaretçi açığı seçerse o hatırlanır.
const themeScript = `try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen overflow-x-hidden font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
