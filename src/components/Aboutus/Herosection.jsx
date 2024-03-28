import React from 'react'

const Herosection = () => {
  return (
    <div style={{ background: "rgba(0, 0, 0, 0.2)"}} className=' md:px-8 px-4 flex flex-col justify-center items-center md:py-36 py-20'>
         <h1 className='text-white font-semibold md:text-7xl text-center text-4xl'>About Us</h1>

         <p className='text-white mt-4  md:text-xl text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed <br />  do eiusmod tempor incididunt ut labore</p>


         <button className='mt-4 rounded-full px-4 py-3 bg-gray-100'>See More</button>
    </div>
  )
}

export default Herosection