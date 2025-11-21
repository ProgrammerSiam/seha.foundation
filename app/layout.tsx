import SehaFoundationNavbar from "@/components/SehaFoundationNavbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEHA Foundation",
  description: "Building tomorrow's healthcare solutions today",
};

export default function SehaFoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
