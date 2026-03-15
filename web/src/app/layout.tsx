import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thinkxx Agency — Psychotech Marketing | Psychology-Driven Revenue Growth",
  description:
    "Thinkxx Agency builds psychology-driven marketing systems that transform attention into sales. Psychotech marketing combining psychology, technology, and content systems to dramatically increase business revenue.",
  keywords: "psychotech marketing, psychology marketing, brand strategy, revenue growth, conversion optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-brand-dark text-white">
        {children}
      </body>
    </html>
  );
}
