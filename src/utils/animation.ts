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

// Animation variants
export const containerVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.35, 0.45, 0.55],
      staggerChildren: 0.15,
    },
  },
} as const as import("framer-motion").Variants;

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
} as const as import("framer-motion").Variants;

export const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
} as const as import("framer-motion").Variants;

export const cardVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      ease: [0.25, 0.46, 0.45, 0.4],
    },
  },
} as const as import("framer-motion").Variants;
