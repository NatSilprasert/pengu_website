import AboutUs from '@/components/AboutUs'
import AboutUsBox from '@/components/AboutUsBox'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SmoothWrapper from '@/components/SmoothWrapper'
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
        <div className='min-h-screen' />
      </SmoothWrapper>
    </main>
  )
}

export default Home
