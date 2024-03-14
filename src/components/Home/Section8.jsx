import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import 'swiper/css'
import Carousel from '../Extra/Carousel'

const Section8 = () => {
    return (
        <div className='border border-gray-300 mt-10 rounded-3xl p-4'>
            <h3 className='mt-4 text-center'>Testimonial <FontAwesomeIcon icon={faArrowDown} /></h3>

            <h1 className='md:text-5xl text-3xl mt-4 text-center font-semibold'>Really take a look at What <br />
                clients our say </h1>

                <div className='mt-10'>
                <Carousel/>
                </div>
        </div>
    )
}

export default Section8 