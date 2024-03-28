import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image  from "../../images/Person1.png"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './styles.css'


import CardImage from "../../images/Ellipse4.png"

const SecondCarousel = () => {
  return (
    <div className="container mt-4">
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={44}
      slidesPerView={1}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}


      modules={[ Pagination, Navigation]}
      className="md:h-[450px]"
    >


      <SwiperSlide style={{ height: '300px' }}className='flex py-2   md:flex-row flex-col bg-white rounded-3xl  md:px-4'>



        
         <div className='md:w-[30%] flex md:items-start items-center md:justify-start justify-center  h-full '>
           <img className='' src={Image} alt="" />
         </div>


         <div className='md:w-[70%]'>
            <p className='md:text-start text-center mt-4'>May 8, 2020</p>
          <h3 className='md:text-3xl text-xl md:text-start text-center mt-2 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

          <p className='mt-4 md:text-start text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in. 
          </p>
         </div>

      </SwiperSlide>


      <SwiperSlide style={{ height: '300px' }}className='flex py-2   md:flex-row flex-col bg-white rounded-3xl  md:px-4'>



        
<div className='md:w-[30%] flex md:items-start items-center md:justify-start justify-center  h-full '>
  <img className='' src={Image} alt="" />
</div>


<div className='md:w-[70%]'>
   <p className='md:text-start text-center mt-4'>May 8, 2020</p>
 <h3 className='md:text-3xl text-xl md:text-start text-center mt-2 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

 <p className='mt-4 md:text-start text-center'>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in. 
 </p>
</div>

</SwiperSlide>


<SwiperSlide style={{ height: '300px' }}className='flex py-2   md:flex-row flex-col bg-white rounded-3xl  md:px-4'>



        
<div className='md:w-[30%] flex md:items-start items-center md:justify-start justify-center  h-full '>
  <img className='' src={Image} alt="" />
</div>


<div className='md:w-[70%]'>
   <p className='md:text-start text-center mt-4'>May 8, 2020</p>
 <h3 className='md:text-3xl text-xl md:text-start text-center mt-2 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

 <p className='mt-4 md:text-start text-center'>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in. 
 </p>
</div>

</SwiperSlide>

<SwiperSlide style={{ height: '300px' }}className='flex py-2   md:flex-row flex-col bg-white rounded-3xl  md:px-4'>



        
<div className='md:w-[30%] flex md:items-start items-center md:justify-start justify-center  h-full '>
  <img className='' src={Image} alt="" />
</div>


<div className='md:w-[70%]'>
   <p className='md:text-start text-center mt-4'>May 8, 2020</p>
 <h3 className='md:text-3xl text-xl md:text-start text-center mt-2 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

 <p className='mt-4 md:text-start text-center'>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in. 
 </p>
</div>

</SwiperSlide>
      


    

      
     

      <div className="slider-controler md:mt-0 mt-10 ">
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

export default SecondCarousel