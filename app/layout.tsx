import "../styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Modern Next.js App",
  description: "A modern web application built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 antialiased">
        <Navbar />
        <div className="container max-w-6xl mx-auto">
          {children}
        </div>
      
      </body>
    </html>
  );
}