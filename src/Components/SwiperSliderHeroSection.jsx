import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function SwiperSliderHeroSection() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-full">
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img src='./Icons/slide4_image 1.png' className='h-full w-full object-cover' alt="Slide 1" />
          <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2  text-[#FFFFFF]  w-[359px] h-[76px] border-[#FFFFFF] border-[3px] bg-transparent text-[24px] font-medium bg-opacity-20 hover:bg-opacity-30 transition-all ">
            Meet the Chef
          </button>
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
