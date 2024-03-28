import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section8 = () => {
  return (
    <div className='mt-8'>
      <div className='bg-gray-300 rounded-3xl md:px-10 px-8 py-4'>
         <h3 className='md:text-2xl text-xl text-center'>Our Project</h3>
         <h1 className='md:text-4xl text-2xl font-semibold mt-4 text-center'>Our Latest Digital <br /> Security Projects Solution</h1>
       
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>


<div className='security-project-gradiend flex mt-8  flex-col rounded-3xl md:py-8  md:px-6 p-4'>
    <div className='flex justify-between mt-16 gap-4 '>
        <div className='text-white text-end'>
            <h2 className='text-xl'>Digital Security</h2>
            <h1 className='text-xl font-medium'>Cyber Security</h1>
        </div>
        <FontAwesomeIcon className='text-3xl text-white' icon={faAngleRight}/>
    </div>
</div>


<div className='security-project-gradiend flex mt-8  flex-col rounded-3xl md:py-8  md:px-6 p-4'>
    <div className='flex justify-between mt-16 gap-4 '>
        <div className='text-white text-end'>
            <h2 className='text-xl'>Digital Security</h2>
            <h1 className='text-xl font-medium'>Cyber Security</h1>
        </div>
        <FontAwesomeIcon className='text-3xl text-white' icon={faAngleRight}/>
    </div>
</div>


<div className='security-project-gradiend flex mt-8  flex-col rounded-3xl md:py-8  md:px-6 p-4'>
    <div className='flex justify-between mt-16 gap-4 '>
        <div className='text-white text-end'>
            <h2 className='text-xl'>Digital Security</h2>
            <h1 className='text-xl font-medium'>Cyber Security</h1>
        </div>
        <FontAwesomeIcon className='text-3xl text-white' icon={faAngleRight}/>
    </div>
</div>

<div className='security-project-gradiend flex mt-8  flex-col rounded-3xl md:py-8  md:px-6 p-4'>
    <div className='flex justify-between mt-16 gap-4 '>
        <div className='text-white text-end'>
            <h2 className='text-xl'>Digital Security</h2>
            <h1 className='text-xl font-medium'>Cyber Security</h1>
        </div>
        <FontAwesomeIcon className='text-3xl text-white' icon={faAngleRight}/>
    </div>
</div>




</div>
    </div>
  )
}

export default Section8