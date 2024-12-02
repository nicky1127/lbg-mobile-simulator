"use client";

import { createContext, useState, useEffect, useContext } from "react";

// Create a WebSocket Context
const WebSocketContext = createContext();

// WebSocket Provider Component
export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Create WebSocket connection when the component mounts
    const ws = new WebSocket("ws://your-websocket-server-url");

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
      setMessage(event.data); // Update the message state
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    // Cleanup WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket, message }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook to access WebSocket state
export const useWebSocket = () => useContext(WebSocketContext);
