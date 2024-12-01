import React from "react";

import { RxCross2 } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa6";

const options = ["Summary", "Everyday", "Save & Invest", "Borrow", "Insure"];

const AccountOverview = (props) => {
  const { onClickBack, pdfTitle } = props;
  const id = "statement_month_list_overview";
  return (
    <div id={id} className="h-full relative">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center sticky"
      >
        <div id={`${id}_iconwrapper_1`} className="absolute left-[15px]">
          <IoIosArrowBack
            onClick={onClickBack}
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "25px" }}
          />
        </div>
        <div
          id="greetingContainer"
          className="text-defaultText font-bold font-sans"
        >
          {pdfTitle}
        </div>
        <div
          id={`${id}_iconwrapper_2`}
          className="flex justify-between absolute right-[15px]"
        >
          <IoShareOutline
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "25px" }}
          />
        </div>
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div className="h-full w-full">
        <div className="flex justify-center h-[50%] items-center">
          <FaFilePdf
            className="cursor-pointer "
            style={{ color: "#333", fontSize: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
