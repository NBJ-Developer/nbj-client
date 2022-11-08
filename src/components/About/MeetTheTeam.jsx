import { Box, Typography } from '@mui/material'
import React from 'react'
import ServicesCard from '../Services/ServicesCard'

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
      {cardContents.map( data => (
        <Box key={data.imgPath}>
          <ServicesCard content={data}/>
        </Box>
      ))}
    </Box>
    </Box>
    
  )
}

export default MeetTheTeam
