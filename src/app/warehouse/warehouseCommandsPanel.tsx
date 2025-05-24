"use client";
import React, { useEffect, useState } from "react";
import FilterModal, { FilterForm } from "@/app/warehouse/FilterModal";
import AddItemModal from "@/app/warehouse/AddItemModal";
import Modal from "react-modal";
import { Html5QrcodeScanner } from "html5-qrcode";
import QRScannerModal from "@/app/warehouse/QrScannerModal";

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

const WarehouseCommandsPanel = ({
  setFilters,
}: WarehouseCommandsPanelProps) => {
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [isAddItemModalOpened, setIsAddItemModalOpened] = useState(false);
  const [isScannerModalOpened, setIsScannerModalOpened] = useState(false);
  const [qrResult, setQrResult] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const openFilterModal = () => setIsFilterModalOpened(true);
  const openAddItemModal = () => setIsAddItemModalOpened(true);
  const openScannerModal = () => setIsScannerModalOpened(true);
  const closeFilterModal = () => setIsFilterModalOpened(false);
  const closeAddItemModal = () => setIsAddItemModalOpened(false);
  const closeScannerModal = () => setIsScannerModalOpened(false);

  return (
    <div className="flex justify-end gap-5 pb-4 xl:gap-5">
      <button
        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openFilterModal}
      >
        Фильтр
      </button>
      {isFilterModalOpened && (
        <Modal
          isOpen={isFilterModalOpened}
          onRequestClose={closeFilterModal}
          style={modalWindowStyles}
          preventScroll={true}
          appElement={document.getElementById("app") as HTMLElement}
        >
          <FilterModal setFilters={setFilters} closeModal={closeFilterModal} />
        </Modal>
      )}
      <button
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openAddItemModal}
      >
        Добавить товар
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
      <button
        className="inline-flex items-center justify-center rounded-md bg-secondary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={openScannerModal}
      >
        Сканировать QR код
      </button>
      <Modal
        isOpen={isScannerModalOpened}
        onRequestClose={closeScannerModal}
        style={modalWindowStyles}
        preventScroll={true}
        appElement={document.getElementById("app") as HTMLElement}
      >
        <QRScannerModal
          onClose={closeScannerModal}
          onScan={(result) => setQrResult(result)}
        />
      </Modal>
      {qrResult && (
        <div className="mt-4 text-sm text-gray-700">
          Scanned QR: <span className="font-semibold">{qrResult}</span>
        </div>
      )}
    </div>
  );
};

export default WarehouseCommandsPanel;
