import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Саид Уапов | UI/UX & Full-stack",
  description: "Дизайнер, Motion-художник и Full-stack разработчик. Создаю сайты, 3D и motion-графику.",
  openGraph: {
    title: "Саид Уапов | Портфолио",
    description: "Создаю продукты, которые выглядят как искусство и работают как часы.",
    url: "https://resume-peach-nine-69.vercel.app/",
    siteName: "Portfolio",
    locale: "ru_RU",
    type: "website",
  },
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
