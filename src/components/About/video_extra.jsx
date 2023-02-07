import { Box, Typography } from '@mui/material'
import React from 'react'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import clip from '../../assets/images/video.mp4'

function Video_extra() {
  return (
    <div>
      <Box sx={{   
            display: 'flex',
            mt: 16,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
          <Box sx={{ 
          position: 'absolute',
          width: '60vw',
          height: '35vw',
          bottom: '0px',
          borderRadius: '5px',
          flexGrow: 1,
        }}>
          <video controls src={clip} playsInLine loop muted width='100%' height='100%' sx={{background: 'rgba(0, 0, 0, 0.59)'}}/>
      </Box>
            
        <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', 
              width: '70vw',
              height: '35vw',
              borderRadius: '5px',
              zIndex: 2,
            }}>
                
          <Box sx={{
            position: 'absolute',
            left: 12,
            right: 12,
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
                cursor: 'pointer'
              }} />
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

export default Video_extra
