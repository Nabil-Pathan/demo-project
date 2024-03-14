import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section4 = () => {
  return (
    <div className='bg-gray-300 md:mt-20 mt-8  p-6 rounded-3xl flex md:flex-row flex-col justify-between gap-10'>

        <div className='border md:w-[300px] w-full h-[150px] border-black px-4 py-8 relative rounded-3xl'>
            <h1 className='font-medium text-xl'>12M+ </h1>
            <p className='text-gray-600'>Successful Work</p>

            <span className='absolute top-0 right-0 rounded-full px-4 py-3 bg-gray-600 text-gray-300'>
                <FontAwesomeIcon className='text-xl' icon={faCheck}/>
            </span>
        </div>


        <div className='border md:w-[300px] w-full h-[150px] border-black px-4 py-8 relative rounded-3xl'>
            <h1 className='font-medium text-xl'>12M+ </h1>
            <p className='text-gray-600'>Successful Work</p>

            <span className='absolute top-0 right-0 rounded-full px-4 py-3 bg-gray-600 text-gray-300'>
                <FontAwesomeIcon className='text-xl' icon={faCheck}/>
            </span>
        </div>


        <div className='border md:w-[300px] w-full h-[150px] border-black px-4 py-8 relative rounded-3xl'>
            <h1 className='font-medium text-xl'>12M+ </h1>
            <p className='text-gray-600'>Successful Work</p>

            <span className='absolute top-0 right-0 rounded-full px-4 py-3 bg-gray-600 text-gray-300'>
                <FontAwesomeIcon className='text-xl' icon={faCheck}/>
            </span>
        </div>        
    </div>
  )
}

export default Section4