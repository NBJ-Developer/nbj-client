import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function NbjLogo() {
  return (
    <div>
      <Box sx={{ 
        width: '100%',     
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          border: '2px solid #F9A020',
          borderRadius: '50%',
          width: '90px',
          height: '90px',
        }}>
          <img src="nbj-logo.png" alt="NBJ-LOGO" style={{ width: '200px', height: '50px',}}/>
        </Box>
        <Box sx={{  
            width: '25%',
            height: '82px',
        }}>
          <Typography variant='h1' sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '28px',
            color: '#ffffff',
          }} >
            NBJ VIP GROUND HANDLING
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default NbjLogo
