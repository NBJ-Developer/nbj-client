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
  const ourStoryProps = {
    heading: 'Our',
    heading1: 'Story',
    display: true,
    image: 'airplain2.png',
    content: `NBJ was birthed in 2020 out of the passion to provide the 
    highest standard of air travel while ensuring the safety and comfort 
    of individuals around the world. We are a ground handling company 
    committed to providing quality, confidential, and safe air travel 
    service because we know how important it is for clients to expand 
    and network globally. Both in the air and on the ground, we are focused 
    on giving you a unique travel experience regardless of travel purpose 
    and provide a enviable working environment.`
  }
  return (
    <div>
      <NavBar/>
      <Hero />
      <Benefits />
      <OurStory ourStoryProps={ourStoryProps}/>
      <Services />
      <CallToAction />
      <Testimonials />
      <Sub />
      <Footer />
    </div>
  )
}

export default Home
