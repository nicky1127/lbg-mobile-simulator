import React from "react";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";

const PageContainer = (props) => {
  const { activeTab } = props;
  return (
    <div id="pageContainer" className="pt-[30px] h-full">
      {activeTab === "cards" && <CardsPage />}
      {activeTab === "home" && <HomePage />}
    </div>
  );
};

export default PageContainer;
