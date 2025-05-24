"use client";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { exhaustiveCheck } from "@/shared/utils/exhaustiveCheck";
import React from "react";
import moment from "moment";
import { mapEventNameToTitle } from "@/shared/utils/mapEventNameToTitle";
import { mapEventNameAndAmountToColor } from "@/shared/utils/mapEventNameAndAmountToColor";

const TableMovements = () => {
  const items = [
    {
      eventName: "ItemsWereReceived",
      date: new Date(2025, 2, 14),
      productId: "8a4b3a2c-1d3e-4f5a-a6b7-c8d9e0f1a2b3",
      productName: "Замиокулкас",
      amount: 7,
      prev: 4,
      curr: 11,
    },
    {
      eventName: "ItemsWereShipped",
      date: new Date(2025, 2, 14),
      productId: "b5c6d7e8-f9a0-1b2c-3d4e-5f6a7b8c9d0e",
      productName: "Удобрение для газона",
      amount: 12,
      prev: 28,
      curr: 16,
    },
    {
      eventName: "InventoryWasAdjusted",
      date: new Date(2025, 2, 14),
      productId: "2d4e6f8a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
      productName: "Семена газона",
      amount: -5,
      prev: 17,
      curr: 12,
    },
    {
      eventName: "ItemsWereShipped",
      date: new Date(2025, 2, 14),
      productId: "3e5f7a9b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
      productName: "Грунт",
      amount: 9,
      prev: 23,
      curr: 14,
    },
    {
      eventName: "ItemsWereReceived",
      date: new Date(2025, 2, 14),
      productId: "6b8c0d2e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
      productName: "Лейка садовая",
      amount: 14,
      prev: 2,
      curr: 16,
    },
    {
      eventName: "InventoryWasAdjusted",
      date: new Date(2025, 2, 14),
      productId: "7c9d1e3f-5a6b-7c8d-9e0f-1a2b3c4d5e6f",
      productName: "Горшок керамический",
      amount: 8,
      prev: 12,
      curr: 20,
    },
    {
      eventName: "ItemsWereReceived",
      date: new Date(2025, 2, 14),
      productId: "8d0e2f4a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
      productName: "Секатор",
      amount: 10,
      prev: 7,
      curr: 17,
    },
    {
      eventName: "ItemsWereShipped",
      date: new Date(2025, 2, 14),
      productId: "9e1f3a5b-7c8d-9e0f-1a2b-3c4d5e6f7a8b",
      productName: "Садовые перчатки",
      amount: 6,
      prev: 19,
      curr: 13,
    },
    {
      eventName: "InventoryWasAdjusted",
      date: new Date(2025, 2, 14),
      productId: "4f6a8b0c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
      productName: "Полотенцесушитель",
      amount: -3,
      prev: 15,
      curr: 12,
    },
    {
      eventName: "ItemsWereReceived",
      date: new Date(2025, 2, 14),
      productId: "5a7b9c1d-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
      productName: "Пылесос строительный",
      amount: 9,
      prev: 11,
      curr: 20,
    },
    // ... продолжение массива
    {
      eventName: "ItemsWereShipped",
      date: new Date(2025, 2, 14),
      productId: "b5c6d7e8-f9a0-1b2c-3d4e-5f6a7b8c9d0e",
      productName: "Удобрение для газона",
      amount: 7,
      prev: 32,
      curr: 25,
    },
    {
      eventName: "InventoryWasAdjusted",
      date: new Date(2025, 2, 14),
      productId: "2d4e6f8a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
      productName: "Семена газона",
      amount: 14,
      prev: 8,
      curr: 22,
    },
    {
      eventName: "ItemsWereReceived",
      date: new Date(2025, 2, 14),
      productId: "3e5f7a9b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
      productName: "Грунт",
      amount: 5,
      prev: 9,
      curr: 14,
    },
    {
      eventName: "ItemsWereShipped",
      date: new Date(2025, 2, 14),
      productId: "6b8c0d2e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
      productName: "Лейка садовая",
      amount: 4,
      prev: 18,
      curr: 14,
    },
    {
      eventName: "InventoryWasAdjusted",
      date: new Date(2025, 2, 14),
      productId: "7c9d1e3f-5a6b-7c8d-9e0f-1a2b3c4d5e6f",
      productName: "Горшок керамический",
      amount: -9,
      prev: 27,
      curr: 18,
    },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-row-reverse px-4 py-6 md:px-6 xl:px-7.5">
        <button
          className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={() => {}}
        >
          Скчать отчёт
        </button>
      </div>

      <div className="grid grid-cols-7 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">Событие</p>
        </div>
        <div className="col-span-1 hidden justify-center sm:flex">
          <p className="font-medium">Дата</p>
        </div>
        <div className="col-span-1 hidden justify-center sm:flex">
          <p className="font-medium">Номер товара</p>
        </div>
        <div className="col-span-1 hidden justify-center sm:flex">
          <p className="font-medium">Название товара</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">кол-во</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">было</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <p className="font-medium">стало</p>
        </div>
      </div>

      {items.map((item, key) => {
        const bgColor = mapEventNameAndAmountToColor(item);

        return (
          <div
            className={`grid grid-cols-7 border-t border-stroke ${bgColor === "red" ? "bg-red-100" : "bg-green-100"} px-4 py-4.5 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5`}
            key={key}
          >
            <div className="col-span-1 flex justify-center">
              <p className="text-align-center text-sm text-black dark:text-white">
                {mapEventNameToTitle(item)}
              </p>
            </div>
            <div className="col-span-1 hidden justify-center sm:flex">
              <p className="text-align-center pl-2 text-sm  text-black dark:text-white">
                {moment(item.date).format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="items-center text-center text-sm text-black dark:text-white">
                {item.productId.substring(0, 8)}
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="text-sm text-black dark:text-white">
                {item.productName}
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="text-sm text-black dark:text-white">
                {item.amount}
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="text-sm text-black dark:text-white">{item.prev}</p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p className="text-sm text-black dark:text-white">{item.curr}</p>
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

export default TableMovements;
