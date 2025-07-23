import AboutUs from '@/components/sections/AboutUs'
import AboutUsBox from '@/components/common/AboutUsBox'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layout/Navbar'
import SmoothWrapper from '@/components/layout/SmoothWrapper'
import Testimonial from '@/components/sections/Testimonial'
import React from 'react'

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
      </SmoothWrapper>
    </main>
  )
}

export default Home
