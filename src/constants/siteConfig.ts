import CartIcon from "@/components/icons/CartIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";

// Navigation links for the navbar menu.
// Each link has a unique id, display name, and an anchor hash for in-page navigation.
export const links = [
  { id: 1, name: "Home", hash: "Home" },
  { id: 2, name: "Shop", hash: "Shop" },
  { id: 3, name: "About", hash: "About" },
  { id: 4, name: "Contact", hash: "Contact" },
];

// Icons used in the navbar for user actions.
// Each item includes an id, the icon component, the href route, and a descriptive name.
export const navbarIcons = [
  { id: 1, icon: UserIcon, href: "/account", name: "Account" },
  { id: 2, icon: SearchIcon, href: "/search", name: "Search" },
  { id: 3, icon: HeartIcon, href: "/wishlist", name: "Wishlist" },
  { id: 4, icon: CartIcon, href: "/cart", name: "Cart" },
] as const;
