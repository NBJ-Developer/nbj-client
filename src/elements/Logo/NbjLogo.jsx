import { Box, Typography } from '@mui/material'
import React from 'react'

function NbjLogo() {
  return (
    <div>
      <Box>
          <Box sx={{
          display: 'flex',
          py:2,
          }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            width: '50px',
            height: '50px'
          }}>
            <img src="nbj-logo.png" alt="NBJ-LOGO"/>
          </Box>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
            display: {xs: 'none', md: 'block'},
            mt: 1,
            width: '165px',
            lineHeight: '20px',
            textAlign: 'center',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            }}
          >
            NBJ VIP GROUND HANDLING LTD 
          </Typography>
          </Box>
        </Box>
    </div>
  )
}

export default NbjLogo
