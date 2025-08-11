import CartIcon from "@/components/icons/CartIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";

// Navigation links for the navbar menu.
// Each link has a unique id, display name, and an anchor hash for in-page navigation.
export const links = [
  { id: 1, name: "Home", hash: "/" },
  { id: 2, name: "Shop", hash: "/shop" },
  { id: 3, name: "About", hash: "/about" },
  { id: 4, name: "Contact", hash: "/contact" },
];

// Icons used in the navbar for user actions.
// Each item includes an id, the icon component, the href route, and a descriptive name.
export const navbarIcons = [
  { id: 1, icon: UserIcon, href: "/account", name: "Account" },
  { id: 2, icon: SearchIcon, href: "/search", name: "Search" },
  { id: 3, icon: HeartIcon, href: "/wishlist", name: "Wishlist" },
  { id: 4, icon: CartIcon, href: "/cart", name: "Cart" },
] as const;

// cardsData: Array of card objects representing categories to browse.
export const cardsData = [
  {
    id: 1,
    src: "/assets/living.webp",
    alt: "Room 1",
    label: "Living Room",
  },
  {
    id: 2,
    src: "/assets/bedroom.webp",
    alt: "Room 2",
    label: "Bedroom",
  },
  {
    id: 3,
    src: "/assets/dining.webp",
    alt: "Room 3",
    label: "Dining Room",
  },
];

// grid card for last section
export const furnitureGrid = [
  {
    src: "/assets/furnitureGrid/grid1.webp",
    alt: "Furniture setup 1",
    className: "row-span-6",
  },
  {
    src: "/assets/furnitureGrid/grid9.webp",
    alt: "Furniture setup 2",
    className: "col-span-2 row-span-6 col-start-1 row-start-7",
  },
  {
    src: "/assets/furnitureGrid/grid3.webp",
    alt: "Furniture setup 5",
    className: "col-span-3 row-span-4 col-start-3 row-start-7",
  },
  {
    src: "/assets/furnitureGrid/grid2.webp",
    alt: "Furniture setup 7",
    className: "col-span-4 row-span-5 col-start-2 row-start-2",
  },
  {
    src: "/assets/furnitureGrid/grid4.webp",
    alt: "Furniture setup 10",
    className: "col-span-2 row-span-6 col-start-6 row-start-4",
  },
  {
    src: "/assets/furnitureGrid/grid6.webp",
    alt: "Furniture setup 11",
    className: "col-span-3 row-span-5 col-start-8 row-start-3",
  },
  {
    src: "/assets/furnitureGrid/grid8.webp",
    alt: "Furniture setup 12",
    className: "col-span-2 row-span-6 col-start-11 row-start-2",
  },
  {
    src: "/assets/furnitureGrid/grid5.webp",
    alt: "Furniture setup 13",
    className: "col-span-2 row-span-4 col-start-8 row-start-8",
  },
  {
    src: "/assets/furnitureGrid/grid7.webp",
    alt: "Furniture setup 14",
    className: "col-span-2 row-span-3 col-start-10 row-start-8",
  },
];

//for static 8 products
export const productsData = [
  {
    id: 1,
    image: "/assets/products/product1.webp",
    badge: "30%",
    title: "Modern Sofa",
    description: "Comfortable and stylish",
    finalPrice: 499.99,
    oldPrice: 699.99,
  },
  {
    id: 2,
    image: "/assets/products/product2.webp",
    badge: "New",
    title: "Elegant Dining ",
    description: "Wooden with modern design",
    finalPrice: 799.0,
  },
  {
    id: 3,
    image: "/assets/products/product3.webp",
    badge: "40%",
    title: "Office Chair",
    description: "Ergonomic and adjustable",
    finalPrice: 150.5,
    oldPrice: 250.0,
  },
  {
    id: 4,
    image: "/assets/products/product4.webp",
    title: "Classic Bed Frame",
    description: "Solid wood, king size",
    finalPrice: 999.99,
  },
  {
    id: 5,
    image: "/assets/products/product5.webp",
    badge: "20%",
    title: "Nightstand",
    description: "Compact and practical",
    finalPrice: 80.0,
    oldPrice: 100.0,
  },
  {
    id: 6,
    image: "/assets/products/product6.webp",
    badge: "New",
    title: "Stylish Bookshelf",
    description: "Spacious and durable",
    finalPrice: 300.0,
  },
  {
    id: 7,
    image: "/assets/products/product7.webp",
    badge: "15%",
    title: "Leather Armchair",
    description: "Luxurious comfort",
    finalPrice: 600.0,
    oldPrice: 700.0,
  },
  {
    id: 8,
    image: "/assets/products/product8.webp",
    title: " Coffee Table",
    description: "Sleek and modern",
    finalPrice: 120.0,
  },
];


