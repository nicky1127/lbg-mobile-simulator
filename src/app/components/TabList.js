import React from "react";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { LiaHandPointUp } from "react-icons/lia";
import { PiCursorClickFill } from "react-icons/pi";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const tablist = [
  {
    icon: <GoHome style={{ color: "#000", fontSize: "35px" }} />,
    slectedIcon: <GoHomeFill style={{ color: "#000", fontSize: "35px" }} />,
    text: "Home",
  },
  {
    icon: <LiaHandPointUp style={{ color: "#000", fontSize: "30px" }} />,
    slectedIcon: <LiaHandPointUp style={{ color: "#000", fontSize: "30px" }} />,
    text: "Home",
  },
  {
    icon: <HiMiniArrowsUpDown style={{ color: "#000", fontSize: "30px" }} />,
    slectedIcon: (
      <HiMiniArrowsUpDown style={{ color: "#000", fontSize: "30px" }} />
    ),
    text: "Home",
  },
  {
    icon: <IoIosSearch style={{ color: "#000", fontSize: "30px" }} />,
    slectedIcon: <IoIosSearch style={{ color: "#000", fontSize: "30px" }} />,
    text: "Home",
  },
  {
    icon: <AiOutlineCreditCard style={{ color: "#000", fontSize: "30px" }} />,
    slectedIcon: (
      <AiFillCreditCard style={{ color: "#000", fontSize: "30px" }} />
    ),
    text: "Home",
  },
];

const TabList = () => {
  return (
    <div
      id="tablist"
      className="w-full flex flex-1 flex-row justify-evenly items-stretch box-border relative pt-[5px]"
    >
      {tablist.map((el) => (
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div>{el.icon}</div>
          <span className="text-black">{el.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TabList;
