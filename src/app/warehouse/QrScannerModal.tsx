"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";
import { Html5QrcodeScanner } from "html5-qrcode";

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

interface QRScannerModalProps {
  onClose: () => void;
  onScan: (result: string) => void;
}

const QRScannerModal = ({ onClose, onScan }: QRScannerModalProps) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-scanner",
      {
        qrbox: { width: 1000, height: 1000 },
        fps: 1,
      },
      false,
    );

    scanner.render(
      (result) => {
        scanner.clear();
        onScan(result);
        onClose();
      },
      (error) => {
        console.error("QR scan error:", error);
      },
    );

    return () => {
      scanner.clear().catch((error) => {
        console.error("Failed to clean up scanner:", error);
      });
    };
  }, []);

  return (
    <div className="p-4">
      <div id="qr-scanner" />
      <button
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-500 px-6 py-2 text-center font-medium text-white hover:bg-opacity-90"
        onClick={onClose}
      >
        Закрыть
      </button>
    </div>
  );
};

export default QRScannerModal;
