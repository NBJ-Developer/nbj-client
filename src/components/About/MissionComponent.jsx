import { Box, Typography } from '@mui/material'
import React from 'react'
import Slider from '../../elements/Slidereffect/Slidereffect'

function MissionComponent({ misionContent }) {
  return (
      <Box sx={{
        width: '55%',
        p: 1,
      }}>
      <Slider slideComponent={
        <Box >
          <Box sx={{
            display: 'flex',
            justifyContent: misionContent.label === 'VISSION'? 'right': 'left'
          }}>
          <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          }}>
            <Typography sx={{
              fontFamily:'raleway',
              fontWeight:'700',
              fontSize: '18px',
              color: '#2B47A1',
              textAlign: 'center',
            }}>
              {misionContent.label}
            </Typography>
          </Box>
          </Box>
          <Typography sx={{
                fontFamily:'Open Sans',
                marginTop:'10px',
                color: '#ffffff',
                fontSize: '15px',
                lineHeight: '27.21px',
                }}>
                {misionContent.body}
              </Typography>
          </Box>
        
          }/>
          </Box>
  )
}

export default MissionComponent
