import { Component, House, Package, Shirt, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { motion } from "framer-motion";
import { getIsOpen } from "./navBarSlice";
import { useSelector } from "react-redux";
const menuItems = [
  { href: "/", label: "Dashboard", icon: House },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/orders", label: "Orders", icon: Package },
  { href: "/products", label: "Products", icon: Shirt },
  {
    href: "/team",
    label: "Team",
    icon: Component,
  },
];
import Link from "next/link";

export default function MenuLinks() {
  const isOpen = useSelector(getIsOpen);

  const pathname = usePathname();
  const linkVariants = {
    active: {
      backgroundColor: "#2463EB",
      color: "#ffff",
      scale: 1.05,
    },
    inactive: {
      backgroundColor: "transparent",
      color: "inherit",
      scale: 1,
    },
  };
  return (
    <TooltipProvider>
      <ul className="flex flex-col justify-center gap-10">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            (pathname.includes(href) && href.length > 1) || pathname == href;
          return (
            <li key={href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={href}>
                    <motion.div
                      animate={isActive ? "active" : "inactive"}
                      transition={{ duration: 0.3 }}
                      variants={linkVariants}
                      className="flex gap-4 items-center py-1.5 rounded-md px-4"
                    >
                      <Icon size={23} className="mb-1" />
                      <span className={`max-md:hidden ${isOpen && "hidden"}`}>
                        {label}
                      </span>
                    </motion.div>
                  </Link>
                </TooltipTrigger>
                {isOpen && (
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </TooltipProvider>
  );
}
