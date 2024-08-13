import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../Components/ProductDataCards.css';


export default function ProductDataCards() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      navigation={true}
      pagination={false} 
      modules={[Navigation]}
      className="mySwiper w-full h-full"
    >
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 5.png' className='w-[234px] h-[234px]' alt="Cinnamon Honey"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">CINNAMON HONEY</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$12.00 $9.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 6.png' className='w-[234px] h-[234px]' alt="Coconut Oil"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">COCONUT OIL</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$20.00 $15.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 7.png' className='w-[234px] h-[234px]' alt="Mango Honey"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">MANGO HONEY</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$9.00 $6.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 8.png' className='w-[234px] h-[234px]' alt="Honey Habanero"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">HONEY HABANERO</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$12.00 $9.00</p>
        </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 5.png' className='w-[234px] h-[234px]' alt="Cinnamon Honey"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">CINNAMON HONEY</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$12.00 $9.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 6.png' className='w-[234px] h-[234px]' alt="Coconut Oil"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">COCONUT OIL</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$20.00 $15.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 7.png' className='w-[234px] h-[234px]' alt="Mango Honey"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">MANGO HONEY</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$9.00 $6.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 bg-gray-950 text-white rounded-lg flex flex-col items-center">
          <img src='./Icons/Ellipse 8.png' className='w-[234px] h-[234px]' alt="Honey Habanero"/>
          <p className="mt-2 text-[#D29A5A] text-[18px] font-medium text-center">HONEY HABANERO</p>
          <p className='text-[#FFFFFF] text-[14px] text-center'>$12.00 $9.00</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
