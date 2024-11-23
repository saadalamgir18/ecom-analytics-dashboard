"use client";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsOpen, toggleMenu } from "./navBarSlice";

export default function Menutoggle() {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsOpen);
  return (
    <button onClick={() => dispatch(toggleMenu())}>
      <motion.div
        animate={{
          rotate: isOpen ? 360 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {isOpen ? <ChevronsRight /> : <ChevronsLeft />}
      </motion.div>
    </button>
  );
}
