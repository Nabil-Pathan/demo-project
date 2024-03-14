import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from '../Extra/Accordian'

const Section6 = () => {


    const AccordianData = [
        {
            title : "Ornare laoreet mi tempus neque ",
            content : "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
        },

        {
            title : "Rhoncus nullam aliquam nam proin ",
            content : "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
        },

        {
            title : "Duis enim bibendum dui ut fringilla suspendisse vel  ",
            content : "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
        },

        {
            title : "Lectus fringilla volutpat egestas nisi, viverra mauris ",
            content : "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
        }
    ]

  return (
    <div className='p-4 flex md:flex-row flex-col gap-20'>

        <div className='flex-1'>
            {
                AccordianData.map((item,index)=>(
                    <Accordion key={index} title={item.title} content={item.content}/>
                ))
            }
        </div>

        
        <div className='flex md:items-center items-start p-4 flex-1 flex-col'>
                <h2 className='md:ml-96  p-2'> <FontAwesomeIcon icon={faArrowLeft}/> FAQ</h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
                    <span className='block '>Any questions</span>
                    <span className='block md:ml-44'>for data</span>
                    <span className='block md:ml-44' >  science</span>
                </h1>

                <div className='w-[80%]'>
                <p className='mt-8 '>Pellentesque purus neque, pretium non purus vitae, commodo cursus libero. Praesent eget tempor est. <br /> Aliquam molestie erat vitae faucibus volutpat </p>
                </div>
            </div>
    </div>
  )
}

export default Section6