import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from "../../images/Square2.png"

const Section3 = () => {
  return (
    <div className='bg-gray-300 flex flex-col gap-8 rounded-3xl md:p-6 p-4'>

        <div className='bg-white w-full md:rounded-3xl rounded-xl  px-4  py-6'>
            <h1 className='md:text-4xl text-2xl font-semibold'>Explore Collection’s</h1>
        </div>


        {/* Categories */}


        <div className='flex gap-5'>

            <div className='bg-gray-200 rounded-3xl md:px-6 px-3 py-3'>
                All NFT
            </div>

            <div className='bg-gray-200 rounded-3xl md:px-6 px-3 py-3'>
                actions
            </div>

            <div className='bg-gray-200 rounded-3xl md:px-6 px-3 py-3'>
                Art Work
            </div>

            <div className='bg-gray-200 md:block hidden rounded-3xl px-6 py-3'>
                Cartoon
            </div>

            <div className='bg-gray-200 md:block hidden rounded-3xl px-6 py-3'>
                Collectibles
            </div>

            <div className='bg-gray-200 md:block hidden rounded-3xl px-6 py-3'>
                Game Assets
            </div>

            <div className='bg-gray-200 md:block hidden rounded-3xl px-6 py-3'>
                Music
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

export default Section3