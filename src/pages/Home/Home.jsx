import React from 'react'
import OurStory from '../../components/About/OurStory'
import Benefits from '../../components/Benefits/Benefits'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Benefits />
      <OurStory />
    </div>
  )
}

export default Home
