"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { customerDetails, accounts } from "../../constants/constants";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { GrDocumentDownload } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GiOrbDirection } from "react-icons/gi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import clsx from "clsx";

const options = ["Summary", "Everyday", "Save & Invest", "Borrow", "Insure"];
const tabs = ["September", "October", "November", "All", ""];

const AccountTransactions = (props) => {
  const { focalAccount, onClickBack } = props;
  const id = "homePage_account_overview";
  const [selectedTab, setSelectedTab] = useState(tabs.length - 2);
  const tabsRef = useRef(null);
  useEffect(() => {
    if (tabsRef.current) {
      // Set the scroll position to the far right
      tabsRef.current.scrollLeft = tabsRef.current?.scrollWidth;
    }
  }, []);

  const handleTabClick = (index) => {
    setSelectedTab(index);

    // Center the selected tab
    const tabElement = tabsRef.current.children[index];
    const containerWidth = tabsRef.current.offsetWidth;
    const tabWidth = tabElement.offsetWidth;
    const tabOffsetLeft = tabElement.offsetLeft;

    tabsRef.current.scrollTo({
      left: tabOffsetLeft - (containerWidth - tabWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div id={id}>
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center"
      >
        <FaArrowLeft
          className="cursor-pointer absolute left-[15px]"
          style={{ color: "#333", fontSize: "20px" }}
          onClick={onClickBack}
        />
        <div id="greetingContainer" className=" flex items-center">
          <span className="text-defaultText font-bold flex items-center mr-[3px]">
            {focalAccount?.title}
          </span>
          <IoMdInformationCircle
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "20px" }}
          />
        </div>
        <div
          id={`${id}_iconwrapper`}
          className="flex w-[60px] justify-between absolute right-[15px]"
        >
          <FaRegCircleQuestion
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "20px" }}
          />
          <HiDotsHorizontal
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "20px" }}
          />
        </div>
      </div>
      <hr className="border-t-1  border-[#333]" />

      <div className="flex flex-col bg-white">
        <div className="flex  items-end p-[15px] w-full">
          <div className="flex flex-col w-[50%]">
            <span className="font-bold text-[22px] font-sans">
              {focalAccount.balance}
            </span>
            <span className="text-[10px] mt-[-8px]">Balance after pending</span>
          </div>
          <div className="flex flex-col w-[50%]">
            <span className=" text-[15px]">{focalAccount.overdraft}</span>
            <span className="text-[10px] mt-[-2px]">Overdraft limit</span>
          </div>
        </div>
        <div className="w-full bg-ltbGreen flex items-center justify-between px-[10px] py-[8px]">
          <span className=" text-white text-[11px]">
            {" "}
            Your overdraft options
          </span>
          <FaArrowRight
            className="cursor-pointer"
            style={{ color: "#fff", fontSize: "15px" }}
            onClick={onClickBack}
          />
        </div>

        <div id="txn_list" className="bg-bgColor">
          <div className="overflow-x-auto border-b border-gray-300 scrollbar-hide bg-white">
            <div
              id={`tabs_months`}
              ref={tabsRef}
              className="flex bg-white"
              // style={{ width: `${100 / 3}%` }} // Ensure all tabs fit in the scrollable area
            >
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`text-[12px] flex-[0_0_33.333%] text-center py-2 ${
                    selectedTab === index
                      ? "border-b-2 border-black text-black"
                      : ""
                  } ${index < tabs.length - 1 && "cursor-pointer"}`}
                  onClick={() =>
                    index < tabs.length - 1 && handleTabClick(index)
                  }
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          <div
            id={`${id}_utility`}
            className="py-[10px] pl-[10px] pr-[15px] flex justify-between items-center bg-white"
          >
            <div className="flex">
              <div className="border border-[#333] rounded-[5px] px-[14px] py-[4px] text-[12px] mr-[5px]">
                In
              </div>
              <div className="border border-[#333] rounded-[5px] px-[14px] py-[4px] text-[12px]">
                Out
              </div>
            </div>
            <div
              id={`${id}_iconwrapper`}
              className="flex justify-between w-[60px] "
            >
              <GrDocumentDownload
                className="cursor-pointer"
                style={{ color: "#333", fontSize: "20px" }}
              />
              <IoSearchOutline
                className="cursor-pointer"
                style={{ color: "#333", fontSize: "20px" }}
              />
            </div>
          </div>
          <div id={`${id}_history`}>
            {focalAccount?.transactions.map((txn, idx) => {
              let iconDom;
              const iconSize = "15px";

              switch (txn.icon) {
                case "direct-debit":
                  iconDom = (
                    <div className=" border border-gray-400 rounded-full p-[8px]">
                      <GiOrbDirection
                        style={{ color: "#000", fontSize: iconSize }}
                      />
                    </div>
                  );
                  break;
                case "transfer":
                  iconDom = (
                    <div className=" border border-gray-400 rounded-full p-[8px]">
                      <HiMiniArrowsUpDown
                        style={{ color: "#000", fontSize: iconSize }}
                      />
                    </div>
                  );
                  break;

                default:
                  iconDom = (
                    <div className=" border-2 border-gray-400 rounded-full p-[8px]">
                      <HiMiniArrowsUpDown
                        style={{ color: "#000", fontSize: iconSize }}
                      />
                    </div>
                  );
              }

              return (
                <div
                  key={`${id}_txn_${txn.balance}_${txn.amount}`}
                  className="my-[10px] bg-white"
                >
                  <div className="text-[12px] px-[10px] py-[7px]">
                    {txn?.date}
                  </div>
                  <hr className="border border-lightgray" />
                  <div
                    id={`${id}_txt_item`}
                    className="flex justify-between items-center"
                  >
                    <div className="py-[10px] flex px-[1px] items-center">
                      <div
                        style={{ flexBasis: "4px" }}
                        className={`rounded-[2px] h-[25px] mr-[10px] ml-[1px] ${
                          txn.type === "cre" ? "bg-ltbGreen2" : "bg-white"
                        }`}
                      />
                      {iconDom}
                      <span className="text-[13px] mx-[10px] flex-1 w-[150px]">
                        {txn?.description}
                      </span>
                    </div>
                    <div className="pr-[10px] flex items-center">
                      <div className="flex flex-col mr-[5px]">
                        <span
                          className={`text-[12px] ${
                            txn.type === "cre"
                              ? "text-ltbGreen text-[14px] font-bold"
                              : "text-black"
                          }`}
                        >
                          {txn.type === "cre"
                            ? "+ " + txn.amount
                            : "- " + txn.amount}
                        </span>
                        <span className="text-[9px] text-lightGray text-right">
                          {txn.balance}
                        </span>
                      </div>
                      <IoIosArrowForward
                        className="cursor-pointer"
                        style={{ color: "#333", fontSize: "15px" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTransactions;
