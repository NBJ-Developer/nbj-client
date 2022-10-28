import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function OrdinaryButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className='but' sx={{ 
        width: {xs: '30vw', md: '12vw'},
        height: {xs: '30px', md: '48px'},
        backgroundColor: '#F9A020',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        color: '#000000',
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          backgroundColor: '#F9A020',
          border: '1px solid #d9d9d9',
          opacity: [0.9, 0.8, 0.7],
          color: '#ffffff'
        },
        fontSize: {xs: '12px', md: '16px'}
        }}>
        Button
      </Button>
    </Stack>
  );
}