"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableInventoryChanges from "@/components/Tables/TableInventoryChanges";
import InventoryCommandPanel from "@/app/inventory/inventoryCommandPanel";
import TableInventoryCurrent from "@/components/Tables/TableInventoryCurrent";

const WarehousePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Инвентаризация" />
      <InventoryCommandPanel />
      <div className="flex min-h-screen flex-row justify-around gap-5">
        <TableInventoryCurrent />
        <TableInventoryChanges />
      </div>
    </DefaultLayout>
  );
};

export default WarehousePage;
