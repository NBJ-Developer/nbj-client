import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function ContainedButtonsMB() {
  // const isBackgroundBlack = true;
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className='but' sx={{ 
        width: {xs: '30vw', md: '12vw'},
        height: {xs: '30px', md: '48px'},
        backgroundColor: '#000000',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        color: '#ffffff',
        // backgroundColor: isBackgroundBlack ? '#ffffff' : '#000000',
        // color: isBackgroundBlack ? '#000000' : '#ffffff',
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          backgroundColor: '#d9d9d9',
          border: '1px solid #000000',
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