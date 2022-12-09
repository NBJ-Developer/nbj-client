import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function ContactInfoComponent({ content }) {
  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 1,
        }}>
        <Box
          component="img"
          sx={{
            overflow: 'hidden',
            borderRadius: '0px 30px 30px 0px',
          }}
          src={content.imgPath}
          alt={content.imgPath}
        />
        <Typography sx={{
          mb: 1,
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: '2vw',
          lineHeight: '2vw',
          color: '#434343',
          textAlign: 'center',
          color: '#0E1035',
        }}>
          {content.label}
        </Typography>
        <Typography sx={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '1.9vw',
          lineHeight: '1.8vw',
          textAlign: 'center',
          color: '#0E1035',
        }}>
          {content.body} 
        </Typography>
      </Box>
    </div>
  )
}

export default ContactInfoComponent