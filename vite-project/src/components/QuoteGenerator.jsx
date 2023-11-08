import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNextQuote from "../utils/useNextQuote";
import { addInitialQuote } from "../utils/quoteSlice";

const QuoteGenerator = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const data = await fetch("https://api.quotable.io/random/");
    const json = await data.json();
    dispatch(addInitialQuote(json));
  };

  return (
    <button
      className="w-[240px] h-[45px] relative top-[624px] left-[623px] rounded-[30px] bg-[#009C51] shadow-3xl text-[26px] font-['Poppins'] font-normal leading-[39px] text-[#FFFFFF] xsm:relative xsm:top-56 xsm:left-[54px] xsm:text-lg"
      onClick={handleClick}
    >
      Next Quote
    </button>
  );
};

export default QuoteGenerator;
