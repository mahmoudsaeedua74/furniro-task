"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import ProductCard from "../ui/ProductsCard";
import { Button } from "../ui/button";
import { productsData } from "@/constants/siteConfig";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <section className="mt-[56px] m-5 sm:mx-[102px]">
      <Heading title="Our Products" isLarge={true} />
      <div className=" flex flex-wrap gap-8 justify-center mt-8">
        {productsData.map((product) => (
          // make a smooth animation for products to come from bottom
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="w-full flex justify-center mt-8"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link href={"shop"}>
          <Button variant={"showMore"} size={"showMore"}>
            Show More
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
