import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function ServicesDetails({content}) {
  return (
    <div>
      <Box sx={{
    }}>
        <Typography sx={{
          mb: 1,
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '41px',
          lineHeight: '49px',
          textAlign: 'center',
          color: '#0E1035',
        }}>
          {content.label}
        </Typography>
        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '28px',
          lineHeight: '32px',
          textAlign: 'center',
          color: '#0E1035',
        }}>
          {content.body}
        </Typography>
      </Box>
    </div>
  )
}

export default ServicesDetails
