import React from 'react'
import Image1 from "../../images/Rectangle1.png"
import Image2 from "../../images/Rectangle2.png"

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center md:flex-row gap-10'>

      <div className="md:flex-1 md:px-8 px-2 md:py-8 py-4">
        <div className=''>
          <h3 className='md:text-2xl text-xl font-medium'>Empower your business</h3>
          <h1 className='md:text-6xl text-4xl font-semibold mt-4'>Powerful Digital Mobile Apps</h1>
          <p className='mt-4 text-xl'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div className='flex gap-6 mt-4'>
          <button className='rounded-full md:px-6 px-4 py-3 bg-gray-700 text-white'>Google Play</button>
          <button className='rounded-full md:px-6 px-4 py-3 border border-gray-700'>App Store</button>
        </div>
      </div>

      <div className="md:flex-1 relative md:mt-0 mt-20 flex items-center justify-center">
        <img className='md:h-[300px] h-[250px]' src={Image1} alt="" />
        <img className='md:h-[300px] h-[250px]  absolute md:top-22 md:right-10 md:left-64 left-12 top-24' src={Image2} alt="" />
      </div>

    </div>
  )
}

export default HeroSection
