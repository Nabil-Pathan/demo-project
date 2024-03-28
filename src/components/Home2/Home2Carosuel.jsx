import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard , EffectCoverflow } from 'swiper/modules';

import Image1 from "../../images/person1.jpeg"
import Image2 from "../../images/person2.jpeg"
import Image3 from "../../images/person3.jpeg"


export default function Home2Carosuel() {
  return (
    <>
    
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              let imageSrc;
              let imageSize = "w-[60px] h-[60px]"; 
              switch (index) {
                case 0:
                  imageSrc = Image1;
                  break;
                case 1:
                  imageSrc = Image2;
                  break;
                case 2:
                  imageSrc = Image3;
                  break;
              }
              return '<span class="' + className + ' flex items-center justify-center  w-[60px] h-[60px]"><img src="' + imageSrc + '" alt="pagination-image" class="rounded-full object-cover ' + imageSize + '" /></span>';
            },
          }}
          
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
    <SwiperSlide className='flex flex-col items-center justify-center'>
  <div className='bg-white md:w-[50%]  flex flex-col  justify-center  w-full md:px-6 px-2 md:py-8 py-6'>

    <div className='md:w-full w-[80%]'>
    <h1 className='text-center md:text-3xl text-xl font-semibold'>It was a very good experience</h1>
    <p className='text-center mt-6 md:text-xl text-sm text-gray-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
    </p>
    </div>
  </div>
  <div className='triangle-down md:mr-0 mr-14'></div>
</SwiperSlide>



<SwiperSlide className='flex flex-col items-center justify-center'>
  <div className='bg-white md:w-[50%]  flex flex-col  justify-center  w-full md:px-6 px-2 md:py-8 py-6'>

    <div className='md:w-full w-[80%]'>
    <h1 className='text-center md:text-3xl text-xl font-semibold'>It was a very good experience</h1>
    <p className='text-center mt-6 md:text-xl text-sm text-gray-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
    </p>
    </div>
  </div>
  <div className='triangle-down md:mr-0 mr-14'></div>
</SwiperSlide>


<SwiperSlide className='flex flex-col items-center justify-center'>
  <div className='bg-white md:w-[50%]  flex flex-col  justify-center  w-full md:px-6 px-2 md:py-8 py-6'>

    <div className='md:w-full w-[80%]'>
    <h1 className='text-center md:text-3xl text-xl font-semibold'>It was a very good experience</h1>
    <p className='text-center mt-6 md:text-xl text-sm text-gray-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
    </p>
    </div>
  </div>
  <div className='triangle-down md:mr-0 mr-14'></div>
</SwiperSlide>

      </Swiper>
    </>
  );
}
