import React from 'react'
import FirstCarousel from './FirstCarousel'

const Section5 = () => {
  return (
    <div className='bg-gray-300 md:p-8 p-6 rounded-3xl'>

      <div className=''>
        <h1 className='md:text-5xl text-2xl font-semibold text-center'>Let’s See Some Beautyful <br /> Mobile UI Screens</h1>
        <h3 className='md:text-2xl  mt-4 text-gray-500 text-center'>Learn more about cool options that grow business</h3>
      </div>

      <div className='mt-8'>
        <FirstCarousel/>
      </div>
    </div>
  )
}

export default Section5