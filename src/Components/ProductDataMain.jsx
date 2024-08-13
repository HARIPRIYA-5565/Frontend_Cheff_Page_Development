import React from "react";
import ProductDataCards from "./ProductDataCarosel";

export default function ProductData() {
  return (
    <>
      <div className="relative bg-gray-950 overflow-hidden pb-10">
        <div className="relative z-10 px-14 pb-12 pt-28 space-y-6">
          <h2 className="text-[#D29A5A] text-[38px] font-medium relative">
            CHEF MATT PRODUCTS
            <span className="absolute left-0 bottom-[-10px] w-[700px] h-[4px] bg-[#D29A5A]"></span>
          </h2>
          <p className="text-[#FFFFFF] text-[18px] pt-4">
            Shop Gourmet Chef Quality products from the Chef Matt brand.<br></br> Chef it
            yourself and Thank us later.
          </p>
        </div>
        <div className="absolute top-12 left-12 w-full flex justify-start z-0 ">
          <img
            src="./Icons/leavesImage.png"
            className="max-w-none"
            alt="Leaves"
            style={{ transform: "translateY(-50%)", width: 'auto', maxWidth: '100%' }}
          />
        </div>
        <div className="px-28"><ProductDataCards /></div>
      </div>
    </>
  );
}
