import React, { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

import { LiaIdCard } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";
import { MdOutlineCreditCardOff } from "react-icons/md";
import { MdOutlineAddCard } from "react-icons/md";

import { useGlobalContext } from "../../../context/GlobalContext";

import { useWebSocket } from "../../../context/WebSocketContext";

const iconSize = "20px";

const actions = [
  {
    title: "Card details",
    icon: <LiaIdCard style={{ color: "#000", fontSize: iconSize }} />,
  },
  {
    title: "View PIN",
    icon: <IoEyeOutline style={{ color: "#000", fontSize: iconSize }} />,
  },
  {
    title: "Card freezes and limits",
    icon: <IoSnow style={{ color: "#000", fontSize: iconSize }} />,
  },
  {
    title: "Lost or stolen card",
    icon: (
      <MdOutlineCreditCardOff style={{ color: "#000", fontSize: iconSize }} />
    ),
  },
  {
    title: "Replace card",
    icon: <MdOutlineAddCard style={{ color: "#000", fontSize: iconSize }} />,
  },
];

const CardsPage = (props) => {
  const id = "cardsPage_overview";

  const { onClickViewPin, cards, isHighlighted, setIsHighlighted } = props;

  const { sendMessage } = useWebSocket();

  const onClickAction = (title) => {
    console.log("title", title);
    switch (title) {
      case "View PIN":
        return onClickViewPin();
    }
  };

  const {
    resetFlashTab,
    setResetFlashTab,
    resetFlashAccount,
    setResetFlashAccount,
    resetFlashViewPin,
    setResetFlashViewPin,
  } = useGlobalContext();

  useEffect(() => {
    if (resetFlashViewPin) {
      setIsHighlighted(null);
    }
    setResetFlashViewPin(false);
  }, [resetFlashViewPin]);

  return (
    <div id={id} className="flex flex-col h-full">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center"
      >
        <div id="headerContainer" className="text-defaultText font-bold">
          Card management
        </div>
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div id="card_carousel" className=" py-[25px] flex justify-center">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-ltbGreen3 w-[210px] h-[130px] shadow-[10px_8px_20px_rgba(0,0,0,0.4)] rounded-[10px] px-[10px] py-[10px] flex flex-col justify-between"
          >
            <div className="text-[12px]">{card.title}</div>
            <div className="flex justify-center text-[16px]">{card.pan}</div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[10px]">{card.expiryDate}</span>
                <span className="text-[10px]">{card.cardHolder}</span>
              </div>
              <div className="flex flex-col">
                {/* <span className="text-[16px] font-bold font-sans">VISA</span> */}
                <Image
                  src="/images/visa.png" // Path to the local image (public directory)
                  alt="My Image" // Alt text for the image
                  width={40} // Width of the image
                  height={15} // Height of the image
                />
                <span className="text-[8px] flex justify-end">{card.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="actionWrapper" className=" bg-white p-[10px] flex-1  ">
        <div id="applePayBtn Wrapper" className=" flex justify-center w-full">
          <div className="flex justify-center bg-[#000] w-[90%] p-[10px] m-[20px] font-bold rounded-[10px] cursor-pointer text-[#fff] text-[13px]">
            Apple Pay
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-4  gap-y-6 px-[0px] py-[10px]">
          {actions.map((action, index) => (
            <div
              key={`${id}_${action.title}`}
              className={`flex flex-col justify-center items-center cursor-pointer border-2 rounded-[5px] border-[#fff] 
								${index === isHighlighted && " animate-flashingBorder"}
								`}
              onClick={() => {
                setResetFlashTab(true);
                onClickAction(action.title);
                const data = { sender: "admin", componentId: "btn-view-pin" };
                sendMessage(data);
              }}
            >
              <div className=" border-2 border-gray-400 rounded-full p-[10px]">
                {action.icon}
              </div>
              <span className="mt-[5px] text-[10px]">{action.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
