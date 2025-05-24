import { TemperatureModeEnum } from "@/types/enums/temperatureMode.enum";
import { useForm } from "react-hook-form";
import MultiSelect from "@/components/FormElements/MultiSelect";
import React from "react";
import { BooleanEnum } from "@/types/enums/boolean.enum";

export type FilterForm = {
  itemName: string;
  isFlammable: boolean[];
  isFragile: boolean[];
  temperatureMode: TemperatureModeEnum[];
  minWeight: number;
  maxWeight: number;
};

export const filterFormDefaultValues = {
  itemName: "",
  isFlammable: [],
  isFragile: [],
  temperatureMode: [],
  minWeight: 0,
  maxWeight: 100_000_000,
};

interface FilterModalProps {
  setFilters: (filter: FilterForm) => void;
  closeModal: () => any;
}

function FilterModal({ setFilters, closeModal }: FilterModalProps) {
  const { register, setValue, getValues } = useForm<FilterForm>({
    defaultValues: filterFormDefaultValues,
  });

  const handleApplyFilters = () => {
    setFilters(getValues());
    closeModal();
  };

  const handleSelectedIsFlammableOptions = (options: string[]) => {
    setValue(
      "isFlammable",
      options.map((o) => o === "true"),
    );
  };

  const handleSelectedIsFragileOptions = (options: string[]) => {
    setValue(
      "isFragile",
      options.map((o) => o === "true"),
    );
  };

  const handleSelectedTemperatureModeOptions = (options: string[]) => {
    setValue("temperatureMode", options as TemperatureModeEnum[]);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Фильтр</h3>
      </div>

      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Название
          </label>
          <input
            type="text"
            placeholder="Введите название..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("itemName", { minLength: 1 })}
          />
        </div>
        <MultiSelect
          id="isFlammableFilter"
          title="Легковоспломеняющийся"
          optionValues={Object.values(BooleanEnum)}
          handleSelectedOptions={handleSelectedIsFlammableOptions}
        />
        <MultiSelect
          id="isFragileFilter"
          title="Хрупкий"
          optionValues={Object.values(BooleanEnum)}
          handleSelectedOptions={handleSelectedIsFragileOptions}
        />
        <MultiSelect
          id="temperatureModeFilter"
          title="Температурный режим"
          optionValues={Object.values(TemperatureModeEnum)}
          handleSelectedOptions={handleSelectedTemperatureModeOptions}
        />
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Минимальный вес (граммы)
          </label>
          <input
            type="number"
            placeholder="Введите минимальный вес в граммах..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("minWeight", {
              valueAsNumber: true,
              min: 0,
            })}
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Максимальный вес (граммы)
          </label>
          <input
            type="number"
            placeholder="Введите максимальный вес в граммах..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register("maxWeight", {
              valueAsNumber: true,
              min: 0,
            })}
          />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={handleApplyFilters}
        >
          Применить
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
