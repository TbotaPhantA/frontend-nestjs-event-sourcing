import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TurnoverChart from "@/components/Charts/TurnoverChart";
import PieChart from "@/components/Charts/PieChart";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const StatisticsPage = async () => {
  const receivingItemsGraphData = await fetchReceivedItemsGraphData();

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Statistics" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-around">
          <PieChart />
          <PieChart />
          <PieChart />
        </div>
        <TurnoverChart
          name="Items received"
          data={receivingItemsGraphData.graphData}
        />
        <TurnoverChart name="Items shipped" />
      </div>
    </DefaultLayout>
  );
};

interface FetchReceivedItemsGraphDataResponse200 {
  graphData: {
    x: string;
    y: number;
  }[];
}

const fetchReceivedItemsGraphData =
  async (): Promise<FetchReceivedItemsGraphDataResponse200> => {
    const res = await fetch(
      "http://localhost:3001/storage/stock-month/statistics/products-received-count",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ timeWindow: "1m" }),
        // Optionally disable caching for this request:
        cache: "no-store",
      },
    );

    // Check if the response is successful
    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }

    return await res.json();
  };

export default StatisticsPage;
