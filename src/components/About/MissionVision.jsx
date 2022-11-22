import { Grid, List, ListItem, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import Slider from '../../elements/Slidereffect/Slidereffect'

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

const misionContent = [
  {
  label: 'CORE VALUES',
  body: `To provide the highest standards of safety through our highly 
  trained domestic and international field representatives and customer 
  service personnel.`,
},
{
  label: 'CORE VALUES',
  body: `To provide the highest standards of safety through our highly 
  trained domestic and international field representatives and customer 
  service personnel.`,
},
{
  label: 'CORE VALUES',
  body: `To provide the highest standards of safety through our highly 
  trained domestic and international field representatives and customer 
  service personnel.`,
},
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
        p: 8,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#02103E',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '50vh',
        }}>
          <Grid container spacing={4}>
            <Grid item xs={4} md={4}>
            <Slider slideComponent={
            <Box sx={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
            
            </Box>
          }/>
            </Grid>
            <Grid item xs={4} md={4}>
            <Slider slideComponent={
            <Box sx={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
            
            </Box>
          }/>
            </Grid>
            <Grid item xs={4} md={4}>
            <Slider slideComponent={
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Box>
              <Typography sx={{
              fontFamily:'Open Sans',
              marginTop:'10px',
              fontWeight: '700',
              color: '#ffffff',
              fontSize:{xs:'15px', md:'18px'},
              lineHeight: '27.21px',
              textAlign: 'left',
            }}>
              CORE VALUES
            </Typography>
              <List
                sx = {{
                listStyleType: 'disc',
                pl: 5,
                fontSize:{xs:'18px', md:'22px'},
                color: '#F9A020',
                '& .MuiListItem-root': {
                  display: 'list-item',
                },
                }}>
                <ListItem>
                <Typography sx={{
                fontFamily:'Open Sans',
                color: '#ffffff',
                fontSize: '18px',
              }}>
                Team work
              </Typography>
                </ListItem>
                <ListItem>
                <Typography sx={{
                marginTop:'10px',
                fontFamily:'Open Sans',
                color: '#ffffff',
                fontWeight: '400',
                fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
                lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
              }}>
                Commited to our customer
              </Typography>
                </ListItem>
                <ListItem>
                <Typography sx={{
                marginTop:'10px',
                fontFamily:'Open Sans',
                color: '#ffffff',
                fontWeight: '400',
                fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
                lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
              }}>
                Innovation
              </Typography>
                </ListItem>
                <ListItem>
                <Typography sx={{
                marginTop:'10px',
                fontFamily:'Open Sans',
                color: '#ffffff',
                fontWeight: '400',
                fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
                lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
              }}>
                Quality & Simplicity
              </Typography>
                </ListItem>
                </List>
              </Box>
           
            </Box>
          }/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    
  )
}

export default MissionVision
