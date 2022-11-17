import Box from '@mui/material/Box'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import React from 'react'
import BenefitComponent from './BenefitComponent'
import benefitsData from './benefitsData';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
function Benefits() {
  return (
    <div>
      <Box sx={{
        marginTop: '60px',
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
            marginTop: '15px',
            display: {xs: 'none', md: 'flex'},
            flexWrap: 'wrap',
            '& > :not(style)': {
              mr: 7,
              mt: 1,
              width: 220,
              height: 169,
            },
          }}
        >
          <BenefitComponent 
          image= {'safety.png'} 
          data={benefitsData[0]}/>
          <BenefitComponent 
          image= {'comfort&privacy.png'} 
          data={benefitsData[1]}/>
          <BenefitComponent 
          image= {'convinience.png'}
          data={benefitsData[2]}/>  
          <BenefitComponent 
          image= {'exellent.png'}
          data={benefitsData[2]}/>           
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
