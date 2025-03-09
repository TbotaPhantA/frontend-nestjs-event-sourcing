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

const StatisticsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Statistics" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-around">
          <PieChart />
          <PieChart />
          <PieChart />
        </div>
        <TurnoverChart name="Items received" />
        <TurnoverChart name="Items shipped" />
      </div>
    </DefaultLayout>
  );
};

export default StatisticsPage;
