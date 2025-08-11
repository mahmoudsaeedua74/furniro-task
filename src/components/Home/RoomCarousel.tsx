"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalCarousel from "./HorizontalCarousel";

// Array of room data with id, number, name, description and image path
const rooms = [
  {
    id: 1,
    number: "01",
    name: "Bed Room",
    description: "Inner Peace",
    image: "/assets/bedroom.webp",
  },
  {
    id: 2,
    number: "02",
    name: "Living Room",
    description: "Family Time",
    image: "/assets/dining.webp",
  },
  {
    id: 3,
    number: "03",
    name: "Office",
    description: "Focused Work",
    image: "/assets/living.webp",
  },
];

// Animation variants for entering, centering, and exiting slides
const variants = {
  // Slide enters from right or left depending on direction
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  // Centered slide visible and positioned normally
  center: {
    x: 0,
    opacity: 1,
  },
  // Slide exits to left or right depending on direction
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function RoomCarousel() {
  // State to keep track of current page index and animation direction
  const [[page, direction], setPage] = useState([0, 0]);

  // Function to update page index and direction on pagination
  const paginate = (newDirection: number) => {
    setPage([
      (page + newDirection + rooms.length) % rooms.length, // loop around rooms array
      newDirection, // direction used for animation
    ]);
  };

  // Current room object based on page index
  const room = rooms[page];

  return (
    <div className="flex gap-6 lg:flex-1 flex-col lg:flex-row  justify-center items-center">
      <div className="flex items-center gap-6">
        {/* Image container with relative positioning and fixed size */}
        <div className="relative w-[300px] md:w-[404px] h-[400px] md:h-[582px] overflow-hidden ">
          {/* AnimatePresence enables exit animations for components */}
          <AnimatePresence initial={false} custom={direction}>
            {/* Motion div animates the room image sliding in and out */}
            <motion.div
              key={room.id} // Key triggers re-render and animation on change
              custom={direction} // Pass direction to animation variants
              variants={variants}
              initial="enter" // Initial animation state when entering
              animate="center" // Animate to center position
              exit="exit" // Animate exit when unmounting
              transition={{ duration: 0.4 }} // Duration of animation
              className="absolute inset-0"
            >
              {/* Next.js optimized Image component */}
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Info card positioned inside image at bottom-left with slight transparency */}
          <motion.div
            key={room.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute bottom-[24px] left-[24px] w-[150px] h-[110px] sm:w-[217px] sm:h-[130px] bg-white/70 shadow-md  p-4 flex flex-col justify-center"
          >
            {/* Room number */}
            <span className="font-poppins font-medium text-[#616161] text-sm sm:text-base leading-[1.5]">
              {room.number}
            </span>
            {/* Room name */}
            <h3 className="font-poppins font-semibold  text-base sm:text-[28px] leading-[1.2]">
              {room.name}
            </h3>
            {/* Room description */}
            <p className="font-poppins font-medium text-[#616161] text-[16px] leading-[1.5] mt-2">
              {room.description}
            </p>
            {/* Arrow button positioned to the right outside the card */}
            <div
              className="w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center cursor-pointer  absolute bottom-0 left-[100%]"
              onClick={() => paginate(1)} // On click, go to next room
              role="button"
              tabIndex={0}
              aria-label="Next Room"
            >
              {/* SVG arrow icon pointing right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 12h14M14 6l6 6-6 6"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      <HorizontalCarousel />
    </div>
  );
}
