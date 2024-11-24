"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export type topCustomer = {
  createdAt: string;
  name: string;
  image: string;
  email: string;
  order: number;
  id: string;
};
export const columns: ColumnDef<topCustomer>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "order",
    header: "Orders",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = (row.getValue("image") as string).replace(
        "cloudflare-ipfs.com",
        "ipfs.io"
      );
      return (
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt=""
          className="border-2 border-primary"
        />
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Customer</DropdownMenuItem>
            <DropdownMenuItem>Delete Customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export default function Columns() {
  return <div></div>;
}
