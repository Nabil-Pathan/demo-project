import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-gray-300 rounded-3xl md:px-20 px-2 md:py-32 py-4 '>

        <div className='p-8'>
        <h2 className='md:text-2xl text-xl text-center font-thin'>Were the best protect</h2>
        <h1 className='md:text-6xl text-3xl text-center font-semibold mt-6'>We secure the world from <br />cyber threats</h1>
        <p className='mt-5 md:text-xl text-1/2xl text-center'>Maecenas tincidunt ex quis arcu ultrices, et commodo <br /> diamvolutpat. Fusce ligula mauris, sodales</p>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-center gap-6'>
        <button className='border bg-black text-white font-medium px-8 py-2 rounded-full duration-500'>Discover More</button>
        <button className='border border-gray-800  font-medium px-8 py-2 rounded-full duration-500'>Get Started</button>
        </div>
    </div>
  )
}

export default HeroSection