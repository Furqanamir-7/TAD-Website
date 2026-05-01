import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAD Architectural Firm",
  description: "Precise, timeless, and minimal architectural design.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "TAD Architectural Firm",
    description: "Precise, timeless, and minimal architectural design.",
    images: [
      {
        url: '/metadata-image.png',
        width: 1200,
        height: 630,
        alt: 'TAD Architectural Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TAD Architectural Firm",
    description: "Precise, timeless, and minimal architectural design.",
    images: ['/metadata-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased font-sans bg-[var(--color-bg-main)] text-[var(--color-text-pri)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

