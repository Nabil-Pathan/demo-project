import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from "../../images/Square2.png"

const Section1 = () => {
  return (
    <div className='bg-gray-300 flex flex-col gap-8 rounded-3xl md:p-6 p-4'>

        <div className='bg-white w-full md:rounded-3xl rounded-xl flex md:flex-row flex-col gap-4 items-center justify-between px-4 py-6'>
            <h1 className='md:text-4xl text-3xl font-semibold'>Live Auctions</h1>


            <div className='flex gap-3'>
                <span className='rounded-full px-5 py-3 border border-gray-900'>
                    <FontAwesomeIcon className='md:text-2xl' icon={faAngleLeft}/>
                </span>

                <span className='rounded-full px-5 py-3 border border-gray-900'>
                    <FontAwesomeIcon className='md:text-2xl' icon={faAngleRight}/>
                </span>
            </div>

        </div>


        {/* Cards  */}

        <div className='grid gap-6 md:grid-cols-4 grid-cols-1'>

             <div className='bg-white rounded-3xl  p-3 flex items-center flex-col gap-6 '>
                 <div className=''>
                    <img className='' src={Image} alt="" />
                 </div>

                 <div>

                <div>
                 <h3 className='font-semibold text-xl'>Nike Running - Neon</h3>

                 <h2 className='flex items-center mt-4 text-2xl font-semibold justify-between'>$ 210.00  <span className='rounded-full px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faBagShopping}/> </span></h2>

                 <hr  className='bg-gray-800 mt-4 h-[2px]'/>

                 <div className='flex mt-4 items-center gap-3'>
                    <div className='bg-gray-300 rounded-full p-4'>

                    </div>

                    <p className='font-medium'>Seller name</p>
                    </div>
                 </div>
                 </div>

             </div>


             <div className='bg-white rounded-3xl  p-3 flex items-center flex-col gap-6 '>
                 <div className=''>
                    <img className='' src={Image} alt="" />
                 </div>

                 <div>

                <div>
                 <h3 className='font-semibold text-xl'>Nike Running - Neon</h3>

                 <h2 className='flex items-center mt-4 text-2xl font-semibold justify-between'>$ 210.00  <span className='rounded-full px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faBagShopping}/> </span></h2>

                 <hr  className='bg-gray-800 mt-4 h-[2px]'/>

                 <div className='flex mt-4 items-center gap-3'>
                    <div className='bg-gray-300 rounded-full p-4'>

                    </div>

                    <p className='font-medium'>Seller name</p>
                    </div>
                 </div>
                 </div>

             </div>


             <div className='bg-white rounded-3xl  p-3 flex items-center flex-col gap-6 '>
                 <div className=''>
                    <img className='' src={Image} alt="" />
                 </div>

                 <div>

                <div>
                 <h3 className='font-semibold text-xl'>Nike Running - Neon</h3>

                 <h2 className='flex items-center mt-4 text-2xl font-semibold justify-between'>$ 210.00  <span className='rounded-full px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faBagShopping}/> </span></h2>

                 <hr  className='bg-gray-800 mt-4 h-[2px]'/>

                 <div className='flex mt-4 items-center gap-3'>
                    <div className='bg-gray-300 rounded-full p-4'>

                    </div>

                    <p className='font-medium'>Seller name</p>
                    </div>
                 </div>
                 </div>

             </div>


             <div className='bg-white rounded-3xl  p-3 flex items-center flex-col gap-6 '>
                 <div className=''>
                    <img className='' src={Image} alt="" />
                 </div>

                 <div>

                <div>
                 <h3 className='font-semibold text-xl'>Nike Running - Neon</h3>

                 <h2 className='flex items-center mt-4 text-2xl font-semibold justify-between'>$ 210.00  <span className='rounded-full px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faBagShopping}/> </span></h2>

                 <hr  className='bg-gray-800 mt-4 h-[2px]'/>

                 <div className='flex mt-4 items-center gap-3'>
                    <div className='bg-gray-300 rounded-full p-4'>

                    </div>

                    <p className='font-medium'>Seller name</p>
                    </div>
                 </div>
                 </div>

             </div>
           
        </div>

    </div>
  )
}

export default Section1