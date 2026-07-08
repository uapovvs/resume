import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мое Портфолио | Full-stack Developer",
  description: "Личный сайт и резюме. Создаю современные веб-приложения.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className="antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
