"use client";
import React from "react";
import { TableInventoryChangesProps } from "@/components/Tables/TableInventoryChanges";

export interface CurrentItem {
  id: string;
  itemName: string;
  description: string;
  isFlammable: boolean;
  isFragile: boolean;
  temperatureMode: string;
  weightGrams: number;
  inventoryAdjustment: string;
  createdAt: string;
  updatedAt: string;
  removedAt: null;
  locationId: string;
}

export interface TableInventoryCurrentProps {
  items: CurrentItem[];
  setItems: (items: CurrentItem[]) => any;
  changedItems: TableInventoryChangesProps["changedItems"];
  setChangedItems: (items: TableInventoryChangesProps["changedItems"]) => any;
}

const TableInventoryCurrent = ({
  items,
  setItems,
  changedItems,
  setChangedItems,
}: TableInventoryCurrentProps) => {
  function handlePlus(item: CurrentItem) {
    // setItems([...items.filter((i) => i.id !== item.id), item.]);
    // setChangedItems([
    //   ...changedItems,
    //   { productId: item.id, productName: item.itemName, amount: 1 },
    // ]);
  }

  function handleMinus(item: CurrentItem) {
    setItems(items.filter((i) => i.id !== item.id));
    setChangedItems([
      ...changedItems,
      { productId: item.id, productName: item.itemName, amount: -1, item },
    ]);
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Итоговый состав
        </h4>
      </div>

      <div className="grid grid-cols-4 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 hidden justify-center sm:flex">
          <p className="font-medium">Номер товара</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Название</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Кол-во</p>
        </div>
        <div className="col-span-1 flex justify-center"></div>
      </div>

      {items.map((item, key) => (
        <div
          className="grid grid-cols-4 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className=" col-span-1 flex justify-center">
            <p className="text-align-center text-sm text-black dark:text-white">
              {item.id.substring(0, 8)}
            </p>
          </div>
          <div className=" col-span-1 flex justify-center">
            <p className="text-align-center text-sm text-black dark:text-white">
              {item.itemName}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <p className="text-sm text-black dark:text-white">
              {Math.ceil(Math.random() * 10)}
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <button className="pl-2" onClick={() => handlePlus(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </button>
            <button className="pl-5" onClick={() => handleMinus(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableInventoryCurrent;
