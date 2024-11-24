import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
async function getCustomers() {
  const res = await fetch(
    `https://67426603e464749900907d2b.mockapi.io/Customers`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

async function page() {
  const data = await getCustomers();
  return (
    <section className="p-6">
      <AnalyticsCard
        title="Customers"
        subtitle="Showing all customer with order"
      >
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={columns} data={data} />
      </AnalyticsCard>
    </section>
  );
}

export default page;
