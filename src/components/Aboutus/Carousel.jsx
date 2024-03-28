import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="md:w-[800px] h-[350px]"

      >
        <SwiperSlide  className='bg-white '>Slide 1</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 1</SwiperSlide>


       
      </Swiper>
    </>
  );
}
