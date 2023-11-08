import React from "react";
import useTagsdata from "../utils/useTagsdata";
import droparrow from "../assets/droparrow.png";
import { useDispatch, useSelector } from "react-redux";
import { addInitialQuote, addTags } from "../utils/quoteSlice";

const Dropdown = () => {
  const TagsArray = useTagsdata();
  if (!TagsArray) return;

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const data = await fetch(
      `https://api.quotable.io/quotes?tags=${e.target.value}`
    );
    const json = await data.json();
    const randomJson =
      json?.results[Math.floor(Math.random() * json?.results.length)];
    dispatch(addInitialQuote(randomJson));
  };

  return (
    <div className="">
      <select
        className="w-[253px] h-[38px] bg-[#D9D9D9] rounded-[30px] relative top-[511px] left-[610px] focus:outline-none px-4 appearance-none xsm:relative xsm:top-40  xsm:left-12"
        onChange={(e) => handleChange(e)}
      >
        {TagsArray.map((tag) => (
          <option value={tag?.slug}>{tag?.name}</option>
        ))}
      </select>

      <div className="pointer-events-none">
        <img
          className="z-30 absolute top-[518px] left-[830px] xsm:absolute xsm:top-[378px] xsm:left-[260px]"
          src={droparrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default Dropdown;
