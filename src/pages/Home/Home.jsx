import React from 'react'
import OurStory from '../../components/About/OurStory'
import Benefits from '../../components/Benefits/Benefits'
import CallToAction from '../../components/CallToAction/CallToAction'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import Services from '../../components/Services/Services'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Benefits />
      <OurStory />
      <Services />
      <CallToAction />
    </div>
  )
}

export default Home