import React from 'react'
import Image from "../../images/Rectangle3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Section2 = () => {
  return (
    <div className='flex mt-44 md:flex-row flex-col gap-10'>

<div className="flex-1 ">
             <img className='' src={Image} alt="" />
         </div>

    <div className="flex-1 md:px-8 px-2 md:py-8 py-4">

        <div className='flex flex-col'>
        <h2 className='md:ml-72 text-xl md:text-end p-2'>  Who we are</h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
              
                    <span className='block md:ml-48'>We Provide</span>
                    <span className='block md:ml-28'>All Solutions In</span>
                    <span className='block md:ml-16' >One Application</span>
                </h1>

                <div className=''>
            <p className='mt-4 md:ml-16 text-xl '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi.</p>
            </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1  gap-6  px-6  md:py-2 py-4 mt-4 md:ml-16 md:rounded-full rounded-3xl bg-gray-400'>
          
          <div className='flex flex-col items-center gap-3'>
             <span className='bg-gray-300 rounded-full px-3 py-2'><FontAwesomeIcon icon={faCheck}/></span>

             <p className='text-center'>User friendly  Design</p>
          </div>


          <div className='flex flex-col items-center gap-3'>
             <span className='bg-gray-300 rounded-full px-3 py-2'><FontAwesomeIcon icon={faCheck}/></span>

             <p className='text-center'>User friendly  Design</p>
          </div>


          <div className='flex flex-col items-center gap-3'>
             <span className='bg-gray-300 rounded-full px-3 py-2'><FontAwesomeIcon icon={faCheck}/></span>

             <p className='text-center'>User friendly  Design</p>
          </div>

        </div>
    </div>


         

    </div>
  )
}

export default Section2