import React from 'react'
import UnderlineImage from "../../images/underline1.png"
import Vector from "../../images/Vector7.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'

const Section1 = () => {
  return (
    <div className='mt-8'>
         <div className='flex flex-col items-center justify-center gap-3'>
             <h1 className='text-center md:text-4xl text-2xl font-semibold'>It Support For Business</h1>
             <img src={UnderlineImage} alt="" />
         </div>


         <div className='flex md:flex-row flex-col mt-8 gap-8'>
            <div className="flex-1">
                <h2 className='text-3xl font-semibold'>Preparing for your <br /> success trusted source <br /> in IT services.</h2>

                <p className='mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>

                <ul className='mt-6'>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faCheck}/>
                        <p className='font-medium'>which means as the company ramps</p>
                    </li>

                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faCheck}/>
                        <p  className='font-medium'>Available in 14.1-in. and 16-in. versions.</p>
                    </li>

                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faCheck}/>
                        <p  className='font-medium'>High-speed USB 4.0.</p>
                    </li>
                </ul>


                <button className='bg-gray-500 mt-4 rounded-full px-4 py-3 w-full text-white'>View More <FontAwesomeIcon icon={faArrowRight}/></button>

            </div>
            <div className="flex-1">
                <img src={Vector} alt="" />
            </div>
         </div>
    </div>
  )
}

export default Section1