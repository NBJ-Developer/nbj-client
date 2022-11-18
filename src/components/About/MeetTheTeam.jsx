import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ServicesCard from '../Services/ServicesCard'
import Slider from '../../elements/Slider/Slider'

function MeetTheTeam() {
  const cardContents = [
    {
      imgPath: 'team1.png',
      label: 'Nyerere Bolanle',
      post: 'CEO',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dictumst nisi magnis.',
      buttonDisplay: false,
    },
    {
      imgPath: 'team2.png',
      label: 'Nyerere Bolanle',
      post: 'CEO',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dictumst nisi magnis.',
      buttonDisplay: false,
    },
    {
      imgPath: 'team3.png',
      label: 'Nyerere Bolanle',
      post: 'CEO',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dictumst nisi magnis.',
      buttonDisplay: false,
    },
  ]
  return (
    <Box sx={{
      mt: 20,
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
      justifyContent: 'space-between',
    }}>
      <Grid container spacing={2}>
      {cardContents.map( data => (
        <Grid key={data.imgPath} item xs={6} md={4}>
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
