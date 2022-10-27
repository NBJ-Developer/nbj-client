import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function ContainedButtons({buttonLabel}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className='but' sx={{ 
        height: {xs: '30px', md: '43px'},
        backgroundColor: {xs: '#000000', md: '#ffffff'},
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        color: {xs: '#ffffff', md: '#000000'},
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
          color: '#000000',
          border: '1px solid #000000',
        },
        fontSize: {xs: '10px', md: '16px'}
        }}>
        {buttonLabel}
        <BsArrowRightCircle style={{marginLeft: '10px'}}/>
      </Button>
    </Stack>
  );
}