"use client";
import { useState } from "react";
import { FilterForm } from "@/app/warehouse/FilterModal";
import AddItemModal from "@/app/warehouse/AddItemModal";
import Modal from "react-modal";

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

const InventoryCommandPanel = () => {
  const [isAddItemModalOpened, setIsAddItemModalOpened] = useState(false);

  const openAddItemModal = () => setIsAddItemModalOpened(true);
  const closeAddItemModal = () => setIsAddItemModalOpened(false);

  return (
    <div className="flex justify-end gap-5 pb-4 xl:gap-5">
      <button
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openAddItemModal}
      >
        Добавить излишки
      </button>
      <button
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openAddItemModal}
      >
        Сохранить
      </button>
      {isAddItemModalOpened && (
        <Modal
          isOpen={isAddItemModalOpened}
          onRequestClose={closeAddItemModal}
          style={modalWindowStyles}
          preventScroll={true}
          appElement={document.getElementById("app") as HTMLElement}
        >
          <AddItemModal closeModal={closeAddItemModal} />
        </Modal>
      )}
    </div>
  );
};

export default InventoryCommandPanel;
