import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
interface BackButtonProps {
  href: string;
  label: string;
}
export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button asChild variant={"link"} className="font-medium w-full">
      <Link href={href} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
}
