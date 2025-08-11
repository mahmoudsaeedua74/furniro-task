import Link from "next/link";
import { links, navbarIcons } from "../../constants/siteConfig";
import TooltipComponent from "../ui/Tooltip";

const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <div
        className={`${
          isMobile ? "flex flex-col gap-6" : "hidden lg:flex gap-[75px] "
        } items-center `}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.hash}
            className={`cursor-pointer space-x-6 ${
              isMobile
                ? "hover:text-primary text-white hover:bg-white rounded-xl px-5 w-full py-4 hover:text-black-text transition-all duration-300"
                : "hover:text-primary relative font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div
        className={`${
          isMobile
            ? "hidden"
            : "flex items-center justify-center gap-[20px] sm:gap-[30px] lg:gap-[45px]"
        }`}
      >
        {navbarIcons.map(({ id, icon: Icon, href, name }) => (
          <Link key={id} href={href}>
            <TooltipComponent title={name}>
              <Icon className="size-[24px] sm:size-[28px]  hover:text-primary" />
            </TooltipComponent>
          </Link>
        ))}
      </div>
    </>
  );
};
export default NavLinks;
