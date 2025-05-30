"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableInventoryChanges, {
  TableInventoryChangesProps,
} from "@/components/Tables/TableInventoryChanges";
import InventoryCommandPanel from "@/app/inventory/inventoryCommandPanel";
import TableInventoryCurrent, {
  TableInventoryCurrentProps,
} from "@/components/Tables/TableInventoryCurrent";
import { useEffect, useState } from "react";

const WarehousePage = () => {
  // const items = [
  //   {
  //     id: "e3c9da7b-0e70-4cc9-a22a-22f7b1df2437",
  //     itemName: "Замиокулкас",
  //     description:
  //       "Травянистое растение, которое подойдет для озеленения квартиры или административного учреждения.",
  //     isFlammable: false,
  //     isFragile: true,
  //     temperatureMode: "PLUS_15",
  //     weightGrams: 900,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T18:02:57.497Z",
  //     updatedAt: "2025-05-20T18:02:57.497Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "6ec74a2f-cd54-4bf6-8fda-de1d8e8e025f",
  //     itemName: "Удобрение для газона",
  //     description: "Удобрение для газона Агрикола 0.9 л",
  //     isFlammable: false,
  //     isFragile: false,
  //     temperatureMode: "PLUS_5",
  //     weightGrams: 1000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:25:46.015Z",
  //     updatedAt: "2025-05-20T17:25:46.015Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "350b70d5-fbf8-4ba3-8f67-7d0a41b48f95",
  //     itemName: "Семена газона",
  //     description: "Семена газона Turbo Grass Быстрый 3 кг",
  //     isFlammable: false,
  //     isFragile: false,
  //     temperatureMode: "PLUS_15",
  //     weightGrams: 3000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:25:08.161Z",
  //     updatedAt: "2025-05-20T17:25:08.161Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "ff5ff69e-598f-47d3-80ce-5e9b0ee40b10",
  //     itemName: "Грунт",
  //     description: "Грунт «Агрикола» универсальный 50 л",
  //     isFlammable: false,
  //     isFragile: false,
  //     temperatureMode: "PLUS_15",
  //     weightGrams: 50000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:24:15.453Z",
  //     updatedAt: "2025-05-20T17:24:15.453Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "42e217a8-a3d7-404b-b4d5-ff0185db7e82",
  //     itemName: "Полотенцесушитель ",
  //     description:
  //       "Полотенцесушитель электрический Equation 450x600 мм 100 Вт с терморегулятором лесенка цвет черный",
  //     isFlammable: false,
  //     isFragile: false,
  //     temperatureMode: "WITHOUT",
  //     weightGrams: 2000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:21:23.672Z",
  //     updatedAt: "2025-05-20T17:21:23.672Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "8eee648c-77d4-4f3e-b25c-9370bed62d06",
  //     itemName: "Пылесос строительный",
  //     description: "Пылесос строительный Electrolite ПС 20С, 1500 Вт, 20 л",
  //     isFlammable: false,
  //     isFragile: true,
  //     temperatureMode: "WITHOUT",
  //     weightGrams: 7000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:20:15.820Z",
  //     updatedAt: "2025-05-20T17:20:15.820Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "c38d3bea-c549-466f-90b5-163cbc752d4d",
  //     itemName: "Грунт-эмаль",
  //     description:
  //       "Грунт-эмаль по ржавчине 5 в 1 Лакра цвет прозрачный база С 0.8 л",
  //     isFlammable: true,
  //     isFragile: false,
  //     temperatureMode: "WITHOUT",
  //     weightGrams: 5000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:19:10.498Z",
  //     updatedAt: "2025-05-20T17:19:10.498Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  //   {
  //     id: "f9c8a2f2-bdbf-4404-a440-7d350559869f",
  //     itemName: "Газонокосилка",
  //     description:
  //       "Газонокосилка аккумуляторная бесщеточная Sterwins 40 В 42 см 5 Ач АКБ и ЗУ не входит в комплект",
  //     isFlammable: false,
  //     isFragile: true,
  //     temperatureMode: "WITHOUT",
  //     weightGrams: 30000,
  //     inventoryAdjustment: "NONE",
  //     createdAt: "2025-05-20T17:17:46.919Z",
  //     updatedAt: "2025-05-20T17:17:46.919Z",
  //     removedAt: null,
  //     locationId: "1",
  //   },
  // ];
  // const changedItems = [
  //   {
  //     productId: "ea96b551-4c43-43fe-bf3e-df414a8ec860",
  //     productName: "Семена газона",
  //     amount: -5,
  //   },
  //   {
  //     productId: "7c9d1e3f-5a6b-7c8d-9e0f-1a2b3c4d5e6f",
  //     productName: "Горшок керамический",
  //     amount: 8,
  //   },
  //   {
  //     productId: "4f6a8b0c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
  //     productName: "Полотенцесушитель",
  //     amount: -3,
  //   },
  //   {
  //     productId: "8868b1bf-708a-455c-99e5-b703a9d691ba",
  //     productName: "Фанера",
  //     amount: 4,
  //   },
  //   {
  //     productId: "c2f651d9-ffb2-4344-ba09-4a7443835604",
  //     productName: "Уголь берёзовый",
  //     amount: 3,
  //   },
  // ];

  const [items, setItems] = useState<TableInventoryCurrentProps["items"]>([]);
  const [changedItems, setChangedItems] = useState<
    TableInventoryChangesProps["changedItems"]
  >([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:3001/storage/stock-month/get-stock-items",
          {
            method: "POST",
            body: JSON.stringify({
              limit: 20,
              offset: 0,
              filter: {},
            }),
            headers: {
              "Content-type": "application/json",
              accept: "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Response is not ok: " + response.body);
        }

        const data = await response.json();
        console.log(data);
        setItems(data.items);
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    };

    fetchItems();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Инвентаризация" />
      <InventoryCommandPanel />
      <div className="flex min-h-screen flex-row justify-around gap-5">
        <TableInventoryCurrent
          items={items}
          setItems={setItems}
          changedItems={changedItems}
          setChangedItems={setChangedItems}
        />
        <TableInventoryChanges
          items={items}
          setItems={setItems}
          changedItems={changedItems}
          setChangedItems={setChangedItems}
        />
      </div>
    </DefaultLayout>
  );
};

export default WarehousePage;
