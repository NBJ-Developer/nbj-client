import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function BenefitComponent({image, data}) {
  return (
<Box>
  <Paper sx={{
  display: {xs: 'none', md: 'flex'},
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 10px',
  height: '220px'
  }}>
    <Box
      component="img"
      sx={{
        overflow: 'hidden',
        borderRadius: '0px 30px 30px 0px',
      }}
      src={image}
      alt={image}
    />
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
      <Box
      component="img"
      sx={{
        height: '70%',
        width: '90%',
        overflow: 'hidden',
        borderRadius: '0px 30px 30px 0px',
      }}
      src={image}
      alt={image}
    />
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