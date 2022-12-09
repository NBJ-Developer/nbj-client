import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';


function MediaComponent() {
  return (
    <div>
      <Box sx={{  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
          mt: 2,
          py: {xs: 0.6, md: 0},
          px: {xs: 4, md: 0},
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Link href="#">
            <LinkedInIcon sx={{
              mr: 6,
              color: '#ffffff',
            }}/>
          </Link>
          <Link href="https://twitter.com/nbj_vip" target={'_blank'}>
            <TwitterIcon sx={{
              mr: 6,
              color:  '#ffffff',
            }}/>
          </Link>
          <Link href="#">
            <InstagramIcon sx={{
              color: '#ffffff',
            }}/>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default MediaComponent
