import React from "react";

export default function PaginationStatic() {
  return (
    <div className="flex space-x-4  justify-center mt-[70px] ">
      <button className="w-[60px] cursor-pointer h-[60px] rounded-[10px] bg-[#B88E2F] text-white font-poppins  text-[20px]  flex items-center justify-center select-none">
        1
      </button>
      {[2, 3, 4].map((num) => (
        <button
          key={num}
          className="w-[60px] h-[60px] cursor-pointer rounded-[10px] hover:bg-[#B88E2F] duration-300 transition-colors bg-[#F9F1E7] text-black font-poppins  text-[20px]  flex items-center justify-center select-none"
        >
          {num}
        </button>
      ))}

      <button className="w-[60px] h-[60px] cursor-pointer rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] duration-300 transition-colors  text-black font-poppins  text-[20px]  flex items-center justify-center select-none">
        Next
      </button>
    </div>
  );
}
