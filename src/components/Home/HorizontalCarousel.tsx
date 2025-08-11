"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  { id: 1, image: "/assets/bedroom.webp" },
  { id: 2, image: "/assets/dining.webp" },
  { id: 3, image: "/assets/living.webp" },
];

// HorizontalCarousel component displays a horizontal image slider/carousel
// Users can navigate through room images by clicking the arrow button or dots below.
// It uses framer-motion for smooth animated sliding transitions.

export default function HorizontalCarousel() {
  // current keeps track of the currently visible slide index
  const [current, setCurrent] = useState(0);

  return (
    <div className="sm:w-[396px] w-[300px] overflow-hidden relative select-none flex-1">
      {/* motion.div wraps the sliding images and animates horizontal translation */}
      <motion.div
        className="flex gap-[24px]"
        // Animate the x position based on current slide index, sliding images left
        animate={{ x: -current * 396 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Map through rooms array to render each image with fixed size */}
        {rooms.map(({ id, image }, index) => (
          <div
            key={id}
            className="relative flex-shrink-0 overflow-hidden shadow-md"
            style={{ width: 372, height: 486 }}
          >
            <Image
              src={image}
              alt={`Room ${id}`}
              fill
              sizes="372px" 
              className="object-cover"
              priority
            />

            {index === current && (
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % rooms.length)} // Loop back to first slide after last
                className="absolute top-1/2 end-0 cursor-pointer -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center shadow-md"
                aria-label="Next"
              >
                {/* Right arrow SVG icon with primary color stroke */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#B88E2F"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
      </motion.div>

      {/* Pagination dots container centered below carousel */}
      <div className="flex justify-center items-center w-[120px]  h-[27px]  gap-[20px] mt-10">
        {rooms.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)} // Clicking dot navigates directly to corresponding slide
            aria-label={`Go to slide ${i + 1}`}
            className={`flex items-center justify-center cursor-pointer ${
              i === current
                ? "w-[27px] h-[27px] rounded-full border border-[#B88E2F]" // Active dot styling (larger circle with border)
                : "w-[11px] h-[11px] rounded-full bg-[#D8D8D8]" // Inactive dot styling (small gray circle)
            }`}
          >
            {/* Inner filled circle for active dot */}
            {i === current && (
              <span className="w-[11px] h-[11px] rounded-full bg-[#B88E2F]"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
