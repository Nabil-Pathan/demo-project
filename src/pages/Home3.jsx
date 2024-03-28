import React from 'react'
import HeroSection from '../components/Home3/HeroSection'
import Section2 from '../components/Home3/Section2'
import Section3 from '../components/Home3/Section3'
import Section4 from '../components/Home3/Section4'
import Section5 from '../components/Home3/Section5'
import Section6 from '../components/Home3/Section6'
import Section7 from '../components/Home3/Section7'
import Section8 from '../components/Home3/Section8'
import Section9 from '../components/Home3/Section9'
import Section10 from '../components/Home3/Section10'

const Home3 = () => {
  return (
    <div className='container mx-auto'>

        <div className='container mx-auto p-6'>
            <HeroSection/>
        </div>


        <div className='container mt-10 mx-auto p-6'>
            <Section2/>
        </div>


        <div className='container mt-10 mx-auto p-6'>
            <Section3/>
        </div>


        <div className='container mt-10 mx-auto p-6'>
            <Section4/>
        </div>

        <div className='container mt-10 mx-auto md:p-8 p-2'>
            <Section5/>
        </div>

        <div className='container mt-10 mx-auto md:p-8 p-2'>
            <Section6/>
        </div>


        <div className='container mt-10 mx-auto md:p-8 p-2'>
            <Section7/>
        </div>

        <div className='container mt-10 mx-auto md:p-8 p-2'>
            <Section8/>
        </div>


        <div className='container mt-10 mx-auto md:p-8 p-2'>
            <Section9/>
        </div>


        <div className='container mt-10 mx-auto md:p-8 p-2'>
            <Section10/>
        </div>

    </div>
  )
}

export default Home3