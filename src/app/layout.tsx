import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digihub Pro - Engineering Digital Dominance",
  description: "Engineering Digital Dominance through Data, Automation & Reach. Premium Digital Growth Agency.",
  keywords: ["Digihub Pro", "Digital Growth Agency", "Automation Expert", "Web Development", "Data Intelligence", "Next.js", "Marketing", "Strategic Automation"],
  authors: [{ name: "Digihub Pro" }],
  openGraph: {
    title: "Digihub Pro - Engineering Digital Dominance",
    description: "Engineering Digital Dominance through Data, Automation & Reach. View our solutions and experience.",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-black" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
