import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

// Poppins for main content
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Montserrat for logo only
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniro | Modern Furniture for Elegant Homes",
  description:
    "Furniro offers a curated selection of modern and stylish furniture with high-quality designs to transform your home into a more comfortable and beautiful space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} ${montserrat.variable}`}>
      <body className="font-[var(--font-poppins)] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
