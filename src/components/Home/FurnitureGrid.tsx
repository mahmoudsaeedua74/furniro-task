"use client";

import React from "react";
import Image from "next/image";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import { furnitureGrid } from "@/constants/siteConfig";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FurnitureGrid = () => {
  return (
    <div className="mt-[67px]">
      <Heading
        title="#FuniroFurniture"
        subTitle="Share your setup with"
        isLarge={true}
        reverse={true}
      />

      <div className="grid grid-cols-12 grid-rows-12 gap-2 md:gap-4 h-[400px] md:h-[600px] lg:h-[721px]">
        {furnitureGrid.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.className} overflow-hidden shadow-md relative group`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={itemVariants}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureGrid;
