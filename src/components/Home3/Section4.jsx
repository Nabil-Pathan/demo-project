import React from 'react'
import Image1 from "../../images/Rectangle4.png"
import Image2 from "../../images/Rectangle5.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Section4 = () => {
  return (
    <div className='flex mt-44 md:flex-row flex-col gap-10'>



    <div className="flex-1 md:px-8 px-2 md:py-8 py-4">

        <div className='flex flex-col'>
        <h2 className=' text-xl  p-2'> Why Choose Us</h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
              
                    <span className='block '>Super Simple</span>
                    <span className='block '>Applications Are</span>
                    <span className='block ' >Made For Easily</span>
                </h1>

                <div className=''>
            <p className='mt-4  text-xl '>This is a common goal for many software development teams, as user-friendly design is often considered a key aspect of a successful application. Simple and intuitive interfaces</p>
            </div>
        <button className='border bg-black mt-8 text-white   px-8 py-2 rounded-full duration-500'>Get 14 Days Free Trial</button>


        <div className='bg-white rounded-3xl p-6 mt-10 flex md:flex-row flex-col gap-8'>

          <div className='flex-1'>
            <h3 className='text-xl font-medium'>Free Download App</h3>
            <p className='text-gray-500'>3D printing, also known as additive is a process of creating a physical</p>
          </div>

           <div className='flex-1'>
            <h3 className='text-xl font-medium'>Trusted and Reliable</h3>
            <p className='text-gray-500'>Trusted refers to the perception or belief that a person or organizatio</p>
          </div>
          
        </div>


        </div>

      
    </div>


    <div className="flex-1 flex flex-col gap-6">
             <img className='md:h-[250px]' src={Image1} alt="" />
             <img className='md:h-[350px]' src={Image2} alt="" />
         </div>

    </div>
  )
}

export default Section4