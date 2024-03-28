import React from 'react'
import Herosection from '../components/Aboutus/Herosection'
import Section1 from '../components/Aboutus/Section1'
import Section2 from '../components/Aboutus/Section2'
import Section3 from '../components/Aboutus/Section3'
import Section4 from '../components/Aboutus/Section4'

const About = () => {
  return (
    <div className='container mx-auto'>

         <div>
           <Herosection/>
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

    </div>
  )
}

export default About