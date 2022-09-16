import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className='but' sx={{ 
        width: {xs: '106px', md: '162px'},
        height: {xs: '30px', md: '48px'},
        backgroundColor: '#000000',
        color: '#ffffff',
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          backgroundColor: '#d9d9d9',
          opacity: [0.9, 0.8, 0.7],
          color: '#000000'
        },
        fontSize: {xs: '10px', md: '16px'}
        }}>
        Button
        <BsArrowRightCircle style={{marginLeft: '10px'}}/>
      </Button>
    </Stack>
  );
}