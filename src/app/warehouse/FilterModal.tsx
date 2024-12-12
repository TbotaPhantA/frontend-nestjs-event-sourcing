import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { useForm } from "react-hook-form";
import MultiSelect from "@/components/FormElements/MultiSelect";
import React from "react";

type FilterForm = Partial<{
  itemName: string;
  isFlammable: boolean[];
  isFragile: boolean[];
  temperatureMode: TemperatureModeEnum[];
  minWeight: number;
  maxWeight: number;
}>;

function FilterModal() {
  const { register, handleSubmit, watch, setValue } = useForm<FilterForm>({
    defaultValues: {
      itemName: undefined,
      isFlammable: undefined,
      isFragile: undefined,
      temperatureMode: undefined,
      minWeight: 0,
      maxWeight: 100_000_000,
    },
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Filter Modal</h3>
      </div>

      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Item name
          </label>
          <input
            type="text"
            placeholder="Enter the item name..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("itemName", { minLength: 1 })}
          />
        </div>

        <MultiSelect id="multiSelect" title="Is flammable" />
        <MultiSelect id="multiSelect" title="Is fragile" />
        <MultiSelect id="multiSelect" title="Temperature mode" />
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Min weight (grams)
          </label>
          <input
            type="number"
            placeholder="Enter the min weight in grams..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("minWeight", {
              valueAsNumber: true,
              min: 0,
            })}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Max weight (grams)
          </label>
          <input
            type="number"
            placeholder="Enter the max weight in grams..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("maxWeight", {
              valueAsNumber: true,
              min: 0,
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
