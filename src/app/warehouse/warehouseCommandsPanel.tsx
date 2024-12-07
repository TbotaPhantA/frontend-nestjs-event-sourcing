"use client";
import { useState } from "react";
import FilterModal from "@/app/warehouse/FilterModal";
import AddItemModal from "@/app/warehouse/AddItemModal";
import Modal from "react-modal";

const modalWindowStyles = {
  content: {
    top: "10%",
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

const WarehouseCommandsPanel = () => {
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [isAddItemModalOpened, setIsAddItemModalOpened] = useState(false);

  const openFilterModal = () => setIsFilterModalOpened(true);
  const openAddItemModal = () => setIsAddItemModalOpened(true);
  const closeFilterModal = () => setIsFilterModalOpened(false);
  const closeAddItemModal = () => setIsAddItemModalOpened(false);

  return (
    <div className="flex justify-end gap-5 pb-4 xl:gap-5">
      <button
        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openFilterModal}
      >
        Filter
      </button>
      {isFilterModalOpened && (
        <Modal
          isOpen={isFilterModalOpened}
          onRequestClose={closeFilterModal}
          style={modalWindowStyles}
          preventScroll={true}
        >
          <FilterModal />
        </Modal>
      )}
      <button
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openAddItemModal}
      >
        Add item
      </button>
      {isAddItemModalOpened && (
        <Modal
          isOpen={isAddItemModalOpened}
          onRequestClose={closeAddItemModal}
          style={modalWindowStyles}
          preventScroll={true}
        >
          <AddItemModal />
        </Modal>
      )}
    </div>
  );
};

export default WarehouseCommandsPanel;
