import { faArrowDown, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section7 = () => {
     return (
          <div className='bg-gray-300 rounded-3xl md:p-10 p-6'>
               <h3 className='mt-4 text-center'>Pricing Plan <FontAwesomeIcon icon={faArrowDown} /></h3>

               <h1 className='md:text-5xl text-3xl mt-4 text-center font-semibold'>The prices are best! it’s  <br />  Unbelievable</h1>

               <div className='grid mt-10 md:grid-cols-3 justify-center items-center grid-cols-1 md:gap-20 gap-10'>

                    <div className=' shadow-lg bg-gray-200 rounded-3xl px-6 py-4 md:h-[400x]  md:w-[300px] w-full'>

                         <h2 className='mt-4 font-medium text-xl'>Starter Plan</h2>

                         <div className='flex items-center gap-2'>
                              <h1 className='text-2xl font-semibold'>$11</h1>
                              <p className='text-sm text-gray-500'>/month</p>
                         </div>


                         <div className='flex flex-col gap-4 mt-10'>
                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>20,000 Visitors</p>
                              </div>


                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>Create Unlimited Widgets</p>
                              </div>

                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>CMS Integrations</p>
                              </div>

                         </div>

                         <button className='border bg-black text-white mt-6  font-semibold  px-8 py-2 rounded-full duration-500'>Start Free Trial</button>


                    </div>



                    <div className=' shadow-lg  bg-gray-500 text-white rounded-3xl px-6 py-4 md:h-[400x]  md:w-[300px] w-full'>

                         <h2 className='mt-4 font-medium text-xl'>Starter Plan</h2>

                         <div className='flex items-center gap-2'>
                              <h1 className='text-2xl font-semibold'>$11</h1>
                              <p className='text-sm '>/month</p>
                         </div>


                         <div className='flex flex-col gap-4 mt-10'>
                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>20,000 Visitors</p>
                              </div>


                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>Create Unlimited Widgets</p>
                              </div>

                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>CMS Integrations</p>
                              </div>

                         </div>

                         <button className='border bg-white text-black  mt-6  font-semibold  px-8 py-2 rounded-full duration-500'>Start Free Trial</button>


                    </div>



                    <div className=' shadow-lg bg-gray-200 rounded-3xl px-6 py-4 md:h-[400x]  md:w-[300px] w-full'>

                         <h2 className='mt-4 font-medium text-xl'>Starter Plan</h2>

                         <div className='flex items-center gap-2'>
                              <h1 className='text-2xl font-semibold'>$11</h1>
                              <p className='text-sm text-gray-500'>/month</p>
                         </div>


                         <div className='flex flex-col gap-4 mt-10'>
                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>20,000 Visitors</p>
                              </div>


                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>Create Unlimited Widgets</p>
                              </div>

                              <div className='flex items-center gap-4'>
                                   <FontAwesomeIcon icon={faCheck} />
                                   <p>CMS Integrations</p>
                              </div>

                         </div>

                         <button className='border bg-black text-white mt-6  font-semibold  px-8 py-2 rounded-full duration-500'>Start Free Trial</button>


                    </div>



               </div>

          </div>
     )
}

export default Section7