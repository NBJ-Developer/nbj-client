import * as React from 'react';
import Box from '@mui/material/Box';
import PrimaryButtons from '../../elements/Button/PrimaryButtons'
import Typography from '@mui/material/Typography';

import image from '../../assets/images/explore.png'
import Slider from '../../elements/Slidereffect/Slidereffect';


export default function CallToAction() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      {/* <Box sx={{  
        display: {xs: 'flex', md: 'none'},
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        background: '#2B47A1',
        marginTop: '50px',
        textAlign: 'center'
      }}>
        <Slider slideComponent={
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#ffffff',
          pt: 3,
        }} variant='h1'>
          READY TO GET STARTED
        </Typography>
      }/>
        
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '22px',
          textAlign: 'center',
          color: '#ffffff',
          py: 3,
        }}>
          Book a flight, charter, get a quote or get in touch?
        </Typography>
        <Box sx={{
          width: '80%',
          mb: 3,
        }}>
          <PrimaryButtons buttonLabel={'Contact us'} />
        </Box>
          
      </Box> */}

      {/* MEDIUM DEVICE */}
      <Box style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }} 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        width: '100vw',
        height: '450px',
        marginTop: '90px'
      }}>
        <Box  
          sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          height: '200px',
        }}>
          <Typography variant='h1' sx={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: {xs: '27px', sm: '28px', md:'50px'},
            lineHeight: {xs: '42px', sm: '45px', md: '80px'},
            color: '#ffffff',
            textAlign: 'center',
          }}>
            Explore Our First Class Experience
          </Typography>

          <Typography variant='h1' sx={{
            font: 'Open Sans',
            fontWeight: '600',
            fontSize: {xs: '18px', sm: '19px',  md: '35px'},
            lineHeight: {xs: '28px', sm: '32px',  md: '50px'},
            color: '#ffffff',
            textAlign: 'center',
          }}>
            Start with NBJ today!
          </Typography>
          <Box>
            <PrimaryButtons buttonLabel={'Button'}/>
          </Box>
          
        </Box>
      </Box>

    </Box>
  );
}