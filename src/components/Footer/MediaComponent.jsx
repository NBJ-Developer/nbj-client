import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { FiTwitter, FiInstagram } from 'react-icons/fi'


function MediaComponent() {
  return (
    <div>
      <Box sx={{  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '56px'
       }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '23px',
          color: '#ffffff',
        }}>
          Connect with us:
        </Typography>
        <Box sx={{ 
          width: '180px',
          p: {xs: 1, md: 0},
          mt: 3,
          background: {xs: '#d9d9d9', md: 'none'},
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <a href="/" style={{
            color: '#ffffff',
            cursor: 'pointer'
          }}>
            <TiSocialLinkedinCircular style={{ 
              fontSize: '30px',  
              cursor: 'pointer'
            }} />
          </a>

          <a href="/" style={{
          color: '#ffffff',
              cursor: 'pointer'
          }}>
            <FiTwitter style={{  
              fontSize: '25px', 
              cursor: 'pointer'
            }} />
          </a>

          <a href="/" style={{
          color: '#ffffff',
              cursor: 'pointer'
          }}>
            <FiInstagram style={{ 
              fontSize: '25px',
              cursor: 'pointer'
            }} />
          </a>
        </Box>
            </Box>
    </div>
  )
}

export default MediaComponent
