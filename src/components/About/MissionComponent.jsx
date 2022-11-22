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
          width: '19vw',
          height: '19vw',
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontWeight: 700,
              fontSize: {sm: '28px', md:'30px'},
              lineHeight: {sm: '45px', md: '55px'},
              color: '#2B47A1',
              textAlign: 'center',
            }}>
              {misionContent.label}
            </Typography>
          </Box>
          </Box>
          <Typography sx={{
                marginTop:'10px',
                fontFamily:'Open Sans',
                color: '#ffffff',
                fontWeight: '400',
                fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
                lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
                }}>
                {misionContent.body}
              </Typography>
          </Box>
        
          }/>
          </Box>
  )
}

export default MissionComponent
