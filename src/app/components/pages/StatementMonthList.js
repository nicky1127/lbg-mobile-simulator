import React from "react";

import { RxCross2 } from "react-icons/rx";
import { GrDocumentDownload } from "react-icons/gr";
import { monthsList } from "../../constants/constants";

const AccountOverview = (props) => {
  const { onClickMonth, onClickCloseStatements } = props;
  const id = "statement_month_list_overview";
  return (
    <div id={id} className="h-full relative">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center sticky"
      >
        <div
          id="greetingContainer"
          className="text-defaultText font-bold font-sans"
        >
          {`Download or print statements`}
        </div>
        <div
          id={`${id}_iconwrapper`}
          className="flex justify-between absolute right-[15px]"
        >
          <RxCross2
            className="cursor-pointer"
            style={{ color: "#333", fontSize: "25px" }}
            onClick={onClickCloseStatements}
          />
        </div>
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div className="overflow-y-scroll h-full scrollbar-hide pb-[80px]">
        <div className="bg-ltbGreen text-white px-[10px] py-[25px]">
          <div className="flex items-center">
            <GrDocumentDownload
              className="cursor-pointer mr-[5px]"
              style={{ color: "#fff", fontSize: "20px" }}
            />

            <span className="font-sans font-bold text-[14px]">
              Do it online, get it faster
            </span>
          </div>
          <div className="text-[12px]">
            <div className="mt-[10px] leading-none">
              Whether you need to prove who you are, your address or your
              income, the quickest way could be to download a summary of your
              transactions. You can then save, email or pint it from your
              device.
            </div>
            <div className="mt-[10px] leading-none">
              If you need a full statement, it can be found and downloaded from
              your{" "}
              <span className="underline cursor-pointer">digital inbox</span>.
              If you need further help you can{" "}
              <span className="underline cursor-pointer">chat with us</span>.
            </div>
          </div>
        </div>
        <div id={`${id}_month_wrapper`} className="pl-[15px]">
          {monthsList.map((list, idx) => (
            <div key={`${list.year}_${idx}`}>
              <div className="py-[10px] text-[12px] text-lightGray">
                {list.year}
              </div>
              {list?.months.map((month, index) => (
                <div
                  key={`${list.year}_${month}_${idx}`}
                  onClick={() => onClickMonth(month + " " + list.year)}
                  className={`py-[5px] text-[14px] cursor-pointer ${
                    index < list.months.length - 1 && "border-b border-gray-300"
                  }`}
                >
                  {month}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
