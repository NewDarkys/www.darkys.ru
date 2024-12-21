import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.darkys.ru`),
  title: "Darkys.ru | 7EYES - Advanced Anomaly Research",
  keywords:
    "анализ аномалий, исследование необъяснимого, Darkys, 7EYES, аномалии, исследования, наука, необъяснимые явления, darkys, даркис, rus_darkys, рус даркис",
  description:
    "Welcome to 7EYES founded by (Darkys | Даркис). 7EYES - A leading organization in anomaly research. Explore more on Darkys.ru",
  alternates: {
    canonical: "./",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
