import Box from '@mui/material/Box'
import React from 'react'
import BenefitComponent from './BenefitComponent'
import benefitsData from './benefitsData';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '../../elements/Slidereffect/Slidereffect'
function Benefits() {
  return (
    <div>
      <Box sx={{
        mt: 26,
      }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: {xs: '27px', sm: '28px', md:'30px'},
          lineHeight: {xs: '42px', xs: '45px', md: '55px'},
          color: '#434343',
          textAlign: 'center',
          
        }}>
          WHAT <span className='span1'>YOU</span> GET
        </Typography>
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        
      }}>
        <Box
          sx={{
            width: {xs: '100%', sm: '90%', md: '85%'},
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Slider slideComponent={
                <BenefitComponent 
                image= {'safety.png'} 
                data={benefitsData[0]}/>
              }/>
            </Grid>
            <Grid item xs={6} md={3}>
              <Slider slideComponent={
                <BenefitComponent 
                image= {'comfort&privacy.png'} 
                data={benefitsData[1]}/>
              }/>
            </Grid>
            <Grid item xs={6} md={3}>
              <Slider slideComponent={
                <BenefitComponent 
                image= {'convinience.png'}
                data={benefitsData[2]}/> 
              }/>
            </Grid>
            <Grid item xs={6} md={3}>
              <Slider slideComponent={
                <BenefitComponent 
                image= {'exellent.png'}
                data={benefitsData[3]}/> 
              }/>
            </Grid>
          </Grid>    
        </Box>
        {/* <Box sx={{
          display: {xs: 'flex', md: 'none'},
          justifyContent: 'center',
          alignItems: 'center', 
          }}>
            <Box sx={{
              maxWidth: '75vw',
              mt: 3,
            }}>
              <Grid container spacing={2}>
              <Grid item xs={6}>
              <BenefitComponent 
                benefitComponent={<WorkspacePremiumIcon sx={{
                color: '#F9A020',
              }}/>} 
              data={benefitsData[0]}/>
              </Grid>
              <Grid item xs={6}>
              <BenefitComponent 
                benefitComponent={<WorkspacePremiumIcon sx={{
                color: '#F9A020',
              }}/>} 
              data={benefitsData[1]}/>
              </Grid>
              <Grid item xs={6}>
              <BenefitComponent 
                benefitComponent={<WorkspacePremiumIcon sx={{
                color: '#F9A020',
              }}/>} 
              data={benefitsData[2]}/>
              </Grid>
              <Grid item xs={6}>
              <BenefitComponent 
                benefitComponent={<WorkspacePremiumIcon sx={{
                color: '#F9A020',
              }}/>} 
              data={benefitsData[3]}/>
              </Grid>
              </Grid>
            </Box>
        </Box> */}
      </Box>
    </div>
  )
}

export default Benefits
