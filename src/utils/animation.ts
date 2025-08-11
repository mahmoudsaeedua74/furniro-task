// this animation is from framer motion to make navbar open and close smooth
export const sidebarVariants = {
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const as import("framer-motion").Variants;

// this animation is from framer motion to make overlay show and hide smooth
export const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

// this animation is from framer motion to make menu items show and hide smooth
export const menuItemVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

// this animation is from framer motion to make container open with delay for children
export const containerVariant = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

