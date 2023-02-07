import { Box, Typography } from '@mui/material'
import React from 'react'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import clip from '../../assets/images/video.mp4'
// import image from '../../assets/images/video.png'

function Video() {
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
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          width: '60vw',
          height: '40vw',
          bottom: '0px',
          borderRadius: '5px',
          flexGrow: 1,
        }}>
          <video controls src={clip} playsInLine loop muted width='70%' height='100%' style={{background: 'rgba(0, 0, 0, 0.59)'}}/>
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
        marginTop: '17px',
        position: 'absolute',
    }} variant='h1'>
        Workers Video <br />
        <span style={{color: '#ffffff'}}>See our working video</span>
    </Typography>
      
        </Box>
    </div>
  )
}

export default Video
