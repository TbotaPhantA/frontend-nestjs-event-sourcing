"use client";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import React from "react";

const TableInventoryChanges = () => {
  const items = [
    {
      id: "e3c9da7b-0e70-4cc9-a22a-22f7b1df2437",
      itemName: "Замиокулкас",
      description:
        "Травянистое растение, которое подойдет для озеленения квартиры или административного учреждения.",
      isFlammable: false,
      isFragile: true,
      temperatureMode: "PLUS_15",
      weightGrams: 900,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T18:02:57.497Z",
      updatedAt: "2025-05-20T18:02:57.497Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "6ec74a2f-cd54-4bf6-8fda-de1d8e8e025f",
      itemName: "Удобрение для газона",
      description: "Удобрение для газона Агрикола 0.9 л",
      isFlammable: false,
      isFragile: false,
      temperatureMode: "PLUS_5",
      weightGrams: 1000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:25:46.015Z",
      updatedAt: "2025-05-20T17:25:46.015Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "350b70d5-fbf8-4ba3-8f67-7d0a41b48f95",
      itemName: "Семена газона",
      description: "Семена газона Turbo Grass Быстрый 3 кг",
      isFlammable: false,
      isFragile: false,
      temperatureMode: "PLUS_15",
      weightGrams: 3000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:25:08.161Z",
      updatedAt: "2025-05-20T17:25:08.161Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "ff5ff69e-598f-47d3-80ce-5e9b0ee40b10",
      itemName: "Грунт",
      description: "Грунт «Агрикола» универсальный 50 л",
      isFlammable: false,
      isFragile: false,
      temperatureMode: "PLUS_15",
      weightGrams: 50000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:24:15.453Z",
      updatedAt: "2025-05-20T17:24:15.453Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "42e217a8-a3d7-404b-b4d5-ff0185db7e82",
      itemName: "Полотенцесушитель ",
      description:
        "Полотенцесушитель электрический Equation 450x600 мм 100 Вт с терморегулятором лесенка цвет черный",
      isFlammable: false,
      isFragile: false,
      temperatureMode: "WITHOUT",
      weightGrams: 2000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:21:23.672Z",
      updatedAt: "2025-05-20T17:21:23.672Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "8eee648c-77d4-4f3e-b25c-9370bed62d06",
      itemName: "Пылесос строительный",
      description: "Пылесос строительный Electrolite ПС 20С, 1500 Вт, 20 л",
      isFlammable: false,
      isFragile: true,
      temperatureMode: "WITHOUT",
      weightGrams: 7000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:20:15.820Z",
      updatedAt: "2025-05-20T17:20:15.820Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "c38d3bea-c549-466f-90b5-163cbc752d4d",
      itemName: "Грунт-эмаль",
      description:
        "Грунт-эмаль по ржавчине 5 в 1 Лакра цвет прозрачный база С 0.8 л",
      isFlammable: true,
      isFragile: false,
      temperatureMode: "WITHOUT",
      weightGrams: 5000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:19:10.498Z",
      updatedAt: "2025-05-20T17:19:10.498Z",
      removedAt: null,
      locationId: "1",
    },
    {
      id: "f9c8a2f2-bdbf-4404-a440-7d350559869f",
      itemName: "Газонокосилка",
      description:
        "Газонокосилка аккумуляторная бесщеточная Sterwins 40 В 42 см 5 Ач АКБ и ЗУ не входит в комплект",
      isFlammable: false,
      isFragile: true,
      temperatureMode: "WITHOUT",
      weightGrams: 30000,
      inventoryAdjustment: "NONE",
      createdAt: "2025-05-20T17:17:46.919Z",
      updatedAt: "2025-05-20T17:17:46.919Z",
      removedAt: null,
      locationId: "1",
    },
  ];

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
            <button className="pl-2" onClick={() => {}}>
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
            <button className="pl-5" onClick={() => {}}>
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

function displayTemperatureMode(mode: string): string {
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
      throw new Error(`unknown mode ${mode}`);
  }
}

export default TableInventoryChanges;
