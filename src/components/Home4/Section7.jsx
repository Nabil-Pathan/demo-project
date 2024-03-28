import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section7 = () => {
  return (
    <div className='bg-gray-300 md:mt-20   p-4'>
        <div className='bg-white rounded-3xl py-6 px-2'>
            <h1  className='text-center md:text-4xl text-2xl font-semibold'>Our Latest Blog & News</h1>
        </div>


        <div className='grid md:grid-cols-3 gap-4 mt-8 grid-cols-1'>
        
        <div className='border-4 border-gray-400 px-4 py-10 rounded-3xl'>
             <p>11th</p>     
             <p>Jan</p>


             <div className='mt-8 flex justify-between'>
                 <h4 className='font-medium'>Final Thoughts on NFT Marketing</h4>

                 <span className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faComment}/>
                    2
                 </span>
             </div>

        </div>

        <div className='border-4 border-gray-400 px-4 py-10 rounded-3xl'>
             <p>11th</p>     
             <p>Jan</p>


             <div className='mt-8 flex justify-between'>
                 <h4 className='font-medium'>Final Thoughts on NFT Marketing</h4>

                 <span className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faComment}/>
                    2
                 </span>
             </div>

        </div>

        <div className='border-4 border-gray-400 px-4 py-10 rounded-3xl'>
             <p>11th</p>     
             <p>Jan</p>


             <div className='mt-8 flex justify-between'>
                 <h4 className='font-medium'>Final Thoughts on NFT Marketing</h4>

                 <span className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faComment}/>
                    2
                 </span>
             </div>

        </div>


        </div>
    </div>
  )
}

export default Section7