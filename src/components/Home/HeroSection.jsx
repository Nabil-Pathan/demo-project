import React from 'react'
import GalleryImage from "../../images/gallery.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
    return (
        <div className='flex md:flex-row flex-col gap-8 p-10'>


            <div className='flex-1'>
            <div className='bg-gray-300 flex  md:h-[400px] h-[300px] md:w-[80%] items-center rounded-3xl justify-center  '>
                <FontAwesomeIcon className='text-gray-600 text-4xl' icon={faImage} />
            </div>
            </div>

           

            <div className='flex justify-center flex-1 flex-col'>
                <h2 className='md:ml-72 text-xl p-2'> <FontAwesomeIcon icon={faArrowLeft}/> Best Services</h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
                    <span className='block md:ml-48'>Big Data</span>
                    <span className='block md:ml-20'>will come up</span>
                    <span className='block md:ml-6' >with a solution</span>
                </h1>

                <p className='mt-8 '>Lorem ipsum is placeholder text commonly used in the  graphic, print, and publishing industries for previewing layouts and visual.</p>
                <button className='border mt-4 border-gray-800   px-8 py-2 rounded-full duration-500'>Start Free Trial</button>
            </div>

        </div>
    )
}

export default HeroSection