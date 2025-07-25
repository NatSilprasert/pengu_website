import AboutUs from '@/components/sections/AboutUs'
import AboutUsBox from '@/components/common/AboutUsBox'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layout/Navbar'
import SmoothWrapper from '@/components/layout/SmoothWrapper'
import Testimonial from '@/components/sections/Testimonial'
import Project from '@/components/sections/Project'
import Qoutes from '@/components/sections/Qoutes'
import Footer from '@/components/layout/Footer'
import Service from '@/components/sections/Service'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

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
        <section className='gradient-bg'>
          <Service />
          <Process />
        </section>
        <Contact />
        <Qoutes />
        <Footer />
      </SmoothWrapper>
    </main>
  )
}

export default Home
