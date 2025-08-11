import Link from "next/link";
import { links } from "../../constants/siteConfig";

const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <div
        className={`${
          isMobile
            ? "flex flex-col gap-6"
            : "hidden lg:flex gap-[75px] items-center"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.hash}
            className={`cursor-pointer ${
              isMobile
                ? "hover:text-primary text-white hover:bg-white rounded-xl px-5 w-full py-4 hover:text-black-text transition-all duration-300"
                : "hover:text-primary relative font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavLinks;
