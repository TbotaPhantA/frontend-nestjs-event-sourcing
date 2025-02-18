"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableStockItems from "@/components/Tables/TableStockItems";
import WarehouseCommandsPanel from "@/app/warehouse/warehouseCommandsPanel";
import {
  FilterForm,
  filterFormDefaultValues,
} from "@/app/warehouse/FilterModal";
import { useEffect, useState } from "react";

const WarehousePage = () => {
  const [filters, setFilters] = useState<FilterForm>(filterFormDefaultValues);

  useEffect(() => {
    console.log({ filters });
  }, [filters]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Warehouse" />
      <WarehouseCommandsPanel setFilters={setFilters} />
      <div className="flex min-h-screen flex-col gap-10">
        <TableStockItems />
      </div>
    </DefaultLayout>
  );
};

export default WarehousePage;
