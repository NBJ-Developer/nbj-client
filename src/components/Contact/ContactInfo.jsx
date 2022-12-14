import React from 'react'
import Box from '@mui/material/Box'
import { Grid, Paper } from '@mui/material'
import ContactInfoComponent from './ContactInfoComponent'

function ContactInfo() {

    const statisticContent = [
        {
         imgPath: 'callUs.png',
         label: 'Call Us',
         body: '+234 8169003746', 
        },
        {
          imgPath: 'emailUs.png',
          label: 'Email Us',
          body: 'nbjvipgroundhandling@gmail.com', 
         },
         {
          imgPath: 'visitUs.png',
          label: 'Visit Us',
          body: 'Plot 23, MMIA Road, Ikeja, Lagos', 
         },
      ]

  return (
    <div>
      <Box sx={{
        mt: 16,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Paper sx={{
          width: {xs: '80%', md: '90%'},
          px: 3,
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: 'space-between',
          py: {xs: 2, md: 4},
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
              <ContactInfoComponent content={statisticContent[0]}/>
            </Grid>
            <Grid item xs={12} md={4} >
              <ContactInfoComponent content={statisticContent[1]}/>
            </Grid>
            <Grid item xs={12} md={4} >
              <ContactInfoComponent content={statisticContent[2]}/>
            </Grid>
          </Grid>
        </Paper>
      </Box>
   
    </div>
  )
}

export default ContactInfo
