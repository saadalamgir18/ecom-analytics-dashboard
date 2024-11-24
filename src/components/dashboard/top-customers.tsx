"use client";
import React from "react";
import AnalyticsCard from "./analytics-card";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTable } from "../ui/data-table";
import { topCustomer } from "@/app/page";

export const CustomerColumns: ColumnDef<topCustomer>[] = [
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
];
export default function TopCustomer({ data }: { data: topCustomer[] }) {
  console.log(data);
  return (
    <AnalyticsCard title="Top Products" subtitle="Showing Most Sold Products">
      <DataTable columns={CustomerColumns} data={data} />
    </AnalyticsCard>
  );
}
