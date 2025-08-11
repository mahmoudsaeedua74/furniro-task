// src/app/HomeClient.tsx
"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/Home/HeroSection";

const CategoryBrowseSection = dynamic(
  () => import("@/components/Home/CategoryBrowseSection"),
  { ssr: false, loading: () => null }
);

const ExploreSection = dynamic(
  () => import("@/components/Home/ExploreSection"),
  { ssr: false, loading: () => null }
);

const FurnitureGrid = dynamic(() => import("@/components/Home/FurnitureGrid"), {
  ssr: false,
  loading: () => null,
});

const ProductsSection = dynamic(
  () => import("@/components/Home/ProductsSection"),
  { ssr: false, loading: () => null }
);

export default function HomeClient() {
  return (
    <>
      {/* HeroSection will be rendered normally with SSR disabled for others */}
      <HeroSection />

      {/* Lazy load these sections on the client without loading placeholders */}
      <CategoryBrowseSection />
      <ProductsSection />
      <ExploreSection />
      <FurnitureGrid />
    </>
  );
}
