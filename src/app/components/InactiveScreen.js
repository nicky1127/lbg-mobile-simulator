"use client";
import React, { useState } from "react";
import TabList from "./TabList";
import PageContainer from "./PageContainer";
import Image from "next/image";

const InitiationScreen = (props) => {
  const { onClickStart } = props;
  return (
    <div className="flex flex-col items-center w-full h-full justify-center bg-ltbGreen2 animate-fadeIn">
      <Image
        src="/images/lbg_banner.jpg" // Path to the local image (public directory)
        alt="My Image" // Alt text for the image
        width={230} // Width of the image
        height={220} // Height of the image
      />
      <div
        onClick={onClickStart}
        className="flex justify-center w-[50%] rounded-[10px] bg-black text-[#fff] text-[20px] p-[10px] font-bold font-serif mt-[10px] cursor-pointer"
      >
        START
      </div>
    </div>
  );
};

export default InitiationScreen;
