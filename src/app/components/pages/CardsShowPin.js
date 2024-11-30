import React, { useState } from "react";
import clsx from "clsx";

import Image from "next/image";

import { LiaIdCard } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

const CardsShowPin = (props) => {
  const { onClickBack, focalCard } = props;

  const [showPin, setShowPin] = useState(true);
  const id = "CardsShowPin_showPin";

  const onClickPinBtn = () => {
    setShowPin(!showPin);
  };

  const maskedPin = (
    <div className="flex">
      {["*", "*", "*", "*"].map((el) => (
        <div className="mx-[4px] text-[35px]">{el}</div>
      ))}
    </div>
  );

  const visiblePin = (
    <div className="flex">
      {[...focalCard.pin].map((el) => (
        <div className="mx-[4px] text-[25px]">{el}</div>
      ))}
    </div>
  );

  const pinDom = showPin ? visiblePin : maskedPin;
  return (
    <div id={id} className="flex flex-col h-full relative">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center justify-between"
      >
        <FaArrowLeft
          className="cursor-pointer"
          style={{ color: "#333", fontSize: "20px" }}
          onClick={onClickBack}
        />
        <div id="headerContainer" className="text-defaultText font-bold">
          View PIN
        </div>
        <div></div>
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div className="flex flex-col items-center  p-[30px] pt-[80px] h-[74%]">
        <div className="font-bold">{pinDom}</div>
        <div className="flex flex-col justify-center items-center mt-[80px]">
          <div className="text-[11px] mt-[5px]">{focalCard.name}</div>
          <div className="text-[11px] mt-[5px]">{focalCard.pan}</div>
        </div>
        <div />
      </div>

      <div id="applePayBtn Wrapper" className=" flex justify-center w-full">
        <div
          onClick={onClickPinBtn}
          className="flex justify-center bg-[#000] w-[90%] p-[10px] m-[20px] rounded-[10px] cursor-pointer text-[#fff] text-[13px]"
        >
          {showPin ? "Hide PIN" : "Show PIN"}
        </div>
      </div>
    </div>
  );
};

export default CardsShowPin;
