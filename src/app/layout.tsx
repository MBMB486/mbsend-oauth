import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";   // ajusta o import conforme necessário
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MB Send – Cross-Border Payments Simplified",
  description: "MB Send is a modern fintech platform enabling fast, secure international money transfers.",
  icons: {
    icon: "/images/logo.svg",   // 👈 adiciona esta linha
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