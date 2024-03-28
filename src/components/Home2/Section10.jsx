import { faArrowLeft, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Image from "../../images/person4.png"

const Section10 = () => {
  return (
    <div className='flex flex-col md:mt-20 items-center justify-center'>
      <div className='bg-gray-300 flex md:flex-row flex-col gap-4 md:p-8 p-2 rounded-3xl'>
        <div className='flex md:flex-row flex-col'>
          <div className='bg-gray-500  md:rounded-tl-3xl md:rounded-bl-3xl md:w-[40%] w-full p-8 '></div>
          <div className='bg-white  md:rounded-tr-3xl md:rounded-br-3xl md:w-[70%] w-full  p-8'>
            <span><FontAwesomeIcon icon={faCalendar} /> 02/03/2024</span>
            <h2 className='mt-4 font-medium'>Keep Your Business Safe Ensure…</h2>
            <p className='mt-4 text-gray-600'>Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.</p>
            <div className='flex items-center justify-between mt-8'>
              <div className='flex items-center gap-2'>
                <img className='rounded-full h-8 w-8' src={Image} alt="" />
                <p>Jhon Doe</p>
              </div>
              <p className='underline text-gray-500'>Read More</p>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className='bg-gray-500  md:rounded-tl-3xl md:rounded-bl-3xl md:w-[40%] w-full p-8 '></div>
          <div className='bg-white  md:rounded-tr-3xl md:rounded-br-3xl md:w-[70%] w-full  p-8'>
            <span><FontAwesomeIcon icon={faCalendar} /> 02/03/2024</span>
            <h2 className='mt-4 font-medium'>Keep Your Business Safe Ensure…</h2>
            <p className='mt-4 text-gray-600'>Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.</p>
            <div className='flex items-center justify-between mt-8'>
              <div className='flex items-center gap-2'>
                <img className='rounded-full h-8 w-8' src={Image} alt="" />
                <p>Jhon Doe</p>
              </div>
              <p className='underline text-gray-500'>Read More</p>
            </div>
          </div>
        </div>
      </div>
      <div className='semicircle bg-gray-300 flex py-10 px-8 justify-between'>
        <FontAwesomeIcon className='text-2xl ' icon={faArrowLeft}/>
        <FontAwesomeIcon className='text-2xl ' icon={faArrowRight}/>

      </div>
    </div>
  )
}

export default Section10;