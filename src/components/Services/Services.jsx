import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServicesCard from './ServicesCard';
import Slider from '../../elements/Slidereffect/Slidereffect'
import { Grid } from '@mui/material';
import { textAlign } from '@mui/system';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const content = [
    {
        label: 'Ground Support',
        imgPath: 'airplain3.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.',
        buttonDisplay: 'primary',
    },
    {
        label: 'Aircraft Charter & Bookings',
        imgPath: 'service1.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.',
        buttonDisplay: 'primary',
    },
    {
        label: 'Maintenance',
        imgPath: 'service2.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.',
        buttonDisplay: 'primary',
    },
    {
        label: 'Wings Inflight',
        imgPath: 'service3.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.',
        buttonDisplay: 'primary',
    },
    ];

export default function Services() {

  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{ 
        display: {xs: 'block', md: 'none'},
        mt: 16,
        width: '100%'
      }}>
        <Slider slideComponent={
        <Typography variant='h1' sx={{
          width: '100%',
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: {xs: '27px', sm: '28px'},
          lineHeight: {xs: '42px', sm: '45px'},
     color: '#434343',
          textAlign: 'center',
        }}>
          OUR
          <span className='span1'>
              SERVICES
          </span> 
          AREAS
        </Typography>
      }/>
        
        <Box sx={{  
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box sx={{  
            width: '65%', 
            mt: 3, 
          }}>
            <Slider slideComponent={
            <ServicesCard content={content[0]}/>
            }/>  
          </Box>
        </Box>
      </Box>

        {/* MEDIUM DEVICE */}
        <Box sx={{    
            display: {xs: 'none', md: 'block'},
            width: '100%',
            marginTop: '180px',
            textAlign: 'center',
        }}>
          <Slider slideComponent={
            <Typography variant='h1' sx={{
              width: '100%',
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '32px',
              lineHeight: '38px',
              textAlign: 'center',
            }} >
                OUR
                <span className='span1'>
                    SERVICES
                </span> 
            </Typography>
          }/>
            
            
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '27px',
                letterSpacing: '0.03em',
                color: '#000000',
                margin: '15px 0'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Box sx={{
              width: '100%',
              px: 6, 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '550px',
            }}>
              <Box>
                <Grid container spacing={1}>
                <Grid item md={3}>
                <Slider slideComponent={<ServicesCard content={content[0]}/>}/>
                </Grid>
                <Grid item md={3}>
              <Slider slideComponent={<ServicesCard content={content[1]}/>}/>
                </Grid>
                <Grid item md={3}>
              <Slider slideComponent={<ServicesCard content={content[2]}/>}/>
                </Grid>
                <Grid item md={3}>
              <Slider slideComponent={<ServicesCard content={content[3]}/>}/>
                </Grid>
              </Grid>
              </Box>
              
            </Box>
        </Box>

    </Box>
  );
}