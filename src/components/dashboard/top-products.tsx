"use client";
import React from "react";
import AnalyticsCard from "./analytics-card";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ProductsDummyData } from "@/constants/data";
import { DataTable } from "../ui/data-table";

export type TopProducts = {
  id: number;
  name: string;
  revenue: number;
  price: number;
  image: string;
};
export const topProductsColumns: ColumnDef<TopProducts>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image");
      return (
        <Image
          src={imageUrl as string}
          width={50}
          height={50}
          alt=""
          className="border-2 border-primary"
        />
      );
    },
  },
];
export default function TopProducts() {
  const topProducts = ProductsDummyData.sort(
    (a, b) => b.revenue - a.revenue
  ).slice(0, 4);
  return (
    <AnalyticsCard title="Top Products" subtitle="Showing Most Sold Products">
      <DataTable columns={topProductsColumns} data={topProducts} />
    </AnalyticsCard>
  );
}
