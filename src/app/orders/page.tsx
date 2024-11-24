import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ordersDummyData } from "@/constants/data";
import React from "react";
import { columns } from "./columns";

export default function page() {
  return (
    <AnalyticsCard title="Products" subtitle="Showing all Products">
      <Button className="mb-3">Add New Customer</Button>
      <DataTable columns={columns} data={ordersDummyData} />
    </AnalyticsCard>
  );
}
