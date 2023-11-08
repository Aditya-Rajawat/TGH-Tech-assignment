import React from "react";
import { useSelector } from "react-redux";

const Bookmark = () => {
  const bookmarks = useSelector((store) => store.bookmark.bookmarks);
  console.log(bookmarks);

  return (
    <div className="">
        <div className="h-auto pb-80 w-[1512px] absolute bg-gradient-to-r from-[#5E2AB2] to-[#161E6C] xsm:w-[360px] xsm:absolute">
      {bookmarks.map((bookmark) => (
        <div className="w-[875px] h-[298px] relative top-[142px] left-[318px] rounded-[30px] bg-[#D05252] mb-4 xsm:relative xsm:left-6 xsm:top-20 xsm:h-[210px] xsm:rounded-xl xsm:w-[310px] xsm:text-center ">
          <p className="w-[521px] h-[90px] absolute top-[32px] left-[91px] font-['Poppins'] font-normal text-[30px] leading-[45px] text-[#FFFFFF] xsm:absolute xsm:top-2 xsm:left-0 xsm:w-[310px] xsm:h-[300px] xsm:text-base xsm:text-justify xsm:py-4 xsm:flex xsm:justify-center xsm:font-semibold xsm: px-4">
            {bookmark["content"]}
          </p>
          <p className="w-[145px] h-[27px] absolute top-[234px] left-[343px] font-['Poppins'] font-bold text-[18px] leading-[27px] text-[#FFFFFF] xsm:absolute xsm:top-40 xsm:left-3 xsm:font-normal xsm:text-base xsm:text-left xsm:w-full">
            -{bookmark["author"]}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Bookmark;
