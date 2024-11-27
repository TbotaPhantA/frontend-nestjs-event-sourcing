import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableStockItems from "@/components/Tables/TableStockItems";
import { StockItem } from "@/types/stockItem";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { InventoryAdjustmentEnum } from "@/types/enums/inventoryAdjustment.enum";
import WarehouseCommandsPanel from "@/app/warehouse/warehouseCommandsPanel";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const fetchStockItems = async () => {
  const stockItemData: StockItem[] = [
    {
      id: "4c57581f-3051-4b51-b5bb-2fc79c8bb2a1",
      itemName: "Aluminum",
      description: "Rolls of aluminum",
      isFlammable: false,
      isFragile: false,
      temperatureMode: TemperatureModeEnum.WITHOUT,
      weightGrams: 100000,
      inventoryAdjustment: InventoryAdjustmentEnum.NONE,
      locationId: "215",
      createdAt: new Date("2024-11-26T21:32:44.198Z"),
      updatedAt: new Date("2024-11-26T21:32:44.198Z"),
      removedAt: null,
    },
    {
      id: "4c57581f-3051-4b51-b5bb-2fc79c1bb2a1",
      itemName: "Cotton",
      description: "Bags of cotton",
      isFlammable: true,
      isFragile: false,
      temperatureMode: TemperatureModeEnum.WITHOUT,
      weightGrams: 1000,
      inventoryAdjustment: InventoryAdjustmentEnum.SURPLUS,
      locationId: "215",
      createdAt: new Date("2024-11-26T21:32:44.198Z"),
      updatedAt: new Date("2024-11-26T21:32:44.198Z"),
      removedAt: null,
    },
    {
      id: "4c57581f-3051-4b51-b5bb-2fc79c7bb2a1",
      itemName: "Meat",
      description: "Bags with chicken meat",
      isFlammable: false,
      isFragile: false,
      temperatureMode: TemperatureModeEnum.MINUS_15,
      weightGrams: 10000,
      inventoryAdjustment: InventoryAdjustmentEnum.NONE,
      locationId: "215",
      createdAt: new Date("2024-11-26T21:32:44.198Z"),
      updatedAt: new Date("2024-11-26T21:32:44.198Z"),
      removedAt: null,
    },
    {
      id: "4c57581f-3051-4b51-b5bb-2fc79c7bb2a1",
      itemName: "Electronics",
      description: "PC components",
      isFlammable: false,
      isFragile: true,
      temperatureMode: TemperatureModeEnum.WITHOUT,
      weightGrams: 15000,
      inventoryAdjustment: InventoryAdjustmentEnum.NONE,
      locationId: "215",
      createdAt: new Date("2024-11-26T21:32:44.198Z"),
      updatedAt: new Date("2024-11-26T21:32:44.198Z"),
      removedAt: null,
    },
  ];

  return { stockItems: stockItemData };
};

const TablesPage = async () => {
  const { stockItems } = await fetchStockItems();

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Warehouse" />
      <WarehouseCommandsPanel />
      <div className="flex min-h-screen flex-col gap-10">
        <TableStockItems stockItems={stockItems} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
