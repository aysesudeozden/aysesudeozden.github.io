import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayşe Sude Özden — Jr. Fullstack Developer",
  description: "Portfolio of Sude Özden — Jr. Fullstack Developer specializing in Python, Java, Next.js, and Network Management.",
  icons: {
    icon: "/ruby.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-theme-bg min-h-screen text-theme-text font-mono transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
