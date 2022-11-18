import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import Slider from '../../elements/Slider/Slider'
import VisionComponent from '../../elements/Vision/VisionComponent'
import VisionPapper from '../../elements/Vision/VisionPapper'

function MissionVision() {
  const componentContents = [
  {
    label: 'OUR VISSION',
    body: `To provide the highest standards of safety through our highly 
    trained domestic and international field representatives and customer 
    service personnel.`,
  },
  {
    label: 'OUR MISSION',
    body: 'To create Value and make a difference in air travel',
  },
  {
    label: 'CORE VALUE',
    body: `To provide the highest standards of safety through our highly 
    trained domestic and international field representatives and customer 
    service personnel.`,
  }
]

  const paperContents = [
  {
    image: 'visionLogo.png',
    label: 'Over +87',
    body: 'Safe & Enjoyable Flights'
  },
  {
    image: 'visionLogo.png',
    label: 'Over +87',
    body: 'Safe & Enjoyable Flights'
  },
  {
    image: 'visionLogo.png',
    label: 'Over +87',
    body: 'Safe & Enjoyable Flights'
  }
]
  return (
      <Box sx={{
        mt: 16,
        p: 10,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#02103E',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '35%',
          height: '50vh',
        }}>
          <Slider slideComponent={
            <Box>
            <Typography sx={{
                fontFamily:'raleway',
                color: '#ffffff',
                fontWeight:'700',
                fontSize: '22px',
                lineHeight: '25px',
              }}>
                OUR VISION
              </Typography>
              <Typography sx={{
                fontFamily:'Open Sans',
                marginTop:'10px',
                color: '#ffffff',
                fontSize:{xs:'15px', md:'18px'},
                lineHeight: '27.21px',
                }}>
                To provide the highest standards of safety through our highly 
                trained domestic and international field representatives and customer 
                service personnel.
              </Typography>
            </Box>
          }/>

          <Slider slideComponent={
            <Box>
            <Typography sx={{
                fontFamily:'raleway',
                color: '#ffffff',
                fontWeight:'700',
                fontSize: '22px',
                lineHeight: '25px',
              }}>
                OUR MISSION
              </Typography>
              <Typography sx={{
                fontFamily:'Open Sans',
                marginTop:'10px',
                color: '#ffffff',
                fontSize:{xs:'15px', md:'18px'},
                lineHeight: '27.21px',
                }}>
                To create Value and make a difference in air travel
              </Typography>
            </Box>
          }/>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth:{md:'25rem'},
        }}>
          <Slider slideComponent={
            <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            width: '130px',
            height: '130px',
            }}>
              <Typography sx={{
                fontFamily:'raleway',
                fontWeight:'700',
                fontSize: '22px',
                color: '#2B47A1',
                lineHeight: '25px',
                textAlign: 'center',
              }}>
                CORE VALUES
              </Typography>
          </Box>
          }/>
          <Slider slideComponent={
            <Typography sx={{
            fontFamily:'Open Sans',
            marginTop:'10px',
            color: '#ffffff',
            fontSize: '18px',
            lineHeight: '27.21px',
            wordSpacing: '-2px',
            textAlign:'center',
          }}>
            To provide the highest standards of safety through our highly 
            trained domestic and international field representatives and customer 
            service personnel.
          </Typography>
          }/>
          
        </Box>
      </Box>
    
  )
}

export default MissionVision
