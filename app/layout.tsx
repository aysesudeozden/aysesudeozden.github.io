import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayşe Sude Özden | Portfolio",
  description: "Minimalist and interactive portfolio of Ayşe Sude Özden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-theme-bg min-h-screen relative text-theme-text font-sans">
        {children}
      </body>
    </html>
  );
}
