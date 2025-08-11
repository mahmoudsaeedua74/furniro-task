import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import { cardsData } from "@/constants/siteConfig";

/**
 * CategoryBrowseSection component renders a section showcasing
 * different furniture categories with images and labels.
 *
 * It uses a reusable Heading component for the section title and subtitle.
 * The category cards are displayed in a responsive 3-column grid layout,
 * adapting gaps and image sizes for different screen widths.
 */

export default function CategoryBrowseSection() {
  return (
    <section className="mt-[56.47px] sm:ml-[131px] mx-5 sm:mr-[126px]">
      <Heading
        title="Browse The Range"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="mt-5 sm:mt-[62.29px] grid grid-cols-3 gap-2 sm:gap-5">
        {cardsData.map(({ id, src, alt, label }) => (
          <div key={id} className="flex flex-col items-center rounded-[10px]">
            <div className="relative w-full aspect-[381/480] rounded-[10px] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 33vw, 381px"
                className="object-cover rounded-[10px]"
                priority
              />
            </div>
            <p className="mt-[15px] sm:mt-[30px] font-poppins font-semibold text-[16px] sm:text-[24px] text-center text-[#333333]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
