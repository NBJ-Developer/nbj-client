import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ServicesCard from '../Services/ServicesCard'
import Slider from '../../elements/Slidereffect/Slidereffect'
import Grid from '@mui/material/Grid'

function SideAttraction() {

  const contents = [
    {
      imgPath: 'hotel.png',
      label: 'Hotels Reservations',
      body: `Book a room in our hotels to relax after a long flight. 
      We have different rooms that suit your taste. Our rooms are 
      also pet friendly and you definately enjoy your stay.`,
      buttonDisplay: 'secondary',
      secondaryButton: 'Contact Us',
    },
    {
      imgPath: 'transport.png',
      label: 'Transport Service',
      body: `Take advantage of your stop to visit our restaurants. Everything 
      in between from breakfast to dinner is made carefully with excellent hygiene.`,
      buttonDisplay: 'secondary',
      secondaryButton: 'Contact Us',
    },
    {
      imgPath: 'vacation.png',
      label: 'Vacation Plan',
      body: `If you are stressed out and in need of spa services and quality 
      relaxation spots, Let’s help you fulfil those wishes.`,
      buttonDisplay: 'secondary',
      secondaryButton: 'Contact Us',
    },
  ]

  return (
    <div>
      <Box sx={{
        mt: 22,
        display: 'flex',
        width: '100%',
        height: '75vh',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '40%', md: '25%' },
          backgroundColor: '#2B47A1',
        }}>
          <Typography sx={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: { xs: '27px', sm: '28px', md: '30px' },
            color: '#ffffff',
            textAlign: 'center',
            marginTop: '17px'
          }}>
            Side Attraction
          </Typography>
        </Box>
        <Box sx={{
          display: {xs: 'none', md:'flex'},
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'scroll',
          px: 1,
          width: { xs: '60%', md: '75%' },
          backgroundColor: 'rgba(43, 71, 161, 0.2)',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Slider slideComponent={<ServicesCard content={contents[0]} />} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Slider slideComponent={<ServicesCard content={contents[1]} />} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Slider slideComponent={<ServicesCard content={contents[2]} />} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{
          display: {xs: 'flex', md: 'none'},
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        }}>
          {contents.map(content => <Box key={content.imgPath} sx={{ width: '85%'}}><Slider slideComponent={<ServicesCard content={content}/>} /></Box>)}
        </Box>
      </Box>
    </div>
  )
}

export default SideAttraction
