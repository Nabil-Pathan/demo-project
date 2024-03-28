import React from 'react'
import UnderlineImage from "../../images/underline1.png"
import Ellipse from "../../images/Ellipse5.png"


const Section3 = () => {
  return (
    <div className='md:mt-20'>
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center md:text-4xl text-2xl font-semibold'>Who we’re</h1>
        <img src={UnderlineImage} alt="" />
    </div>


    <div className='grid md:grid-cols-3 mt-8 grid-cols-1 md:gap-16 gap-8'>

        <div className='bg-gray-300 rounded-2xl px-4 py-6 flex flex-col gap-3 items-center justify-center'>
            <div className=''>
            <img src={Ellipse} alt="" />
            </div>


            <div className='mt-3'>
                <h3 className='font-semibold text-xl text-center'>Advertising and Marketing</h3>
                <p  className=' text-center'>We’ve been a strategy thought leader for nearly five decades and we bring</p>
            </div>

            <button className='border border-gray-800 rounded-full px-4 py-3 w-full'>Read More</button>
        </div>

        <div className='bg-gray-300 rounded-2xl px-4 py-6 flex flex-col gap-3 items-center justify-center'>
            <div className=''>
            <img src={Ellipse} alt="" />
            </div>


            <div className='mt-3'>
                <h3 className='font-semibold text-xl text-center'>Advertising and Marketing</h3>
                <p  className=' text-center'>We’ve been a strategy thought leader for nearly five decades and we bring</p>
            </div>

            <button className='border border-gray-800 rounded-full px-4 py-3 w-full'>Read More</button>
        </div>

        <div className='bg-gray-300 rounded-2xl px-4 py-6 flex flex-col gap-3 items-center justify-center'>
            <div className=''>
            <img src={Ellipse} alt="" />
            </div>


            <div className='mt-3'>
                <h3 className='font-semibold text-xl text-center'>Advertising and Marketing</h3>
                <p  className=' text-center'>We’ve been a strategy thought leader for nearly five decades and we bring</p>
            </div>

            <button className='border border-gray-800 rounded-full px-4 py-3 w-full'>Read More</button>
        </div>

    </div>


</div>
  )
}

export default Section3