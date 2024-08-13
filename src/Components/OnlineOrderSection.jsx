import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function OnlineOrderSection() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-full">
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img src='./Icons/Rectangle 7.png' className='h-full w-full object-cover' alt="Slide 1" />
<div className='absolute bottom-20 left-1/2  transform -translate-x-1/2 gap-y-28  flex flex-col items-center '>
<div className='flex flex-col items-center'><p className='text-[#130F0C] text-[22px] text-center '>GET 20% OFF YOUR ORDER OF $50 OR MORE<br></br>
Use code <span className='font-semibold '>“Chef20”</span>
</p>  
<span className="absolute bottom-36 w-[100px] h-[4px] bg-[#130F0C]"></span>
 </div>
          <button className="  text-[#130F0C]  w-[359px] h-[76px] border-[#130F0C] border-[3px] bg-transparent text-[24px] font-medium bg-opacity-20 hover:bg-opacity-30 transition-all ">
            Shop Now
          </button>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}
