import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function PrimaryButtons({buttonLabel, buttonDimension}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" sx={{ 
        height: {xs: '30px', md: '43px'},
        backgroundColor: {xs: '#000000', md: '#F9A020'},
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        color: {xs: '#ffffff', md: '#000000'},
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          backgroundColor: 'inherit',
          opacity: [0.9, 0.8, 0.7],
          color: '#F9A020',
          border: '1px solid #F9A020',
        },
        fontSize: {xs: '10px', md: '16px'}
        }}>
        {buttonLabel}
        <BsArrowRightCircle style={{marginLeft: '10px'}}/>
      </Button>
    </Stack>
  );
}