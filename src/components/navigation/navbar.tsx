"use client";
import React from "react";
import Menutoggle from "./menu-toggle";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import useSome from "@/hooks/useSome";

export default function Navbar() {
  const check = useSome();
  if (!check) return null;
  return (
    <nav className="py-4 border-b ">
      <div className="md:w-[95%] w-[92%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Logo />
          <Menutoggle />
        </div>
        <div className="flex gap-8 items-center">
          <ModeToggle />
          <span className="max-md:hidden">welcome back Saad </span>
          <Avatar>
            <AvatarImage src="avatar-image.avif" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
