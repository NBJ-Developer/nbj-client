import * as React from 'react';
import Button from '@mui/material/Button';
import { BsArrowRightCircle } from 'react-icons/bs'
import { Box } from '@mui/material';

export default function PrimaryButtons({ buttonLabel, sectionId, link }) {
  return (
    <Box>
      <Button variant="contained" sx={{ 
        width: {xs: '150px', md: '170px'},
        height: {xs: '30px', md: '40px'},
        backgroundColor: '#F9A020',
        fontFamily: 'inter',
        fontStyle: 'normal',
        fontSize: {xs: '10px', md: '16px'},
        color: '#ffffff',
        textTransform: 'Capitalize',
        borderRadius: '10px 0 10px 0',
        '&:hover': {
          backgroundColor: 'inherit',
          opacity: [0.9, 0.8, 0.7],
          color: '#F9A020',
          border: '3px solid #F9A020',
        },
        }}
        href={sectionId? `#${sectionId}`: `/${link}`}
        >
        {buttonLabel}
        <BsArrowRightCircle style={{marginLeft: '5px'}}/>
      </Button>
          
      </Box>
  );
}