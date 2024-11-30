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
    selectedIcon: <GoHomeFill style={{ color: "#000", fontSize: "35px" }} />,
    text: "Home",
    code: "home",
  },
  {
    icon: <LiaHandPointUp style={{ color: "#000", fontSize: "30px" }} />,
    slectedIcon: <LiaHandPointUp style={{ color: "#000", fontSize: "30px" }} />,
    text: "Apply",
    code: "apply",
  },
  {
    icon: <HiMiniArrowsUpDown style={{ color: "#000", fontSize: "30px" }} />,
    selectedIcon: (
      <HiMiniArrowsUpDown style={{ color: "#000", fontSize: "30px" }} />
    ),
    text: "Payments",
    code: "payments",
  },
  {
    icon: <IoIosSearch style={{ color: "#000", fontSize: "30px" }} />,
    selectedIcon: <IoIosSearch style={{ color: "#000", fontSize: "30px" }} />,
    text: "Search",
    code: "search",
  },
  {
    icon: <AiOutlineCreditCard style={{ color: "#000", fontSize: "30px" }} />,
    selectedIcon: (
      <AiFillCreditCard style={{ color: "#000", fontSize: "30px" }} />
    ),
    text: "Cards",
    code: "cards",
  },
];

const TabList = (props) => {
  const { activeTab } = props;

  console.log("activeTab", activeTab);
  return (
    <div
      id="tablist"
      className="w-full flex flex-1 flex-row justify-evenly items-stretch box-border relative pt-[5px]"
    >
      {tablist.map((el) => (
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="h-[30px]">
            {activeTab === el.code ? el.selectedIcon : el.icon}
          </div>
          <span className="text-black text-[12px]">{el.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TabList;
