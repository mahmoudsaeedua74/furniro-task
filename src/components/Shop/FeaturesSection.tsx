import React from "react";
import TrophyIcon from "../icons/TrophyIcon";
import VerificationIcon from "../icons/VerificationIcon";
import ShoppingIcon from "../icons/ShoppingIcon";
import CustomerIcon from "../icons/CustomerIcon";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "High Quality",
    description: "crafted from top materials",
    icon: <TrophyIcon className="w-10 h-10 md:w-[60px] md:h-[60px]" />,
  },
  {
    id: 2,
    title: "Warranty Protection",
    description: "Over 2 years",
    icon: <VerificationIcon className="w-10 h-10 md:w-[60px] md:h-[60px]" />,
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Order over 150 $",
    icon: <ShoppingIcon className="w-10 h-10 md:w-[60px] md:h-[60px]" />,
  },
  {
    id: 4,
    title: "24 / 7 Support",
    description: "Dedicated support",
    icon: <CustomerIcon className="w-10 h-10 md:w-[60px] md:h-[60px]" />,
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex justify-between flex-wrap gap-6 bg-[#FAF3EA] mt-[85px] py-10 sm:py-[100px] px-5 sm:px-[53px]">
      {featuresData.map(({ id, title, description, icon }) => (
        <div key={id} className="flex items-center gap-4  ">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex flex-col justify-center gap-1">
            <h3 className="font-poppins font-semibold text-[25px]  text-[#242424]">
              {title}
            </h3>
            <p className="font-poppins font-medium text-[20px]  text-[#898989]">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
