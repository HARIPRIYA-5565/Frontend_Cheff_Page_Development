import React from "react";

export  default function NavbarSection(){
return(
<div className="flex justify-around py-12 border-b-4 border-[#D29A5A]">
<div>
<div className="flex gap-x-4 gap-y-2">
<img src="./Icons/Vector.png" className="w-[36px] h-[36px]"></img>
<span className="text-[#D29A5A] text-[24px]">FREE SHIPPING WORLDWIDE</span>
</div>
<div className="text-[18px] text-white px-14">
Guaranteed Delivery
</div>
</div>
<div>
<div className="flex gap-x-4 gap-y-2">
<img src="./Icons/Vector (1).png" className="w-[36px] h-[36px]"></img>
<span className="text-[#D29A5A] text-[24px]">24/7 CUSTOMER SERVICE</span>
</div>
<div className="text-[18px] text-white px-14">
Text Us 24/7 at 070-7782-9137
</div>
</div>
<div>
<div className="flex gap-x-4 gap-y-2">
<img src="./Icons/Vector (2).png" className="w-[36px] h-[36px]"></img>
<span className="text-[#D29A5A] text-[24px]">FQUALITY GUARANTEE!</span>
</div>
<div className="text-[18px] text-white px-14">
Send Within 30 Days
</div>
</div>
</div>
)
}