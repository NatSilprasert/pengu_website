import AboutUs from '@/components/sections/AboutUs'
import AboutUsBox from '@/components/common/AboutUsBox'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layout/Navbar'
import SmoothWrapper from '@/components/layout/SmoothWrapper'
import Testimonial from '@/components/sections/Testimonial'
import React from 'react'
import Project from '@/components/sections/Project'
import Service from '@/components/sections/Service'

const Home = () => {
  return (
    <main>
      <Navbar />
      <AboutUsBox />
      <SmoothWrapper>
        <section className='gradient-bg'>
          <Hero />
          <AboutUs />
        </section>
        <Testimonial />
        <Project />
        <Service />
      </SmoothWrapper>
    </main>
  )
}

export default Home
