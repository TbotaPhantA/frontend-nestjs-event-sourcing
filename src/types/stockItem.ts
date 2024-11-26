import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { InventoryAdjustmentEnum } from "@/types/enums/inventoryAdjustment.enum";

export type StockItem = {
  id: string;
  itemName: string;
  description: string;
  isFlammable: boolean;
  isFragile: boolean;
  temperatureMode: TemperatureModeEnum;
  weightGrams: number;
  inventoryAdjustment: InventoryAdjustmentEnum;
  locationId: string;
  createdAt: Date;
  updatedAt: Date;
  removedAt: Date | null;
};
