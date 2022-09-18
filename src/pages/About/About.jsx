import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import GeneralHero from '../../components/Hero/GeneralHero'
import AboutUs from '../../components/About/AboutUs'

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
          you want to know more about us, you’re in the right place. Read to learn how we can assist you
        </Typography>
      </Box>
      <AboutUs />
    </div>
  )
}

export default About
