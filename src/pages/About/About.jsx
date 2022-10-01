import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import GeneralHero from '../../components/Hero/GeneralHero'
import AboutUs from '../../components/About/AboutUs'
import MissionVision from '../../components/About/MissionVision'
import Question from '../../components/About/Question'

function About() {
  return (
    <div>
      <GeneralHero />
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
      <AboutUs />
      <MissionVision />
      <Question />
    </div>
  )
}

export default About
