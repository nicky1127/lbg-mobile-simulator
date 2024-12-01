"use client";
import React, { useState, useEffect } from "react";
import TabList from "./TabList";
import PageContainer from "./PageContainer";
import Image from "next/image";
import { Circle } from "rc-progress";

const InitiationScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1)); // Loop progress from 0 to 100
    }, 18); // Update every 10ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className=" animate-fadeOut flex items-center w-full justify-center ">
      <Image
        src="/images/InitialScreen.jpg" // Path to the local image (public directory)
        alt="My Image" // Alt text for the image
        fill
        // width={360} // Width of the image
        // height={100} // Height of the image
      />
      <div className="absolute bottom-[30%] flex flex-col justify-center items-center">
        <div className="w-[40px] h-[40px] mb-[10px]">
          <Circle
            percent={progress}
            strokeWidth={10}
            strokeColor="#333"
            trailWidth={10}
            trailColor="#f0f0f0"
          />
        </div>
        <div>Loading customer mobile data...</div>
      </div>
    </div>
  );
};

export default InitiationScreen;
