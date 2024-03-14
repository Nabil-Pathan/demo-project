import { faArrowDown, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section9 = () => {
  return (
    <div className='flex md:flex-row flex-col p-4 gap-4 mt-10'>

     <div className='flex md:w-[40%]  flex-col'>
      
       <div className='pr-20 pl-6 md:py-10 py-4 rounded-3xl bg-gray-300'>
       <h2 className=' text-xl p-2'>  Blog & News  <FontAwesomeIcon icon={faArrowRight}/> </h2>

       <h1 className="text-4xl font-semibold">Ger Update for <br /> Data Science</h1>

       <h3 className='mt-4 text-xl'>68,000 client Trusted Restly</h3>
       </div>

       <div className='flex gap-6 mt-2 w-full'>
       <button className='border w-full border-gray-800   md:px-16 px-4 md:py-6 py-3 rounded-full duration-500 text-sm'>Contact Now</button>


       <div className='bg-gray-300  px-10 py-6 flex gap-10 text-xl rounded-3xl '>
         <FontAwesomeIcon icon={faArrowUp}/>
         <FontAwesomeIcon icon={faArrowDown}/>

       </div>
       </div>


       
    
     </div>



     <div className='flex gap-3 md:w-[60%] flex-col'>

      <div className='bg-white rounded-3xl flex'>

        <div className='bg-gray-300  p-8 rounded-tl-3xl rounded-bl-3xl'>
            <p className='text-sm text-center'>April</p>

            <h2 className='mt-1 text-xl text-center'>1</h2>


            <p className='mt-10 text-sm  text-center'>12:00 PM</p>
        </div>


        <div className='p-8'>

        <h2 className='font-medium'>how business technology changed how we think about death</h2>

         <h2 className=' text-sm mt-10 p-2'>  Click Here  <FontAwesomeIcon icon={faArrowRight}/> </h2>        
         </div>

      </div>


      <div className='bg-white rounded-3xl flex'>

        <div className='bg-gray-300  p-8 rounded-tl-3xl rounded-bl-3xl'>
            <p className='text-sm text-center'>April</p>

            <h2 className='mt-1 text-xl text-center'>1</h2>


            <p className='mt-10 text-sm  text-center'>12:00 PM</p>
        </div>


        <div className='p-8'>

        <h2 className='font-medium'>how business technology changed how we think about death</h2>

         <h2 className=' text-sm mt-10 p-2'>  Click Here  <FontAwesomeIcon icon={faArrowRight}/> </h2>        
         </div>

      </div>

     </div>

    </div>
  )
}

export default Section9