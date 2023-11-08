import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookMark } from "../utils/bookmarkSlice";
import bookmarksvg from "../assets/bookmarksvg.svg";
import { InfinitySpin } from "react-loader-spinner";

const QuoteContainer = () => {
  const dispatch = useDispatch();

  const quote = useSelector((store) => store.quote.initialQuotes);
  if (!quote)
    return (
      <div className="flex justify-center items-center flex-1 ml-[400px] w-full">
        <InfinitySpin width="1000" className="self-center" color="#ffffff" />;
      </div>
    );

  const handleBookMark = () => {
    dispatch(
      addBookMark({ content: quote?.content, author: quote?.authorSlug })
    );
  };

  return (
    <div className="w-[773px] h-[263px] rou0nded-[30px] bg-[#D05252] absolute top-[153px] left-[396px] xsm:relative xsm:left-6 xsm:top-20 xsm:h-[210px] xsm:rounded-xl xsm:w-[310px] xsm:text-center">
      <p className='w-[521px] h-[90px] font-["Poppins"] font-normal text-3xl leading-[45px] text-white absolute left-[126px] top-[23px] xsm:absolute xsm:top-2 xsm:left-0 xsm:w-[310px] xsm:h-[300px] xsm:text-base xsm:text-justify xsm:py-4 xsm:flex xsm:justify-center xsm:font-semibold xsm: px-4'>
        {quote?.content}
      </p>
      <p className="w-[200px] h-[27px] absolute top-[208px] left-[274px] text-white font-['Poppins] font-bold text-lg leading-[27px] xsm:absolute xsm:top-40 xsm:left-3 xsm:font-normal xsm:text-base xsm:text-left xsm:w-full">
        - {quote?.authorSlug}
      </p>
      <button
        className="absolute top-[217px] left-[619px] xsm:absolute xsm:top-[166px] xsm:left-[275px]"
        onClick={handleBookMark}
      >
        <img className="xsm:w-6 xsm:h-5" src={bookmarksvg} alt="" />
      </button>
    </div>
  );
};

export default QuoteContainer;
