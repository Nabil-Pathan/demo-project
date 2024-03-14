import React from 'react'

const Section4 = () => {
  return (
    <div className='p-4 rounded-3xl border border-gray-800'>

        <div className='bg-gray-300 rounded-t-3xl md:px-8 px-4 py-10'>
            <h3 className='text-xl font-medium'>Our Services</h3>
            <h1 className='md:text-3xl text-2xl font-semibold'>We Provide All Kind Advanced Security Services</h1>
        </div>


        <div className='flex md:flex-row flex-col mt-10 md:px-20 items-center justify-center gap-10'>

            <div className='bg-gray-300  rounded-3xl flex items-center justify-evenly flex-col px-4 py-20'>

                <span className='bg-gray-500 rounded-full px-14 py-14'>
                </span>

                <h2 className='text-center mt-4 text-xl font-semibold'>Threat Intelligence</h2>

                <p className='text-sm mt-4 text-center'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                <button className='border mt-6 bg-white px-8 py-2 rounded-full duration-500'>Read More</button>

            </div>


            <div className='bg-gray-300   rounded-3xl flex items-center justify-evenly flex-col px-4 py-20'>

                <span className='bg-gray-500 rounded-full px-14 py-14'>
                </span>

                <h2 className='text-center mt-4 text-xl font-semibold'>Threat Intelligence</h2>

                <p className='text-sm mt-4 text-center'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                <button className='border mt-6 bg-white px-8 py-2 rounded-full duration-500'>Read More</button>

            </div>


            <div className='bg-gray-300  rounded-3xl flex items-center justify-evenly flex-col px-4 py-20'>

                <span className='bg-gray-500 rounded-full px-14 py-14'>
                </span>

                <h2 className='text-center mt-4 text-xl font-semibold'>Threat Intelligence</h2>

                <p className='text-sm mt-4 text-center'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                <button className='border mt-6 bg-white px-8 py-2 rounded-full duration-500'>Read More</button>

            </div>

            
        </div>
    </div>
  )
}

export default Section4