"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

import CardsOverview from "./CardsOverview";

import CardsViewPin from "./CardsViewPin";
import CardsShowPin from "./CardsShowPin";
import { switches } from "../../constants/switch";

import { useGlobalContext } from "../../../context/GlobalContext";

const cards = [
  {
    title: "LLOYDS BANK",
    name: "Club Lloyds",
    type: "Debit",
    cardHolder: "Mr. Paul Smith",
    expiryDate: "11/26",
    pan: "**** 1234",
    pin: "8765",
  },
];

const CardsPage = () => {
  const id = "cardsPage";
  const [stage, setstage] = useState("overview");
  const [focalCard, setFocalCard] = useState(cards[0]);

  const [isHighlighted, setIsHighlighted] = useState(null);

  console.log("stage", stage);

  const { screen } = useGlobalContext();

  useEffect(() => {
    if (screen) {
      switch (screen) {
        case "screen-view-pin":
          setstage("viewPin");
          break;
      }
    }
  }, [screen]);

  const onClickViewPin = () => {
    setIsHighlighted(1);
    if (!switches.isAdvisorDriven) return;
    setstage("viewPin");
  };

  const onClickShowPin = () => {
    setstage("showPin");
  };

  const onClickBack = () => {
    setstage("overview");
  };
  return (
    <div id={id} className="flex flex-col h-full">
      {stage === "overview" && (
        <CardsOverview
          onClickViewPin={onClickViewPin}
          cards={cards}
          isHighlighted={isHighlighted}
          setIsHighlighted={setIsHighlighted}
        />
      )}
      {stage === "viewPin" && (
        <CardsViewPin
          onClickShowPin={onClickShowPin}
          onClickBack={onClickBack}
        />
      )}
      {stage === "showPin" && (
        <CardsShowPin onClickBack={onClickBack} focalCard={focalCard} />
      )}
    </div>
  );
};

export default CardsPage;
