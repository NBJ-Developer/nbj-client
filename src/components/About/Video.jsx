import { Box, Typography } from '@mui/material'
import React from 'react'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import clip from '../../assets/images/video.mp4'
import image from '../../assets/images/video.png'

function Video() {
  return (
    <div>
      <Box sx={{   
            display: 'flex',
            mt: 16,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
          <Box sx={{ 
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.59)',
          width: '60vw',
          height: '60vh',
          bottom: '0px',
          borderRadius: '5px',
          flexGrow: 1,
        }}>
          <video src={clip} playsInLine autoPlay loop muted width='100%' height='100%'/>
      </Box>
            
        <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', 
              width: '60vw',
              height: '60vh',
              background: 'rgba(0, 0, 0, 0.51)',
              borderRadius: '5px',
              zIndex: 2,
            }}>
              
            
              
          <Box sx={{
            position: 'absolute',
            left: 12,
            right: 12,
            pt: 9,
            zIndex: 2,
          }}>
            <Box sx={{
              textAlign: 'center',
            }}>
              <PlayCircleFilledWhiteOutlinedIcon 
                fontSize='large' 
                color='#ffffff' 
                sx={{
                color: '#ffffff',
                zIndex: 2,
              }}/>
            </Box>
            
            <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '2vw',
                lineHeight: '3vw',
                color: '#F9A020',
                zIndex: 2,
                textAlign: 'center',
                marginTop: '17px'
            }} variant='h1'>
                Workers Video
            </Typography>
            <Typography sx={{
              font: 'Raleway',
              fontWeight: '700',
              fontSize: '3vw',
              lineHeight: '3vw',
              color: '#ffffff',
              zIndex: 2,
              textAlign: 'center',
              marginTop: '17px',
            }}>
                See our working video
            </Typography>
          </Box>
                
          </Box>
        </Box>
    </div>
  )
}

export default Video
