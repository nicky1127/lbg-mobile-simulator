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

const HomePage = () => {
  const id = "homePage";
  const [stage, setStage] = useState("overview");
  const [focalAccount, setFocalAccount] = useState({});

  const onClickBack = (account) => {
    setStage("overview");
  };

  const onClickAccount = (account) => {
    console.log("account", account);
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
        />
      )}
      {/* {stage === "showPin" && (
        <CardsShowPin onClickBack={onClickSBack} focalCard={focalCard} />
      )} */}
    </div>
  );
};

export default HomePage;
