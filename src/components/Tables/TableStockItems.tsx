import { StockItem } from "@/types/stockItem";
import { InventoryAdjustmentEnum } from "@/types/enums/inventoryAdjustment.enum";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";

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

const TableStockItems = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Item name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Is flammable</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Is fragile</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Temperature mode</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Weight grams</p>
        </div>
      </div>

      {/*TODO: make grid pretty*/}

      {stockItemData.map((item, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.itemName}
            </p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {item.description}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {String(item.isFlammable)}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {String(item.isFragile)}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.temperatureMode}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.weightGrams}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableStockItems;
