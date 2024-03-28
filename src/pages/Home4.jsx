import React from 'react'
import HeroSection from '../components/Home4/HeroSection'
import Section1 from '../components/Home4/Section1'
import Section2 from '../components/Home4/Section2'
import Section3 from '../components/Home4/Section3'
import Section4 from '../components/Home4/Section4'
import Section5 from '../components/Home4/Section5'
import Section6 from '../components/Home4/Section6'
import Section7 from '../components/Home4/Section7'

const Home4 = () => {
  return (
    <div className='container mx-auto'>

          <div className='container mx-auto p-6'>
            <HeroSection/>
        </div>

        <div className='container mx-auto p-6'>
            <Section1/>
        </div>

        <div className='container mx-auto p-6'>
            <Section2/>
        </div>

        <div className='container mx-auto p-6'>
            <Section3/>
        </div>

        <div className='container mx-auto p-6'>
            <Section4/>
        </div>

        <div className='container mx-auto p-6'>
            <Section5/>
        </div>


        <div className='container mx-auto p-6'>
            <Section6/>
        </div>

        <div className=' md:p-8'>
            <Section7/>
        </div>

    </div>
  )
}

export default Home4