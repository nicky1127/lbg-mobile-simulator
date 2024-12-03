import React from "react";
import clsx from "clsx";

import Image from "next/image";

import { LiaIdCard } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

import { useWebSocket } from "../../../context/WebSocketContext";

const cards = [
  {
    title: "LLOYDS BANK",
    type: "Debit",
    cardHolder: "Mr. Paul Smith",
    expiryDate: "11/26",
    pan: "**** 1234",
  },
];
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
];

const CardsPage = (props) => {
  const { onClickBack, onClickShowPin } = props;

  const { sendMessage } = useWebSocket();
  const id = "cardsPage_overview";
  return (
    <div id={id} className="flex flex-col h-full relative">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center "
      >
        <FaArrowLeft
          className="cursor-pointer absolute left-[15px]"
          style={{ color: "#333", fontSize: "20px" }}
          onClick={onClickBack}
        />
        <div id="headerContainer" className="text-defaultText font-bold">
          View PIN
        </div>
        <div></div>
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div className="flex flex-col items-center justify-center p-[30px] h-[70%]">
        <Image
          src="/images/ltb_shield.jpeg" // Path to the local image (public directory)
          alt="My Image" // Alt text for the image
          width={130} // Width of the image
          height={100} // Height of the image
        />
        <div className="font-bold">Protect your PIN in public</div>
        <div className="text-[11px] mt-[5px]">
          When you show your PIN, it will appear on-screen for a few seconds. So
          make sure no-one else can see it.
        </div>
      </div>

      <div id="applePayBtn Wrapper" className=" flex justify-center w-full">
        <div
          className="flex justify-center bg-[#000] w-[90%] p-[10px] m-[20px] rounded-[10px] font-bold cursor-pointer text-[#fff] text-[13px]"
          onClick={() => {
            const data = { sender: "admin", componentId: "btn-show-pin" };
            sendMessage(data);
            // onClickShowPin();
          }}
        >
          Show PIN
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
