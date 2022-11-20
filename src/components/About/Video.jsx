import { Box, Typography } from '@mui/material'
import React from 'react'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
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
          width: '55%',
          height: '300px',
          bottom: '0px',
          borderRadius: '5px',
          flexGrow: 1,
        }}>

      </Box>
            
            <Box style={{
               backgroundImage: `url(${image})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: '100% 100%',
            }}
                sx={{ 
                width: '55%',
                height: '300px',
                background: 'rgba(0, 0, 0, 0.51)',
                borderRadius: '5px',
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
                  <PlayCircleFilledWhiteOutlinedIcon fontSize='large' color='#ffffff' sx={{
                  color: '#ffffff',
                  zIndex: 2,
                }}/>
                </Box>
                
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '22px',
                    color: '#F9A020',
                    zIndex: 2,
                    textAlign: 'center',
                    marginTop: '17px'
                }} variant='h1'>
                    Workers Video
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '40px',
                    lineHeight: '45px',
                    color: '#ffffff',
                    zIndex: 2,
                    textAlign: 'center',
                    marginTop: '17px'
                }} variant='h1'>
                    See our working video
                </Typography>
              </Box>
                
            </Box>
        </Box> 
    </div>
  )
}

export default Video
