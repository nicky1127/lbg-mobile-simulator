"use client";
import React, { useState, useEffect } from "react";
import TabList from "./TabList";
import PageContainer from "./PageContainer";
import InitiationScreen from "./InitiationScreen";
import StatementsPage from "./pages/StatementsPage";

const ScreenContainer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isInitiationComplete, setIsInitiationComplete] = useState(false);

  const [stage, setStage] = useState("tabs");
  const onClickTab = (tab) => {
    if (tab) setActiveTab(tab);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsInitiationComplete(true);
    }, 2000);
  }, []);

  const onClickViewStatements = () => {
    setStage("statements");
  };
  const onClickCloseStatements = () => {
    setStage("tabs");
  };

  return (
    <div className="w-screenWidth h-screenHeight min-h-[500px] relative border-[15px] border-solid border-darkGray rounded-[60px] overflow-hidden m-auto md:my-8 bg-bgColor">
      {!isInitiationComplete ? (
        <InitiationScreen />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ScreenContainer;
