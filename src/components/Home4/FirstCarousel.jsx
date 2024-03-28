import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from "../../images/Card1.png"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const FirstCarousel = () => {
  return (
    <div className="">
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={44}
      slidesPerView={4}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}

      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 4,
        },
      }}
      modules={[ Pagination, Navigation]}
      className=""
    >


      <SwiperSlide className='flex p-2 items-center md:flex-row flex-col rounded-3xl  md:px-4 md:py-10 justify-center'>
         <img src={Image} alt="" />
      </SwiperSlide>

      <SwiperSlide className='flex p-2 items-center md:flex-row flex-col rounded-3xl  md:px-4 md:py-10 justify-center'>
         <img src={Image} alt="" />
      </SwiperSlide>

      <SwiperSlide className='flex p-2 items-center md:flex-row flex-col rounded-3xl  md:px-4 md:py-10 justify-center'>
         <img src={Image} alt="" />
      </SwiperSlide>

      <SwiperSlide className='flex p-2 items-center md:flex-row flex-col rounded-3xl  md:px-4 md:py-10 justify-center'>
         <img src={Image} alt="" />
      </SwiperSlide>

      <SwiperSlide className='flex p-2 items-center md:flex-row flex-col rounded-3xl  md:px-4 md:py-10 justify-center'>
         <img src={Image} alt="" />
      </SwiperSlide>
      




      <div   className="slider-controler  ">
        <div className="swiper-button-prev slider-arrow">
             <button className=''>
             <FontAwesomeIcon  className='text-black border  border-black py-1 px-3 rounded-full ' icon={faAngleLeft}/>
           </button>
        </div>
        <div className="swiper-button-next slider-arrow">

            <button >
        <FontAwesomeIcon  className='text-black border  border-black py-1 px-3 rounded-full ' icon={faAngleRight}/>          
        </button>
        </div>
        
      </div>

      
    </Swiper>
  </div>
  )
}

export default FirstCarousel