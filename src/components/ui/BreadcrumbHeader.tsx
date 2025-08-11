import React from "react";

interface BreadcrumbHeaderProps {
  title: string;
}

export default function BreadcrumbHeader({ title }: BreadcrumbHeaderProps) {
  return (
    <section
      className="w-full h-[316px] bg-center bg-cover flex flex-col justify-center items-center relative text-black"
      style={{ backgroundImage: `url( "/assets/breadcrumb.png")` }}
    >
      {/* Title */}
      <h1 className="font-poppins font-medium text-[48px] leading-[72px] w-[124px] text-black">
        {title}
      </h1>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mt-2 font-poppins text-black">
        <span className="font-medium  cursor-pointer ">Home</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <span className="font-light cursor-pointer">{title}</span>
      </nav>
    </section>
  );
}
