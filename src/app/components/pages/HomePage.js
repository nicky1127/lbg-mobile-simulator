"use client";
import React, { useState } from "react";
import { GoMail } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { GrUserSettings } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
import AccountOverview from "./AccountOverview";
import AccountTransactions from "./AccountTransactions";
import { switches } from "@/app/constants/switch";

const HomePage = (props) => {
  const { onClickViewStatements } = props;
  const id = "homePage";
  const [stage, setStage] = useState("overview");
  const [focalAccount, setFocalAccount] = useState({});

  const onClickBack = () => {
    setStage("overview");
  };

  const onClickAccount = (account) => {
    if (!switches.isAdvisorDriven) return;
    account && setFocalAccount(account);
    setStage("viewTransactions");
  };

  return (
    <div id={id} className="flex flex-col h-full">
      {stage === "overview" && (
        <AccountOverview onClickAccount={onClickAccount} />
      )}
      {stage === "viewTransactions" && (
        <AccountTransactions
          focalAccount={focalAccount}
          onClickBack={onClickBack}
          onClickViewStatements={onClickViewStatements}
        />
      )}
      {/* {stage === "showPin" && (
        <CardsShowPin onClickBack={onClickSBack} focalCard={focalCard} />
      )} */}
    </div>
  );
};

export default HomePage;
