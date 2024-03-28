import React from 'react'
import Image from "../../images/Square1.png"

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center md:flex-row gap-10'>

      <div className="md:flex-1 md:px-8 px-2 md:py-8 py-4">
        <div className=''>
          <h3 className='md:text-2xl text-xl '>Best NFT Marketplace</h3>
          <h1 className='md:text-5xl text-3xl font-semibold mt-4'>Discover & Collect <br /> your favorite  <br /> computerized NFT's</h1>
          <p className='mt-4 md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
        </div>

        <div className='flex gap-6 mt-4'>
          <button className='rounded-full md:px-10 px-4 py-3 bg-black text-white'>Explore Now</button>
          <button className='rounded-full md:px-10 px-4 py-3 border border-gray-700'>Create NFT</button>
        </div>
      </div>

      <div className="md:flex-1  flex items-center justify-center">
        <img className='' src={Image} alt="" />
      </div>

    </div>
  )
}

export default HeroSection
