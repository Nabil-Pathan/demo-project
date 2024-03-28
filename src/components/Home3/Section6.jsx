import React from 'react'
import Image1 from "../../images/Rectangle6.png"

const Section6 = () => {
    return (
        <>
        <div className='flex mt-44 bg-white rounded-3xl md:flex-row flex-col gap-10'>



            <div className="flex-1 md:px-8 px-2 md:py-8 py-4">

                <div className='flex flex-col'>
                    <h2 className=' text-xl  p-2'> Why Choose Us</h2>
                    <h1 className='md:text-6xl text-4xl font-semibold'>

                        <span className='block '>We Provide All</span>
                        <span className='block '>Solutions In One</span>
                        <span className='block ' >Application</span>
                    </h1>

                    <div className=''>
                        <p className='mt-4  text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer.</p>
                    </div>
                    <button className='border bg-gray-800 mt-8 text-white   px-8 py-2 rounded-full duration-500'>Get 14 days free trial</button>





                </div>


                

            </div>

           

            <div className="flex-1 flex items-center justify-center  md:px-8 px-2 md:py-8 py-4 ">
                <img className='' src={Image1} alt="" />
            </div>

        </div>

<div style={{
    background: "rgba(0, 0, 0, 0.3)"
}} className=' rounded-3xl p-6  flex md:flex-row flex-col gap-8'>

    <div className='flex-1 flex md:flex-row items-center justify-center flex-col gap-10'>
         <div className='p-4'>
         <div className='bg-gray-300 h-full w-[120px]  px-4 py-14 rounded-3xl '>
        </div>
         </div>
       

        <div className='flex-1'>
        <h3 className='text-xl md:text-start text-center font-medium'>Quality Design & Coding</h3>
        <p className='md:text-start text-center'>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero</p>
        </div>
    </div>

    <div className='flex-1 flex md:flex-row items-center justify-center flex-col gap-10'>
         <div className='p-4'>
         <div className='bg-gray-300 h-full w-[120px]  px-4 py-14 rounded-3xl '>
        </div>
         </div>
       

        <div className='flex-1'>
        <h3 className='text-xl md:text-start text-center font-medium'>Quality Design & Coding</h3>
        <p className='md:text-start text-center'>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero</p>
        </div>
    </div>
    

</div>

</>
    )
}

export default Section6