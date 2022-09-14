import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className='but' sx={{ 
        backgroundColor: {xs: '#000000', md: '#ffffff'},
        color: {xs: '#ffffff', md: '#000000'},
        textTransform: 'Capitalize',
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
        }}>
        Button
        <ArrowCircleRightIcon style={{marginLeft: '10px'}}/>
      </Button>
    </Stack>
  );
}