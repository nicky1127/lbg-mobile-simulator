"use client";
import React, { useState } from "react";
import clsx from "clsx";

import CardsOverview from "./CardsOverview";

import CardsViewPin from "./CardsViewPin";
import CardsShowPin from "./CardsShowPin";

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

  console.log("stage", stage);

  const onClickViewPin = () => {
    setstage("viewPin");
  };

  const onClickShowPin = () => {
    setstage("showPin");
  };

  const onClickSBack = () => {
    setstage("overview");
  };
  return (
    <div id={id} className="flex flex-col h-full">
      {stage === "overview" && (
        <CardsOverview onClickViewPin={onClickViewPin} cards={cards} />
      )}
      {stage === "viewPin" && (
        <CardsViewPin
          onClickShowPin={onClickShowPin}
          onClickSBack={onClickSBack}
        />
      )}
      {stage === "showPin" && (
        <CardsShowPin onClickBack={onClickSBack} focalCard={focalCard} />
      )}
    </div>
  );
};

export default CardsPage;
