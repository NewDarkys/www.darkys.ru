import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.darkys.ru`),
  generator: "Next.js",
  applicationName: "Darkys.ru",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Darkys" },
    { name: "Darkys", url: "https://www.darkys.ru" },
  ],
  creator: "Darkys",
  publisher: "Darkys",
  title: "Darkys.ru | 7EYES - Advanced Anomaly Research",
  keywords: [
    "анализ аномалий",
    "исследование необъяснимого",
    "Darkys",
    "7EYES",
    "аномалии",
    "исследования",
    "наука",
    "необъяснимые явления",
    "darkys",
    "даркис",
    "rus_darkys",
    "рус даркис",
  ],
  description:
    "Welcome to 7EYES founded by (Darkys | Даркис). 7EYES - A leading organization in anomaly research. Explore more on Darkys.ru",
  alternates: {
    canonical: "./",
  },
  robots: {
    googleBot: {
      index: true,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Darkys.ru | 7EYES - Advanced Anomaly Research",
    description:
      "7EYES - A leading organization in anomaly research. Explore more on Darkys.ru",
    url: "https://www.darkys.ru",
    siteName: "Darkys.ru",
    images: [
      {
        url: "https://www.darkys.ru/LoginLogo.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    videos: [
      {
        url: "https://www.darkys.ru/IntroVideo.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: "https://www.darkys.ru/1Ambient.mp3", // Must be an absolute URL
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <body className={inter.className}>
        {children}
       <Analytics />
       <SpeedInsights />
      </body>
  //return (
  //  <html lang="ru">
   //   <div>Under maintenance</div>
  //  </html>
 // );
}
