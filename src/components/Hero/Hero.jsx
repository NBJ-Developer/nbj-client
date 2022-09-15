import * as React from 'react';
import Box from '@mui/material/Box';
import './Hero.css'
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import Line from '../../assets/images/Line 2.png'
import Avatar from '../../assets/images/Vector.png'

export default function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '410px',
        backgroundColor: 'primary.dark',
        background: { 
          xs: 'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)', 
          md: 'linear-gradient(to right,  #ffffff 0%,#ffffff 30%,#000000 30%,#000000 100%)' },
          paddingTop: '20px'
      }}>
          {/* Small Device */}
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
              <p className='big_text'>Big Text <br /> Header 2 lines</p>
              <p className='lorem'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. </p>
              <ContainedButtonsMB />
              <img src={Line} alt="" className='line' />
              <img src={Avatar} alt="" className='avatar' />
         </Box>

         <Box sx={{ display: { xs: 'block', md: 'none' }, margin: '30px 0 0 30px', }}>
            <img src={Avatar} alt="" />
         </Box>

         <Box sx={{ display: { xs: 'block', md: 'none' }, margin: '-25px 0 0 140px', }}>
            <img src={Avatar} alt="" />
         </Box>

         {/* Medium Device */}
      </Box>
  );
}