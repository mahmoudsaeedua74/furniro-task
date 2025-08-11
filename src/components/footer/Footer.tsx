"use client";

import Link from "next/link";
import React from "react";
const columnLinks = [
  {
    id: 1,
    title: "Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Help",
    links: [
      { label: "Payment Options", href: "/about" },
      { label: "Returns", href: "/about" },
      { label: "Privacy Policies", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-[48px] pb-[38px] mt-[50px] px-5 sm:px-[100px] text-[#9E9E9E]">
      <div className="mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-wrap justify-between gap-5 sm:gap-10">
          <div className="max-w-[285px]">
            <h4 className="font-extrabold text-black text-[24px]">Funiro.</h4>
            <p className="text-[#9F9F9F] mt-[30px] sm:mt-[50px] text-sm sm:text-base">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>
          {columnLinks.map(({ id, title, links }) => (
            <div key={id} className="flex flex-col mb-5 sm:mb-0">
              <h3 className="font-medium text-[#9F9F9F] mb-[30px] sm:mb-[55px] text-base sm:text-lg">
                {title}
              </h3>
              <ul className="flex flex-col gap-3 sm:gap-[46px] text-black text-sm sm:text-base">
                {links.map(({ label, href }, idx) => (
                  <li key={idx} className="cursor-pointer hover:text-[#B88E2F]">
                    <Link
                      href={href}
                      className="lowercase" // لو عايز تخلي الحروف سمول
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full sm:w-[286px] flex flex-col gap-2">
            <h3 className="font-medium text-black text-[16px] leading-[24px] mb-[12px]">
              Newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-b-black text-[#9E9E9E] text-[14px] px-3 py-2"
              />
              <button className="w-[75px] border-b border-b-black font-medium text-[14px] text-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] py-[35px]">
          <p className="text-black text-sm sm:text-base">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
