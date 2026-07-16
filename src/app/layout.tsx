import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mbsend.com'),
  title: "MB Send – Cross-Border Payments Simplified",
  description: "MB Send is a modern fintech platform enabling fast, secure international money transfers.",
  icons: {
    icon: [
      { url: '/mb-send-logo.ico', sizes: 'any' },   // 👈 corrigido
      { url: '/images/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logo.svg',
  },
  openGraph: {
    title: "MB Send – Cross-Border Payments Simplified",
    description: "MB Send is building the payment layer between Europe and emerging markets.",
    url: "https://www.mbsend.com",
    siteName: "MB Send",
    images: [
      {
        url: "https://www.mbsend.com/images/og-image.png",
        width: 1200,
        height: 473,
        alt: "MB Send",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Send – Cross-Border Payments Simplified",
    description: "MB Send is building the payment layer between Europe and emerging markets.",
    images: ["https://www.mbsend.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mb-send-logo.ico" sizes="any" />   {/* 👈 corrigido */}
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}