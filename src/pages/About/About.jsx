import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import GeneralHero from '../../components/Hero/GeneralHero'
import MissionVision from '../../components/About/MissionVision'
import Footer from '../../components/Footer/Footer'
import OurStory from '../../components/About/OurStory'
import MeetTheTeam from '../../components/About/MeetTheTeam'
import Available from '../../components/About/Available'
import ServicesDetails from '../../components/Statistic/ServicesDetails'
import bgImage from './aboutBG.png'
import { Paper } from '@mui/material'
import Statistic from '../../components/Statistic/Statistic'

function About() {
  const ourStoryProps = {
    heading: 'Our',
    heading1: 'Story',
    image: 'aboutImage1.png',
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
      <GeneralHero display={false} bgImage={bgImage} />
      <Box sx={{
        textalign:'center',
        display: {xs:'block', md:'none'},
        padding: '39px 47px 0px',
      }}>
        <Typography sx={{
        textAlign:'center',
      }}>
          If you want to know more about us, you’re in the right place. Read to learn how we can assist you
        </Typography>
      </Box>
      <OurStory ourStoryProps={ourStoryProps}/>
      <MeetTheTeam />
      <MissionVision />
      <Box sx={{
        mt: 16,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Statistic />
      </Box>
      <Footer />
    </div>
  )
}

export default About
