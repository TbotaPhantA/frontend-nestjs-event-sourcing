"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import moment from "moment";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE", "#32de84", "#4FFFB0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "datetime",
    labels: {
      formatter(
        value: string,
        timestamp?: number,
        opts?: any,
      ): string | string[] {
        return moment(timestamp).format("DD.MM.YYYY HH:mm");
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: { x: string; y: number }[];
  }[];
}

interface TurnoverChartProps {
  name: string;
  data?: { x: string; y: number }[];
  setAggregationWindow: (window: string) => void;
  aggregationWindow: string;
}

const mockData = [
  {
    name: "Total",
    data: [
      {
        x: new Date(2022, 0, 3).toISOString(),
        y: 5,
      },
      {
        x: new Date(2022, 0, 4).toISOString(),
        y: 7,
      },
      {
        x: new Date(2022, 0, 5).toISOString(),
        y: 2,
      },
      {
        x: new Date(2022, 0, 6).toISOString(),
        y: 9,
      },
      {
        x: new Date(2022, 0, 7).toISOString(),
        y: 3,
      },
      {
        x: new Date(2022, 0, 8).toISOString(),
        y: 6,
      },
      {
        x: new Date(2022, 0, 9).toISOString(),
        y: 10,
      },
      {
        x: new Date(2022, 0, 10).toISOString(),
        y: 1,
      },
    ],
  },
];

const TurnoverChart: React.FC<TurnoverChartProps> = ({
  name,
  data,
  setAggregationWindow,
  aggregationWindow,
}: TurnoverChartProps) => {
  const series: ChartOneState["series"] = data
    ? [{ name: "Total", data }]
    : mockData;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <h2 className="mb-1 pb-2 text-title-md2 font-semibold text-black dark:text-white">
        {name}
      </h2>

      <div>
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          Aggregation window:
        </label>
        <input
          type="text"
          placeholder="Enter the aggregation window, for example 1m..."
          className="w-half rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          defaultValue={aggregationWindow}
          onChange={(event) => setAggregationWindow(event.target.value)}
        />
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default TurnoverChart;
