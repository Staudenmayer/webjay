import { Home, ListVideo, LayoutDashboard, Cloud } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "Subscriptions",
    icon: ListVideo,
    href: "/subscriptions",
    color: "text-sky-500"
  },
  {
    title: "Sources",
    icon: Cloud,
    href: "/sources",
    color: "text-sky-500"
  },
  {
    title: "Example",
    icon: LayoutDashboard,
    href: "/example",
    color: "text-sky-500",
    isChidren: true,
    children: [
      {
        title: "Example-01",
        icon: LayoutDashboard,
        color: "text-red-500",
        href: "/test",
      }
    ],
  },
];
