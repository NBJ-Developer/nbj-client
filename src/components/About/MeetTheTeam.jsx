import { Box } from '@mui/material'
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
      mt: 16,
    }}>
      <ServicesCard content={cardContents[0]}/>
    </Box>
  )
}

export default MeetTheTeam
