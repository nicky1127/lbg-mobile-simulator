"use client";
import React, { useState } from "react";
import clsx from "clsx";
import ChatbotScreen from "./ChatbotScreen";

const HomePage = (props) => {
  const { onClickViewStatements } = props;
  const id = "searchPage";
  const [stage, setStage] = useState("chatbot");
  const [focalAccount, setFocalAccount] = useState({});

  const onClickBack = () => {
    setStage("overview");
  };

  const onClickAccount = (account) => {
    account && setFocalAccount(account);
    setStage("viewTransactions");
  };

  return (
    <div id={id} className="flex flex-col h-full">
      {stage === "chatbot" && <ChatbotScreen onClickAccount={onClickAccount} />}
    </div>
  );
};

export default HomePage;
