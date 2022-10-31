import React from 'react'
import OurStory from '../../components/About/OurStory'
import Benefits from '../../components/Benefits/Benefits'
import CallToAction from '../../components/CallToAction/CallToAction'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import Services from '../../components/Services/Services'
import Sub from '../../components/Sub/Sub'
import Testimonials from '../../components/Testimonials/Testimonials'


const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Benefits />
      <OurStory />
      <Services />
      <CallToAction />
      <Testimonials />
      <Sub />
      <Footer />
    </div>
  )
}

export default Home
