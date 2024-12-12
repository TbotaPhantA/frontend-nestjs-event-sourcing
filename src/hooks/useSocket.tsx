// hooks/useSocket.ts
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { StockItem } from "@/types/stockItem";

interface OnStockEventParams {
  data: {
    items: StockItem[];
  };
}

interface UseSocketProps {
  url: string;
  onStockEvent: (event: OnStockEventParams) => void;
}

export const useSocket = ({ url, onStockEvent }: UseSocketProps) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Create socket connection
    socketRef.current = io(url, {
      reconnectionDelay: 1000,
      reconnection: true,
      reconnectionAttempts: 10,
      transports: ["websocket"],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false,
    });

    // Listen for StockEvent
    socketRef.current.on("StockEvent", (event: OnStockEventParams) => {
      console.log("Received StockEvent:", event);
      onStockEvent(event);
    });

    // Connection event handlers
    socketRef.current.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });

    socketRef.current.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url, onStockEvent]);

  return socketRef.current;
};
