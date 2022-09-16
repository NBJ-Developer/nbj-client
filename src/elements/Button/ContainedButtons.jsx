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
        height: {xs: '30px', md: '43px'},
        backgroundColor: {xs: '#000000', md: '#ffffff'},
        color: {xs: '#ffffff', md: '#000000'},
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
        fontSize: {xs: '10px', md: '16px'}
        }}>
        Button
        <BsArrowRightCircle style={{marginLeft: '10px'}}/>
      </Button>
    </Stack>
  );
}