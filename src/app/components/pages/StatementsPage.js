"use client";
import React, { useState } from "react";
import StatementMonthList from "./StatementMonthList";
import ViewPdf from "./ViewPdf";

const StatementPage = (props) => {
  const { onClickCloseStatements } = props;
  const id = "statementPage";
  const [stage, setStage] = useState("overview");
  const [pdfTitle, setPdfTitle] = useState("");

  const onClickBack = () => {
    setStage("overview");
  };
  const onClickMonth = (title) => {
    setStage("viewPdf");
    setPdfTitle(title);
  };

  return (
    <div id={id} className="flex flex-col h-full">
      {stage === "overview" && (
        <StatementMonthList
          onClickMonth={onClickMonth}
          onClickCloseStatements={onClickCloseStatements}
        />
      )}
      {stage === "viewPdf" && (
        <ViewPdf pdfTitle={pdfTitle} onClickBack={onClickBack} />
      )}
    </div>
  );
};

export default StatementPage;
