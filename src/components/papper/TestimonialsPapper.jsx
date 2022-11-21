import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function TestimonialsPapper({ data }) {
  return (
<Box>
  <Box sx={{
  mr: 4,
  ml: 4,
  display: 'flex',
  justifyContent: data.left? 'left': 'right',
  }}>
   <Box sx={{
    width: 0,
    height: 0,
    border: '15px solid transparent',
    borderTop: 0,
    borderBottom: '30px solid #ffffff',
  }} /> 
  </Box>
  
  <Paper sx={{
  p: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '220px'
  }}>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '30px',
    }}>
    {data.label}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{
      mt: 1,
      font: 'Open Sans',
    }}>
    {data.para}
    </Typography>
    <Typography sx={{
      mt: 1,
      font: 'Open Sans',
      fontWeight: '500',
      fontSize: {xs: '12px', md: '18px'},
      lineHeight: {xs: '16px', md: '24px'},
    }}>
    {data.name}
    </Typography>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '300',
      fontSize: {xs: '12px', md: '18px'},
      lineHeight: {xs: '16px', md: '24px'},
    }}>
    {data.ocupation}
    </Typography>
  </Paper> 
</Box>
    
  );
}