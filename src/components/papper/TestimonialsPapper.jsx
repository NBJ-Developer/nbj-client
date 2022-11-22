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
      fontSize: {xs: '18px', sm: '19px',  md: '20px'},
      lineHeight: {xs: '28px', sm: '32px',  md: '37px'},
    }}>
    {data.label}
    </Typography>
    <Typography sx={{
      mt: 1,
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: {xs: '12px', sm: '13px', md: '14px'},
      lineHeight: {xs: '23px', sm: '25px', md: '27px'},
    }}>
    {data.para}
    </Typography>
    <Typography sx={{
      mt: 1,
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: {xs: '14px', sm: '16px', md: '18px'},
      lineHeight: {xs: '27px', sm: '30px', md: '34px'},
    }}>
    {data.name}
    </Typography>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '500',
      fontSize: {xs: '12px', sm: '13px', md: '14px'},
      lineHeight: {xs: '23px', sm: '25px', md: '27px'},
    }}>
    {data.ocupation}
    </Typography>
  </Paper> 
</Box>
    
  );
}