"use client";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import {
  containerVariant,
  menuItemVariants,
  overlayVariants,
  sidebarVariants,
} from "@/utils/animation";
import favicon from "../../app/favicon.ico";

import CloseCircleIcon from "../icons/CloseCircleIcon";
import MenuIcon from "../icons/MenuIcon";
import TooltipComponent from "../ui/Tooltip";
import { navbarIcons } from "@/constants/siteConfig";
export default function Navbar() {
  // isOpen to check if navbar is open or close
  const [isOpen, setOpen] = useState(false);

  // handleClose to set navbar state to close
  const handleClose = useCallback(() => setOpen(false), []);

  // stop page scroll when navbar is open and make scroll work again when navbar is close
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  //sm:ps-[54px]  ps-[20px] pe-[22px] sm:pe-[100px]
  return (
    <>
      <nav className="bg-white sm:block z-50 pt-[20px] pb-[20px] sm:pt-[29px] sm:pb-[30px] pl-[20px] sm:pl-[54px] pr-[22px] sm:pr-[100px]">
        <div className="flex justify-between items-center">
          {/* اللوغو على اليسار */}
          <Link
            href={"/"}
            className="flex items-center gap-[5px] h-[41px] sm:max-w-[185px] max-w-[150px] flex-shrink-0"
          >
            <Image
              src={favicon}
              alt="Furniro logo"
              width={50}
              height={32}
              priority
              className="h-[30px] w-[30px] object-cover sm:w-[50px] sm:h-[32px]"
            />
            <span className="leading-tight [font-family:var(--font-montserrat)] font-bold sm:text-[34px] text-[22px]">
              Furniro
            </span>
          </Link>

          <div className="flex-grow flex justify-center">
            <NavLinks isMobile={false} />
          </div>

          <div className="flex-shrink-0 flex items-center gap-4 sm:gap-[45px] justify-center">
            {navbarIcons.map(({ id, icon: Icon, href, name }) => (
              <Link key={id} href={href} className="hover:text-primary">
                <TooltipComponent title={name}>
                  <Icon className="size-[24px] sm:size-[28px]" />
                </TooltipComponent>
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center ml-4">
            <TooltipComponent title={"Open"}>
              <motion.button
                onClick={() => setOpen(!isOpen)}
                className="size-8 sm:size-10 cursor-pointer rounded-full flex items-center justify-center"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MenuIcon className="text-black" />
              </motion.button>
            </TooltipComponent>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={handleClose}
            />

            <motion.aside
              className={`fixed top-0 start-0 h-full rounded-e-xl w-[60%] px bg-[#212121] text-gray-color z-50 lg:hidden pt-10 px-5 flex flex-col items-start`}
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <TooltipComponent
                title={"Close It"}
                customTriggerCLasses="mb-4 p-2 self-end"
              >
                <motion.button
                  onClick={handleClose}
                  variants={menuItemVariants}
                >
                  <CloseCircleIcon className="text-white  hover:text-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-90 size-8" />
                </motion.button>
              </TooltipComponent>
              <motion.div
                className="font-semibold gap-2 flex flex-col w-full"
                variants={containerVariant}
                initial="closed"
                animate="open"
              >
                <NavLinks isMobile={true} />
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
