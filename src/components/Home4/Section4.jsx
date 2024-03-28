import React from 'react'
import Image from "../../images/Square1.png"


const Section4 = () => {
  return (
    <div className='flex md:gap-8 gap-0 md:flex-row flex-col'>


<div className="flex-1 md:px-8 px-2 md:py-8 py-4">

<div className='flex flex-col justify-center'>
    <h2 className=' text-xl  p-2'> How It WorksUs</h2>
    <h1 className='md:text-5xl text-4xl font-semibold'>

    Create and Sell <br /> Your NFTs
    </h1>

    <div className=''>
        <p className='mt-4 text-gray-700' style={{ fontSize : "18px"}}>Aliquam at neque at ipsum ullamcorper commodo. Aenean venenatis magna sodales venenatis dictum.</p>
    </div>


    <div className='bg-white md:mt-4 mt-12 flex justify-center gap-4 rounded-3xl p-4'>
        
        <div className='w-[20%]'>
        <img src={Image} alt="" />
        </div>

        <div className='w-[80%]'>
            <h3 className='font-medium text-xl'>Setup Your Wallet</h3>

            
            <p className='text-gray-500 mt-1'>Praesent euismod eu elit id  maximus. Donec</p>




        </div>

    </div>
   

</div>

</div>


        <div className='flex-1'>
        <div className='bg-white mt-4 flex justify-center gap-4 rounded-3xl p-4'>
        
        <div className='w-[20%]'>
        <img src={Image} alt="" />
        </div>

        <div className='w-[80%]'>
            <h3 className='font-medium text-xl'>Setup Your Wallet</h3>

            
            <p className='text-gray-500 mt-1'>Praesent euismod eu elit id  maximus. Donec</p>




        </div>

    </div>

    <div className='bg-white mt-4 flex justify-center gap-4 rounded-3xl p-4'>
        
        <div className='w-[20%]'>
        <img src={Image} alt="" />
        </div>

        <div className='w-[80%]'>
            <h3 className='font-medium text-xl'>Setup Your Wallet</h3>

            
            <p className='text-gray-500 mt-1'>Praesent euismod eu elit id  maximus. Donec</p>




        </div>

    </div>

    <div className='bg-white mt-4 flex justify-center gap-4 rounded-3xl p-4'>
        
        <div className='w-[20%]'>
        <img src={Image} alt="" />
        </div>

        <div className='w-[80%]'>
            <h3 className='font-medium text-xl'>Setup Your Wallet</h3>

            
            <p className='text-gray-500 mt-1'>Praesent euismod eu elit id  maximus. Donec</p>




        </div>

    </div>
        </div>
    </div>
  )
}

export default Section4