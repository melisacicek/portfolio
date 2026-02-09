import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseBackground from "@/components/MouseBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melisa Çiçek Soyubey | Portföy",
  description: "Bilgisayar Mühendisi Öğrencisi - Bingöl Üniversitesi. Projeler, beceriler ve iletişim.",
  icons: { icon: "/images.png", apple: "/images.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseBackground />
        {children}
      </body>
    </html>
  );
}
