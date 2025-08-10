import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font from Google Fonts with CSS variable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniro | Modern Furniture for Elegant Homes",
  description:
    "Furniro offers a curated selection of modern and stylish furniture with high-quality designs to transform your home into a more comfortable and beautiful space.",
  keywords: [
    "Furniro",
    "Furniture",
    "Home Decor",
    "Interior Design",
    "Modern Furniture",
    "Chairs",
    "Tables",
    "Living Room",
    "Luxury Furniture",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
