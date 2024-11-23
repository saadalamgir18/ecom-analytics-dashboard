import { BarGraph } from "@/components/dashboard/bar-chart";
import { HorizontalBarChart } from "@/components/dashboard/horizontal-barchart";
import { PiGraph } from "@/components/dashboard/pichar";
import { RadarCharts } from "@/components/dashboard/radar-chart";
import Summary from "@/components/dashboard/summary";
import TopCustomers from "@/components/dashboard/top-customers";
import TopProducts from "@/components/dashboard/top-products";

export default function Home() {
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
        <TopCustomers />
        <HorizontalBarChart />
      </div>
    </div>
  );
}
