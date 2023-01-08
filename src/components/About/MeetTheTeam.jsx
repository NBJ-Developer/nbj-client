import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ServicesCard from '../Services/ServicesCard'
import Slider from '../../elements/Slidereffect/Slidereffect'

function MeetTheTeam() {
  const cardContents = [
    {
      imgPath: 'team1.png',
      label: 'Nyerere Bolanle',
      post: 'CEO',
      buttonDisplay: false,
    },
    {
      imgPath: 'team2.png',
      label: 'Capt. Nyerere John',
      post: 'Pilot-in-charge',
      buttonDisplay: false,
    },
    {
      imgPath: 'team3.png',
      label: 'Akeni Philip Elvis',
      post: 'Director of Operations',
      buttonDisplay: false,
    },
  ]
  return (
    <Box sx={{
      mt: {xs: 16, md: 20},
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
      my: 3,
      textAlign: 'center',
    }}>
        <Typography sx={{
          mb: 3,
          fontFamily: 'Raleway',
          fontSize: '32px',
          fontWeight: '700',
        }}>
          MEET THE <span className='orangeSpan'>TEAM</span> 
        </Typography>
        <Typography sx={{
          fontFamily: 'Open Sans',
          fontSize: '20px',
          fontWeight: '400',
        }}>
          Let’s see our team members
        </Typography>
      </Box>
      
      <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid container spacing={3}>
      {cardContents.map( data => (
        <Grid key={data.imgPath} item xs={12} md={4} 
        container
        direction="row"
        alignItems="center"
        justifyContent="center">
        <Slider  slideComponent={
          <ServicesCard content={data}/>
        }/>
        </Grid>
      ))}
        
      </Grid>
    </Box>
    </Box>
    
  )
}

export default MeetTheTeam
