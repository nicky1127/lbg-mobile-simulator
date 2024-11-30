import React from "react";
import { GoMail } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { GrUserSettings } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";

import { LiaIdCard } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";

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
  const id = "cardsPage_overview";

  const { onClickViewPin, cards } = props;

  const onClickAction = (title) => {
    console.log("title", title);
    switch (title) {
      case "View PIN":
        console.log("=======>");
        return onClickViewPin();
    }
  };

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
            className="bg-ltbGreen3 w-[200px] h-[130px] shadow-[10px_8px_20px_rgba(0,0,0,0.4)] rounded-[10px] px-[10px] py-[10px] flex flex-col justify-between"
          >
            <div className="text-[12px]">{card.title}</div>
            <div className="flex justify-center text-[16px]">{card.pan}</div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[10px]">{card.expiryDate}</span>
                <span className="text-[10px]">{card.cardHolder}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px]">VISA</span>
                <span className="text-[8px] mt-[-5px] flex justify-end">
                  {card.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="actionWrapper" className=" bg-white p-[10px] flex-1  ">
        <div id="applePayBtn Wrapper" className=" flex justify-center w-full">
          <div className="flex justify-center bg-[#000] w-[90%] p-[10px] m-[20px] rounded-[10px] cursor-pointer text-[#fff] text-[13px]">
            Apple Pay
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-[10px]">
          {actions.map((action) => (
            <div
              key={`${id}_${action.title}`}
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => onClickAction(action.title)}
            >
              <div className=" border-2 border-gray-400 rounded-full p-[10px]">
                {action.icon}
              </div>
              <span className="mt-[5px] text-[9px]">{action.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
