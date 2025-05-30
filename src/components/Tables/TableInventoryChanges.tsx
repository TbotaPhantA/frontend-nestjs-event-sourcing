"use client";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { exhaustiveCheck } from "@/shared/utils/exhaustiveCheck";
import React from "react";
import { CurrentItem } from "@/components/Tables/TableInventoryCurrent";

interface ChangedItem {
  productId: string;
  productName: string;
  amount: number;
  item: CurrentItem;
}

export interface TableInventoryChangesProps {
  items: CurrentItem[];
  setItems: (items: CurrentItem[]) => any;
  changedItems: ChangedItem[];
  setChangedItems: (items: TableInventoryChangesProps["changedItems"]) => any;
}

const TableInventoryChanges = ({
  items,
  setItems,
  changedItems,
  setChangedItems,
}: TableInventoryChangesProps) => {
  function handlePlus(plusedItems: ChangedItem[]) {
    const productIds = plusedItems.map((id) => id.productId);

    plusedItems.map((item) => {
      if (item.amount < 0) {
        setItems([...items, item.item]);
        setChangedItems(
          changedItems.filter((i) => !productIds.includes(i.productId)),
        );
      }
    });
  }

  function handleMinus(minusedItems: ChangedItem[]) {
    const productIds = minusedItems.map((id) => id.productId);

    minusedItems.map((item) => {
      if (item.amount > 0) {
        setItems([...items, item.item]);
        setChangedItems(
          changedItems.filter((i) => !productIds.includes(i.productId)),
        );
      }
    });
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-row items-center justify-between px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Изменения
        </h4>
        <button
          className="inline-flex items-center justify-center rounded-md bg-meta-1 px-10 py-4 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={() => {
            const minused: ChangedItem[] = [];
            const plused: ChangedItem[] = [];
            changedItems.map((i) =>
              i.amount > 0 ? minused.push(i) : plused.push(i),
            );
            handlePlus(plused);
          }}
        >
          Отмеить все
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-90deg-left pl-3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-4 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 hidden justify-center sm:flex">
          <p className="font-medium">Номер товара</p>
        </div>
        <div className="col-span-1 hidden justify-center sm:flex">
          <p className="font-medium">Название товара</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">кол-во</p>
        </div>
      </div>

      {changedItems.map((item, key) => {
        const bgColor = item.amount < 0 ? "red" : "green";

        return (
          <div
            className={`grid grid-cols-4 border-t border-stroke ${bgColor === "red" ? "bg-red-100" : "bg-green-100"} px-4 py-4.5 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5`}
            key={key}
          >
            <div className="col-span-1 flex justify-center">
              <p className="text-align-center text-sm text-black dark:text-white">
                {item.productId.substring(0, 8)}
              </p>
            </div>
            <div className="col-span-1 hidden justify-center sm:flex">
              <p className="text-align-center pl-2 text-sm  text-black dark:text-white">
                {item.productName}
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="items-center text-center text-sm text-black dark:text-white">
                {item.amount}
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <button className="pl-2" onClick={() => handlePlus([item])}>
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
              <button className="pl-5" onClick={() => handleMinus([item])}>
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
              <button
                className="pl-10"
                onClick={() => {
                  item.amount > 0 ? handleMinus([item]) : handlePlus([item]);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
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

export default TableInventoryChanges;
