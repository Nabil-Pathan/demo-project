import React from 'react'
import  Image from "../../images/photoWrapper.png"

const Section10 = () => {
  return (
    <div className='grid md:p-10 p-6 md:grid-cols-3 gap-8 grid-cols-1'>

        <div className='bg-white rounded-2xl p-2 flex  items-center justify-center gap-3'>
            <div className='md:w-[20%]'>
            <img src={Image} alt="" />
            </div>

            <div className='md:w-[80%]'>
                <h3 className='text-xl font-semibold'>3504 +</h3>
                <p>Apps Project Complete</p>
            </div>
        </div>


        <div className='bg-white rounded-2xl p-2 flex  items-center justify-center gap-3'>
            <div className='md:w-[20%]'>
            <img src={Image} alt="" />
            </div>

            <div className='md:w-[80%]'>
                <h3 className='text-xl font-semibold'>8504 +</h3>
                <p>Download Our Apps</p>
            </div>
        </div>


        <div className='bg-white rounded-2xl p-2 flex  items-center justify-center gap-3'>
            <div className='md:w-[20%]'>
            <img src={Image} alt="" />
            </div>

            <div className='md:w-[80%]'>
                <h3 className='text-xl font-semibold'>3504 +</h3>
                <p>Our Professional Staff</p>
            </div>
        </div>


    </div>
  )
}

export default Section10