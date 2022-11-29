import { Box } from '@mui/material';
import React from 'react'
import ServicesLink from '../../components/Services/ServicesLink';

function ServicesNavigations() {
  const linkItem = ['Ground Support', 'Airport Charter & Bookings', 'Crew Services', 'Hospitality Services']
  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 6,
      }}>
        <Box sx={{
          px: 2,
          py: 1,
          width: '80vw',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}>
        {linkItem.map((item, index) => (
          <Box key={index}>
            <ServicesLink linkItem={item}/>
          </Box>
        ))}
        
      </Box>
      </Box>
      
    </div>
  )
}

export default ServicesNavigations
