"use client";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import { CgSmartphoneChip } from "react-icons/cg";
import { TbUserFilled } from "react-icons/tb";
import clsx from "clsx";

const greeting =
  "Hi, I'm Friday, your personal AI assistant. How can I help you?";
const reply1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ChatboxScreen = (props) => {
  const id = "chatboxScreen";

  const [messages, setMessages] = useState([
    { id: Date.now(), type: "reply", text: greeting },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiTyping, setAiTyping] = useState("");

  const chatContainerRef = useRef(null);
  const dummyRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = {
        id: Date.now(),
        text: input,
        type: "sender",
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      setTimeout(() => simulateAiResponse(reply1), 1000);
    }
  };

  const simulateAiResponse = (response) => {
    setIsTyping(true);
    setAiTyping("");
    let words = response.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        setAiTyping((prev) => prev + (prev ? " " : "") + words[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), type: "reply", text: response },
        ]);
      }
    }, 50);
  };

  useEffect(() => {
    if (dummyRef.current) {
      dummyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, aiTyping]);

  return (
    <div id={id} className="h-full relative w-full">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center relative"
      >
        <div
          id="greetingContainer"
          className="text-defaultText font-bold font-sans"
        >
          {`AI Chatbot`}
        </div>
      </div>
      <hr className="border-t-1 border-[#333]" />

      <div className="h-[604px] overflow-y-auto scrollbar-hide w-full ">
        <div className="flex flex-col max-w-md shadow-md h-full w-full">
          <div
            ref={chatContainerRef}
            className="flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto h-[70%] w-full scrollbar-hide"
          >
            {messages.map((msg) =>
              msg.type === "sender" ? (
                <div className="w-full flex justify-end" key={msg.id}>
                  <div className="max-w-[80%] bg-white text-defaultText px-[10px] py-[6px] border border-[#dad9d9] rounded-lg shadow-sm text-[14px] break-words">
                    {msg.text}
                  </div>
                  <div className="rounded-full bg-[#6ec6c7] w-[35px] h-[35px] flex justify-center items-center ml-[8px]">
                    <TbUserFilled style={{ color: "#333", fontSize: "20px" }} />
                  </div>
                </div>
              ) : (
                <div className="w-full flex justify-start" key={msg.id}>
                  <div className="rounded-full bg-ltbGreen3 w-[35px] h-[35px] flex justify-center items-center mr-[8px]">
                    <CgSmartphoneChip
                      style={{ color: "#333", fontSize: "20px" }}
                    />
                  </div>
                  <div className="max-w-[80%] bg-blue-100 text-blue-900 px-[10px] py-[6px] rounded-lg shadow-sm text-[14px] break-words">
                    {msg.text}
                  </div>
                </div>
              )
            )}
            {isTyping && (
              <div className="w-full flex justify-start">
                <div className="rounded-full bg-ltbGreen3 w-[35px] h-[35px] flex justify-center items-center mr-[8px]">
                  <CgSmartphoneChip
                    style={{ color: "#333", fontSize: "20px" }}
                  />
                </div>
                <div className="max-w-[80%] bg-blue-100 text-blue-900 px-[10px] py-[6px] rounded-lg shadow-sm text-[14px] break-words">
                  {aiTyping}
                </div>
              </div>
            )}
            <div ref={dummyRef} />
          </div>
          <div className="flex items-center p-4 border-t border-gray-300 bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border text-[14px] border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              onClick={handleSend}
              className="ml-3 px-4 py-2 bg-black text-[14px] text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatboxScreen;
