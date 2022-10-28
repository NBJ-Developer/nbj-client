import Box from '@mui/material/Box'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import React from 'react'
import BenefitComponent from './BenefitComponent'
import benefitsData from './benefitsData';
import { Typography } from '@mui/material';

function Benefits() {
  return (
    <div>
      <Box sx={{
        marginTop: '80px',
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
            display: 'flex',
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
          benefitComponent={<WorkspacePremiumIcon sx={{
            color: '#F9A020',
          }}/>} 
          data={benefitsData[0]}/>
          <BenefitComponent 
          benefitComponent={<WorkspacePremiumIcon sx={{
            color: '#F9A020',
          }}/>} 
          data={benefitsData[1]}/>
          <BenefitComponent 
          benefitComponent={<WorkspacePremiumIcon sx={{
            color: '#F9A020',
          }}/>} 
          data={benefitsData[2]}/>            
        </Box>
      </Box>
    </div>
  )
}

export default Benefits
