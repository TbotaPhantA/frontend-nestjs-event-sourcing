"use client";
import { StockItem } from "@/types/stockItem";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { exhaustiveCheck } from "@/shared/utils/exhaustiveCheck";
import React, { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import { FilterForm } from "@/app/warehouse/FilterModal";

interface TableStockItemsProps {
  filters: FilterForm;
}

const TableStockItems = ({ filters }: TableStockItemsProps) => {
  const [items, setItems] = useState<StockItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRemoveShippedItems = async (item: StockItem) => {
    console.log("hi");
    try {
      const response = await fetch(
        "http://localhost:3001/storage/stock-month/remove-shipped-items",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestId: item.id,
            locationId: "1",
            gateNumber: "1",
            items: [
              {
                id: item.id,
                itemName: item.itemName,
                description: item.description,
                isFlammable: item.isFlammable,
                isFragile: item.isFragile,
                temperatureMode: item.temperatureMode,
                weightGrams: item.weightGrams,
              },
            ],
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Items removed successfully:", data);
      // Add any success handling here
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://127.0.0.1:3001/storage/stock-month/get-stock-items",
          {
            method: "POST",
            body: JSON.stringify({
              limit: 20,
              offset: 0,
              filter: filters || {},
            }),
            headers: {
              "Content-type": "application/json",
              accept: "application/json",
            },
          },
        );
        const data = await response.json();
        console.log(data);
        setItems(items.concat(data.items || []));
        setError(null);
      } catch (err) {
        setError("Failed to fetch initial data");
        console.error("Error fetching items:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [filters]);

  useSocket({
    url: "http://localhost:3001",
    onStockEvent: (event) => {
      if (event.eventName === "ItemsWereReceived") {
        setItems([...event.data.items, ...items]);
      } else if (event.eventName === "ItemsWereShipped") {
        const removedItemIdsSet = new Set(
          event.data.items.map((item) => item.id),
        );
        setItems(items.filter((item) => !removedItemIdsSet.has(item.id)));
      }
    },
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Warehouse items
        </h4>
      </div>

      <div className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Item name</p>
        </div>
        <div className="col-span-2 hidden justify-center sm:flex">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Is flammable</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Is fragile</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Temperature mode</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Weight grams(kg)</p>
        </div>
        <div className="col-span-1 flex justify-center"></div>
      </div>

      {items.map((item, key) => (
        <div
          className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 flex justify-center">
            <p className="text-sm text-black dark:text-white">
              {item.itemName}
            </p>
          </div>
          <div className="col-span-2 hidden justify-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {item.description}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <p className="items-center text-center text-sm text-black dark:text-white">
              {item.isFlammable ? (
                <svg
                  viewBox="0 0 1024 1024"
                  fill="red"
                  height="2em"
                  width="2em"
                >
                  <path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z" />
                </svg>
              ) : (
                "-"
              )}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <p className="text-sm text-black dark:text-white">
              {item.isFragile ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="#007FFF"
                  height="2em"
                  width="2em"
                >
                  <path d="M13 20h5v2H6v-2h5v-6.03c-2.81-.27-5-2.63-5-5.51 0-.31.03-.61.08-.91L7 2h6.54l-1.21 2.41-.54 1.09h2l-1.46 2.91-.54 1.09H14l-1 3.25 2.67-3.66.79-1.09h-2.25l1.46-2.91.54-1.09h-2l1-2H17l.93 5.55c.07.3.07.6.07.91 0 2.88-2.19 5.24-5 5.51V20z" />
                </svg>
              ) : (
                "-"
              )}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <p className="text-sm text-black dark:text-white">
              {displayTemperatureMode(item.temperatureMode)}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <p className="text-sm text-black dark:text-white">
              {item.weightGrams / 1000}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <button onClick={() => handleRemoveShippedItems(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="31px"
                height="31px"
              >
                <path
                  fill="currentColor"
                  d="M7.5 19q-1.038 0-1.77-.73T5 16.5H2.77l.218-1h2.268q.271-.667.875-1.084Q6.735 14 7.5 14t1.37.416q.603.417.874 1.084h4.618L16.558 6H5.608l.023-.098q.073-.392.38-.647T6.735 5h11.073l-.81 3.5h2.079l2.712 3.616l-.866 4.384h-1.154q0 1.039-.73 1.77t-1.77.73t-1.769-.73t-.73-1.77H10q0 1.039-.73 1.77T7.5 19m8.387-5.75h4.651l.177-.89l-2.138-2.86h-1.818zm.428-6.248L16.559 6l-2.197 9.5l.243-1.002l.792-3.496zM1.674 12.998l.25-1h4.48l-.25 1zm2-3.496l.25-1h5.48l-.25 1zM7.5 18q.617 0 1.059-.441Q9 17.117 9 16.5t-.441-1.059T7.5 15t-1.059.441Q6 15.883 6 16.5t.441 1.059Q6.883 18 7.5 18m9.77 0q.617 0 1.058-.441q.441-.442.441-1.059t-.441-1.059T17.269 15t-1.058.441q-.442.442-.442 1.059t.441 1.059q.442.441 1.06.441"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

function displayTemperatureMode(mode: TemperatureModeEnum): string {
  switch (mode) {
    case TemperatureModeEnum.MINUS_15:
      return "-15";
    case TemperatureModeEnum.MINUS_5:
      return "-5";
    case TemperatureModeEnum.ZERO:
      return "0";
    case TemperatureModeEnum.PLUS_5:
      return "+5";
    case TemperatureModeEnum.PLUS_15:
      return "+15";
    case TemperatureModeEnum.WITHOUT:
      return "-";
    default:
      throw exhaustiveCheck(mode);
  }
}

export default TableStockItems;
