import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section3 = () => {
  return (
    <div className='bg-gray-300 rounded-3xl md:p-10 p-6'>
         <h3 className='mt-4 text-center'>Our Services <FontAwesomeIcon icon={faArrowDown}/></h3>

         <h1 className='md:text-5xl text-3xl mt-4 text-center font-semibold'>Our proposition data science <br /> and analytics services</h1>

         <div className='grid mt-10 md:grid-cols-3 justify-center items-center grid-cols-1 md:gap-20 gap-10'>

            <div className='bg-lightGray rounded-3xl px-3 py-4 md:h-[400x]  md:w-[300px] w-full'>
                 <div className='rounded-3xl bg-gray-300 h-[150px] w-full'>
                 </div>

                 <h2 className='mt-4 font-medium text-xl'>Machine Learning Bootcamp</h2>

                 <p className='text-sm mt-6'>Click here <FontAwesomeIcon icon={faArrowRight}/></p>
            </div>



            <div className='bg-lightGray rounded-3xl px-3 py-4 h-[400x] md:w-[300px] w-full'>
                 <div className='rounded-3xl bg-gray-300 h-[150px] w-full'>
                 </div>

                 <h2 className='mt-4 font-medium text-xl'>Digital Data Consulting for Science</h2>

                 <p className='text-sm mt-6'>Click here <FontAwesomeIcon icon={faArrowRight}/></p>
            </div>


            <div className='bg-lightGray rounded-3xl px-3 py-4 h-[400x] md:w-[300px] w-full'>
                 <div className='rounded-3xl bg-gray-300 h-[150px] w-full'>
                 </div>

                 <h2 className='mt-4 font-medium text-xl'>Data Visualization BootCamp</h2>

                 <p className='text-sm mt-6'>Click here <FontAwesomeIcon icon={faArrowRight}/></p>
            </div>

           
         </div>

         <h2 className='text-center  text-xl  mt-10'>Want to learn More about Our Services? Click here</h2>
    </div>
  )
}

export default Section3