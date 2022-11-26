import { Box, Typography } from '@mui/material'
import React from 'react'

function NbjLogo() {
  return (
    <div>
      <Box sx={{
        display: 'flex',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          width: '45px',
          height: '45px'
        }}>
          <img src="nbj-logo.png" alt="NBJ-LOGO"/>
        </Box>
        <Typography
          component="a"
          href="/"
          sx={{
          display: {xs: 'none', md: 'block'},
          width: '11rem',
          lineHeight: '20px',
          fontWeight: 650,
          color: 'inherit',
          mt: 0.5,
          textDecoration: 'none',
          }}
        >
          NBJ VIP GROUND HANDLING LTD 
        </Typography>
      </Box>
    </div>
  )
}

export default NbjLogo
