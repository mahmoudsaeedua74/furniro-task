"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust import path as needed
import {
  buttonVariants,
  cardVariants,
  containerVariants,
  itemVariants,
} from "@/utils/animation";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[716.82px] flex justify-end items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/bannerHero.webp"
          alt="Banner Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
          fetchPriority="high"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="me-5 sm:me-[58px] rounded-[10px] bg-[#FFF3E3] w-[300px] sm:w-[343px] md:w-[643px] h-[380px] md:h-[443px] flex flex-col pt-10 pb-6 pl-5 pr-6 md:pt-14 md:pb-8 md:pl-8 md:pr-10 lg:pt-[62px] lg:pb-[32px] lg:pl-[37px] lg:pr-[43px] relative z-10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full flex flex-col"
        >
          {/* New Arrival Badge */}
          <motion.span
            className="text-[14px] sm:text-base font-semibold md:tracking-[3px] text-[#333]"
            variants={itemVariants}
          >
            New Arrival
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            className="text-[32px] font-bold leading-[65px] text-primary mt-1 mb-[17px] md:text-[52px] max-md:leading-[40px]"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Discover Our
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              New Collection
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="md:text-[18px] font-medium leading-[24px] text-[#333] text-[14px]"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={buttonVariants} className="mt-auto">
            <Button variant={"buyNow"} size={"buyNow"}>
              Buy Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements on Card - removed */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
