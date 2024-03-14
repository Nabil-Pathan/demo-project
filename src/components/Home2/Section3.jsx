import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section3 = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4'>

        <div className='flex flex-1 flex-col gap-4'>

            <div className='bg-gray-300 rounded-3xl px-6 py-8'>
                <h3>Know About Company</h3>
                <h2 className='text-3xl mt-3 font-semibold'>Security is our number One priority</h2>

                <p className='text-sm mt-4 md:w-[70%]'>Pulvinar ornare in a sem. Quisque vulputate convallis nulla. In efficitur scelerisque odio sed tincidunt. Integer maximus eu tellus eleifend feugiat. Aliquam hendrerit pulvinar augue vitae rutrum. In sit amet neque odio</p>


                <div className='flex mt-4 flex-col gap-4'>


                    <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p>Essential Features of Cybersecurity</p>
                    </div>

                    <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p>Essential Features of Cybersecurity</p>
                    </div>

                    <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p>Essential Features of Cybersecurity</p>
                    </div>

                </div>
            </div>

            
            <button className='px-6 py-4 rounded-3xl bg-gray-300'>Discover More</button>

        </div>


        <div className='flex-1 flex flex-col gap-4'>

            <div className='bg-gray-300 h-full rounded-3xl px-20 py-10 '>

            </div>


            <div className='flex md:flex-row flex-col gap-4 w-full h-full'>
            <div className='bg-gray-300  rounded-3xl w-full h-full '>
            </div>


            <div className='bg-gray-300 w-full  h-full rounded-3xl  '>

             </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section3