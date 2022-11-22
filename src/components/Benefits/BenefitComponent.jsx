import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function BenefitComponent({image, data}) {
  return (
<Box sx={{
  width: '100%',
  height: '220px'
  }}>
  <Paper sx={{
  display: 'flex',
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
      fontSize: {xs: '18px', sm: '19px',  md: '20px'},
      lineHeight: {xs: '28px', sm: '32px',  md: '37px'},
      textAlign: 'center',
      marginBottom: '10px',
    }}>
    {data.name}
    </Typography>
    <Typography sx={{
      display: 'block',
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: {xs: '12px', sm: '13px', md: '14px'},
      lineHeight: {xs: '23px', sm: '25px', md: '27px'},
      textAlign: 'center',
    }}>
    {data.para}
    </Typography>
  </Paper>

  {/* <Box sx={{
      display: {xs: 'flex', md: 'none'},
      font: 'Open Sans',
      fontWeight: '600',
      fontSize: '17px',
      lineHeight: '23px',
      marginBottom: '10px',
    }}>
      <Slider slideComponent={
      <Box sx={{
        display: 'flex',
      }}>
        <TaskAltIcon sx={{
        mr: 1,
        color: '#F9A020',
      }}/>
      <Typography sx={{
        font: 'Open Sans',
        fontWeight: '600',
        fontSize: '17px',
        lineHeight: '23px',
        marginBottom: '10px',
      }}>
      {data.name}
      </Typography>
      </Box>
    }/>
  </Box> */}
</Box>
    
  );
}