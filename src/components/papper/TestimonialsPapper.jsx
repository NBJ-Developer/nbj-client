import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function TestimonialsPapper({ data }) {
  return (
<Box>
  <Paper sx={{
  p: 1,
  minHeight: '220px'
  }}>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '17px',
      lineHeight: '23px',
    }}>
    {data.label}
    </Typography>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: '16px',
      textAlign: 'left',
    }}>
    {data.para}
    </Typography>
    <Typography sx={{
      mt: 1,
      font: 'Open Sans',
      fontWeight: '500',
      fontSize: '16px',
    }}>
    {data.name}
    </Typography>
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '300',
      fontSize: '15px',
    }}>
    {data.ocupation}
    </Typography>
  </Paper> 
</Box>
    
  );
}