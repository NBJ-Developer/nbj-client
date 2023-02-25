import React from 'react'
import Box from '@mui/material/Box'
import { Paper } from '@mui/material'
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

          {
            statisticContent.map(content => (
            <div key={content.imgPath}><ContactInfoComponent content={content}/></div>
            ))
          }
        </Paper>
      </Box>
   
    </div>
  )
}

export default ContactInfo
