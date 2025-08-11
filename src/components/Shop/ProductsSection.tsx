"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../ui/ProductsCard";
import { productsData } from "@/constants/siteConfig";
import ProductsNavbar from "./FilterBar";
import PaginationStatic from "../ui/PaginationStatic";
import FeaturesSection from "./FeaturesSection";

// Duplicate productsData to get 16 items with unique IDs
const products = [
  ...productsData,
  ...productsData.map((p) => ({ ...p, id: p.id + 8 })),
];

type ViewMode = "grid" | "list";

export default function ShopSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <>
      {/* NavBar */}
      <ProductsNavbar
        productsCount={products.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <section className="px-5 sm:px-10 md:px-20">
        <div
          className={`${
            viewMode === "grid"
              ? "flex flex-wrap gap-8 justify-center"
              : "flex flex-col gap-6"
          }`}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProductCard product={product} viewMode={viewMode} />
            </motion.div>
          ))}
        </div>
        {/* Pagination but for now its a Static */}
        <PaginationStatic />
      </section>
      <FeaturesSection />
    </>
  );
}
