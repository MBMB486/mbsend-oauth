import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mbsend.com'), // 👈 importante para resolver URLs relativos
  title: "MB Send – Cross-Border Payments Simplified",
  description: "MB Send is a modern fintech platform enabling fast, secure international money transfers.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
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
        url: "https://www.mbsend.com/images/og-image.png", // 👈 imagem que criaste
         width: 2840,
         height: 1120
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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}