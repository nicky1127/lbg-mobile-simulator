"use client";
import React, { useState } from "react";
import TabList from "./TabList";
import PageContainer from "./PageContainer";
import Image from "next/image";

const InitiationScreen = () => {
  return (
    <div className="flex items-center w-full justify-center ">
      <Image
        src="/images/InitialScreen.jpg" // Path to the local image (public directory)
        alt="My Image" // Alt text for the image
        fill
        // width={360} // Width of the image
        // height={100} // Height of the image
      />
      <div className="absolute bottom-[30%]">
        Loading customer mobile data...
      </div>
    </div>
  );
};

export default InitiationScreen;
