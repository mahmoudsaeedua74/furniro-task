"use client";

import React from "react";
import FilterIcon from "../icons/FilterIcon";
import ColumIcon from "../icons/ColumIcon";
import GridIcon from "../icons/GridIcon";
interface ProductsNavbarProps {
  productsCount: number;
  viewMode: "grid" | "list";
  setViewMode: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}

export default function ProductsNavbar({
  productsCount,
  viewMode,
  setViewMode,
}: ProductsNavbarProps) {
  return (
    <div className="w-full mb-[63px]  sm:px-[98px] py-[35px] bg-[#F9F1E7] flex justify-between lg:gap-0 gap-5 lg:flex-row flex-col items-center mt-[1px]  text-black ">
      <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-6 self-center">
        {/* Filter box */}
        <div className="flex items-center space-x-3  cursor-pointer">
          <FilterIcon className="size-4 sm:size-6 " />
          <span className="text-base sm:text-[20px]">Filter</span>
        </div>

        {/* View toggle buttons */}
        <div className="flex items-center space-x-6 text-xl cursor-pointer">
          <GridIcon
            className={`size-4 sm:size-6 ${
              viewMode === "grid" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setViewMode("grid")}
          />
          <ColumIcon
            className={`size-4 sm:size-6 ${
              viewMode === "list" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setViewMode("list")}
          />
        </div>

        {/* Showing text */}
        <div className="ml-[6px] border-s-2 px-2 sm:px-[34px] border-[#9F9F9F] text-sm sm:text-base">
          Showing 1–{productsCount} of 30 results
        </div>
      </div>
      <div className="flex items-center space-x-8  self-center">
        {/* Show */}
        <div className="flex items-center space-x-3 cursor-default select-none">
          <span className="text-base sm:text-[20px] ">Show</span>
          <div className="size-[35px] sm:size-[55px] flex items-center justify-center bg-white text-[#9F9F9F] text-[20px]">
            {productsCount}
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-3 cursor-pointer select-none">
          <span className=" text-base sm:text-[20px] ">Sort By</span>
          <div className="w-[100px] h-[30px] sm:w-[188px] sm:h-[55px] text-base flex items-center justify-center bg-white text-[#9F9F9F] sm:text-[20px]">
            Default
          </div>
        </div>
      </div>
    </div>
  );
}
