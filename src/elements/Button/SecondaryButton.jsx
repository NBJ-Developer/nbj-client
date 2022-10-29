import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function PrimaryButtons({buttonLabel}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" sx={{ 
        backgroundColor: '#ffffff',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        color: '#F9A020',
        textTransform: 'Capitalize',
        borderRadius: {xs: '7px 0 7px 0', md: '10px 0 10px 0'},
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: 'inherit',
        },
        fontSize: {xs: '10px', md: '16px'}
        }}>
        {buttonLabel}
        <BsArrowRightCircle style={{marginLeft: '10px'}}/>
      </Button>
    </Stack>
  );
}