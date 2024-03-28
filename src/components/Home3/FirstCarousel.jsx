import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function FirstCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="home3swiper"
      >
        <SwiperSlide className='home3-swiper-slide  rounded-2xl'  style={{ height: '550px' }}></SwiperSlide>
        <SwiperSlide className='home3-swiper-slide rounded-2xl' style={{ height: '550px' }}></SwiperSlide>
        <SwiperSlide className='home3-swiper-slide rounded-2xl' style={{ height: '550px' }}></SwiperSlide>
        <SwiperSlide className='home3-swiper-slide rounded-2xl' style={{ height: '550px' }}></SwiperSlide>
        <SwiperSlide className='home3-swiper-slide rounded-2xl' style={{ height: '550px' }}></SwiperSlide>
      </Swiper>
    </>
  );
}
