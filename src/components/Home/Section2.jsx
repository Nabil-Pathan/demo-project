import React from 'react'
import GalleryImage from "../../images/gallery.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faImage } from '@fortawesome/free-solid-svg-icons'
import  SolarUserImage from "../../images/solar_user-check.png"


const Section2 = () => {
    return (
        <div className='flex md:flex-row flex-col gap-10 p-10 '>
           
            <div className='flex md:w-[60%]  flex-col'>
                <h2 className=' text-xl p-2'>  What We do <FontAwesomeIcon icon={faArrowRight}/> </h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
            Relational <br /> 
database is <br />  what we do
                </h1>

                <div className='md:w-[70%]'>
                <p className='mt-8 '>Maecenas tincidunt ex quis arcu ultrices, et commodo diam volutpat. Fusce ligula mauris, sodales efficitur justo et, molestie tincidunt ex.</p>
                </div>
                <button className='border mt-4 border-gray-800   px-8 py-2 rounded-full duration-500'>Start Free Trial</button>

                <div className='flex md:flex-row flex-col gap-6 mt-10'>
                     <div className='flex items-center'>
                        <span className='rounded-full bg-lightGray px-3 py-2'>
                         <img src={SolarUserImage} alt="" />
                         </span>
                         <p>Access Any Data Flexible And Easily</p>
                     </div>

                     <div className='flex items-center'>
                        <span className='rounded-full bg-lightGray px-3 py-2'>
                         <img src={SolarUserImage} alt="" />
                         </span>
                         <p>In-Database Optimized Algorithms</p>
                     </div>
                </div>

            </div>

            <div className='md:w-[40%] '>
            <div className='bg-gray-300 flex  md:h-[500px] h-[300px] md:w-[80%] items-center rounded-3xl justify-center  '>
                <FontAwesomeIcon className='text-gray-600 text-4xl' icon={faImage} />
            </div>
            </div>

        </div>
    )
}

export default Section2