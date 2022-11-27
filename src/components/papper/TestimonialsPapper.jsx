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
    minHeight: '25vh'
  }}>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '2.5vh',
      lineHeight: '2.6vh',
    }}>
    {data.label}
    </Typography>
    <Typography sx={{
      mt: 2,
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: '1.8vh',
      lineHeight:  '2vh',
    }}>
    {data.para}
    </Typography>
    <Typography sx={{
      mt: 2,
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '1.8vh',
      lineHeight:  '2vh',
    }}>
    {data.name}
    </Typography>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: '1.8vh',
      lineHeight:  '2vh',
    }}>
    {data.ocupation}
    </Typography>
  </Paper> 
</Box>
    
  );
}