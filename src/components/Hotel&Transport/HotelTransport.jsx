import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ServicesCard from '../Services/ServicesCard'

function HotelTransport() {

  const contents = [
    {
      imgPath: 'hotel.png',
      label: 'Hotels Reservations',
      body: `Book a room in our hotels to relax after a long flight. 
      We have different rooms that suit your taste. Our rooms are 
      also pet friendly and you definately enjoy your stay.`,
      buttonDisplay: true,
      justify: 'left',
    },
    {
      imgPath: 'transport.png',
      label: 'Transport Service',
      body: `Take advantage of your stop to visit our restaurants. Everything 
      in between from breakfast to dinner is made carefully with excellent hygiene.`,
      buttonDisplay: true,
      justify: 'left',
    }
  ]

  return (
    <div>
      <Box sx={{
        mt: 26,
        display: 'flex',
        width: '100%',
        height: '500px',
      }}>
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        backgroundColor: '#2B47A1',
      }}>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '41px',
            lineHeight: '49px',
            color: '#ffffff',
            textAlign: 'center',
            marginTop: '17px'
          }}>
            Side Attraction
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '75%',
          backgroundColor: 'rgba(43, 71, 161, 0.2)',
        }}>
          <ServicesCard content={contents[0]}/>
          <ServicesCard content={contents[1]}/>
          <ServicesCard content={contents[1]}/>
        </Box>
      </Box>
    </div>
  )
}

export default HotelTransport
