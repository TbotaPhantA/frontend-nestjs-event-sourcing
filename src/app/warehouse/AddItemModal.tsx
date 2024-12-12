import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
import React from "react";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import { StockItem } from "@/types/stockItem";
import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

type AddStockItemForm = Pick<
  StockItem,
  | "itemName"
  | "description"
  | "isFlammable"
  | "isFragile"
  | "temperatureMode"
  | "weightGrams"
>;

interface AddItemModalProps {
  closeModal: () => any;
}

function AddItemModal({ closeModal }: AddItemModalProps) {
  const { register, handleSubmit, watch, setValue } = useForm<AddStockItemForm>(
    {
      defaultValues: {
        itemName: "",
        description: "",
        isFlammable: false,
        isFragile: false,
        temperatureMode: TemperatureModeEnum.WITHOUT,
        weightGrams: 0,
      },
    },
  );

  const { isFlammable, isFragile, temperatureMode } = watch();

  const submit: SubmitHandler<AddStockItemForm> = async (data) => {
    let response = await fetch(
      "http://localhost:3001/storage/stock-month/add-received-items",
      {
        method: "POST",
        body: JSON.stringify({
          requestId: uuid(),
          locationId: "1",
          gateNumber: "1",
          items: [
            {
              id: uuid(),
              ...data,
            },
          ],
        }),
        headers: {
          "Content-type": "application/json",
        },
      },
    );

    // TODO: show error when receiving error
    const body = await response.json();

    if (response.status >= 200 && response.status < 300) {
      closeModal();
    }
  };

  const error: SubmitErrorHandler<AddStockItemForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
    >
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          AddItemModal Modal
        </h3>
      </div>
      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("itemName", { required: true, minLength: 1 })}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("description", { required: true, minLength: 1 })}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Is flammable
          </label>
          <SwitcherTwo
            enabled={isFlammable}
            setEnabled={(value) => setValue("isFlammable", value)}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Is fragile
          </label>
          <SwitcherTwo
            enabled={isFragile}
            setEnabled={(value) => setValue("isFragile", value)}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Temperature mode
          </label>
          <SelectGroupTwo<TemperatureModeEnum>
            title="Temperature mode"
            optionValues={Object.values(TemperatureModeEnum)}
            value={temperatureMode}
            setValue={(value) => setValue("temperatureMode", value)}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Weight (grams)
          </label>
          <input
            type="number"
            placeholder="Weight (kg)"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("weightGrams", {
              valueAsNumber: true,
              required: true,
              min: 0,
            })}
          />
        </div>

        <button className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Add item
        </button>
      </div>
    </form>
  );
}

export default AddItemModal;
