import Box from '@mui/material/Box'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import React from 'react'
import BenefitComponent from './BenefitComponent'
import benefitsData from './benefitsData';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '../../elements/Slider/slider';
function Benefits() {
  return (
    <div>
      <Box sx={{
        marginTop: '200px',
      }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontSize: '30px',
          fontWeight: 700,
          lineHeight: '35px',
          color: '#434343',
          letterSpacing: '0.08em',
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
            width: '85%',
            mt: 4,
            display: {xs: 'none', md: 'flex'},
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={4}>
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
        <Box sx={{
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
        </Box>
      </Box>
    </div>
  )
}

export default Benefits
