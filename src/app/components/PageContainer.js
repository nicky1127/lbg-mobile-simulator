import React from "react";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";

const PageContainer = (props) => {
  const { activeTab, onClickViewStatements } = props;
  return (
    <div id="pageContainer" className="pt-[30px] h-full">
      {activeTab === "cards" && <CardsPage />}
      {activeTab === "home" && (
        <HomePage onClickViewStatements={onClickViewStatements} />
      )}
    </div>
  );
};

export default PageContainer;
