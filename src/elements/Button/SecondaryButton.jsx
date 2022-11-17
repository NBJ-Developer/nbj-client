import * as React from 'react';
import Button from '@mui/material/Button';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function PrimaryButtons({buttonLabel}) {
  return (
    <Button variant="contained" sx={{ 
      width: {xs: '30vw', md: '170px'},
      height: {xs: '30px', md: '40px'},
      backgroundColor: 'inherit',
      fontFamily: 'inter',
      fontStyle: 'normal',
      fontSize: '20px',
      color: '#F9A020',
      border: '3px solid #F9A020',
      textTransform: 'none',
      borderRadius: '10px 0 10px 0',
      '&:hover': {
        backgroundColor: '#ffffff',
        opacity: [0.9, 0.8, 0.7],
        color: '#F9A020',
        border: '3px solid #F9A020',
      },
      }}>
      {buttonLabel}
      <BsArrowRightCircle style={{marginLeft: '5px'}}/>
    </Button>
  );
}