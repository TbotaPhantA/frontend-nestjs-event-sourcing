"use client";
import { FilterForm } from "@/app/warehouse/FilterModal";

const modalWindowStyles = {
  content: {
    top: "9%",
    left: "35%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "10px",
    borderWidth: "0",
    padding: "0",
    width: "40vw",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

interface WarehouseCommandsPanelProps {
  setFilters: (filter: FilterForm) => void;
}

interface InventoryCommandPanelProps {
  saveSubmit: () => void;
}

const InventoryCommandPanel = ({ saveSubmit }: InventoryCommandPanelProps) => {
  return (
    <div className="flex justify-end gap-5 pb-4 xl:gap-5">
      <button
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={() => {}}
      >
        Добавить излишки
      </button>
      <button
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={() => saveSubmit()}
      >
        Сохранить
      </button>
    </div>
  );
};

export default InventoryCommandPanel;
