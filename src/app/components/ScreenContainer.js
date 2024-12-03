"use client";
import React, { useState, useEffect } from "react";
import TabList from "./TabList";
import PageContainer from "./PageContainer";
import InitiationScreen from "./InitiationScreen";
import InactiveScreen from "./InactiveScreen";
import StatementsPage from "./pages/StatementsPage";

import { useGlobalContext } from "../../context/GlobalContext";
import { switches } from "../constants/switch";

const ScreenContainer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [appStatus, setAppStatus] = useState("inactive");

  const { screen } = useGlobalContext();

  const [stage, setStage] = useState("tabs");

  useEffect(() => {
    if (screen) {
      switch (screen) {
        case "screen-home":
          setActiveTab("home");
          break;
        case "screen-card":
          setActiveTab("cards");
          break;
        case "screen-search":
          setActiveTab("search");
          break;
      }
    }
  }, [screen]);

  const onClickTab = (tab) => {
    if (tab && switches.isAdvisorDriven) setActiveTab(tab);
  };

  const onClickViewStatements = () => {
    setStage("statements");
  };
  const onClickCloseStatements = () => {
    setStage("tabs");
  };

  const onClickStart = () => {
    setAppStatus("initiating");

    setTimeout(() => {
      setAppStatus("active");
    }, 3000);
  };

  return (
    <div className="w-screenWidth h-screenHeight min-h-[500px] relative border-[15px] border-solid border-darkGray rounded-[60px] overflow-hidden m-auto md:my-8 bg-bgColor">
      <div className="h-full w-full">
        <div
          id="statusBar"
          className="absolute z-[2] left-0 right-0 m-auto w-1/2 h-[30px] bg-darkGray rounded-tl-none rounded-tr-none rounded-bl-[20px] rounded-br-[20px]"
        />
        {appStatus === "inactive" && (
          <InactiveScreen onClickStart={onClickStart} />
        )}
        {appStatus === "initiating" && <InitiationScreen />}
        {appStatus === "active" && (
          <div
            id="mainContainer"
            className="animate-fadeIn max-w-full max-h-full h-full flex relative z=[1]"
          >
            <div
              id="mainWrapper"
              className="w-full box-border flex items-stretch flex-col m-0 min-h-0 min-w-0 p-0 relative z-0"
            >
              {stage === "statements" && (
                <div
                  id="contentContainer"
                  className="box-border h-full flex items-stretch pt-[30px] flex-col m-0 min-h-0 min-w-0 p-0 relative z-0"
                >
                  <StatementsPage
                    onClickCloseStatements={onClickCloseStatements}
                  />
                </div>
              )}

              {stage === "tabs" && (
                <>
                  <div
                    id="contentContainer"
                    className="box-border h-full flex items-stretch flex-col m-0 min-h-0 min-w-0 p-0 relative z-0"
                  >
                    <PageContainer
                      activeTab={activeTab}
                      onClickViewStatements={onClickViewStatements}
                    />
                  </div>
                  <div
                    id="tabContainer"
                    className="absolute bottom-0 w-full border-t border-t-[rgb(216,216,216)] bg-white flex pb-[2rem]"
                  >
                    <TabList activeTab={activeTab} onClickTab={onClickTab} />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenContainer;
