"use client";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { LiaHandPointUp } from "react-icons/lia";
import { PiCursorClickFill } from "react-icons/pi";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const iconSize = "25px";

const tablist = [
  {
    icon: <GoHome style={{ color: "#000", fontSize: iconSize }} />,
    selectedIcon: <GoHomeFill style={{ color: "#000", fontSize: iconSize }} />,
    text: "Home",
    code: "home",
  },
  {
    icon: <LiaHandPointUp style={{ color: "#000", fontSize: iconSize }} />,
    selectedIcon: (
      <LiaHandPointUp style={{ color: "#000", fontSize: iconSize }} />
    ),
    text: "Apply",
    code: "apply",
  },
  {
    icon: <HiMiniArrowsUpDown style={{ color: "#000", fontSize: iconSize }} />,
    selectedIcon: (
      <HiMiniArrowsUpDown style={{ color: "#000", fontSize: iconSize }} />
    ),
    text: "Payments",
    code: "payments",
  },
  {
    icon: <IoIosSearch style={{ color: "#000", fontSize: iconSize }} />,
    selectedIcon: <IoIosSearch style={{ color: "#000", fontSize: iconSize }} />,
    text: "Search",
    code: "search",
  },
  {
    icon: <AiOutlineCreditCard style={{ color: "#000", fontSize: iconSize }} />,
    selectedIcon: (
      <AiFillCreditCard style={{ color: "#000", fontSize: iconSize }} />
    ),
    text: "Cards",
    code: "cards",
  },
];

const TabList = (props) => {
  const { activeTab, onClickTab } = props;
  const id = "tablist";
  const [isHighlighted, setIsHighlighted] = useState(null);

  return (
    <div
      id={id}
      className="w-full flex flex-1 flex-row justify-evenly items-stretch box-border relative pt-[5px]"
    >
      {tablist.map((el, index) => (
        <div
          key={`${id}_${el.code}`}
          className={`flex flex-col items-center justify-center cursor-pointer p-[5px] border-2  rounded-[5px] border-[#fff] ${
            // index === isHighlighted && "border-flashBorder border-2"
            index === isHighlighted && " animate-flashingBorder"
          }`}
          onClick={() => {
            setIsHighlighted(index);
            onClickTab(el.code);
          }}
        >
          <div className="h-[25px]">
            {activeTab === el.code ? el.selectedIcon : el.icon}
          </div>
          <span className="text-black text-[10px]">{el.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TabList;
