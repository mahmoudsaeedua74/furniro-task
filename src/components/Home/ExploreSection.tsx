"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import RoomCarousel from "./RoomCarousel";

export default function ExploreSection() {
  return (
    <section className="py-11 mt-[69px] px-5 md:pl-[100px] bg-[#FCF8F3]">
      <motion.div
        className="flex flex-wrap justify-center items-center"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-[25px] w-[422px] mb-6 font-poppins me-[42px] ">
          <div>
            <h2 className="font-bold text-[#3A3A3A] text-[24px] sm:text-[40px] sm:leading-[1.2]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="font-medium text-[#616161] text-[14px] sm:text-base sm:leading-[1.5]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <Button variant={"buyNowSmall"} size={"buyNowSmall"}>
            Explore More
          </Button>
        </div>
        <RoomCarousel />
      </motion.div>
    </section>
  );
}
