import React from "react";

export default function SpecialPromotionSection() {
  return (
    <div className="relative">
      <img
        src="./Icons/Rectangle 16.png"
        alt="Promotion Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  justify-center  px-12  space-y-12">
        <h2 className="text-[#D29A5A] text-[38px] font-medium underline underline-offset-8">SIGN UP SPECIAL PROMOTIONS</h2>
        <p className="text-[#FFFFFF] text-[18px]">
    Get exclusive deals you won’t find anywhere else straight to your inbox!
        </p>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-white bg-opacity-10 border  text-[#FFFFFF] p-2 focus:outline-none w-[516px]"
          />
          <button className="bg-[#D29A5A] text-[#FFFFFF] text-[14px] py-2 px-4 w-[188px] h-[40px] font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
