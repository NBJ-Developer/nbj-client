import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function BenefitComponent({benefitComponent, data}) {
  return (
<Box>
  <Paper sx={{
  padding: '15px 10px',
  display: {xs: 'none', md: 'flex'},
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '220px'
  }}>
    {benefitComponent}
    <Typography sx={{
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '17px',
      textAlign: 'center',
      lineHeight: '23px',
      marginBottom: '10px',
    }}>
    {data.name}
    </Typography>
    <Typography sx={{
      display: {xs: 'none', md: 'block'},
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: '15px',
      textAlign: 'center',
    }}>
    {data.para}
    </Typography>
  </Paper>
   
  <Box sx={{
      display: {xs: 'flex', md: 'none'},
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '17px',
      textAlign: 'center',
      lineHeight: '23px',
      marginBottom: '10px',
    }}>
      <Typography>
      {benefitComponent}
      </Typography>
      <Typography sx={{
        font: 'Open Sans',
        fontWeight: '600',
        fontSize: '17px',
        textAlign: 'center',
        lineHeight: '23px',
        marginBottom: '10px',
      }}>
      {data.name}
      </Typography>
  </Box>
</Box>
    
  );
}