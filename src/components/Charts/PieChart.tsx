"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

interface PieChartProps {
  title: string;
  data?: {
    graphData: { label: string; value: number }[];
    total: number;
  };
}

const PieChart: React.FC<PieChartProps> = ({ title, data }: PieChartProps) => {
  const series = data?.graphData.map((item) => item.value) ?? [];
  const labels = data?.graphData.map((item) => item.label) ?? [];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            {title}
          </h5>
        </div>
      </div>
      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={{ ...options, labels }}
            series={series}
            type="donut"
          />
        </div>
      </div>
      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {data &&
          data.graphData.map((item) => (
            <div className="w-full px-8 sm:w-1/2">
              <div className="flex w-full items-center">
                <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                  <span> {item.label.toWellFormed()} </span>
                  <span> {((item.value / data.total) * 100).toFixed(1)}% </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PieChart;
