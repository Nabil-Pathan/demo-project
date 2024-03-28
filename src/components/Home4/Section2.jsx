import React from 'react'
import Image from "../../images/Circle1.png"

const Section2 = () => {
  return (
    <div className='bg-gray-300 md:mt-20 rounded-3xl md:p-6 p-4'>
        <div className=''>
            <h3 className='text-center md:text-xl'>Creator</h3>
            <h1  className='text-center md:text-4xl text-3xl font-semibold'>Our Top Sellers</h1>
        </div>


        <div className='grid md:grid-cols-4 gap-4 mt-8 grid-cols-1'>

            <div style={{background: "rgba(0, 0, 0, 0.1)"}} className=' rounded-3xl px-3 py-8 flex flex-col items-center justify-center'>
                <img src={Image} alt="" />

                <h4 className='text-xl text-center mt-4'>Machine Learning Bootcamp</h4>

                <p className='font-extrathin text-center mt-4'>200</p>
            </div>


            <div style={{background: "rgba(0, 0, 0, 0.1)"}} className=' rounded-3xl px-3 py-8 flex flex-col items-center justify-center'>
                <img src={Image} alt="" />

                <h4 className='text-xl text-center mt-4'>Machine Learning Bootcamp</h4>

                <p className='font-extrathin text-center mt-4'>200</p>
            </div>


            <div style={{background: "rgba(0, 0, 0, 0.1)"}} className=' rounded-3xl px-3 py-8 flex flex-col items-center justify-center'>
                <img src={Image} alt="" />

                <h4 className='text-xl text-center mt-4'>Machine Learning Bootcamp</h4>

                <p className='font-extrathin text-center mt-4'>200</p>
            </div>


            <div style={{background: "rgba(0, 0, 0, 0.1)"}} className=' rounded-3xl px-3 py-8 flex flex-col items-center justify-center'>
                <img src={Image} alt="" />

                <h4 className='text-xl text-center mt-4'>Machine Learning Bootcamp</h4>

                <p className='font-extrathin text-center mt-4'>200</p>
            </div>


        </div>
    </div>
  )
}

export default Section2