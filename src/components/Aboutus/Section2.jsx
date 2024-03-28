import React from 'react'

import Square from "../../images/Square3.png"


const Section2 = () => {
  return (
    <div className='mt-10 bg-gray-300 flex items-center justify-center '>

        <div className=' px-4 py-6 grid items-center  justify-center md:grid-cols-5 grid-cols-1 md:gap-20 gap-10'>
        <img className='h-[130px]' src={Square} alt="" />
        <img className='h-[130px]' src={Square} alt="" />
        <img className='h-[130px]' src={Square} alt="" />
        <img className='h-[130px]' src={Square} alt="" />
        <img className='h-[130px]' src={Square} alt="" />
        </div>
       


    </div>
  )
}

export default Section2