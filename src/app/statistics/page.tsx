"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TurnoverChart from "@/components/Charts/TurnoverChart";
import PieChart from "@/components/Charts/PieChart";
import { useEffect, useState } from "react";

const StatisticsPage = () => {
  const [receivingCountWindow, setReceivingCountWindow] =
    useState<string>("1w");
  const [receivingItemsResponse, setReceivingItemsResponse] =
    useState<FetchReceivedItemsGraphDataResponse200>();
  const [shippedCountWindow, setShippedCountWindow] = useState<string>("1w");
  const [shippedItemsResponse, setShippedItemsResponse] =
    useState<FetchShippedItemsGraphDataResponse200>();

  useEffect(() => {
    async function fetchData() {
      const [receivingItemsGraphData, shippedItemsGraphData] =
        await Promise.all([
          fetchReceivedItemsGraphData(receivingCountWindow),
          fetchShippedItemsGraphData(shippedCountWindow),
        ]);
      setReceivingItemsResponse(receivingItemsGraphData);
      setShippedItemsResponse(shippedItemsGraphData);
    }

    fetchData();
  }, [receivingCountWindow, shippedCountWindow]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Statistics" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-around">
          <PieChart
            data={[
              { label: "a", value: 1 },
              { label: "b", value: 2 },
              { label: "c", value: 3 },
            ]}
            total={6}
          />
          {/*<PieChart />*/}
          {/*<PieChart />*/}
        </div>
        <TurnoverChart
          name="Items received"
          data={receivingItemsResponse?.graphData}
          setAggregationWindow={setReceivingCountWindow}
          aggregationWindow={receivingCountWindow}
        />
        <TurnoverChart
          name="Items shipped"
          data={shippedItemsResponse?.graphData}
          setAggregationWindow={setShippedCountWindow}
          aggregationWindow={shippedCountWindow}
        />
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

interface FetchShippedItemsGraphDataResponse200
  extends FetchReceivedItemsGraphDataResponse200 {}

const fetchReceivedItemsGraphData = async (
  aggregationWindow: string,
): Promise<FetchReceivedItemsGraphDataResponse200> => {
  const res = await fetch(
    "http://localhost:3001/storage/stock-month/statistics/products-received-count",
    {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timeWindow: aggregationWindow }),
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

const fetchShippedItemsGraphData = async (
  aggregationWindow: string,
): Promise<FetchReceivedItemsGraphDataResponse200> => {
  const res = await fetch(
    "http://localhost:3001/storage/stock-month/statistics/shipped-products-count",
    {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timeWindow: aggregationWindow }),
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
