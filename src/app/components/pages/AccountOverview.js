import React from "react";

import Image from "next/image";
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
  const id = "accountOverview_account_overview";
  return (
    <div id={id} className="h-full relative">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center relative"
      >
        <GoMail
          className="cursor-pointer absolute left-[15px]"
          style={{ color: "#333", fontSize: "20px" }}
        />
        <div
          id="greetingContainer"
          className="text-defaultText font-bold font-sans"
        >
          {`Good afternoon ${customerDetails.firstname}`}
        </div>
        <div
          id={`${id}_iconwrapper`}
          className="flex w-[60px] justify-between absolute right-[15px]"
        >
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
            className={`flex-[0_0_25%]  whitespace-nowrap flex justify-center rounded-[8px] text-[11px] border border-[#333] px-[10px] py-[5px] mx-[7px] ${
              index === 0 ? "bg-black text-[#fff]" : "bg-bgColor text-[#000]"
            } `}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="h-[550px] overflow-y-auto scrollbar-hide">
        <div id="accountWrapper">
          {accounts.map((account) => (
            <div
              key={account.title}
              className="rounded-[10px] bg-white p-[15px] m-[10px] cursor-pointer"
              onClick={() => onClickAccount(account)}
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  {account.type === "pension" && (
                    <div className="border border-gray-500 rounded-[5px] w-[25px] h-[25px] relative overflow-hidden mr-[10px]">
                      <Image
                        src="/images/scottish-widow-logo.webp" // Path to the local image (public directory)
                        alt="My Image" // Alt text for the image
                        layout="fill" // This makes the image fill its parent container
                        objectFit="cover" // Ensures the image covers the area, without stretching it
                        objectPosition="center"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-[12px]">{account.title}</div>
                    <div className="text-[12px] text-lightGray">
                      {account.accountId}
                    </div>
                  </div>
                </div>
                <div className="font-sans font-bold text-[20px]">
                  {account.balance}
                </div>
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

        <div className="flex items-center w-full justify-center ">
          <Image
            src="/images/overdraft.jpg" // Path to the local image (public directory)
            alt="My Image" // Alt text for the image
            // fill
            width={360} // Width of the image
            height={80} // Height of the image
          />
        </div>
        <div className="flex items-center w-full justify-center ">
          <Image
            src="/images/all_caught_up.jpeg" // Path to the local image (public directory)
            alt="My Image" // Alt text for the image
            width={80} // Width of the image
            height={80} // Height of the image
          />
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
