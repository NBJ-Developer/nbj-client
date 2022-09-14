import * as React from 'react';
import Box from '@mui/material/Box';
import './MainBox.css'
import ContainedButtons from '../../elements/Button/ContainedButtons';

export default function MainBox() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '450px',
        backgroundColor: 'primary.dark',
        background: { 
          xs: 'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)', 
          md: 'linear-gradient(to right,  #ffffff 0%,#ffffff 30%,#000000 30%,#000000 100%)' },
          paddingTop: '20px'
      }}>

      <Box
            sx={{ display: { xs: 'block', md: 'none' },
              width: '260px',
              height: '300px',
              backgroundColor: '#d9d9d9',
              borderTopRightRadius: '30px',
              borderBottomRightRadius: '30px',
              paddingLeft: '30px',
              paddingTop: '10px'
            }}>
              <p className='big-text'>Big Text <br /> Header 2 lines</p>
              <p className='lorem'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. </p>
              <ContainedButtons />
            </Box>
      </Box>
  );
}