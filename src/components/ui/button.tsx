import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold uppercase transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  {
    variants: {
      variant: {
        // Buy Now button - primary bg, white text, on hover: white bg, primary text with border
        buyNow:
          "bg-primary text-white border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary",
        // Show More button - white bg, primary text with border, on hover: primary bg, white text
        showMore:
          "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
        // Add to Cart button - white bg, primary text, on hover: primary bg, white text
        addToCart:
          "bg-white text-primary border border-transparent hover:bg-primary hover:text-white",
        // Small Buy Now - same as buyNow but for smaller size
        buyNowSmall:
          "bg-primary text-white border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary",
        // Legacy variants (keeping your old ones)
        default:
          "text-sm sm:text-base text-black-text shadow bg-white hover:bg-black-text hover:text-white border-[1px] rounded-[6px] sm:rounded-[10px] p-[10px]",
      },
      size: {
        // Buy Now size
        buyNow:
          "w-[222px] h-[60px]  sm:h-[74px] mt-auto text-white font-bold uppercase text-[14px] sm:text-base",
        // Show More size
        showMore: "w-[245px] h-[48px] font-semibold",
        // Add to Cart size
        addToCart: "w-[202px] h-[48px] font-semibold",
        // Small Buy Now size
        buyNowSmall: "w-[176px] h-[48px]",
        // Legacy sizes
        default: "h-[33px] sm:h-[44px] w-[131px] px-2 py-1 sm:px-4 sm:py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
