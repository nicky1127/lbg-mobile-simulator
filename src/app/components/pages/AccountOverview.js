import React from "react";
import { GoMail } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { GrUserSettings } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { customerDetails, accounts } from "../../constants/constants";
import clsx from "clsx";

const options = ["Summary", "Everyday", "Save & Invest", "Borrow", "Insure"];

const AccountOverview = (props) => {
  const { onClickAccount } = props;
  const id = "AccountOverview_account_overview";
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
          {`Good afternoon ${customerDetails.firstname}`}
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
        className="overflow-x-scroll flex overflow-y-hidden scrollbar-hide py-[10px] cursor-pointer "
      >
        {options.map((option, index) => (
          <div
            key={option}
            className={`flex-[0_0_25%]  whitespace-nowrap flex justify-center rounded-[8px] text-[9px] border border-[#333] px-[10px] py-[5px] mx-[7px] ${
              index === 0 ? "bg-black text-[#fff]" : "bg-gray-200 text-[#000]"
            } `}
          >
            {option}
          </div>
        ))}
      </div>
      <div id="accountWrapper">
        {accounts.map((account) => (
          <div
            key={account.title}
            className="rounded-[10px] bg-white p-[10px] m-[10px] cursor-pointer"
            onClick={() => onClickAccount(account)}
          >
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

export default AccountOverview;
