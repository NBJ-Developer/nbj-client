import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServicesCard from './ServicesCard';
import Slider from '../../elements/Slidereffect/Slidereffect'
import { Grid } from '@mui/material';

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
            marginTop: '56px',
            width: '100%'
        }}>
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '23px',
                textAlign: 'center',
            }}  variant='h1'>
                OUR
                <span className='span1'>
                    SERVICES
                </span> 
            </Typography>
            <Box sx={{  display: 'flex',
                        justifyContent: 'center'
                    }}>
                <Box sx={{  maxWidth: '55%', 
                            flexGrow: 1,
                            mt: 3, 
                        }}>
                    <ServicesCard content={content}/>
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
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '38px'
            }} variant='h1'>
                OUR
                <span className='span1'>
                    SERVICES
                </span> 
            </Typography>
            
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
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '550px',
            }}>
              <Box>
                <Grid container spacing={4}>
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