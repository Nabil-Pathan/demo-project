import React from 'react'
import HeroSection from '../components/Home2/HeroSection'
import Section2 from '../components/Home2/Section2'
import Section3 from '../components/Home2/Section3'
import Section4 from '../components/Home2/Section4'
import Section5 from '../components/Home2/Section5'
import Section6 from '../components/Home2/Section6'
import Section7 from '../components/Home2/Section7'
import Section8 from '../components/Home2/Section8'
import Section9 from '../components/Home2/Section9'
import Section10 from '../components/Home2/Section10'

const Home2 = () => {
  return (
    <div className='container mx-auto'>

        <div className='container mx-auto p-4'>
            <HeroSection/>
        </div>


        <div className='container mx-auto p-4'>
            <Section2/>
        </div>


        <div className='container mx-auto p-4'>
            <Section3/>
        </div>


        <div className='container mx-auto mt-10 p-4'>
            <Section4/>
        </div>


        <div className='container mx-auto mt-10 p-4'>
            <Section5/>
        </div>


        <div className='container mx-auto mt-20 p-8'>
            <Section6/>
        </div>


        <div className='container mx-auto mt-20 p-6'>
            <Section7/>
        </div>


        <div className='container mx-auto mt-20 p-6'>
            <Section8/>
        </div>


        <div className='container mx-auto mt-20 md:p-6 p-3'>
            <Section9/>
        </div>


        <div className='container mx-auto mt-20 p-6'>
            <Section10/>
        </div>

    </div>
  )
}

export default Home2