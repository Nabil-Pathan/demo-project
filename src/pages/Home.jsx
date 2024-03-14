import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Section7 from '../components/Home/Section7'
import Section8 from '../components/Home/Section8'
import Section9 from '../components/Home/Section9'
import Section10 from '../components/Home/Section10'

const Home = () => {
  return (
    <div className='container mx-auto'>

      <div className=''>
       <HeroSection/>
       </div>

       <div className='mt-10'>
       <Section2/>
       </div>


       <div className='container mx-auto mt-10'>
         <Section3/>
       </div>


       <div className='container mx-auto mt-20'>
         <Section4/>
       </div>


       <div className='container mx-auto mt-20'>
         <Section5/>
       </div>


       <div className='container mx-auto mt-20'>
         <Section6/>
       </div>


       <div className='container mx-auto mt-20'>
         <Section7/>
       </div>


       <div className='container mx-auto mt-20'>
         <Section8/>
       </div>


       <div className='container mx-auto mt-20'>
         <Section9/>
       </div>


       <div className='container mx-auto py-20 p-2 mt-20'>
         <Section10/>
       </div>

    </div>
  )
}

export default Home