"use client";
import React, { useState } from "react";
import TabList from "./TabList";
import PageContainer from "./PageContainer";

const ScreenContainer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const onClickTab = (tab) => {
    if (tab) setActiveTab(tab);
  };
  return (
    <div className="w-screenWidth h-screenHeight min-h-[650px] relative border-[15px] border-solid border-darkGray rounded-[60px] overflow-hidden m-auto my-8 bg-bgColor">
      <div
        id="statusBar"
        className="absolute z-[2] left-0 right-0 m-auto w-1/2 h-[30px] bg-darkGray rounded-tl-none rounded-tr-none rounded-bl-[20px] rounded-br-[20px]"
      ></div>
      <div
        id="mainContainer"
        className="max-w-full max-h-full h-full flex relative z=[1]"
      >
        <div
          id="mainWrapper"
          className="w-full box-border flex items-stretch flex-col m-0 min-h-0 min-w-0 p-0 relative z-0"
        >
          <div
            id="contentContainer"
            className="box-border h-full flex items-stretch flex-col m-0 min-h-0 min-w-0 p-0 relative z-0"
          >
            <PageContainer activeTab={activeTab} />
          </div>
          <div
            id="tabContainer"
            className="absolute bottom-0 w-full border-t border-t-[rgb(216,216,216)] bg-white flex pb-[2rem]"
          >
            <TabList activeTab={activeTab} onClickTab={onClickTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenContainer;
