import React from 'react';
import Carousel from './Carousel';
import VectorImage from "../../images/Vector8.png";

const Section4 = () => {
  return (
    <div className="md:mt-20 relative flex justify-center">
      <div className="absolute bottom-4 right-1 ">
        <img className="h-full w-full object-cover" src={VectorImage} alt="" />
      </div>
      <div className="">
        <Carousel />
      </div>
    </div>
  );
}

export default Section4;
