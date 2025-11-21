import SehaFoundationNavbar from "@/components/SehaFoundationNavbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { sehaFoundationMetadata } from './seha-foundation-metadata';

export const metadata: Metadata = sehaFoundationMetadata;

export default function SehaFoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
      <SehaFoundationNavbar />
    
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}