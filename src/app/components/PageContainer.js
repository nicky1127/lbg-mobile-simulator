"use client";
import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import SearchPage from "./pages/SearchPage";
import { useGlobalContext } from "../../context/GlobalContext";

const PageContainer = (props) => {
  const { activeTab, onClickViewStatements } = props;

  const { screen } = useGlobalContext();

  return (
    <div id="pageContainer" className="pt-[30px] h-full">
      {activeTab === "cards" && <CardsPage />}
      {activeTab === "home" && (
        <HomePage onClickViewStatements={onClickViewStatements} />
      )}
      {activeTab === "search" && <SearchPage />}
    </div>
  );
};

export default PageContainer;
