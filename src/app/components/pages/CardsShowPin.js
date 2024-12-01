import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const CardsShowPin = (props) => {
  const { onClickBack, focalCard } = props;

  const [showPin, setShowPin] = useState(true);
  const id = "CardsShowPin_showPin";

  const onClickPinBtn = () => {
    setShowPin(!showPin);
  };

  const maskedPin = (
    <div className="flex">
      {["*", "*", "*", "*"].map((el, idx) => (
        <div
          key={`maskPin_asterisk_${idx}`}
          className="mx-[4px] text-[35px] font-sans"
        >
          {el}
        </div>
      ))}
    </div>
  );

  const visiblePin = (
    <div className="flex">
      {[...focalCard.pin].map((el, idx) => (
        <div key={`visiblePin_char_${idx}`} className="mx-[4px] text-[25px]">
          {el}
        </div>
      ))}
    </div>
  );

  const pinDom = showPin ? visiblePin : maskedPin;
  return (
    <div id={id} className="flex flex-col h-full relative">
      <div
        id="home_header"
        className="px-[20px] flex justify-center py-[10px] items-center "
      >
        <FaArrowLeft
          className="cursor-pointer absolute left-[15px]"
          style={{ color: "#333", fontSize: "20px" }}
          onClick={onClickBack}
        />
        <div id="headerContainer" className="text-defaultText font-bold">
          View PIN
        </div>
        {/* <div></div> */}
      </div>
      <hr className="border-t-1  border-[#333]" />
      <div className="flex flex-col items-center  p-[30px] pt-[80px] h-[74%]">
        <div className="font-bold h-[120px]">{pinDom}</div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[14px] mt-[5px]">{focalCard.name}</div>
          <div className="text-[14px] mt-[5px] font-bold font-sans">
            {focalCard.pan}
          </div>
        </div>
        <div />
      </div>

      <div id="applePayBtn Wrapper" className=" flex justify-center w-full">
        <div
          onClick={onClickPinBtn}
          className="flex justify-center bg-[#000] w-[90%] p-[10px] m-[20px] font-bold rounded-[10px] cursor-pointer text-[#fff] text-[13px]"
        >
          {showPin ? "Hide PIN" : "Show PIN"}
        </div>
      </div>
    </div>
  );
};

export default CardsShowPin;
