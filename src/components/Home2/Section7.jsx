import { faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section7 = () => {
    return (
        <div className='flex md:flex-row md:mt-20 flex-col gap-4'>




            <div className='md:w-[70%]'>

                <div>
                    <div className='bg-gray-300 md:py-10 md:px-4 p-6  rounded-3xl'>
                        <h3 className=' text-xl mt-2 font-medium'>We’re Ready</h3>

                        <h1 className=' md:text-4xl text-2xl font-semibold'>Protecting your <br /> privacy Is our priority</h1>


                        <p className='text-sm mt-4'>Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam auctor, neque quis blandit vestibulum</p>
                    </div>


                    <div className='mt-6 grid md:grid-cols-2 gap-4 grid-cols-1'>
                        <div className='bg-gray-300 flex items-center gap-6  md:px-6 px-3 py-4  rounded-3xl'>
                            <FontAwesomeIcon className='text-xl' icon={faCheck} />
                            <h3 className='text-xl'>Use Strong Passwords</h3>
                        </div>


                        <div className='bg-gray-300 flex items-center gap-6    md:px-6 px-3 py-2  rounded-3xl'>
                            <FontAwesomeIcon className='text-xl' icon={faCheck} />
                            <h3 className='text-xl'>Use Security Software</h3>
                        </div>


                        <div className='bg-gray-300 flex items-center gap-6    md:px-6 px-3 py-2  rounded-3xl'>
                            <FontAwesomeIcon className='text-xl' icon={faCheck} />
                            <h3 className='text-xl'>Monitor For Intrusion</h3>
                        </div>

                        <div className='bg-gray-300 flex items-center gap-6    md:px-6 px-3 py-2  rounded-3xl'>
                            <FontAwesomeIcon className='text-xl' icon={faCheck} />
                            <h3 className='text-xl'>Raise Awareness</h3>
                        </div>

                    </div>

                </div>
            </div>

            <div className='bg-gray-300 rounded-3xl md:w-[30%] w-[100%]  '>

            </div>
        </div>
    )
}

export default Section7