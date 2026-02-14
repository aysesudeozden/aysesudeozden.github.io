import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ayşe Sude Özden | Ana Sayfa",
  description: "Bilgisayar Mühendisi - Web Tasarım, HTML, SQL, Unity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
        <link rel="icon" href="https://cdn-icons-png.freepik.com/512/6655/6655473.png" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
