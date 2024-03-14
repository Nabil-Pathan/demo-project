import React from 'react'
import GalleryImage from "../../images/gallery.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faImage } from '@fortawesome/free-solid-svg-icons'
import  SolarUserImage from "../../images/solar_user-check.png"


const Section5 = () => {
    return (
        <div className='flex md:flex-row flex-col gap-10 p-10 '>
           
            <div className='flex flex-1  flex-col'>
                <h2 className=' text-xl p-2'>  Solution Place <FontAwesomeIcon icon={faArrowRight}/> </h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
            A one place <br /> solution for All <br /> your problems
                </h1>

                <div className='md:w-[70%]'>
                <p className='mt-8  '>Pellentesque purus neque, pretium non purus vitae, commodo cursus libero. Praesent eget tempor est. Aliquam molestie erat vitae faucibus volutpat.</p>
                </div>
                <button className='border mt-4 border-gray-800   px-8 py-2 rounded-full duration-500'>Learn Click Here</button>

                

            </div>

            <div className='flex-1 flex items-center justify-center'>
            <div className='bg-gray-300 flex  md:h-[400px] md:w-[70%] w-full h-[300px]   items-center rounded-3xl justify-center  '>
                <FontAwesomeIcon className='text-gray-600 text-4xl' icon={faImage} />
            </div>
            </div>

        </div>
    )
}

export default Section5