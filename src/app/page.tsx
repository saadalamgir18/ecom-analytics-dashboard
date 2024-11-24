import { BarGraph } from "@/components/dashboard/bar-chart";
import { HorizontalBarChart } from "@/components/dashboard/horizontal-barchart";
import { PiGraph } from "@/components/dashboard/pichar";
import { RadarCharts } from "@/components/dashboard/radar-chart";
import Summary from "@/components/dashboard/summary";
import TopCustomers from "@/components/dashboard/top-customers";
import TopProducts from "@/components/dashboard/top-products";
async function getCustomers() {
  const res = await fetch(
    `https://67426603e464749900907d2b.mockapi.io/Customers`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export type topCustomer = {
  createdAt: string;
  name: string;
  image: string;
  email: string;
  order: number;
  id: string;
};
export default async function Home() {
  const data: topCustomer[] = await getCustomers();
  const topCustomers = data.sort((a, b) => b.order - a.order).slice(0, 4);
  return (
    <div className="p-4 grid gap-5">
      <Summary />
      <div className="grid lg:grid-cols-2 gap-10">
        <BarGraph />
        <RadarCharts />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts />
        <PiGraph />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <HorizontalBarChart />
        <TopCustomers data={topCustomers} />
      </div>
    </div>
  );
}
