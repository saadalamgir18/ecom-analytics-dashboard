"use client";
import { motion } from "framer-motion";
import React from "react";
import { getIsOpen } from "./navBarSlice";
import { useSelector } from "react-redux";
import MenuLinks from "./MenuLinks";
import LogoutButton from "../authenticate/logout-button";

export default function Sidebar() {
  const isOpen = useSelector(getIsOpen);

  return (
    <motion.div
      initial={{ width: isOpen ? 80 : 250 }}
      animate={{ width: isOpen ? 80 : 250 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky z-10 top-0 flex flex-col h-screen items-center overflow-hidden py-10 border-r max-md:max-w-[80px] ${
        isOpen ? "max-md:hidden gap-10" : "block justify-between"
      }`}
    >
      <h2 className={`text-sm max-md:hidden ${isOpen && "hidden"}`}>
        Main menu
      </h2>
      <MenuLinks />
      <LogoutButton />
    </motion.div>
  );
}
