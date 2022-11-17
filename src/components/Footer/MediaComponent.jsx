import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
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
          mt: 3,
          py: {xs: 0.6, md: 0},
          px: {xs: 4, md: 0},
          background: {xs: '#d9d9d9', md: 'none'},
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <LinkedInIcon sx={{
            mr: 6,
            color: {xs: '', md: '#ffffff'},
          }}/>
          <TwitterIcon sx={{
            mr: 6,
            color: {xs: '', md: '#ffffff'},
          }}/>
          <InstagramIcon sx={{
            color: {xs: '', md: '#ffffff'},
          }}/>
        </Box>
      </Box>
    </div>
  )
}

export default MediaComponent
