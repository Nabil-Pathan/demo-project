import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section6 = () => {
    return (
        <div className='flex md:flex-row md:mt-20 flex-col gap-4'>

            <div className='bg-gray-300 rounded-3xl h-full md:w-[30%] w-[100%]  '>

            </div>


            <div className='md:w-[70%] w-full'>

                <div>
                    <div className='bg-gray-300 md:p-6 px-6 py-8 rounded-3xl'>
                        <h3 className='text-end md:text-xl font-medium'>Advanced Protect</h3>

                        <h1 className='text-end md:text-4xl text-xl font-semibold'>Protecting your <br /> privacy Is our priority</h1>
                    </div>


                    <div className='mt-6 grid md:grid-cols-2 gap-4 grid-cols-1'>
                        <div className='bg-gray-300 flex items-center justify-between py-6 md:px-10 px-2 rounded-3xl'>
                            <span className='rounded-full p-8 bg-gray-200'></span>

                            <div className=''>
                                <h2 className='font-medium text-xl'>Security Services</h2>
                                <p className='mt-3 text-sm'>Pulvinar ornare in a sem.</p>
                            </div>
                            
                            <FontAwesomeIcon className='text-3xl' icon={faAngleRight}/>
                        </div>

                        <div className='bg-gray-300 flex items-center justify-between py-6 md:px-10 px-2 rounded-3xl'>
                            <span className='rounded-full p-8 bg-gray-200'></span>

                            <div className=''>
                                <h2 className='font-medium text-xl'>Security Services</h2>
                                <p className='mt-3 text-sm'>Pulvinar ornare in a sem.</p>
                            </div>
                            
                            <FontAwesomeIcon className='text-3xl' icon={faAngleRight}/>
                        </div>

                        <div className='bg-gray-300 flex items-center gap-8 py-6 md:px-10 px-2 rounded-3xl'>
                            <span className='rounded-full p-8 bg-gray-200'></span>

                            <div className=''>
                                <h2 className='font-medium text-xl'>Security Services</h2>
                                <p className='mt-3 text-sm'>Pulvinar ornare in a sem.</p>
                            </div>
                            
                        </div>

                        <div className='bg-gray-300 flex items-center gap-8 py-6 md:px-10 px-2 rounded-3xl'>
                            <span className='rounded-full p-8 bg-gray-200'></span>

                            <div className=''>
                                <h2 className='font-medium text-xl'>Security Services</h2>
                                <p className='mt-3 text-sm'>Pulvinar ornare in a sem.</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section6