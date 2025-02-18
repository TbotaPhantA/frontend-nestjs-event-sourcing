import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableStockItems from "@/components/Tables/TableStockItems";
import WarehouseCommandsPanel from "@/app/warehouse/warehouseCommandsPanel";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const WarehousePage = async () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Warehouse" />
      <WarehouseCommandsPanel />
      <div className="flex min-h-screen flex-col gap-10">
        <TableStockItems />
      </div>
    </DefaultLayout>
  );
};

export default WarehousePage;
