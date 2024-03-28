import React from 'react'
import FirstCarousel from './FirstCarousel'

const Section5 = () => {
  return (
    <div className='md:mt-10'>

        <div className='flex items-center md:flex-row flex-col justify-between'>
            <h1 className='md:text-4xl text-2xl font-semibold'>Collection Category</h1>

            <button className='bg-gray-600 mt-6 text-white md:px-8 px-4 py-3 rounded-full'>Explore More</button>
        </div>

        <div>
            <FirstCarousel/>
        </div>
    </div>
  )
}

export default Section5