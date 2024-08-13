import React from 'react';

export default function SideBar({ isOpen, setIsOpen }) {
  return (
    <div className={`absolute top-0 left-0 ${isOpen ? 'w-60' : 'w-20'} h-full bg-transparent transition-width duration-300 z-30`}>
      <div className="flex flex-col h-full bg-gray-800 bg-opacity-50 text-white backdrop-blur-md">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6 m-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6 m-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          )}
        </button>
        <div className={`flex flex-col justify-between h-full ${isOpen ? 'items-start py-2' : 'items-center py-4'}`}>
          <div className="space-y-2 flex flex-col">
            {isOpen ? (
              <>
                <div className="px-4 flex flex-col">
                  <img src="./Icons/ChefSignatureImg.png" className="w-[330px] h-[221px] px-2" alt="Chef Signature" />
                  <a href="#home" className="mb-4 hover:text-[#D29A5A] text-[22px]">Home</a>
                  <a href="#products" className="mb-4 hover:text-[#D29A5A] text-[22px]">Products</a>
                  <a href="#" className="mb-4 hover:text-[#D29A5A] text-[22px]">Meet Chef Matt</a>
                  <a href="#special-promotion" className="mb-4 hover:text-[#D29A5A] text-[22px]">FAQ</a>
                  <a href="#navbar" className="hover:text-[#D29A5A] text-[22px]">Contact With Us</a>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center">
                <img src="./Icons/ChefMattSigImg.png" className="w-[229px] h-[500px] px-2" alt="Chef Matt Signature" />
              </div>
            )}
          </div>
          {isOpen && (
            <>
              <div className="px-2">
                <p className="text-[12px] pb-1 text-center">
                  TEXT SUPPORT 24/7 <span className="text-[#D29A5A]">070-7782-9137</span>
                </p>
                <div className="border-2 border-white w-full"></div>
                <div className="flex py-2 gap-x-20">
                  <div className="flex gap-x-2 items-center">
                    <img src="./Icons/Bag_alt.png" className="w-[20px] h-[20px]" alt="Cart" />
                    <span className="text-[12px]">CART</span>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <img src="./Icons/Favorite.png" className="w-[20px] h-[20px]" alt="Wishlist" />
                    <span className="text-[12px]">WISHLIST</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
