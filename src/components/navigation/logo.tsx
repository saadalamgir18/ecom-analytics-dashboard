"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { getIsOpen, toggleMenu } from "./navBarSlice";
import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsOpen);
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image src={"logo-icon.svg"} alt="logo icon" height={30} width={30} />
      <AnimatePresence initial={false}>
        {!isOpen && (
          <motion.h1
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold max-md:hidden whitespace-nowrap"
          >
            Nexa Deshboard
          </motion.h1>
        )}
      </AnimatePresence>
    </Link>
  );
}
