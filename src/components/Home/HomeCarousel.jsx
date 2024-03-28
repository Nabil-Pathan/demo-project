import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Vector1 from "../../images/Vector1.png"
import Vector2 from "../../images/Vector2.png"
import Vector3 from "../../images/Vector3.png"
import Vector4 from "../../images/Vector4.png"
import Vector5 from "../../images/Vector5.png"
import Vector6 from "../../images/Vector6.png"


import Ellipse  from "../../images/Ellipse.png"
import Ellipse2  from "../../images/Ellipse2.png"
import Ellipse3 from "../../images/Ellipse3.png"
import './styles.css'


const HomeCarousel = () => {
  return (
    <div className="container">
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={44}
      slidesPerView={3}
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
          slidesPerView: 3,
        },
      }}
      modules={[ Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <div className='relative'>
             <img className='absolute md:h-[400px] h-[450px] left-[-50px] top-8' src={Vector2} alt="" />
             <img className=' absolute md:h-[400px] h-[450px]  ' src={Vector1} alt="" />
             <img className='absolute  top-4 left-32' src={Ellipse} alt="" />

             <div className='absolute top-28 left-20 text-white'>
             <h1 className=' '>Hannah Schmitt</h1>
             <p className=' '>Lead designer</p>

             <p className='overflow-hidden text-sm w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu </p>
             </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
         <div className='relative'>
             <img className='absolute  left-[40px] ' src={Vector4} alt="" />
             <img className=' absolute     ' src={Vector3} alt="" />
             <img className='absolute  top-4 left-32' src={Ellipse2} alt="" />

             <div className='absolute top-32 left-20 text-white'>
             <h1 className=' '>Hannah Schmitt</h1>
             <p className=' '>Lead designer</p>

             <p className='overflow-hidden text-sm w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu </p>
             </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
      <div className='relative'>
             <img className='absolute left-[50px] md:h-[400px] h-[450px] top-8' src={Vector6} alt="" />
             <img className=' absolute md:h-[400px] h-[450px]  ' src={Vector5} alt="" />
             <img className='absolute  top-4 left-32' src={Ellipse3} alt="" />

             <div className='absolute top-28 left-20 text-white'>
             <h1 className=' '>Hannah Schmitt</h1>
             <p className=' '>Lead designer</p>

             <p className='overflow-hidden text-sm w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu </p>
             </div>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        
        <div className='relative'>
               <img className='absolute left-[50px] md:h-[400px] h-[450px] top-8' src={Vector6} alt="" />
               <img className=' absolute md:h-[400px] h-[450px]  ' src={Vector5} alt="" />
               <img className='absolute  top-4 left-32' src={Ellipse3} alt="" />
  
               <div className='absolute top-28 left-20 text-white'>
               <h1 className=' '>Hannah Schmitt</h1>
               <p className=' '>Lead designer</p>
  
               <p className='overflow-hidden text-sm w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu </p>
               </div>
          </div>
        </SwiperSlide>
      
     

      <div className="slider-controler ">
        <div className="swiper-button-prev slider-arrow">
           <FontAwesomeIcon className='text-gray-500 text-xl' icon={faAngleLeft}/>
        </div>
        <div className="swiper-button-next slider-arrow">
        <FontAwesomeIcon  className='text-gray-500 text-xl' icon={faAngleRight}/>          
        </div>
        <div className="swiper-pagination"></div>
      </div>

      
    </Swiper>
  </div>
  )
}

export default HomeCarousel