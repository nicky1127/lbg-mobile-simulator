"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useGlobalContext } from "./GlobalContext";
import { io } from "socket.io-client";

// Create a WebSocket Context
const WebSocketContext = createContext();

// WebSocket Provider Component
export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState(null);

  const { setScreen } = useGlobalContext();
  const ws = io("http://localhost:8080");

  useEffect(() => {
    // Create WebSocket connection when the component mounts

    // ws.onopen = () => {
    //   console.log("WebSocket connected");
    //   setSocket(ws); // Store the WebSocket instance
    // };

    ws.on("message", (message) => {
      try {
        const data = JSON.parse(JSON.stringify(message)); // Assuming the message is JSON
        const parsedData = JSON.parse(data);
        // console.log("Received message:", JSON.parse(data));
        // console.log("typeof data", typeof data);
        const { sender, screenId } = JSON.parse(data);
        console.log("sender", sender);
        console.log("screenId", screenId);
        setScreen(screenId);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
      setMessage(event.data); // Update the message state
    });

    // ws.onmessage = (event) => {
    //   console.log("Received message:", event.data);
    //   try {
    //     const data = JSON.parse(event.data); // Assuming the message is JSON
    //     const { sender, screen_id } = data;
    //     setScreen(sender);
    //   } catch (error) {
    //     console.error("Error parsing message:", error);
    //   }
    //   setMessage(event.data); // Update the message state
    // };

    ws.disconnect = () => {
      console.log("WebSocket disconnected");
      setSocket(null); // Clear the socket state
    };

    // Cleanup WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, [setScreen]);

  const sendMessage = (msg) => {
    console.log("Sending msg", msg);

    const value = JSON.stringify(msg);
    ws.emit("message", value);
    // if (socket && socket.readyState === WebSocket.OPEN) {
    //   socket.emit(JSON.stringify(msg)); // Ensure the message is properly formatted
    // } else {
    //   console.error("WebSocket is not connected");
    // }
  };

  return (
    <WebSocketContext.Provider value={{ socket, message, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook to access WebSocket state
export const useWebSocket = () => useContext(WebSocketContext);
