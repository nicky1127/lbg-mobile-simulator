import React from "react";
import { GoMail } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { GrUserSettings } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";

const options = ["Summary", "Everyday", "Save & Invest", "Borrow", "Insure"];

const accounts = [
  {
    title: "Club lloyds",
    type: "current",
    accountId: "66-66-66 / 12345678",
    balance: "£520.33",
  },
  {
    title: "Club Lloyds Monthly Saver",
    type: "savings",
    accountId: "66-66-66 / 12345678",
    balance: "£120.10",
  },
  {
    title: "Club Lloyds Advantage ISA Saver",
    type: "savings",
    accountId: "66-66-66 / 12345678",
    balance: "£7429.10",
  },
];

const HomePage = () => {
  const id = "homePage";
  return (
    <div id={id}>
      <div
        id="home_header"
        className="px-[20px] flex justify-between py-[10px] items-center"
      >
        <GoMail
          className="cursor-pointer"
          style={{ color: "#333", fontSize: "20px" }}
        />
        <div id="greetingContainer" className="text-defaultText font-bold">
          Good afternoon Paul
        </div>
        <div id={`${id}_iconwrapper`} className="flex w-[50px] justify-between">
          <FaRegCircleQuestion
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "20px" }}
          />
          <GrUserSettings
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "20px" }}
          />
        </div>
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div
        id="type_options"
        className="overflow-x-scroll w-[800px] overflow-y-hidden scrollbar-hide py-[10px] cursor-pointer"
      >
        {options.map((option, index) => (
          <span
            // className=`rounded-[20px] w-[300px] text-[10px] border border-[#333] px-[10px] py-[5px] mx-[10px]

            className={clsx(
              "rounded-[20px] w-[300px] text-[10px] border border-[#333] px-[10px] py-[5px] mx-[10px]",
              index === 0 ? "bg-[#000] text-[#fff]" : "bg-gray-200 text-[#000]"
            )}
          >
            {option}
          </span>
        ))}
      </div>
      <div id="accountWrapper">
        {accounts.map((account) => (
          <div className="rounded-[10px] bg-white p-[10px] m-[10px] cursor-pointer">
            <div className="flex justify-between">
              <div>
                <div className="font-bold text-[14px]">{account.title}</div>
                <div className="text-[12px] text-lightGray">
                  {account.accountId}
                </div>
              </div>
              <div>{account.balance}</div>
            </div>
            {account.type === "current" && (
              <>
                <hr className="border-t-2 border-gray-222 mt-[10px]" />

                <div className="flex items-center justify-between mt-[10px]">
                  <span className="text-[10px]">Your overdraft options </span>
                  <FaArrowRight></FaArrowRight>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
