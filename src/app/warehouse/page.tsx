"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableStockItems from "@/components/Tables/TableStockItems";
import WarehouseCommandsPanel from "@/app/warehouse/warehouseCommandsPanel";
import {
  FilterForm,
  filterFormDefaultValues,
} from "@/app/warehouse/FilterModal";
import { useState } from "react";

const WarehousePage = () => {
  const [filters, setFilters] = useState<FilterForm>(filterFormDefaultValues);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Warehouse" />
      <WarehouseCommandsPanel setFilters={setFilters} />
      <div className="flex min-h-screen flex-col gap-10">
        <TableStockItems filters={filters} />
      </div>
    </DefaultLayout>
  );
};

export default WarehousePage;
