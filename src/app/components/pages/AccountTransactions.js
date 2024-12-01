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
        className="px-[20px] flex justify-between py-[10px] items-center"
      >
        <FaArrowLeft
          className="cursor-pointer"
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
        <div id={`${id}_iconwrapper`} className="flex w-[50px] justify-between">
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
        <div className="flex  items-center p-[15px] w-full">
          <div className="flex flex-col w-[50%]">
            <span className="font-bold text-[22px]">
              {focalAccount.balance}
            </span>
            <span className="text-[10px] mt-[-8px]">Balance after pending</span>
          </div>
          <div className="flex flex-col w-[50%]">
            <span className=" text-[18px]">{focalAccount.overdraft}</span>
            <span className="text-[10px] mt-[-5px]">Overdraft limit</span>
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

        <div id="txn_list" className="">
          <div className="overflow-x-auto border-b border-gray-300 scrollbar-hide">
            <div
              id={`tabs_months`}
              ref={tabsRef}
              className="flex"
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
            className="py-[10px] pl-[10px] pr-[15px] flex justify-between items-center"
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
        </div>
      </div>
    </div>
  );
};

export default AccountTransactions;
