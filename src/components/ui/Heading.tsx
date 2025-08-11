import React from "react";

type HeadingProps = {
  title: string;
  subTitle?: string;
  isLarge?: boolean;
};

/**
 * Heading component to display a section title with optional subtitle.
 * Supports two title sizes:
 * - 32px (default)
 * - 40px (when isLarge is true)
 * Subtitle is optional.
 */
export default function Heading({
  title,
  subTitle,
  isLarge = false,
}: HeadingProps) {
  return (
    <div className="mx-auto flex flex-col items-center justify-center text-center">
      <h2
        className={`font-bold font-poppins text-[#333333] ${
          isLarge
            ? "text-[32px] sm:text-[36px] md:text-[40px]"
            : "text-[20px] sm:text-[28px] md:text-[32px]"
        }`}
      >
        {title}
      </h2>

      {subTitle && (
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#666666] mt-1">
          {subTitle}
        </p>
      )}
    </div>
  );
}
